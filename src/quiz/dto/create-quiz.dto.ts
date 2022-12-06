import { CreateQuestionDto } from "./create-question.dto";
export class CreateQuizDto {
	readonly title: string;
	readonly description: string;
	readonly difficultyLevel: number;
	readonly questions: CreateQuestionDto[];
}