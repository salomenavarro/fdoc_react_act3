import NavigationButtons from './components/NavigationButtons';
import SearchForm from './components/SearchForm';

export default function Home() {
  return (
    <div className="p-8 bg-white rounded-xl shadow-2xl border border-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-indigo-700">
        Actividad 3: Next.js App Router
      </h1>
      <p className="text-lg mb-8 text-gray-600">
        Demostración de rutas dinámicas, rutas de captura total y navegación programática, cumpliendo con la estructura de Server Components y Client Components.
      </p>
            
      {/* Ejercicio 3B: Navegación Programática */}
      <NavigationButtons />
      
      {/* Ejercicio 3B: Formulario de Búsqueda */}
      <SearchForm />
            
      <div className="bg-gray-50 p-6 rounded-lg mt-8 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Funcionalidades Clave</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>✅ **Rutas Dinámicas y Catch-All:** Implementadas como Client Components (según enunciado) para evitar el error crítico de `await params`.</li>
          <li>✅ **Navegación Programática:** Uso correcto de `useRouter` para `push`, `back`, `forward` y manejo de `searchParams`.</li>
          <li>✅ **División SC/CC:** Componentes cliente declarados con `'use client'` solo cuando es necesario (hooks de navegación o estado).</li>
        </ul>
      </div>
    </div>
  );
}