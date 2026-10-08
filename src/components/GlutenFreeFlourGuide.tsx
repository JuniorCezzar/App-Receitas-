import React from 'react';
import { WheatOff, Info, CheckCircle2, AlertTriangle, Sparkles, BookOpen } from 'lucide-react';

interface GlutenFreeFlourGuideProps {
  onExploreBreads: () => void;
  onExploreCakes: () => void;
}

export const GlutenFreeFlourGuide: React.FC<GlutenFreeFlourGuideProps> = ({
  onExploreBreads,
  onExploreCakes
}) => {
  const flours = [
    {
      name: 'Psyllium em Pó (Plantago ovata)',
      role: 'Elasticidade e Retenção Hídrica (Insubstituível para Pães)',
      desc: 'Fibra natural solúvel que, ao entrar em contato com água morna, vira um gel elástico transparente. É o que permite modelar pães franceses, pão sírio e pães de hambúrguer sem esfarelar.',
      proportion: '5g a 15g por cada 500g de farinhas secas.',
      badge: 'Essencial para Pães'
    },
    {
      name: 'Goma Xantana',
      role: 'Rede Elástica e Sustentação de Gases',
      desc: 'Polissacarídeo natural que imita a rede proteica do glúten, retendo as bolhas de gás carbônico formadas pelo fermento biológico ou químico para o pão crescer e não murchar.',
      proportion: '1/2 colher de café para bolos; 1 colher de chá para pães.',
      badge: 'Anti-Esfarelamento'
    },
    {
      name: 'Farinha de Arroz Branca Fina',
      role: 'Farinha Base Estrutural',
      desc: 'A espinha dorsal neutra das misturas sem glúten. Prefira sempre a versão "fina" ou "extrafina" para não dar textura arenosa na boca.',
      proportion: 'Geralmente 50% a 60% do peso total das farinhas.',
      badge: 'Farinha Base'
    },
    {
      name: 'Polvilho Doce / Amido de Milho',
      role: 'Leveza e Maciez do Miolo',
      desc: 'Amidos finos que trazem maleabilidade, miolo fofo e cor clara para os bolos e pães.',
      proportion: '20% a 30% da mistura de farinhas.',
      badge: 'Maciez'
    },
    {
      name: 'Fécula de Batata',
      role: 'Umidade e Textura Aveludada',
      desc: 'Retém umidade por dias, evitando que o bolo ou pão resseque logo após esfriar.',
      proportion: '10% a 20% do mix.',
      badge: 'Anti-Ressecamento'
    },
    {
      name: 'Farinha de Amêndoas / Castanhas',
      role: 'Riqueza de Gorduras Boas e Sabor Nobre',
      desc: 'Com alto teor de óleos naturais, garante bolos molhadinhos, aromáticos e pães low-carb sem glúten.',
      proportion: 'Pode ser usada pura ou até 50% em bolos.',
      badge: 'Gourmet & Low Carb'
    }
  ];

  const celiacSafetyTips = [
    'Nunca use colheres de pau ou tábuas de madeira que já foram usadas com farinha de trigo comum (a madeira é porosa e retém glúten).',
    'Higienize a cesta da Airfryer antes de preparar pratos sem glúten se alguém na casa tiver usado com pão comum.',
    'Verifique o rótulo de aveias: compre apenas as que possuem a menção explícita "Sem Glúten" no pacote.',
    'Use tostadeiras exclusivas ou use saquinhos protetores para torrar pães sem glúten.'
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-700 bg-orange-50 px-3 py-1 rounded-full mb-3 border border-orange-200">
          <WheatOff className="w-3.5 h-3.5" />
          <span>Manual de Confeitaria & Panificação</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
          O Segredo das Farinhas Sem Glúten
        </h2>
        <p className="text-stone-600 text-sm leading-relaxed">
          Sem trigo, nenhuma farinha isolada faz tudo sozinha. O segredo dos grandes padeiros sem glúten é o <strong>trio de ouro: Farinha Base + Amido Leve + Espessante Elástico</strong>.
        </p>
      </div>

      {/* Flours Grid */}
      <div className="space-y-4 mb-10">
        {flours.map((f, i) => (
          <div key={i} className="p-5 bg-white rounded-xl border border-stone-200 shadow-2xs hover:border-orange-300 transition-colors">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
              <h3 className="font-serif text-base font-bold text-stone-900">{f.name}</h3>
              <span className="text-[10px] font-semibold text-orange-800 bg-orange-100 px-2 py-0.5 rounded font-mono">
                {f.badge}
              </span>
            </div>
            <p className="text-xs font-semibold text-amber-900 mb-1">{f.role}</p>
            <p className="text-xs text-stone-600 leading-relaxed mb-3">{f.desc}</p>
            <div className="text-[11px] text-stone-500 font-mono bg-stone-50 p-2 rounded-lg border border-stone-150">
              Proporção recomendada: <strong className="text-stone-800">{f.proportion}</strong>
            </div>
          </div>
        ))}
      </div>

      {/* Celiac Cross-contamination Tips */}
      <div className="bg-amber-950 text-stone-100 rounded-2xl p-6 sm:p-8 mb-8 border border-amber-900">
        <div className="flex items-center gap-2 mb-3 text-amber-300">
          <AlertTriangle className="w-5 h-5 text-amber-400" />
          <h3 className="font-serif text-lg font-bold">Cuidados com Contaminação Cruzada para Celíacos</h3>
        </div>
        <p className="text-xs text-stone-300 mb-4">
          Para quem tem doença celíaca, até 10 miligramas de glúten (uma migalha invisível) podem causar inflamação intestinal:
        </p>
        <ul className="space-y-2.5 text-xs text-stone-200">
          {celiacSafetyTips.map((tip, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action shortcuts */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          onClick={onExploreBreads}
          className="w-full sm:w-auto px-7 py-3 bg-[#F5BA31] hover:bg-[#eab029] text-[#0A2A1D] rounded-2xl text-xs font-black transition-all hover:scale-102 cursor-pointer shadow-md uppercase tracking-wider"
        >
          Ver Receitas de Pães Sem Glúten
        </button>
        <button
          onClick={onExploreCakes}
          className="w-full sm:w-auto px-7 py-3 bg-[#0A2A1D] hover:bg-[#072016] text-[#F5BA31] rounded-2xl text-xs font-black transition-all hover:scale-102 cursor-pointer shadow-md uppercase tracking-wider"
        >
          Ver Receitas de Bolos Sem Glúten
        </button>
      </div>
    </div>
  );
};
