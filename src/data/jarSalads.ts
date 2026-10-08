import { Recipe, JarLayer } from '../types/recipe';

export const standardJarAssemblyGuide: JarLayer[] = [
  {
    layerNumber: 1,
    title: '1ª Camada (Fundo): Molho e Vinagrete',
    description: 'Fica sempre no fundo isolado, evitando que qualquer folha murche prematuramente.',
    items: ['Azeite extravirgem', 'Vinagre balsâmico ou de maçã', 'Molho de iogurte', 'Mostarda e mel', 'Molho pesto']
  },
  {
    layerNumber: 2,
    title: '2ª Camada: Legumes Densos & Marinados',
    description: 'Ingredientes pesados que absorvem o sabor do molho e criam uma barreira estanque.',
    items: ['Cenoura ralada', 'Pepino em cubos', 'Rabanete fatiado', 'Tomate cereja inteiro', 'Beterraba ralada']
  },
  {
    layerNumber: 3,
    title: '3ª Camada: Grãos & Carboidratos Cozidos',
    description: 'Absorvem aromas e dão saciedade duradoura sem perder a textura.',
    items: ['Quinoa cozida al dente', 'Grão-de-bico cozido', 'Arroz integral', 'Macarrão sem glúten', 'Lentilha']
  },
  {
    layerNumber: 4,
    title: '4ª Camada: Proteínas & Queijos',
    description: 'Proteínas seladas e secas que ficam bem acomodadas longe do excesso de líquido do molho.',
    items: ['Peito de frango em tiras', 'Atum sólido', 'Ovos cozidos', 'Tofu marinado', 'Queijo feta ou minas']
  },
  {
    layerNumber: 5,
    title: '5ª Camada (Topo): Folhas Verdes Secas & Crocantes',
    description: 'Folhas 100% secas e toppings que precisam ficar crocantes até a hora de abrir.',
    items: ['Rúcula baby', 'Alface americana ou romana', 'Espinafre', 'Castanhas e nozes', 'Mix de sementes (girassol e abóbora)']
  }
];

