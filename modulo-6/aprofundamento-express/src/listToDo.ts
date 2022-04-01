import { cp } from "fs"

type ListToDo = {
    userId: string,
    id: string,
    title: string,
    completed: boolean
}[]

export const listToDo :ListToDo =[
    {
        userId: "2",
        id:"2-a",
        title:"tchurubangos",
        completed: false
    },
    {
        userId: '1',
        id: '1-a',
        title: "et porro tempora",
        completed: true
    },
]
