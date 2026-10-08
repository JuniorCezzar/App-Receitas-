import React from 'react';
import { Flame, WheatOff, Salad, Cake, Clock } from 'lucide-react';
import { MainCategory } from '../types/recipe';

interface PopularCategoriesProps {
  onSelectCategory: (cat: MainCategory) => void;
  onSelectTimeFast: () => void;
}

export const PopularCategories: React.FC<PopularCategoriesProps> = ({
  onSelectCategory,
  onSelectTimeFast
}) => {
  const categories = [
    {
      title: 'receitas para airfryer',
      category: 'airfryer' as MainCategory,
      count: '200 receitas',
      icon: <Flame className="w-10 h-10 text-[#0A2A1D]" />,
      bg: 'bg-amber-100',
      action: () => onSelectCategory('airfryer')
    },
    {
      title: 'pães sem glúten',
      category: 'paes-sem-gluten' as MainCategory,
      count: 'artesanais & fofos',
      icon: <WheatOff className="w-10 h-10 text-[#0A2A1D]" />,
      bg: 'bg-orange-100',
      action: () => onSelectCategory('paes-sem-gluten')
    },
    {
      title: 'saladas no pote',
      category: 'salada-no-pote' as MainCategory,
      count: 'guia de 5 camadas',
      icon: <Salad className="w-10 h-10 text-[#0A2A1D]" />,
      bg: 'bg-emerald-100',
      action: () => onSelectCategory('salada-no-pote')
    },
    {
      title: 'bolos sem glúten',
      category: 'bolo-sem-gluten' as MainCategory,
      count: 'fofinhos & úmidos',
      icon: <Cake className="w-10 h-10 text-[#0A2A1D]" />,
      bg: 'bg-rose-100',
      action: () => onSelectCategory('bolo-sem-gluten')
    },
    {
      title: 'receitas para almoço rápido',
      category: 'airfryer' as MainCategory,
      count: 'em até 15 min',
      icon: <Clock className="w-10 h-10 text-[#0A2A1D]" />,
      bg: 'bg-yellow-100',
      action: onSelectTimeFast
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
      <div className="mb-4">
        <h3 className="font-serif text-xl sm:text-2xl font-black text-[#0A2A1D]">
          receitas mais procuradas
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={cat.action}
            className="bg-white rounded-3xl p-5 border border-[#EBE3D3] hover:border-[#F5BA31] shadow-2xs hover:shadow-md transition-all flex flex-col items-center text-center cursor-pointer group"
          >
            {/* Big round circular emblem like Screenshot 2 */}
            <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full ${cat.bg} border-4 border-white shadow-sm flex items-center justify-center mb-3 group-hover:scale-105 transition-transform`}>
              {cat.icon}
            </div>

            <h4 className="font-serif text-xs sm:text-sm font-bold text-[#0A2A1D] group-hover:text-[#15803D] transition-colors leading-snug">
              {cat.title}
            </h4>
            <span className="text-[11px] font-mono text-[#0A2A1D]/60 mt-1 font-semibold">
              {cat.count}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};
