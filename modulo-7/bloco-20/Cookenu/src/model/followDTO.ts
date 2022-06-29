export interface followDTO {
    userId: string;
    userToFollowId: string;
}

export interface followInput{
    userToFollowId: string;
    token: string;
}

export interface unFollowInput{
    userToUnfollowId: string;
    token: string;
}

export interface unFollowDTO{
    userToUnfollowId: string;
    userId: string;
}