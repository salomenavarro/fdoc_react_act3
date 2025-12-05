// NO lleva 'use client', es un Server Component

interface DocsPageProps {
  params: {
    // [...slug] es un array de strings si hay segmentos o undefined si la ruta es /docs
    slug: string[] | undefined; 
  };
}

// CORRECCIÓN FINAL: Declaramos la función como 'async' y usamos 'await' para desestructurar 'params', 
// lo cual resuelve el error de "params is a Promise" en las versiones recientes de Next.js.
export default async function DocsPage({ params }: DocsPageProps) {
  // Aplicamos el 'await' explícito.
  const { slug } = await params;

  const segments = slug || [];
  const path = segments.join('/');
  
  return (
    <div className="p-8 bg-white rounded-xl shadow-2xl border border-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">
        Documentación (Ruta de Captura Total - <code className="font-mono text-xl text-indigo-600">[...slug]</code>)
      </h1>
      
      <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-6">
        <p className="text-lg mb-2">
            <strong>Ruta Completa:</strong> <span className="font-mono bg-yellow-100 p-1 rounded text-sm">/docs/{path || '...' }</span>
        </p>
        <p>
            <strong>Segmentos:</strong> <span className="font-mono bg-yellow-100 p-1 rounded text-sm">{JSON.stringify(segments)}</span>
        </p>
      </div>

      <div className="prose max-w-none text-gray-700">
        <h2 className="text-2xl font-bold text-yellow-700">Contenido de la Sección</h2>
        <p>
          Esta página está diseñada para manejar cualquier nivel de subruta bajo `/docs/`. 
          Si la ruta fuera `/docs/api/authentication/oauth`, los segmentos serían `["api", "authentication", "oauth"]`. 
          Esta funcionalidad es clave para sistemas de documentación flexibles.
        </p>
        <p className="font-semibold text-sm">
            Mostrando contenido para la sección: <span className="text-yellow-800 italic">{path || 'Página de inicio de la documentación'}</span>
        </p>
      </div>
    </div>
  );
}