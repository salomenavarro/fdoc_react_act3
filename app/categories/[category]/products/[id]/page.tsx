// NO lleva 'use client', es un Server Component que recibe params directamente

interface CategoryProductProps {
  params: {
    category: string; // Parámetro dinámico [category]
    id: string;       // Parámetro dinámico [id]
  };
}

// CORRECCIÓN FINAL: Declaramos la función como 'async' y usamos 'await' para desestructurar 'params', 
// lo cual resuelve el error de "params is a Promise" en las versiones recientes de Next.js.
export default async function CategoryProduct({ params }: CategoryProductProps) {
  // Aplicamos el 'await' explícito.
  const { category, id } = await params;

  return (
    <div className="p-8 bg-white rounded-xl shadow-2xl border border-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">
        Ruta Dinámica Anidada
      </h1>
      
      <div className="bg-green-50 p-6 rounded-lg border border-green-200">
        <h2 className="text-2xl font-semibold mb-3 text-green-700">
          Producto <span className="font-mono bg-green-100 p-1 rounded text-sm">#{id}</span> en la Categoría <span className="font-mono bg-green-100 p-1 rounded text-sm">{category}</span>
        </h2>
        <p className="mb-2">
            <strong>Ruta solicitada:</strong> <span className="font-mono bg-green-100 p-1 rounded text-sm">/categories/{category}/products/{id}</span>
        </p>
        <p className="text-lg mt-4">
            Este Server Component demuestra cómo Next.js maneja múltiples parámetros de ruta anidados.
        </p>
      </div>
    </div>
  );
}