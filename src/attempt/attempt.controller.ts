import { Controller, Get, Post, Body, UseGuards, Param } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards/jwt-guard';
import { AttemptService } from './attempt.service';
import { Attempt } from './interfaces/attempt.interface';
import { CreateAttemptDto } from './dto/attempt.dto';
import { CheckAttemptDto } from './dto/checkAttempt.dto';

@Controller('attempt')
export class AttemptController {
	constructor(private readonly attemptService: AttemptService) {}

	@UseGuards(JwtGuard)
	@Get(':userId')
	findAll(@Param('userId') userId: string): Promise<Attempt[]> {
		return this.attemptService.findAll(userId);
	}

	@UseGuards(JwtGuard)
	@Post()
	create(@Body() createNewAttempt: CreateAttemptDto): Promise<Attempt> {
		return this.attemptService.create(createNewAttempt);
	}

	@UseGuards(JwtGuard)
	@Post("/check")
	checkAttempt(@Body() checkNewAttempt: CheckAttemptDto): Promise<any> {
		return this.attemptService.checkAttempt(checkNewAttempt);
	}
}
