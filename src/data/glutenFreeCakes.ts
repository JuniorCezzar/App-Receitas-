import { Recipe } from '../types/recipe';

export const glutenFreeCakes: Recipe[] = [
  {
    id: 'bolo-001',
    title: 'Bolo de Cenoura com Calda Craquelada de Chocolate',
    category: 'bolo-sem-gluten',
    prepTimeMinutes: 15,
    cookTimeMinutes: 35,
    temperatureCelsius: 180,
    servings: 12,
    difficulty: 'Fácil',
    caloriesApprox: 220,
    tags: ['Sem Glúten', 'Clássico', 'Café da Tarde', 'Chocolate'],
    description: 'O clássico mais amado do Brasil em versão 100% sem glúten: massa dourada aerada e a inconfundível casquinha crocante de chocolate por cima.',
    ingredients: [
      { name: 'Cenouras médias descascadas e picadas', amount: 3, unit: 'unidades (cerca de 250g)' },
      { name: 'Ovos inteiros em temperatura ambiente', amount: 3, unit: 'unidades' },
      { name: 'Óleo vegetal de girassol ou coco', amount: 0.5, unit: 'xícara' },
      { name: 'Açúcar demerara ou cristal', amount: 1, unit: 'xícara' },
      { name: 'Farinha de arroz branca fina', amount: 1.5, unit: 'xícara' },
      { name: 'Polvilho doce ou amido de milho', amount: 0.5, unit: 'xícara' },
      { name: 'Goma xantana', amount: 0.5, unit: 'colher de café', note: 'Garante estrutura para o bolo não esfarelar' },
      { name: 'Fermento químico em pó', amount: 1, unit: 'colher de sopa' },
      { name: 'Cacau em pó 50% ou 100% para a calda', amount: 4, unit: 'colheres de sopa' },
      { name: 'Manteiga e açúcar para a calda', amount: 2, unit: 'colheres de sopa cada' },
      { name: 'Leite ou bebida vegetal para a calda', amount: 4, unit: 'colheres de sopa' }
    ],
    instructions: [
      'Bata no liquidificador as cenouras picadas, os ovos, o óleo e o açúcar por 4 minutos até virar um creme aveludado e homogêneo.',
      'Em uma tigela, peneire a farinha de arroz, o polvilho doce e a goma xantana.',
      'Despeje o líquido do liquidificador na tigela e misture suavemente com um fouet até incorporar.',
      'Adicione o fermento químico em pó e mexa delicadamente com movimentos de baixo para cima.',
      'Verta em uma forma redonda de furo central (22cm) untada com óleo e polvilhada com farinha de arroz.',
      'Asse em forno pré-aquecido a 180°C por 35 a 40 minutos (ou na Airfryer a 160°C por 25 minutos coberto com papel alumínio nos primeiros 15 minutos).',
      'Para a calda craquelada: leve o cacau, açúcar, manteiga e leite ao fogo mexendo até ferver e engrossar.',
      'Despeje a calda fervente sobre o bolo ainda morno. Ao esfriar, ela vai formar aquela casquinha sequinha e estaladiça!'
    ],
    glutenFreeTip: 'Pese as cenouras: excesso de água da cenoura é o principal motivo de bolos de cenoura sem glúten solarem.',
    featured: true
  },
  {
    id: 'bolo-002',
    title: 'Bolo de Fubá Cremoso com Pedacinhos de Goiabada',
    category: 'bolo-sem-gluten',
    prepTimeMinutes: 10,
    cookTimeMinutes: 45,
    temperatureCelsius: 180,
    servings: 12,
    difficulty: 'Fácil',
    caloriesApprox: 240,
    tags: ['Sem Glúten', 'Fubá', 'Goiabada', 'Café'],
    description: 'Bolo com sabor de fazenda que separa em três camadas mágicas no forno: base macia, meio cremoso estilo pudim e topo dourado.',
    ingredients: [
      { name: 'Leite integral ou de coco', amount: 3, unit: 'xícaras' },
      { name: 'Ovos inteiros', amount: 3, unit: 'unidades' },
      { name: 'Manteiga derretida', amount: 2, unit: 'colheres de sopa' },
      { name: 'Açúcar demerara', amount: 1.5, unit: 'xícara' },
      { name: 'Fubá mimoso fino', amount: 1, unit: 'xícara' },
      { name: 'Polvilho doce ou amido de milho', amount: 3, unit: 'colheres de sopa' },
      { name: 'Queijo parmesão ou canastra ralado', amount: 50, unit: 'g' },
      { name: 'Fermento em pó químico', amount: 1, unit: 'colher de sopa' },
      { name: 'Cubinhos de goiabada cascão passados no amido', amount: 100, unit: 'g' }
    ],
    instructions: [
      'Coloque no liquidificador o leite, ovos, manteiga, açúcar, fubá, polvilho doce e queijo parmesão ralado.',
      'Bata por 2 minutos até ficar completamente líquido e homogêneo.',
      'Junte o fermento químico e apenas pulse uma vez para misturar.',
      'Despeje a massa líquida em uma assadeira untada.',
      'Distribua os cubinhos de goiabada (envoltos em amido de milho para não afundarem todos no fundo) por cima da massa.',
      'Asse a 180°C por 45 a 50 minutos até dourar a superfície.',
      'Deixe amornar antes de cortar para a camada cremosa assentar.'
    ],
    glutenFreeTip: 'Passar os cubos de goiabada no amido de milho antes de jogar na massa impede que eles grudem no fundo da forma.',
    featured: true
  },
  {
    id: 'bolo-003',
    title: 'Bolo de Laranja Fofinho e Molhadinho com Calda Cítrica',
    category: 'bolo-sem-gluten',
    prepTimeMinutes: 15,
    cookTimeMinutes: 35,
    temperatureCelsius: 180,
    servings: 10,
    difficulty: 'Fácil',
    caloriesApprox: 195,
    tags: ['Sem Glúten', 'Cítrico', 'Fofinho', 'Lanche'],
    description: 'Bolo aromático feito com suco fresco e raspas de laranja, finalizado com calda quente que deixa o miolo ultra úmido.',
    ingredients: [
      { name: 'Ovos inteiros', amount: 3, unit: 'unidades' },
      { name: 'Suco de laranja pera espremido na hora', amount: 1, unit: 'xícara' },
      { name: 'Raspas da casca de 1 laranja (sem a parte branca)', amount: 1, unit: 'colher de chá' },
      { name: 'Óleo de milho ou coco', amount: 0.5, unit: 'xícara' },
      { name: 'Açúcar demerara', amount: 1, unit: 'xícara' },
      { name: 'Farinha de arroz branco', amount: 1.5, unit: 'xícara' },
      { name: 'Fécula de batata', amount: 0.5, unit: 'xícara' },
      { name: 'Fermento em pó para bolo', amount: 1, unit: 'colher de sopa' }
    ],
    instructions: [
      'Bata as claras em neve e reserve.',
      'Bata as gemas com o açúcar e o óleo até formar um creme esbranquiçado.',
      'Intercale o suco de laranja e as farinhas peneiradas batendo suavemente.',
      'Incorpore as raspas de laranja, o fermento e delicadamente as claras em neve.',
      'Asse em forma untada a 180°C por 35 minutos.',
      'Fure o bolo ainda quente com um palito e regue com 1 xícara de suco de laranja fervido com 2 colheres de açúcar.'
    ],
    glutenFreeTip: 'Bater as claras em neve separadamente confere volume e aeração sem depender de glúten.',
    featured: true
  },
  {
    id: 'bolo-004',
    title: 'Bolo de Chocolate 100% Cacau Úmido e Decadente',
    category: 'bolo-sem-gluten',
    prepTimeMinutes: 15,
    cookTimeMinutes: 30,
    temperatureCelsius: 180,
    servings: 10,
    difficulty: 'Fácil',
    caloriesApprox: 230,
    tags: ['Sem Glúten', 'Chocolatudo', 'Festa', 'Fudge'],
    description: 'Para os apaixonados por chocolate intenso: massa úmida, escura e aveludada, coberta com ganache brilhante.',
    ingredients: [
      { name: 'Cacau em pó 100% puro', amount: 0.5, unit: 'xícara' },
      { name: 'Água morna ou café passado forte', amount: 0.5, unit: 'xícara', note: 'O café realça as notas de cacau sem deixar gosto' },
      { name: 'Ovos', amount: 3, unit: 'unidades' },
      { name: 'Açúcar mascavo ou demerara', amount: 1, unit: 'xícara' },
      { name: 'Óleo vegetal', amount: 0.5, unit: 'xícara' },
      { name: 'Farinha de arroz', amount: 1, unit: 'xícara' },
      { name: 'Farinha de amêndoas', amount: 0.5, unit: 'xícara', note: 'A gordura da amêndoa mantém o bolo úmido' },
      { name: 'Fermento químico', amount: 1, unit: 'colher de sopa' }
    ],
    instructions: [
      'Dissolva o cacau na água morna ou café para hidratar e intensificar a cor.',
      'Bata os ovos com o açúcar e o óleo até ficar espumoso.',
      'Junte a mistura de cacau e as farinhas de arroz e amêndoas.',
      'Incorpore o fermento químico suavemente.',
      'Asse a 180°C por 30 a 35 minutos até o teste do palito sair limpo com algumas migalhas úmidas.',
      'Cubra com ganache de chocolate meio amargo e creme de leite ou leite de coco.'
    ],
    glutenFreeTip: 'A farinha de amêndoas tem lipídios naturais que impedem o cacau de ressecar a massa.',
    featured: true
  },
  {
    id: 'bolo-005',
    title: 'Bolo de Banana com Canela e Aveia Sem Glúten',
    category: 'bolo-sem-gluten',
    prepTimeMinutes: 10,
    cookTimeMinutes: 35,
    temperatureCelsius: 180,
    servings: 8,
    difficulty: 'Fácil',
    caloriesApprox: 160,
    tags: ['Sem Glúten', 'Sem Açúcar', 'Fit', 'Aveia'],
    description: 'Sem açúcar refinado e sem farinha branca! Adoçado naturalmente pela banana bem madura e perfumado com canela.',
    ingredients: [
      { name: 'Bananas nanicas bem maduras amassadas', amount: 4, unit: 'unidades' },
      { name: 'Ovos inteiros', amount: 3, unit: 'unidades' },
      { name: 'Óleo de coco ou manteiga derretida', amount: 3, unit: 'colheres de sopa' },
      { name: 'Farinha de aveia sem glúten certificada', amount: 1.5, unit: 'xícara' },
      { name: 'Canela em pó', amount: 1, unit: 'colher de sopa' },
      { name: 'Uvas passas ou nozes picadas (opcional)', amount: 0.5, unit: 'xícara' },
      { name: 'Fermento em pó', amount: 1, unit: 'colher de sopa' }
    ],
    instructions: [
      'Amasse as bananas maduras com um garfo até formar um purê.',
      'Misture os ovos batidos e o óleo de coco.',
      'Adicione a farinha de aveia sem glúten e a canela em pó.',
      'Junte as nozes ou uvas passas e o fermento por último.',
      'Despeje na forma e decore com fatias de banana por cima.',
      'Asse a 180°C por 35 minutos até dourar e perfumar a casa toda.'
    ],
    glutenFreeTip: 'Certifique-se de usar aveia com selo Sem Glúten para evitar contaminação cruzada industrial.',
    featured: true
  },
  {
    id: 'bolo-006',
    title: 'Bolo de Limão Siciliano com Farinha de Amêndoas',
    category: 'bolo-sem-gluten',
    prepTimeMinutes: 15,
    cookTimeMinutes: 35,
    temperatureCelsius: 175,
    servings: 10,
    difficulty: 'Fácil',
    caloriesApprox: 215,
    tags: ['Gourmet', 'Limão Siciliano', 'Sem Glúten', 'Amêndoas'],
    description: 'Inspirado nos bolos da Riviera Italiana: miolo delicado, aveludado e perfumado com o frescor do limão siciliano.',
    ingredients: [
      { name: 'Farinha de amêndoas', amount: 1.5, unit: 'xícara' },
      { name: 'Farinha de arroz fino', amount: 0.5, unit: 'xícara' },
      { name: 'Polvilho doce', amount: 0.5, unit: 'xícara' },
      { name: 'Ovos', amount: 3, unit: 'unidades' },
      { name: 'Açúcar demerara', amount: 1, unit: 'xícara' },
      { name: 'Manteiga derretida ou azeite suave', amount: 80, unit: 'ml' },
      { name: 'Suco e raspas finas de 2 limões sicilianos', amount: 1, unit: 'receita' },
      { name: 'Fermento em pó', amount: 1, unit: 'colher de sopa' }
    ],
    instructions: [
      'Bata os ovos e o açúcar até triplicar de volume.',
      'Acrescente a manteiga derretida, o suco e as raspas de limão siciliano.',
      'Agregue suavemente as farinhas peneiradas e o fermento.',
      'Asse a 175°C por 35 minutos.',
      'Regue com calda fria de suco de limão siciliano e açúcar de confeiteiro.'
    ],
    glutenFreeTip: 'A textura da farinha de amêndoas dispensa qualquer glúten e traz sofisticação gourmet ao paladar.'
  },
  {
    id: 'bolo-007',
    title: 'Bolo de Coco Gelado Toalha Felpuda Sem Glúten',
    category: 'bolo-sem-gluten',
    prepTimeMinutes: 20,
    cookTimeMinutes: 35,
    temperatureCelsius: 180,
    servings: 12,
    difficulty: 'Fácil',
    caloriesApprox: 250,
    tags: ['Nostálgico', 'Coco', 'Gelado', 'Sem Glúten'],
    description: 'Aquele bolo clássico de festa de infância embrulhado no papel alumínio, super molhadinho de leite de coco e leite condensado.',
    ingredients: [
      { name: 'Ovos (claras em neve)', amount: 4, unit: 'unidades' },
      { name: 'Açúcar', amount: 1, unit: 'xícara' },
      { name: 'Farinha de arroz', amount: 1.5, unit: 'xícara' },
      { name: 'Amido de milho', amount: 0.5, unit: 'xícara' },
      { name: 'Leite morno', amount: 0.5, unit: 'xícara' },
      { name: 'Fermento químico', amount: 1, unit: 'colher de sopa' },
      { name: 'Leite condensado para a calda', amount: 1, unit: 'lata' },
      { name: 'Leite de coco para a calda', amount: 200, unit: 'ml' },
      { name: 'Coco ralado úmido para cobrir', amount: 150, unit: 'g' }
    ],
    instructions: [
      'Faça uma massa pão de ló batendo gemas e açúcar, adicionando farinhas e finalizando com claras em neve e fermento.',
      'Asse a 180°C por 35 minutos.',
      'Corte o bolo em quadrados ainda na forma.',
      'Misture o leite de coco e leite condensado e regue fartamente o bolo ainda quente para absorver tudo.',
      'Cubra com o coco ralado, embrulhe em papel alumínio e deixe na geladeira por pelo menos 4 horas antes de servir.'
    ],
    glutenFreeTip: 'A massa absorve a calda sem desmanchar graças à proporção equilibrada de amido de milho.'
  },
  {
    id: 'bolo-008',
    title: 'Bolo de Milho Verde Cremoso da Roça',
    category: 'bolo-sem-gluten',
    prepTimeMinutes: 10,
    cookTimeMinutes: 40,
    temperatureCelsius: 180,
    servings: 10,
    difficulty: 'Fácil',
    caloriesApprox: 220,
    tags: ['Sem Glúten', 'Milho', 'São João', 'Cremoso'],
    description: 'Feito no liquidificador com milho verde fresco ou em conserva, leite de coco e manteiga. Fica cremoso como pamonha assada.',
    ingredients: [
      { name: 'Milho verde debulhado ou em conserva escorrido', amount: 2, unit: 'latas ou espigas' },
      { name: 'Leite de coco', amount: 200, unit: 'ml' },
      { name: 'Ovos', amount: 3, unit: 'unidades' },
      { name: 'Manteiga derretida', amount: 3, unit: 'colheres de sopa' },
      { name: 'Açúcar', amount: 1, unit: 'xícara' },
      { name: 'Flocão de milho sem glúten ou fubá', amount: 0.5, unit: 'xícara' },
      { name: 'Coco ralado', amount: 50, unit: 'g' },
      { name: 'Fermento químico', amount: 1, unit: 'colher de sopa' }
    ],
    instructions: [
      'Bata o milho, ovos, leite de coco, manteiga e açúcar no liquidificador por 3 minutos até ficar cremoso.',
      'Adicione o flocão de milho e o coco ralado e bata rapidamente.',
      'Adicione o fermento e misture com uma espátula.',
      'Asse a 180°C por 40 minutos em forma untada.',
      'Sirva morno ou frio para textura de pamonha cremosa.'
    ],
    glutenFreeTip: 'Naturalmente livre de trigo, o milho traz doçura terrosa e textura aveludada incomparável.'
  }
];
