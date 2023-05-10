export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  // discountPercentage:12.96,
  stock: number;
}


export interface CartItem extends Product{
  amount: number;
}