export class CustomError extends Error {
    constructor(message: string, public code: number) {
      super(message);
    }
  }

  export class EmptyFields extends CustomError {
    constructor(){
      super("Fields cannot be empty", 400)
    }
  }

  export class InvalidName extends CustomError {
    constructor(){
      super("Invalid Name", 400);
    }
  }

  export class InvalidEmail extends CustomError {
    constructor(){
      super("Invalid Email", 400);
    }
  }

  export class EmailCadastre extends CustomError {
    constructor(){
      super("Email already cadastre", 400);
    }
  }

  export class InvalidPassword extends CustomError {
    constructor(){
      super("Invalid Password", 400);
    }
  }

  export class UnauthorizedUser extends CustomError {
    constructor(){
      super("Unauthorized User", 401);
    }
  }

  export class InvalidIdComp extends CustomError {
    constructor(){
      console.log("custom error");
      
      super("Invalid id competition", 498);
    }
  }

  export class NoLog extends CustomError{
    constructor(){
        super("User not logged in", 400)
    }
  }

  export class NotFound extends CustomError {
    constructor(){
      super("Not Found", 404);
    }
  }