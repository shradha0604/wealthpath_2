export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  plan: "free" | "pro" | "family";
  createdAt: Date;
}

export interface FinancialProfile {
  userId: string;
  monthlyIncome: number;
  monthlyExpenses: number;
  savings: number;
  totalDebt: number;
  emiAmount: number;
  emergencyFund: number;
  dependents: number;
  riskTolerance: "low" | "medium" | "high";
  goals: string[];
}

export interface Goal {
  id: string;
  userId: string;
  title: string;
  emoji: string;
  targetAmount: number;
  currentAmount: number;
  deadline: Date;
  monthlyTarget: number;
  status: "active" | "completed" | "paused";
}

export interface ScamReport {
  id: string;
  userId: string;
  inputText?: string;
  screenshotUrl?: string;
  riskScore: number;
  verdict: string;
  redFlags: string[];
  analyzedAt: Date;
}

export interface ChatMessage {
  id: string;
  sessionId: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface Expense {
  id: string;
  userId: string;
  category: string;
  amount: number;
  description: string;
  date: Date;
}

export interface FinancialScore {
  overall: number;
  savingsRate: number;
  debtRatio: number;
  emergencyReadiness: number;
  investmentHealth: number;
  stressLevel: "low" | "medium" | "high";
}

export interface AIRecommendation {
  id: string;
  type: "saving" | "debt" | "investment" | "insurance" | "emergency";
  title: string;
  description: string;
  impact: "high" | "medium" | "low";
  actionItems: string[];
}
