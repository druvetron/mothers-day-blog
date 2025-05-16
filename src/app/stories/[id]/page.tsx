import { notFound } from 'next/navigation';
import { stories } from '@/data/stories';

export default function StoryDetailPage({ params }: { params: { id: string } }) {
  const storyId = Number(params.id);
  const story = stories.find((s) => s.id === storyId);

  if (!story) return notFound();

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold text-pink-600 mb-4">{story.title}</h1>
      <p className="text-sm text-gray-500 mb-4">By {story.author}</p>
      <p className="text-gray-800 text-lg">{story.content}</p>
    </main>
  );
}
