'use client';

import { useParams } from 'next/navigation';

export default function DocsPage() {
  // CORRECTO: Usar useParams en un Client Component.
  const params = useParams();
  const slug = params?.slug as string[] | string | undefined;

  // Normaliza el slug a un array o a un array con el string, o vacío si es undefined
  const segments = Array.isArray(slug) ? slug : slug ? [slug] : [];
  const path = segments.join('/');
    
  return (
    <div className="p-8 bg-white rounded-xl shadow-2xl border border-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Documentación (Ruta de Captura Total)</h1>
      
      <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-6">
        <h2 className="text-xl font-semibold mb-2 text-yellow-700">Información de la Ruta</h2>
        <p className="mb-1">
            <strong>Ruta actual:</strong> <code className="font-mono bg-yellow-100 p-1 rounded text-sm">/docs/{path || '...' }</code>
        </p>
        <p className="mb-1">
            <strong>Segmentos ([...slug]):</strong> <code className="font-mono bg-yellow-100 p-1 rounded text-sm">{JSON.stringify(segments)}</code>
        </p>
      </div>

      <div className="prose max-w-none text-gray-700">
        <h2 className="text-2xl font-semibold">Contenido de la Sección</h2>
        <p>
          Esta página maneja cualquier subruta bajo `/docs/`. Los segmentos de la URL se capturan en el array `slug`.
        </p>
        <p className="font-semibold text-base text-yellow-800">
            Mostrando contenido para: **{path || 'Página de inicio'}**
        </p>
      </div>
    </div>
  );
}