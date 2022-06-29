import {
    InvalidEmail,
    InvalidPassword,
    FieldEmpty,
    Unauthorized, 
    InvalidName,
    UserNotFound
} from "../error/customError"
import { UserDataBase } from "../data/userDataBase";
import { ROLE, userLogin, userSignup } from "../model/userDTO";
import { generateId } from "../services/generateID";
import { 
    generateToken,
    getData 
} from "../services/authentication";
import { HashManager } from "../services/hashManager";


export class UserBussines {
    async signup (req:userSignup):Promise<string> {
        let { email, password, role, name } = req;

        if (!email || !password) {
            throw new FieldEmpty
        }

        if(!email.includes("@")){
            throw new InvalidEmail
        }

        if(password.length < 6){
            throw new InvalidPassword
        }

        if(name.length < 3){
            throw new InvalidName
        }
        
        if(role !== ROLE.ADMIN){
            role = ROLE.NORMAL
        }
        
        const hashPassword = await new HashManager().generateHash(password)
        
        const id = generateId();  

        const input = {
            id,
            name,
            email,
            password: hashPassword,
            role
        }

        await new UserDataBase().signup(input);

        const token = generateToken({ id, role});

        return token
    }

    async login (req:userLogin):Promise<string> {
        const { email, password } = req;

        if (!email || !password) {
            throw new FieldEmpty();
        }

        if (!email.includes("@")) {
            throw new InvalidEmail();
        }

        const user = await new UserDataBase().getUserByEmail(email);

        if (!user || user.email !== email) {
            throw new InvalidEmail();
        }

        const comparePassword = await new HashManager().comparePassword(password, user.password)
        if(!comparePassword) {
            throw new InvalidPassword();
        }


        const token = generateToken({ id: user.id, role: user.role });

        return token
    }

    async profile (token:string):Promise<any> {
        const data = getData(token);
       
        const user = await new UserDataBase().getUserById(data.id)

        if(!user){
            throw new Unauthorized()
        }

        const output = {
            id: user.id,
            email: user.email,
            name: user.name
        }

        return output
    }

    async otherUserProfile (token:string, id:string):Promise<any> {
        const data = getData(token);
       
        if(data.role === ROLE.NORMAL){
            throw new Unauthorized()
        }
                
        const user = await new UserDataBase().getUserById(id)

        if(!user){
            throw new UserNotFound()
        }
            
        const output = {
            id: user.id,
            email: user.email,
            name: user.name
        }

        return output
    }
}