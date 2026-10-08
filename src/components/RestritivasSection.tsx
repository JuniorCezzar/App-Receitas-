import React from 'react';
import { WheatOff, Flame, Salad, Cake, BookOpen, Layers } from 'lucide-react';
import { MainCategory } from '../types/recipe';

interface RestritivasSectionProps {
  onSelectCategory: (cat: MainCategory | 'guia-farinhas' | 'guia-saladas') => void;
}

export const RestritivasSection: React.FC<RestritivasSectionProps> = ({ onSelectCategory }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      <div className="mb-4">
        <h3 className="font-serif text-xl sm:text-2xl font-black text-[#0A2A1D]">
          receitas restritivas & coleções especiais
        </h3>
        <p className="text-xs text-[#0A2A1D]/70 mt-0.5">
          Opções desenvolvidas e balanceadas para dietas sem glúten e rotinas práticas.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Receitas sem glúten like Screenshot 6 */}
        <button
          onClick={() => onSelectCategory('paes-sem-gluten')}
          className="bg-[#FAF8F3] hover:bg-white border border-[#EBE3D3] hover:border-[#15803D] rounded-3xl p-6 flex flex-col items-center justify-center text-center transition-all cursor-pointer group shadow-2xs hover:shadow-md"
        >
          <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-[#15803D] mb-4 group-hover:scale-105 transition-transform">
            <WheatOff className="w-8 h-8 stroke-[2]" />
          </div>
          <h4 className="font-serif text-base font-bold text-[#0A2A1D] group-hover:text-[#15803D] transition-colors">
            pães sem glúten
          </h4>
          <p className="text-xs text-[#0A2A1D]/60 mt-1">
            Receitas com casquinha crocante que não esfarelam
          </p>
        </button>

        {/* Card 2: 200 Receitas Airfryer */}
        <button
          onClick={() => onSelectCategory('airfryer')}
          className="bg-[#FAF8F3] hover:bg-white border border-[#EBE3D3] hover:border-[#F5BA31] rounded-3xl p-6 flex flex-col items-center justify-center text-center transition-all cursor-pointer group shadow-2xs hover:shadow-md"
        >
          <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center text-[#0A2A1D] mb-4 group-hover:scale-105 transition-transform">
            <Flame className="w-8 h-8 stroke-[2]" />
          </div>
          <h4 className="font-serif text-base font-bold text-[#0A2A1D] group-hover:text-[#15803D] transition-colors">
            200 receitas airfryer
          </h4>
          <p className="text-xs text-[#0A2A1D]/60 mt-1">
            Tempos exatos, temperaturas e crocância máxima
          </p>
        </button>

        {/* Card 3: Saladas no pote */}
        <button
          onClick={() => onSelectCategory('guia-saladas')}
          className="bg-[#FAF8F3] hover:bg-white border border-[#EBE3D3] hover:border-[#15803D] rounded-3xl p-6 flex flex-col items-center justify-center text-center transition-all cursor-pointer group shadow-2xs hover:shadow-md"
        >
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center text-[#15803D] mb-4 group-hover:scale-105 transition-transform">
            <Layers className="w-8 h-8 stroke-[2]" />
          </div>
          <h4 className="font-serif text-base font-bold text-[#0A2A1D] group-hover:text-[#15803D] transition-colors">
            guia 5 camadas no pote
          </h4>
          <p className="text-xs text-[#0A2A1D]/60 mt-1">
            Como montar saladas que duram 5 dias frescas
          </p>
        </button>

        {/* Card 4: Bolos sem glúten */}
        <button
          onClick={() => onSelectCategory('bolo-sem-gluten')}
          className="bg-[#FAF8F3] hover:bg-white border border-[#EBE3D3] hover:border-[#F5BA31] rounded-3xl p-6 flex flex-col items-center justify-center text-center transition-all cursor-pointer group shadow-2xs hover:shadow-md"
        >
          <div className="w-16 h-16 rounded-2xl bg-rose-100 flex items-center justify-center text-[#0A2A1D] mb-4 group-hover:scale-105 transition-transform">
            <Cake className="w-8 h-8 stroke-[2]" />
          </div>
          <h4 className="font-serif text-base font-bold text-[#0A2A1D] group-hover:text-[#15803D] transition-colors">
            bolos sem glúten
          </h4>
          <p className="text-xs text-[#0A2A1D]/60 mt-1">
            Fofinhos e molhadinhos sem trigo para o café
          </p>
        </button>
      </div>
    </section>
  );
};
