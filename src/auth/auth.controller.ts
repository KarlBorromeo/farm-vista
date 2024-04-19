import { Controller,  Post, UseGuards, Body, Request } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local.auth.guard';
import { CreateUserDto } from './dto/create.user.dto';
import { AuthService } from './auth.service';
import { LoginUserDto, LoginUserResDto } from './dto/login.user.dto';
import { ApiResponse } from '@nestjs/swagger';
// import { Request } from 'express';

@Controller('auth')
export class AuthController {

    constructor(private authservice: AuthService){}

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    @ApiResponse({type:LoginUserResDto, status:200})
    login(@Body() credentials:LoginUserDto, @Request() req:any):Promise<LoginUserResDto>{
        return req.user;
    }

    @Post('/register')
    @ApiResponse({type:LoginUserResDto, status:200})
    async register(@Body() credentials: CreateUserDto):Promise<string>{
        return this.authservice.register(credentials);
    }
}
