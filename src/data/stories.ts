// src/data/stories.ts
export type Story = {
  id: number;
  title: string;
  author: string;
  content: string;
};

export const stories: Story[] = [
  {
    id: 1,
    title: "My Mom's Unconditional Love",
    author: "Druv",
    content: "She always stood by me during tough times. Her smile gives me strength every day.",
  },
  {
    id: 2,
    title: "Sunday Mornings with Mom",
    author: "Neha",
    content: "Waking up to the smell of parathas and her warm hug — nothing beats that!",
  },
];
