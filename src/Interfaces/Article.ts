export interface Article {
  href: string;
  idno: string | number;
  title: string;
  author: string;
  description: string;
  tags: Array<string>;
  avatar: string;
  published_at: string;
}
