const config = {
  // Credenciais de administrador
  adminUsername: "admin",
  adminPassword: "senha123",

  // URL da API (substitua pelo seu Google Apps Script URL)
  googleSheetsApiUrl: "https://script.google.com/macros/s/<SEU_ID>/exec",

  // Configurações visuais
  nomePizzaria: "La Casa de Pizza's",
  logoUrl: "https://i.imgur.com/ANag4EQ",
  imagemPadraoPizza: "https://via.placeholder.com/200x200.png?text=Pizza",
  corPrimaria: "#DC2626",      // Vermelho
  corSecundaria: "#FBBF24",    // Amarelo
  corFundo: "#F3F4F6",         // Cinza claro
  corTexto: "#1F2937",         // Cinza escuro
  corFundoEscuro: "#1F2937",   // Fundo modo escuro
  corTextoEscuro: "#F3F4F6",   // Texto modo escuro

  // Contato e redes sociais
  numeroWhatsApp: "5511999999999",
  contatoFooter: "(11) 99999-9999",
  redesSociais: {
    instagram: "https://instagram.com/lacasadepizzas",
    facebook: "https://facebook.com/lacasadepizzas",
    whatsapp: "https://wa.me/5511999999999"
  },

  // Temas sazonais
  temaTemporada: {
    ativado: false,
    corFundo: "#FF0000",
    corTexto: "#FFFFFF",
    imagemFundo: "https://example.com/natal-bg.jpg"
  },

  // Categorias para filtro no cardápio
  categoriasPizzas: ["Salgadas", "Doces"],

  // Controle de cache
  ultimaAtualizacao: "2025-04-24T00:00:00Z"
};
