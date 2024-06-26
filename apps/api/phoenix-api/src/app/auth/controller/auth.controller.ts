import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { AuthGuard } from '../guard/auth.guard';
import { SignInDto } from '../dto/sign-in.dto';
import * as bcrypt from 'bcrypt';
import { SignUpDto } from '../dto/sign-up.dto';
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
    const hash = await bcrypt.hash(signInDto.password, 10);
    return this.authService.signIn(signInDto.username, hash);
  }

  @HttpCode(HttpStatus.OK)
  @Post('register')
  async signUp(@Body() createUserDto: CreateUserDto) {
    const hash = await bcrypt.hash(createUserDto.password, 10);
    createUserDto.password = hash;
    return this.usersService.createUser(createUserDto);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user;
  }
}
