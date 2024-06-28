import { Body, Controller, HttpCode, HttpStatus, Post, } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { SignInDto } from '../dto/sign-in.dto';
import { UsersService } from '../../users/service/users.service';
import { CreateUserDto } from '../../users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
              private readonly usersService: UsersService) {
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @HttpCode(HttpStatus.OK)
  @Post('register')
  async signUp(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('username')
  async checkUsername(@Body() data: {username: string}) {
    return this.authService.checkUsernameAvailability(data.username);
  }
}
