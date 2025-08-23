import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    email: string;
    name: string;
    role: string;
    demographic: string;
    location: string;
  }

  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      role: string;
      demographic: string;
      location: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: string;
    demographic: string;
    location: string;
  }
}

export type Demographic = 
  | 'students' 
  | 'professionals' 
  | 'homemakers' 
  | 'rural-users' 
  | 'senior-citizens';

export type RiskLevel = 'low' | 'medium' | 'high' | 'critical';

export type ThreatCategory = 
  | 'phishing' 
  | 'social-engineering' 
  | 'malware' 
  | 'data-breach' 
  | 'upi-scams' 
  | 'fake-calls' 
  | 'social-media' 
  | 'online-shopping' 
  | 'gaming' 
  | 'education';

export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  demographic: Demographic;
  location: string;
  preferences: Record<string, any>;
  progress: Record<string, any>;
}

export interface Threat {
  id: string;
  title: string;
  description: string;
  category: ThreatCategory;
  riskLevel: RiskLevel;
  demographics: Demographic[];
  tips: string[];
  examples: string[];
}

export interface LearningModule {
  id: string;
  title: string;
  description: string;
  content: string[];
  demographics: Demographic[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // in minutes
  quiz: {
    questions: Array<{
      question: string;
      options: string[];
      correctAnswer: number;
      explanation: string;
    }>;
  };
}

export interface ThreatIntelligence {
  id: string;
  title: string;
  summary: string;
  description: string;
  category: ThreatCategory;
  riskLevel: RiskLevel;
  location: string;
  date: string;
  source: string;
  affectedUsers: string[];
  immediateActions: string[];
  longTermPrevention: string[];
  relatedThreats: string[];
  verified: boolean;
  impact: 'low' | 'medium' | 'high' | 'critical';
  tags:string[];
}
