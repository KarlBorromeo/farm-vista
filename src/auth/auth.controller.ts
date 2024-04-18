import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local.auth.guard';
import { CreateUserDto } from './dto/create.user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authservice: AuthService){}

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    login(@Request() req:any):string{
        return req.user;
    }

    @Post('/register')
    async register(@Body() credentials: CreateUserDto):Promise<string>{
        return this.authservice.register(credentials);
    }
}
