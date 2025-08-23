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

// --------------------
// Base Types
// --------------------
export type Demographic =
  | "students"
  | "professionals"
  | "homemakers"
  | "rural-users"
  | "senior-citizens";

export type RiskLevel = "low" | "medium" | "high" | "critical";

export type ThreatCategory =
  | "phishing"
  | "social-engineering"
  | "malware"
  | "data-breach"
  | "upi-scams"
  | "fake-calls"
  | "social-media"
  | "online-shopping"
  | "gaming"
  | "education"
  | "identity-theft";

// --------------------
// User
// --------------------
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

// --------------------
// Threats & Learning
// --------------------
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

export interface Threat {
  id: string;
  title: string;
  description: string;
  category: ThreatCategory;
  riskLevel: RiskLevel;
  demographics: Demographic[];
  tips?: string[];
  preventionTips: string[];
  whatToDo?: string[];
  examples: string[];
  realLifeCases: CaseStudy[];
}

export interface LearningModule {
  id: string;
  title: string;
  description: string;
  topics: string[];
  content: string[];
  demographics: Demographic[];
  difficulty: "beginner" | "intermediate" | "advanced";
  duration: number;
  quiz: Array<{
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }>;
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
  impact: "low" | "medium" | "high" | "critical";
  tags: string[];
}

// --------------------
// Safety Checklist
// --------------------
export interface SafetyChecklist {
  id: string;
  title: string;
  demographic: Demographic;
  category: ThreatCategory;
  items: Array<{
    id: string;
    text: string;
    isCompleted: boolean;
    priority: "low" | "medium" | "high";
    description?: string;
  }>;
}

// --------------------
// Emergency Contact
// --------------------
export interface EmergencyContact {
  id: string;
  type:
    | "police"
    | "fire"
    | "hospital"
    | "cyber-cell"
    | "women-helpline"
    | "child-helpline"
    | "senior-citizen"
    | string;
  name: string;
  phone: string;
  description?: string;
  location?: string;
}
