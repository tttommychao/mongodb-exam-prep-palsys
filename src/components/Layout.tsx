import { ReactNode, useState } from 'react';
import { Database, History, BookOpen, User, Edit2, Check } from 'lucide-react';
import { useStore } from '../store/useStore';

interface LayoutProps {
  children: ReactNode;
  activeTab: 'test' | 'history';
  setActiveTab: (tab: 'test' | 'history') => void;
}

export function Layout({ children, activeTab, setActiveTab }: LayoutProps) {
  const { activeProfileId, profiles, selectProfile, updateProfileName } = useStore();
  const [editingProfileId, setEditingProfileId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');

  if (!activeProfileId) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 max-w-2xl w-full">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Database className="w-8 h-8 text-emerald-600" />
            <h1 className="text-2xl font-bold text-slate-900">MongoDB Exam Prep</h1>
          </div>
          <h2 className="text-xl font-medium text-center text-slate-700 mb-8">Select a Save Slot</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.values(profiles).map((profile) => (
              <div 
                key={profile.id}
                className="border border-slate-200 rounded-xl p-6 hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer bg-slate-50 hover:bg-white group relative"
                onClick={() => {
                  if (editingProfileId !== profile.id) {
                    selectProfile(profile.id);
                  }
                }}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-2">
                    <User className="w-6 h-6" />
                  </div>
                  
                  {editingProfileId === profile.id ? (
                    <div className="flex items-center gap-2 w-full" onClick={e => e.stopPropagation()}>
                      <input 
                        type="text" 
                        value={editName}
                        onChange={e => setEditName(e.target.value)}
                        className="w-full text-sm border border-slate-300 rounded px-2 py-1 focus:outline-none focus:border-emerald-500"
                        autoFocus
                        onKeyDown={e => {
                          if (e.key === 'Enter') {
                            updateProfileName(profile.id, editName || `Save Slot ${profile.id}`);
                            setEditingProfileId(null);
                          }
                        }}
                      />
                      <button 
                        onClick={() => {
                          updateProfileName(profile.id, editName || `Save Slot ${profile.id}`);
                          setEditingProfileId(null);
                        }}
                        className="text-emerald-600 hover:text-emerald-700"
                      >
                        <Check className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-slate-900">{profile.name}</h3>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setEditName(profile.name);
                          setEditingProfileId(profile.id);
                        }}
                        className="text-slate-400 hover:text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Edit2 className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                  
                  <div className="text-sm text-slate-500">
                    <p>{profile.testHistory.length} Tests Taken</p>
                    <p>{profile.incorrectQuestionIds.length} Incorrect</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const activeProfile = profiles[activeProfileId];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Database className="w-6 h-6 text-emerald-600" />
            <h1 className="text-xl font-semibold tracking-tight hidden sm:block">MongoDB Exam Prep</h1>
          </div>
          <nav className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => setActiveTab('test')}
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'test' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Practice</span>
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'history' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <History className="w-4 h-4" />
              <span className="hidden sm:inline">History</span>
              {activeProfile.testHistory.length > 0 && (
                <span className="bg-emerald-100 text-emerald-700 py-0.5 px-2 rounded-full text-xs">
                  {activeProfile.testHistory.length}
                </span>
              )}
            </button>
            <div className="h-6 w-px bg-slate-200 mx-1"></div>
            <button
              onClick={() => selectProfile('')} // Clear active profile to show selector
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors"
              title="Switch Profile"
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">{activeProfile.name}</span>
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
