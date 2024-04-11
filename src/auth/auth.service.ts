import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

    constructor(private userService: UserService,
                private jwtService: JwtService){}

    /* call userService's method for searching the user, convert returned user to token and return it */
    async login(username:string, password:string):Promise<{access_token: string}>{
        const user = await this.userService.findUser(username,password);
        const token = await this.jwtService.signAsync(user);
        return {access_token: token}
    }
}
