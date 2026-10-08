export type MainCategory = 'airfryer' | 'paes-sem-gluten' | 'salada-no-pote' | 'bolo-sem-gluten';

export type AirFryerSubcategory = 
  | 'Aves & Frangos'
  | 'Carnes & Suínos'
  | 'Peixes & Frutos do Mar'
  | 'Legumes & Acompanhamentos'
  | 'Petiscos & Salgados'
  | 'Sobremesas & Doces'
  | 'Café da Manhã & Ovos';

export interface Ingredient {
  name: string;
  amount: number | string;
  unit: string;
  note?: string;
}

export interface JarLayer {
  layerNumber: 1 | 2 | 3 | 4 | 5;
  title: string;
  description: string;
  items: string[];
}

export interface Recipe {
  id: string;
  title: string;
  category: MainCategory;
  subcategory?: AirFryerSubcategory | string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  temperatureCelsius?: number;
  servings: number;
  difficulty: 'Fácil' | 'Médio' | 'Avançado';
  caloriesApprox?: number;
  tags: string[];
  description: string;
  ingredients: Ingredient[];
  instructions: string[];
  airfryerTip?: string;
  glutenFreeTip?: string;
  jarLayers?: JarLayer[];
  storageDays?: number;
  featured?: boolean;
}

export interface ShoppingItem {
  id: string;
  recipeTitle: string;
  ingredient: string;
  completed: boolean;
}
