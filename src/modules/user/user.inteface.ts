/* this is the format of every user credentials */
export interface UserInterface{
    name: string
    username: string,
    salt: string,
    password: string
}