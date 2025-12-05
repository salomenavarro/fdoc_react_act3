'use client';

import { useRouter } from 'next/navigation';

export default function NavigationButtons() {
  const router = useRouter();
  
  const handleGoHome = () => {
    router.push('/');
  };
  const handleGoBack = () => {
    router.back();
  };
  const handleGoForward = () => {
    router.forward();
  };
  const handleRefresh = () => {
    router.refresh();
  };

  return (
    <div className="bg-gray-100 p-6 rounded-xl mb-6 border border-gray-200">
      <h3 className="text-xl font-semibold mb-4 text-gray-700">Navegación Programática (useRouter)</h3>
      <div className="flex flex-wrap gap-3">
        <button 
          onClick={handleGoHome}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition shadow-md"
        >
          Ir al Inicio
        </button>
        <button 
          onClick={handleGoBack}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition shadow-md"
        >
          Atrás
        </button>
        <button 
          onClick={handleGoForward}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition shadow-md"
        >
          Adelante
        </button>
        <button 
          onClick={handleRefresh}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition shadow-md"
        >
          Refrescar Página
        </button>
      </div>
    </div>
  );
}