import React from 'react';
import { Camera, Plus, Flame, WheatOff, Salad, Cake, Timer, Sparkles } from 'lucide-react';
import { MainCategory } from '../types/recipe';

interface StoryReelProps {
  onSelectCategory: (cat: MainCategory | 'todos' | 'assistente') => void;
  onOpenTimer: () => void;
  onOpenShopping: () => void;
}

export const StoryReel: React.FC<StoryReelProps> = ({
  onSelectCategory,
  onOpenTimer,
  onOpenShopping
}) => {
  const stories = [
    {
      id: 'photo',
      title: 'sua foto',
      isAdd: true,
      action: onOpenShopping,
      bg: 'bg-[#F5F2EB]',
      border: 'border-[#F5BA31]'
    },
    {
      id: 'airfryer',
      title: 'Air Fryer',
      icon: <Flame className="w-6 h-6 text-[#0A2A1D]" />,
      action: () => onSelectCategory('airfryer'),
      bg: 'bg-amber-100',
      border: 'border-[#F5BA31]'
    },
    {
      id: 'paes',
      title: 'Pães',
      icon: <WheatOff className="w-6 h-6 text-[#0A2A1D]" />,
      action: () => onSelectCategory('paes-sem-gluten'),
      bg: 'bg-orange-100',
      border: 'border-[#15803D]'
    },
    {
      id: 'saladas',
      title: 'Saladas',
      icon: <Salad className="w-6 h-6 text-[#0A2A1D]" />,
      action: () => onSelectCategory('salada-no-pote'),
      bg: 'bg-emerald-100',
      border: 'border-[#15803D]'
    },
    {
      id: 'bolos',
      title: 'Bolos',
      icon: <Cake className="w-6 h-6 text-[#0A2A1D]" />,
      action: () => onSelectCategory('bolo-sem-gluten'),
      bg: 'bg-rose-100',
      border: 'border-[#F5BA31]'
    },
    {
      id: 'timer',
      title: 'Timer',
      icon: <Timer className="w-6 h-6 text-[#0A2A1D]" />,
      action: onOpenTimer,
      bg: 'bg-yellow-100',
      border: 'border-[#F5BA31]'
    },
    {
      id: 'chef',
      title: 'Chef IA',
      icon: <Sparkles className="w-6 h-6 text-[#F5BA31]" />,
      action: () => onSelectCategory('assistente'),
      bg: 'bg-[#0A2A1D]',
      border: 'border-[#F5BA31]'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
      <div className="bg-[#FAF8F3] rounded-3xl p-4 sm:p-6 border border-[#EBE3D3]">
        <div className="mb-3">
          <h3 className="font-serif text-lg sm:text-xl font-black text-[#0A2A1D]">
            comunidade
          </h3>
          <p className="text-xs text-[#0A2A1D]/75 font-medium mt-0.5">
            Últimas receitas feitas, testadas e aprovadas por vocês ❤️
          </p>
        </div>

        {/* Horizontal circular stories like Screenshot 2 */}
        <div className="flex items-center gap-4 overflow-x-auto pb-2 pt-1 no-scrollbar">
          {stories.map(item => (
            <button
              key={item.id}
              onClick={item.action}
              className="flex flex-col items-center gap-1.5 cursor-pointer group shrink-0 text-center"
            >
              <div className={`relative w-16 h-16 sm:w-18 sm:h-18 rounded-full p-0.5 border-2 ${item.border} transition-transform group-hover:scale-105`}>
                <div className={`w-full h-full rounded-full ${item.bg} flex items-center justify-center shadow-inner`}>
                  {item.isAdd ? (
                    <Camera className="w-6 h-6 text-[#0A2A1D]/70" />
                  ) : (
                    item.icon
                  )}
                </div>

                {item.isAdd && (
                  <div className="absolute bottom-0 right-0 w-5 h-5 bg-[#F5BA31] text-[#0A2A1D] rounded-full flex items-center justify-center font-bold text-xs shadow-xs border-2 border-white">
                    <Plus className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                )}
              </div>

              <span className="text-xs font-bold text-[#0A2A1D] truncate max-w-[70px]">
                {item.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
