export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}
 
export interface PostDTO {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    authorId: string
}

export interface postInput {
    photo: string 
    description: string
    type: POST_TYPES
    authorId: string
}

export interface postOutput {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
}

export interface PostInput {
    photo: string,
    description: string,
    type: POST_TYPES,
    authorId: string
}

export interface AuthenticationData {
    id: string
}