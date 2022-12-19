import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AttemptSchema } from './schema/attempt.schema';
import { AttemptController } from './attempt.controller';
import { AttemptService } from './attempt.service';
import { QuizModule } from '../quiz/quiz.module';

@Module({
	imports: [MongooseModule.forFeature([{ name: 'Attempt', schema: AttemptSchema }]), QuizModule],
	controllers: [AttemptController],
	providers: [AttemptService],
})
export class AttemptModule { }
