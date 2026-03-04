import { useStore } from '../store/useStore';
import { Trash2, Calendar, CheckCircle2, XCircle } from 'lucide-react';

export function HistoryView() {
  const { activeProfileId, profiles, clearHistory } = useStore();
  
  if (!activeProfileId) return null;
  
  const activeProfile = profiles[activeProfileId];
  const testHistory = activeProfile.testHistory;

  if (testHistory.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-20 h-20 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mb-6">
          <Calendar className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">No History Yet</h2>
        <p className="text-slate-600 max-w-md">
          Take a practice test to see your results and track your progress over time.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Test History</h2>
        <button
          onClick={clearHistory}
          className="flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 px-3 py-2 rounded-md transition-colors"
        >
          <Trash2 className="w-4 h-4" />
          Clear History
        </button>
      </div>

      <div className="space-y-4">
        {testHistory.map((record) => {
          const date = new Date(record.date);
          const percentage = Math.round((record.score / record.total) * 100);
          
          return (
            <div key={record.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span className="text-sm font-medium text-slate-600">
                    {date.toLocaleDateString()} at {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-emerald-600">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="font-medium">{record.score} Correct</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-red-600">
                    <XCircle className="w-4 h-4" />
                    <span className="font-medium">{record.total - record.score} Incorrect</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 sm:border-l sm:border-slate-200 sm:pl-6">
                <div className="text-right">
                  <div className="text-sm text-slate-500 mb-0.5">Score</div>
                  <div className="text-xl font-bold text-slate-900">{record.score}/{record.total}</div>
                </div>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 ${
                  percentage >= 80 ? 'border-emerald-500 text-emerald-600' :
                  percentage >= 60 ? 'border-amber-500 text-amber-600' :
                  'border-red-500 text-red-600'
                }`}>
                  <span className="text-lg font-bold">{percentage}%</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
