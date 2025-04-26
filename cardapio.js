/**
 * Arquivo de dados do cardápio para a pizzaria "La Casa de Pizzas".
 * Contém a lista inicial de itens do cardápio e funções para validação e carregamento.
 * Os dados são sincronizados com o localStorage para persistência.
 */

/**
 * Estrutura de um item do cardápio:
 * @typedef {Object} CardapioItem
 * @property {number} id - Identificador único do item (ex.: 1)
 * @property {string} nome - Nome do item (ex.: "Pizza Margherita")
 * @property {string} categoria - Categoria do item (ex.: "Salgadas", "Doces", "Vegetarianas", "Bebidas", "Combos")
 * @property {number} preço - Preço base do item em reais (ex.: 29.90)
 * @property {string} imagem - URL da imagem do item (ex.: "https://example.com/pizza.jpg")
 * @property {string} descrição - Descrição do item (ex.: "Pizza clássica com molho de tomate, muçarela e manjericão")
 * @property {string} ingredientes - Ingredientes separados por vírgula (ex.: "tomate, muçarela, manjericão")
 * @property {Object} tamanhos - Objeto com tamanhos e preços adicionais (ex.: { "P": 20.00, "M": 29.90, "G": 39.90 })
 * @property {Object} extrasDisponiveis - Objeto com extras e preços adicionais (ex.: { "Azeitonas": 3.00, "Chantilly": 5.00 })
 * @property {number|null} avaliacao - Avaliação média do item (ex.: 4.5, ou null se não avaliado)
 * @property {number} numAvaliacoes - Número de avaliações (ex.: 10)
 */

/**
 * Valida um item do cardápio para garantir consistência.
 * @param {CardapioItem} item - Item a ser validado
 * @returns {boolean} - True se o item for válido, false caso contrário
 */
function validateCardapioItem(item) {
  // Verifica campos obrigatórios
  if (!item.id || typeof item.id !== 'number') {
    console.error("Item inválido: ID deve ser um número.", item);
    return false;
  }
  if (!item.nome || typeof item.nome !== 'string') {
    console.error("Item inválido: Nome deve ser uma string.", item);
    return false;
  }
  if (!item.categoria || !["Salgadas", "Doces", "Vegetarianas", "Bebidas", "Combos"].includes(item.categoria)) {
    console.error("Item inválido: Categoria inválida.", item);
    return false;
  }
  if (typeof item.preço !== 'number' || item.preço < 0) {
    console.error("Item inválido: Preço deve ser um número positivo.", item);
    return false;
  }
  if (!item.imagem || !/\.(jpeg|jpg|gif|png)$/i.test(item.imagem)) {
    console.error("Item inválido: Imagem deve ser uma URL válida (jpeg, jpg, gif, png).", item);
    return false;
  }
  if (!item.descrição || typeof item.descrição !== 'string') {
    console.error("Item inválido: Descrição deve ser uma string.", item);
    return false;
  }
  if (item.ingredientes && typeof item.ingredientes !== 'string') {
    console.error("Item inválido: Ingredientes devem ser uma string.", item);
    return false;
  }
  if (item.tamanhos) {
    if (typeof item.tamanhos !== 'object') {
      console.error("Item inválido: Tamanhos deve ser um objeto.", item);
      return false;
    }
    for (let [size, price] of Object.entries(item.tamanhos)) {
      if (typeof size !== 'string' || typeof price !== 'number' || price < 0) {
        console.error("Item inválido: Tamanho ou preço inválido.", item);
        return false;
      }
    }
  }
  if (item.extrasDisponiveis) {
    if (typeof item.extrasDisponiveis !== 'object') {
      console.error("Item inválido: ExtrasDisponiveis deve ser um objeto.", item);
      return false;
    }
    for (let [extra, price] of Object.entries(item.extrasDisponiveis)) {
      if (typeof extra !== 'string' || typeof price !== 'number' || price < 0) {
        console.error("Item inválido: Extra ou preço inválido.", item);
        return false;
      }
    }
  }
  if (item.avaliacao !== null && (typeof item.avaliacao !== 'number' || item.avaliacao < 0 || item.avaliacao > 5)) {
    console.error("Item inválido: Avaliação deve ser um número entre 0 e 5 ou null.", item);
    return false;
  }
  if (typeof item.numAvaliacoes !== 'number' || item.numAvaliacoes < 0) {
    console.error("Item inválido: NumAvaliacoes deve ser um número não negativo.", item);
    return false;
  }
  return true;
}

