const config = {
  // Credenciais de administrador
  adminUsername: "admin",
  adminPassword: "senha123",

  // URL da API (simulada, substitua pela URL real do Google Sheets ou outra API)
  googleSheetsApiUrl: "https://api.exemplo.com/sheets",

  // Informações da pizzaria
  nomePizzaria: "La Casa de Pizzas",
  logoUrl: "https://i.imgur.com/3wbh5W3.jpeg",
  telefone: "(62) 99577-1104",
  whatsapp: "(62) 99577-1104",
  instagram: "@lacasadepizza2025",
  whatsappLink: "https://api.whatsapp.com/send?phone=5562995771104&text=Olá,%20gostaria%20de%20fazer%20um%20pedido!",

  // Configurações visuais
  corPrimaria: "#FF4500",  // Laranja queimado (inspirado em pizza)
  corSecundaria: "#FFD700", // Amarelo ouro para destaques
  corFundo: "#FFF8E7",     // Creme claro para um toque acolhedor
  corTexto: "#2D2D2D",     // Cinza escuro para contraste
  corDestaque: "#228B22",  // Verde para promoções

  // Outras configurações
  categoriasPizzas: [
    "Salgadas",
    "Doces",
    "Vegetarianas",
    "Especiais"
  ],
  imagemPadraoPizza: "https://via.placeholder.com/300x150.png?text=Pizza+Padrão",

  // Configurações de pagamento (simuladas)
  pixChave: "pix@lacasadepizzas.com",
  linkCartao: "https://exemplo.com/pagamento-cartao"
};