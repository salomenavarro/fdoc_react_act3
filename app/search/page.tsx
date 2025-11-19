'use client';
import React from 'react'

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense } from 'react';

function SearchResults() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get('q') || '';
  const category = searchParams.get('category') || '';

  const handleClearSearch = () => {
    router.push('/products');
  };

  return (
    <div className="container mx-auto p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Resultados de Búsqueda</h1>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p><strong>Término de búsqueda:</strong> {query}</p>
          {category && <p><strong>Categoría:</strong> {category}</p>}
        </div>
      </div>

      <div className="mb-4">
        <button
          onClick={handleClearSearch}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Ver Todos los Productos
        </button>
      </div>

      <div className="bg-yellow-50 p-4 rounded-lg">
        <p className="text-gray-700">
          Aquí se mostrarían los resultados filtrados para: <strong>{query}</strong>
          {category && ` en la categoría: ${category}`}
        </p>
        <p className="text-sm text-gray-600 mt-2">
          (En una aplicación real, aquí harías una consulta a tu base de datos)
        </p>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Cargando resultados...</div>}>
      <SearchResults />
    </Suspense>
  );
}
