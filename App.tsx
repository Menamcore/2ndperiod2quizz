import React, { useState, useMemo } from 'react';
import { QUESTIONS } from './constants';
import QuizCard from './components/QuizCard';
import { Trophy, Play, CheckCircle2, Send, Check, BrainCircuit, Dumbbell, Calendar, PenTool } from 'lucide-react';

const CURRICULUM = [
  {
    title: "Do / Does",
    icon: BrainCircuit,
    color: "bg-blue-100 text-blue-700",
    sections: [
      { id: 'Learn: Do/Does', label: 'Rule', type: 'learn' },
      { id: 'Quiz: Do/Does', label: 'Quiz', type: 'quiz' }
    ]
  },
  {
    title: "Sentences",
    icon: PenTool,
    color: "bg-purple-100 text-purple-700",
    sections: [
      { id: 'Quiz: Questions', label: 'Questions', type: 'quiz' },
      { id: 'Quiz: Negation', label: 'Negation', type: 'quiz' }
    ]
  },
  {
    title: "Sports",
    icon: Dumbbell,
    color: "bg-orange-100 text-orange-700",
    sections: [
      { id: 'Learn: Sports', label: 'Verbs', type: 'learn' },
      { id: 'Quiz: Sports', label: 'Quiz', type: 'quiz' }
    ]
  },
  {
    title: "Days",
    icon: Calendar,
    color: "bg-green-100 text-green-700",
    sections: [
      { id: 'Learn: Days', label: 'Spell', type: 'learn' },
      { id: 'Quiz: Days', label: 'Order', type: 'quiz' }
    ]
  }
];

