import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './guards/jwt-strategy';
import { JwtGuard } from './guards/jwt-guard';
import { RolesGuard } from './guards/roles.guard';

@Module({
	imports: [UserModule, JwtModule.registerAsync({
		useFactory: () => ({
			secret: 'secret',	//process.env.JWT_SECRET,
			signOptions: { expiresIn: '3600s'}
		})
	})],
	controllers: [AuthController],
	providers: [AuthService, JwtStrategy, JwtGuard, RolesGuard]
})
export class AuthModule { }
