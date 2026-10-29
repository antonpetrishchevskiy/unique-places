export interface Place {
  id: number;
  name: string;
  image: string;
  category: string;
  city: string;
  country: string;
  rating: number;
  price?: string;
  tags?: string[];
  description: string;
  isExpanded?: boolean;
}
