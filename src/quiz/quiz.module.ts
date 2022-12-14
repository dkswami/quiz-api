import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuizSchema } from './schema/quiz.schema';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';

@Module({
	imports: [MongooseModule.forFeature([{ name: 'Quiz', schema: QuizSchema }])],
	controllers: [QuizController],
	providers: [QuizService],
	exports: [QuizService]
})
export class QuizModule { }
