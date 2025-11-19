'use client';
import React from 'react'
import { useParams } from 'next/navigation';


export default function DocsPage() {
  const params = useParams();
  const slug = params?.slug as string[] | string | undefined;
  const segments = Array.isArray(slug) ? slug : slug ? [slug] : [];
  const path = segments.join('/');
  
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Documentación</h1>
      <div className="bg-blue-50 p-4 rounded-lg mb-4">
        <p><strong>Ruta actual:</strong> /docs/{path}</p>
        <p><strong>Segmentos:</strong> {JSON.stringify(segments)}</p>
      </div>
      <div className="prose">
        <h2>Contenido de la documentación</h2>
        <p>Esta es la página para: {path}</p>
      </div>
    </div>
  );
}
