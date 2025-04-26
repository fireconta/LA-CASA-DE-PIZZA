/**
 * Lista de itens do cardápio da pizzaria.
 * Cada item contém informações como nome, categoria, preço, imagem, tamanhos disponíveis, etc.
 * Combos são itens especiais que agrupam outros itens do cardápio.
 */
const cardapio = [
  // Pizzas Salgadas
  {
    id: 1,
    nome: "Margherita",
    categoria: "Salgadas",
    preço: 45.00,
    imagem: validateUrl("https://via.placeholder.com/300"),
    descrição: "Pizza clássica com molho de tom/**
 * Lista de itens do cardápio da pizzaria.
 * Cada item contém informações como nome, categoria, preço, imagem, tamanhos disponíveis, etc.
 * Combos são itens especiais que agrupam outros itens do cardápio.
 */
const cardapio = [
  // Pizzas Salgadas
  {
    id: 1,
    nome: "Margherita",
    categoria: "Salgadas",
    preço: 45.00,
    imagem: validateUrl("https://images.unsplash.com/photo-1595854341625-fc2f5b7577a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"),
    descrição: "Pizza clássica com molho de tomate artesanal, muçarela de búfala e manjericão fresco colhido na hora.",
    ingredientes: ["molho de tomate artesanal", "muçarela de búfala", "manjericão fresco", "azeite extra virgem"],
    tamanhos: [
      { nome: "Pequena", preço: 35.00 },
      { nome: "Média", preço: 45.00 },
      { nome: "Grande", preço: 55.00 },
      { nome: "Família", preço: 65.00 },
    ],
    extrasDisponiveis: [
      { nome: "Azeitonas Pretas", preço: 5.00 },
      { nome: "Parmesão Ralado", preço: 7.00 },
      { nome: "Rúcula Fresca", preço: 6.00 },
      { nome: "Tomate Seco", preço: 8.00 },
    ],
    bordasDisponiveis: [
      { nome: "Tradicional", preço: 0.00 },
      { nome: "Catupiry", preço: 8.00 },
      { nome: "Cheddar Cremoso", preço: 8.00 },
      { nome: "Gorgonzola", preço: 10.00 },
    ],
    promocao: { ativo: true, precoPromocional: 40.00 },
    avaliacao: 4.5,
    numAvaliacoes: 120,
  },
  {
    id: 2,
    nome: "Calabresa",
    categoria: "Salgadas",
    preço: 48.00,
    imagem: validateUrl("https://images.unsplash.com/photo-1604384902259-b2d47c2d5c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"),
    descrição: "Pizza tradicional com calabresa artesanal fatiada, cebola caramelizada e muçarela derretida, finalizada com orégano.",
    ingredientes: ["molho de tomate", "calabresa artesanal", "cebola caramelizada", "muçarela", "orégano"],
    tamanhos: [
      { nome: "Pequena", preço: 38.00 },
      { nome: "Média", preço: 48.00 },
      { nome: "Grande", preço: 58.00 },
      { nome: "Família", preço: 68.00 },
    ],
    extrasDisponiveis: [
      { nome: "Orégano Extra", preço: 3.00 },
      { nome: "Azeitonas Verdes", preço: 5.00 },
      { nome: "Pimenta Calabresa", preço: 4.00 },
      { nome: "Cebola Extra", preço: 5.00 },
      { nome: "Bacon Crocante", preço: 7.00 },
    ],
    bordasDisponiveis: [
      { nome: "Tradicional", preço: 0.00 },
      { nome: "Catupiry", preço: 8.00 },
      { nome: "Parmesão", preço: 9.00 },
      { nome: "Cream Cheese", preço: 10.00 },
    ],
    promocao: null,
    avaliacao: 4.2,
    numAvaliacoes: 95,
  },
  {
    id: 3,
    nome: "Quatro Queijos",
    categoria: "Salgadas",
    preço: 52.00,
    imagem: validateUrl("https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"),
    descrição: "Pizza cremosa com uma combinação de muçarela, gorgonzola, parmesão e catupiry, finalizada com um toque de azeite trufado.",
    ingredientes: ["molho de tomate", "muçarela", "gorgonzola", "parmesão", "catupiry", "azeite trufado"],
    tamanhos: [
      { nome: "Pequena", preço: 42.00 },
      { nome: "Média", preço: 52.00 },
      { nome: "Grande", preço: 62.00 },
      { nome: "Família", preço: 72.00 },
    ],
    extrasDisponiveis: [
      { nome: "Manjericão", preço: 4.00 },
      { nome: "Tomate Seco", preço: 8.00 },
      { nome: "Azeitonas Pretas", preço: 5.00 },
      { nome: "Mel", preço: 6.00 },
    ],
    bordasDisponiveis: [
      { nome: "Tradicional", preço: 0.00 },
      { nome: "Catupiry", preço: 8.00 },
      { nome: "Cheddar", preço: 8.00 },
      { nome: "Gorgonzola", preço: 10.00 },
    ],
    promocao: { ativo: true, precoPromocional: 48.00 },
    avaliacao: 4.7,
    numAvaliacoes: 150,
  },
  // Pizzas Doces
  {
    id: 4,
    nome: "Chocolate com Morango",
    categoria: "Doces",
    preço: 50.00,
    imagem: validateUrl("https://images.unsplash.com/photo-1611293388250-580b08c54a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"),
    descrição: "Pizza doce com chocolate belga derretido, morangos frescos e um toque de açúcar de confeiteiro.",
    ingredientes: ["chocolate belga", "morangos frescos", "creme de leite", "açúcar de confeiteiro"],
    tamanhos: [
      { nome: "Pequena", preço: 40.00 },
      { nome: "Média", preço: 50.00 },
      { nome: "Grande", preço: 60.00 },
    ],
    extrasDisponiveis: [
      { nome: "Granulado Colorido", preço: 4.00 },
      { nome: "Leite Condensado", preço: 6.00 },
      { nome: "Chantilly", preço: 7.00 },
      { nome: "Amêndoas Laminadas", preço: 8.00 },
      { nome: "Calda de Caramelo", preço: 6.00 },
    ],
    bordasDisponiveis: [
      { nome: "Chocolate", preço: 8.00 },
      { nome: "Doce de Leite", preço: 8.00 },
    ],
    promocao: { ativo: true, precoPromocional: 45.00 },
    avaliacao: 4.8,
    numAvaliacoes: 80,
  },
  {
    id: 5,
    nome: "Banana com Canela",
    categoria: "Doces",
    preço: 48.00,
    imagem: validateUrl("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"),
    descrição: "Pizza doce com banana caramelizada, canela em pó e uma generosa camada de doce de leite.",
    ingredientes: ["banana caramelizada", "canela em pó", "doce de leite", "massa doce"],
    tamanhos: [
      { nome: "Pequena", preço: 38.00 },
      { nome: "Média", preço: 48.00 },
      { nome: "Grande", preço: 58.00 },
    ],
    extrasDisponiveis: [
      { nome: "Leite Condensado", preço: 6.00 },
      { nome: "Castanha de Caju", preço: 7.00 },
      { nome: "Chantilly", preço: 7.00 },
      { nome: "Calda de Chocolate", preço: 6.00 },
    ],
    bordasDisponiveis: [
      { nome: "Chocolate", preço: 8.00 },
      { nome: "Doce de Leite", preço: 8.00 },
    ],
    promocao: null,
    avaliacao: 4.6,
    numAvaliacoes: 60,
  },
  // Pizzas Vegetarianas
  {
    id: 6,
    nome: "Vegetariana Suprema",
    categoria: "Vegetarianas",
    preço: 47.00,
    imagem: validateUrl("https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"),
    descrição: "Pizza com brócolis, pimentão vermelho e amarelo, tomate cereja, muçarela e um toque de azeite de ervas.",
    ingredientes: ["molho de tomate", "brócolis", "pimentão vermelho", "pimentão amarelo", "tomate cereja", "muçarela", "azeite de ervas"],
    tamanhos: [
      { nome: "Pequena", preço: 37.00 },
      { nome: "Média", preço: 47.00 },
      { nome: "Grande", preço: 57.00 },
      { nome: "Família", preço: 67.00 },
    ],
    extrasDisponiveis: [
      { nome: "Azeitonas Verdes", preço: 5.00 },
      { nome: "Rúcula", preço: 6.00 },
      { nome: "Cogumelos Frescos", preço: 7.00 },
      { nome: "Queijo Vegano Extra", preço: 8.00 },
      { nome: "Alho Poró", preço: 6.00 },
    ],
    bordasDisponiveis: [
      { nome: "Tradicional", preço: 0.00 },
      { nome: "Catupiry", preço: 8.00 },
      { nome: "Cream Cheese", preço: 10.00 },
    ],
    promocao: null,
    avaliacao: 4.3,
    numAvaliacoes: 65,
  },
  {
    id: 7,
    nome: "Rúcula com Tomate Seco",
    categoria: "Vegetarianas",
    preço: 49.00,
    imagem: validateUrl("https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"),
    descrição: "Pizza leve com rúcula fresca, tomate seco, muçarela de búfala e parmesão, regada com azeite extra virgem.",
    ingredientes: ["molho de tomate", "rúcula", "tomate seco", "muçarela de búfala", "parmesão", "azeite extra virgem"],
    tamanhos: [
      { nome: "Pequena", preço: 39.00 },
      { nome: "Média", preço: 49.00 },
      { nome: "Grande", preço: 59.00 },
      { nome: "Família", preço: 69.00 },
    ],
    extrasDisponiveis: [
      { nome: "Azeitonas Pretas", preço: 5.00 },
      { nome: "Castanhas", preço: 7.00 },
      { nome: "Manjericão", preço: 4.00 },
      { nome: "Pesto de Manjericão", preço: 6.00 },
    ],
    bordasDisponiveis: [
      { nome: "Tradicional", preço: 0.00 },
      { nome: "Catupiry", preço: 8.00 },
      { nome: "Gorgonzola", preço: 10.00 },
    ],
    promocao: { ativo: true, precoPromocional: 44.00 },
    avaliacao: 4.4,
    numAvaliacoes: 70,
  },
  // Bebidas
  {
    id: 8,
    nome: "Coca-Cola",
    categoria: "Bebidas",
    preço: 12.00,
    imagem: validateUrl("https://images.unsplash.com/photo-1622483767028-3f66f32f1de7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"),
    descrição: "Refrigerante Coca-Cola gelado, perfeito para acompanhar sua pizza.",
    ingredientes: [],
    tamanhos: [
      { nome: "Lata 350ml", preço: 6.00 },
      { nome: "Garrafa 600ml", preço: 8.00 },
      { nome: "Garrafa 2L", preço: 12.00 },
    ],
    extrasDisponiveis: [
      { nome: "Gelo Extra", preço: 2.00 },
      { nome: "Limão", preço: 2.00 },
    ],
    bordasDisponiveis: [],
    promocao: null,
    avaliacao: 4.0,
    numAvaliacoes: 50,
  },
  {
    id: 9,
    nome: "Suco de Laranja Natural",
    categoria: "Bebidas",
    preço: 10.00,
    imagem: validateUrl("https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"),
    descrição: "Suco de laranja natural, feito na hora, refrescante e sem açúcar adicionado.",
    ingredientes: ["laranja"],
    tamanhos: [
      { nome: "Copo 300ml", preço: 8.00 },
      { nome: "Jarra 1L", preço: 18.00 },
    ],
    extrasDisponiveis: [
      { nome: "Gelo Extra", preço: 2.00 },
      { nome: "Açúcar", preço: 1.00 },
      { nome: "Hortelã", preço: 2.00 },
      { nome: "Morango", preço: 3.00 },
    ],
    bordasDisponiveis: [],
    promocao: { ativo: true, precoPromocional: 8.00 },
    avaliacao: 4.5,
    numAvaliacoes: 40,
  },
  {
    id: 10,
    nome: "Água com Gás",
    categoria: "Bebidas",
    preço: 6.00,
    imagem: validateUrl("https://images.unsplash.com/photo-1593050280773-2f5c12964d95?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"),
    descrição: "Água com gás gelada, ideal para acompanhar sua refeição.",
    ingredientes: [],
    tamanhos: [
      { nome: "Garrafa 500ml", preço: 6.00 },
      { nome: "Garrafa 1L", preço: 10.00 },
    ],
    extrasDisponiveis: [
      { nome: "Gelo Extra", preço: 2.00 },
      { nome: "Limão", preço: 2.00 },
      { nome: "Hortelã", preço: 2.00 },
    ],
    bordasDisponiveis: [],
    promocao: null,
    avaliacao: 4.0,
    numAvaliacoes: 30,
  },
  // Combos
  {
    id: 11,
    nome: "Combo Família",
    categoria: "Combos",
    preço: 110.00,
    imagem: validateUrl("https://images.unsplash.com/photo-1555072956-005b415031de?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"),
    descrição: "Perfeito para a família! Inclui duas pizzas grandes à sua escolha e uma Coca-Cola 2L.",
    itens: [1, 2, 8],
    tamanhos: [],
    extrasDisponiveis: [
      { nome: "Adicionar Sobremesa", preço: 15.00 },
      { nome: "Batata Frita Extra", preço: 12.00 },
      { nome: "Molho Extra", preço: 5.00 },
    ],
    bordasDisponiveis: [],
    promocao: { ativo: true, precoPromocional: 99.00 },
    avaliacao: 4.9,
    numAvaliacoes: 200,
  },
  {
    id: 12,
    nome: "Combo Doce e Salgado",
    categoria: "Combos",
    preço: 85.00,
    imagem: validateUrl("https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"),
    descrição: "Uma pizza salgada média, uma pizza doce média e um suco de laranja 1L para acompanhar.",
    itens: [2, 4, 9],
    tamanhos: [],
    extrasDisponiveis: [
      { nome: "Adicionar Sobremesa", preço: 15.00 },
      { nome: "Batata Frita Extra", preço: 12.00 },
      { nome: "Molho Extra", preço: 5.00 },
      { nome: "Chantilly Extra", preço: 7.00 },
    ],
    bordasDisponiveis: [],
    promocao: null,
    avaliacao: 4.7,
    numAvaliacoes: 150,
  },
  {
    id: 13,
    nome: "Combo Vegetariano",
    categoria: "Combos",
    preço: 90.00,
    imagem: validateUrl("https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"),
    descrição: "Duas pizzas vegetarianas médias e uma jarra de suco de laranja natural 1L.",
    itens: [6, 7, 9],
    tamanhos: [],
    extrasDisponiveis: [
      { nome: "Adicionar Sobremesa", preço: 15.00 },
      { nome: "Salada Extra", preço: 10.00 },
      { nome: "Molho Extra", preço: 5.00 },
    ],
    bordasDisponiveis: [],
    promocao: { ativo: true, precoPromocional: 80.00 },
    avaliacao: 4.6,
    numAvaliacoes: 90,
  },
];

// Função para validar URLs de imagens
function validateUrl(url) {
  try {
    new URL(url);
    return url;
  } catch (e) {
    console.error(`URL inválida: ${url}`);
    return "https://via.placeholder.com/300x200.png?text=Imagem+Indisponível";
  }
}

// Exporta o cardápio para uso em outros arquivos
window.cardapio = cardapio;ate, muçarela e manjericão fresco.",
    ingredientes: ["molho de tomate", "muçarela", "manjericão"],
    tamanhos: [
      { nome: "Pequena", preço: 35.00 },
      { nome: "Média", preço: 45.00 },
      { nome: "Grande", preço: 55.00 },
    ],
    extrasDisponiveis: [
      { nome: "Azeitonas", preço: 5.00 },
      { nome: "Parmesão Extra", preço: 7.00 },
    ],
    bordasDisponiveis: [
      { nome: "Tradicional", preço: 0.00 },
      { nome: "Catupiry", preço: 8.00 },
      { nome: "Cheddar", preço: 8.00 },
    ],
    promocao: { ativo: true, precoPromocional: 40.00 },
    avaliacao: 4.5,
    numAvaliacoes: 120,
  },
  {
    id: 2,
    nome: "Calabresa",
    categoria: "Salgadas",
    preço: 48.00,
    imagem: validateUrl("https://via.placeholder.com/300"),
    descrição: "Pizza com calabresa fatiada, cebola e muçarela derretida.",
    ingredientes: ["molho de tomate", "calabresa", "cebola", "muçarela"],
    tamanhos: [
      { nome: "Pequena", preço: 38.00 },
      { nome: "Média", preço: 48.00 },
      { nome: "Grande", preço: 58.00 },
    ],
    extrasDisponiveis: [
      { nome: "Orégano Extra", preço: 3.00 },
      { nome: "Azeitonas", preço: 5.00 },
    ],
    bordasDisponiveis: [
      { nome: "Tradicional", preço: 0.00 },
      { nome: "Catupiry", preço: 8.00 },
    ],
    promocao: null,
    avaliacao: 4.2,
    numAvaliacoes: 95,
  },
  // Pizzas Doces
  {
    id: 3,
    nome: "Chocolate com Morango",
    categoria: "Doces",
    preço: 50.00,
    imagem: validateUrl("https://via.placeholder.com/300"),
    descrição: "Pizza doce com chocolate derretido e morangos frescos.",
    ingredientes: ["chocolate", "morangos", "creme de leite"],
    tamanhos: [
      { nome: "Pequena", preço: 40.00 },
      { nome: "Média", preço: 50.00 },
      { nome: "Grande", preço: 60.00 },
    ],
    extrasDisponiveis: [
      { nome: "Granulado", preço: 4.00 },
      { nome: "Leite Condensado", preço: 6.00 },
    ],
    bordasDisponiveis: [],
    promocao: { ativo: true, precoPromocional: 45.00 },
    avaliacao: 4.8,
    numAvaliacoes: 80,
  },
  // Pizzas Vegetarianas
  {
    id: 4,
    nome: "Vegetariana",
    categoria: "Vegetarianas",
    preço: 47.00,
    imagem: validateUrl("https://via.placeholder.com/300"),
    descrição: "Pizza com brócolis, pimentão, tomate e muçarela.",
    ingredientes: ["molho de tomate", "brócolis", "pimentão", "tomate", "muçarela"],
    tamanhos: [
      { nome: "Pequena", preço: 37.00 },
      { nome: "Média", preço: 47.00 },
      { nome: "Grande", preço: 57.00 },
    ],
    extrasDisponiveis: [
      { nome: "Azeitonas", preço: 5.00 },
      { nome: "Rúcula", preço: 6.00 },
    ],
    bordasDisponiveis: [
      { nome: "Tradicional", preço: 0.00 },
      { nome: "Catupiry", preço: 8.00 },
    ],
    promocao: null,
    avaliacao: 4.3,
    numAvaliacoes: 65,
  },
  // Bebidas
  {
    id: 5,
    nome: "Coca-Cola 2L",
    categoria: "Bebidas",
    preço: 12.00,
    imagem: validateUrl("https://via.placeholder.com/300"),
    descrição: "Refrigerante Coca-Cola de 2 litros, bem gelado.",
    ingredientes: [],
    tamanhos: [
      { nome: "Padrão", preço: 12.00 },
    ],
    extrasDisponiveis: [],
    bordasDisponiveis: [],
    promocao: null,
    avaliacao: 4.0,
    numAvaliacoes: 50,
  },
  // Combos
  {
    id: 6,
    nome: "Combo Família",
    categoria: "Combos",
    preço: 90.00,
    imagem: validateUrl("https://via.placeholder.com/300"),
    descrição: "Duas pizzas grandes (Margherita e Calabresa) + Coca-Cola 2L.",
    itens: [1, 2, 5], // Referencia os IDs dos itens
    tamanhos: [
      { nome: "Padrão", preço: 90.00 },
    ],
    extrasDisponiveis: [],
    bordasDisponiveis: [],
    promocao: null,
    avaliacao: 4.7,
    numAvaliacoes: 30,
  },
  {
    id: 7,
    nome: "Combo Doce e Salgado",
    categoria: "Combos",
    preço: 85.00,
    imagem: validateUrl("https://via.placeholder.com/300"),
    descrição: "Pizza média Margherita + Pizza média Chocolate com Morango.",
    itens: [1, 3], // Referencia os IDs dos itens
    tamanhos: [
      { nome: "Padrão", preço: 85.00 },
    ],
    extrasDisponiveis: [],
    bordasDisponiveis: [],
    promocao: { ativo: true, precoPromocional: 80.00 },
    avaliacao: 4.6,
    numAvaliacoes: 25,
  },
];

