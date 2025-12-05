'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
        
    if (searchTerm.trim()) {
      // Navegación a la página /search con parámetros de consulta
      const searchParams = new URLSearchParams();
      searchParams.set('q', searchTerm.trim());
      if (category) {
        searchParams.set('category', category);
      }
            
      router.push(`/search?${searchParams.toString()}`);
    }
  };
  
  const handleQuickSearch = (term: string) => {
    // Redirección con parámetros simples
    router.push(`/search?q=${encodeURIComponent(term)}`);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-2xl border border-gray-100">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Búsqueda de Productos con Parámetros URL</h3>
            <form onSubmit={handleSearch} className="space-y-4">
        <div>
          <label htmlFor="search-term" className="sr-only">Término de Búsqueda</label>
          <input
            id="search-term"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar productos..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="category-select" className="sr-only">Categoría</label>
          <select
            id="category-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Todas las categorías</option>
            <option value="electronics">Electrónicos</option>
            <option value="accessories">Accesorios</option>
            <option value="clothing">Ropa</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition font-semibold shadow-md"
        >
          Buscar
        </button>
      </form>

      <div className="mt-6 border-t pt-4">
        <p className="text-sm text-gray-600 mb-2 font-medium">Búsquedas rápidas (Ejemplo de `router.push`):</p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleQuickSearch('laptop')}
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-300 transition"
          >
            #Laptop
          </button>
          <button
            onClick={() => handleQuickSearch('mouse')}
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-300 transition"
          >
            #Mouse
          </button>
          <button
            onClick={() => handleQuickSearch('teclado')}
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-300 transition"
          >
            #Teclado
          </button>
        </div>
      </div>
    </div>
  );
}