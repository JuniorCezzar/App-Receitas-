import React, { useState } from 'react';
import { Search, ArrowRight, UtensilsCrossed } from 'lucide-react';

interface IngredientSearchCardProps {
  onSearch: (ingredient: string) => void;
}

export const IngredientSearchCard: React.FC<IngredientSearchCardProps> = ({ onSearch }) => {
  const [ingredientInput, setIngredientInput] = useState('');

  const popularIngredients = [
    { label: 'ovo', emoji: '🥚' },
    { label: 'frango', emoji: '🍗' },
    { label: 'batata', emoji: '🥔' },
    { label: 'cenoura', emoji: '🥕' },
    { label: 'queijo', emoji: '🧀' },
    { label: 'arroz', emoji: '🍚' },
    { label: 'banana', emoji: '🍌' },
    { label: 'mandioca', emoji: '🍠' },
  ];

  const trendingSearches = [
    'bolo de cenoura com chocolate',
    'frango a passarinho crocante',
    'pão francês sem glúten',
    'dadinhos de tapioca',
    'salada no pote mediterrânea',
    'bolo de fubá cremoso',
    'costelinha barbecue airfryer'
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ingredientInput.trim()) {
      onSearch(ingredientInput.trim());
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
      <div className="bg-[#FAF8F3] border border-[#EBE3D3] rounded-3xl p-6 sm:p-9 shadow-xs">
        <div className="max-w-2xl">
          {/* Tag like Screenshot 5 */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-[#0A2A1D] rounded-full text-xs font-bold mb-3">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>busca por ingredientes</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#0A2A1D] tracking-tight mb-2 leading-tight">
            receitas com o que você <span className="text-[#15803D]">já tem em casa</span>
          </h3>

          <p className="text-[#0A2A1D]/75 text-xs sm:text-sm leading-relaxed mb-5 font-medium">
            diga o que está na sua geladeira ou despensa e a gente acha receitas reais que combinam.
          </p>

          {/* Form with input and primary button like Screenshot 5 */}
          <form onSubmit={handleSearchSubmit} className="space-y-3">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 absolute left-4 text-stone-400" />
              <input
                type="text"
                value={ingredientInput}
                onChange={(e) => setIngredientInput(e.target.value)}
                placeholder="ex: frango, batata, cenoura, queijo..."
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-[#E0D8C6] focus:border-[#0A2A1D] rounded-2xl text-sm text-[#0A2A1D] placeholder:text-stone-400 focus:outline-none shadow-2xs"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 bg-[#F5BA31] hover:bg-[#eab029] text-[#0A2A1D] rounded-2xl font-black text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.01] cursor-pointer shadow-xs"
            >
              <span>ver receitas</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
          </form>

          {/* Populares pills like Screenshot 5 */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-[#0A2A1D]/70 mr-1">populares:</span>
            {popularIngredients.map(item => (
              <button
                key={item.label}
                type="button"
                onClick={() => onSearch(item.label)}
                className="inline-flex items-center gap-1 px-3 py-1.5 bg-white hover:bg-[#F5BA31]/30 border border-[#E0D8C6] rounded-full text-xs font-bold text-[#0A2A1D] transition-colors cursor-pointer"
              >
                <span>{item.emoji}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Receitas em alta like Screenshot 3 */}
          <div className="mt-6 pt-5 border-t border-[#EBE3D3]">
            <p className="text-xs font-black uppercase tracking-wider text-[#0A2A1D] mb-2.5">
              receitas em alta
            </p>
            <div className="flex flex-wrap gap-2">
              {trendingSearches.map(item => (
                <button
                  key={item}
                  type="button"
                  onClick={() => onSearch(item)}
                  className="px-3 py-1.5 bg-white hover:bg-stone-100 border border-[#E0D8C6] rounded-full text-xs font-semibold text-[#0A2A1D] transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span className="text-[#15803D] font-bold">↑</span>
                  <span>{item}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
