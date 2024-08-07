import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../users/service/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService,
              private jwtService: JwtService) {
  }

  async signIn(username: string, password: string) {
    const user = await this.usersService.findOneWithPassword(username);
    if (!user) {
      throw new NotFoundException('User does not exist');
    }
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      throw new UnauthorizedException('Incorrect Password!');
    }
    const payload = { sub: user.id, username };
    return {
      access_token: await this.jwtService.signAsync(payload, {expiresIn: 100000000})
    };
  }

  async checkUsernameAvailability(username: string) {
    const user = await this.usersService.findOne(username);
    return user === null;
  }
}
