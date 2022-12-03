import * as mongoose from 'mongoose';

export const QuizSchema = new mongoose.Schema({
	title: String,
	description: String,
	difficultyLevel: Number,
	totalMarks: Number,
	questions: [
		{
			question: String,
			answer: String,
			questionType: String,
			difficulty: Number,
			marksAwarded: Number,
			marksDeducted: Number,
			options: [String],
		}
	]
})
