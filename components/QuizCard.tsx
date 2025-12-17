import React, { useState, useEffect } from 'react';
import { Question } from '../types';
import { CheckCircle, XCircle, HelpCircle, ArrowRight, Lightbulb, BookOpen, Star, Sparkles } from 'lucide-react';
import Explanation from './Explanation';

interface QuizCardProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
  isLast: boolean;
}

const QuizCard: React.FC<QuizCardProps> = ({ question, onAnswer, isLast }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [textInput, setTextInput] = useState('');
  const [listInputs, setListInputs] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Reset state when question changes
  useEffect(() => {
    setSelectedOption(null);
    setTextInput('');
    setIsSubmitted(false);
    setIsCorrect(false);

    // Initialize list inputs based on type
    if (question.type === 'ordered-list' && question.itemCount) {
      setListInputs(new Array(question.itemCount).fill(''));
    } else if (question.type === 'spelling-practice' && question.itemCount) {
       setListInputs(new Array(question.itemCount).fill(''));
    } else {
      setListInputs([]);
    }
  }, [question.id, question.type, question.itemCount]);

  // Auto-advance when correct
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isSubmitted && isCorrect) {
      // Wait 1.5 seconds so the student sees the success message/animation
      timer = setTimeout(() => {
        onAnswer(true);
      }, 1500);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isSubmitted, isCorrect, onAnswer]);

  const normalizeText = (text: string) => {
    let normalized = text.toLowerCase();
    
    // 1. Remove apostrophes (handle "don't" vs "dont" vs "do n't")
    normalized = normalized.replace(/['’]/g, '');

    // 2. Normalize standard contractions to compressed form for consistent comparison
    // "do not" -> "dont" (which matches "don't" after apostrophe removal)
    // "does not" -> "doesnt"
    normalized = normalized.replace(/\bdo not\b/g, 'dont');
    normalized = normalized.replace(/\bdoes not\b/g, 'doesnt');

    // 3. Remove all punctuation (including ?, !, .)
    normalized = normalized.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, ' ');

    // 4. Collapse multiple spaces
    normalized = normalized.replace(/\s+/g, ' ');

    return normalized.trim();
  };

  const handleListInputChange = (index: number, value: string) => {
    const newInputs = [...listInputs];
    newInputs[index] = value;
    setListInputs(newInputs);

    // Auto-focus next input logic
    if (question.type === 'ordered-list') {
        if (value.length === 3 && index < listInputs.length - 1) {
            const nextInput = document.getElementById(`input-${question.id}-${index + 1}`);
            nextInput?.focus();
        }
    } else if (question.type === 'spelling-practice') {
        // For spelling practice, check current letter immediately
        // Get expected letter from the first correct answer (e.g., 'Sat' -> 'S')
        const targetWord = question.correctAnswers[0];
        const targetLetter = targetWord[index] || '';
        
        // If they typed the correct letter (case-insensitive)
        if (value.toLowerCase() === targetLetter.toLowerCase()) {
             // If not last, move focus
             if (index < listInputs.length - 1) {
                 const nextInput = document.getElementById(`input-${question.id}-${index + 1}`);
                 nextInput?.focus();
             } else {
                 // Last letter filled correctly? Auto submit if all previous are also correct
                 // Wait a tiny bit for render
                 setTimeout(() => {
                    const allFilled = newInputs.every(s => s.length > 0);
                    if (allFilled) handleSubmit(newInputs);
                 }, 200);
             }
        }
    }
  };

  const handleListKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Backspace' && !listInputs[index] && index > 0) {
       const prevInput = document.getElementById(`input-${question.id}-${index - 1}`);
       prevInput?.focus();
    }
    if (e.key === 'Enter') {
       if (question.type === 'ordered-list') {
            const isAllFilled = listInputs.every(val => val.trim().length > 0);
            if (isAllFilled) handleSubmit();
       }
    }
  };

  const handleSubmit = (overrideInputs?: string[]) => {
    // Info cards are always correct
    if (question.type === 'info') {
      onAnswer(true);
      return;
    }

    let correct = false;
    const inputsToCheck = overrideInputs || listInputs;

    if (question.type === 'choice') {
      if (!selectedOption) return;
      correct = question.correctAnswers.includes(selectedOption);
    } else if (question.type === 'ordered-list') {
      const joined = inputsToCheck.join(' ');
      if (!joined.trim()) return;
      const normalizedInput = normalizeText(joined);
      correct = question.correctAnswers.some(ans => normalizeText(ans) === normalizedInput);
    } else if (question.type === 'spelling-practice') {
      const joined = inputsToCheck.join('');
      if (joined.length !== question.itemCount) return; // Not full yet
      // Simple exact match check (case insensitive due to normalization logic available if needed, but here we expect 'Sat')
      correct = question.correctAnswers[0].toLowerCase() === joined.toLowerCase();
    } else {
      if (!textInput.trim()) return;
      const normalizedInput = normalizeText(textInput);
      correct = question.correctAnswers.some(ans => normalizeText(ans) === normalizedInput);
    }

    setIsCorrect(correct);
    setIsSubmitted(true);
  };

  const handleNext = () => {
    onAnswer(isCorrect);
  };

  const isButtonDisabled = () => {
    if (question.type === 'info') return false;
    if (question.type === 'choice') return !selectedOption;
    if (question.type === 'ordered-list') return listInputs.some(val => val.trim() === '');
    if (question.type === 'spelling-practice') return listInputs.some(val => val === '');
    return !textInput.trim();
  };

  // Special Render: Custom Explanation Component
  if (question.id === 'learn-do-does') {
    return (
      <div className="w-full flex flex-col items-center">
         <Explanation />
         <div className="w-full max-w-4xl px-4 md:px-8 pb-12">
            <button
              onClick={() => onAnswer(true)}
              className="w-full py-4 text-white font-bold text-xl rounded-xl shadow-lg border-b-4 border-blue-700 bg-primary hover:bg-blue-600 active:translate-y-1 active:border-b-0 transition-all"
            >
              I'm Ready! Start Practice
            </button>
         </div>
      </div>
    );
  }

  // Render Spelling Practice Specific UI
  if (question.type === 'spelling-practice') {
      const targetWord = question.correctAnswers[0]; // e.g., "Sat"
      
      return (
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 max-w-2xl w-full mx-auto border-b-8 border-accent/20">
          <div className="mb-6 text-center">
             <div className="flex items-center justify-center gap-2 mb-2">
                 <Star className="text-yellow-400 fill-current" />
                 <h2 className="text-xl font-bold text-gray-700 uppercase tracking-wider">{question.instructionEn}</h2>
                 <Star className="text-yellow-400 fill-current" />
             </div>
             <p className="text-gray-500 rtl mb-6" dir="rtl">{question.instructionAr}</p>

             {/* Big Word Display */}
             <div className="relative mb-8 p-8 bg-blue-50 rounded-2xl border-2 border-blue-100 overflow-hidden">
                 <span className="text-5xl md:text-6xl font-black text-blue-900 tracking-wide block">
                     {question.content}
                 </span>
                 {/* Highlight the first 3 letters logic visual guide */}
                 <div className="mt-2 text-sm text-blue-400 font-medium">
                     Focus on: <span className="font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">{targetWord}</span>
                 </div>
             </div>

             {/* Boxes */}
             {!isSubmitted ? (
                 <div className="flex justify-center gap-3">
                    {listInputs.map((val, index) => (
                        <input
                            key={index}
                            id={`input-${question.id}-${index}`}
                            type="text"
                            value={val}
                            maxLength={1}
                            onChange={(e) => handleListInputChange(index, e.target.value)}
                            onKeyDown={(e) => handleListKeyDown(e, index)}
                            className={`w-16 h-16 md:w-20 md:h-20 text-center text-4xl font-bold border-4 rounded-xl focus:outline-none transition-all uppercase 
                                ${val.toLowerCase() === targetWord[index].toLowerCase() 
                                    ? 'border-green-400 bg-green-50 text-green-700 scale-105' 
                                    : 'border-gray-300 text-gray-700 focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
                                }`}
                            autoComplete="off"
                            // If previous not filled, disable (optional, but let's keep it open for now)
                        />
                    ))}
                 </div>
             ) : (
                 <div className="animate-fade-in flex flex-col items-center">
                    <div className="flex items-center gap-2 text-green-600 font-bold text-3xl mb-6">
                        <CheckCircle size={40} />
                        <span>Correct!</span>
                    </div>
                    <div className="flex gap-2 mb-6">
                         {targetWord.split('').map((char, i) => (
                             <div key={i} className="w-16 h-16 flex items-center justify-center text-3xl font-bold bg-green-500 text-white rounded-xl shadow-lg">
                                 {char}
                             </div>
                         ))}
                    </div>
                     <button 
                        onClick={handleNext}
                        className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg border-b-4 border-blue-700 hover:bg-blue-600 transition-all flex items-center justify-center gap-2 text-xl"
                        >
                        {isLast ? "Next Section" : "Next Day"} <ArrowRight size={24} />
                    </button>
                 </div>
             )}
          </div>
        </div>
      );
  }

  // Standard Render for other types
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 max-w-2xl w-full mx-auto border-b-8 border-primary/20">
      {/* Header with Instruction */}
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-1 flex items-center gap-2">
          {question.type === 'info' && <BookOpen className="text-secondary" />}
          {question.instructionEn}
        </h2>
        <h3 className="text-lg text-gray-500 font-medium rtl mb-4" dir="rtl">
          {question.instructionAr}
        </h3>
        
        {/* The Question Content */}
        <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-100 text-center">
           <p className="text-2xl md:text-3xl font-bold text-blue-900 leading-relaxed">
             {question.content}
           </p>
        </div>
      </div>

      {/* Inputs */}
      <div className="mb-8">
        {!isSubmitted ? (
          <>
            {question.type === 'info' && question.options ? (
              <div className="space-y-3 mb-6">
                {question.options.map((opt, idx) => (
                  <div key={idx} className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex items-center justify-between px-6">
                     <span className="text-lg md:text-xl font-bold text-gray-700 text-left w-full">{opt}</span>
                     <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">
                        <Sparkles size={16} fill="currentColor" />
                     </span>
                  </div>
                ))}
              </div>
            ) : question.type === 'choice' && question.options ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {question.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSelectedOption(opt)}
                    className={`py-4 px-6 rounded-xl text-xl font-bold transition-all transform active:scale-95 shadow-sm border-b-4
                      ${selectedOption === opt 
                        ? 'bg-primary text-white border-blue-700 shadow-blue-300' 
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                      }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            ) : question.type === 'ordered-list' ? (
              <div className="flex flex-col gap-4">
                 {question.hint && (
                  <p className="text-sm text-secondary font-medium italic flex items-center justify-center gap-1">
                    <HelpCircle size={16} /> Hint: {question.hint}
                  </p>
                )}
                <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                  {listInputs.map((val, index) => (
                    <input
                      key={index}
                      id={`input-${question.id}-${index}`}
                      type="text"
                      value={val}
                      maxLength={3} // Enforce 3 letter constraint visually
                      onChange={(e) => handleListInputChange(index, e.target.value)}
                      onKeyDown={(e) => handleListKeyDown(e, index)}
                      placeholder={`${index + 1}`}
                      className="w-14 h-14 md:w-16 md:h-16 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all uppercase placeholder-gray-300"
                      autoComplete="off"
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                {question.hint && (
                  <p className="text-sm text-secondary font-medium italic flex items-center gap-1">
                    <HelpCircle size={16} /> Hint: {question.hint}
                  </p>
                )}
                <input
                  type="text"
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  placeholder="Type your answer here..."
                  className="w-full p-4 text-xl border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none transition-colors"
                  onKeyDown={(e) => e.key === 'Enter' && textInput && handleSubmit()}
                />
              </div>
            )}
            
            <button
              onClick={() => handleSubmit()}
              disabled={isButtonDisabled()}
              className={`mt-6 w-full py-4 text-white font-bold text-xl rounded-xl shadow-lg border-b-4 active:border-b-0 active:translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed
                ${question.type === 'info' ? 'bg-primary border-blue-700' : 'bg-secondary border-yellow-600'}
              `}
            >
              {question.type === 'info' ? 'I\'m Ready! Start Practice' : 'Check Answer'}
            </button>
          </>
        ) : (
          /* Feedback Section */
          <div className="animate-fade-in">
            <div className={`p-4 rounded-xl border-2 mb-4 flex items-center gap-4 ${isCorrect ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'}`}>
              {isCorrect ? <CheckCircle size={32} className="text-green-500 shrink-0" /> : <XCircle size={32} className="text-red-500 shrink-0" />}
              <div>
                <p className="font-bold text-lg">{isCorrect ? "Great Job!" : "Not quite right."}</p>
                {!isCorrect && (
                  <div className="mt-1">
                    <p className="text-sm">Correct answer:</p>
                    {/* Display the first correct answer option */}
                    <p className="font-bold text-lg">{question.correctAnswers[0]}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Arabic Correction Explanation */}
            {!isCorrect && (
              <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 text-indigo-900 mb-4 rtl" dir="rtl">
                <p className="font-bold flex items-center gap-2 mb-1 text-sm text-indigo-600">
                   <Lightbulb size={16} /> تصحيح:
                </p>
                <p className="font-medium text-lg">
                  {question.explanationAr}
                </p>
              </div>
            )}

            <button 
              onClick={handleNext}
              className="w-full py-3 px-4 bg-primary text-white font-bold rounded-xl shadow-lg border-b-4 border-blue-700 hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
            >
              {isLast ? "Next Section" : "Next Question"} <ArrowRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizCard;