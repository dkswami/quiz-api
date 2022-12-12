import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';

import { AuthService } from './auth.service';
import { NewUserDto } from 'src/user/dto/new-user.dto';
import { ExistingUserDto } from 'src/user/dto/existing-user.dto';
import { UserDetails } from 'src/user/interfaces/user-details.interface';

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) { }

	@Post('register')
	register(@Body() user: NewUserDto): Promise<UserDetails | any> {
		return this.authService.register(user);
	}

	@Post('login')
	login(@Body() user: ExistingUserDto): Promise<{ token: string } | any> {
		return this.authService.login(user);
	}
}
