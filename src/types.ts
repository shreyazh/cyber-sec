export interface UserData {
  pin: string;
  handle: string;
  level: number;
  totalScore: number;
  completedModules: string[];
  badges: string[];
  createdAt: string;
}

export interface LearningModuleData {
  id: string;
  title: string;
  description: string;
  difficulty: 'ROOKIE' | 'AGENT' | 'ELITE';
  category: string;
  isLocked: boolean;
  requiredLevel: number;
  videoUrl?: string;
  articleLinks: { title: string; url: string }[];
  quiz: QuizQuestion[];
  maxScore: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  points: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
}