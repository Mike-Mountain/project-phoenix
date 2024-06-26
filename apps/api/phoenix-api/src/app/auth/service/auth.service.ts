import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../users/service/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService,
              private jwtService: JwtService) {
  }

  async signIn(username: string, hash: string) {
    const user = await this.usersService.findOne(username);
    if (!user) {
      throw new NotFoundException('User does not exist');
    }
    const isMatched = await bcrypt.compare(user.password, hash);
    if (!isMatched) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, user };
    return {
      access_token: await this.jwtService.signAsync(payload)
    };
  }
}
