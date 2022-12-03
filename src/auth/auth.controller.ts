import { Controller, Post, Body } from '@nestjs/common';

import { AuthService } from './auth.service';
import { NewUserDto } from 'src/user/dto/new-user.dto';
import { UserDetails } from 'src/user/interfaces/user-details.interface';

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) { }

	@Post('register')
	register(@Body() user: NewUserDto): Promise<UserDetails | any> {
		return this.authService.register(user);
	}
}
