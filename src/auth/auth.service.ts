import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

    constructor(private userService: UserService,
                private jwtService: JwtService){}

    /* call userService's method for searching the user, convert returned user to token and return it */
    async login(username:string, password:string):Promise<any>{
        const user = await this.userService.findUser(username,password);
        if(user){
            const token = await this.jwtService.signAsync(user);
            return {
                name: user.name,
                access_token: token
            }            
        }
        return null
    }

    /* call userService's method for creating the user */
    async register(credentials: any): Promise<any>{
        return await this.userService.registerUser(credentials);
    }
}
