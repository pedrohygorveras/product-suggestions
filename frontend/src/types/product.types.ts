export interface ProductProps {
  id: number;
  thumbnail: string;
  link: string;
  category_title: string;
  category_url: string;
  title: string;
}

export interface ProductListProps {
  products: ProductProps[];
}
