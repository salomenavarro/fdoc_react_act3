import NavigationButtons from './components/NavigationButtons';

export default function Home() {
  return (
    <div className="text-center p-10 bg-white rounded-xl shadow-2xl border border-gray-100">
      <h1 className="text-5xl font-extrabold mb-4 text-indigo-700">
        Bienvenido al Router de Next.js
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Explora las diferentes rutas para ver la implementación de: Rutas Estáticas, Dinámicas, Anidadas, Catch-All, y Búsqueda con `searchParams`.
      </p>

      <div className="mt-8 border-t pt-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Navegación Programática (Client Component)
        </h2>
        <NavigationButtons />
        <p className="mt-4 text-sm text-gray-500">
            Estos botones demuestran el uso del hook `useRouter` dentro de un Client Component.
        </p>
      </div>
    </div>
  );
}