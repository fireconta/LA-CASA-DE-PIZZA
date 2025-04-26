/**
 * Configurações globais da pizzaria.
 * Define as configurações usadas pelo projeto, como cores, nome da pizzaria, logo e links sociais.
 */
const config = {
  // Cores do tema (em formato hexadecimal)
  primaryColor: validateColor('#FF4500'), // Cor primária (laranja)
  secondaryColor: validateColor('#FFD700'), // Cor secundária (amarelo)
  backgroundColor: validateColor('#FFF8E7'), // Cor de fundo (creme claro)
  textColor: validateColor('#2D2D2D'), // Cor do texto (cinza escuro)

  // Informações da pizzaria
  pizzariaName: validateString('La Casa de Pizzas', 'Nome da pizzaria'), // Nome da pizzaria
  logoUrl: validateUrl('https://imgur.com/a/ANag4EQ.jpeg', 'URL do logo'), // URL do logo

  // Links de contato e redes sociais
  whatsappNumber: validatePhone('(62) 99577-1104'), // Número de WhatsApp
  whatsappLink: validateUrl('https://api.whatsapp.com/send?phone=5562995771104', 'Link do WhatsApp'),
  instagramHandle: validateString('@lacasadepizza2025', 'Nome do Instagram'), // Nome do Instagram (com @)
  instagramUrl: validateUrl('https://instagram.com/lacasadepizza2025', 'URL do Instagram'), // URL do Instagram

  // Configurações administrativas
  adminPassword: validateString('admin123', 'Senha do administrador'), // Senha padrão para acesso ao admin
};

/**
 * Valida uma cor no formato hexadecimal.
 * @param {string} color - Cor a ser validada.
 * @param {string} defaultColor - Cor padrão caso a validação falhe.
 * @returns {string} Cor validada ou padrão.
 */
function validateColor(color, defaultColor = '#000000') {
  const hexPattern = /^#([0-9A-F]{3}|[0-9A-F]{6})$/i;
  return typeof color === 'string' && hexPattern.test(color) ? color : defaultColor;
}

/**
 * Valida uma string não vazia.
 * @param {string} value - Valor a ser validado.
 * @param {string} fieldName - Nome do campo para mensagem de erro.
 * @param {string} defaultValue - Valor padrão caso a validação falhe.
 * @returns {string} String validada ou padrão.
 */
function validateString(value, fieldName, defaultValue = '') {
  if (typeof value !== 'string' || value.trim() === '') {
    console.warn(`[Config] ${fieldName} inválido. Usando valor padrão: ${defaultValue}`);
    return defaultValue;
  }
  return value.trim();
}

/**
 * Valida uma URL.
 * @param {string} url - URL a ser validada.
 * @param {string} fieldName - Nome do campo para mensagem de erro.
 * @param {string} defaultUrl - URL padrão caso a validação falhe.
 * @returns {string} URL validada ou padrão.
 */
function validateUrl(url, fieldName, defaultUrl = '#') {
  try {
    new URL(url);
    return url;
  } catch (e) {
    console.warn(`[Config] ${fieldName} inválido: ${url}. Usando valor padrão: ${defaultUrl}`);
    return defaultUrl;
  }
}

/**
 * Valida um número de telefone no formato (XX) XXXXX-XXXX.
 * @param {string} phone - Número de telefone a ser validado.
 * @param {string} defaultPhone - Número padrão caso a validação falhe.
 * @returns {string} Número validado ou padrão.
 */
function validatePhone(phone, defaultPhone = 'Não informado') {
  const phonePattern = /^\(\d{2}\)\s\d{5}-\d{4}$/;
  return typeof phone === 'string' && phonePattern.test(phone) ? phone : defaultPhone;
}

// Exporta as configurações para uso global
window.config = config;
