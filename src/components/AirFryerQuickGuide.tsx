import React from 'react';
import { Flame, Clock, Thermometer, ShieldAlert, Sparkles } from 'lucide-react';

export const AirFryerQuickGuide: React.FC = () => {
  const chartItems = [
    { food: 'Frango a Passarinho / Tulipas', temp: '200°C', time: '20 - 25 min', tip: 'Vire na metade para dourar dos dois lados' },
    { food: 'Filé de Frango Grelhado', temp: '195°C', time: '10 - 12 min', tip: 'Não fure o filé durante o cozimento' },
    { food: 'Picanha / Bife Ancho em Tiras', temp: '200°C', time: '10 - 12 min', tip: 'Pré-aquecer no máximo sela os sucos' },
    { food: 'Hambúrguer Artesanal Alto', temp: '200°C', time: '10 - 12 min', tip: 'Faça cavidade no meio para não virar bola' },
    { food: 'Costelinha Suína Barbecue', temp: '160°C → 200°C', time: '25 min + 10 min', tip: 'Comece em 160°C e doure no final a 200°C' },
    { food: 'Filé de Salmão com Crosta', temp: '180°C', time: '12 min', tip: 'Pele para baixo na cesta sem virar' },
    { food: 'Camarões Alho e Óleo', temp: '200°C', time: '7 - 8 min', tip: 'Seque antes para não soltar água' },
    { food: 'Batatas Rústicas com Alecrim', temp: '200°C', time: '22 - 25 min', tip: 'Deixe de molho e seque para sair o amido' },
    { food: 'Pão de Queijo Congelado', temp: '180°C', time: '12 - 14 min', tip: 'Coloque direto sem descongelar' },
    { food: 'Dadinhos de Tapioca', temp: '200°C', time: '14 - 15 min', tip: 'Deixe espaço entre eles para não colar' },
    { food: 'Pudim de Leite na Forma', temp: '160°C', time: '25 min', tip: 'Cubra com papel alumínio vedado' },
    { food: 'Torresmo de Rolo Pururuca', temp: '180°C → 200°C', time: '30 min + 10 min', tip: 'Seque bem a pele com papel toalha' }
  ];

  const goldenRules = [
    { title: '1. Pré-aqueça sempre 3 minutos', desc: 'Isso estabiliza o fluxo de calor convectivo no cesto antes da comida entrar.' },
    { title: '2. Nunca sobreponha alimentos', desc: 'O ar quente precisa circular 360°. Alimentos empilhados cozinham no vapor em vez de ficarem crocantes.' },
    { title: '3. Seque carnes e vegetais', desc: 'A umidade superficial evapora e cozinha o alimento; para crocância estaladiça, a superfície deve estar seca.' },
    { title: '4. Chacoalhe na metade do tempo', desc: 'Aos 50% do tempo programado, agite a cesta ou vire as peças para assar uniformemente.' },
    { title: '5. Uma borrifada de azeite basta', desc: 'Um fio fino de azeite é o que transfere o calor rapidamente e dá a clássica cor dourada de restaurante.' }
  ];

  return (
    <div className="bg-white rounded-3xl border border-[#EBE3D3] p-6 sm:p-8 shadow-xs my-8">
      <div className="flex items-center gap-2 mb-2 text-[#0A2A1D]">
        <div className="w-8 h-8 rounded-xl bg-[#F5BA31] text-[#0A2A1D] flex items-center justify-center font-bold">
          <Flame className="w-5 h-5 stroke-[2.5]" />
        </div>
        <h3 className="font-serif text-xl sm:text-2xl font-black text-[#0A2A1D]">
          tabela de tempos & temperaturas na air fryer
        </h3>
      </div>
      <p className="text-[#0A2A1D]/70 text-xs sm:text-sm mb-6">
        Guia prático de consulta rápida para os preparos mais frequentes da sua cozinha:
      </p>

      {/* Table */}
      <div className="overflow-x-auto mb-8 border border-[#EBE3D3] rounded-2xl">
        <table className="w-full text-left text-xs">
          <thead className="bg-[#FAF8F3] border-b border-[#EBE3D3] text-[#0A2A1D] font-mono">
            <tr>
              <th className="py-3 px-4 font-bold">Alimento</th>
              <th className="py-3 px-4 font-bold">Temperatura</th>
              <th className="py-3 px-4 font-bold">Tempo</th>
              <th className="py-3 px-4 font-bold hidden sm:table-cell">Segredo do Ponto</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F0EAE1]">
            {chartItems.map((item, idx) => (
              <tr key={idx} className="hover:bg-amber-50/40 transition-colors">
                <td className="py-3 px-4 font-bold text-[#0A2A1D]">{item.food}</td>
                <td className="py-3 px-4 font-mono font-black text-[#15803D] tabular-nums">{item.temp}</td>
                <td className="py-3 px-4 font-mono font-bold text-[#0A2A1D] tabular-nums">{item.time}</td>
                <td className="py-3 px-4 text-[#0A2A1D]/70 hidden sm:table-cell">{item.tip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 5 Golden Rules */}
      <div className="p-6 bg-[#0A2A1D] text-white rounded-3xl border border-[#0D3827]">
        <div className="flex items-center gap-2 mb-4 text-[#F5BA31] font-bold text-xs uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-[#F5BA31]" />
          <span>As 5 Leis da Air Fryer Imbatível</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {goldenRules.map((r, i) => (
            <div key={i} className="p-4 bg-white/10 rounded-2xl border border-white/10">
              <p className="font-serif text-xs font-bold text-[#F5BA31]">{r.title}</p>
              <p className="text-[11px] text-stone-200 mt-1 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
