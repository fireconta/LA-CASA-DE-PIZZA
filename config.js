const config = {
  googleSheetsApiUrl: "https://script.google.com/macros/s/<SEU_ID>/exec", // Substitua pelo URL do seu Google Apps Script
  numeroWhatsApp: "5511999999999",
  logoUrl: "https://i.imgur.com/ANag4EQ.png",
  imagemPadraoPizza: "https://via.placeholder.com/200x200.png?text=Pizza", // Imagem padrão para pizzas sem foto
  nomePizzaria: "La Casa de Pizza's",
  contatoFooter: "(11) 99999-9999",
  corPrimaria: "#DC2626", // Vermelho
  corSecundaria: "#FBBF24", // Amarelo
  corFundo: "#F3F4F6", // Cinza claro
  corTexto: "#1F2937", // Cinza escuro
  corFundoEscuro: "#1F2937", // Fundo modo escuro
  corTextoEscuro: "#F3F4F6", // Texto modo escuro
  redesSociais: {
    instagram: "https://instagram.com/lacasadepizzas",
    facebook: "https://facebook.com/lacasadepizzas",
    whatsapp: "https://wa.me/5511999999999"
  },
  temaTemporada: {
    ativado: false, // Ative para temas sazonais (ex.: Natal)
    corFundo: "#FF0000", // Vermelho Natal
    corTexto: "#FFFFFF", // Branco
    imagemFundo: "https://example.com/natal-bg.jpg" // Imagem de fundo sazonal
  },
  categoriasPizzas: ["Salgadas", "Doces"], // Para filtro no cardápio
  ultimaAtualizacao: "2025-04-24T00:00:00Z" // Para controle de cache
};