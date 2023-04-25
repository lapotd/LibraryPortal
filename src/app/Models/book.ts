export interface Book {
  id: number;
  title: string;
  authorId: number;
  publisherId: number;
  publishedDate: Date;
  description: string;
  price: number;
  stockAmount: number;
  genre: number;
}
