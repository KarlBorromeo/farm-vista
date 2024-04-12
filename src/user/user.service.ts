import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entity/users.entity';

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
                return {name: user.name,
                        username: user.username
                    };
            }            
        }
        return null
    }

    /* create/register user to db, return truthy if no error */
    async registerUser(credentials:any):Promise<any>{
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(credentials.password, salt);
        const existed = await this.repo.find({where:{name:credentials.username}})
        if(existed.length>0){
            return null;
        }
        const user = {
            name: credentials.name,
            username: credentials.username,
            salt: salt,
            password: hash
        }
        const record = this.repo.create(user);
        await this.repo.save(record);
        return true;
    }
}
