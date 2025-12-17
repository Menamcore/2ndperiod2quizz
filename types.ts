export type QuestionType = 'choice' | 'text' | 'ordered-list' | 'info' | 'spelling-practice';

export interface Question {
  id: string;
  type: QuestionType;
  section: string;
  instructionEn: string;
  instructionAr: string;
  content: string; // The question text or prompt
  options?: string[]; // For multiple choice OR for info list items
  correctAnswers: string[]; // Array of valid answers (for text flexibility)
  hint?: string;
  explanationAr: string; // Static Arabic explanation for corrections
  itemCount?: number; // Number of input boxes for ordered-list OR letters for spelling-practice
}

export interface QuizState {
  answers: Record<string, boolean>; // map id to isCorrect
}
