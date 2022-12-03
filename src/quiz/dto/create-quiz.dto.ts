import { CreateQuestionDto } from "./create-question.dto";
export class CreateQuizDto {
	readonly title: string;
	readonly description: string;
	readonly difficultyLevel: number;
	readonly TotalMarks: number;
	readonly questions: CreateQuestionDto[];
}