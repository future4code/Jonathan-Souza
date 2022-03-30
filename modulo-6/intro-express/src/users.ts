type Users = {
    id: string,
    name: string,
    phone: number,
    email: string,
    website: string,
    post: Post,
}[]

type Post = {
    id: number,
    title: string,
    body: string,
    userId: string
}[]


/*
    Coloquei os Post no array de users pois os post é feito pro cada usuario sendo assim ficaria mais organizado e mais rapido
    de ver quem foi que fez os post e seria mais facil para puxar um historico de post do usuario.
*/

export const users: Users = [
    {
        id: "1",
        name: "jonathan",
        phone: 123456789,
        email: "email@email",
        website: "www.website.com/jonathan",
        post: [
            {
                id: 10,
                title: "primeiro post",
                body: "oi esse é meu primeiro post",
                userId: "1"
            }
        ],
    },
    {
        id: "2",
        name: "laiza",
        phone: 12345,
        email: "email2@email",
        website: "www.website.com/laiza",
        post:[
            {
                id: 11,
                title: "primeiro post que não é o primeiro",
                body: "eita",
                userId: "2"
            }
        ]
    },
    { 
        id: "3",
        name: "ramon",
        phone: 123,
        email: "email3@email",
        website: "www.website.com/ramon",
        post:[
            {
                id: 12,
                title: "primeiro post que não é o primeiro e nem o segundo",
                body: "eita peste",
                userId: "3"
            }
        ]
    }
]
