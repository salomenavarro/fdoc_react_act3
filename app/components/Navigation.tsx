import Link from 'next/link';
import SearchForm from './SearchForm';

export default function Navigation() {
  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Productos', href: '/products' },
    { name: 'Docs (Catch-All)', href: '/docs/intro/setup' },
    { name: 'Anidada (Electro/1)', href: '/categories/electronics/products/1' },
  ];

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto p-4 flex flex-wrap items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition duration-150">
          DemoAppRouter
        </Link>
        <div className="flex space-x-4 mt-2 md:mt-0">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-indigo-600 font-medium transition duration-150"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="w-full md:w-auto mt-4 md:mt-0">
          {/* Componente Cliente para la Búsqueda */}
          <SearchForm />
        </div>
      </nav>
    </header>
  );
}