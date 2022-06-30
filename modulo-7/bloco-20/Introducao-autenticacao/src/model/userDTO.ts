export interface userSignupDTO {
    id:string;
    email: string;
    password: string;
    role: string;
}

export interface userSignup {
    email: string;
    password: string;
    role: string;
}

export interface userLogin {
    email: string;
    password: string;
}