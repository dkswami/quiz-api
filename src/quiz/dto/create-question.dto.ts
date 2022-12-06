export class CreateQuestionDto {
	readonly question: string;
	readonly questionType: string;
	readonly difficulty: number;
	readonly correctAnswers: string[];
	readonly answers: string[];
}
