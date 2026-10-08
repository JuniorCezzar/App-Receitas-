import React from 'react';
import { Clock, Thermometer, Bookmark, Play, Flame, WheatOff, Salad, Cake } from 'lucide-react';
import { Recipe } from '../types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
  isFavorite: boolean;
  onToggleFavorite: (recipeId: string) => void;
  onSelectRecipe: (recipe: Recipe) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  isFavorite,
  onToggleFavorite,
  onSelectRecipe
}) => {
  // Theme and color accents
  const getTheme = () => {
    switch (recipe.category) {
      case 'airfryer':
        return {
          bgGradient: 'from-amber-100 to-yellow-50',
          badgeBg: 'bg-[#F5BA31] text-[#0A2A1D]',
          icon: <Flame className="w-8 h-8 text-[#0A2A1D]" />,
          accentText: 'text-[#0A2A1D]'
        };
      case 'paes-sem-gluten':
        return {
          bgGradient: 'from-orange-100 to-amber-50',
          badgeBg: 'bg-[#15803D] text-white',
          icon: <WheatOff className="w-8 h-8 text-[#0A2A1D]" />,
          accentText: 'text-[#15803D]'
        };
      case 'salada-no-pote':
        return {
          bgGradient: 'from-emerald-100 to-teal-50',
          badgeBg: 'bg-[#15803D] text-white',
          icon: <Salad className="w-8 h-8 text-[#0A2A1D]" />,
          accentText: 'text-[#15803D]'
        };
      case 'bolo-sem-gluten':
      default:
        return {
          bgGradient: 'from-rose-100 to-pink-50',
          badgeBg: 'bg-[#F5BA31] text-[#0A2A1D]',
          icon: <Cake className="w-8 h-8 text-[#0A2A1D]" />,
          accentText: 'text-[#0A2A1D]'
        };
    }
  };

  const theme = getTheme();

  return (
    <article
      onClick={() => onSelectRecipe(recipe)}
      className="group bg-white rounded-3xl border border-[#EBE3D3] hover:border-[#F5BA31] shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden cursor-pointer text-left"
    >
      {/* Visual Header matching Screenshot 4 & 6 */}
      <div className={`h-44 bg-gradient-to-br ${theme.bgGradient} relative flex flex-col justify-between p-3.5 border-b border-[#F0EAE1]`}>
        {/* Top bar over photo: subcategory & favorite */}
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-[#0A2A1D]/70 uppercase tracking-wider bg-white/80 px-2.5 py-0.5 rounded-full font-mono">
            {recipe.subcategory || (
              recipe.category === 'paes-sem-gluten' ? 'Pão Artesanal' :
              recipe.category === 'salada-no-pote' ? 'Salada no Pote' : 'Bolo Caseiro'
            )}
          </span>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(recipe.id);
            }}
            title={isFavorite ? 'Remover dos favoritos' : 'Salvar nos favoritos'}
            className={`p-1.5 rounded-full transition-colors cursor-pointer ${
              isFavorite
                ? 'bg-[#F5BA31] text-[#0A2A1D]'
                : 'bg-white/90 text-stone-400 hover:text-[#0A2A1D] hover:bg-white'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Center: Play emblem / Food icon like Screenshot 6 */}
        <div className="flex items-center justify-center my-auto">
          <div className="w-12 h-12 rounded-full bg-white/90 shadow-xs flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play className="w-5 h-5 text-[#0A2A1D] fill-current ml-0.5" />
          </div>
        </div>

        {/* Bottom overlays: Time badge (like Screenshot 4) + Temperature */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {recipe.temperatureCelsius && (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0A2A1D] bg-[#F5BA31] px-2 py-0.5 rounded-full font-mono shadow-2xs">
                <Flame className="w-3 h-3 fill-current" />
                <span>{recipe.temperatureCelsius}°C</span>
              </span>
            )}
          </div>

          {/* Time Badge with Clock icon like Screenshot 4 */}
          <div className="inline-flex items-center gap-1 text-xs font-bold text-white bg-black/70 px-2.5 py-0.5 rounded-full font-mono">
            <Clock className="w-3.5 h-3.5" />
            <span>{recipe.cookTimeMinutes}min</span>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="font-serif text-base font-bold text-[#0A2A1D] group-hover:text-[#15803D] transition-colors line-clamp-2 leading-snug mb-1.5">
            {recipe.title}
          </h4>

          <p className="text-[#0A2A1D]/70 text-xs line-clamp-2 leading-relaxed mb-3">
            {recipe.description}
          </p>
        </div>

        {/* Bottom clean unboxed metadata with dot separator */}
        <div className="pt-2 border-t border-[#F2EDE2] flex items-center justify-between text-xs text-[#0A2A1D]/60 font-medium">
          <div className="flex items-center gap-1">
            <span>{recipe.servings} porções</span>
            <span aria-hidden="true">·</span>
            <span>{recipe.difficulty}</span>
          </div>

          <span className="text-[#15803D] font-bold">
            Ver receita →
          </span>
        </div>
      </div>
    </article>
  );
};
