export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
}

export interface BlogParams {
  slug: string;
}