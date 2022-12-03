import { Injectable } from '@nestjs/common';
import { Quiz } from './interfaces/quiz.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class QuizService {
	constructor(@InjectModel("Quiz") private readonly quizModel: Model<Quiz>) {}

	async findAll(): Promise<Quiz[]> {
		return await this.quizModel.find();
	}

	async findOne(id: string): Promise<Quiz> {
		return await this.quizModel.findOne({ _id: id });
	}

	async create(quiz: Quiz): Promise<Quiz> {
		const newQuiz = new this.quizModel(quiz);
		return await newQuiz.save();
	}

	async delete(id: string): Promise<Quiz> {
		return await this.quizModel.findByIdAndRemove(id);
	}

}
