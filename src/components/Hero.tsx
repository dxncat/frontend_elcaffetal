import Image from "next/image"
import { ShoppingCart, Info } from "lucide-react"

interface HeroProps {
    title: string
    subtitle: string
    storeButtonText: string
    storeButtonLink: string
    aboutButtonText: string
    aboutButtonLink: string
    backgroundImage: string
}

export default function Hero({
    title,
    subtitle,
    storeButtonText,
    storeButtonLink,
    aboutButtonText,
    aboutButtonLink,
    backgroundImage,
}: HeroProps) {
    return (
        <div className="relative h-[50vh] min-h-[600px] w-full overflow-hidden">
            <Image
                src={backgroundImage}
                alt="Imagen de fondo de elcaffetal"
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
                priority
                quality={85}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-xl">
                        <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">{title}</h1>
                        <p className="mb-8 text-lg text-white sm:text-xl">{subtitle}</p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                            <a
                                href={storeButtonLink}
                                className="inline-flex items-center justify-center rounded bg-white px-6 py-3 text-lg font-semibold text-black transition-colors hover:bg-gray-200"
                            >
                                <ShoppingCart className="mr-2 h-5 w-5" />
                                {storeButtonText}
                            </a>
                            <a
                                href={aboutButtonLink}
                                className="inline-flex items-center justify-center rounded border-2 border-white bg-transparent px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-black"
                            >
                                <Info className="mr-2 h-5 w-5" />
                                {aboutButtonText}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

