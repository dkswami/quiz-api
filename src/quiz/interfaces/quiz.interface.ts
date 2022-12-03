export interface Quiz {
	id?: string;
	title: string;
	description?: string;
	difficultyLevel: number;
	TotalMarks?: number;
	// questions?: Array<Question>;
}

interface Question {
	id?: string;
	question: string;
	answer: string;
	questionType: string;
	difficulty: number;
	marksAwarded: number;
	marksDeducted: number;
	options: string[];
}