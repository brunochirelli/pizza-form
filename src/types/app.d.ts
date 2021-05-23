export interface Ingredient {
  id: number;
  name: string;
  check?: boolean;
}

export interface PizzaType {
  id: number;
  name: string;
  price: number;
  price: number;
  description: string;
  featured: boolean;
  featuredImage?: string;
  ingredients: Igredient[];
  extras: {
    id: number;
    name: string;
    check: boolean;
  }[];
}

export interface SizeType {
  id: number;
  name: string;
}

export interface CrustType {
  id: number;
  name: string;
  description: string;
}

export interface IPromotions {
  id: number;
  name: string;
  points: number;
}
