'use client';

import { useSearchParams } from 'next/navigation';

// Este componente debe ser de Cliente porque usa useSearchParams
export default function SearchResultsPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';

  const mockResults = [
    { id: 101, title: 'Laptop con procesador Intel' },
    { id: 102, title: 'Mouse ergonómico para programadores' },
    { id: 103, title: 'Monitor 4K para diseño gráfico' },
  ];

  const filteredResults = query
    ? mockResults.filter((r) =>
        r.title.toLowerCase().includes(query.toLowerCase())
      )
    : mockResults;

  return (
    <div className="p-8 bg-white rounded-xl shadow-2xl border border-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">
        Resultados de Búsqueda
      </h1>

      <div className="bg-pink-50 p-6 rounded-lg border border-pink-200 mb-6">
        <p className="text-lg font-semibold text-pink-700">
            Parámetro <code className="font-mono bg-pink-100 p-1 rounded">query</code> de la URL: <span className="font-bold text-pink-800">{query || 'No especificado'}</span>
        </p>
        <p className="text-sm mt-2 text-pink-600">
            Esta página usa el hook <code className="font-mono bg-pink-100 p-1 rounded">useSearchParams</code> (Client Component) para leer la URL.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        {filteredResults.length > 0
          ? `Encontrados ${filteredResults.length} resultados para "${query}"`
          : `No se encontraron resultados para "${query}"`}
      </h2>
      
      <ul className="space-y-3">
        {filteredResults.map((result) => (
          <li key={result.id} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
            <span className="font-medium text-gray-700">{result.title}</span> - ID: {result.id}
          </li>
        ))}
      </ul>
    </div>
  );
}