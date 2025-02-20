import { query } from "./strapi";

export function getProducts() {
    return query('products').then(res => {
        return res
    })
}