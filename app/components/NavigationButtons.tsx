'use client';

import { useRouter } from 'next/navigation';

export default function NavigationButtons() {
  const router = useRouter();

  return (
    <div className="flex space-x-4 mt-6">
      <button
        onClick={() => router.push('/products/2')}
        className="px-4 py-2 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 transition duration-200"
      >
        Ir a Producto ID 2 (router.push)
      </button>
      <button
        onClick={() => router.back()}
        className="px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-200"
      >
        Volver (router.back)
      </button>
      <button
        onClick={() => router.forward()}
        className="px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-200"
      >
        Adelante (router.forward)
      </button>
    </div>
  );
}