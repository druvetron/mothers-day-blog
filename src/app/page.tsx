'use client'; // ✅ Required for useState to work in this file

import Link from 'next/link';
import articles from '@/data/articles.json';
import HeroCarousel from '@/components/HeroCarousel';
import { useState } from 'react';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // ✅ Filter articles based on selected category
  const filteredArticles =
    selectedCategory === 'All'
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <main className="max-w-6xl mx-auto px-4 py-8 space-y-12">
      <HeroCarousel />

      {/* Category Boxes */}
      <section className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {["All", "Trends", "Feeds", "Guides", "Stories", "Love", "Trips"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`p-4 rounded shadow text-center font-semibold transition-colors ${
              selectedCategory === cat
                ? "bg-pink-500 text-white"
                : "bg-white hover:bg-pink-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Recent Articles */}
      <section>
        <h3 className="text-xl font-bold mb-4">Recent Articles</h3>
        {filteredArticles.length === 0 ? (
          <p>No articles found in this category.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <article key={article.id} className="bg-white p-4 rounded shadow-md">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-64 h-48 object-cover rounded"
                />
                <h4 className="text-lg font-semibold mt-2">{article.title}</h4>
                <p className="text-sm text-gray-600">
                  {article.date} · {article.category} · {article.readingTime} min read
                </p>
                <p className="text-gray-700 mt-2">{article.excerpt}</p>
                <Link href={`/stories/${article.id}`}>
                  <button className="mt-2 text-pink-600 font-semibold">Read more</button>
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
