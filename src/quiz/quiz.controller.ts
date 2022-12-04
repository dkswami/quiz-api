import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { Quiz } from './interfaces/quiz.interface';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { JwtGuard } from 'src/auth/guards/jwt-guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/config/keys';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('quiz')
export class QuizController {
	constructor(private readonly quizService: QuizService) {}

	@UseGuards(JwtGuard)
	@Get()
	findAll(): Promise<Quiz[]> {
		return this.quizService.findAll();
	}

	@UseGuards(JwtGuard)
	@Get(':id')
	findOne(@Param('id') id: string ): Promise<Quiz> {
		return this.quizService.findOne(id);
	}

	@UseGuards(JwtGuard)
	@Post()
	create(@Body() createNewItem: CreateQuizDto): Promise<Quiz> {
		return this.quizService.create(createNewItem);
	}

	@Roles(Role.ADMIN)
	@UseGuards(JwtGuard, RolesGuard)
	@Delete(':id')
	delete(@Param('id') id: string): Promise<Quiz> {
		return this.quizService.delete(id);
	}
}
