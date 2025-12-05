import Link from 'next/link';

const products = [
  { id: '1', name: 'Laptop Gaming', price: 1299, category: 'electronics' },
  { id: '2', name: 'Mouse Inalámbrico', price: 49, category: 'accessories' },
  { id: '3', name: 'Teclado Mecánico', price: 129, category: 'accessories' },
];

export default function ProductsPage() {
  return (
    <div className="p-8 bg-white rounded-xl shadow-2xl border border-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Nuestros Productos (Ruta Estática)</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-6 shadow-md hover:shadow-lg transition duration-200">
            <h3 className="text-xl font-semibold mb-1 text-blue-600">{product.name}</h3>
            <p className="text-gray-600 mb-4">Categoría: {product.category} | ${product.price}</p>
            <div className="mt-4 space-y-3">
              <Link 
                href={`/products/${product.id}`}
                className="block bg-blue-500 text-white px-4 py-2 rounded text-center hover:bg-blue-600 transition duration-150 font-medium"
              >
                Ver Detalles (/products/[id])
              </Link>
              <Link 
                href={`/categories/${product.category}/products/${product.id}`}
                className="block bg-green-500 text-white px-4 py-2 rounded text-center hover:bg-green-600 transition duration-150 font-medium"
              >
                Ver en Categoría (/categories/[c]/products/[id])
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}