const App = () => {
  const [started, setStarted] = useState(false);
  
  // Extract all section IDs for sequential navigation
  const allSectionIds = useMemo(() => CURRICULUM.flatMap(g => g.sections.map(s => s.id)), []);
  
  const [activeTab, setActiveTab] = useState(allSectionIds[0]);
  const [completedQuestions, setCompletedQuestions] = useState<Set<string>>(new Set());
  
  // Current question index management per section
  const [sectionIndices, setSectionIndices] = useState<Record<string, number>>(
    allSectionIds.reduce((acc, secId) => ({ ...acc, [secId]: 0 }), {})
  );

  // Form State
  const [studentName, setStudentName] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const currentQuestions = QUESTIONS.filter(q => q.section === activeTab);
  const currentIndex = sectionIndices[activeTab];
  const currentQuestion = currentQuestions[currentIndex];
  
  // Calculate progress for current section
  const progress = ((currentIndex) / currentQuestions.length) * 100;
  
  // Global score
  const totalScore = QUESTIONS.filter(q => completedQuestions.has(q.id)).length;
  const isGlobalFinished = completedQuestions.size === QUESTIONS.length;

  const handleAnswer = (isCorrect: boolean) => {
    // If correct, mark as completed (if not already)
    if (isCorrect) {
      setCompletedQuestions(prev => new Set(prev).add(currentQuestion.id));
    }

    // Move to next question in this section
    if (currentIndex < currentQuestions.length - 1) {
      setSectionIndices(prev => ({ ...prev, [activeTab]: prev[activeTab] + 1 }));
    } else {
      // End of section
      // Find next section index
      const currentSectionIndex = allSectionIds.indexOf(activeTab);
      if (currentSectionIndex < allSectionIds.length - 1) {
         const nextTab = allSectionIds[currentSectionIndex + 1];
         setActiveTab(nextTab);
         // Scroll to top
         window.scrollTo(0, 0);
      }
    }
  };

  const handleTabChange = (sectionId: string) => {
    setActiveTab(sectionId);
    window.scrollTo(0, 0);
  };

  const handleNetlifySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim()) return;

    setSubmissionStatus('submitting');

    const formData = new FormData();
    formData.append('form-name', 'quiz-submission');
    formData.append('studentName', studentName);
    formData.append('score', `${totalScore} / ${QUESTIONS.length}`);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      setSubmissionStatus('success');
    } catch (error) {
      console.error(error);
      setSubmissionStatus('error');
    }
  };

  // Helper to check if a whole section is done
  const isSectionFinished = (secId: string) => {
    const qs = QUESTIONS.filter(q => q.section === secId);
    return qs.length > 0 && qs.every(q => completedQuestions.has(q.id));
  };

  if (!started) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl max-w-lg w-full text-center border-b-8 border-primary">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-6xl">
            🎓
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">English Quiz</h1>
          <h2 className="text-xl text-gray-600 mb-8 font-medium">For 5th Grade Students</h2>
          
          <div className="grid grid-cols-2 gap-3 mb-8">
             {CURRICULUM.map(group => (
                <div key={group.title} className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center text-center">
                  <group.icon className="text-gray-400 mb-2" size={24} />
                  <span className="font-bold text-gray-700 text-sm">{group.title}</span>
                </div>
             ))}
          </div>

          <button 
            onClick={() => setStarted(true)}
            className="w-full py-4 bg-primary text-white text-xl font-bold rounded-xl shadow-lg border-b-4 border-blue-700 hover:bg-blue-600 active:translate-y-1 active:border-b-0 transition-all flex items-center justify-center gap-2"
          >
            <Play fill="currentColor" /> Start Quiz
          </button>
        </div>
      </div>
    );
  }

  // Calculate completion percentage for the active tab for UI
  const sectionCompletedCount = currentQuestions.filter(q => completedQuestions.has(q.id)).length;
  const isSectionComplete = sectionCompletedCount === currentQuestions.length;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Header Navigation */}
      <div className="bg-white shadow-md z-20 sticky top-0">
         {/* Top Bar with Score */}
         <div className="px-4 py-2 border-b border-gray-100 flex items-center justify-between">
            <h1 className="font-bold text-gray-700 text-sm md:text-base hidden xs:block">English Quiz 5th Grade</h1>
            <div className="font-bold text-gray-700 text-sm md:text-base xs:hidden">Eng Quiz</div>
            <div className="flex items-center gap-2 text-xs md:text-sm font-bold bg-blue-50 text-blue-800 px-3 py-1 rounded-full border border-blue-100">
               <Trophy size={14} className="text-yellow-500" fill="currentColor" />
               {totalScore} / {QUESTIONS.length}
            </div>
         </div>

         {/* Navigation Grid */}
         <div className="p-2 grid grid-cols-4 gap-2 bg-slate-50">
             {CURRICULUM.map((group) => (
               <div key={group.title} className="flex flex-col gap-2">
                  <div className="text-[10px] md:text-xs text-center font-bold text-gray-400 uppercase tracking-wider truncate mb-0.5">
                    {group.title}
                  </div>
                  {group.sections.map(section => {
                    const isActive = activeTab === section.id;
                    const isDone = isSectionFinished(section.id);
                    return (
                      <button
                        key={section.id}
                        onClick={() => handleTabChange(section.id)}
                        className={`
                          relative h-10 rounded-lg text-[10px] md:text-xs font-bold leading-tight transition-all border-b-2 active:border-b-0 active:translate-y-[2px]
                          flex items-center justify-center flex-col px-1
                          ${isActive 
                            ? 'bg-white border-blue-600 text-blue-700 ring-2 ring-blue-500 ring-offset-1 z-10' 
                            : 'bg-white border-gray-200 text-gray-500 hover:bg-gray-50 hover:border-gray-300'
                          }
                          ${isDone && !isActive ? 'bg-green-50 border-green-200 text-green-700' : ''}
                        `}
                      >
                         {section.label}
                         {isDone && (
                           <div className="absolute top-0 right-0 -mt-1 -mr-1">
                             <CheckCircle2 size={12} className="text-green-500 bg-white rounded-full" fill="currentColor" />
                           </div>
                         )}
                      </button>
                    );
                  })}
               </div>
             ))}
         </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 max-w-3xl mx-auto w-full p-4 md:p-8 pb-20">
            
            {/* Active Section Title */}
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                {activeTab.split(': ')[1]} 
                <span className="text-slate-400 font-normal text-base ml-2">
                   ({activeTab.startsWith('Learn') ? 'Learn' : 'Quiz'})
                </span>
              </h2>
            </div>

            {/* Section Progress Bar */}
            <div className="mb-6">
                <div className="flex justify-between text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">
                    <span>Progress</span>
                    <span>{currentIndex + 1} / {currentQuestions.length}</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-primary transition-all duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            {isSectionComplete && currentIndex === currentQuestions.length - 1 && completedQuestions.has(currentQuestion.id) ? (
                 <div className="bg-white rounded-2xl shadow-xl p-8 text-center border-b-8 border-green-500/20 animate-fade-in">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Trophy size={40} className="text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Section Complete!</h2>
                    <p className="text-gray-600 mb-6">You have finished all exercises in this section.</p>
                    
                    {isGlobalFinished ? (
                         <div className="p-6 bg-yellow-50 rounded-xl border border-yellow-100 mb-4">
                             <h3 className="text-xl font-bold text-yellow-800 mb-2">🎉 Congratulations!</h3>
                             <p className="text-yellow-700 mb-6">You finished the whole quiz.</p>
                             
                             {/* Netlify Form UI */}
                             {submissionStatus === 'success' ? (
                               <div className="bg-green-100 p-4 rounded-lg flex flex-col items-center">
                                 <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white mb-2">
                                    <Check size={24} />
                                 </div>
                                 <p className="font-bold text-green-800">Sent to teacher!</p>
                                 <p className="font-bold text-green-700 rtl">تم الإرسال للمعلم بنجاح</p>
                                 <button onClick={() => window.location.reload()} className="mt-4 text-sm text-green-700 underline">
                                   Start Over
                                 </button>
                               </div>
                             ) : (
                               <form onSubmit={handleNetlifySubmit} className="max-w-xs mx-auto">
                                 <label className="block text-left text-sm font-bold text-gray-700 mb-1">
                                    Student Name / اسم الطالب
                                 </label>
                                 <input 
                                   type="text" 
                                   name="studentName"
                                   required
                                   value={studentName}
                                   onChange={(e) => setStudentName(e.target.value)}
                                   placeholder="Ahmed..."
                                   className="w-full p-3 border-2 border-gray-300 rounded-lg mb-3 focus:border-secondary focus:outline-none"
                                 />
                                 <button 
                                  type="submit"
                                  disabled={submissionStatus === 'submitting'}
                                  className="w-full py-3 bg-secondary text-white font-bold rounded-lg shadow hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2"
                                 >
                                   {submissionStatus === 'submitting' ? 'Sending...' : 'Send to Teacher / إرسال'}
                                   <Send size={18} />
                                 </button>
                               </form>
                             )}
                         </div>
                    ) : (
                         <div className="space-y-4">
                           <p className="text-sm text-gray-500">Next Up:</p>
                           {(() => {
                             const currentSectionIndex = allSectionIds.indexOf(activeTab);
                             if (currentSectionIndex < allSectionIds.length - 1) {
                               const nextTabId = allSectionIds[currentSectionIndex + 1];
                               // Find group and section label
                               const nextGroup = CURRICULUM.find(g => g.sections.some(s => s.id === nextTabId));
                               const nextSection = nextGroup?.sections.find(s => s.id === nextTabId);
                               
                               return (
                                 <button 
                                  onClick={() => handleTabChange(nextTabId)}
                                  className="mx-auto px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-lg border-b-4 border-blue-700 hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
                                 >
                                   Continue to {nextSection?.label} <Play size={16} fill="currentColor" />
                                 </button>
                               )
                             }
                             return null;
                           })()}
                         </div>
                    )}
                 </div>
            ) : (
                <QuizCard 
                    question={currentQuestion} 
                    onAnswer={handleAnswer} 
                    isLast={currentIndex === currentQuestions.length - 1}
                />
            )}
      </div>
    </div>
  );
};

export default App;