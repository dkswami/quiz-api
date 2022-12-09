import * as mongoose from 'mongoose';

export const QuizSchema = new mongoose.Schema({
	title: String,
	description: String,
	difficultyLevel: Number,
	questions: [
		{
			question: String,
			questionType: String,
			difficulty: Number,
			correctAnswers: [String],
			answers: [String]
		}
	]
})
