import { getData } from './../services/getData';
import { UserDataBase } from "../data/userDataBase";
import { userLogin, userSignup } from "../model/userDTO";
import { generateId } from "../services/generateID";
import { generateToken } from "../services/generateToken";

export class UserBussines {
    async signup (req:userSignup):Promise<string> {
        const { email, password } = req;

        if (!email || !password) {
            throw new Error("todos os campos devem ser preenchidos");
        }

        const id = generateId();

        const input = {
            id,
            email,
            password
        }

        await new UserDataBase().signup(input);

        const token = generateToken({ id });

        return token
    }

    async login (req:userLogin):Promise<string> {
        const { email, password } = req;

        if (!email || !password) {
            throw new Error("todos os campos devem ser preenchidos");
        }

        if (!email.includes("@")) {
            throw new Error("email invalido");
        }

        const user = await new UserDataBase().getUserByEmail(email);

        if (!user || user.email !== email) {
            throw new Error("email invalido");
        }

        if(user.password !== password) {
            throw new Error("senha invalido");
        }


        const token = generateToken({ id: user.id });

        return token
    }

    async profile (token:string):Promise<any> {
        const data = getData(token);
        console.log(data);
        
        const user = await new UserDataBase().getUserById(data.id);

        const output = {
            id: user.id,
            email: user.email,
        }

        return output
    }
}