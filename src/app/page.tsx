import Hero from "@/components/Hero";
import FeaturedProduct from "@/components/ProductStar";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero */}
      <Hero
        title="Bienvenido a ElCaffetal"
        subtitle="Descubre nuestra amplia gama de productos y conoce más sobre nosotros"
        storeButtonText="Ir a la Tienda"
        storeButtonLink="/tienda"
        aboutButtonText="Sobre Nosotros"
        aboutButtonLink="/sobre-nosotros"
        backgroundImage="/hero.webp"
      />

      {/* Segunda sección */}


    </div>
  )
}

