import { Injectable } from '@nestjs/common';
import { Attempt } from './interfaces/attempt.interface';
import { CheckAttempt } from './interfaces/checkAttempt.interface';
import { QuizService } from 'src/quiz/quiz.service';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AttemptService {
	constructor(@InjectModel("Attempt") private readonly attemptModel: Model<Attempt>,private quizService: QuizService, ) {}

	async findAll(userId: string): Promise<Attempt[]> {
		return await this.attemptModel.find({ attemptedBy: userId});
	}

	async findOne(id: string): Promise<Attempt> {
		return await this.attemptModel.findOne({ _id: id });
	}

	async create(attempt: Attempt): Promise<Attempt> {
		const newAttempt = new this.attemptModel(attempt);
		return await newAttempt.save();
	}

	async checkAttempt(attempt: CheckAttempt): Promise<any> {
		const quiz = await this.quizService.findOneForCheck(attempt.quizID);
	
		const currentQuestion = quiz.questions.find(question => question.id === attempt.questionID );
		if (currentQuestion.correctAnswers.includes(attempt.currAnswer)) {
			var updatedDifficulty = attempt.currDifficulty + 1;
			var updatedScore = attempt.currScore + 5;
		} else {
			var updatedDifficulty = attempt.currDifficulty - 1;
			var updatedScore = attempt.currScore - 2;
		}
		return { newDifficulty: updatedDifficulty, newScore: updatedScore };
	}
}
