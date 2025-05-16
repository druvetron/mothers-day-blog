// app/stories/page.tsx
'use client';

import Link from 'next/link';
import { stories } from '@/data/stories';

export default function StoriesPage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">Stories for Mom 💖</h1>
      <div className="space-y-6">
        {stories.map((story) => (
          <Link key={story.id} href={`/stories/${story.id}`}>
            <div className="p-4 border rounded-lg shadow-md bg-white hover:bg-pink-50 transition">
              <h2 className="text-xl font-semibold text-gray-800">{story.title}</h2>
              <p className="text-sm text-gray-500 mb-2">By {story.author}</p>
              <p className="text-gray-700 line-clamp-2">{story.content}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
