import { connection } from ".";


export const changeUser =async (id:string, name?:string, nickname?:string): Promise<void> => {

    if(!name){
        await connection("TodoListUser")
        .update({
            "nickname": nickname
        })
        .where({
            "id": id
        })
    }else if(!nickname){
        await connection("TodoListUser")
        .update({
            "name": name
        })
        .where({
            "id": id
        })
    }else{
        await connection("TodoListUser")
        .update({
            "name": name,
            "nickname": nickname
        })
        .where({
            "id": id
        })
    }





    return 
}