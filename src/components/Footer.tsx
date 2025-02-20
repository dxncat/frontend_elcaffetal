import { Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="mb-4 w-full md:w-1/3">
            <h3 className="mb-2 text-lg font-semibold">El<span className="text-amber-900">Caffetal</span></h3>
            <p className="text-gray-600">Ofrecemos productos de alta calidad para mejorar tu estilo de vida.</p>
          </div>
          <div className="mb-4 w-full md:w-1/3">
            <h3 className="mb-2 text-lg font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-blue-600 hover:text-blue-800">
                  Tienda
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-blue-600 hover:text-blue-800">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-600 hover:text-blue-800">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-4 w-full md:w-1/3">
            <h3 className="mb-2 text-lg font-semibold">Contáctenos</h3>
            <p className="text-gray-600">Email: info@elcaffetal.com</p>
            <p className="text-gray-600">Teléfono: (123) 456-7890</p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-4 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} ElCaffetal. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}