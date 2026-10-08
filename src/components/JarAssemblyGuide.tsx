import React from 'react';
import { Layers, Droplets, ShieldCheck, Clock, Sparkles } from 'lucide-react';

interface JarAssemblyGuideProps {
  onExploreSalads: () => void;
}

export const JarAssemblyGuide: React.FC<JarAssemblyGuideProps> = ({ onExploreSalads }) => {
  const layers = [
    {
      num: 5,
      name: 'Camada 5 (Topo): Folhas Verdes Secas & Sementes',
      desc: 'Rúcula, alface americana ou romana, espinafre baby, nozes e sementes de abóbora. Devem estar 100% secas (passe na centrífuga de folhas). Como ficam no topo, continuam crocantes por até 5 dias!',
      color: 'bg-emerald-600 text-white',
      badge: 'Crocância Máxima'
    },
    {
      num: 4,
      name: 'Camada 4: Proteínas & Queijos',
      desc: 'Peito de frango assado em tiras, atum sólido escorrido, ovos de codorna, queijo feta ou cubos de tofu grelhado. Ficam isoladas do molho, mantendo o sabor original.',
      color: 'bg-amber-600 text-white',
      badge: 'Saciedade'
    },
    {
      num: 3,
      name: 'Camada 3: Grãos & Carboidratos Cozidos',
      desc: 'Quinoa cozida al dente, grão-de-bico, feijão fradinho, arroz integral ou macarrão sem glúten. Absorvem os aromas dos legumes sem amolecer as folhas.',
      color: 'bg-yellow-600 text-white',
      badge: 'Energia'
    },
    {
      num: 2,
      name: 'Camada 2: Legumes Densos & Barreira Protetora',
      desc: 'Cenoura ralada, pepino, rabanete e tomatinhos cereja INTEIROS. Eles não absorvem o molho excessivamente e criam uma barreira física estanque que impede o líquido de subir.',
      color: 'bg-orange-600 text-white',
      badge: 'Barreira Física'
    },
    {
      num: 1,
      name: 'Camada 1 (Fundo): Molho & Vinagrete',
      desc: 'Azeite extravirgem, vinagretes de limão ou maracujá, molho de iogurte ou mostarda e mel. Fica concentrado estritamente no fundo do pote de vidro fechado.',
      color: 'bg-stone-800 text-white',
      badge: 'Sabor Base'
    }
  ];

  const dressingRecipes = [
    {
      name: 'Vinagrete de Maracujá Fresco',
      ing: 'Polpa de 1 maracujá, 4 colheres de azeite, 1 colher de mel, sal marinho e pimenta rosa.',
      pair: 'Saladas tropicais com manga e frango'
    },
    {
      name: 'Molho Caesar Fit de Iogurte',
      ing: '1 pote de iogurte natural sem açúcar, 1 colher de mostarda dijon, suco de 1/2 limão e 1 dente de alho ralado.',
      pair: 'Alface americana, frango e parmesão'
    },
    {
      name: 'Vinagrete Balsâmico Mediterrâneo',
      ing: '3 colheres de azeite extravirgem, 1 colher de vinagre balsâmico, orégano seco e pitada de sal.',
      pair: 'Grão-de-bico, feta e azeitonas'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full mb-3 border border-emerald-200">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Método Revolucionário de Meal Prep</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
          A Ciência da Salada no Pote: 5 Camadas Perfeitas
        </h2>
        <p className="text-stone-600 text-sm leading-relaxed">
          O segredo para sua salada durar até 5 dias na geladeira sem murchar uma única folha verde está estritamente na <strong>ordem de empilhamento</strong>.
        </p>
      </div>

      {/* Interactive Visual Jar Stack Diagram */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs mb-10">
        <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-6">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-emerald-600" />
            <h3 className="font-serif text-lg font-bold text-stone-900">
              Esquema de Montagem Vertical
            </h3>
          </div>
          <span className="text-xs font-mono text-stone-500">Pote de Vidro Hermético (500-750ml)</span>
        </div>

        <div className="space-y-3">
          {layers.map(layer => (
            <div
              key={layer.num}
              className="p-4 rounded-xl border border-stone-200/90 bg-stone-50/60 hover:bg-white hover:border-emerald-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="flex items-start gap-3 flex-1">
                <span className={`w-8 h-8 rounded-lg ${layer.color} flex items-center justify-center font-bold text-sm shrink-0 font-mono shadow-2xs`}>
                  {layer.num}
                </span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-serif text-sm font-bold text-stone-900">
                      {layer.name}
                    </h4>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60 font-mono">
                      {layer.badge}
                    </span>
                  </div>
                  <p className="text-stone-600 text-xs mt-1 leading-relaxed">
                    {layer.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Golden Rules */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-stone-100">
          <div className="flex items-start gap-2.5">
            <Droplets className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-stone-900">Folhas 100% Secas</p>
              <p className="text-[11px] text-stone-500 mt-0.5">A umidade nas folhas é a inimiga nº 1. Use centrífuga ou papel toalha.</p>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-stone-900">Tomates Inteiros</p>
              <p className="text-[11px] text-stone-500 mt-0.5">Nunca corte tomatinhos cereja antes da hora; inteiros eles não liberam água.</p>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-stone-900">Armazene em Pé</p>
              <p className="text-[11px] text-stone-500 mt-0.5">Mantenha os potes sempre na vertical na geladeira para o molho não subir.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Best Dressings Recipes */}
      <div className="bg-emerald-950 text-stone-100 rounded-2xl p-6 sm:p-8 mb-8 border border-emerald-900">
        <h3 className="font-serif text-xl font-bold text-emerald-200 mb-2">
          3 Molhos Caseiros Insuperáveis para Salada no Pote
        </h3>
        <p className="text-emerald-300 text-xs mb-6">
          Misture os ingredientes em uma tigelinha antes de despejar no fundo do pote:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {dressingRecipes.map((dr, idx) => (
            <div key={idx} className="bg-emerald-900/60 p-4 rounded-xl border border-emerald-800">
              <h4 className="font-serif text-sm font-bold text-white mb-1.5">{dr.name}</h4>
              <p className="text-xs text-emerald-200 leading-relaxed mb-2 font-mono">{dr.ing}</p>
              <p className="text-[11px] text-emerald-400">💡 Combina com: {dr.pair}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Button to see Saladas catalog */}
      <div className="text-center">
        <button
          onClick={onExploreSalads}
          className="px-8 py-3.5 bg-[#F5BA31] hover:bg-[#eab029] text-[#0A2A1D] rounded-2xl text-xs font-black transition-all hover:scale-102 cursor-pointer shadow-md uppercase tracking-wider"
        >
          Ver Todas as Receitas de Salada no Pote →
        </button>
      </div>
    </div>
  );
};
