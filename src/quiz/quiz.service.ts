import { Injectable } from '@nestjs/common';
import { QuizDocument } from './interfaces/quizDocument.interface';
import { ShowQuiz } from './interfaces/showQuiz.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class QuizService {
	constructor(@InjectModel("Quiz") private readonly quizModel: Model<QuizDocument>) { }

	_getQuizWithoutCorrectAnswers(quiz: QuizDocument): ShowQuiz {
		return {
			id: quiz.id,
			title: quiz.title,
			description: quiz.description,
			difficultyLevel: quiz.difficultyLevel,
			questions: quiz.questions.map(question => {
				return {
					id: question.id,
					question: question.question,
					questionType: question.questionType,
					difficulty: question.difficulty,
					answers: question.answers
				}
			}),
		}
	}

	async findAll(): Promise<ShowQuiz[]> {
		const allQuiz = await this.quizModel.find();
		return allQuiz.map(quiz => this._getQuizWithoutCorrectAnswers(quiz));
	}

	async findOne(id: string): Promise<ShowQuiz> {
		const quiz = await this.quizModel.findOne({ _id: id });
		return this._getQuizWithoutCorrectAnswers(quiz);
	}

	async create(quiz: QuizDocument): Promise<QuizDocument> {
		const newQuiz = new this.quizModel(quiz);
		return await newQuiz.save();
	}

	async delete(id: string): Promise<QuizDocument> {
		return await this.quizModel.findByIdAndRemove(id);
	}

}
