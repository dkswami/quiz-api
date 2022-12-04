import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose"
import { Document } from "mongoose"
import { Role } from "src/config/keys";

export type UserDocument = User & Document;

@Schema()
export class User {
	@Prop({ required: true })
	name: string;

	@Prop({ required: true, unique: true })
	email: string;

	@Prop({ required: true })
	password: string;

	@Prop({ required: true, default: Role.USER })
	role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);