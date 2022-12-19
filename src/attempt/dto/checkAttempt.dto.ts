export class CheckAttemptDto {
	readonly quizID: string;
	readonly questionID: string;
	readonly currDifficulty: number;
	readonly currScore: number;
	readonly currAnswer: string;
}