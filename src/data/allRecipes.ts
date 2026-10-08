import { Recipe, MainCategory } from '../types/recipe';
import { generate200AirFryerRecipes } from './airfryerBase';
import { glutenFreeBreads } from './glutenFreeBreads';
import { jarSalads } from './jarSalads';
import { glutenFreeCakes } from './glutenFreeCakes';

// Cache all recipes in memory
let cachedRecipes: Recipe[] | null = null;

export function getAllRecipes(): Recipe[] {
  if (cachedRecipes) {
    return cachedRecipes;
  }

  const airfryerList = generate200AirFryerRecipes();
  cachedRecipes = [
    ...airfryerList,
    ...glutenFreeBreads,
    ...jarSalads,
    ...glutenFreeCakes
  ];

  return cachedRecipes;
}

export function getRecipeById(id: string): Recipe | undefined {
  return getAllRecipes().find(r => r.id === id);
}

export function getRecipesByCategory(category: MainCategory): Recipe[] {
  return getAllRecipes().filter(r => r.category === category);
}

export const CATEGORY_INFO: Record<MainCategory, {
  label: string;
  count: number;
  badge: string;
  description: string;
  accentColor: string;
}> = {
  'airfryer': {
    label: '200 Receitas Air Fryer',
    count: 200,
    badge: '200 Receitas',
    description: 'Catálogo completo com tempos exatos, temperatura e dicas de crocância sem óleo.',
    accentColor: 'amber'
  },
  'paes-sem-gluten': {
    label: 'Pães Sem Glúten',
    count: 10,
    badge: 'Artesanais & Fofinhos',
    description: 'Receitas testadas com casquinha crocante, sem esfarelar e livres de contaminação.',
    accentColor: 'orange'
  },
  'salada-no-pote': {
    label: 'Saladas no Pote',
    count: 8,
    badge: 'Guia de 5 Camadas',
    description: 'Montagem estratégica para durar até 5 dias na geladeira com folhas sempre frescas.',
    accentColor: 'emerald'
  },
  'bolo-sem-gluten': {
    label: 'Bolos Sem Glúten',
    count: 8,
    badge: 'Úmidos & Macios',
    description: 'Bolos fofinhos para o café, com emulsão equilibrada que nunca sola ou resseca.',
    accentColor: 'rose'
  }
};