/**
 * Valida o cardápio completo.
 * @param {CardapioItem[]} cardapio - Lista de itens do cardápio
 * @returns {CardapioItem[]} - Cardápio validado
 */
function validateCardapio(cardapio) {
  if (!Array.isArray(cardapio)) {
    console.error("Cardápio deve ser um array.");
    return [];
  }

  const validCardapio = cardapio.filter(item => validateCardapioItem(item));
  if (validCardapio.length !== cardapio.length) {
    console.warn("Alguns itens do cardápio foram descartados por serem inválidos.");
  }

  return validCardapio;
}

// Cardápio inicial
const initialCardapio = [
  {
    id: 1,
    nome: "Pizza Margherita",
    categoria: "Salgadas",
    preço: 29.90,
    imagem: "[invalid url, do not cite]
    descrição: "Pizza clássica com molho de tomate, muçarela e manjericão.",
    ingredientes: "tomate, muçarela, manjericão",
    tamanhos: { "P": 20.00, "M": 29.90, "G": 39.90 },
    extrasDisponiveis: { "Azeitonas": 3.00, "Orégano Extra": 1.50 },
    avaliacao: 4.5,
    numAvaliacoes: 10
  },
  {
    id: 2,
    nome: "Pizza Chocolate",
    categoria: "Doces",
    preço: 32.00,
    imagem: "[invalid url, do not cite]
    descrição: "Pizza doce com chocolate derretido e morangos.",
    ingredientes: "chocolate, morangos",
    tamanhos: { "P": 22.00, "M": 32.00, "G": 42.00 },
    extrasDisponiveis: { "Chantilly": 5.00, "Granulado": 2.00 },
    avaliacao: null,
    numAvaliacoes: 0
  },
  {
    id: 3,
    nome: "Pizza Vegetariana",
    categoria: "Vegetarianas",
    preço: 28.50,
    imagem: "[invalid url, do not cite]
    descrição: "Pizza com vegetais frescos e queijo vegano.",
    ingredientes: "brócolis, cenoura, queijo vegano",
    tamanhos: { "P": 19.00, "M": 28.50, "G": 38.00 },
    extrasDisponiveis: { "Azeite de Oliva": 2.00 },
    avaliacao: 4.0,
    numAvaliacoes: 5
  },
  {
    id: 4,
    nome: "Coca-Cola 2L",
    categoria: "Bebidas",
    preço: 8.00,
    imagem: "[invalid url, do not cite]
    descrição: "Refrigerante Coca-Cola 2 litros.",
    ingredientes: "",
    tamanhos: {},
    extrasDisponiveis: {},
    avaliacao: null,
    numAvaliacoes: 0
  },
  {
    id: 5,
    nome: "Combo Família",
    categoria: "Combos",
    preço: 59.90,
    imagem: "[invalid url, do not cite]
    descrição: "Pizza grande salgada, pizza média doce e 2L de refrigerante.",
    ingredientes: "pizza salgada, pizza doce, refrigerante",
    tamanhos: {},
    extrasDisponiveis: { "Borda Recheada": 10.00 },
    avaliacao: 4.8,
    numAvaliacoes: 15
  }
];

// Carrega o cardápio do localStorage ou usa o inicial
let cardapio = [];
try {
  const storedData = localStorage.getItem("cardapioData");
  if (storedData) {
    cardapio = validateCardapio(JSON.parse(storedData));
  }
  if (!cardapio.length) {
    cardapio = validateCardapio(initialCardapio);
    localStorage.setItem("cardapioData", JSON.stringify(cardapio));
  }
} catch (err) {
  console.error("Erro ao carregar o cardápio do localStorage:", err);
  cardapio = validateCardapio(initialCardapio);
  localStorage.setItem("cardapioData", JSON.stringify(cardapio));
}

// Exporta o cardápio para uso global
window.cardapio = cardapio;