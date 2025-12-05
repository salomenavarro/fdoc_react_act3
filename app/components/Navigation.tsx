import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex space-x-6">
        <Link href="/" className="hover:text-blue-200 font-semibold transition duration-150">
          Inicio
        </Link>
        <Link href="/products" className="hover:text-blue-200 font-semibold transition duration-150">
          Productos
        </Link>
        {/* Ejemplo de enlace a ruta Catch-All */}
        <Link href="/docs/getting-started/setup" className="hover:text-blue-200 font-semibold transition duration-150">
          Documentación
        </Link>
        {/* Ejemplo de enlace a ruta anidada */}
        <Link href="/categories/electronics/products/999" className="hover:text-blue-200 font-semibold transition duration-150">
          Producto Anidado
        </Link>
      </div>
    </nav>
  );
}