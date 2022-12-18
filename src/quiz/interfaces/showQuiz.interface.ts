interface Question {
	id?: string;
	question: string;
	questionType: string;
	difficulty: number;
	answers: string[];
}

export interface ShowQuiz {
	id?: string;
	title: string;
	description: string;
	difficultyLevel: number;
	questions: Array<Question>;
}

