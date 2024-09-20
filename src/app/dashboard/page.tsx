import React from 'react';

export interface PageProps {
  params: { id: string };
}

export default function Page({}: PageProps) {
  return (
    <main>
      <h1 className="text-xl">Dashboard Page</h1>
    </main>
  );
}
