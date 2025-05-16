'use client';

import { useState } from 'react';
import articles from '@/data/articles.json';
import Link from 'next/link';
import Image from 'next/image'; // <-- import Image here

const featured = articles.slice(0, 3); // first 3 articles

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? featured.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === featured.length - 1 ? 0 : prev + 1));

  const article = featured[currentIndex];

  return (
    <div className="relative bg-pink-100 p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <div className="max-w-md">
          <p className="text-sm uppercase text-gray-500">{article.category}</p>
          <h2 className="text-2xl font-bold">{article.title}</h2>
          <p className="mt-2 text-gray-700">{article.excerpt}</p>
          <Link href={`/stories/${article.id}`}>
            <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded">
              Read more
            </button>
          </Link>
        </div>
        {/* Use Next.js Image component */}
        <Image
          src={article.imageUrl}
          alt={article.title}
          width={160}   // corresponds roughly to w-40 (40*4px)
          height={160}  // corresponds roughly to h-40 (40*4px)
          className="object-cover rounded shadow-md"
          priority // optional: preload image for faster LCP
        />
      </div>
      <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
        <button onClick={prevSlide}>&larr;</button>
      </div>
      <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
        <button onClick={nextSlide}>&rarr;</button>
      </div>
    </div>
  );
}
