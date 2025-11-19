'use client';
import React from 'react'
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
    <div className="bg-gray-100 p-4 rounded-lg mb-6">
      <h3 className="text-lg font-semibold mb-4">Navegación Programática</h3>
      <div className="flex flex-wrap gap-2">
        <button 
          onClick={handleGoHome}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Ir al Inicio
        </button>
        <button 
          onClick={handleGoBack}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Atrás
        </button>
        <button 
          onClick={handleGoForward}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Adelante
        </button>
        <button 
          onClick={handleRefresh}
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Refrescar
        </button>
      </div>
    </div>
  );
}
