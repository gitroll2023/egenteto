export interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    type: 'egen' | 'teto';
  }[];
}

export interface ResultType {
  type: 'egen-man' | 'egen-woman' | 'teto-man' | 'teto-woman';
  title: string;
  subtitle: string;
  description: string[];
  emoji: string;
  traits: string[];
  compatibility: {
    best: string;
    good: string;
    challenging: string;
  };
  percentage?: number;
}

export interface QuizState {
  currentQuestion: number;
  answers: ('egen' | 'teto')[];
  isComplete: boolean;
  result: ResultType | null;
  gender: 'man' | 'woman' | null;
}