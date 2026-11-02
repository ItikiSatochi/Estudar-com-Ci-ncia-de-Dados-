export type TabType = 'modulos' | 'matriz' | 'simulado' | 'flashcards' | 'glossario' | 'plano';

export interface ModuleSection {
  id: string;
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
  banca: 'Cebraspe' | 'FGV' | 'FCC' | 'Cesgranrio' | 'Vunesp' | 'Inédita / Padrão Concurso';
  orgaoAno: string;
  topicId: string;
  topicName: string;
  type: QuestionType;
  enunciado: string;
  options?: {
    id: string;
    text: string;
  }[];
  correctAnswer: string; // 'C' | 'E' or 'A' | 'B' | 'C' | 'D' | 'E'
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
