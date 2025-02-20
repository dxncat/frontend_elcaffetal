import { getCategories } from "@/lib/get-categories"

export default async function page() {

    const { title, description } = await getCategories()

    return (
        <div>
            {title}
        </div>
    )

}