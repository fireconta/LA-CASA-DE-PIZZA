window.cardapio = [
  {
    id: 1,
    nome: "Pizza Margherita",
    categoria: "Salgadas",
    preço: 45.00,
    imagem: "https://via.placeholder.com/300x200.png?text=Pizza+Margherita",
    descrição: "Pizza clássica com molho de tomate, muçarela e manjericão fresco.",
    ingredientes: ["Molho de tomate", "Muçarela", "Manjericão"],
    tamanhos: {
      "Pequena": 35.00,
      "Média": 45.00,
      "Grande": 55.00
    },
    extrasDisponiveis: {
      "Azeitonas": 5.00,
      "Rúcula": 6.00
    },
    bordasDisponiveis: {
      "Tradicional": 0.00,
      "Catupiry": 8.00
    },
    promocao: {
      ativo: true,
      precoPromocional: 40.00
    },
    avaliacao: 4.5,
    numAvaliacoes: 120
  },
  {
    id: 2,
    nome: "Pizza de Chocolate",
    categoria: "Doces",
    preço: 40.00,
    imagem: "https://via.placeholder.com/300x200.png?text=Pizza+Chocolate",
    descrição: "Pizza doce com chocolate derretido e morangos.",
    ingredientes: ["Chocolate", "Morangos"],
    tamanhos: {
      "Pequena": 30.00,
      "Média": 40.00,
      "Grande": 50.00
    },
    extrasDisponiveis: {
      "Granulado": 3.00,
      "Leite Condensado": 5.00
    },
    bordasDisponiveis: {
      "Chocolate": 8.00,
      "Doce de Leite": 8.00
    },
    promocao: null,
    avaliacao: 4.8,
    numAvaliacoes: 80
  },
  {
    id: 3,
    nome: "Combo Família",
    categoria: "Combos",
    preço: 120.00,
    imagem: "https://via.placeholder.com/300x200.png?text=Combo+Família",
    descrição: "Duas pizzas grandes e uma bebida 2L.",
    ingredientes: [],
    tamanhos: {},
    extrasDisponiveis: {},
    bordasDisponiveis: {},
    promocao: null,
    avaliacao: 4.7,
    numAvaliacoes: 50,
    itens: [1] // Referencia o ID da Pizza Margherita
  }
];