export const jarSalads: Recipe[] = [
  {
    id: 'salada-001',
    title: 'Salada Mediterrânea com Grão-de-Bico e Feta',
    category: 'salada-no-pote',
    prepTimeMinutes: 15,
    cookTimeMinutes: 0,
    servings: 1,
    difficulty: 'Fácil',
    caloriesApprox: 340,
    storageDays: 5,
    tags: ['Salada no Pote', 'Mediterrânea', 'Alta Fibra', 'Vegetariana'],
    description: 'Uma das saladas no pote mais duráveis na geladeira! Refrescante, rica em proteínas vegetais e azeite perfumado.',
    ingredients: [
      { name: 'Azeite extravirgem e suco de limão siciliano', amount: 3, unit: 'colheres de sopa', note: 'Camada 1' },
      { name: 'Pepino japonês em cubinhos e cenoura ralada', amount: 0.5, unit: 'xícara', note: 'Camada 2' },
      { name: 'Tomatinhos cereja inteiros (não fatiados para não soltar água)', amount: 6, unit: 'unidades', note: 'Camada 2' },
      { name: 'Grão-de-bico cozido e drenado', amount: 1, unit: 'xícara', note: 'Camada 3' },
      { name: 'Queijo feta ou queijo de cabra em cubos', amount: 50, unit: 'g', note: 'Camada 4' },
      { name: 'Azeitonas pretas sem caroço', amount: 4, unit: 'unidades', note: 'Camada 4' },
      { name: 'Rúcula e alface frisée bem secas', amount: 2, unit: 'xícaras', note: 'Camada 5' },
      { name: 'Sementes de abóbora tostadas', amount: 1, unit: 'colher de sopa', note: 'Camada 5' }
    ],
    instructions: [
      'Escolha um pote de vidro hermético de 500ml a 750ml bem esterilizado e 100% seco.',
      'Coloque o molho de azeite, limão, sal e orégano no fundo do pote (Camada 1).',
      'Acrescente o pepino, a cenoura e os tomatinhos inteiros (Camada 2). Eles não vão murchar em contato com o molho.',
      'Adicione o grão-de-bico cozido e bem escorrido (Camada 3).',
      'Coloque os cubos de queijo feta e azeitonas (Camada 4).',
      'Finalize preenchendo todo o topo com as folhas verdes bem higienizadas e secas na centrífuga e as sementes (Camada 5).',
      'Tampe hermeticamente e guarde na geladeira em pé por até 5 dias.',
      'Na hora de consumir: basta sacudir o pote vigorosamente para o molho envolver todas as camadas, ou virar direto no prato.'
    ],
    jarLayers: standardJarAssemblyGuide,
    glutenFreeTip: 'Tomatinhos devem ser colocados inteiros; fatiar solta líquido antes da hora.',
    featured: true
  },
  {
    id: 'salada-002',
    title: 'Salada Caesar Fit no Pote com Iogurte e Frango',
    category: 'salada-no-pote',
    prepTimeMinutes: 20,
    cookTimeMinutes: 10,
    servings: 1,
    difficulty: 'Fácil',
    caloriesApprox: 310,
    storageDays: 4,
    tags: ['Salada no Pote', 'Caesar Fit', 'Proteica', 'Iogurte'],
    description: 'Versão leve e cremosa do clássico Caesar, com molho feito de iogurte natural e lascas de peito de frango assado.',
    ingredients: [
      { name: 'Iogurte natural sem açúcar', amount: 3, unit: 'colheres de sopa', note: 'Camada 1' },
      { name: 'Mostarda dijon, suco de limão e alho ralado', amount: 1, unit: 'colher de chá cada', note: 'Camada 1' },
      { name: 'Cenoura em palitos e pepino', amount: 0.5, unit: 'xícara', note: 'Camada 2' },
      { name: 'Milho verde cozido', amount: 0.5, unit: 'xícara', note: 'Camada 3' },
      { name: 'Tiras de frango grelhado ou assado na Airfryer', amount: 120, unit: 'g', note: 'Camada 4' },
      { name: 'Alface americana rasgada crocante e seca', amount: 2, unit: 'xícaras', note: 'Camada 5' },
      { name: 'Lâminas de queijo parmesão', amount: 2, unit: 'colheres de sopa', note: 'Camada 5' },
      { name: 'Castanhas de caju trituradas (substituem croutons)', amount: 1, unit: 'colher de sopa', note: 'Camada 5' }
    ],
    instructions: [
      'Misture o iogurte com mostarda, limão, azeite, alho e sal no fundo do pote (Camada 1).',
      'Adicione a cenoura crocante e pepino para isolar o molho (Camada 2).',
      'Coloque o milho (Camada 3).',
      'Adicione as tiras de peito de frango frias e secas (Camada 4).',
      'Encha o topo com a alface americana bem seca, parmesão e castanhas crocantes (Camada 5).',
      'Guarde na geladeira por até 4 dias.'
    ],
    jarLayers: standardJarAssemblyGuide,
    glutenFreeTip: 'Usar castanhas de caju no lugar de croutons de trigo adiciona crocância saudável 100% sem glúten.',
    featured: true
  },
  {
    id: 'salada-003',
    title: 'Salada Tropical com Manga, Frango e Vinagrete de Maracujá',
    category: 'salada-no-pote',
    prepTimeMinutes: 18,
    cookTimeMinutes: 0,
    servings: 1,
    difficulty: 'Fácil',
    caloriesApprox: 290,
    storageDays: 3,
    tags: ['Salada no Pote', 'Tropical', 'Refrescante', 'Manga'],
    description: 'Explosão de frescor com o doce da manga madura e o perfume cítrico do vinagrete caseiro de maracujá.',
    ingredients: [
      { name: 'Molho de polpa de maracujá fresco, azeite e mel', amount: 3, unit: 'colheres de sopa', note: 'Camada 1' },
      { name: 'Cubos firmes de manga tomy ou palmer', amount: 0.5, unit: 'xícara', note: 'Camada 2' },
      { name: 'Cebola roxa fininha e pimentão amarelo', amount: 0.5, unit: 'xícara', note: 'Camada 2' },
      { name: 'Quinoa branca cozida e fria', amount: 0.5, unit: 'xícara', note: 'Camada 3' },
      { name: 'Frango desfiado temperado', amount: 100, unit: 'g', note: 'Camada 4' },
      { name: 'Folhas de espinafre baby e agrião secas', amount: 2, unit: 'xícaras', note: 'Camada 5' },
      { name: 'Castanha-do-pará em lâminas', amount: 1, unit: 'colher de sopa', note: 'Camada 5' }
    ],
    instructions: [
      'Coloque o vinagrete de maracujá e azeite no fundo do vidro.',
      'Adicione a manga em cubos e a cebola roxa marinada.',
      'Coloque a quinoa cozida fria.',
      'Adicione o frango desfiado seco.',
      'Complete até a tampa com as folhas verdes bem secas e lâminas de castanha-do-pará.',
      'Vede e refrigere. Consumir em até 3 dias para a manga manter o frescor máximo.'
    ],
    jarLayers: standardJarAssemblyGuide,
    glutenFreeTip: 'Use manga firme (tipo Palmer) para que os cubos mantenham a estrutura sem desmanchar.',
    featured: true
  },
  {
    id: 'salada-004',
    title: 'Salada Detox de Quinoa, Beterraba e Nozes',
    category: 'salada-no-pote',
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    servings: 1,
    difficulty: 'Fácil',
    caloriesApprox: 320,
    storageDays: 5,
    tags: ['Salada no Pote', 'Detox', 'Antioxidante', 'Vegana'],
    description: 'Cores vibrantes, potente ação antioxidante e muita fibra para garantir saciedade por horas no trabalho ou faculdade.',
    ingredients: [
      { name: 'Vinagre de maçã com azeite e gengibre ralado', amount: 3, unit: 'colheres de sopa', note: 'Camada 1' },
      { name: 'Beterraba crua ralada e rabanete em rodelas', amount: 0.5, unit: 'xícara', note: 'Camada 2' },
      { name: 'Cenoura ralada', amount: 0.5, unit: 'xícara', note: 'Camada 2' },
      { name: 'Quinoa tricolor cozida al dente', amount: 1, unit: 'xícara', note: 'Camada 3' },
      { name: 'Edamame cozido ou cubos de tofu grelhado', amount: 80, unit: 'g', note: 'Camada 4' },
      { name: 'Folhas de couve rasgadas fininhas e rúcula', amount: 2, unit: 'xícaras', note: 'Camada 5' },
      { name: 'Nozes picadas e sementes de chia', amount: 1, unit: 'colher de sopa', note: 'Camada 5' }
    ],
    instructions: [
      'Despeje o molho com toque de gengibre no fundo.',
      'Acrescente a beterraba e cenoura cruas (elas ficam ótimas marinando levemente no vinagre).',
      'Adicione a quinoa cozida já fria.',
      'Coloque o edamame ou tofu.',
      'Finalize com as folhas verdes e nozes no topo.',
      'Tampe e leve à geladeira por até 5 dias.'
    ],
    jarLayers: standardJarAssemblyGuide,
    glutenFreeTip: 'A beterraba crua ralada solta cor linda e preserva todos os fitoquímicos ativos.',
    featured: true
  },
  {
    id: 'salada-005',
    title: 'Salada Proteica de Atum com Ovo de Codorna e Feijão Fradinho',
    category: 'salada-no-pote',
    prepTimeMinutes: 15,
    cookTimeMinutes: 0,
    servings: 1,
    difficulty: 'Fácil',
    caloriesApprox: 360,
    storageDays: 4,
    tags: ['Salada no Pote', 'Proteica', 'Atum', 'Sem Glúten'],
    description: 'Refeição completa no pote! Combinação equilibrada de feijão fradinho, atum de qualidade e ovos de codorna cozidos.',
    ingredients: [
      { name: 'Azeite de oliva, vinagre de vinho branco e mostarda', amount: 3, unit: 'colheres de sopa', note: 'Camada 1' },
      { name: 'Cebola roxa em tiras e pimentão verde em cubinhos', amount: 0.5, unit: 'xícara', note: 'Camada 2' },
      { name: 'Tomate cereja inteiro', amount: 5, unit: 'unidades', note: 'Camada 2' },
      { name: 'Feijão fradinho cozido al dente', amount: 1, unit: 'xícara', note: 'Camada 3' },
      { name: 'Atum sólido escorrido', amount: 120, unit: 'g', note: 'Camada 4' },
      { name: 'Ovos de codorna cozidos e descascados', amount: 4, unit: 'unidades', note: 'Camada 4' },
      { name: 'Folhas de alface roxa e salsa picada', amount: 2, unit: 'xícaras', note: 'Camada 5' },
      { name: 'Sementes de girassol', amount: 1, unit: 'colher de sopa', note: 'Camada 5' }
    ],
    instructions: [
      'Monte o molho no fundo do vidro.',
      'Insira a cebola roxa e pimentão.',
      'Adicione o feijão fradinho cozido e drenado.',
      'Acomode o atum sólido e os ovos de codorna inteiros.',
      'Preencha o restante do espaço até o topo com as folhas secas e sementes.',
      'Vede bem e guarde refrigerado por até 4 dias.'
    ],
    jarLayers: standardJarAssemblyGuide,
    glutenFreeTip: 'Excelente para quem treina: fornece mais de 30g de proteína de alto valor biológico.',
    featured: true
  },
  {
    id: 'salada-006',
    title: 'Salada Caprese no Pote com Pesto de Manjericão',
    category: 'salada-no-pote',
    prepTimeMinutes: 12,
    cookTimeMinutes: 0,
    servings: 1,
    difficulty: 'Fácil',
    caloriesApprox: 330,
    storageDays: 4,
    tags: ['Italiana', 'Caprese', 'Pesto', 'Vegetariana'],
    description: 'A clássica combinação italiana de tomate doce, queijo macio e pesto caseiro de manjericão fresco.',
    ingredients: [
      { name: 'Molho pesto de manjericão com azeite e nozes', amount: 3, unit: 'colheres de sopa', note: 'Camada 1' },
      { name: 'Tomatinhos cereja inteiros doces', amount: 8, unit: 'unidades', note: 'Camada 2' },
      { name: 'Macarrão sem glúten parafuso cozido e frio', amount: 0.5, unit: 'xícara', note: 'Camada 3' },
      { name: 'Bolinhas de muçarela de búfala cortadas ao meio', amount: 80, unit: 'g', note: 'Camada 4' },
      { name: 'Folhas frescas de manjericão e rúcula selvagem', amount: 2, unit: 'xícaras', note: 'Camada 5' },
      { name: 'Pinolis ou nozes tostadas', amount: 1, unit: 'colher de sopa', note: 'Camada 5' }
    ],
    instructions: [
      'Despeje o molho pesto aromático na base do pote de vidro.',
      'Acrescente os tomatinhos cereja inteiros.',
      'Coloque a massa parafuso sem glúten cozida al dente.',
      'Disponha as bolinhas de muçarela de búfala.',
      'Termine com folhas fartas de manjericão fresco e rúcula bem sequinhas.',
      'Feche bem e mantenha em temperatura de geladeira por até 4 dias.'
    ],
    jarLayers: standardJarAssemblyGuide,
    glutenFreeTip: 'Cozinhe o macarrão sem glúten al dente e regue com um fio de azeite antes de colocar no pote para não grudar.'
  },
  {
    id: 'salada-007',
    title: 'Salada Tex-Mex com Milho, Feijão Preto e Molho Cremoso',
    category: 'salada-no-pote',
    prepTimeMinutes: 15,
    cookTimeMinutes: 0,
    servings: 1,
    difficulty: 'Fácil',
    caloriesApprox: 340,
    storageDays: 4,
    tags: ['Tex-Mex', 'Colorida', 'Feijão Preto', 'Saborosa'],
    description: 'Cores vibrantes, sabor alegre e molho temperado com cominho e limão que agrada a todos.',
    ingredients: [
      { name: 'Molho de azeite, limão, cominho e páprica defumada', amount: 3, unit: 'colheres de sopa', note: 'Camada 1' },
      { name: 'Pimentão vermelho e cebola roxa picados', amount: 0.5, unit: 'xícara', note: 'Camada 2' },
      { name: 'Feijão preto cozido firme e milho verde', amount: 1, unit: 'xícara', note: 'Camada 3' },
      { name: 'Frango grelhado desfiado ou queijo minas curado', amount: 100, unit: 'g', note: 'Camada 4' },
      { name: 'Alface americana picada e coentro fresco', amount: 2, unit: 'xícaras', note: 'Camada 5' },
      { name: 'Sementes de abóbora tostadas', amount: 1, unit: 'colher de sopa', note: 'Camada 5' }
    ],
    instructions: [
      'Coloque o molho apimentado no fundo.',
      'Adicione os pimentões e a cebola roxa.',
      'Coloque o feijão preto e o milho.',
      'Acrescente o frango ou queijo.',
      'Finalize com a alface americana crocante e as sementes.',
      'Guarde fechado na geladeira por 4 dias.'
    ],
    jarLayers: standardJarAssemblyGuide,
    glutenFreeTip: 'O feijão preto firme aguenta o tempo de geladeira sem soltar amido no pote.'
  },
  {
    id: 'salada-008',
    title: 'Salada Grega com Pepino, Azeitonas Kalamata e Orégano',
    category: 'salada-no-pote',
    prepTimeMinutes: 12,
    cookTimeMinutes: 0,
    servings: 1,
    difficulty: 'Fácil',
    caloriesApprox: 290,
    storageDays: 5,
    tags: ['Grega', 'Leve', 'Kalamata', 'Refrescante'],
    description: 'A autêntica salada de verão das ilhas gregas adaptada para manter a crocância intacta no vidro.',
    ingredients: [
      { name: 'Azeite extravirgem grego, vinagre de vinho tinto e orégano seco', amount: 3, unit: 'colheres de sopa', note: 'Camada 1' },
      { name: 'Pepino com casca em cubos grandes', amount: 0.5, unit: 'xícara', note: 'Camada 2' },
      { name: 'Tomate cereja inteiro', amount: 6, unit: 'unidades', note: 'Camada 2' },
      { name: 'Cebola roxa em rodelas finas', amount: 0.5, unit: 'xícara', note: 'Camada 2' },
      { name: 'Azeitonas pretas kalamata inteiras', amount: 6, unit: 'unidades', note: 'Camada 3' },
      { name: 'Queijo feta em cubos grossos', amount: 60, unit: 'g', note: 'Camada 4' },
      { name: 'Folhas de alface romana bem secas', amount: 2, unit: 'xícaras', note: 'Camada 5' }
    ],
    instructions: [
      'Misture o azeite generoso com vinagre e orégano no fundo do pote.',
      'Coloque o pepino, tomatinhos e a cebola roxa.',
      'Adicione as azeitonas kalamata.',
      'Coloque o queijo feta em cubos generosos.',
      'Encha a parte de cima com as folhas de alface romana bem secas.',
      'Tampe e refrigere por até 5 dias.'
    ],
    jarLayers: standardJarAssemblyGuide,
    glutenFreeTip: 'O azeite extravirgem conserva naturalmente o pepino e o queijo feta no vidro.'
  }
];
