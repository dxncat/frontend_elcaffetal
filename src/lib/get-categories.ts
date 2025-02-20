import { query } from "./strapi";

export function getCategories() {
    return query('categories').then(res => {
        return res
    })
}