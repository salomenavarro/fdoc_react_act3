import React from 'react'
import Link from 'next/link';


const products = [
  { id: '1', name: 'Laptop Gaming', price: 1299, category: 'electronics' },
  { id: '2', name: 'Mouse Inalámbrico', price: 49, category: 'accessories' },
  { id: '3', name: 'Teclado Mecánico', price: 129, category: 'accessories' },
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Nuestros Productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <div className="mt-4 space-y-2">
              <Link 
                href={`/products/${product.id}`}
                className="block bg-blue-500 text-white px-4 py-2 rounded text-center hover:bg-blue-600"
              >
                Ver Detalles
              </Link>
              <Link 
                href={`/categories/${product.category}/products/${product.id}`}
                className="block bg-green-500 text-white px-4 py-2 rounded text-center hover:bg-green-600"
              >
                Ver en Categoría
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}