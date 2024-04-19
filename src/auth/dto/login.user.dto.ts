import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginUserDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    username: string;

    @ApiProperty()
    @IsNotEmpty()
    password: string
}

export class LoginUserResDto extends PickType(LoginUserDto,['username'] as const){

    @ApiProperty()
    name: string

    @ApiProperty()
    accesToken: string;
}