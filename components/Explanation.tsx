import React from 'react';

const Explanation: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in pb-4">
      {/* Intro Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <h2 className="text-3xl font-bold text-indigo-700 mb-4">The Verb "To Do"</h2>
        
        <div className="space-y-4">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <p className="text-lg text-slate-700 leading-relaxed mb-2">
              We use <strong>to do</strong> and <strong>does</strong> in Present Simple. It is very important for <strong>questions</strong> and <strong>negatives</strong>.
            </p>
            <p className="text-lg text-slate-600 font-arabic text-right leading-relaxed" dir="rtl">
              نستخدم <strong>do</strong> و <strong>does</strong> في الزمن المضارع البسيط. هذا الفعل مهم جداً لتكوين <strong>الأسئلة</strong> و <strong>النفي</strong>.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* DO Section */}
          <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100 relative overflow-hidden group hover:border-indigo-300 transition-colors">
             <div className="absolute top-0 right-0 bg-indigo-200 text-indigo-800 text-xs font-bold px-3 py-1 rounded-bl-lg uppercase">Group 1</div>
            <h3 className="text-2xl font-bold text-indigo-900 mb-1">DO</h3>
            <p className="text-indigo-700 mb-4 text-sm font-arabic text-right" dir="rtl">تستخدم مع الضمائر التالية:</p>
            
            <ul className="space-y-3">
              {[
                { en: 'I', ar: 'أنا' },
                { en: 'You', ar: 'أنت / أنتم' },
                { en: 'We', ar: 'نحن' },
                { en: 'They', ar: 'هم' }
              ].map((pronoun) => (
                <li key={pronoun.en} className="flex items-center justify-between bg-white/60 p-2 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500 font-medium w-12">{pronoun.en}</span>
                    <span className="font-bold text-indigo-700">do</span>
                  </div>
                  <span className="text-xs text-slate-400 font-arabic">{pronoun.ar}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DOES Section */}
          <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100 relative overflow-hidden group hover:border-emerald-300 transition-colors">
            <div className="absolute top-0 right-0 bg-emerald-200 text-emerald-800 text-xs font-bold px-3 py-1 rounded-bl-lg uppercase">Group 2</div>
            <h3 className="text-2xl font-bold text-emerald-900 mb-1">DOES</h3>
            <p className="text-emerald-700 mb-4 text-sm font-arabic text-right" dir="rtl">تستخدم مع الضمائر التالية (المفرد الغائب):</p>
            
            <ul className="space-y-3">
               {[
                { en: 'He', ar: 'هو' },
                { en: 'She', ar: 'هي' },
                { en: 'It', ar: 'هو/هي (لغير العاقل)' }
              ].map((pronoun) => (
                <li key={pronoun.en} className="flex items-center justify-between bg-white/60 p-2 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500 font-medium w-12">{pronoun.en}</span>
                    <span className="font-bold text-emerald-700">does</span>
                  </div>
                  <span className="text-xs text-slate-400 font-arabic">{pronoun.ar}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Usage Rules */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <h3 className="text-2xl font-bold text-slate-800 mb-6">Rules & Usage <span className="text-lg font-normal text-slate-400 ml-2 font-arabic">القواعد والاستخدام</span></h3>
        
        <div className="space-y-8">
          {/* Negative Rule */}
          <div className="flex flex-col md:flex-row gap-6">
             <div className="md:w-1/3 shrink-0">
                <div className="bg-red-50 text-red-900 px-4 py-3 rounded-lg border border-red-100">
                    <h4 className="font-bold text-lg mb-1">Negative (No)</h4>
                    <p className="font-arabic text-sm text-red-700" dir="rtl">النفي</p>
                </div>
             </div>
             <div className="flex-1 space-y-4">
                <div>
                    <p className="text-slate-700 mb-1 font-medium">Add <span className="text-red-600 font-bold">not</span> after do/does.</p>
                    <p className="text-slate-500 text-sm font-arabic text-right" dir="rtl">نضيف كلمة <strong>not</strong> بعد do أو does.</p>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-lg font-mono text-sm border border-slate-200">
                    <div className="mb-2">Subject + do/does + not + Verb</div>
                    <div className="h-px bg-slate-200 my-2"></div>
                    <div className="flex justify-between items-center text-slate-600">
                         <span>I <span className="font-bold text-red-600">do not</span> play.</span>
                         <span className="text-xs text-slate-400 font-arabic">أنا لا ألعب</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-600 mt-1">
                         <span>He <span className="font-bold text-red-600">does not</span> play.</span>
                         <span className="text-xs text-slate-400 font-arabic">هو لا يلعب</span>
                    </div>
                </div>
             </div>
          </div>

          <div className="h-px bg-slate-100"></div>

          {/* Question Rule */}
          <div className="flex flex-col md:flex-row gap-6">
             <div className="md:w-1/3 shrink-0">
                <div className="bg-purple-50 text-purple-900 px-4 py-3 rounded-lg border border-purple-100">
                    <h4 className="font-bold text-lg mb-1">Questions (?)</h4>
                    <p className="font-arabic text-sm text-purple-700" dir="rtl">السؤال</p>
                </div>
             </div>
             <div className="flex-1 space-y-4">
                <div>
                    <p className="text-slate-700 mb-1 font-medium">Start with <span className="text-purple-600 font-bold">Do</span> or <span className="text-purple-600 font-bold">Does</span>.</p>
                    <p className="text-slate-500 text-sm font-arabic text-right" dir="rtl">نبدأ الجملة بـ <strong>Do</strong> أو <strong>Does</strong>.</p>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-lg font-mono text-sm border border-slate-200">
                    <div className="mb-2">Do/Does + Subject + Verb?</div>
                    <div className="h-px bg-slate-200 my-2"></div>
                    <div className="flex justify-between items-center text-slate-600">
                         <span><span className="font-bold text-purple-600">Do</span> you play?</span>
                         <span className="text-xs text-slate-400 font-arabic">هل تلعب؟</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-600 mt-1">
                         <span><span className="font-bold text-purple-600">Does</span> she play?</span>
                         <span className="text-xs text-slate-400 font-arabic">هل هي تلعب؟</span>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explanation;