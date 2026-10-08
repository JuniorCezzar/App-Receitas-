import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Flame, WheatOff, Salad, Cake, Search, 
  Bookmark, Filter, Clock, Thermometer, 
  Sparkles, ChefHat, Layers, BookOpen, Timer as TimerIcon, 
  CheckCircle, ArrowRight, UtensilsCrossed
} from 'lucide-react';
import { Recipe, MainCategory, AirFryerSubcategory, ShoppingItem } from './types/recipe';
import { getAllRecipes } from './data/allRecipes';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { StoryReel } from './components/StoryReel';
import { PopularCategories } from './components/PopularCategories';
import { IngredientSearchCard } from './components/IngredientSearchCard';
import { RecipeCard } from './components/RecipeCard';
import { RestritivasSection } from './components/RestritivasSection';
import { RecipeModal } from './components/RecipeModal';
import { CookingTimerModal } from './components/CookingTimerModal';
import { ShoppingListDrawer } from './components/ShoppingListDrawer';
import { JarAssemblyGuide } from './components/JarAssemblyGuide';
import { GlutenFreeFlourGuide } from './components/GlutenFreeFlourGuide';
import { ChefAssistantModal } from './components/ChefAssistantModal';
import { AirFryerQuickGuide } from './components/AirFryerQuickGuide';
import { playTimerCompletionChime } from './utils/audioAlert';

