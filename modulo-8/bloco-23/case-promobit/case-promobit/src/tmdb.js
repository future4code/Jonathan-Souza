/* eslint-disable import/no-anonymous-default-export */
const API_KEY = "57314d39843a93be7d8a3c4e9e0ceafb"
const API_BASE = "https://api.themoviedb.org/3"

const basicFetch = async(endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json()
    return json
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: "trending",
                title: "Recomendados",
                item: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "top rated",
                title: "Popular",
                item: await basicFetch(`/movie/top_rated?api_key=${API_KEY}`)
            },
            {
                slug: "action",
                title: "Ação",
                item: await basicFetch(`/genre/movie/list?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "comedy",
                title: "Comedia",
               item: await basicFetch(`/discover/movie?with_genres=35$language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "horror",
                title: "Terror",
                item: await basicFetch(`/discover/movie?with_genres=27$language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "romance",
                title: "Romance",
                item: await basicFetch(`/list/10749?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "documentary",
                title: "Documentarios",
                item: await basicFetch(`/discover/movie?with_genres=99$language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    }
}