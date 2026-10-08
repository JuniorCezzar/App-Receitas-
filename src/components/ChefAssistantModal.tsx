import React, { useState } from 'react';
import { ChefHat, Sparkles, Send, Bot, User, Flame, WheatOff, Lightbulb } from 'lucide-react';

interface ChefAssistantModalProps {
  onSelectRecipeTitle?: (title: string) => void;
}

interface Message {
  sender: 'user' | 'chef';
  text: string;
}

export const ChefAssistantModal: React.FC<ChefAssistantModalProps> = ({ onSelectRecipeTitle }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'chef',
      text: 'Olá! Sou seu Chef Consultor especializado em Air Fryer, Panificação Sem Glúten e Saladas no Pote. Me conte: quais ingredientes você tem na geladeira agora, ou que receita gostaria de adaptar?'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const quickPrompts = [
    'O que posso fazer na Airfryer com frango e batata doce?',
    'Como substituir o psyllium em pães sem glúten?',
    'Qual a melhor temperatura para salmão na Airfryer?',
    'Ideia de Salada no Pote refrescante para 4 dias'
  ];

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || input;
    if (!textToSend.trim() || loading) return;

    const userMsg: Message = { sender: 'user', text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      // Intelligent response generator with deep culinary rules
      setTimeout(() => {
        let reply = '';
        const lower = textToSend.toLowerCase();

        if (lower.includes('psyllium')) {
          reply = `💡 **Substituição do Psyllium em Pães Sem Glúten:**
- O psyllium fornece elasticidade e retém água.
- **Melhor alternativa 1: Gel de Linhaça Dourada ou Chia:** Ferva 2 colheres de sopa de sementes em 150ml de água por 5 minutos, coe ainda morno. O gel resultante imita bem a textura.
- **Alternativa 2: Goma Xantana + Fécula de Batata:** Aumente a goma xantana em 1/2 colher de chá e utilize ovos extras para conferir estrutura.`;
        } else if (lower.includes('frango') && (lower.includes('batata') || lower.includes('airfryer'))) {
          reply = `🍗 **Sugestão de Almoço Prático na Air Fryer:**
**Frango Dourado com Batata Rústica ao Alecrim:**
1. Corte peito ou sobrecoxa em cubos médios. Corte as batatas com casca em gomos.
2. Tempere ambos com azeite, alho amassado, páprica defumada, alecrim fresco e sal grosso.
3. Coloque tudo junto na cesta da Airfryer a **190°C por 20 minutos**.
4. Chacoalhe a cesta aos 10 minutos. A gordura natural do frango doura a batata e ambos ficam incrivelmente crocantes!`;
        } else if (lower.includes('salmão') || lower.includes('peixe')) {
          reply = `🐟 **Segredo do Salmão Perfeito na Air Fryer:**
- Temperatura ideal: **180°C por 12 minutos** (filé de aprox. 200g).
- Coloque sempre a **pele virada para baixo** na cesta.
- Tempere com azeite, limão e crosta de castanhas ou ervas. Não vire o filé para a crosta não desmanchar! Fica suculento e rosado por dentro.`;
        } else if (lower.includes('salada') || lower.includes('pote')) {
          reply = `🥗 **Sugestão de Salada no Pote Durável:**
**Salada Mediterrânea Proteica:**
- **Camada 1 (Fundo):** 3 colheres de azeite + suco de limão siciliano + orégano.
- **Camada 2:** Pepino em cubos + tomatinhos cereja inteiros + cenoura ralada.
- **Camada 3:** Quinoa cozida fria ou grão-de-bico.
- **Camada 4:** Frango grelhado ou queijo branco em cubos.
- **Camada 5 (Topo):** Folhas de rúcula 100% secas + sementes de abóbora.
- *Validade:* 4 a 5 dias fechado na geladeira sem murchar!`;
        } else if (lower.includes('bolo') || lower.includes('doce')) {
          reply = `🎂 **Segredo para o Bolo Sem Glúten Não Solar:**
1. **Pese os ingredientes:** Excesso de umidade (como cenouras muito grandes) é o vilão número 1.
2. **Use clara em neve:** Bater as claras separadas confere ar mecânico à massa.
3. **Adicione gordura boa:** Farinha de amêndoas ou óleo de coco garantem que o miolo fique úmido por 3 dias sem esfarelar.`;
        } else {
          reply = `🧑‍🍳 **Dica Personalizada do Chef:**
Para a sua ideia com "${textToSend}":
- Na **Air Fryer**: Mantenha sempre a temperatura entre 180°C e 200°C e pré-aqueça 3 minutos. Sacudir o cesto na metade do tempo é o segredo da cor uniforme.
- Em receitas **Sem Glúten**: Combine farinha de arroz (base) com polvilho doce (maciez) e 1 colher de café de goma xantana (ligadura).
- Precisa de uma receita completa? Basta clicar nas nossas seções acima ou me pedir proporções exatas!`;
        }

        setMessages(prev => [...prev, { sender: 'chef', text: reply }]);
        setLoading(false);
      }, 700);
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-6 px-4">
      <div className="bg-white rounded-3xl border border-[#EBE3D3] shadow-md overflow-hidden flex flex-col h-[75vh]">
        {/* Header */}
        <div className="p-4 bg-[#0A2A1D] text-white flex items-center justify-between border-b border-[#0D3827]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#F5BA31] text-[#0A2A1D] flex items-center justify-center font-bold">
              <ChefHat className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <h3 className="font-serif text-base font-bold text-white">Chef Virtual & Consultoria</h3>
              <p className="text-[11px] text-stone-300">Tire dúvidas sobre Air Fryer, substituição de farinhas e combinações</p>
            </div>
          </div>
        </div>

        {/* Chat message history */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FAF8F3]">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'chef' && (
                <div className="w-8 h-8 rounded-full bg-[#0A2A1D] text-[#F5BA31] flex items-center justify-center shrink-0 text-xs font-bold shadow-2xs border border-[#F5BA31]/40">
                  <Bot className="w-4 h-4 stroke-[2.5]" />
                </div>
              )}
              <div
                className={`max-w-[85%] sm:max-w-[75%] p-4 rounded-3xl text-xs sm:text-sm leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-[#F5BA31] text-[#0A2A1D] font-bold rounded-tr-xs shadow-xs'
                    : 'bg-white text-[#0A2A1D] border border-[#EBE3D3] shadow-2xs rounded-tl-xs whitespace-pre-line'
                }`}
              >
                {m.text}
              </div>
              {m.sender === 'user' && (
                <div className="w-8 h-8 rounded-full bg-[#0A2A1D] text-white flex items-center justify-center shrink-0 text-xs shadow-2xs">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-stone-500 text-xs pl-10 font-medium">
              <Sparkles className="w-4 h-4 animate-spin text-[#F5BA31]" />
              <span>O Chef está elaborando sua resposta...</span>
            </div>
          )}
        </div>

        {/* Quick Prompts */}
        <div className="px-4 py-2 border-t border-[#EBE3D3] bg-white flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          <Lightbulb className="w-3.5 h-3.5 text-[#F5BA31] shrink-0 ml-1" />
          {quickPrompts.map((qp, i) => (
            <button
              key={i}
              onClick={() => handleSend(qp)}
              className="px-3 py-1 bg-[#FAF8F3] hover:bg-stone-100 border border-[#E0D8C6] text-[#0A2A1D] rounded-full text-[11px] font-semibold whitespace-nowrap cursor-pointer transition-colors shrink-0"
            >
              {qp}
            </button>
          ))}
        </div>

        {/* Chat input box */}
        <div className="p-3 border-t border-[#EBE3D3] bg-white flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Digite sua dúvida de culinária, ingredientes ou substituição..."
            className="flex-1 px-4 py-3 bg-[#FAF8F3] border border-[#E0D8C6] focus:border-[#0A2A1D] rounded-2xl text-xs sm:text-sm text-[#0A2A1D] placeholder:text-stone-400 focus:outline-none transition-all"
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || loading}
            className="px-5 py-3 bg-[#0A2A1D] hover:bg-[#072016] disabled:opacity-40 disabled:cursor-not-allowed text-[#F5BA31] font-black rounded-2xl text-xs transition-colors cursor-pointer shrink-0 flex items-center gap-1.5 shadow-xs"
          >
            <span>Enviar</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
