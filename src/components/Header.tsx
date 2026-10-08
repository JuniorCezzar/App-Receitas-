import React, { useState } from 'react';
import { 
  Menu, Search, User, Bookmark, Timer, ShoppingBag, 
  Flame, WheatOff, Salad, Cake, Sparkles, X, ChefHat
} from 'lucide-react';
import { MainCategory } from '../types/recipe';

interface HeaderProps {
  activeCategory: MainCategory | 'todos' | 'guia-farinhas' | 'guia-saladas' | 'assistente';
  onSelectCategory: (cat: MainCategory | 'todos' | 'guia-farinhas' | 'guia-saladas' | 'assistente') => void;
  favoritesCount: number;
  shoppingItemsCount: number;
  onOpenShoppingList: () => void;
  onOpenTimer: () => void;
  timerActive: boolean;
  timerSecondsLeft: number;
  onFocusSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeCategory,
  onSelectCategory,
  favoritesCount,
  shoppingItemsCount,
  onOpenShoppingList,
  onOpenTimer,
  timerActive,
  timerSecondsLeft,
  onFocusSearch
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-[#EBE6DC] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2">
          {/* Left: Mobile hamburger menu & Brand Logo */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 -ml-1 sm:p-2 sm:-ml-2 rounded-lg text-[#0A2A1D] hover:bg-[#FAF8F3] transition-colors cursor-pointer shrink-0"
              aria-label="Abrir menu"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
            </button>

            {/* Logo matching the Receiteria logo style with Green & Yellow branding */}
            <button
              onClick={() => onSelectCategory('todos')}
              className="flex items-center gap-1.5 sm:gap-2 cursor-pointer group text-left shrink-0"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#F5BA31] flex items-center justify-center text-[#0A2A1D] shadow-xs group-hover:scale-105 transition-transform shrink-0">
                <ChefHat className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              </div>
              <div className="flex items-center">
                <span className="font-serif text-lg xs:text-xl sm:text-2xl font-black tracking-tight text-[#0A2A1D] leading-none whitespace-nowrap">
                  Minha Receita <span className="text-[#F5BA31]">App</span>
                </span>
              </div>
            </button>
          </div>

          {/* Center: Desktop Navigation links styled as clean modern links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-[#0A2A1D]/80">
            <button
              onClick={() => onSelectCategory('todos')}
              className={`hover:text-[#0A2A1D] transition-colors cursor-pointer py-1 ${
                activeCategory === 'todos' ? 'text-[#0A2A1D] border-b-2 border-[#F5BA31]' : ''
              }`}
            >
              Todas
            </button>
            <button
              onClick={() => onSelectCategory('airfryer')}
              className={`hover:text-[#0A2A1D] transition-colors cursor-pointer py-1 ${
                activeCategory === 'airfryer' ? 'text-[#0A2A1D] border-b-2 border-[#F5BA31]' : ''
              }`}
            >
              Air Fryer (200)
            </button>
            <button
              onClick={() => onSelectCategory('paes-sem-gluten')}
              className={`hover:text-[#0A2A1D] transition-colors cursor-pointer py-1 ${
                activeCategory === 'paes-sem-gluten' ? 'text-[#0A2A1D] border-b-2 border-[#F5BA31]' : ''
              }`}
            >
              Pães Sem Glúten
            </button>
            <button
              onClick={() => onSelectCategory('salada-no-pote')}
              className={`hover:text-[#0A2A1D] transition-colors cursor-pointer py-1 ${
                activeCategory === 'salada-no-pote' || activeCategory === 'guia-saladas' ? 'text-[#0A2A1D] border-b-2 border-[#F5BA31]' : ''
              }`}
            >
              Saladas no Pote
            </button>
            <button
              onClick={() => onSelectCategory('bolo-sem-gluten')}
              className={`hover:text-[#0A2A1D] transition-colors cursor-pointer py-1 ${
                activeCategory === 'bolo-sem-gluten' ? 'text-[#0A2A1D] border-b-2 border-[#F5BA31]' : ''
              }`}
            >
              Bolos Sem Glúten
            </button>
            <button
              onClick={() => onSelectCategory('guia-farinhas')}
              className={`hover:text-[#0A2A1D] transition-colors cursor-pointer py-1 ${
                activeCategory === 'guia-farinhas' ? 'text-[#0A2A1D] border-b-2 border-[#F5BA31]' : ''
              }`}
            >
              Guia de Farinhas
            </button>
          </nav>

          {/* Right: Search shortcut, Timer, Shopping, User/Favorites */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {/* Quick search button */}
            <button
              onClick={onFocusSearch}
              title="Buscar receitas"
              className="p-1.5 sm:p-2 rounded-full text-[#0A2A1D] hover:bg-[#FAF8F3] transition-colors cursor-pointer shrink-0"
            >
              <Search className="w-5 h-5 stroke-[2.2]" />
            </button>

            {/* Timer button */}
            <button
              onClick={onOpenTimer}
              title="Timer da Air Fryer"
              className={`flex items-center gap-1 sm:gap-1.5 px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 ${
                timerActive
                  ? 'bg-[#F5BA31] text-[#0A2A1D] animate-pulse shadow-sm'
                  : 'bg-[#FAF8F3] text-[#0A2A1D] hover:bg-[#F2EDE2]'
              }`}
            >
              <Timer className="w-4 h-4 shrink-0 stroke-[2.2]" />
              <span className="hidden sm:inline">
                {timerActive ? formatTime(timerSecondsLeft) : 'Timer'}
              </span>
              {timerActive && (
                <span className="sm:hidden text-[10px] font-black">
                  {formatTime(timerSecondsLeft)}
                </span>
              )}
            </button>

            {/* Shopping list button */}
            <button
              onClick={onOpenShoppingList}
              title="Lista de Compras"
              className="relative flex items-center gap-1 sm:gap-1.5 px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-full text-xs font-bold bg-[#FAF8F3] text-[#0A2A1D] hover:bg-[#F2EDE2] transition-colors cursor-pointer shrink-0"
            >
              <ShoppingBag className="w-4 h-4 shrink-0 stroke-[2.2]" />
              <span className="hidden sm:inline">Lista</span>
              {shoppingItemsCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#0A2A1D] text-[#F5BA31] text-[10px] font-black flex items-center justify-center">
                  {shoppingItemsCount}
                </span>
              )}
            </button>

            {/* Chef Virtual / Entrar */}
            <button
              onClick={() => onSelectCategory('assistente')}
              title="Chef Virtual & Dúvidas"
              className="flex items-center gap-1 sm:gap-1.5 px-2.5 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-bold bg-[#0A2A1D] text-[#F5BA31] hover:bg-[#072016] transition-colors cursor-pointer shadow-xs shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F5BA31] shrink-0" />
              <span className="hidden sm:inline">Chef Virtual</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div 
            className="fixed inset-0 bg-[#0A2A1D]/60 backdrop-blur-xs" 
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative w-80 max-w-[85vw] bg-[#FAF8F3] h-full shadow-2xl p-6 flex flex-col z-10 animate-in slide-in-from-left duration-200">
            <div className="flex items-center justify-between pb-5 border-b border-[#EBE6DC]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-[#F5BA31] flex items-center justify-center text-[#0A2A1D] shrink-0">
                  <ChefHat className="w-5 h-5 stroke-[2.5]" />
                </div>
                <span className="font-serif text-xl font-black text-[#0A2A1D] whitespace-nowrap">
                  Minha Receita <span className="text-[#F5BA31]">App</span>
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-lg text-[#0A2A1D] hover:bg-stone-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-1 font-bold text-sm text-[#0A2A1D]">
              <button
                onClick={() => { onSelectCategory('todos'); setMobileMenuOpen(false); }}
                className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-white transition-colors"
              >
                Todas as Receitas
              </button>
              <button
                onClick={() => { onSelectCategory('airfryer'); setMobileMenuOpen(false); }}
                className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-white transition-colors flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#F5BA31]" />
                  <span>200 Receitas Air Fryer</span>
                </span>
                <span className="text-xs bg-[#0A2A1D] text-[#F5BA31] px-2 py-0.5 rounded-full">200</span>
              </button>
              <button
                onClick={() => { onSelectCategory('paes-sem-gluten'); setMobileMenuOpen(false); }}
                className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-white transition-colors flex items-center gap-2"
              >
                <WheatOff className="w-4 h-4 text-[#15803D]" />
                <span>Pães Sem Glúten</span>
              </button>
              <button
                onClick={() => { onSelectCategory('salada-no-pote'); setMobileMenuOpen(false); }}
                className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-white transition-colors flex items-center gap-2"
              >
                <Salad className="w-4 h-4 text-[#15803D]" />
                <span>Saladas no Pote</span>
              </button>
              <button
                onClick={() => { onSelectCategory('bolo-sem-gluten'); setMobileMenuOpen(false); }}
                className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-white transition-colors flex items-center gap-2"
              >
                <Cake className="w-4 h-4 text-[#F5BA31]" />
                <span>Bolos Sem Glúten</span>
              </button>
              <button
                onClick={() => { onSelectCategory('guia-saladas'); setMobileMenuOpen(false); }}
                className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-white transition-colors"
              >
                Guia das 5 Camadas (Salada no Pote)
              </button>
              <button
                onClick={() => { onSelectCategory('guia-farinhas'); setMobileMenuOpen(false); }}
                className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-white transition-colors"
              >
                Guia de Farinhas Sem Glúten
              </button>
              <button
                onClick={() => { onSelectCategory('assistente'); setMobileMenuOpen(false); }}
                className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-white transition-colors text-[#F5BA31] bg-[#0A2A1D] mt-4 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#F5BA31]" />
                <span>Chef Virtual & Dúvidas</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
