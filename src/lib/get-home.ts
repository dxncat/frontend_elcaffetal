import { query } from "./strapi";

const { API_HOST } = process.env;

export function getHome() {
    return query('home?populate').then(res => {
        console.log(res)
        const { title, description, cover } = res.data
        const image = `${API_HOST}/${cover.url}`
        return { title, description, image }
    })
}

