const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

function adicionarUsuario(nome, senha) {
  if (!nome || !senha) {
    return { sucesso: false, mensagem: 'Nome e senha são obrigatórios.' };
  }

  const usuarioExistente = usuarios.find(user => user.nome === nome);
  if (usuarioExistente) {
    return { sucesso: false, mensagem: 'Usuário já existe.' };
  }

  const novoUsuario = { nome, senha };
  usuarios.push(novoUsuario);
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  return { sucesso: true, mensagem: 'Usuário registrado com sucesso!' };
}

function verificarLogin(nome, senha) {
  const usuario = usuarios.find(user => user.nome === nome && user.senha === senha);
  if (usuario) {
    localStorage.setItem('usuario', JSON.stringify({ nome }));
    return { sucesso: true, mensagem: `Bem-vindo, ${nome}!` };
  }
  return { sucesso: false, mensagem: 'Nome ou senha incorretos.' };
}

function logout() {
  localStorage.removeItem('usuario');
  return { sucesso: true, mensagem: 'Você saiu da sua conta.' };
}

function getUsuarioAtual() {
  return JSON.parse(localStorage.getItem('usuario')) || null;
}