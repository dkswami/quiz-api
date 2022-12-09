import { Injectable } from '@nestjs/common';
import { Attempt } from './interfaces/attempt.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AttemptService {
	constructor(@InjectModel("Attempt") private readonly attemptModel: Model<Attempt>) {}

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
}
