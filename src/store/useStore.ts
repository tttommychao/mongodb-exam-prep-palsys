import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Question, Option } from '../utils/parser';
import { allQuestions } from '../data/questions';

export interface TestRecord {
  id: string;
  date: string;
  score: number;
  total: number;
  incorrectQuestionIds: string[];
}

export interface Profile {
  id: string;
  name: string;
  testHistory: TestRecord[];
  incorrectQuestionIds: string[];
}

interface AppState {
  questions: Question[];
  
  activeProfileId: string | null;
  profiles: Record<string, Profile>;
  
  // Current Test State
  currentTestQuestions: Question[];
  currentQuestionIndex: number;
  selectedOptions: Record<string, string[]>; // questionId -> selected option ids
  isSubmitted: boolean;
  
  // Actions
  selectProfile: (profileId: string) => void;
  updateProfileName: (profileId: string, name: string) => void;
  startNewTest: (mode: 'random' | 'review') => void;
  selectOption: (questionId: string, optionId: string, isMultipleChoice: boolean) => void;
  submitTest: () => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  clearHistory: () => void;
  endCurrentTest: () => void;
}

// Helper to shuffle array
function shuffle<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      questions: allQuestions,
      
      activeProfileId: null,
      profiles: {
        '1': { id: '1', name: 'Save Slot 1', testHistory: [], incorrectQuestionIds: [] },
        '2': { id: '2', name: 'Save Slot 2', testHistory: [], incorrectQuestionIds: [] },
        '3': { id: '3', name: 'Save Slot 3', testHistory: [], incorrectQuestionIds: [] },
      },
      
      currentTestQuestions: [],
      currentQuestionIndex: 0,
      selectedOptions: {},
      isSubmitted: false,
      
      selectProfile: (profileId) => {
        set({ 
          activeProfileId: profileId,
          currentTestQuestions: [],
          currentQuestionIndex: 0,
          selectedOptions: {},
          isSubmitted: false
        });
      },
      
      updateProfileName: (profileId, name) => {
        set((state) => ({
          profiles: {
            ...state.profiles,
            [profileId]: {
              ...state.profiles[profileId],
              name
            }
          }
        }));
      },

      startNewTest: (mode) => {
        const { questions, activeProfileId, profiles } = get();
        if (!activeProfileId) return;
        
        const profile = profiles[activeProfileId];
        const incorrectQuestionIds = profile.incorrectQuestionIds;
        
        let pool = [...questions];
        
        if (mode === 'review' && incorrectQuestionIds.length > 0) {
          pool = questions.filter(q => incorrectQuestionIds.includes(q.id));
        }
        
        // Shuffle pool and pick up to 10
        let selectedQuestions = shuffle(pool).slice(0, 10);
        
        // Shuffle options for each selected question
        selectedQuestions = selectedQuestions.map(q => ({
          ...q,
          options: shuffle(q.options)
        }));
        
        set({
          currentTestQuestions: selectedQuestions,
          currentQuestionIndex: 0,
          selectedOptions: {},
          isSubmitted: false
        });
      },
      
      selectOption: (questionId, optionId, isMultipleChoice) => {
        if (get().isSubmitted) return;
        
        set((state) => {
          const currentSelected = state.selectedOptions[questionId] || [];
          let newSelected: string[];
          
          if (isMultipleChoice) {
            if (currentSelected.includes(optionId)) {
              newSelected = currentSelected.filter(id => id !== optionId);
            } else {
              newSelected = [...currentSelected, optionId];
            }
          } else {
            newSelected = [optionId];
          }
          
          return {
            selectedOptions: {
              ...state.selectedOptions,
              [questionId]: newSelected
            }
          };
        });
      },
      
      submitTest: () => {
        const { currentTestQuestions, selectedOptions, activeProfileId, profiles } = get();
        if (!activeProfileId) return;
        
        const profile = profiles[activeProfileId];
        
        let correctCount = 0;
        const newIncorrectIds: string[] = [];
        
        currentTestQuestions.forEach(q => {
          const selected = selectedOptions[q.id] || [];
          const correctOptions = q.options.filter(o => o.isCorrect).map(o => o.id);
          
          const isCorrect = 
            selected.length === correctOptions.length &&
            selected.every(id => correctOptions.includes(id));
            
          if (isCorrect) {
            correctCount++;
          } else {
            newIncorrectIds.push(q.id);
          }
        });
        
        const newRecord: TestRecord = {
          id: Date.now().toString(),
          date: new Date().toISOString(),
          score: correctCount,
          total: currentTestQuestions.length,
          incorrectQuestionIds: newIncorrectIds
        };
        
        // Update incorrect question IDs pool
        // Remove those that were answered correctly this time
        let updatedIncorrectIds = [...profile.incorrectQuestionIds];
        currentTestQuestions.forEach(q => {
          if (!newIncorrectIds.includes(q.id)) {
            updatedIncorrectIds = updatedIncorrectIds.filter(id => id !== q.id);
          }
        });
        // Add new incorrect ones
        newIncorrectIds.forEach(id => {
          if (!updatedIncorrectIds.includes(id)) {
            updatedIncorrectIds.push(id);
          }
        });
        
        set((state) => ({
          isSubmitted: true,
          profiles: {
            ...state.profiles,
            [activeProfileId]: {
              ...profile,
              testHistory: [newRecord, ...profile.testHistory],
              incorrectQuestionIds: updatedIncorrectIds
            }
          }
        }));
      },
      
      nextQuestion: () => {
        const { currentQuestionIndex, currentTestQuestions } = get();
        if (currentQuestionIndex < currentTestQuestions.length - 1) {
          set({ currentQuestionIndex: currentQuestionIndex + 1 });
        }
      },
      
      prevQuestion: () => {
        const { currentQuestionIndex } = get();
        if (currentQuestionIndex > 0) {
          set({ currentQuestionIndex: currentQuestionIndex - 1 });
        }
      },
      
      clearHistory: () => {
        const { activeProfileId, profiles } = get();
        if (!activeProfileId) return;
        
        set((state) => ({
          profiles: {
            ...state.profiles,
            [activeProfileId]: {
              ...profiles[activeProfileId],
              testHistory: [],
              incorrectQuestionIds: []
            }
          }
        }));
      },
      
      endCurrentTest: () => {
        set({
          currentTestQuestions: [],
          currentQuestionIndex: 0,
          selectedOptions: {},
          isSubmitted: false
        });
      }
    }),
    {
      name: 'mongodb-exam-storage',
      partialize: (state) => ({
        activeProfileId: state.activeProfileId,
        profiles: state.profiles,
        // Keep these for migration
        testHistory: (state as any).testHistory,
        incorrectQuestionIds: (state as any).incorrectQuestionIds
      }),
      merge: (persistedState: any, currentState) => {
        if (!persistedState) return currentState;
        
        // Migration from old state
        if (persistedState.testHistory && !persistedState.profiles) {
          return {
            ...currentState,
            activeProfileId: '1',
            profiles: {
              '1': { id: '1', name: 'Save Slot 1', testHistory: persistedState.testHistory, incorrectQuestionIds: persistedState.incorrectQuestionIds || [] },
              '2': { id: '2', name: 'Save Slot 2', testHistory: [], incorrectQuestionIds: [] },
              '3': { id: '3', name: 'Save Slot 3', testHistory: [], incorrectQuestionIds: [] },
            }
          };
        }
        
        return { ...currentState, ...persistedState };
      }
    }
  )
);
