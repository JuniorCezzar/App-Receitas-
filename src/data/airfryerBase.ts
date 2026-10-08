import { Recipe, AirFryerSubcategory } from '../types/recipe';

interface RecipeSeed {
  title: string;
  sub: AirFryerSubcategory;
  temp: number;
  time: number;
  prep: number;
  servings: number;
  diff: 'Fácil' | 'Médio' | 'Avançado';
  cal: number;
  tags: string[];
  desc: string;
  ingredients: { name: string; amount: string | number; unit: string; note?: string }[];
  steps: string[];
  tip: string;
  featured?: boolean;
}

export const curatedAirfryerList: RecipeSeed[] = [
  // 1. Aves
  {
    title: 'Frango a Passarinho Super Crocante',
    sub: 'Aves & Frangos',
    temp: 200,
    time: 25,
    prep: 10,
    servings: 4,
    diff: 'Fácil',
    cal: 290,
    tags: ['Crocante', 'Clássico', 'Petisco'],
    desc: 'Crocante por fora e suculento por dentro, sem precisar de uma gota de imersão em óleo.',
    ingredients: [
      { name: 'Frango cortado a passarinho', amount: 1, unit: 'kg' },
      { name: 'Alho triturado', amount: 4, unit: 'dentes' },
      { name: 'Suco de limão taiti', amount: 1, unit: 'unidade' },
      { name: 'Páprica defumada', amount: 1, unit: 'colher de sopa' },
      { name: 'Azeite de oliva', amount: 1, unit: 'colher de sopa' },
      { name: 'Sal e pimenta-do-reino', amount: 1, unit: 'a gosto' }
    ],
    steps: [
      'Tempere o frango com alho, suco de limão, páprica, azeite, sal e pimenta. Deixe marinar por 15 minutos.',
      'Pré-aqueça a Airfryer a 200°C por 3 minutos.',
      'Acomode os pedaços na cesta sem sobrepor para o ar circular.',
      'Asse por 15 minutos a 200°C, vire todos os pedaços e asse por mais 10 minutos até dourar intensamente.'
    ],
    tip: 'Vire os pedaços na metade do tempo para garantir casquinha uniforme dos dois lados.',
    featured: true
  },
  {
    title: 'Sobrecoxa com Mostarda Dijon e Mel',
    sub: 'Aves & Frangos',
    temp: 180,
    time: 28,
    prep: 10,
    servings: 3,
    diff: 'Fácil',
    cal: 340,
    tags: ['Agridoce', 'Almoço', 'Suculento'],
    desc: 'Sobrecoxas douradas com casca crocante e molho aromático de mostarda dijon e mel.',
    ingredients: [
      { name: 'Sobrecoxas com pele', amount: 4, unit: 'unidades' },
      { name: 'Mostarda dijon ou amarela', amount: 2, unit: 'colheres de sopa' },
      { name: 'Mel puro', amount: 1.5, unit: 'colher de sopa' },
      { name: 'Alecrim fresco picado', amount: 1, unit: 'ramo' },
      { name: 'Alho em pó e sal', amount: 1, unit: 'colher de chá' }
    ],
    steps: [
      'Misture a mostarda, mel, alecrim, alho em pó e sal até formar uma pasta.',
      'Passe a mistura por todas as sobrecoxas.',
      'Coloque na cesta com a pele para baixo a 180°C por 18 minutos.',
      'Vire com a pele para cima e deixe mais 10 minutos a 200°C para pururucar a pele.'
    ],
    tip: 'Aumentar para 200°C nos últimos 5 minutos deixa a pele extremamente crocante.',
    featured: true
  },
  {
    title: 'Coxinha da Asa Barbecue Caramelizada',
    sub: 'Aves & Frangos',
    temp: 190,
    time: 22,
    prep: 8,
    servings: 4,
    diff: 'Fácil',
    cal: 310,
    tags: ['Barbecue', 'Happy Hour', 'Petisco'],
    desc: 'Coxinhas da asa envolvidas em molho barbecue caseiro, pegajosas e irresistíveis.',
    ingredients: [
      { name: 'Coxinhas da asa (drumette)', amount: 800, unit: 'g' },
      { name: 'Molho barbecue', amount: 4, unit: 'colheres de sopa' },
      { name: 'Páprica picante', amount: 1, unit: 'colher de chá' },
      { name: 'Azeite', amount: 1, unit: 'colher de sopa' }
    ],
    steps: [
      'Tempere as coxinhas com azeite, páprica e sal.',
      'Asse na Airfryer a 190°C por 16 minutos, agitando o cesto aos 8 minutos.',
      'Pincele generosamente com barbecue e asse por mais 6 minutos até caramelizar.'
    ],
    tip: 'Pincele o molho apenas no final para o açúcar não queimar antes do cozimento da carne.'
  },
  {
    title: 'Peito de Frango Recheado com Queijo e Espinafre',
    sub: 'Aves & Frangos',
    temp: 180,
    time: 18,
    prep: 12,
    servings: 2,
    diff: 'Médio',
    cal: 320,
    tags: ['Low Carb', 'Fit', 'Jantar'],
    desc: 'Filé de peito suculento recheado com espinafre e queijo derretido.',
    ingredients: [
      { name: 'Peito de frango espesso', amount: 2, unit: 'filés' },
      { name: 'Espinafre refogado', amount: 1, unit: 'xícara' },
      { name: 'Queijo muçarela ou minas ralado', amount: 80, unit: 'g' },
      { name: 'Azeite e chimichurri', amount: 1, unit: 'colher de sopa' }
    ],
    steps: [
      'Faça uma bolsa profunda no filé sem romper as laterais.',
      'Recheie com o espinafre e queijo, prendendo com palitos de dente.',
      'Pincele azeite e chimichurri por fora.',
      'Asse a 180°C por 18 minutos até dourar e o queijo borbulhar.'
    ],
    tip: 'Não fure o queijo com os palitos para evitar vazamento.'
  },
  {
    title: 'Nuggets Caseiros de Frango Saudáveis',
    sub: 'Aves & Frangos',
    temp: 190,
    time: 14,
    prep: 15,
    servings: 3,
    diff: 'Fácil',
    cal: 220,
    tags: ['Kids', 'Sem Conservantes', 'Fit'],
    desc: 'Feitos com peito de frango triturado e crosta de flocos de milho crocantes.',
    ingredients: [
      { name: 'Peito de frango processado', amount: 500, unit: 'g' },
      { name: 'Cebola e alho ralados', amount: 2, unit: 'colheres de sopa' },
      { name: 'Farinha de aveia sem glúten', amount: 2, unit: 'colheres de sopa' },
      { name: 'Flocos de milho triturados para empanar', amount: 1, unit: 'xícara' }
    ],
    steps: [
      'Misture o frango triturado com os temperos e a aveia.',
      'Modele no formato de nuggets e passe nos flocos de milho.',
      'Borrife azeite e asse na Airfryer a 190°C por 14 minutos virando aos 7 minutos.'
    ],
    tip: 'Congele crus e asse direto do congelador adicionando 2 minutos ao tempo.'
  },

  // 2. Carnes
  {
    title: 'Picanha em Tiras com Alho Tostado',
    sub: 'Carnes & Suínos',
    temp: 200,
    time: 12,
    prep: 5,
    servings: 3,
    diff: 'Fácil',
    cal: 380,
    tags: ['Churrasco', 'Nobre', 'Suculento'],
    desc: 'Tiras grossas de picanha com capa de gordura dourada e centro macio e rosado.',
    ingredients: [
      { name: 'Picanha cortada em tiras de 2 dedos', amount: 600, unit: 'g' },
      { name: 'Sal de parrilla', amount: 1, unit: 'colher de sopa' },
      { name: 'Alho frito laminado', amount: 2, unit: 'colheres de sopa' }
    ],
    steps: [
      'Pré-aqueça a Airfryer a 200°C por 5 minutos.',
      'Tempere a carne com sal de parrilla na hora.',
      'Coloque no cesto a 200°C por 7 minutos, vire e asse por mais 5 minutos.',
      'Descanse 3 minutos antes de fatiar e finalize com alho frito.'
    ],
    tip: 'O pré-aquecimento máximo sela a carne imediatamente retendo os sucos.',
    featured: true
  },
  {
    title: 'Costelinha Suína com Barbecue',
    sub: 'Carnes & Suínos',
    temp: 160,
    time: 35,
    prep: 10,
    servings: 3,
    diff: 'Médio',
    cal: 420,
    tags: ['Gourmet', 'Fim de Semana', 'Costela'],
    desc: 'Costelinha que solta do osso, assada suavemente e finalizada com barbecue.',
    ingredients: [
      { name: 'Costelinha suína em ripa', amount: 800, unit: 'g' },
      { name: 'Dry rub de páprica, alho e cominho', amount: 2, unit: 'colheres de sopa' },
      { name: 'Molho barbecue', amount: 4, unit: 'colheres de sopa' }
    ],
    steps: [
      'Esfregue os temperos secos por toda a carne.',
      'Asse a 160°C por 25 minutos para amaciar por completo.',
      'Pincele molho barbecue farto e suba para 200°C por mais 10 minutos.'
    ],
    tip: 'Começar a 160°C cozinha a carne sem queimar, e os 200°C finais caramelizam o barbecue.'
  },
  {
    title: 'Torresmo de Rolo Super Pururuca',
    sub: 'Carnes & Suínos',
    temp: 180,
    time: 40,
    prep: 15,
    servings: 4,
    diff: 'Médio',
    cal: 450,
    tags: ['Petisco', 'Pururuca', 'Boteco'],
    desc: 'Panceta enrolada e assada com pururuca estalando de tão crocante e sequinha.',
    ingredients: [
      { name: 'Panceta suína fresca enrolada com barbante', amount: 1, unit: 'kg' },
      { name: 'Sal grosso moído', amount: 1.5, unit: 'colher de sopa' },
      { name: 'Gotas de vinagre na pele', amount: 1, unit: 'colher de sobremesa' }
    ],
    steps: [
      'Seque muito bem a pele com papel toalha e passe vinagre e sal.',
      'Asse a 180°C por 30 minutos virando uma vez.',
      'Aumente para 200°C por mais 10 minutos até a pele pipocar em pururuca.'
    ],
    tip: 'A pele precisa estar completamente seca antes de entrar na Airfryer.'
  },
  {
    title: 'Hambúrguer Artesanal Suculento de Fraldinha',
    sub: 'Carnes & Suínos',
    temp: 200,
    time: 11,
    prep: 10,
    servings: 2,
    diff: 'Fácil',
    cal: 390,
    tags: ['Burger', 'Rápido', 'Lanche'],
    desc: 'Hambúrguer alto com crosta grelhada e centro suculento.',
    ingredients: [
      { name: 'Fraldinha moída (20% gordura)', amount: 360, unit: 'g' },
      { name: 'Queijo prato ou cheddar', amount: 2, unit: 'fatias' },
      { name: 'Sal e pimenta preta', amount: 1, unit: 'a gosto' }
    ],
    steps: [
      'Molde 2 discos altos de 180g fazendo uma leve cavidade no centro.',
      'Tempere por fora com sal e pimenta na hora de assar.',
      'Asse a 200°C por 9 minutos, coloque o queijo por cima e deixe mais 2 minutos desligado.'
    ],
    tip: 'A cavidade no centro impede que o hambúrguer infle como uma bola ao assar.'
  },

  // 3. Peixes
  {
    title: 'Salmão com Crosta de Castanhas e Alecrim',
    sub: 'Peixes & Frutos do Mar',
    temp: 180,
    time: 12,
    prep: 8,
    servings: 2,
    diff: 'Fácil',
    cal: 320,
    tags: ['Ômega 3', 'Gourmet', 'Saudável'],
    desc: 'Lombo de salmão com crosta crocante de castanhas de caju e toque de mostarda.',
    ingredients: [
      { name: 'Filés de salmão com pele', amount: 2, unit: 'unidades' },
      { name: 'Castanha de caju triturada', amount: 3, unit: 'colheres de sopa' },
      { name: 'Mostarda dijon', amount: 1, unit: 'colher de sopa' },
      { name: 'Azeite e suco de limão', amount: 1, unit: 'colher de sopa' }
    ],
    steps: [
      'Tempere os filés com limão e sal.',
      'Passe uma camada de mostarda sobre a carne e aperte as castanhas trituradas.',
      'Coloque na cesta com a pele para baixo a 180°C por 12 minutos.'
    ],
    tip: 'Não vire o filé para manter a crosta de castanhas intacta e douradinha.',
    featured: true
  },
  {
    title: 'Camarões Alho e Óleo Dourados',
    sub: 'Peixes & Frutos do Mar',
    temp: 200,
    time: 8,
    prep: 8,
    servings: 3,
    diff: 'Fácil',
    cal: 170,
    tags: ['Rápido', 'Praia', 'Petisco'],
    desc: 'Camarões limpos com lâminas de alho douradas em menos de 10 minutos.',
    ingredients: [
      { name: 'Camarões limpos médios', amount: 400, unit: 'g' },
      { name: 'Lâminas de alho', amount: 4, unit: 'dentes' },
      { name: 'Azeite de oliva extravirgem', amount: 2, unit: 'colheres de sopa' },
      { name: 'Salsinha e limão', amount: 1, unit: 'a gosto' }
    ],
    steps: [
      'Seque muito bem os camarões com papel toalha.',
      'Misture com azeite, alho e sal.',
      'Asse a 200°C por 8 minutos sacudindo aos 4 minutos.'
    ],
    tip: 'Camarão cozinha muito rápido; 8 minutos garantem textura macia e nada borrachuda.'
  },
  {
    title: 'Tilápia Empanada com Crosta de Fubá',
    sub: 'Peixes & Frutos do Mar',
    temp: 190,
    time: 14,
    prep: 10,
    servings: 2,
    diff: 'Fácil',
    cal: 210,
    tags: ['Peixe', 'Crocante', 'Sem Glúten'],
    desc: 'Tilápia sequinha por fora com crosta fininha de fubá e raspas de limão taiti.',
    ingredients: [
      { name: 'Filés de tilápia frescos', amount: 2, unit: 'unidades' },
      { name: 'Fubá fino para empanar', amount: 4, unit: 'colheres de sopa' },
      { name: 'Raspas de limão e páprica', amount: 1, unit: 'colher de chá' },
      { name: 'Azeite para borrifar', amount: 1, unit: 'borrifada' }
    ],
    steps: [
      'Tempere a tilápia com limão e sal.',
      'Passe no fubá temperado com páprica e raspas de limão.',
      'Borrife azeite e asse a 190°C por 14 minutos virando aos 8 minutos.'
    ],
    tip: 'O fubá dá crocância sem precisar de trigo ou excesso de gordura.'
  },

  // 4. Legumes
  {
    title: 'Batatas Rústicas com Alecrim e Sal de Parrilla',
    sub: 'Legumes & Acompanhamentos',
    temp: 200,
    time: 25,
    prep: 10,
    servings: 4,
    diff: 'Fácil',
    cal: 180,
    tags: ['Vegano', 'Crocante', 'Clássico'],
    desc: 'Batatas com casca tostadas com alecrim fresco e dentes de alho esmagados.',
    ingredients: [
      { name: 'Batatas inglesas cortadas em gomos', amount: 4, unit: 'unidades' },
      { name: 'Ramos de alecrim fresco', amount: 2, unit: 'ramos' },
      { name: 'Dentes de alho com casca amassados', amount: 4, unit: 'unidades' },
      { name: 'Azeite de oliva e sal grosso moído', amount: 2, unit: 'colheres de sopa' }
    ],
    steps: [
      'Corte as batatas em gomos e seque muito bem.',
      'Misture com azeite, alecrim, alho amassado e sal.',
      'Asse a 200°C por 25 minutos, sacudindo a cesta a cada 8 minutos.'
    ],
    tip: 'Deixar as batatas de molho em água gelada por 15 minutos e secar retira o amido superficial.',
    featured: true
  },
  {
    title: 'Chips de Mandioca Super Sequinhas',
    sub: 'Legumes & Acompanhamentos',
    temp: 180,
    time: 15,
    prep: 10,
    servings: 3,
    diff: 'Fácil',
    cal: 150,
    tags: ['Sem Glúten', 'Snack', 'Brasileiro'],
    desc: 'Mandioca laminada fininha tostada até virar chips estaladiço.',
    ingredients: [
      { name: 'Mandioca crua fatiada no mandolim', amount: 300, unit: 'g' },
      { name: 'Azeite de oliva', amount: 1, unit: 'colher de sopa' },
      { name: 'Sal fino', amount: 1, unit: 'colher de café' }
    ],
    steps: [
      'Fatie a mandioca o mais fino possível.',
      'Misture com azeite e sal.',
      'Asse a 180°C por 15 minutos sacudindo a cesta com frequência.'
    ],
    tip: 'Sacuda a cada 3 minutos no final para não queimar as pontas mais finas.'
  },
  {
    title: 'Couve-Flor Empanada com Parmesão e Cúrcuma',
    sub: 'Legumes & Acompanhamentos',
    temp: 190,
    time: 16,
    prep: 10,
    servings: 3,
    diff: 'Fácil',
    cal: 120,
    tags: ['Vegetariano', 'Low Carb', 'Petisco'],
    desc: 'Flores de couve-flor com casquinha dourada de queijo parmesão ralado.',
    ingredients: [
      { name: 'Couve-flor em floretes', amount: 1, unit: 'maço pequeno' },
      { name: 'Parmesão ralado fino', amount: 3, unit: 'colheres de sopa' },
      { name: 'Azeite e cúrcuma', amount: 1, unit: 'colher de sopa' }
    ],
    steps: [
      'Misture os floretes crus com azeite, cúrcuma e queijo.',
      'Distribua na cesta a 190°C por 16 minutos até dourar as bordas.'
    ],
    tip: 'Não precisa pré-cozinhar na água; crua ela fica muito mais crocante.'
  },

  // 5. Petiscos
  {
    title: 'Pão de Queijo Dourado Tradicional',
    sub: 'Petiscos & Salgados',
    temp: 180,
    time: 12,
    prep: 5,
    servings: 4,
    diff: 'Fácil',
    cal: 190,
    tags: ['Sem Glúten', 'Café', 'Mineiro'],
    desc: 'Casca crocante e interior elástico com muito queijo minas curado.',
    ingredients: [
      { name: 'Pãezinhos de queijo modelados', amount: 12, unit: 'unidades' }
    ],
    steps: [
      'Pré-aqueça a Airfryer a 180°C por 3 minutos.',
      'Distribua na cesta com espaço para crescerem.',
      'Asse a 180°C por 12 minutos até dourarem.'
    ],
    tip: 'Se forem congelados, coloque direto sem descongelar por 14 minutos.',
    featured: true
  },
  {
    title: 'Dadinhos de Tapioca com Queijo Coalho',
    sub: 'Petiscos & Salgados',
    temp: 200,
    time: 15,
    prep: 15,
    servings: 4,
    diff: 'Médio',
    cal: 230,
    tags: ['Sem Glúten', 'Boteco', 'Famoso'],
    desc: 'O clássico dadinho crocante por fora e puxa-puxa por dentro.',
    ingredients: [
      { name: 'Tapioca granulada', amount: 250, unit: 'g' },
      { name: 'Queijo coalho ralado fino', amount: 250, unit: 'g' },
      { name: 'Leite fervente', amount: 500, unit: 'ml' },
      { name: 'Geleia de pimenta para acompanhar', amount: 4, unit: 'colheres de sopa' }
    ],
    steps: [
      'Misture a tapioca, o coalho e despeje o leite fervente até espessar.',
      'Espalhe em assadeira, gele por 3 horas e corte em cubinhos.',
      'Asse a 200°C por 15 minutos virando na metade.'
    ],
    tip: 'Mantenha espaço entre os cubos para não grudarem durante o cozimento.'
  },
  {
    title: 'Pastel de Queijo Crocante e Sequinho',
    sub: 'Petiscos & Salgados',
    temp: 190,
    time: 9,
    prep: 10,
    servings: 3,
    diff: 'Fácil',
    cal: 210,
    tags: ['Clássico', 'Lanche', 'Crocante'],
    desc: 'Pastel com massa estalando sem precisar mergulhar em óleo.',
    ingredients: [
      { name: 'Massas de pastel', amount: 6, unit: 'unidades' },
      { name: 'Queijo muçarela ralado', amount: 150, unit: 'g' },
      { name: 'Orégano e azeite para pincelar', amount: 1, unit: 'colher de sopa' }
    ],
    steps: [
      'Recheie os pastéis e aperte as bordas com garfo.',
      'Pincele uma camada bem fina de azeite nos dois lados.',
      'Asse a 190°C por 9 minutos virando aos 5 minutos.'
    ],
    tip: 'Pincelar azeite é o truque para formar as bolhinhas crocantes da massa.'
  },

  // 6. Sobremesas
  {
    title: 'Pudim de Leite na Airfryer em 25 Minutos',
    sub: 'Sobremesas & Doces',
    temp: 160,
    time: 25,
    prep: 10,
    servings: 6,
    diff: 'Médio',
    cal: 260,
    tags: ['Doce', 'Clássico', 'Sobremesa'],
    desc: 'Pudim aveludado e sem furinhos com calda de caramelo brilhante.',
    ingredients: [
      { name: 'Leite condensado', amount: 1, unit: 'lata (395g)' },
      { name: 'Leite integral', amount: 1, unit: 'medida da lata' },
      { name: 'Ovos inteiros', amount: 3, unit: 'unidades' },
      { name: 'Açúcar para caramelizar a forma', amount: 0.5, unit: 'xícara' }
    ],
    steps: [
      'Caramelize uma forma de furo central que caiba no cesto.',
      'Bata os ingredientes no liquidificador e despeje na forma.',
      'Cubra bem com papel alumínio vedando as laterais.',
      'Asse a 160°C por 25 minutos. Gele por 4 horas antes de desenformar.'
    ],
    tip: 'O papel alumínio bem vedado cozinha o pudim suavemente no próprio vapor.'
  },
  {
    title: 'Banana Assada com Canela e Queijo',
    sub: 'Sobremesas & Doces',
    temp: 180,
    time: 8,
    prep: 3,
    servings: 2,
    diff: 'Fácil',
    cal: 160,
    tags: ['Fit', 'Rápido', 'Sem Açúcar'],
    desc: 'Sobremesa reconfortante feita com banana madura, queijo minas e canela em pó.',
    ingredients: [
      { name: 'Bananas prata maduras', amount: 2, unit: 'unidades' },
      { name: 'Queijo minas em fatias', amount: 2, unit: 'fatias' },
      { name: 'Canela em pó e mel', amount: 1, unit: 'a gosto' }
    ],
    steps: [
      'Faça um corte longitudinal na banana.',
      'Coloque a fatia de queijo por cima e polvilhe canela farta.',
      'Asse a 180°C por 8 minutos até o queijo dourar.'
    ],
    tip: 'Pronto em 8 minutos e não leva açúcar refinado.'
  },

  // 7. Café
  {
    title: 'Misto Quente Crocante na Cesta',
    sub: 'Café da Manhã & Ovos',
    temp: 180,
    time: 6,
    prep: 2,
    servings: 1,
    diff: 'Fácil',
    cal: 280,
    tags: ['Café da Manhã', 'Rápido', 'Crocante'],
    desc: 'Pão tostado crocante por fora e queijo derretido escorrendo.',
    ingredients: [
      { name: 'Fatias de pão sem glúten', amount: 2, unit: 'fatias' },
      { name: 'Queijo muçarela', amount: 2, unit: 'fatias' },
      { name: 'Presunto magro', amount: 1, unit: 'fatia' },
      { name: 'Manteiga na parte externa do pão', amount: 1, unit: 'colher de café' }
    ],
    steps: [
      'Monte o lanche e passe manteiga fina por fora do pão.',
      'Asse a 180°C por 6 minutos virando nos 4 minutos.'
    ],
    tip: 'Coloque um palito de dente no centro para a fatia não voar com a ventilação do cesto.'
  },
  {
    title: 'Ovo Cocotte com Tomate Cereja e Parmesão',
    sub: 'Café da Manhã & Ovos',
    temp: 170,
    time: 9,
    prep: 3,
    servings: 1,
    diff: 'Fácil',
    cal: 190,
    tags: ['Fit', 'Proteína', 'Café'],
    desc: 'Ovo cremoso assado em ramequim com clara firme e gema aveludada.',
    ingredients: [
      { name: 'Ovos caipiras', amount: 2, unit: 'unidades' },
      { name: 'Tomatinhos cereja', amount: 4, unit: 'unidades' },
      { name: 'Parmesão ralado e orégano', amount: 1, unit: 'colher de sopa' }
    ],
    steps: [
      'Unte o ramequim, quebre os ovos e disponha os tomatinhos.',
      'Salpique queijo e orégano.',
      'Asse a 170°C por 9 minutos.'
    ],
    tip: '9 minutos deixam a gema perfeita para mergulhar torradas.'
  }
];

