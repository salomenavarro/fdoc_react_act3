'use client';

import { useParams } from 'next/navigation';

export default function CategoryProduct() {
  // CORRECTO: Usar useParams en un Client Component.
  const params = useParams();
  const category = params?.category as string;
  const id = params?.id as string;

  return (
    <div className="p-8 bg-white rounded-xl shadow-2xl border border-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">
        Ruta Dinámica Anidada
      </h1>
      <div className="bg-green-50 p-6 rounded-lg border border-green-200">
        <h2 className="text-xl font-semibold mb-2 text-green-700">
          Detalles del Producto
        </h2>
        <p className="mb-1">
            <strong>Categoría:</strong> <code className="font-mono bg-green-100 p-1 rounded text-sm">{category}</code>
        </p>
        <p className="mb-1">
            <strong>ID del producto:</strong> <code className="font-mono bg-green-100 p-1 rounded text-sm">{id}</code>
        </p>
        <p className="text-sm mt-3">
            Este **Client Component** demuestra cómo manejar múltiples parámetros de ruta anidados.
        </p>
      </div>
    </div>
  );
}