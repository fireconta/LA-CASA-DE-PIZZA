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
    descrição: "Pizza clássica com molho de tomate, muçarela e manjericão fresco.",
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