'use client';

import React from 'react'
import { useParams } from 'next/navigation';

export default function CategoryProduct() {
  const params = useParams();
  const category = params?.category as string;
  const id = params?.id as string;
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">
        Producto {id} en {category}
      </h1>
      <p>Categoría: {category}</p>
      <p>ID del producto: {id}</p>
    </div>
  );
}