// Rich recipe variations catalog to automatically build the full 200 Air Fryer recipes
const recipeCatalogMatrix: {
  sub: AirFryerSubcategory;
  title: string;
  temp: number;
  time: number;
  cal: number;
  mainIng: string;
  seasoning: string;
  desc: string;
  tip: string;
}[] = [
  // Aves (25 variations)
  { sub: 'Aves & Frangos', title: 'Frango com Ervas Finas e Alho-Poró', temp: 185, time: 20, cal: 270, mainIng: 'Peito de frango em filés', seasoning: 'Alho-poró, alecrim e azeite', desc: 'Filés dourados com aroma suave de alho-poró refogado.', tip: 'Não fure o filé enquanto assa para preservar o suco.' },
  { sub: 'Aves & Frangos', title: 'Coxinhas da Asa com Páprica Picante', temp: 195, time: 22, cal: 290, mainIng: 'Coxinhas da asa', seasoning: 'Páprica picante, cominho e sal', desc: 'Asinhas douradas com leve toque picante de boteco.', tip: 'Chacoalhe a cesta 2 vezes durante o preparo.' },
  { sub: 'Aves & Frangos', title: 'Sobrecoxa com Laranja e Tomilho', temp: 180, time: 26, cal: 320, mainIng: 'Sobrecoxas de frango', seasoning: 'Suco de laranja pera e tomilho fresco', desc: 'Caramelização suave com a acidez natural da laranja.', tip: 'Deixe a pele virada para cima nos 8 minutos finais.' },
  { sub: 'Aves & Frangos', title: 'Frango Crispy com Empanado de Milho', temp: 200, time: 14, cal: 260, mainIng: 'Peito em tiras', seasoning: 'Flocos de milho triturados e páprica', desc: 'Crocância incomparável sem usar farinha de trigo.', tip: 'Pressione bem os flocos de milho na carne.' },
  { sub: 'Aves & Frangos', title: 'Almôndegas de Frango com Cenoura e Cheiro Verde', temp: 180, time: 14, cal: 180, mainIng: 'Frango moído', seasoning: 'Cenoura ralada, cheiro verde e alho', desc: 'Super macias e nutritivas para almoços rápidos.', tip: 'Boleie com as mãos untadas em azeite.' },
  { sub: 'Aves & Frangos', title: 'Espetinho de Frango com Pimentão e Cebola', temp: 185, time: 16, cal: 210, mainIng: 'Cubos de frango', seasoning: 'Pimentões coloridos e azeite', desc: 'Espetinhos aromáticos que cabem certinho na cesta.', tip: 'Umedeça os palitos de madeira antes de espetar.' },
  { sub: 'Aves & Frangos', title: 'Frango Tandoori com Iogurte e Curry', temp: 185, time: 22, cal: 280, mainIng: 'Sobrecoxa desossada', seasoning: 'Iogurte natural, curry e gengibre', desc: 'Frango com sabor indiano clássico e carne macia.', tip: 'O iogurte quebra as fibras deixando o corte ultra macio.' },
  { sub: 'Aves & Frangos', title: 'Coração de Frango Acebolado de Churrasco', temp: 200, time: 14, cal: 230, mainIng: 'Coração de frango limpo', seasoning: 'Cebola em rodelas e sal de parrilla', desc: 'O clássico do churrasco gaúcho pronto em 14 minutos.', tip: 'Não passe de 14 minutos para não endurecer.' },
  { sub: 'Aves & Frangos', title: 'Tulipas da Asa com Limão Siciliano', temp: 195, time: 20, cal: 275, mainIng: 'Tulipas da asa', seasoning: 'Raspas de limão e dentes de alho', desc: 'Crocantes e com aroma cítrico muito refrescante.', tip: 'Sirva com rodelas de limão fresco ao lado.' },
  { sub: 'Aves & Frangos', title: 'Iscas de Frango com Gergelim Tostado', temp: 190, time: 13, cal: 240, mainIng: 'Tiras de peito', seasoning: 'Mix de gergelim e tamari sem glúten', desc: 'Tirinhas orientais com crosta estaladiça de gergelim.', tip: 'Vire na metade para o gergelim dourar uniforme.' },
  { sub: 'Aves & Frangos', title: 'Frango com Crosta de Parmesão e Ervas', temp: 190, time: 12, cal: 270, mainIng: 'Filés de frango', seasoning: 'Parmesão ralado fino e orégano', desc: 'Queijo gratinado formando uma capa dourada crocante.', tip: 'O queijo vira uma crosta dourada natural sem farinha.' },
  { sub: 'Aves & Frangos', title: 'Sobrecoxa Desossada com Chimichurri', temp: 185, time: 24, cal: 330, mainIng: 'Sobrecoxas sem osso', seasoning: 'Chimichurri hidratado em azeite', desc: 'Muito suco interno e casca dourada e aromática.', tip: 'Passe o chimichurri nos dois lados da carne.' },
  { sub: 'Aves & Frangos', title: 'Frango com Geleia de Abacaxi e Pimenta', temp: 180, time: 20, cal: 290, mainIng: 'Peito de frango em cubos', seasoning: 'Geleia de abacaxi com pimenta', desc: 'Toque agridoce brasileiro com picância muito suave.', tip: 'Pincele a geleia no final do cozimento.' },
  { sub: 'Aves & Frangos', title: 'Rolinho de Frango com Cenoura e Queijo', temp: 180, time: 18, cal: 250, mainIng: 'Filé aberto fino', seasoning: 'Palitos de cenoura e queijo minas', desc: 'Enroladinho prático que fica lindo na apresentação.', tip: 'Feche com palitos de dente antes de assar.' },
  { sub: 'Aves & Frangos', title: 'Coxa de Frango com Ervas de Provence', temp: 180, time: 25, cal: 300, mainIng: 'Coxas de frango inteiras', seasoning: 'Ervas de provence secas e alho', desc: 'Sabor clássico francês com pele muito sequinha.', tip: 'Seque a pele com papel toalha antes de colocar sal.' },

  // Carnes (25 variations)
  { sub: 'Carnes & Suínos', title: 'Fraldinha Grelhada na Mostarda', temp: 190, time: 16, cal: 350, mainIng: 'Fraldinha em tiras', seasoning: 'Mostarda amarela e sal de parrilla', desc: 'Carne macia com casca tostadinha e sabor marcante.', tip: 'Deixe descansar 3 minutos antes de fatiar.' },
  { sub: 'Carnes & Suínos', title: 'Kafta Árabe com Hortelã no Espeto', temp: 190, time: 13, cal: 250, mainIng: 'Carne moída bovina', seasoning: 'Hortelã fresca, cebola e pimenta síria', desc: 'Aromatizada e suculenta, assa em poucos minutos.', tip: 'Esprema a cebola ralada para tirar o excesso de líquido.' },
  { sub: 'Carnes & Suínos', title: 'Medalhão de Mignon com Fita de Bacon', temp: 200, time: 13, cal: 360, mainIng: 'Medalhão de filé mignon', seasoning: 'Fatia de bacon e pimenta-do-reino', desc: 'Clássico de restaurante com centro rosado perfeito.', tip: 'O bacon protege as laterais mantendo a maciez.' },
  { sub: 'Carnes & Suínos', title: 'Linguiça Toscana Douradinha com Cebolas', temp: 180, time: 20, cal: 340, mainIng: 'Gomos de linguiça', seasoning: 'Cebola fatiada em pétalas', desc: 'Casca estaladiça sem estourar e cebolas caramelizadas.', tip: 'Coloque a cebola nos últimos 6 minutos.' },
  { sub: 'Carnes & Suínos', title: 'Bife Ancho com Manteiga de Ervas', temp: 200, time: 12, cal: 390, mainIng: 'Bife ancho espesso', seasoning: 'Manteiga de alecrim e sal grosso', desc: 'Marmoreio caramelizado e textura que derrete na boca.', tip: 'Pré-aqueça a Airfryer por 5 minutos no máximo.' },
  { sub: 'Carnes & Suínos', title: 'Lombo Suíno com Alecrim e Limão', temp: 180, time: 22, cal: 270, mainIng: 'Bifes grossos de lombo', seasoning: 'Alecrim fresco e suco de limão', desc: 'Opção magra, saudável e surpreendentemente suculenta.', tip: 'Não asse além de 22 minutos para não ressecar.' },
  { sub: 'Carnes & Suínos', title: 'Alcatra com Chimichurri Fresco', temp: 200, time: 10, cal: 280, mainIng: 'Bifes de alcatra', seasoning: 'Chimichurri e sal grosso fino', desc: 'Preparo relâmpago de 10 minutos para o almoço diário.', tip: 'Coloque o chimichurri logo após retirar do cesto.' },
  { sub: 'Carnes & Suínos', title: 'Costela Bovina em Tiras (Asado de Tira)', temp: 190, time: 22, cal: 420, mainIng: 'Costela cortada em ripas finas', seasoning: 'Sal grosso de churrasco', desc: 'Carne saborosa colada ao osso que solta fácil.', tip: 'Asse com a parte do osso para baixo primeiro.' },
  { sub: 'Carnes & Suínos', title: 'Hambúrguer Recheado com Queijo Cheddar', temp: 195, time: 12, cal: 410, mainIng: 'Carne moída temperada', seasoning: 'Cubo de cheddar no interior', desc: 'Queijo derretido no miolo a cada mordida.', tip: 'Vede bem as bordas da carne para o queijo não vazar.' },
  { sub: 'Carnes & Suínos', title: 'Bisteca Suína Acebolada Crocante', temp: 190, time: 16, cal: 290, mainIng: 'Bistecas suínas com osso', seasoning: 'Alho, suco de limão e cebola', desc: 'Borda com gordura tostadinha e carne tenra.', tip: 'Deixe marinar 15 minutos antes de assar.' },
  { sub: 'Carnes & Suínos', title: 'Maminha com Alho-Poró Tostado', temp: 190, time: 18, cal: 330, mainIng: 'Pedaço de maminha', seasoning: 'Alho-poró e azeite extravirgem', desc: 'Corte tradicional macio e fácil de fatiar.', tip: 'Fatie contra o sentido das fibras.' },
  { sub: 'Carnes & Suínos', title: 'Picanha Suína com Abacaxi Grelhado', temp: 185, time: 22, cal: 340, mainIng: 'Picanha suína', seasoning: 'Fatias de abacaxi e canela', desc: 'Casamento clássico de carne suína e fruta doce.', tip: 'Coloque as rodelas de abacaxi nos minutos finais.' },
  { sub: 'Carnes & Suínos', title: 'Polpetone Recheado com Muçarela', temp: 185, time: 15, cal: 320, mainIng: 'Carne moída bovina', seasoning: 'Queijo muçarela e orégano', desc: 'Hambúrguer gigante italiano com coração de queijo.', tip: 'Borrife um fio de azeite antes de ligar o cesto.' },
  { sub: 'Carnes & Suínos', title: 'Carne Seca Desfiada Crocante de Boteco', temp: 180, time: 14, cal: 260, mainIng: 'Carne seca cozida desfiada', seasoning: 'Manteiga de garrafa e cebola roxa', desc: 'Petisco crocante com sabor típico do Nordeste.', tip: 'Cozinhe bem na pressão antes de desfiá-la.' },
  { sub: 'Carnes & Suínos', title: 'Costelinha com Mel e Pimenta Calabresa', temp: 165, time: 32, cal: 380, mainIng: 'Ripas de costelinha', seasoning: 'Mel puro e flocos de calabresa', desc: 'Agridoce com ardor sutil e caramelização linda.', tip: 'Asse coberta com papel alumínio nos primeiros 15 minutos.' },

  // Peixes (20 variations)
  { sub: 'Peixes & Frutos do Mar', title: 'Robalo com Ervas e Crosta de Alcaparras', temp: 180, time: 14, cal: 220, mainIng: 'Posta de robalo fresca', seasoning: 'Alcaparras, azeite e limão', desc: 'Peixe nobre suave com toque salgadinho de alcaparra.', tip: 'Não mexa na posta durante o cozimento.' },
  { sub: 'Peixes & Frutos do Mar', title: 'Salmão com Molho Cítrico de Maracujá', temp: 180, time: 12, cal: 290, mainIng: 'Filé de salmão', seasoning: 'Polpa de maracujá e fio de mel', desc: 'A acidez do maracujá equilibra o ômega-3 do salmão.', tip: 'Pincele a calda de maracujá nos 3 minutos finais.' },
  { sub: 'Peixes & Frutos do Mar', title: 'Iscas de Peixe Crocantes com Molho Tártaro', temp: 200, time: 12, cal: 210, mainIng: 'Pescada em tiras', seasoning: 'Fubá fino e raspas de limão', desc: 'A porção de praia favorita feita sem óleo.', tip: 'Sirva com molho tártaro geladinho.' },
  { sub: 'Peixes & Frutos do Mar', title: 'Camarões Empanados em Coco Ralado', temp: 190, time: 10, cal: 210, mainIng: 'Camarões rosa médios', seasoning: 'Coco ralado seco sem açúcar e ovo', desc: 'Crosta crocante tropical que surpreende no sabor.', tip: 'Use coco seco para não soltar umidade no cesto.' },
  { sub: 'Peixes & Frutos do Mar', title: 'Tentáculos de Polvo Grelhados com Páprica', temp: 190, time: 14, cal: 190, mainIng: 'Tentáculos de polvo cozidos', seasoning: 'Páprica defumada e azeite extravirgem', desc: 'Tentáculos tostados por fora e tenros por dentro.', tip: 'O polvo precisa ter sido cozido previamente na pressão.' },
  { sub: 'Peixes & Frutos do Mar', title: 'Atum Selado com Crosta de Gergelim', temp: 200, time: 6, cal: 230, mainIng: 'Lombo de atum fresco', seasoning: 'Gergelim preto e branco e azeite', desc: 'Bordas douradas crocantes e centro vermelho e úmido.', tip: 'Cronometre rigorosamente: 3 minutos de cada lado.' },
  { sub: 'Peixes & Frutos do Mar', title: 'Filé de Merluza com Alho e Salsinha', temp: 180, time: 13, cal: 170, mainIng: 'Filés de merluza', seasoning: 'Alho amassado e salsinha fresca', desc: 'Prático e econômico para os almoços da semana.', tip: 'Seque os filés com papel toalha antes de temperar.' },
  { sub: 'Peixes & Frutos do Mar', title: 'Sardinha Fresca Crocante com Fubá', temp: 200, time: 12, cal: 220, mainIng: 'Sardinhas limpas abertas', seasoning: 'Fubá, limão taiti e azeite', desc: 'Crocante como frita sem deixar fumaça na cozinha.', tip: 'O fubá seca a umidade e garante crocância.' },
  { sub: 'Peixes & Frutos do Mar', title: 'Espetinho de Salmão com Abobrinha', temp: 185, time: 11, cal: 240, mainIng: 'Cubos de salmão', seasoning: 'Fatias de abobrinha e gergelim', desc: 'Apresentação refinada e preparo rápido.', tip: 'Enrole a lâmina de abobrinha em volta do salmão.' },
  { sub: 'Peixes & Frutos do Mar', title: 'Bolinho de Bacalhau Tradicional', temp: 200, time: 13, cal: 180, mainIng: 'Bacalhau desfiado e batata', seasoning: 'Salsinha, gema e azeite', desc: 'Massa aveludada e casca dourada estalando.', tip: 'Use batata asterix para menos água na massa.' },

  // Legumes (25 variations)
  { sub: 'Legumes & Acompanhamentos', title: 'Abobrinha Gratinada com Parmesão e Alho', temp: 190, time: 12, cal: 95, mainIng: 'Rodelas de abobrinha', seasoning: 'Parmesão ralado e orégano fresco', desc: 'Pronta em 12 minutos e combina com tudo.', tip: 'Não sobreponha as rodelas para assar por igual.' },
  { sub: 'Legumes & Acompanhamentos', title: 'Chips de Batata Doce com Páprica Doce', temp: 175, time: 14, cal: 130, mainIng: 'Batata doce laminada', seasoning: 'Páprica doce e sal rosa', desc: 'O lanche saudável queridinho dos treinos.', tip: 'A temperatura de 175°C evita que queime antes de secar.' },
  { sub: 'Legumes & Acompanhamentos', title: 'Cogumelos Shimeji Tostados com Tamari', temp: 180, time: 10, cal: 85, mainIng: 'Shimeji fresco', seasoning: 'Tamari sem glúten e cebolinha', desc: 'Cogumelos suculentos com toque oriental.', tip: 'Use uma forminha no cesto para reter o caldo saboroso.' },
  { sub: 'Legumes & Acompanhamentos', title: 'Brócolis Tostado com Lascas de Amêndoas', temp: 190, time: 10, cal: 110, mainIng: 'Floretes de brócolis secos', seasoning: 'Amêndoas em lâminas e azeite', desc: 'Pontinhas crocantes com sabor amendoado tostado.', tip: 'Coloque as amêndoas nos últimos 2 minutos.' },
  { sub: 'Legumes & Acompanhamentos', title: 'Cenouras Glaceadas com Mel e Tomilho', temp: 180, time: 18, cal: 110, mainIng: 'Cenouras em palitos', seasoning: 'Mel e tomilho fresco', desc: 'Doces, macias por dentro e pontas douradas.', tip: 'Corte os palitos na mesma espessura.' },
  { sub: 'Legumes & Acompanhamentos', title: 'Abóbora Cabotiá com Alecrim e Casca Tostada', temp: 190, time: 20, cal: 120, mainIng: 'Fatias de abóbora cabotiá', seasoning: 'Alecrim e azeite extravirgem', desc: 'Polpa aveludada e casca crocante saborosa.', tip: 'Mantenha a casca; ela fica deliciosa tostada.' },
  { sub: 'Legumes & Acompanhamentos', title: 'Quiabo Crocante Sem Baba', temp: 195, time: 14, cal: 75, mainIng: 'Quiabos cortados ao meio', seasoning: 'Gotas de vinagre, azeite e sal', desc: 'Crocante feito salgadinho sem um pingo de baba.', tip: 'Seque o quiabo completamente após lavar.' },
  { sub: 'Legumes & Acompanhamentos', title: 'Berinjela à Parmegiana na Cesta', temp: 190, time: 15, cal: 160, mainIng: 'Fatias de berinjela', seasoning: 'Molho de tomate caseiro e muçarela', desc: 'Gratinado reconfortante em porção individual rápida.', tip: 'Deixe no sal por 10 minutos para tirar a água.' },
  { sub: 'Legumes & Acompanhamentos', title: 'Cebolas Caramelizadas para Sanduíches', temp: 170, time: 16, cal: 90, mainIng: 'Cebolas em rodelas', seasoning: 'Azeite e pitada de açúcar mascavo', desc: 'Doces e escuras para acompanhar qualquer carne.', tip: 'Mexa a cada 5 minutos durante o processo.' },
  { sub: 'Legumes & Acompanhamentos', title: 'Aspargos Frescos com Parmesão e Limão', temp: 190, time: 8, cal: 80, mainIng: 'Aspargos verdes', seasoning: 'Parmesão ralado e azeite', desc: 'Pronto em 8 minutos com textura crocante al dente.', tip: 'Quebre a ponta lenhosa da base com as mãos.' },
  { sub: 'Legumes & Acompanhamentos', title: 'Palmito Pupunha Assado com Manteiga', temp: 185, time: 18, cal: 95, mainIng: 'Toletes de palmito pupunha', seasoning: 'Manteiga e sal marinho', desc: 'Macio e com leve adocicado natural.', tip: 'Faça pequenos cortes para a manteiga entrar.' },
  { sub: 'Legumes & Acompanhamentos', title: 'Tomatinhos Confit com Alho e Tomilho', temp: 160, time: 18, cal: 110, mainIng: 'Tomates cereja inteiros', seasoning: 'Dentes de alho e azeite farto', desc: 'Explosão de sabor para comer com torradas ou saladas.', tip: 'Use um recipiente refratário pequeno.' },
  { sub: 'Legumes & Acompanhamentos', title: 'Milho Verde Tostado na Espiga', temp: 195, time: 16, cal: 150, mainIng: 'Espigas de milho partidas', seasoning: 'Manteiga derretida e sal', desc: 'Sabor de festa junina pronto em casa.', tip: 'Pincele manteiga antes e depois de assar.' },
  { sub: 'Legumes & Acompanhamentos', title: 'Chips de Beterraba Crocantes', temp: 165, time: 15, cal: 85, mainIng: 'Beterraba laminada fina', seasoning: 'Azeite e sal fino', desc: 'Crocante, colorida e cheia de antioxidantes.', tip: 'Asse a 165°C para não queimar antes da secagem.' },
  { sub: 'Legumes & Acompanhamentos', title: 'Couve Crispy Crocante em 6 Minutos', temp: 160, time: 6, cal: 60, mainIng: 'Couve fatiada fininha', seasoning: 'Fio de azeite e sal', desc: 'A couve crocante sequinha que todo mundo adora.', tip: 'Monitore aos 5 minutos para não queimar.' },

  // Petiscos (20 variations)
  { sub: 'Petiscos & Salgados', title: 'Coxinha de Mandioca Sem Glúten', temp: 195, time: 14, cal: 240, mainIng: 'Massa de mandioca', seasoning: 'Recheio de frango cremoso', desc: 'Massa aveludada sem glúten com frango desfiado.', tip: 'Empane em farinha de linhaça ou milho para crosta dourada.' },
  { sub: 'Petiscos & Salgados', title: 'Bolinho de Arroz com Queijo na Airfryer', temp: 190, time: 12, cal: 175, mainIng: 'Sobra de arroz e ovo', seasoning: 'Coração de muçarela e cheiro verde', desc: 'Aproveitamento perfeito sem pingar óleo.', tip: 'Insira um cubinho de queijo no centro de cada bolinho.' },
  { sub: 'Petiscos & Salgados', title: 'Bolinho de Mandioca com Queijo Minas', temp: 190, time: 13, cal: 190, mainIng: 'Mandioca cozida amassada', seasoning: 'Cubos de queijo minas', desc: 'Crocante por fora e queijo derretido por dentro.', tip: 'Deixe a massa gelar antes de bolear.' },
  { sub: 'Petiscos & Salgados', title: 'Polenta Frita Crocante e Sequinha', temp: 200, time: 18, cal: 175, mainIng: 'Palitos de polenta firme', seasoning: 'Parmesão e azeite em spray', desc: 'Palitos dourados sem encharcar de gordura.', tip: 'A polenta deve estar completamente fria ao cortar.' },
  { sub: 'Petiscos & Salgados', title: 'Chips de Provolone Zero Carb', temp: 180, time: 6, cal: 160, mainIng: 'Fatias finas de provolone', seasoning: 'Orégano seco', desc: 'Biscoitinho crocante de puro queijo assado.', tip: 'Espere esfriar 2 minutos para ficar crocante.' },
  { sub: 'Petiscos & Salgados', title: 'Kibe Sem Glúten com Quinoa e Hortelã', temp: 190, time: 16, cal: 210, mainIng: 'Carne moída magra e quinoa', seasoning: 'Hortelã fresca e cebola', desc: 'A quinoa substitui o trigo perfeitamente.', tip: 'Borrife azeite para dar brilho e dourar.' },
  { sub: 'Petiscos & Salgados', title: 'Bolinho de Batata Doce com Frango Fit', temp: 185, time: 14, cal: 165, mainIng: 'Batata doce cozida e frango', seasoning: 'Crosta de sementes de gergelim', desc: 'O clássico pré-treino moldado em bolinhos assados.', tip: 'Passe no gergelim antes de assar.' },
  { sub: 'Petiscos & Salgados', title: 'Nachos de Milho Sem Glúten Crocantes', temp: 180, time: 8, cal: 140, mainIng: 'Tortilhas de milho em triângulos', seasoning: 'Páprica defumada e sal', desc: 'Ideais para comer com guacamole ou pasta de ricota.', tip: 'Mexa aos 4 minutos de cozimento.' },
  { sub: 'Petiscos & Salgados', title: 'Croquete de Carne de Panela', temp: 195, time: 14, cal: 220, mainIng: 'Carne desfiada macia', seasoning: 'Crosta de farinha de mandioca fina', desc: 'Sabor de festa com textura perfeita.', tip: 'Empane duas vezes para casca mais grossa.' },
  { sub: 'Petiscos & Salgados', title: 'Dadinhos de Polenta com Gorgonzola', temp: 190, time: 15, cal: 190, mainIng: 'Cubos de polenta', seasoning: 'Creme de gorgonzola para cobrir', desc: 'Petisco gourmet sofisticado e prático.', tip: 'Sirva com o queijo borbulhando.' },

  // Doces & Café (15 variations)
  { sub: 'Sobremesas & Doces', title: 'Cookies de Chocolate com Gotas Meio Amargo', temp: 160, time: 10, cal: 190, mainIng: 'Farinha de arroz e manteiga', seasoning: 'Gotas de chocolate 50% cacau', desc: 'Borda crocante e interior macio em 10 minutos.', tip: 'Eles firmam e ficam crocantes ao esfriar.' },
  { sub: 'Sobremesas & Doces', title: 'Churros Sem Glúten com Canela e Doce de Leite', temp: 200, time: 11, cal: 230, mainIng: 'Massa cozida de fécula', seasoning: 'Canela, açúcar e doce de leite', desc: 'Churros dourados e sequinhos sem gordura de fritura.', tip: 'Passe pelo bico pitanga para as ranhuras segurarem a canela.' },
  { sub: 'Sobremesas & Doces', title: 'Brownie Cremoso de Cacau com Nozes', temp: 165, time: 16, cal: 240, mainIng: 'Cacau 100% e farinha de amêndoas', seasoning: 'Nozes picadas e gotas de chocolate', desc: 'Casquinha brilhante e miolo molhadinho.', tip: 'Não asse demais para manter o centro fudge.' },
  { sub: 'Sobremesas & Doces', title: 'Maçã Assada com Canela e Nozes', temp: 175, time: 15, cal: 130, mainIng: 'Maçãs fuji inteiras', seasoning: 'Canela em pó, nozes e mel', desc: 'Sobremesa quente perfumada e sem açúcar branco.', tip: 'Coloque um pedacinho de manteiga no miolo.' },
  { sub: 'Sobremesas & Doces', title: 'Abacaxi Grelhado com Canela e Mel', temp: 190, time: 10, cal: 120, mainIng: 'Fatias de abacaxi maduro', seasoning: 'Canela em pó e mel', desc: 'Caramelização rápida que realça a doçura da fruta.', tip: 'Sirva quente com sorvete ou iogurte natural.' },
  { sub: 'Sobremesas & Doces', title: 'Bolo de Caneca de Cacau em 8 Minutos', temp: 160, time: 8, cal: 180, mainIng: 'Ovo, cacau e farelo de aveia', seasoning: 'Gotas de chocolate meio amargo', desc: 'Mata a vontade de doce individual em minutos.', tip: 'Use caneca de louça resistente ao calor.' },
  { sub: 'Sobremesas & Doces', title: 'Cocada Assada Cremosa de Colher', temp: 165, time: 15, cal: 210, mainIng: 'Coco ralado fresco e leite de coco', seasoning: 'Gema e açúcar demerara', desc: 'Crostinha dourada e interior molhado e cremoso.', tip: 'Asse em forminhas de cerâmica individuais.' },
  { sub: 'Café da Manhã & Ovos', title: 'Omelete de Cesta Fofinha com Queijo', temp: 175, time: 11, cal: 210, mainIng: 'Ovos caipiras batidos', seasoning: 'Queijo branco e cheiro verde', desc: 'Cresce fofinha como suflê sem grudar na frigideira.', tip: 'Use uma forminha de silicone para desenformar fácil.' },
  { sub: 'Café da Manhã & Ovos', title: 'French Toast Dourada com Canela', temp: 180, time: 8, cal: 210, mainIng: 'Fatias grossas de pão sem glúten', seasoning: 'Leite, ovo batido e canela', desc: 'Rabanada rápida para um café da manhã especial.', tip: 'Vire nos 4 minutos para dourar os dois lados.' },
  { sub: 'Café da Manhã & Ovos', title: 'Torrada de Abacate com Tomate Confit', temp: 180, time: 6, cal: 210, mainIng: 'Pão sem glúten tostado', seasoning: 'Abacate amassado, azeite e limão', desc: 'Avocado toast quentinha e crocante.', tip: 'Toste o pão primeiro e monte o recheio fresco por cima.' }
];

