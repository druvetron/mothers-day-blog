// src/app/layout.tsx

import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Personal Tribute Blog',
  description: "A Mother's Day tribute blog",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 font-sans">
        <header className="p-4 shadow bg-white flex justify-between items-center">
          <h1 className="text-xl font-bold">Personal Tribute Blog</h1>
          <div className="flex gap-4">
            <button>☰</button>
            <button>🔍</button>
          </div>
        </header>
        {children}
        <footer className="p-4 text-center text-sm text-gray-600 mt-10">
          © {new Date().getFullYear()} Personal Tribute Blog. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
