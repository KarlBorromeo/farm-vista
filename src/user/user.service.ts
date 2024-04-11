import { Injectable } from '@nestjs/common';
import { UserInterface } from './user.inteface';


@Injectable()
export class UserService {
    private users: UserInterface[] = [
        {
            username: 'haha',
            password: '123'
        },
        {
            username: 'hehe',
            password: '123'
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
        if(user.password === password){
            // return token here
            console.log('authenticated')
            return user;
        }
        return null
    }
}
