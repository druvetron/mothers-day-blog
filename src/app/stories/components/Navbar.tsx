// components/Navbar.tsx
import React from 'react';

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center p-4 shadow-md">
      <h1 className="text-xl font-bold">Personal Travel Blog</h1>
      <div className="flex items-center gap-4">
        <button>☰</button>
        <button>🔍</button>
      </div>
    </nav>
  );
}
