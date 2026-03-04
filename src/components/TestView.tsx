import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, RotateCcw, CheckCircle2, XCircle, ArrowRight, ArrowLeft, Send, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useStore } from '../store/useStore';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function TestView() {
  const {
    questions,
    activeProfileId,
    profiles,
    currentTestQuestions,
    currentQuestionIndex,
    selectedOptions,
    isSubmitted,
    startNewTest,
    selectOption,
    submitTest,
    nextQuestion,
    prevQuestion
  } = useStore();

  const [showCongrats, setShowCongrats] = useState(false);

  if (!activeProfileId) return null;
  
  const activeProfile = profiles[activeProfileId];
  const incorrectQuestionIds = activeProfile.incorrectQuestionIds;

  const handleFinishTest = () => {
    setShowCongrats(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#10b981', '#3b82f6', '#f59e0b']
    });
    
    setTimeout(() => {
      window.open('https://learn.mongodb.com/learn/course/database-administrator-certification-exam/purchase-schedule-your-certification/links?client=customer', '_blank');
    }, 1500);
  };

  if (currentTestQuestions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
          <BookOpen className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Ready to Practice?</h2>
        <p className="text-slate-600 mb-8 max-w-md">
          Test your knowledge with 10 random questions from the MongoDB certification exam question bank.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => startNewTest('random')}
            className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-medium transition-colors shadow-sm"
          >
            <Play className="w-5 h-5" />
            Start New Test
          </button>
          
          {incorrectQuestionIds.length > 0 && (
            <button
              onClick={() => startNewTest('review')}
              className="flex items-center justify-center gap-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 px-6 py-3 rounded-xl font-medium transition-colors shadow-sm"
            >
              <RotateCcw className="w-5 h-5" />
              Review Incorrect ({incorrectQuestionIds.length})
            </button>
          )}
        </div>
      </div>
    );
  }

  const question = currentTestQuestions[currentQuestionIndex];
  const selected = selectedOptions[question.id] || [];
  const isLastQuestion = currentQuestionIndex === currentTestQuestions.length - 1;
  const allAnswered = currentTestQuestions.every(q => (selectedOptions[q.id] || []).length > 0);

  return (
    <div className="max-w-3xl mx-auto">
      {showCongrats && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md w-full border border-emerald-100 relative"
          >
            <button 
              onClick={() => setShowCongrats(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-full p-1 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Congratulations!</h2>
            <p className="text-slate-600 mb-6">
              You have successfully answered all questions in the bank correctly. You are ready for the certification exam!
            </p>
            <p className="text-sm text-slate-500 mb-8">
              A new tab will open shortly with the registration page.
            </p>
            
            <button
              onClick={() => {
                setShowCongrats(false);
                startNewTest('random');
              }}
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-medium transition-colors shadow-sm"
            >
              <Play className="w-5 h-5" />
              Start Another Test
            </button>
          </motion.div>
        </div>
      )}

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm font-medium text-slate-500 mb-2">
          <span>Question {currentQuestionIndex + 1} of {currentTestQuestions.length}</span>
          <span>{Math.round(((currentQuestionIndex + 1) / currentTestQuestions.length) * 100)}%</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2.5">
          <div 
            className="bg-emerald-500 h-2.5 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${((currentQuestionIndex + 1) / currentTestQuestions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-6">
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 bg-slate-200 px-2.5 py-1 rounded-md">
            {question.category}
          </span>
          {question.isMultipleChoice && (
            <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
              Multiple Choice
            </span>
          )}
        </div>
        
        <div className="p-6 sm:p-8">
          <div className="overflow-x-auto mb-8 pb-2">
            <h3 className="text-lg sm:text-xl font-medium text-slate-900 whitespace-pre-wrap">
              {question.text}
            </h3>
          </div>

          {isSubmitted && (
            <div className={cn(
              "mb-6 p-4 rounded-xl flex items-center gap-3 border",
              (() => {
                const correctOptions = question.options.filter(o => o.isCorrect).map(o => o.id);
                const isQuestionCorrect = selected.length === correctOptions.length && selected.every(id => correctOptions.includes(id));
                return isQuestionCorrect 
                  ? "bg-emerald-50 text-emerald-800 border-emerald-200" 
                  : "bg-red-50 text-red-800 border-red-200";
              })()
            )}>
              {(() => {
                const correctOptions = question.options.filter(o => o.isCorrect).map(o => o.id);
                const isQuestionCorrect = selected.length === correctOptions.length && selected.every(id => correctOptions.includes(id));
                return isQuestionCorrect 
                  ? <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" /> 
                  : <XCircle className="w-6 h-6 text-red-600 shrink-0" />;
              })()}
              <span className="font-medium">
                {(() => {
                  const correctOptions = question.options.filter(o => o.isCorrect).map(o => o.id);
                  const isQuestionCorrect = selected.length === correctOptions.length && selected.every(id => correctOptions.includes(id));
                  return isQuestionCorrect 
                    ? "Correct!" 
                    : (question.isMultipleChoice ? "Incorrect. You must select all correct options." : "Incorrect.");
                })()}
              </span>
            </div>
          )}

          <div className="space-y-3">
            {question.options.map((option) => {
              const isSelected = selected.includes(option.id);
              
              let stateClass = "border-slate-200 hover:border-emerald-300 hover:bg-emerald-50";
              let icon = null;

              if (isSelected) {
                stateClass = "border-emerald-500 bg-emerald-50 ring-1 ring-emerald-500";
              }

              if (isSubmitted) {
                if (option.isCorrect) {
                  stateClass = "border-emerald-500 bg-emerald-50 text-emerald-900";
                  icon = <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />;
                } else if (isSelected && !option.isCorrect) {
                  stateClass = "border-red-300 bg-red-50 text-red-900";
                  icon = <XCircle className="w-5 h-5 text-red-500 shrink-0" />;
                } else {
                  stateClass = "border-slate-200 opacity-60";
                }
              }

              return (
                <div key={option.id} className="space-y-2">
                  <button
                    onClick={() => selectOption(question.id, option.id, question.isMultipleChoice)}
                    disabled={isSubmitted}
                    className={cn(
                      "w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 flex items-start gap-4",
                      stateClass,
                      isSubmitted && "cursor-default"
                    )}
                  >
                    <div className={cn(
                      "w-6 h-6 rounded flex items-center justify-center border shrink-0 mt-0.5 transition-colors",
                      question.isMultipleChoice ? "rounded-md" : "rounded-full",
                      isSelected && !isSubmitted ? "bg-emerald-500 border-emerald-500" : "border-slate-300 bg-white",
                      isSubmitted && option.isCorrect && "bg-emerald-500 border-emerald-500",
                      isSubmitted && isSelected && !option.isCorrect && "bg-red-500 border-red-500"
                    )}>
                      {(isSelected || (isSubmitted && option.isCorrect)) && (
                        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      )}
                    </div>
                    <div className="flex-1 overflow-x-auto pb-1">
                      <span className="text-slate-700 leading-relaxed whitespace-pre-wrap">{option.text}</span>
                    </div>
                    {icon}
                  </button>
                  
                  <AnimatePresence>
                    {isSubmitted && option.explanation && (option.isCorrect || isSelected) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className={cn(
                          "px-5 py-3 rounded-lg text-sm ml-10 border",
                          option.isCorrect ? "bg-emerald-50 border-emerald-100 text-emerald-800" : "bg-red-50 border-red-100 text-red-800"
                        )}
                      >
                        <span className="font-semibold mr-2">{option.isCorrect ? 'Explanation:' : 'Why incorrect:'}</span>
                        {option.explanation}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between">
        <button
          onClick={prevQuestion}
          disabled={currentQuestionIndex === 0}
          className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-slate-600 hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Previous
        </button>

        {!isSubmitted ? (
          isLastQuestion ? (
            <button
              onClick={submitTest}
              disabled={!allAnswered}
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
            >
              <Send className="w-4 h-4" />
              Submit Test
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-slate-600 hover:bg-slate-200 transition-colors"
            >
              Next
              <ArrowRight className="w-4 h-4" />
            </button>
          )
        ) : (
          isLastQuestion ? (
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => startNewTest('random')}
                className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-medium bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-sm"
              >
                <Play className="w-4 h-4" />
                Start Another Test
              </button>
              {incorrectQuestionIds.length > 0 ? (
                <button
                  onClick={() => startNewTest('review')}
                  className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-medium bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
                >
                  <RotateCcw className="w-4 h-4" />
                  Review Incorrect ({incorrectQuestionIds.length})
                </button>
              ) : (
                <button
                  onClick={handleFinishTest}
                  className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-sm"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Finish Test
                </button>
              )}
            </div>
          ) : (
            <button
              onClick={nextQuestion}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-slate-600 hover:bg-slate-200 transition-colors"
            >
              Next
              <ArrowRight className="w-4 h-4" />
            </button>
          )
        )}
      </div>

      {/* Results Summary (if submitted) */}
      {isSubmitted && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 bg-white p-6 rounded-2xl shadow-sm border border-slate-200"
        >
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Test Results</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
              <div className="text-sm text-slate-500 mb-1">Score</div>
              <div className="text-2xl font-bold text-slate-900">
                {currentTestQuestions.filter(q => {
                  const sel = selectedOptions[q.id] || [];
                  const cor = q.options.filter(o => o.isCorrect).map(o => o.id);
                  return sel.length === cor.length && sel.every(id => cor.includes(id));
                }).length} / {currentTestQuestions.length}
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
              <div className="text-sm text-slate-500 mb-1">Percentage</div>
              <div className="text-2xl font-bold text-indigo-600">
                {Math.round((currentTestQuestions.filter(q => {
                  const sel = selectedOptions[q.id] || [];
                  const cor = q.options.filter(o => o.isCorrect).map(o => o.id);
                  return sel.length === cor.length && sel.every(id => cor.includes(id));
                }).length / currentTestQuestions.length) * 100)}%
              </div>
            </div>
            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100 text-center">
              <div className="text-sm text-emerald-600 mb-1">Correct</div>
              <div className="text-2xl font-bold text-emerald-700">
                {currentTestQuestions.filter(q => {
                  const sel = selectedOptions[q.id] || [];
                  const cor = q.options.filter(o => o.isCorrect).map(o => o.id);
                  return sel.length === cor.length && sel.every(id => cor.includes(id));
                }).length}
              </div>
            </div>
            <div className="bg-red-50 p-4 rounded-xl border border-red-100 text-center">
              <div className="text-sm text-red-600 mb-1">Incorrect</div>
              <div className="text-2xl font-bold text-red-700">
                {currentTestQuestions.filter(q => {
                  const sel = selectedOptions[q.id] || [];
                  const cor = q.options.filter(o => o.isCorrect).map(o => o.id);
                  return !(sel.length === cor.length && sel.every(id => cor.includes(id)));
                }).length}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

function BookOpen(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}
