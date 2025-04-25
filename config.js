const config = {
  // Credenciais de administrador
  adminUsername: "admin",
  adminPassword: "senha123",

  // URL da API do Sheety
  sheetyBaseUrl: 'https://api.sheety.co/48c651da8438926cad73dd17491b4695/laCasaDePizzasDb',

  // Informações da pizzaria
  nomePizzaria: "La Casa de Pizzas",
  logoUrl: "https://i.imgur.com/3wbh5W3.jpeg",
  telefone: "(62) 99577-1104",
  whatsapp: "(62) 99577-1104",
  instagram: "@lacasadepizza2025",
  whatsappLink: "https://api.whatsapp.com/send?phone=5562995771104&text=Olá,%20gostaria%20de%20fazer%20um%20pedido!",

  // Configurações visuais
  corPrimaria: "#FF4500",    // Laranja queimado (mantido do primeiro e segundo blocos)
  corSecundaria: "#FFD700",  // Amarelo ouro (atualizado do primeiro bloco, mais adequado que o #FFA500 do segundo)
  corFundo: "#FFF8E7",       // Creme claro (mantido de ambos os blocos)
  corTexto: "#2D2D2D",       // Cinza escuro (mantido de ambos os blocos)
  corDestaque: "#228B22",    // Verde para promoções (adicionado do primeiro bloco)

  // Outras configurações
  categoriasPizzas: [
    "Salgadas",
    "Doces",
    "Vegetarianas",
    "Especiais"              // Adicionada a categoria "Especiais" do primeiro bloco
  ],
  imagemPadraoPizza: "https://via.placeholder.com/300x150.png?text=Pizza+Padrão", // Mantida do primeiro bloco

  // Configurações de pagamento
  pixChave: "pix@lacasadepizzas.com",
  linkCartao: "https://exemplo.com/pagamento-cartao"
};
