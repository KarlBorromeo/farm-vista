import { BadRequestException, ForbiddenException, Injectable, HttpStatus,Res, UnauthorizedException} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entity/users/users.entity';

@Injectable()
export class UserService {

    constructor(@InjectRepository(Users) private repo:Repository<Users>){}

    /* search user on db, return user object or null */
    async findUser(username:string, password:string): Promise<any>{
        /* search user using username */
        const response = await this.repo.find({where:{username:username},take:1})
        const user = response[0];
        /* test if password matched */
        if(user){
            const isMatched = await bcrypt.compare(password, user.password)
            if(isMatched){
                return {name: user.firstname + ' ' + user.lastname,
                        username: user.username
                    };
            }            
        }
        throw new UnauthorizedException()
    }

    /* create/register user to db, return truthy if no error */
    async registerUser(credentials:any):Promise<any>{
        console.group('credentials:',credentials)
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(credentials.password, salt);
        const existed = await this.repo.find({where:{username:credentials.username}});
        console.log(existed);
        if(existed.length>0){
            throw new ForbiddenException('existing username');
        }
        const user = {
            firstname: credentials.firstname,
            lastname: credentials.lastname,
            username: credentials.username,
            salt: salt,
            password: hash,
            role_id: 1
        }
        console.log('user:',user);
        try{
            await this.repo
                .createQueryBuilder()
                .insert()
                .into(Users)
                .values([
                    { 
                        firstname:user.firstname,
                        lastname: user.lastname,
                        username: user.username,
                        salt: user.salt,
                        password: user.password,
                        role: {
                            _id: user.role_id
                        }
                    },
                ])
                .execute()
                return {
                    name: user.firstname + ' ' + user.lastname,
                    username: user.username
                }
        }catch(error){
            console.log(error)
            throw new BadRequestException()
        }
       
        
    }
}
