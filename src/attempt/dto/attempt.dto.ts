export class CreateAttemptDto {
	readonly quizTitle: string;
	readonly quizDescription: string;
	readonly quizId: string;
	readonly attemptedBy: string;
	readonly userScore: number;
	readonly total: number;
	readonly scoreData: Array<ScoreData>;
}

class ScoreData {
	readonly quesNumber: number;
	readonly currScore: number;
}