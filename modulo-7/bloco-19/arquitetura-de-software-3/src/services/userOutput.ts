import { userOutputDTO } from "../model/model"

export const userOutput = (array:any) => {
    let result:userOutputDTO[] = []
    array.map((e:userOutputDTO) => {
        result.push({
          id: e.id,
          name: e.name,
          email: e.email
        })
    })
    return result
}