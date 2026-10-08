import React, { useRef } from 'react';
import { Search, Flame, WheatOff, Salad, Cake, Sparkles, ArrowRight } from 'lucide-react';
import { MainCategory } from '../types/recipe';

interface HeroBannerProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: MainCategory | 'todos' | 'guia-farinhas' | 'guia-saladas' | 'assistente';
  onSelectCategory: (cat: MainCategory | 'todos') => void;
  totalRecipesCount: number;
  airfryerCount: number;
  searchInputRef: React.RefObject<HTMLInputElement | null>;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  totalRecipesCount,
  airfryerCount,
  searchInputRef
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-5 pb-4 space-y-6">
      {/* 1. Receiteria Card: "Receitas testadas que funcionam de verdade" (like Screenshot 1) */}
      <div className="bg-[#F5F2EB] border border-[#EBE3D3] rounded-3xl p-6 sm:p-9 shadow-xs relative overflow-hidden">
        <div className="max-w-2xl">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#0A2A1D] tracking-tight leading-[1.15] mb-3">
            Receitas testadas que funcionam de verdade
          </h1>

          <p className="text-[#0A2A1D]/80 text-sm sm:text-base leading-relaxed mb-6 font-medium">
            Mais de <strong className="text-[#0A2A1D] font-bold">200 receitas para Air Fryer</strong>, pães sem glúten que não esfarelam, saladas no pote para a semana toda e bolos fofinhos testados e aprovados.
          </p>

          <div className="space-y-2">
            <label className="block text-xs sm:text-sm font-bold text-[#0A2A1D]">
              O que você quer preparar?
            </label>

            {/* Big Pill Search bar with yellow circular button like Screenshot 1 */}
            <div className="relative flex items-center max-w-xl">
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="receita ou ingrediente..."
                className="w-full pl-5 pr-14 py-3.5 bg-white border-2 border-[#E5DECD] focus:border-[#0A2A1D] rounded-full text-sm text-[#0A2A1D] placeholder:text-stone-400 focus:outline-none shadow-xs transition-colors"
              />

              <button
                type="button"
                onClick={() => searchInputRef.current?.focus()}
                className="absolute right-1.5 w-11 h-11 rounded-full bg-[#F5BA31] hover:bg-[#eab029] text-[#0A2A1D] flex items-center justify-center transition-transform hover:scale-105 cursor-pointer shadow-sm"
                title="Buscar"
              >
                <Search className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Deep Green & Gold Signature Showcase Banner (Matching Screenshot 7: image.png) */}
      <div className="bg-[#0A2A1D] text-white rounded-3xl p-7 sm:p-10 shadow-lg border border-[#0D3827] relative overflow-hidden">
        {/* Subtle decorative yellow glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5BA31]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#F5BA31] uppercase mb-4">
            <span>✦</span>
            <span>COZINHE BEM, COM MAIS PRATICIDADE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.1] mb-2 tracking-tight">
            4 programas <br className="hidden sm:inline" />
            de receitas. <br />
            <span className="text-[#F5BA31] italic font-serif font-bold">Um único acesso.</span>
          </h2>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed my-5 font-normal">
            Air Fryer, alimentação saudável, marmitas no pote e receitas sem glúten reunidos em uma experiência simples para você cozinhar melhor.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-stone-200 mb-6">
            <span className="flex items-center gap-1.5 text-stone-100">
              <span className="text-[#F5BA31] font-bold">✓</span> Mais de 200 receitas
            </span>
            <span className="flex items-center gap-1.5 text-stone-100">
              <span className="text-[#F5BA31] font-bold">✓</span> Passo a passo com Timer
            </span>
            <span className="flex items-center gap-1.5 text-stone-100">
              <span className="text-[#F5BA31] font-bold">✓</span> 100% testadas e sem erro
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <button
              onClick={() => onSelectCategory('airfryer')}
              className="px-6 py-3.5 bg-[#F5BA31] hover:bg-[#eab029] text-[#0A2A1D] rounded-xl text-sm font-black transition-all hover:scale-102 cursor-pointer shadow-md inline-flex items-center justify-center gap-2"
            >
              <span>Explorar as 200 Receitas Air Fryer</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
            <span className="text-xs text-[#F5BA31] font-mono font-bold">
              Todas as 4 coleções liberadas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
