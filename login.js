/**
 * Gerenciamento de autenticação de usuários.
 * Contém funções para registro, login, logout e validação de usuários.
 */

/**
 * Verifica se o localStorage está disponível.
 * @returns {boolean} Verdadeiro se disponível, falso caso contrário.
 */
const storageAvailable = () => {
  try {
    const test = '__storage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    console.error('[Login] localStorage não está disponível.');
    return false;
  }
};

/**
 * Gera um hash básico de uma string (para fins educacionais).
 * @param {string} str - String a ser hasheada.
 * @returns {string} Hash da string.
 */
function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash.toString(16);
}

/**
 * Valida um nome de usuário.
 * @param {string} nome - Nome a ser validado.
 * @returns {Object} Resultado da validação.
 */
function validateNome(nome) {
  if (typeof nome !== 'string' || nome.trim().length < 3 || nome.trim().length > 20) {
    return { sucesso: false, mensagem: 'O nome deve ter entre 3 e 20 caracteres.' };
  }
  const nomePattern = /^[a-zA-Z\s]+$/;
  if (!nomePattern.test(nome.trim())) {
    return { sucesso: false, mensagem: 'O nome deve conter apenas letras e espaços.' };
  }
  return { sucesso: true, mensagem: '' };
}

/**
 * Valida uma senha.
 * @param {string} senha - Senha a ser validada.
 * @returns {Object} Resultado da validação.
 */
function validateSenha(senha) {
  if (typeof senha !== 'string' || senha.length < 6 || senha.length > 20) {
    return { sucesso: false, mensagem: 'A senha deve ter entre 6 e 20 caracteres.' };
  }
  return { sucesso: true, mensagem: '' };
}

/**
 * Adiciona um novo usuário.
 * @param {string} nome - Nome do usuário.
 * @param {string} senha - Senha do usuário.
 * @returns {Object} Resultado da operação.
 */
function adicionarUsuario(nome, senha) {
  if (!storageAvailable()) {
    return { sucesso: false, mensagem: 'Armazenamento local não disponível.' };
  }

  const nomeValidation = validateNome(nome);
  if (!nomeValidation.sucesso) return nomeValidation;

  const senhaValidation = validateSenha(senha);
  if (!senhaValidation.sucesso) return senhaValidation;

  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  if (usuarios.some(user => user.nome.toLowerCase() === nome.trim().toLowerCase())) {
    return { sucesso: false, mensagem: 'Usuário já existe.' };
  }

  usuarios.push({ nome: nome.trim(), senha: simpleHash(senha) });
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  return { sucesso: true, mensagem: 'Usuário registrado com sucesso!' };
}

/**
 * Verifica o login de um usuário.
 * @param {string} nome - Nome do usuário.
 * @param {string} senha - Senha do usuário.
 * @returns {Object} Resultado da operação.
 */
function verificarLogin(nome, senha) {
  if (!storageAvailable()) {
    return { sucesso: false, mensagem: 'Armazenamento local não disponível.' };
  }

  const nomeValidation = validateNome(nome);
  if (!nomeValidation.sucesso) return nomeValidation;

  const senhaValidation = validateSenha(senha);
  if (!senhaValidation.sucesso) return senhaValidation;

  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const usuario = usuarios.find(user => user.nome.toLowerCase() === nome.trim().toLowerCase() && user.senha === simpleHash(senha));
  if (!usuario) {
    return { sucesso: false, mensagem: 'Nome ou senha incorretos.' };
  }

  localStorage.setItem('usuarioAtual', JSON.stringify({ nome: usuario.nome }));
  return { sucesso: true, mensagem: 'Login realizado com sucesso!' };
}

/**
 * Retorna o usuário atual.
 * @returns {Object|null} Usuário atual ou null se não estiver logado.
 */
function getUsuarioAtual() {
  if (!storageAvailable()) return null;
  return JSON.parse(localStorage.getItem('usuarioAtual'));
}

/**
 * Realiza o logout do usuário atual.
 * @returns {Object} Resultado da operação.
 */
function logout() {
  if (!storageAvailable()) {
    return { sucesso: false, mensagem: 'Armazenamento local não disponível.' };
  }
  localStorage.removeItem('usuarioAtual');
  return { sucesso: true, mensagem: 'Logout realizado com sucesso!' };
}

// Exporta as funções para uso global
window.adicionarUsuario = adicionarUsuario;
window.verificarLogin = verificarLogin;
window.getUsuarioAtual = getUsuarioAtual;
window.logout = logout;