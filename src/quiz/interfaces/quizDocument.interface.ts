interface Question {
	id?: string;
	question: string;
	questionType: string;
	difficulty: number;
	correctAnswers: string[];
	answers: string[];
}

export interface QuizDocument {
	id?: string;
	title: string;
	description: string;
	difficultyLevel: number;
	questions: Array<Question>;
}

