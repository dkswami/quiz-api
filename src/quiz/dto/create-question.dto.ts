export class CreateQuestionDto {
	readonly question: string;
	readonly answer: string;
	readonly questionType: string;
	readonly difficulty: number;
	readonly marksAwarded: number;
	readonly marksDeducted: number;
	readonly options: string[];
}