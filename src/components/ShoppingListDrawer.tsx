import React, { useState } from 'react';
import { X, Check, Trash2, Copy, ShoppingBag, Plus } from 'lucide-react';
import { ShoppingItem } from '../types/recipe';

interface ShoppingListDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: ShoppingItem[];
  onToggleItem: (id: string) => void;
  onDeleteItem: (id: string) => void;
  onClearCompleted: () => void;
  onClearAll: () => void;
  onAddCustomItem: (text: string) => void;
}

export const ShoppingListDrawer: React.FC<ShoppingListDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onToggleItem,
  onDeleteItem,
  onClearCompleted,
  onClearAll,
  onAddCustomItem
}) => {
  const [newItemText, setNewItemText] = useState('');
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItemText.trim()) {
      onAddCustomItem(newItemText.trim());
      setNewItemText('');
    }
  };

  const handleCopyForWhatsApp = () => {
    if (items.length === 0) return;

    let text = `🛒 *LISTA DE COMPRAS - RECEITAS FIT & AIRFRYER*\n\n`;

    // Group items by recipe
    const grouped: Record<string, ShoppingItem[]> = {};
    items.forEach(it => {
      const group = it.recipeTitle || 'Itens Avulsos';
      if (!grouped[group]) grouped[group] = [];
      grouped[group].push(it);
    });

    Object.entries(grouped).forEach(([groupName, groupItems]) => {
      text += `📌 *${groupName}*\n`;
      groupItems.forEach(item => {
        text += `${item.completed ? '✅' : '⬜'} ${item.ingredient}\n`;
      });
      text += `\n`;
    });

    text += `_Gerado pelo App Cozinha Criativa & Fit_`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedSuccess(true);
      setTimeout(() => setCopiedSuccess(false), 2500);
    }
  };

  const pendingCount = items.filter(i => !i.completed).length;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-stone-950/60 backdrop-blur-xs">
      <div 
        className="w-full max-w-md bg-white text-stone-900 h-full flex flex-col shadow-2xl border-l border-stone-200 animate-in slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 border-b border-[#EBE3D3] flex items-center justify-between bg-[#FAF8F3]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#F5BA31] text-[#0A2A1D] flex items-center justify-center font-bold">
              <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#0A2A1D] leading-none">Lista de Compras</h3>
              <p className="text-[11px] text-[#0A2A1D]/60 mt-1 font-mono font-medium">
                {pendingCount} itens pendentes · {items.length} no total
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-400 hover:text-[#0A2A1D] hover:bg-stone-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Input for quick custom item */}
        <form onSubmit={handleAddSubmit} className="p-3 border-b border-[#EBE3D3] flex gap-2 bg-white">
          <input
            type="text"
            value={newItemText}
            onChange={(e) => setNewItemText(e.target.value)}
            placeholder="Adicionar item à lista (ex: Azeite de oliva)..."
            className="flex-1 px-3 py-2 text-xs bg-[#FAF8F3] border border-[#E0D8C6] rounded-xl focus:outline-none focus:border-[#0A2A1D]"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-[#0A2A1D] hover:bg-[#072016] text-[#F5BA31] rounded-xl text-xs font-bold cursor-pointer shrink-0 flex items-center gap-1 shadow-2xs"
          >
            <Plus className="w-3.5 h-3.5 stroke-[3]" />
            <span>Adicionar</span>
          </button>
        </form>

        {copiedSuccess && (
          <div className="mx-4 mt-2 p-2 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-800 text-center font-medium">
            Lista formatada copiada para envio no WhatsApp!
          </div>
        )}

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-stone-400">
              <ShoppingBag className="w-12 h-12 stroke-1 text-stone-300 mb-2" />
              <p className="text-sm font-semibold text-stone-700">Sua lista está vazia</p>
              <p className="text-xs text-stone-500 max-w-xs mt-1">
                Abra qualquer receita e clique em "Adicionar Ingredientes" para montar suas compras automaticamente.
              </p>
            </div>
          ) : (
            items.map(item => (
              <div
                key={item.id}
                className={`flex items-start gap-3 p-2.5 rounded-xl border transition-all ${
                  item.completed
                    ? 'bg-stone-50 border-stone-200 text-stone-400'
                    : 'bg-white border-stone-200 hover:border-amber-300 text-stone-800 shadow-2xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => onToggleItem(item.id)}
                  className={`w-5 h-5 mt-0.5 rounded border flex items-center justify-center transition-colors cursor-pointer shrink-0 ${
                    item.completed
                      ? 'bg-emerald-600 border-emerald-600 text-white'
                      : 'border-stone-300 bg-white hover:border-stone-400'
                  }`}
                >
                  {item.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </button>

                <div 
                  className="flex-1 cursor-pointer"
                  onClick={() => onToggleItem(item.id)}
                >
                  <p className={`text-xs sm:text-sm font-medium ${item.completed ? 'line-through text-stone-400' : 'text-stone-800'}`}>
                    {item.ingredient}
                  </p>
                  {item.recipeTitle && (
                    <p className="text-[10px] text-stone-400 mt-0.5">
                      {item.recipeTitle}
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => onDeleteItem(item.id)}
                  className="text-stone-300 hover:text-rose-600 p-1 rounded transition-colors cursor-pointer"
                  title="Excluir item"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Actions */}
        {items.length > 0 && (
          <div className="p-4 border-t border-[#EBE3D3] bg-[#FAF8F3] space-y-2">
            <button
              onClick={handleCopyForWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#0A2A1D] hover:bg-[#072016] text-[#F5BA31] rounded-2xl text-xs font-black transition-colors cursor-pointer shadow-sm"
            >
              <Copy className="w-4 h-4 stroke-[2.5]" />
              <span>Copiar Lista para WhatsApp</span>
            </button>

            <div className="flex items-center justify-between pt-1 text-xs">
              <button
                onClick={onClearCompleted}
                className="text-stone-500 hover:text-stone-800 underline cursor-pointer"
              >
                Limpar concluídos
              </button>
              <button
                onClick={onClearAll}
                className="text-rose-600 hover:text-rose-700 underline cursor-pointer"
              >
                Limpar tudo
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
