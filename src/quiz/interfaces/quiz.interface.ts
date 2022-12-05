interface Question {
	id?: string;
	question: string;
	questionType: string;
	difficulty: number;
	marksAwarded: number;
	marksDeducted: number;
	options: Array<Options>;
}

interface Options {
	option1: string;
	isCorrect: boolean;
}

export interface Quiz {
	id?: string;
	title: string;
	description: string;
	difficultyLevel: number;
	TotalMarks?: number;
	questions: Array<Question>;
}

