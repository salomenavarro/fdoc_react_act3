'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense } from 'react';

// Componente que usa los hooks de cliente
function SearchResults() {
  // CORRECTO: Usar useSearchParams en un Client Component
  const searchParams = useSearchParams(); 
  const router = useRouter();

  const query = searchParams.get('q') || '';
  const category = searchParams.get('category') || '';

  const handleClearSearch = () => {
    // Navegación programática
    router.push('/products');
  };

  return (
    <div className="p-8 bg-white rounded-xl shadow-2xl border border-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">
        Resultados de Búsqueda (Uso de searchParams)
      </h1>
      
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
        <h2 className="text-xl font-semibold mb-2 text-blue-700">Parámetros Leídos de la URL</h2>
        <p className="mb-1">
          <strong>Término (q):</strong> <code className="font-mono bg-blue-100 p-1 rounded text-sm">{query || 'N/A'}</code>
        </p>
        {category && (
          <p className="mb-1">
            <strong>Categoría:</strong> <code className="font-mono bg-blue-100 p-1 rounded text-sm">{category}</code>
          </p>
        )}
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg mb-6">
        <p className="text-gray-700 font-medium">
          Aquí se mostrarían los resultados filtrados para: **{query}**
          {category && ` en la categoría: ${category}`}
        </p>
      </div>
      
      <button
        onClick={handleClearSearch}
        className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition shadow-md"
      >
        Ver Todos los Productos
      </button>
    </div>
  );
}

// Envuelve SearchResults en Suspense para manejar el renderizado inicial en el servidor
export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="p-8 bg-white rounded-xl shadow-2xl border border-gray-100 text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Cargando Resultados...</h1>
        <p className="text-gray-500">Esperando que se resuelvan los parámetros de búsqueda.</p>
      </div>
    }>
      <SearchResults />
    </Suspense>
  );
}