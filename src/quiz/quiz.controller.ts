import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { Quiz } from './interfaces/quiz.interface';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { JwtGuard } from 'src/auth/guards/jwt-guard';

@Controller('quiz')
export class QuizController {
	constructor(private readonly quizService: QuizService) {}

	@UseGuards(JwtGuard)
	@Get()
	findAll(): Promise<Quiz[]> {
		return this.quizService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string ): Promise<Quiz> {
		return this.quizService.findOne(id);
	}

	@Post()
	create(@Body() createNewItem: CreateQuizDto): Promise<Quiz> {
		return this.quizService.create(createNewItem);
	}

	@Delete(':id')
	delete(@Param('id') id: string): Promise<Quiz> {
		return this.quizService.delete(id);
	}
}
