export interface Attempt {
	id?: string;
	quizTitle: string;
	quizDescription: string;
	quizId: string;
	attemptedBy: string;
	userScore: number;
	total: number;	
	scoreData: Array<ScoreData>;
}

interface ScoreData {
	quesNumber: number;
	currScore: number;
}