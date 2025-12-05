'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchForm() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // Redirige a la ruta /search con el parámetro query en la URL
      router.push(`/search?query=${encodeURIComponent(query.trim())}`);
      setQuery('');
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center space-x-2">
      <label htmlFor="search-input" className="sr-only">
        Buscar
      </label>
      <input
        id="search-input"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar productos..."
        className="p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 w-full md:w-64"
      />
      <button
        type="submit"
        className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200 font-semibold"
      >
        Buscar
      </button>
    </form>
  );
}