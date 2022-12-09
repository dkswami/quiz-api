import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose"
import mongoose, { Document } from "mongoose"

export type AttemptDocument = Attempt & Document;

@Schema()
export class Attempt {
	@Prop({ required: true })
	quizTitle: string;

	@Prop({ required: true })
	quizDescription: string;

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true })
	quizId: mongoose.Types.ObjectId;

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
	attemptedBy: mongoose.Types.ObjectId;	

	@Prop({ required: true })
	userScore: number;

	@Prop({ required: true })
	total: number;	

	@Prop({ type: [{ quesNumber: { type: Number}, currScore: { type: Number} }], required: true })
	scoreData: { quesNumber: number, currScore: number }[];
}


export const AttemptSchema = SchemaFactory.createForClass(Attempt);