export default function App() {
  const allRecipes = useMemo(() => getAllRecipes(), []);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  // Navigation & Category state
  const [activeCategory, setActiveCategory] = useState<
    MainCategory | 'todos' | 'guia-farinhas' | 'guia-saladas' | 'assistente'
  >('todos');

  // Filters state
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('todos');
  const [selectedTimeFilter, setSelectedTimeFilter] = useState<'todos' | 'rapido' | 'medio' | 'longo'>('todos');
  const [selectedTempFilter, setSelectedTempFilter] = useState<number | 'todos'>('todos');
  const [showOnlyFavorites, setShowOnlyFavorites] = useState<boolean>(false);

  // Selected recipe for detail modal
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  // Favorites state (localStorage persisted)
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('user_favorites');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Shopping list state (localStorage persisted)
  const [shoppingItems, setShoppingItems] = useState<ShoppingItem[]>(() => {
    try {
      const stored = localStorage.getItem('shopping_list');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [isShoppingListOpen, setIsShoppingListOpen] = useState<boolean>(false);

  // Kitchen Timer state
  const [isTimerOpen, setIsTimerOpen] = useState<boolean>(false);
  const [timerSecondsLeft, setTimerSecondsLeft] = useState<number>(0);
  const [timerActive, setTimerActive] = useState<boolean>(false);
  const [timerLabel, setTimerLabel] = useState<string>('Timer Air Fryer');

  // Pagination for fast rendering of 200+ recipes
  const [visibleCount, setVisibleCount] = useState<number>(24);

  // Save favorites
  useEffect(() => {
    localStorage.setItem('user_favorites', JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  // Save shopping list
  useEffect(() => {
    localStorage.setItem('shopping_list', JSON.stringify(shoppingItems));
  }, [shoppingItems]);

  // Timer countdown effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerActive && timerSecondsLeft > 0) {
      interval = setInterval(() => {
        setTimerSecondsLeft(prev => {
          if (prev <= 1) {
            setTimerActive(false);
            playTimerCompletionChime();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerActive, timerSecondsLeft]);

  // Favorite toggle handler
  const handleToggleFavorite = (recipeId: string) => {
    setFavoriteIds(prev => 
      prev.includes(recipeId) 
        ? prev.filter(id => id !== recipeId)
        : [...prev, recipeId]
    );
  };

  // Add ingredients to shopping list
  const handleAddIngredientsToShoppingList = (
    ingredients: { name: string; amount: string | number; unit: string }[],
    recipeTitle: string
  ) => {
    const newItems: ShoppingItem[] = ingredients.map((ing, i) => ({
      id: `${Date.now()}-${i}`,
      recipeTitle,
      ingredient: `${ing.amount} ${ing.unit} ${ing.name}`,
      completed: false
    }));

    setShoppingItems(prev => [...prev, ...newItems]);
    setIsShoppingListOpen(true);
  };

  // Timer controls
  const handleStartTimer = (minutes: number, label: string) => {
    setTimerSecondsLeft(minutes * 60);
    setTimerLabel(label);
    setTimerActive(true);
    setIsTimerOpen(true);
  };

  const handlePauseTimer = () => setTimerActive(false);
  const handleResumeTimer = () => setTimerActive(true);
  const handleResetTimer = () => {
    setTimerActive(false);
    setTimerSecondsLeft(0);
  };

  // Shopping list handlers
  const handleToggleShoppingItem = (id: string) => {
    setShoppingItems(prev => 
      prev.map(i => i.id === id ? { ...i, completed: !i.completed } : i)
    );
  };

  const handleDeleteShoppingItem = (id: string) => {
    setShoppingItems(prev => prev.filter(i => i.id !== id));
  };

  const handleClearCompletedShopping = () => {
    setShoppingItems(prev => prev.filter(i => !i.completed));
  };

  const handleClearAllShopping = () => {
    setShoppingItems([]);
  };

  const handleAddCustomShoppingItem = (text: string) => {
    setShoppingItems(prev => [
      ...prev,
      {
        id: String(Date.now()),
        recipeTitle: 'Item Avulso',
        ingredient: text,
        completed: false
      }
    ]);
  };

  // Air Fryer subcategories list
  const airfryerSubcategories: AirFryerSubcategory[] = [
    'Aves & Frangos',
    'Carnes & Suínos',
    'Peixes & Frutos do Mar',
    'Legumes & Acompanhamentos',
    'Petiscos & Salgados',
    'Sobremesas & Doces',
    'Café da Manhã & Ovos'
  ];

  // Filter recipes logic
  const filteredRecipes = useMemo(() => {
    return allRecipes.filter(r => {
      // Category filter
      if (activeCategory !== 'todos' && activeCategory !== 'guia-farinhas' && activeCategory !== 'guia-saladas' && activeCategory !== 'assistente') {
        if (r.category !== activeCategory) return false;
      }

      // Subcategory filter (for airfryer)
      if (selectedSubcategory !== 'todos') {
        if (r.subcategory !== selectedSubcategory) return false;
      }

      // Favorites filter
      if (showOnlyFavorites) {
        if (!favoriteIds.includes(r.id)) return false;
      }

      // Time filter
      if (selectedTimeFilter === 'rapido' && r.cookTimeMinutes > 15) return false;
      if (selectedTimeFilter === 'medio' && (r.cookTimeMinutes <= 15 || r.cookTimeMinutes > 25)) return false;
      if (selectedTimeFilter === 'longo' && r.cookTimeMinutes <= 25) return false;

      // Temperature filter
      if (selectedTempFilter !== 'todos') {
        if (r.temperatureCelsius !== selectedTempFilter) return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = r.title.toLowerCase().includes(query);
        const matchesDesc = r.description.toLowerCase().includes(query);
        const matchesTags = r.tags.some((t: string) => t.toLowerCase().includes(query));
        const matchesSub = r.subcategory ? r.subcategory.toLowerCase().includes(query) : false;
        const matchesIng = r.ingredients.some((i: { name: string }) => i.name.toLowerCase().includes(query));

        if (!matchesTitle && !matchesDesc && !matchesTags && !matchesSub && !matchesIng) {
          return false;
        }
      }

      return true;
    });
  }, [
    allRecipes,
    activeCategory,
    selectedSubcategory,
    showOnlyFavorites,
    favoriteIds,
    selectedTimeFilter,
    selectedTempFilter,
    searchQuery
  ]);

  // Counts
  const airfryerCount = useMemo(() => allRecipes.filter(r => r.category === 'airfryer').length, [allRecipes]);

  // Reset pagination when filter changes
  useEffect(() => {
    setVisibleCount(24);
  }, [activeCategory, selectedSubcategory, showOnlyFavorites, selectedTimeFilter, selectedTempFilter, searchQuery]);

  const handleIngredientSearch = (ingredient: string) => {
    setSearchQuery(ingredient);
    // Scroll smoothly to results
    const el = document.getElementById('catalogo-receitas');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFocusSearch = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
      searchInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#0A2A1D] font-sans flex flex-col selection:bg-[#F5BA31] selection:text-[#0A2A1D]">
      {/* Top Header */}
      <Header
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          if (cat !== 'airfryer') setSelectedSubcategory('todos');
        }}
        favoritesCount={favoriteIds.length}
        shoppingItemsCount={shoppingItems.length}
        onOpenShoppingList={() => setIsShoppingListOpen(true)}
        onOpenTimer={() => setIsTimerOpen(true)}
        timerActive={timerActive}
        timerSecondsLeft={timerSecondsLeft}
        onFocusSearch={handleFocusSearch}
      />

      {/* Floating mini timer badge when active and modal closed */}
      {timerActive && !isTimerOpen && (
        <button
          onClick={() => setIsTimerOpen(true)}
          className="fixed bottom-5 right-5 z-40 px-4 py-2.5 bg-[#F5BA31] hover:bg-[#eab029] text-[#0A2A1D] font-mono font-black text-xs rounded-full shadow-xl flex items-center gap-2 cursor-pointer transition-transform hover:scale-105 border-2 border-[#0A2A1D] animate-pulse"
        >
          <TimerIcon className="w-4 h-4 shrink-0 stroke-[2.5]" />
          <span>{Math.floor(timerSecondsLeft / 60)}:{(timerSecondsLeft % 60).toString().padStart(2, '0')}</span>
          <span className="text-[10px] font-sans font-bold">({timerLabel})</span>
        </button>
      )}

      {/* Main Content Area */}
      <main className="flex-1 w-full pb-16">
        {/* Render Dedicated Secondary Views */}
        {activeCategory === 'guia-farinhas' ? (
          <GlutenFreeFlourGuide
            onExploreBreads={() => setActiveCategory('paes-sem-gluten')}
            onExploreCakes={() => setActiveCategory('bolo-sem-gluten')}
          />
        ) : activeCategory === 'guia-saladas' ? (
          <JarAssemblyGuide
            onExploreSalads={() => setActiveCategory('salada-no-pote')}
          />
        ) : activeCategory === 'assistente' ? (
          <ChefAssistantModal />
        ) : (
          <div>
            {/* 1. Hero Banners: Receiteria Card + Deep Green & Gold Signature Showcase (image.png) */}
            <HeroBanner
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategory={activeCategory}
              onSelectCategory={(cat) => {
                setActiveCategory(cat);
                if (cat !== 'airfryer') setSelectedSubcategory('todos');
              }}
              totalRecipesCount={allRecipes.length}
              airfryerCount={airfryerCount}
              searchInputRef={searchInputRef}
            />

            {/* 2. "comunidade" Stories / Quick Highlight Circles (Screenshot 2) */}
            <StoryReel
              onSelectCategory={(cat) => {
                setActiveCategory(cat);
                if (cat !== 'airfryer') setSelectedSubcategory('todos');
              }}
              onOpenTimer={() => setIsTimerOpen(true)}
              onOpenShopping={() => setIsShoppingListOpen(true)}
            />

            {/* 3. "receitas mais procuradas" Circular Dishes (Screenshot 2) */}
            <PopularCategories
              onSelectCategory={(cat) => {
                setActiveCategory(cat);
                setSelectedSubcategory('todos');
                const el = document.getElementById('catalogo-receitas');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onSelectTimeFast={() => {
                setActiveCategory('airfryer');
                setSelectedTimeFilter('rapido');
                const el = document.getElementById('catalogo-receitas');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* 4. "receitas com o que você já tem em casa" Ingredient Search (Screenshot 5 & 3) */}
            <IngredientSearchCard onSearch={handleIngredientSearch} />

            {/* 5. "fervendo 🔥" Category Filter Section (Screenshot 6) */}
            <div id="catalogo-receitas" className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
              <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-black text-[#0A2A1D]">
                    fervendo <span className="text-xl">🔥</span>
                  </h3>
                  <span className="text-xs font-mono font-bold text-[#15803D] bg-emerald-100 px-2 py-0.5 rounded-full">
                    {filteredRecipes.length} receitas
                  </span>
                </div>

                <div className="text-xs font-bold text-[#0A2A1D]">
                  {activeCategory === 'todos' ? 'todas as receitas' : 
                   activeCategory === 'airfryer' ? '200 receitas air fryer' :
                   activeCategory === 'paes-sem-gluten' ? 'pães artesanais sem glúten' :
                   activeCategory === 'salada-no-pote' ? 'saladas no pote 5 camadas' : 'bolos sem glúten'}
                </div>
              </div>

              {/* Pills bar for main collections (Screenshot 6 style) */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
                <button
                  onClick={() => { setActiveCategory('todos'); setSelectedSubcategory('todos'); }}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    activeCategory === 'todos'
                      ? 'bg-[#0A2A1D] text-[#F5BA31] shadow-xs'
                      : 'bg-white text-[#0A2A1D] hover:bg-stone-100 border border-[#EBE3D3]'
                  }`}
                >
                  todas ({allRecipes.length})
                </button>

                <button
                  onClick={() => { setActiveCategory('airfryer'); setSelectedSubcategory('todos'); }}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    activeCategory === 'airfryer'
                      ? 'bg-[#0A2A1D] text-[#F5BA31] shadow-xs'
                      : 'bg-white text-[#0A2A1D] hover:bg-stone-100 border border-[#EBE3D3]'
                  }`}
                >
                  <Flame className="w-3.5 h-3.5 text-[#F5BA31]" />
                  <span>airfryer (200)</span>
                </button>

                <button
                  onClick={() => { setActiveCategory('paes-sem-gluten'); setSelectedSubcategory('todos'); }}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    activeCategory === 'paes-sem-gluten'
                      ? 'bg-[#0A2A1D] text-[#F5BA31] shadow-xs'
                      : 'bg-white text-[#0A2A1D] hover:bg-stone-100 border border-[#EBE3D3]'
                  }`}
                >
                  <WheatOff className="w-3.5 h-3.5 text-[#15803D]" />
                  <span>pães sem glúten</span>
                </button>

                <button
                  onClick={() => { setActiveCategory('salada-no-pote'); setSelectedSubcategory('todos'); }}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    activeCategory === 'salada-no-pote'
                      ? 'bg-[#0A2A1D] text-[#F5BA31] shadow-xs'
                      : 'bg-white text-[#0A2A1D] hover:bg-stone-100 border border-[#EBE3D3]'
                  }`}
                >
                  <Salad className="w-3.5 h-3.5 text-[#15803D]" />
                  <span>saladas no pote</span>
                </button>

                <button
                  onClick={() => { setActiveCategory('bolo-sem-gluten'); setSelectedSubcategory('todos'); }}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    activeCategory === 'bolo-sem-gluten'
                      ? 'bg-[#0A2A1D] text-[#F5BA31] shadow-xs'
                      : 'bg-white text-[#0A2A1D] hover:bg-stone-100 border border-[#EBE3D3]'
                  }`}
                >
                  <Cake className="w-3.5 h-3.5 text-[#F5BA31]" />
                  <span>bolos sem glúten</span>
                </button>
              </div>

              {/* Airfryer subcategory pills if in Airfryer or Todos */}
              {activeCategory === 'airfryer' && (
                <div className="flex items-center gap-1.5 overflow-x-auto py-2 no-scrollbar">
                  <span className="text-[11px] font-bold text-[#0A2A1D]/60 mr-1 shrink-0 font-mono">
                    cortes & tipos:
                  </span>
                  <button
                    onClick={() => setSelectedSubcategory('todos')}
                    className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap cursor-pointer transition-colors ${
                      selectedSubcategory === 'todos'
                        ? 'bg-[#F5BA31] text-[#0A2A1D]'
                        : 'bg-white text-[#0A2A1D] hover:bg-stone-100 border border-[#EBE3D3]'
                    }`}
                  >
                    todos os tipos
                  </button>
                  {airfryerSubcategories.map(sub => (
                    <button
                      key={sub}
                      onClick={() => setSelectedSubcategory(sub)}
                      className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap cursor-pointer transition-colors ${
                        selectedSubcategory === sub
                          ? 'bg-[#F5BA31] text-[#0A2A1D]'
                          : 'bg-white text-[#0A2A1D] hover:bg-stone-100 border border-[#EBE3D3]'
                      }`}
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              )}

              {/* Secondary Filter Bar */}
              <div className="bg-white p-3.5 rounded-2xl border border-[#EBE3D3] mt-2 mb-6 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[#0A2A1D]/70 font-bold flex items-center gap-1">
                    <Filter className="w-3.5 h-3.5" />
                    <span>Filtros:</span>
                  </span>

                  <select
                    value={selectedTimeFilter}
                    onChange={(e) => setSelectedTimeFilter(e.target.value as any)}
                    className="bg-[#FAF8F3] border border-[#EBE3D3] rounded-lg px-2.5 py-1.5 text-[#0A2A1D] font-bold cursor-pointer focus:outline-none"
                  >
                    <option value="todos">Tempo: Qualquer</option>
                    <option value="rapido">Até 15 minutos</option>
                    <option value="medio">15 a 25 minutos</option>
                    <option value="longo">Mais de 25 minutos</option>
                  </select>

                  <select
                    value={selectedTempFilter}
                    onChange={(e) => setSelectedTempFilter(e.target.value === 'todos' ? 'todos' : Number(e.target.value))}
                    className="bg-[#FAF8F3] border border-[#EBE3D3] rounded-lg px-2.5 py-1.5 text-[#0A2A1D] font-mono font-bold cursor-pointer focus:outline-none"
                  >
                    <option value="todos">Temperatura: Qualquer</option>
                    <option value="160">160°C (Cozimento Suave)</option>
                    <option value="180">180°C (Padrão Air Fryer)</option>
                    <option value="190">190°C (Dourar)</option>
                    <option value="200">200°C (Crocância Máxima)</option>
                  </select>

                  <button
                    onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border cursor-pointer transition-colors ${
                      showOnlyFavorites
                        ? 'bg-[#F5BA31] text-[#0A2A1D] border-[#F5BA31] font-bold'
                        : 'bg-[#FAF8F3] text-[#0A2A1D] border-[#EBE3D3] hover:bg-stone-100'
                    }`}
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${showOnlyFavorites ? 'fill-current text-[#0A2A1D]' : ''}`} />
                    <span>Favoritas ({favoriteIds.length})</span>
                  </button>
                </div>

                {searchQuery && (
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#0A2A1D]">Buscando por: "<strong>{searchQuery}</strong>"</span>
                    <button
                      onClick={() => setSearchQuery('')}
                      className="text-xs text-rose-700 underline font-bold cursor-pointer"
                    >
                      Limpar busca
                    </button>
                  </div>
                )}
              </div>

              {/* Recipe Cards Grid (Screenshots 4 & 6) */}
              {filteredRecipes.length === 0 ? (
                <div className="bg-white rounded-3xl border border-[#EBE3D3] p-12 text-center max-w-md mx-auto my-8 shadow-xs">
                  <Search className="w-10 h-10 text-stone-300 mx-auto mb-3" />
                  <h3 className="font-serif text-lg font-bold text-[#0A2A1D]">Nenhuma receita encontrada</h3>
                  <p className="text-xs text-[#0A2A1D]/70 mt-1 mb-4">
                    Tente buscar por outro ingrediente ou limpe os filtros para ver todas as opções.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedSubcategory('todos');
                      setSelectedTimeFilter('todos');
                      setSelectedTempFilter('todos');
                      setShowOnlyFavorites(false);
                    }}
                    className="px-5 py-2.5 bg-[#0A2A1D] hover:bg-[#072016] text-[#F5BA31] rounded-2xl text-xs font-black cursor-pointer shadow-xs"
                  >
                    Limpar Filtros e Ver Todas
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                    {filteredRecipes.slice(0, visibleCount).map(recipe => (
                      <RecipeCard
                        key={recipe.id}
                        recipe={recipe}
                        isFavorite={favoriteIds.includes(recipe.id)}
                        onToggleFavorite={handleToggleFavorite}
                        onSelectRecipe={setSelectedRecipe}
                      />
                    ))}
                  </div>

                  {/* Load More Button */}
                  {visibleCount < filteredRecipes.length && (
                    <div className="text-center pt-4">
                      <button
                        onClick={() => setVisibleCount(p => p + 24)}
                        className="px-8 py-3.5 bg-[#F5BA31] hover:bg-[#eab029] text-[#0A2A1D] font-black rounded-2xl text-xs uppercase tracking-wider transition-all hover:scale-102 cursor-pointer shadow-md"
                      >
                        ver mais receitas ({filteredRecipes.length - visibleCount} restantes)
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* 6. "receitas restritivas" (Screenshot 6) */}
            <RestritivasSection onSelectCategory={setActiveCategory} />

            {/* 7. Air Fryer Quick Guide chart */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <AirFryerQuickGuide />
            </div>
          </div>
        )}
      </main>

      {/* Recipe Detail Modal */}
      <RecipeModal
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
        isFavorite={selectedRecipe ? favoriteIds.includes(selectedRecipe.id) : false}
        onToggleFavorite={handleToggleFavorite}
        onAddIngredientsToShoppingList={handleAddIngredientsToShoppingList}
        onStartTimer={handleStartTimer}
      />

      {/* Cooking Timer Modal */}
      <CookingTimerModal
        isOpen={isTimerOpen}
        onClose={() => setIsTimerOpen(false)}
        timerSecondsLeft={timerSecondsLeft}
        timerActive={timerActive}
        timerLabel={timerLabel}
        onStartTimer={handleStartTimer}
        onPauseTimer={handlePauseTimer}
        onResumeTimer={handleResumeTimer}
        onResetTimer={handleResetTimer}
      />

      {/* Shopping List Drawer */}
      <ShoppingListDrawer
        isOpen={isShoppingListOpen}
        onClose={() => setIsShoppingListOpen(false)}
        items={shoppingItems}
        onToggleItem={handleToggleShoppingItem}
        onDeleteItem={handleDeleteShoppingItem}
        onClearCompleted={handleClearCompletedShopping}
        onClearAll={handleClearAllShopping}
        onAddCustomItem={handleAddCustomShoppingItem}
      />

      {/* Receiteria Styled Footer in Deep Green (#0A2A1D) with Yellow (#F5BA31) highlights */}
      <footer className="bg-[#0A2A1D] text-white border-t border-[#0D3827] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-7 h-7 rounded-lg bg-[#F5BA31] flex items-center justify-center text-[#0A2A1D] shrink-0">
                <ChefHat className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="font-serif text-xl sm:text-2xl font-black text-white whitespace-nowrap">
                Minha Receita <span className="text-[#F5BA31]">App</span>
              </span>
            </div>
            <p className="text-stone-300 text-xs mt-1">
              200 Receitas Air Fryer · Pães sem Glúten · Saladas no Pote · Bolos Caseiros
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 font-bold text-stone-200">
            <button
              onClick={() => setActiveCategory('airfryer')}
              className="hover:text-[#F5BA31] cursor-pointer transition-colors"
            >
              200 Air Fryer
            </button>
            <button
              onClick={() => setActiveCategory('paes-sem-gluten')}
              className="hover:text-[#F5BA31] cursor-pointer transition-colors"
            >
              Pães Sem Glúten
            </button>
            <button
              onClick={() => setActiveCategory('guia-saladas')}
              className="hover:text-[#F5BA31] cursor-pointer transition-colors"
            >
              Saladas no Pote
            </button>
            <button
              onClick={() => setActiveCategory('bolo-sem-gluten')}
              className="hover:text-[#F5BA31] cursor-pointer transition-colors"
            >
              Bolos
            </button>
            <button
              onClick={() => setActiveCategory('guia-farinhas')}
              className="hover:text-[#F5BA31] cursor-pointer transition-colors"
            >
              Guia de Farinhas
            </button>
            <button
              onClick={() => setActiveCategory('assistente')}
              className="text-[#F5BA31] hover:underline cursor-pointer transition-colors font-black"
            >
              Chef Virtual
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
