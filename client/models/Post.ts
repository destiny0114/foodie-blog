export interface Post {
  slug: string;
  formatter: {
    title: string;
    excerpt: string;
    cover_image: string;
    category: string;
    date: string;
  };
  content?: string;
}
