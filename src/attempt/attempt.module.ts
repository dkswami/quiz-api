import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AttemptSchema } from './schema/attempt.schema';
import { AttemptController } from './attempt.controller';
import { AttemptService } from './attempt.service';

@Module({
	imports: [MongooseModule.forFeature([{ name: 'Attempt', schema: AttemptSchema }])],
	controllers: [AttemptController],
	providers: [AttemptService],
})
export class AttemptModule { }
