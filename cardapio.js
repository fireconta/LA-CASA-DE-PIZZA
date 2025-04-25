const cardapioInicial = [
  {
    id: "1",
    nome: "Margherita",
    descrição: "Molho de tomate, muçarela e manjericão fresco.",
    preço: 35.00,
    categoria: "Salgadas",
    emPromoção: false,
    imagem: "https://via.placeholder.com/300x150.png?text=Margherita"
  },
  {
    id: "2",
    nome: "Calabresa",
    descrição: "Molho de tomate, muçarela, calabresa e cebola.",
    preço: 38.00,
    categoria: "Salgadas",
    emPromoção: true,
    imagem: "https://via.placeholder.com/300x150.png?text=Calabresa"
  },
  {
    id: "3",
    nome: "Chocolate com Morango",
    descrição: "Chocolate derretido e morangos frescos.",
    preço: 40.00,
    categoria: "Doces",
    emPromoção: false,
    imagem: "https://via.placeholder.com/300x150.png?text=Chocolate+Morango"
  },
  {
    id: "4",
    nome: "Vegetariana",
    descrição: "Molho de tomate, muçarela, brócolis, milho e tomate.",
    preço: 37.00,
    categoria: "Vegetarianas",
    emPromoção: false,
    imagem: "https://via.placeholder.com/300x150.png?text=Vegetariana"
  },
  {
    id: "5",
    nome: "Quatro Queijos",
    descrição: "Molho de tomate, muçarela, parmesão, gorgonzola e catupiry.",
    preço: 42.00,
    categoria: "Especiais",
    emPromoção: true,
    imagem: "https://via.placeholder.com/300x150.png?text=Quatro+Queijos"
  }
];

// Carrega o cardápio do localStorage ou usa o inicial
const cardapio = JSON.parse(localStorage.getItem('cardapio')) || cardapioInicial;

// Salva o cardápio inicial no localStorage se ainda não existir
if (!localStorage.getItem('cardapio')) {
  localStorage.setItem('cardapio', JSON.stringify(cardapioInicial));
}

// Função para salvar o cardápio no localStorage (usada pelo admin.html)
function salvarCardapio(novoCardapio) {
  localStorage.setItem('cardapio', JSON.stringify(novoCardapio));
}