import { BlogPost } from '../../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Why We Built AskYourDocs.ai in 15 Minutes',
    description: 'How rapid validation beats perfectionism every time',
    content: `# Why We Built AskYourDocs.ai in 15 Minutes\n\n## The Problem with Perfectionism...`,
    date: '2024-10-31',
    readTime: '3 min read',
    category: 'Product',
    image: '/blog/15-minute-launch.jpg'
  },
  {
    id: '2', 
    title: 'The 19-Minute MVP Validation Method',
    description: 'How to test startup ideas faster than your coffee break',
    content: `# The 19-Minute MVP Validation Method\n\n## Speed as Your Competitive Advantage...`,
    date: '2024-10-30',
    readTime: '5 min read',
    category: 'Methodology'
  }
];