import { Question } from './types';

export const QUESTIONS: Question[] = [
  // ==========================================
  // TOPIC 1: DO / DOES
  // ==========================================
  
  // 1. Learning Stage
  {
    id: 'learn-do-does',
    section: 'Learn: Do/Does',
    type: 'info',
    instructionEn: 'Grammar Rule: Do vs Does',
    instructionAr: 'شرح القاعدة: متى نستخدم Do و Does؟',
    content: 'في زمن الحاضر البسيط (Present Simple)، نختار الفعل المساعد حسب الضمير:',
    options: [
        '🔵 فريق الجمع (Do):',
        '• يأتي مع: I, You, We, They',
        '• مثال: Do you like pizza?',
        '-------------------',
        '🟠 فريق المفرد (Does):',
        '• يأتي مع: He, She, It',
        '• قاعدة مهمة: المفرد يحب حرف "S" (لذلك نختار DoeS).',
        '• مثال: Does he play football?'
    ],
    correctAnswers: [], 
    explanationAr: 'نستخدم Do مع الجمع (I, You, We, They) ونستخدم Does مع المفرد (He, She, It) لأن المفرد يحب الـ S.'
  },

  // 2. Quiz Stage
  {
    id: 'q1-1',
    section: 'Quiz: Do/Does',
    type: 'choice',
    instructionEn: 'Choose (do - does)',
    instructionAr: 'اختر (do - does)',
    content: '_____ I need a ticket?',
    options: ['Do', 'Does'],
    correctAnswers: ['Do'],
    explanationAr: 'نستخدم "Do" مع الضمير (I).'
  },
  {
    id: 'q1-2',
    section: 'Quiz: Do/Does',
    type: 'choice',
    instructionEn: 'Choose (do - does)',
    instructionAr: 'اختر (do - does)',
    content: '_____ you like school?',
    options: ['Do', 'Does'],
    correctAnswers: ['Do'],
    explanationAr: 'نستخدم "Do" مع الضمير (You).'
  },
  {
    id: 'q1-3',
    section: 'Quiz: Do/Does',
    type: 'choice',
    instructionEn: 'Choose (do - does)',
    instructionAr: 'اختر (do - does)',
    content: '_____ he play football?',
    options: ['Do', 'Does'],
    correctAnswers: ['Does'],
    explanationAr: 'نستخدم "Does" مع المفرد الغائب (He).'
  },
  {
    id: 'q1-4',
    section: 'Quiz: Do/Does',
    type: 'choice',
    instructionEn: 'Choose (do - does)',
    instructionAr: 'اختر (do - does)',
    content: '_____ she want to go?',
    options: ['Do', 'Does'],
    correctAnswers: ['Does'],
    explanationAr: 'نستخدم "Does" مع المفرد الغائب (She).'
  },
  {
    id: 'q1-5',
    section: 'Quiz: Do/Does',
    type: 'choice',
    instructionEn: 'Choose (do - does)',
    instructionAr: 'اختر (do - does)',
    content: '_____ it work properly?',
    options: ['Do', 'Does'],
    correctAnswers: ['Does'],
    explanationAr: 'نستخدم "Does" مع المفرد الغائب لغير العاقل (It).'
  },
  {
    id: 'q1-6',
    section: 'Quiz: Do/Does',
    type: 'choice',
    instructionEn: 'Choose (do - does)',
    instructionAr: 'اختر (do - does)',
    content: '_____ we need to go?',
    options: ['Do', 'Does'],
    correctAnswers: ['Do'],
    explanationAr: 'نستخدم "Do" مع الضمير (We).'
  },
  {
    id: 'q1-7',
    section: 'Quiz: Do/Does',
    type: 'choice',
    instructionEn: 'Choose (do - does)',
    instructionAr: 'اختر (do - does)',
    content: '_____ they speak English?',
    options: ['Do', 'Does'],
    correctAnswers: ['Do'],
    explanationAr: 'نستخدم "Do" مع الضمير (They).'
  },

  // ==========================================
  // TOPIC 2: MAKING QUESTIONS
  // ==========================================

  // 2. Quiz Stage
  {
    id: 'q2-1',
    section: 'Quiz: Questions',
    type: 'text',
    instructionEn: 'Change into question',
    instructionAr: 'حول الجملة إلى سؤال',
    content: 'He plays football everyday.',
    correctAnswers: ['Does he play football everyday?', 'Does he play football everyday'],
    hint: 'Start with "Does"... remove "s"',
    explanationAr: 'عند السؤال مع He نبدأ بـ "Does" ويجب أن نحذف حرف "s" من الفعل (Does he play...).'
  },
  {
    id: 'q2-2',
    section: 'Quiz: Questions',
    type: 'text',
    instructionEn: 'Change into question',
    instructionAr: 'حول الجملة إلى سؤال',
    content: 'She speaks English.',
    correctAnswers: ['Does she speak English?', 'Does she speak English'],
    hint: 'Start with "Does"... remove "s"',
    explanationAr: 'عند السؤال مع She نبدأ بـ "Does" ويجب أن نحذف حرف "s" من الفعل (Does she speak...).'
  },
  {
    id: 'q2-3',
    section: 'Quiz: Questions',
    type: 'text',
    instructionEn: 'Change into question',
    instructionAr: 'حول الجملة إلى سؤال',
    content: 'They watch movies.',
    correctAnswers: ['Do they watch movies?', 'Do they watch movies'],
    hint: 'Start with "Do"...',
    explanationAr: 'عند السؤال مع They نبدأ بـ "Do" والفعل يبقى كما هو (Do they watch...).'
  },
  {
    id: 'q2-4',
    section: 'Quiz: Questions',
    type: 'text',
    instructionEn: 'Change into question',
    instructionAr: 'حول الجملة إلى سؤال',
    content: 'You go to school at 7.',
    correctAnswers: ['Do you go to school at 7?', 'Do you go to school at 7'],
    hint: 'Start with "Do"...',
    explanationAr: 'عند السؤال مع You نبدأ بـ "Do" والفعل يبقى كما هو (Do you go...).'
  },

  // ==========================================
  // TOPIC 3: NEGATION
  // ==========================================

  // 2. Quiz Stage
  {
    id: 'q3-1',
    section: 'Quiz: Negation',
    type: 'text',
    instructionEn: 'Negate the following',
    instructionAr: 'قم بنفي الجمل التالية',
    content: 'I like football.',
    correctAnswers: ["I don't like football", "I do not like football", "I don't like football.", "I do not like football."],
    explanationAr: 'للنفي مع "I" نستخدم "don\'t" قبل الفعل.'
  },
  {
    id: 'q3-2',
    section: 'Quiz: Negation',
    type: 'text',
    instructionEn: 'Negate the following',
    instructionAr: 'قم بنفي الجمل التالية',
    content: 'They watch movies.',
    correctAnswers: ["They don't watch movies", "They do not watch movies", "They don't watch movies.", "They do not watch movies."],
    explanationAr: 'للنفي مع "They" نستخدم "don\'t" قبل الفعل.'
  },
  {
    id: 'q3-3',
    section: 'Quiz: Negation',
    type: 'text',
    instructionEn: 'Negate the following',
    instructionAr: 'قم بنفي الجمل التالية',
    content: 'She speaks English.',
    correctAnswers: ["She doesn't speak English", "She does not speak English", "She doesn't speak English.", "She does not speak English."],
    hint: 'Use "doesn\'t" and remove the "s"!',
    explanationAr: 'للنفي مع "She" نستخدم "doesn\'t" ويجب حذف حرف "s" من الفعل.'
  },
  {
    id: 'q3-4',
    section: 'Quiz: Negation',
    type: 'text',
    instructionEn: 'Negate the following',
    instructionAr: 'قم بنفي الجمل التالية',
    content: 'He opens the door.',
    correctAnswers: ["He doesn't open the door", "He does not open the door", "He doesn't open the door.", "He does not open the door."],
    explanationAr: 'للنفي مع "He" نستخدم "doesn\'t" ويجب حذف حرف "s" من الفعل.'
  },

  // ==========================================
  // TOPIC 4: SPORTS
  // ==========================================

  // 1. Learning Stage
  {
    id: 'learn-sports',
    section: 'Learn: Sports',
    type: 'info',
    instructionEn: 'Sports Verbs: Play, Go, Do',
    instructionAr: 'شرح القاعدة: أفعال الرياضة الثلاثة',
    content: 'نستخدم فعلاً محدداً حسب نوع الرياضة:',
    options: [
        '⚽ PLAY (يلعب):',
        '• نستخدمها مع أي رياضة فيها **كرة** أو فريق.',
        '• أمثلة: Football, Tennis, Basketball.',
        '-------------------',
        '🏊 GO (يذهب):',
        '• نستخدمها مع الرياضات التي تنتهي بـ **ing**.',
        '• أمثلة: Swimming, Running, Cycling.',
        '-------------------',
        '🥋 DO (يمارس):',
        '• نستخدمها مع الرياضات **القتالية** أو التمارين الفردية.',
        '• أمثلة: Karate, Judo, Gymnastics.'
    ],
    correctAnswers: [],
    explanationAr: 'Play للكرة، Go للـ ing، و Do للألعاب القتالية.'
  },

  // 2. Quiz Stage
  {
    id: 'q4-1',
    section: 'Quiz: Sports',
    type: 'choice',
    instructionEn: 'Categorize: Do, Play, or Go?',
    instructionAr: 'صنف الرياضة مع do أو play أو go',
    content: 'Tennis',
    options: ['Play', 'Do', 'Go'],
    correctAnswers: ['Play'],
    explanationAr: 'نستخدم "Play" مع الرياضات التي نلعبها بالكرة.'
  },
  {
    id: 'q4-2',
    section: 'Quiz: Sports',
    type: 'choice',
    instructionEn: 'Categorize: Do, Play, or Go?',
    instructionAr: 'صنف الرياضة مع do أو play أو go',
    content: 'Basketball',
    options: ['Play', 'Do', 'Go'],
    correctAnswers: ['Play'],
    explanationAr: 'نستخدم "Play" مع الرياضات التي نلعبها بالكرة.'
  },
  {
    id: 'q4-3',
    section: 'Quiz: Sports',
    type: 'choice',
    instructionEn: 'Categorize: Do, Play, or Go?',
    instructionAr: 'صنف الرياضة مع do أو play أو go',
    content: 'Gymnastics',
    options: ['Play', 'Do', 'Go'],
    correctAnswers: ['Do'],
    explanationAr: 'نستخدم "Do" مع التمارين الرياضية والرياضات الفردية.'
  },
  {
    id: 'q4-4',
    section: 'Quiz: Sports',
    type: 'choice',
    instructionEn: 'Categorize: Do, Play, or Go?',
    instructionAr: 'صنف الرياضة مع do أو play أو go',
    content: 'Football',
    options: ['Play', 'Do', 'Go'],
    correctAnswers: ['Play'],
    explanationAr: 'نستخدم "Play" مع الرياضات التي نلعبها بالكرة.'
  },
  {
    id: 'q4-5',
    section: 'Quiz: Sports',
    type: 'choice',
    instructionEn: 'Categorize: Do, Play, or Go?',
    instructionAr: 'صنف الرياضة مع do أو play أو go',
    content: 'Running',
    options: ['Play', 'Do', 'Go'],
    correctAnswers: ['Go'],
    explanationAr: 'نستخدم "Go" مع الأنشطة التي تنتهي بـ "ing".'
  },
  {
    id: 'q4-6',
    section: 'Quiz: Sports',
    type: 'choice',
    instructionEn: 'Categorize: Do, Play, or Go?',
    instructionAr: 'صنف الرياضة مع do أو play أو go',
    content: 'Rowing',
    options: ['Play', 'Do', 'Go'],
    correctAnswers: ['Go'],
    explanationAr: 'نستخدم "Go" مع الأنشطة التي تنتهي بـ "ing".'
  },
  {
    id: 'q4-7',
    section: 'Quiz: Sports',
    type: 'choice',
    instructionEn: 'Categorize: Do, Play, or Go?',
    instructionAr: 'صنف الرياضة مع do أو play أو go',
    content: 'Swimming',
    options: ['Play', 'Do', 'Go'],
    correctAnswers: ['Go'],
    explanationAr: 'نستخدم "Go" مع الأنشطة التي تنتهي بـ "ing".'
  },
  {
    id: 'q4-8',
    section: 'Quiz: Sports',
    type: 'choice',
    instructionEn: 'Categorize: Do, Play, or Go?',
    instructionAr: 'صنف الرياضة مع do أو play أو go',
    content: 'Boxing',
    options: ['Play', 'Do', 'Go'],
    correctAnswers: ['Do'],
    explanationAr: 'نستخدم "Do" مع الرياضات القتالية.'
  },
  {
    id: 'q4-9',
    section: 'Quiz: Sports',
    type: 'choice',
    instructionEn: 'Categorize: Do, Play, or Go?',
    instructionAr: 'صنف الرياضة مع do أو play أو go',
    content: 'Cycling',
    options: ['Play', 'Do', 'Go'],
    correctAnswers: ['Go'],
    explanationAr: 'نستخدم "Go" مع الأنشطة التي تنتهي بـ "ing".'
  },
  {
    id: 'q4-10',
    section: 'Quiz: Sports',
    type: 'choice',
    instructionEn: 'Categorize: Do, Play, or Go?',
    instructionAr: 'صنف الرياضة مع do أو play أو go',
    content: 'Karate',
    options: ['Play', 'Do', 'Go'],
    correctAnswers: ['Do'],
    explanationAr: 'نستخدم "Do" مع الرياضات القتالية.'
  },

  // ==========================================
  // TOPIC 5: DAYS
  // ==========================================
  
  // 1. Learning Stage (Interactive Spelling)
  {
    id: 'learn-sat',
    section: 'Learn: Days',
    type: 'spelling-practice',
    itemCount: 3,
    instructionEn: 'Learn the day: Saturday',
    instructionAr: 'تعلم كتابة: السبت (Sat)',
    content: 'Saturday',
    correctAnswers: ['Sat'],
    hint: 'First 3 letters: S-a-t',
    explanationAr: 'Sat هي اختصار Saturday.'
  },
  {
    id: 'learn-sun',
    section: 'Learn: Days',
    type: 'spelling-practice',
    itemCount: 3,
    instructionEn: 'Learn the day: Sunday',
    instructionAr: 'تعلم كتابة: الأحد (Sun)',
    content: 'Sunday',
    correctAnswers: ['Sun'],
    hint: 'First 3 letters: S-u-n',
    explanationAr: 'Sun هي اختصار Sunday.'
  },
  {
    id: 'learn-mon',
    section: 'Learn: Days',
    type: 'spelling-practice',
    itemCount: 3,
    instructionEn: 'Learn the day: Monday',
    instructionAr: 'تعلم كتابة: الاثنين (Mon)',
    content: 'Monday',
    correctAnswers: ['Mon'],
    hint: 'First 3 letters: M-o-n',
    explanationAr: 'Mon هي اختصار Monday.'
  },
  {
    id: 'learn-tue',
    section: 'Learn: Days',
    type: 'spelling-practice',
    itemCount: 3,
    instructionEn: 'Learn the day: Tuesday',
    instructionAr: 'تعلم كتابة: الثلاثاء (Tue)',
    content: 'Tuesday',
    correctAnswers: ['Tue'],
    hint: 'First 3 letters: T-u-e',
    explanationAr: 'Tue هي اختصار Tuesday.'
  },
  {
    id: 'learn-wed',
    section: 'Learn: Days',
    type: 'spelling-practice',
    itemCount: 3,
    instructionEn: 'Learn the day: Wednesday',
    instructionAr: 'تعلم كتابة: الأربعاء (Wed)',
    content: 'Wednesday',
    correctAnswers: ['Wed'],
    hint: 'First 3 letters: W-e-d',
    explanationAr: 'Wed هي اختصار Wednesday. حرف d لا ينطق!'
  },
  {
    id: 'learn-thu',
    section: 'Learn: Days',
    type: 'spelling-practice',
    itemCount: 3,
    instructionEn: 'Learn the day: Thursday',
    instructionAr: 'تعلم كتابة: الخميس (Thu)',
    content: 'Thursday',
    correctAnswers: ['Thu'],
    hint: 'First 3 letters: T-h-u',
    explanationAr: 'Thu هي اختصار Thursday.'
  },
  {
    id: 'learn-fri',
    section: 'Learn: Days',
    type: 'spelling-practice',
    itemCount: 3,
    instructionEn: 'Learn the day: Friday',
    instructionAr: 'تعلم كتابة: الجمعة (Fri)',
    content: 'Friday',
    correctAnswers: ['Fri'],
    hint: 'First 3 letters: F-r-i',
    explanationAr: 'Fri هي اختصار Friday.'
  },

  // 2. Quiz Stage (Ordering)
  {
    id: 'q5-1',
    section: 'Quiz: Days',
    type: 'ordered-list',
    itemCount: 7,
    instructionEn: 'Write the 7 days (first 3 letters)',
    instructionAr: 'اكتب أيام الأسبوع السبعة بالترتيب في الصناديق (أول 3 حروف فقط).',
    content: 'Fill in the boxes:',
    correctAnswers: [
        'Mon Tue Wed Thu Fri Sat Sun',
        'Tue Wed Thu Fri Sat Sun Mon',
        'Wed Thu Fri Sat Sun Mon Tue',
        'Thu Fri Sat Sun Mon Tue Wed',
        'Fri Sat Sun Mon Tue Wed Thu',
        'Sat Sun Mon Tue Wed Thu Fri',
        'Sun Mon Tue Wed Thu Fri Sat'
    ],
    hint: '3 letters each (e.g., Mon)',
    explanationAr: 'ترتيب الأيام: Sat, Sun, Mon, Tue, Wed, Thu, Fri.'
  },
  {
    id: 'q5-2',
    section: 'Quiz: Days',
    type: 'ordered-list',
    itemCount: 7,
    instructionEn: 'Write the 7 days (first 3 letters)',
    instructionAr: 'اكتب أيام الأسبوع السبعة بالترتيب في الصناديق (أول 3 حروف فقط).',
    content: 'Practice again!',
    correctAnswers: [
        'Sun Mon Tue Wed Thu Fri Sat',
        'Mon Tue Wed Thu Fri Sat Sun',
        'Tue Wed Thu Fri Sat Sun Mon',
        'Wed Thu Fri Sat Sun Mon Tue',
        'Thu Fri Sat Sun Mon Tue Wed',
        'Fri Sat Sun Mon Tue Wed Thu',
        'Sat Sun Mon Tue Wed Thu Fri',
        'Sun Mon Tue Wed Thu Fri Sat'
    ],
    hint: 'Start with any day!',
    explanationAr: 'ترتيب الأيام: Sun, Mon, Tue, Wed, Thu, Fri, Sat.'
  }
];