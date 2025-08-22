export type Demographic = 
  | 'students'
  | 'professionals'
  | 'homemakers'
  | 'rural-users'
  | 'senior-citizens';

export type ThreatCategory = 
  | 'phishing'
  | 'upi-scams'
  | 'identity-theft'
  | 'social-engineering'
  | 'malware'
  | 'fake-calls'
  | 'online-shopping'
  | 'social-media';

export type RiskLevel = 'low' | 'medium' | 'high' | 'critical';

export interface Threat {
  id: string;
  title: string;
  description: string;
  category: ThreatCategory;
  riskLevel: RiskLevel;
  demographics: Demographic[];
  examples: string[];
  preventionTips: string[];
  whatToDo: string[];
  realLifeCases: CaseStudy[];
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  outcome: string;
  lessons: string[];
  demographic: Demographic;
  location: string;
  date: string;
}

export interface LearningModule {
  id: string;
  title: string;
  description: string;
  duration: number; // in minutes
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  demographics: Demographic[];
  topics: string[];
  quiz: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  demographic: Demographic;
  location: string;
  preferences: UserPreferences;
  progress: UserProgress;
}

export interface UserPreferences {
  language: 'english' | 'hindi' | 'tamil' | 'telugu' | 'bengali' | 'marathi';
  notifications: boolean;
  accessibility: {
    fontSize: 'small' | 'medium' | 'large';
    highContrast: boolean;
    screenReader: boolean;
  };
}

export interface UserProgress {
  completedModules: string[];
  quizScores: Record<string, number>;
  badges: string[];
  streak: number;
  totalTimeSpent: number;
}

export interface SafetyChecklist {
  id: string;
  title: string;
  items: ChecklistItem[];
  demographic: Demographic;
  category: ThreatCategory;
}

export interface ChecklistItem {
  id: string;
  text: string;
  isCompleted: boolean;
  priority: 'low' | 'medium' | 'high';
}

export interface EmergencyContact {
  name: string;
  number: string;
  type: 'police' | 'cyber-crime' | 'bank' | 'family';
  description: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  source: string;
  date: string;
  tags: string[];
  threatLevel: RiskLevel;
}
