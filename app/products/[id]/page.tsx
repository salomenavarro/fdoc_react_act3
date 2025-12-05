'use client';

import { useParams } from 'next/navigation';

export default function ProductPage() {
  // CORRECTO: Usar useParams en un Client Component.
  const params = useParams();
  const id = params?.id as string;

  return (
    <div className="p-8 bg-white rounded-xl shadow-2xl border border-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">
        Detalle del Producto (Ruta Dinámica Simple)
      </h1>
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h2 className="text-xl font-semibold mb-2 text-blue-700">Producto #{id}</h2>
        <p className="mb-1">
            <strong>ID de Ruta:</strong> <code className="font-mono bg-blue-100 p-1 rounded text-sm">{id}</code>
        </p>
        <p className="mb-1">
            <strong>Ruta solicitada:</strong> <code className="font-mono bg-blue-100 p-1 rounded text-sm">/products/{id}</code>
        </p>
        <p className="text-sm mt-3">
            Este es un **Client Component** que obtiene el parámetro de la ruta usando el hook <code className="font-mono bg-blue-100 p-1 rounded">useParams()</code>.
        </p>
      </div>
    </div>
  );
}