/**
 * Valida uma URL.
 * @param {string} url - URL a ser validada.
 * @param {string} defaultUrl - URL padrão caso a validação falhe.
 * @returns {string} URL validada ou padrão.
 */
function validateUrl(url, defaultUrl = 'https://via.placeholder.com/300') {
  try {
    new URL(url);
    return url;
  } catch (e) {
    console.warn(`[Cardapio] URL de imagem inválida: ${url}. Usando URL padrão: ${defaultUrl}`);
    return defaultUrl;
  }
}

/**
 * Valida e corrige os itens do cardápio.
 * @param {Array} items - Lista de itens do cardápio.
 * @returns {Array} Lista de itens validada e corrigida.
 */
function validateCardapio(items) {
  return items.map(item => {
    item.id = typeof item.id === 'number' && item.id > 0 ? item.id : -1;
    item.nome = typeof item.nome === 'string' && item.nome.trim() ? item.nome.trim() : 'Item Sem Nome';
    item.categoria = typeof item.categoria === 'string' && item.categoria.trim() ? item.categoria.trim() : 'Outros';
    item.preço = typeof item.preço === 'number' && item.preço >= 0 ? item.preço : 0.00;
    item.imagem = validateUrl(item.imagem);
    item.descrição = typeof item.descrição === 'string' && item.descrição.trim() ? item.descrição.trim() : 'Sem descrição disponível.';
    item.ingredientes = Array.isArray(item.ingredientes) ? item.ingredientes : [];
    item.tamanhos = Array.isArray(item.tamanhos) && item.tamanhos.length > 0 ? item.tamanhos.map(tamanho => ({
      nome: typeof tamanho.nome === 'string' && tamanho.nome.trim() ? tamanho.nome.trim() : 'Padrão',
      preço: typeof tamanho.preço === 'number' && tamanho.preço >= 0 ? tamanho.preço : item.preço,
    })) : [{ nome: 'Padrão', preço: item.preço }];
    item.extrasDisponiveis = Array.isArray(item.extrasDisponiveis) ? item.extrasDisponiveis.map(extra => ({
      nome: typeof extra.nome === 'string' && extra.nome.trim() ? extra.nome.trim() : 'Extra Desconhecido',
      preço: typeof extra.preço === 'number' && extra.preço >= 0 ? extra.preço : 0.00,
    })) : [];
    item.bordasDisponiveis = Array.isArray(item.bordasDisponiveis) ? item.bordasDisponiveis.map(borda => ({
      nome: typeof borda.nome === 'string' && borda.nome.trim() ? borda.nome.trim() : 'Tradicional',
      preço: typeof borda.preço === 'number' && borda.preço >= 0 ? borda.preço : 0.00,
    })) : [];
    item.promocao = item.promocao && typeof item.promocao === 'object' ? {
      ativo: item.promocao.ativo === true,
      precoPromocional: typeof item.promocao.precoPromocional === 'number' && item.promocao.precoPromocional >= 0 && item.promocao.precoPromocional < item.preço ? item.promocao.precoPromocional : item.preço,
    } : null;
    item.avaliacao = typeof item.avaliacao === 'number' && item.avaliacao >= 0 && item.avaliacao <= 5 ? item.avaliacao : 0;
    item.numAvaliacoes = typeof item.numAvaliacoes === 'number' && item.numAvaliacoes >= 0 ? item.numAvaliacoes : 0;

    if (item.categoria === 'Combos') {
      item.itens = Array.isArray(item.itens) ? item.itens.filter(id => {
        const referencedItem = items.find(i => i.id === id);
        if (!referencedItem) {
          console.warn(`[Cardapio] Item com ID ${id} referenciado no combo "${item.nome}" não encontrado.`);
          return false;
        }
        return true;
      }) : [];
    }

    return item;
  }).filter(item => item.id !== -1);
}

// Exporta o cardápio validado
window.cardapio = validateCardapio(cardapio);
