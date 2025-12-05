import Link from 'next/link';

export default function ProductsPage() {
  const products = [
    { id: 1, name: 'Laptop Pro X' },
    { id: 2, name: 'Smartphone Z2' },
    { id: 3, name: 'Auriculares Max' },
  ];

  return (
    <div className="p-8 bg-white rounded-xl shadow-2xl border border-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">
        Lista de Productos (Ruta Estática)
      </h1>

      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="p-4 bg-gray-50 rounded-lg shadow hover:bg-gray-100 transition duration-150">
            <Link 
              href={`/products/${product.id}`}
              className="text-xl font-semibold text-indigo-600 hover:text-indigo-800"
            >
              {product.name} (ID: {product.id})
            </Link>
            <p className="text-gray-500 text-sm mt-1">
                Ruta dinámica simple: /products/[id]
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm text-gray-600">
          Esta página muestra enlaces que dirigen a una ruta dinámica simple: <code className="font-mono bg-gray-200 p-1 rounded">/products/[id]</code>.
      </p>
    </div>
  );
}