export class CustomError extends Error {
    constructor(statuscode: number, message: string){
        super(message)
    }
}

export class invalidName extends CustomError {
    constructor(){
        super(400, "Nome Invalido")
    }
}

export class invalidEmail extends CustomError {
    constructor(){
        super(400, "Email Invalido")
    }
}

export class invalidPassword extends CustomError {
    constructor(){
        super(400, "Senha Invalido")
    }
}