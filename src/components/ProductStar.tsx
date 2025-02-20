import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface FeaturedProductProps {
    title: string
    description: string
    buttonText: string
    buttonLink: string
    imageSrc: string
    imageMobileSrc: string
    imageAlt: string
    imageOnRight?: boolean
}

export default function FeaturedProduct({
    title,
    description,
    buttonText,
    buttonLink,
    imageSrc,
    imageMobileSrc,
    imageAlt,
    imageOnRight = false,
}: FeaturedProductProps) {
    return (
        <div className="py-12 md:py-20">
            <div
                className={`container mx-auto px-4 md:px-8 ${imageOnRight ? "md:flex-row-reverse" : "md:flex-row"} flex flex-col items-center md:space-x-8`}
            >
                <div className="w-full md:w-1/3">
                    <div className="relative aspect-[4/3] md:aspect-[577/1280] w-full max-w-sm mx-auto">
                        <Image
                            src={imageMobileSrc || imageSrc}
                            alt={imageAlt}
                            fill
                            className="rounded-lg object-cover md:hidden"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <Image
                            src={imageSrc || "/placeholder.svg"}
                            alt={imageAlt}
                            fill
                            className="rounded-lg object-cover hidden md:block"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>
                </div>
                <div className="mt-8 md:mt-0 md:w-2/3">
                    <h2 className="mb-4 text-3xl font-bold">{title}</h2>
                    <p className="mb-6 text-lg text-gray-600">{description}</p>
                    <a
                        href={buttonLink}
                        className="inline-flex items-center rounded bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-700"
                    >
                        {buttonText}
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                </div>
            </div>
        </div>
    )
}