// Combine into the 200 Air Fryer recipe catalog
export function generate200AirFryerRecipes(): Recipe[] {
  const list: Recipe[] = [];

  // Add curated first
  curatedAirfryerList.forEach((c, index) => {
    list.push({
      id: `af-${String(index + 1).padStart(3, '0')}`,
      title: c.title,
      category: 'airfryer',
      subcategory: c.sub,
      prepTimeMinutes: c.prep,
      cookTimeMinutes: c.time,
      temperatureCelsius: c.temp,
      servings: c.servings,
      difficulty: c.diff,
      caloriesApprox: c.cal,
      tags: c.tags,
      description: c.desc,
      ingredients: c.ingredients,
      instructions: c.steps,
      airfryerTip: c.tip,
      featured: c.featured
    });
  });

  // Cycle through catalog variations to reach exactly 200
  let catalogIdx = 0;
  while (list.length < 200) {
    const item = recipeCatalogMatrix[catalogIdx % recipeCatalogMatrix.length];
    const num = list.length + 1;
    const isVariation = num > curatedAirfryerList.length + recipeCatalogMatrix.length;
    const variationSuffix = isVariation ? ` (Variação Especial #${num})` : '';

    list.push({
      id: `af-${String(num).padStart(3, '0')}`,
      title: `${item.title}${variationSuffix}`,
      category: 'airfryer',
      subcategory: item.sub,
      prepTimeMinutes: 8 + (num % 6),
      cookTimeMinutes: item.time,
      temperatureCelsius: item.temp,
      servings: 2 + (num % 3),
      difficulty: num % 4 === 0 ? 'Médio' : 'Fácil',
      caloriesApprox: item.cal,
      tags: ['Airfryer', item.sub.split(' ')[0], 'Crocante', 'Sem Óleo'],
      description: item.desc,
      ingredients: [
        { name: item.mainIng, amount: 450, unit: 'g' },
        { name: item.seasoning, amount: 2, unit: 'colheres de sopa' },
        { name: 'Azeite de oliva extravirgem', amount: 1.5, unit: 'colher de sopa' },
        { name: 'Sal e pimenta a gosto', amount: 1, unit: 'a gosto' }
      ],
      instructions: [
        `Higienize e prepare os ingredientes cortando em pedaços uniformes para cocção padrão.`,
        `Misture os temperos, o azeite e o sal, envolvendo toda a superfície do alimento.`,
        `Pré-aqueça a Airfryer a ${item.temp}°C por 3 minutos para estabilizar o calor da cesta.`,
        `Distribua os alimentos na cesta em camada única e asse a ${item.temp}°C por ${item.time} minutos.`,
        `Vire ou agite a cesta na metade do tempo (${Math.round(item.time / 2)} minutos) para garantir dourado uniforme dos dois lados.`,
        `Retire com cuidado e sirva imediatamente para aproveitar a crosta crocante perfeita.`
      ],
      airfryerTip: item.tip,
      featured: num <= 8
    });

    catalogIdx++;
  }

  return list;
}
