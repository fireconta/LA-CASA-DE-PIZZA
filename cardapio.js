window.cardapio = [
  // Pizzas Salgadas
  {
    id: 1,
    nome: "Margherita",
    categoria: "Salgadas",
    preço: 45.00,
    imagem: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=300",
    descrição: "Pizza clássica com molho de tomate artesanal, muçarela de búfala e manjericão fresco colhido na hora.",
    ingredientes: ["molho de tomate artesanal", "muçarela de búfala", "manjericão fresco", "azeite extra virgem"],
    tamanhos: {
      "Pequena": 35.00,
      "Média": 45.00,
      "Grande": 55.00,
      "Família": 65.00
    },
    extrasDisponiveis: {
      "Azeitonas Pretas": 5.00,
      "Parmesão Ralado": 7.00,
      "Rúcula Fresca": 6.00,
      "Tomate Seco": 8.00
    },
    bordasDisponiveis: {
      "Tradicional": 0.00,
      "Catupiry": 8.00,
      "Cheddar Cremoso": 8.00,
      "Gorgonzola": 10.00
    },
    promocao: { ativo: true, precoPromocional: 40.00 },
    avaliacao: 4.5,
    numAvaliacoes: 120
  },
  {
    id: 2,
    nome: "Calabresa",
    categoria: "Salgadas",
    preço: 48.00,
    imagem: "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=300",
    descrição: "Pizza tradicional com calabresa artesanal fatiada, cebola caramelizada e muçarela derretida, finalizada com orégano.",
    ingredientes: ["molho de tomate", "calabresa artesanal", "cebola caramelizada", "muçarela", "orégano"],
    tamanhos: {
      "Pequena": 38.00,
      "Média": 48.00,
      "Grande": 58.00,
      "Família": 68.00
    },
    extrasDisponiveis: {
      "Orégano Extra": 3.00,
      "Azeitonas Verdes": 5.00,
      "Pimenta Calabresa": 4.00,
      "Cebola Extra": 5.00,
      "Bacon Crocante": 7.00
    },
    bordasDisponiveis: {
      "Tradicional": 0.00,
      "Catupiry": 8.00,
      "Parmesão": 9.00,
      "Cream Cheese": 10.00
    },
    promocao: null,
    avaliacao: 4.2,
    numAvaliacoes: 95
  },
  {
    id: 3,
    nome: "Quatro Queijos",
    categoria: "Salgadas",
    preço: 52.00,
    imagem: "https://images.pexels.com/photos/367915/pexels-photo-367915.jpeg?auto=compress&cs=tinysrgb&w=300",
    descrição: "Pizza cremosa com uma combinação de muçarela, gorgonzola, parmesão e catupiry, finalizada com um toque de azeite trufado.",
    ingredientes: ["molho de tomate", "muçarela", "gorgonzola", "parmesão", "catupiry", "azeite trufado"],
    tamanhos: {
      "Pequena": 42.00,
      "Média": 52.00,
      "Grande": 62.00,
      "Família": 72.00
    },
    extrasDisponiveis: {
      "Manjericão": 4.00,
      "Tomate Seco": 8.00,
      "Azeitonas Pretas": 5.00,
      "Mel": 6.00
    },
    bordasDisponiveis: {
      "Tradicional": 0.00,
      "Catupiry": 8.00,
      "Cheddar": 8.00,
      "Gorgonzola": 10.00
    },
    promocao: { ativo: true, precoPromocional: 48.00 },
    avaliacao: 4.7,
    numAvaliacoes: 150
  },
  // Pizzas Doces
  {
    id: 4,
    nome: "Chocolate com Morango",
    categoria: "Doces",
    preço: 50.00,
    imagem: "https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=300",
    descrição: "Pizza doce com chocolate belga derretido, morangos frescos e um toque de açúcar de confeiteiro.",
    ingredientes: ["chocolate belga", "morangos frescos", "creme de leite", "açúcar de confeiteiro"],
    tamanhos: {
      "Pequena": 40.00,
      "Média": 50.00,
      "Grande": 60.00
    },
    extrasDisponiveis: {
      "Granulado Colorido": 4.00,
      "Leite Condensado": 6.00,
      "Chantilly": 7.00,
      "Amêndoas Laminadas": 8.00,
      "Calda de Caramelo": 6.00
    },
    bordasDisponiveis: {
      "Chocolate": 8.00,
      "Doce de Leite": 8.00
    },
    promocao: { ativo: true, precoPromocional: 45.00 },
    avaliacao: 4.8,
    numAvaliacoes: 80
  },
  {
    id: 5,
    nome: "Banana com Canela",
    categoria: "Doces",
    preço: 48.00,
    imagem: "https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg?auto=compress&cs=tinysrgb&w=300",
    descrição: "Pizza doce com banana caramelizada, canela em pó e uma generosa camada de doce de leite.",
    ingredientes: ["banana caramelizada", "canela em pó", "doce de leite", "massa doce"],
    tamanhos: {
      "Pequena": 38.00,
      "Média": 48.00,
      "Grande": 58.00
    },
    extrasDisponiveis: {
      "Leite Condensado": 6.00,
      "Castanha de Caju": 7.00,
      "Chantilly": 7.00,
      "Calda de Chocolate": 6.00
    },
    bordasDisponiveis: {
      "Chocolate": 8.00,
      "Doce de Leite": 8.00
    },
    promocao: null,
    avaliacao: 4.6,
    numAvaliacoes: 60
  },
  // Pizzas Vegetarianas
  {
    id: 6,
    nome: "Vegetariana Suprema",
    categoria: "Vegetarianas",
    preço: 47.00,
    imagem: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=300",
    descrição: "Pizza com brócolis, pimentão vermelho e amarelo, tomate cereja, muçarela e um toque de azeite de ervas.",
    ingredientes: ["molho de tomate", "brócolis", "pimentão vermelho", "pimentão amarelo", "tomate cereja", "muçarela", "azeite de ervas"],
    tamanhos: {
      "Pequena": 37.00,
      "Média": 47.00,
      "Grande": 57.00,
      "Família": 67.00
    },
    extrasDisponiveis: {
      "Azeitonas Verdes": 5.00,
      "Rúcula": 6.00,
      "Cogumelos Frescos": 7.00,
      "Queijo Vegano Extra": 8.00,
      "Alho Poró": 6.00
    },
    bordasDisponiveis: {
      "Tradicional": 0.00,
      "Catupiry": 8.00,
      "Cream Cheese": 10.00
    },
    promocao: null,
    avaliacao: 4.3,
    numAvaliacoes: 65
  },
  {
    id: 7,
    nome: "Rúcula com Tomate Seco",
    categoria: "Vegetarianas",
    preço: 49.00,
    imagem: "https://images.pexels.com/photos/5946625/pexels-photo-5946625.jpeg?auto=compress&cs=tinysrgb&w=300",
    descrição: "Pizza leve com rúcula fresca, tomate seco, muçarela de búfala e parmesão, regada com azeite extra virgem.",
    ingredientes: ["molho de tomate", "rúcula", "tomate seco", "muçarela de búfala", "parmesão", "azeite extra virgem"],
    tamanhos: {
      "Pequena": 39.00,
      "Média": 49.00,
      "Grande": 59.00,
      "Família": 69.00
    },
    extrasDisponiveis: {
      "Azeitonas Pretas": 5.00,
      "Castanhas": 7.00,
      "Manjericão": 4.00,
      "Pesto de Manjericão": 6.00
    },
    bordasDisponiveis: {
      "Tradicional": 0.00,
      "Catupiry": 8.00,
      "Gorgonzola": 10.00
    },
    promocao: { ativo: true, precoPromocional: 44.00 },
    avaliacao: 4.4,
    numAvaliacoes: 70
  },
  // Bebidas
  {
    id: 8,
    nome: "Coca-Cola",
    categoria: "Bebidas",
    preço: 12.00,
    imagem: "https://images.pexels.com/photos/4119857/pexels-photo-4119857.jpeg?auto=compress&cs=tinysrgb&w=300",
    descrição: "Refrigerante Coca-Cola gelado, perfeito para acompanhar sua pizza.",
    ingredientes: [],
    tamanhos: {
      "Lata 350ml": 6.00,
      "Garrafa 600ml": 8.00,
      "Garrafa 2L": 12.00
    },
    extrasDisponiveis: {
      "Gelo Extra": 2.00,
      "Limão": 2.00
    },
    bordasDisponiveis: {},
    promocao: null,
    avaliacao: 4.0,
    numAvaliacoes: 50
  },
  {
    id: 9,
    nome: "Suco de Laranja Natural",
    categoria: "Bebidas",
    preço: 10.00,
    imagem: "https://images.pexels.com/photos/161588/pexels-photo-161588.jpeg?auto=compress&cs=tinysrgb&w=300",
    descrição: "Suco de laranja natural, feito na hora, refrescante e sem açúcar adicionado.",
    ingredientes: ["laranja"],
    tamanhos: {
      "Copo 300ml": 8.00,
      "Jarra 1L": 18.00
    },
    extrasDisponiveis: {
      "Gelo Extra": 2.00,
      "Açúcar": 1.00,
      "Hortelã": 2.00,
      "Morango": 3.00
    },
    bordasDisponiveis: {},
    promocao: { ativo: true, precoPromocional: 8.00 },
    avaliacao: 4.5,
    numAvaliacoes: 40
  },
  {
    id: 10,
    nome: "Água com Gás",
    categoria: "Bebidas",
    preço: 6.00,
    imagem: "https://images.pexels.com/photos/1446476/pexels-photo-1446476.jpeg?auto=compress&cs=tinysrgb&w=300",
    descrição: "Água com gás gelada, ideal para acompanhar sua refeição.",
    ingredientes: [],
    tamanhos: {
      "Garrafa 500ml": 6.00,
      "Garrafa 1L": 10.00
    },
    extrasDisponiveis: {
      "Gelo Extra": 2.00,
      "Limão": 2.00,
      "Hortelã": 2.00
    },
    bordasDisponiveis: {},
    promocao: null,
    avaliacao: 4.0,
    numAvaliacoes: 30
  },
  // Combos
  {
    id: 11,
    nome: "Combo Família",
    categoria: "Combos",
    preço: 110.00,
    imagem: "https://images.pexels.com/photos/2232/pexels-photo-2232.jpeg?auto=compress&cs=tinysrgb&w=300",
    descrição: "Perfeito para a família! Inclui duas pizzas grandes à sua escolha e uma Coca-Cola 2L.",
    itens: [1, 2, 8],
    tamanhos: {},
    extrasDisponiveis: {
      "Adicionar Sobremesa": 15.00,
      "Batata Frita Extra": 12.00,
      "Molho Extra": 5.00
    },
    bordasDisponiveis: {},
    promocao: { ativo: true, precoPromocional: 99.00 },
    avaliacao: 4.9,
    numAvaliacoes: 200
  },
  {
    id: 12,
    nome: "Combo Doce e Salgado",
    categoria: "Combos",
    preço: 85.00,
    imagem: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=300",
    descrição: "Uma pizza salgada média, uma pizza doce média e um suco de laranja 1L para acompanhar.",
    itens: [2, 4, 9],
    tamanhos: {},
    extrasDisponiveis: {
      "Adicionar Sobremesa": 15.00,
      "Batata Frita Extra": 12.00,
      "Molho Extra": 5.00,
      "Chantilly Extra": 7.00
    },
    bordasDisponiveis: {},
    promocao: null,
    avaliacao: 4.7,
    numAvaliacoes: 150
  },
  {
    id: 13,
    nome: "Combo Vegetariano",
    categoria: "Combos",
    preço: 90.00,
    imagem: "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=300",
    descrição: "Duas pizzas vegetarianas médias e uma jarra de suco de laranja natural 1L.",
    itens: [6, 7, 9],
    tamanhos: {},
    extrasDisponiveis: {
      "Adicionar Sobremesa": 15.00,
      "Salada Extra": 10.00,
      "Molho Extra": 5.00
    },
    bordasDisponiveis: {},
    promocao: { ativo: true, precoPromocional: 80.00 },
    avaliacao: 4.6,
    numAvaliacoes: 90
  }
];
