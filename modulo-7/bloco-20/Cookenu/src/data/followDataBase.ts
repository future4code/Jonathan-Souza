import { unFollowDTO, followDTO } from "../model/followDTO";
import { DataBase } from "./dataBase";

export class FollowDataBase extends DataBase{
    private static TABLE_NAME = "cook_follow"

    public async followUser(input:followDTO):Promise<void>{
        await DataBase.connection
        .insert({
            user_id: input.userId,
            user_to_follow_id: input.userToFollowId
        })
        .into(FollowDataBase.TABLE_NAME)
    }

    public async unFollowUser(input:unFollowDTO):Promise<void>{
        await DataBase.connection
        .delete()
        .from(FollowDataBase.TABLE_NAME)
        .where({
            user_id: input.userId,
            user_to_follow_id: input.userToUnfollowId
        })
    }
}