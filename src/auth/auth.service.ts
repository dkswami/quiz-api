import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ExistingUserDto } from 'src/user/dto/existing-user.dto';
import { NewUserDto } from 'src/user/dto/new-user.dto';
import { UserDetails } from 'src/user/interfaces/user-details.interface';

import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
	constructor(private userService: UserService, private jwtService: JwtService) {}

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

	async doesPasswordMatch(password: string, hashedPassword: string): Promise<boolean> {
		return bcrypt.compare(password, hashedPassword);
	}

	async validateUser(email: string, password: string): Promise<UserDetails | any> {
		const user = await this.userService.findByEmail(email);
		const doesUserExist = !!user;
		if (!doesUserExist) throw new HttpException('Invalid credentials', HttpStatus.BAD_REQUEST);

		const doesPasswordMatch = await this.doesPasswordMatch(password, user.password);
		if (!doesPasswordMatch) throw new HttpException('Invalid credentials', HttpStatus.BAD_REQUEST);

		return this.userService._getUserDetails(user);
	}

	async login( existingUser: ExistingUserDto ): Promise<{ token: string } | any> {
		const { email, password } = existingUser;
		const user = await this.validateUser(email, password);
		if(!user) return user;

		const jwt = await this.jwtService.signAsync({ user });
		return { user, token: jwt };
	}
}
