import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authService: AuthService){
        super();
    }

    /* authentication guard, returning token */
    async validate(username:string,password:string):Promise<any>{
        const token =  await this.authService.login(username,password);
        console.log(token);
        if(!token){
            throw new UnauthorizedException();
        }
        return token;
    }
}