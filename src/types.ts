export type TabType = 
  | 'cienciadados' 
  | 'portugues' 
  | 'ingles' 
  | 'matriz' 
  | 'simulado' 
  | 'flashcards' 
  | 'glossario' 
  | 'plano';

export type DisciplineType = 'cienciadados' | 'portugues' | 'ingles';

export interface ModuleSection {
  id: string;
  discipline: DisciplineType;
  title: string;
  shortDescription: string;
  badge: string;
  readTime: string;
  keyPoints: string[];
  content: {
    intro: string;
    subsections: {
      subtitle: string;
      text: string;
      examTip?: string;
      comparisonTable?: {
        headers: string[];
        rows: string[][];
      };
      example?: string;
    }[];
    bancaTrap: string;
    summaryCheatsheet: string[];
  };
}

export type QuestionType = 'certo_errado' | 'multipla_escolha';

export interface Question {
  id: string;
  discipline: DisciplineType;
  banca: 'Cesgranrio' | 'Cebraspe' | 'FGV' | 'FCC' | 'Vunesp' | 'Padrão Cesgranrio';
  orgaoAno: string;
  topicId: string;
  topicName: string;
  type: QuestionType;
  enunciado: string;
  textContext?: string; // For text interpretation in Portuguese or English
  options?: {
    id: string;
    text: string;
  }[];
  correctAnswer: string;
  explicacao: string;
  pegadinha: string;
}

export interface Flashcard {
  id: string;
  topic: string;
  front: string;
  back: string;
  macete?: string;
}

export interface GlossaryTerm {
  term: string;
  translation: string;
  category: 'Conceito' | 'Machine Learning' | 'Engenharia' | 'Métricas' | 'Estatística';
  simpleDefinition: string;
  examContext: string;
}

export interface StudyDay {
  day: number;
  week: number;
  title: string;
  description: string;
  topics: string[];
  durationMinutes: number;
  actionItems: string[];
}
