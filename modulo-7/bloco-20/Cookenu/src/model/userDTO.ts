export enum ROLE {
    NORMAL = "normal",
    ADMIN = "admin"
}

export interface userSignupDTO {
    id:string;
    name: string,
    email: string;
    password: string;
    role: ROLE;
}

export interface userSignup {
    email: string;
    name: string;
    password: string;
    role: ROLE;
}

export interface userLogin {
    email: string;
    password: string;
}