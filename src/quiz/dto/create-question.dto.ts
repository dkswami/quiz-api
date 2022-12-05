export class CreateQuestionDto {
	readonly question: string;
	readonly questionType: string;
	readonly difficulty: number;
	readonly marksAwarded: number;
	readonly marksDeducted: number;
	readonly options: OptionsDto[];
}

class OptionsDto {
	readonly option1: string;
	readonly isCorrect: boolean;
}