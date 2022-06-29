import { getData } from './../services/authentication';
import { FieldEmpty, NoLog, UserNotFound } from './../error/customError';
import { followDTO, followInput, unFollowDTO, unFollowInput } from './../model/followDTO';
import { FollowDataBase } from "../data/followDataBase"
import { checkUserId } from '../services/functions';

export class FollowBussines {

    async followUser(req:followInput):Promise<void> {
        const {userToFollowId, token} = req

        if (!token){
            throw new NoLog()
        }else if (!userToFollowId){
            throw new FieldEmpty()
        }

        const user = getData(token)
        
        const checkUserToFollowId = await checkUserId(userToFollowId)
                
        if(!checkUserToFollowId){
            throw new UserNotFound()
        }

        const input:followDTO = {
            userId: user.id,
            userToFollowId,
        }

       await new FollowDataBase().followUser(input)
    }

    async unFollowUser(req:unFollowInput):Promise<void> {
        const {userToUnfollowId, token} = req

        if (!token){
            throw new NoLog()
        }else if (!userToUnfollowId){
            throw new FieldEmpty()
        }

        const user = getData(token)
        
        const checkUserToUnFollowId = await checkUserId(userToUnfollowId)
                
        if(!checkUserToUnFollowId){
            throw new UserNotFound()
        }

        const input:unFollowDTO = {
            userId: user.id,
            userToUnfollowId,
        }

       await new FollowDataBase().unFollowUser(input)
    }
}