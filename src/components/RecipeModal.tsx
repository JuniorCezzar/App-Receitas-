import React, { useState, useEffect } from 'react';
import { 
  X, Clock, Thermometer, Users, Check, Flame, 
  Bookmark, ShoppingBag, Timer, Printer, Share2, 
  Sparkles, ChefHat, Layers, Edit3, Save 
} from 'lucide-react';
import { Recipe } from '../types/recipe';

interface RecipeModalProps {
  recipe: Recipe | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (recipeId: string) => void;
  onAddIngredientsToShoppingList: (ingredients: { name: string; amount: string | number; unit: string }[], recipeTitle: string) => void;
  onStartTimer: (minutes: number, label: string) => void;
}

export const RecipeModal: React.FC<RecipeModalProps> = ({
  recipe,
  onClose,
  isFavorite,
  onToggleFavorite,
  onAddIngredientsToShoppingList,
  onStartTimer
}) => {
  if (!recipe) return null;

  const [portionScale, setPortionScale] = useState<number>(1);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});
  const [cookingMode, setCookingMode] = useState<boolean>(false);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [userNote, setUserNote] = useState<string>('');
  const [isNoteSaved, setIsNoteSaved] = useState<boolean>(false);
  const [copiedShare, setCopiedShare] = useState<boolean>(false);

  // Load user notes from localStorage
  useEffect(() => {
    const savedNotes = localStorage.getItem(`recipe_note_${recipe.id}`);
    if (savedNotes) {
      setUserNote(savedNotes);
    } else {
      setUserNote('');
    }
    setCheckedIngredients({});
    setCookingMode(false);
    setCurrentStepIndex(0);
    setPortionScale(1);
  }, [recipe.id]);

  const toggleIngredientCheck = (index: number) => {
    setCheckedIngredients(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleSaveNote = () => {
    localStorage.setItem(`recipe_note_${recipe.id}`, userNote);
    setIsNoteSaved(true);
    setTimeout(() => setIsNoteSaved(false), 2000);
  };

  const handleShare = () => {
    const textToShare = `${recipe.title} - ${recipe.cookTimeMinutes} min na Airfryer/Forno (${recipe.temperatureCelsius || 180}°C).\nReceitasFit & AirFryer`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToShare);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Helper to format scaled ingredient quantities
  const formatScaledAmount = (amount: number | string) => {
    if (typeof amount === 'number') {
      const scaled = amount * portionScale;
      return scaled % 1 === 0 ? scaled : scaled.toFixed(1);
    }
    const parsed = parseFloat(amount);
    if (!isNaN(parsed)) {
      const scaled = parsed * portionScale;
      return scaled % 1 === 0 ? scaled : scaled.toFixed(1);
    }
    return amount;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/70 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-white text-stone-900 rounded-2xl w-full max-w-3xl max-h-[92vh] flex flex-col shadow-2xl border border-stone-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-[#EBE3D3] flex items-center justify-between bg-[#FAF8F3] sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A2A1D]/70 font-mono">
              {recipe.subcategory || recipe.category}
            </span>
            {recipe.temperatureCelsius && (
              <span className="inline-flex items-center gap-1 text-xs font-black text-[#0A2A1D] bg-[#F5BA31] px-2.5 py-0.5 rounded-full font-mono tabular-nums shadow-2xs">
                <Flame className="w-3.5 h-3.5 fill-current" />
                {recipe.temperatureCelsius}°C
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleFavorite(recipe.id)}
              className={`p-2 rounded-full transition-colors cursor-pointer ${
                isFavorite
                  ? 'bg-[#F5BA31] text-[#0A2A1D]'
                  : 'bg-white text-stone-500 hover:text-[#0A2A1D] hover:bg-stone-100 border border-[#EBE3D3]'
              }`}
              title={isFavorite ? 'Remover dos favoritos' : 'Salvar favorito'}
            >
              <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-white text-stone-500 hover:text-[#0A2A1D] hover:bg-stone-100 border border-[#EBE3D3] transition-colors cursor-pointer"
              title="Copiar receita"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              onClick={handlePrint}
              className="p-2 rounded-full bg-white text-stone-500 hover:text-[#0A2A1D] hover:bg-stone-100 border border-[#EBE3D3] transition-colors cursor-pointer"
              title="Imprimir receita"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#0A2A1D] text-white hover:bg-[#072016] transition-colors cursor-pointer ml-1"
              title="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {copiedShare && (
            <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800 text-center font-medium animate-in fade-in">
              Receita copiada para a área de transferência!
            </div>
          )}

          {/* Title and Summary */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-2 leading-tight">
              {recipe.title}
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              {recipe.description}
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 bg-stone-50 rounded-xl border border-stone-200/80 font-mono tabular-nums text-xs">
            <div className="flex flex-col">
              <span className="text-stone-500 font-sans">Tempo de Preparo</span>
              <span className="text-stone-900 font-semibold mt-0.5">{recipe.prepTimeMinutes} minutos</span>
            </div>
            <div className="flex flex-col">
              <span className="text-stone-500 font-sans">Tempo de Cozimento</span>
              <span className="text-stone-900 font-semibold mt-0.5">{recipe.cookTimeMinutes} minutos</span>
            </div>
            <div className="flex flex-col">
              <span className="text-stone-500 font-sans">Dificuldade</span>
              <span className="text-stone-900 font-semibold font-sans mt-0.5">{recipe.difficulty}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-stone-500 font-sans">Calorias (aprox.)</span>
              <span className="text-stone-900 font-semibold mt-0.5">{recipe.caloriesApprox ? `${recipe.caloriesApprox} kcal` : 'Leve'}</span>
            </div>
          </div>

          {/* Timer CTA Banner */}
          <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-[#F5F2EB] border border-[#E5DECD] rounded-2xl gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#F5BA31] text-[#0A2A1D] font-bold shrink-0 shadow-xs">
                <Timer className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-[#0A2A1D]">Timer Culinário para esta receita</p>
                <p className="text-[#0A2A1D]/75 font-medium">
                  {recipe.cookTimeMinutes} minutos a {recipe.temperatureCelsius || 180}°C
                </p>
              </div>
            </div>

            <button
              onClick={() => onStartTimer(recipe.cookTimeMinutes, recipe.title)}
              className="w-full sm:w-auto px-5 py-2.5 bg-[#0A2A1D] hover:bg-[#072016] text-[#F5BA31] rounded-xl text-xs font-black transition-colors cursor-pointer shadow-xs whitespace-nowrap"
            >
              Iniciar Timer ({recipe.cookTimeMinutes} min)
            </button>
          </div>

          {/* Specific Tips: Airfryer or Gluten Free */}
          {recipe.airfryerTip && (
            <div className="p-3.5 bg-stone-100/80 border-l-3 border-amber-500 rounded-r-xl text-xs text-stone-700 leading-relaxed">
              <strong className="text-stone-900 font-semibold">Dica de Ouro para Air Fryer: </strong>
              {recipe.airfryerTip}
            </div>
          )}

          {recipe.glutenFreeTip && (
            <div className="p-3.5 bg-stone-100/80 border-l-3 border-orange-500 rounded-r-xl text-xs text-stone-700 leading-relaxed">
              <strong className="text-stone-900 font-semibold">Segredo Sem Glúten: </strong>
              {recipe.glutenFreeTip}
            </div>
          )}

          {/* Salada no Pote 5-Layers Visualizer if available */}
          {recipe.jarLayers && recipe.jarLayers.length > 0 && (
            <div className="p-4 bg-emerald-50/60 border border-emerald-200/80 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-emerald-900 font-semibold text-xs uppercase tracking-wider">
                <Layers className="w-4 h-4 text-emerald-600" />
                <span>Ordem Estratégica de Montagem no Pote (5 Camadas)</span>
              </div>
              <div className="space-y-2 text-xs">
                {recipe.jarLayers.map((l: any) => (
                  <div key={l.layerNumber} className="flex items-start gap-2 bg-white/80 p-2 rounded-lg border border-emerald-100">
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0">
                      {l.layerNumber}
                    </span>
                    <div>
                      <p className="font-semibold text-emerald-950">{l.title}</p>
                      <p className="text-stone-600 text-[11px]">{l.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Ingredients with Interactive Portion Scaler */}
          <div className="space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2">
                <span>Ingredientes</span>
                <span className="text-xs font-normal text-stone-500">
                  (Rendimento: {Math.round(recipe.servings * portionScale)} porções)
                </span>
              </h3>

              {/* Portion scaler buttons */}
              <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-lg">
                <span className="text-[11px] text-stone-500 px-1 font-mono">Porções:</span>
                {[1, 2, 3].map(scale => (
                  <button
                    key={scale}
                    onClick={() => setPortionScale(scale)}
                    className={`px-2 py-0.5 text-xs font-semibold rounded cursor-pointer transition-colors ${
                      portionScale === scale
                        ? 'bg-white text-stone-900 shadow-2xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    {scale}x
                  </button>
                ))}
              </div>
            </div>

            {/* Checklist items */}
            <ul className="space-y-2 text-sm">
              {recipe.ingredients.map((ing: any, idx: number) => {
                const isChecked = !!checkedIngredients[idx];
                return (
                  <li
                    key={idx}
                    onClick={() => toggleIngredientCheck(idx)}
                    className={`flex items-start gap-3 p-2.5 rounded-lg border transition-colors cursor-pointer select-none ${
                      isChecked
                        ? 'bg-stone-50 border-stone-200 text-stone-400 line-through'
                        : 'bg-white border-stone-200/80 hover:border-amber-300 text-stone-800'
                    }`}
                  >
                    <div className={`w-4 h-4 mt-0.5 rounded border flex items-center justify-center transition-colors shrink-0 ${
                      isChecked
                        ? 'bg-amber-600 border-amber-600 text-white'
                        : 'border-stone-300 bg-white'
                    }`}>
                      {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>

                    <div className="flex-1 text-xs sm:text-sm">
                      <span className="font-semibold text-stone-900">
                        {formatScaledAmount(ing.amount)} {ing.unit}
                      </span>
                      {' '}
                      <span>{ing.name}</span>
                      {ing.note && (
                        <span className="text-stone-500 text-xs italic ml-1">
                          ({ing.note})
                        </span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Add to Shopping List button */}
            <button
              onClick={() => onAddIngredientsToShoppingList(recipe.ingredients, recipe.title)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#FAF8F3] hover:bg-[#F2EDE2] text-[#0A2A1D] rounded-2xl text-xs font-bold transition-colors cursor-pointer border border-[#E0D8C6]"
            >
              <ShoppingBag className="w-4 h-4 text-[#F5BA31] stroke-[2.5]" />
              <span>Adicionar Ingredientes à Lista de Compras</span>
            </button>
          </div>

          {/* Section: Mode Cozinhar Toggle & Instructions */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-lg font-bold text-[#0A2A1D]">
                Modo de Preparo
              </h3>

              <button
                onClick={() => setCookingMode(!cookingMode)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold cursor-pointer transition-colors ${
                  cookingMode
                    ? 'bg-[#F5BA31] text-[#0A2A1D]'
                    : 'bg-[#FAF8F3] text-[#0A2A1D] hover:bg-[#F2EDE2] border border-[#E0D8C6]'
                }`}
              >
                <ChefHat className="w-4 h-4" />
                <span>{cookingMode ? 'Sair do Modo Cozinhar' : 'Modo Passo a Passo'}</span>
              </button>
            </div>

            {/* Full Cooking Step-by-Step interactive view with Green & Yellow styling */}
            {cookingMode ? (
              <div className="p-6 bg-[#0A2A1D] text-white rounded-3xl space-y-4 border border-[#0D3827] shadow-lg">
                <div className="flex items-center justify-between text-xs font-mono text-[#F5BA31] font-bold">
                  <span>Passo {currentStepIndex + 1} de {recipe.instructions.length}</span>
                  <span>{Math.round(((currentStepIndex + 1) / recipe.instructions.length) * 100)}% Concluído</span>
                </div>

                <div className="w-full bg-[#072016] h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#F5BA31] h-full transition-all duration-300"
                    style={{ width: `${((currentStepIndex + 1) / recipe.instructions.length) * 100}%` }}
                  />
                </div>

                <p className="text-base sm:text-lg font-medium leading-relaxed min-h-[80px]">
                  {recipe.instructions[currentStepIndex]}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <button
                    disabled={currentStepIndex === 0}
                    onClick={() => setCurrentStepIndex(p => Math.max(0, p - 1))}
                    className="px-4 py-2.5 rounded-xl bg-white/10 text-stone-200 hover:text-white hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bold cursor-pointer transition-colors"
                  >
                    Passo Anterior
                  </button>

                  <button
                    disabled={currentStepIndex === recipe.instructions.length - 1}
                    onClick={() => setCurrentStepIndex(p => Math.min(recipe.instructions.length - 1, p + 1))}
                    className="px-5 py-2.5 rounded-xl bg-[#F5BA31] text-[#0A2A1D] font-black hover:bg-[#eab029] disabled:opacity-30 disabled:cursor-not-allowed text-xs cursor-pointer shadow-sm transition-colors"
                  >
                    Próximo Passo
                  </button>
                </div>
              </div>
            ) : (
              <ol className="space-y-3">
                {recipe.instructions.map((step: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
                    <span className="w-6 h-6 rounded-full bg-stone-100 border border-stone-200 text-stone-800 flex items-center justify-center font-bold text-xs shrink-0 font-mono">
                      {idx + 1}
                    </span>
                    <span className="pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            )}
          </div>

          {/* Section: Personal Notes */}
          <div className="space-y-2 pt-2 border-t border-stone-100">
            <label className="block text-xs font-semibold text-stone-700 flex items-center gap-1.5">
              <Edit3 className="w-3.5 h-3.5 text-stone-400" />
              <span>Minhas Notas & Ajustes Pessoais</span>
            </label>
            <textarea
              rows={2}
              value={userNote}
              onChange={(e) => setUserNote(e.target.value)}
              placeholder="Ex: Temperei com menos sal, deixei 2 minutos a mais e ficou incrível..."
              className="w-full p-2.5 bg-stone-50 border border-stone-200 focus:border-amber-400 focus:bg-white rounded-xl text-xs text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-400/30 transition-all"
            />
            <div className="flex justify-end">
              <button
                onClick={handleSaveNote}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-800 hover:bg-stone-900 text-white rounded-lg text-xs font-medium transition-colors cursor-pointer"
              >
                <Save className="w-3.5 h-3.5" />
                <span>{isNoteSaved ? 'Nota Salva!' : 'Salvar Nota'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
