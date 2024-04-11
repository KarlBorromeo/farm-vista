import { Injectable } from '@nestjs/common';
import { UserInterface } from './user.inteface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    private users: UserInterface[] = [
        {
            name: 'haha',
            username: 'hehe',
            salt: '$2b$10$g1BnpTBUNhgh3gSzxOmOle',
            password: '$2b$10$EW8V4zMe7IaMap31MK1eKODRQLOuuahxsz.MjE2SnHvBJNQcRmXNu'
        }
    ]

    /* search user on db, return user object or null */
    async findUser(username:string, password:string): Promise<any>{
        /* search user using username */
        let user: UserInterface;
        for(let i=0; i<this.users.length; i++){
            if( this.users[i].username === username){
                user = this.users[i];
                break;
            }
        }
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

    /* create/register user to db, return truth if no error */
    async registerUser(credentials:any):Promise<any>{
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(credentials.password, salt);
        const user = {
            name: credentials.name,
            username: credentials.username,
            salt: salt,
            password: hash
        }
        this.users.push(user);
        return true;
    }
}
