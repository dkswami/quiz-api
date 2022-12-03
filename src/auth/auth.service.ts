import { Injectable } from '@nestjs/common';

import * as bcrypt from 'bcrypt';
import { NewUserDto } from 'src/user/dto/new-user.dto';
import { UserDetails } from 'src/user/interfaces/user-details.interface';

import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
	constructor(private userService: UserService) {}

	async hashedPassword(password: string): Promise<string> {
		return bcrypt.hash(password, 12);
	}

	async register(user: NewUserDto): Promise<UserDetails | any> {
		const { name, email, password, role } = user;

		const existingUser = await this.userService.findByEmail(email);

		if (existingUser) return "User with this email already exists";

		const hashedPassword = await this.hashedPassword(password);

		const newUser = await this.userService.create(name, email, hashedPassword, role);
		return this.userService._getUserDetails(newUser);
	}
}
