import Link from "next/link"
import { Button } from "./ui/button"

function Navbar() {
    return (
        <div className='flex items-center justify-between p-4 mx-auto sm:max-w-4xl md:max-w-6xl'>

            {/* Link a home */}
            <Link href={'/'}>
                <h1 className='text-3xl'> El
                    <span className='font-bold text-amber-900'>Caffetal</span>
                </h1>
            </Link>

            {/* Links de escritorio */}
            <div className="items-center justify-between hidden sm:flex">
                <Link href={'/tienda'}>
                    <span className="mx-2">Tienda</span>
                </Link>
                <Link href={'/nosotros'}>
                    <span className="mx-2">Nosotros</span>
                </Link>
                <Link href={'/contacto'}>
                    <span className="mx-2">Contacto</span>
                </Link>
            </div>

            {/* segunda sección */}
            <div className="items-center justify-between hidden sm:flex">
                <Link href={'/login'}>
                    <span className="mx-2">Iniciar Sesión</span>
                </Link>
                <Link href={'/registro'}>
                    <Button className="bg-amber-900 hover:bg-amber-700">Registrarse</Button>
                </Link>
            </div>

        </div>
    )
}

export default Navbar