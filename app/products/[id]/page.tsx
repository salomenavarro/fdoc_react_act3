// NO lleva 'use client', es un Server Component que recibe params directamente

interface ProductPageProps {
  params: {
    id: string; // Parámetro dinámico [id]
  };
}

// CORRECCIÓN FINAL: Declaramos la función como 'async' y usamos 'await' para desestructurar 'params', 
// lo cual resuelve el error de "params is a Promise" en las versiones recientes de Next.js.
export default async function ProductPage({ params }: ProductPageProps) {
  // Aplicamos el 'await' explícito.
  const { id } = await params; 

  return (
    <div className="p-8 bg-white rounded-xl shadow-2xl border border-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">
        Detalle del Producto (Ruta Dinámica Simple)
      </h1>
      
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h2 className="text-2xl font-semibold mb-3 text-blue-700">Producto #{id}</h2>
        <p className="mb-2">
            <strong>ID de Ruta:</strong> <span className="font-mono bg-blue-100 p-1 rounded text-sm">{id}</span>
        </p>
        <p className="mb-2">
            <strong>Ruta solicitada:</strong> <span className="font-mono bg-blue-100 p-1 rounded text-sm">/products/{id}</span>
        </p>
      </div>
    </div>
  );
}