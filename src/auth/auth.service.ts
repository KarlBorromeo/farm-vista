import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { access } from 'fs';
import { UserService } from 'src/modules/user/user.service';

@Injectable()
export class AuthService {

    constructor(private userService: UserService,
                private jwtService: JwtService){}

    /* call userService's method for searching the user, convert returned user to token and return it */
    async login(username:string, password:string):Promise<any>{
        try{
            const user = await this.userService.findUser(username,password);
            const token = await this.jwtService.signAsync(user);
            return {
                ...user,
                access_token: token
            } 
        }catch(error){
            throw error
        }
    }

    /* call userService's method for creating the user */
    async register(credentials: any): Promise<any>{
        try{
            const user =  await this.userService.registerUser(credentials); 
            const token = await this.jwtService.signAsync(user);
            return{
                ...user,
                access_token: token
            }
        }catch(error){
            throw error
        };

    }
}
