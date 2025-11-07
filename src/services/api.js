// Configuração base da API
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

// Função para fazer requisições autenticadas
const apiRequest = async (endpoint, options = {}) => {
  const token = localStorage.getItem('authToken');

  const config = {
    headers: {
      // Removemos o Content-Type daqui para evitar que ele seja sobrescrito incorretamente.
      // Ele será adicionado ou pelo options.headers, ou pelo FormData (no uploadAvatar)
      ...(token && { 'Authorization': `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  // IMPORTANTE: Se o body for FormData, o Content-Type NÃO DEVE ser setado, o navegador faz isso.
  // Se o body for JSON, garantimos que Content-Type seja application/json.
  if (config.body instanceof FormData) {
    delete config.headers['Content-Type'];
  } else if (!config.headers['Content-Type']) {
    // Garante Content-Type se for PUT/POST e o corpo não for FormData
    config.headers['Content-Type'] = 'application/json';
  }


  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);

    if (!response.ok) {
      if (response.status === 401) {
        // Token inválido, remover e redirecionar para login
        localStorage.removeItem('authToken');
        window.location.href = '/login';
        throw new Error('Token inválido');
      }
      // Tentativa de ler o erro JSON primeiro, senão lança o status
      let errorMessage = `Erro na requisição: ${response.status}`;
      try {
        const errorData = await response.json();
        // Assume que o backend retorna { msg: 'mensagem de erro' }
        if (errorData.msg) {
          errorMessage = errorData.msg;
        } else if (errorData.message) {
          errorMessage = errorData.message;
        }
      } catch (e) {
        // Se não for JSON, usamos o erro padrão.
      }
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    console.error('Erro na API:', error);
    throw error;
  }
};

// Serviços da API
export const userService = {
  // Buscar perfil do usuário (admin)
  getProfile: () => apiRequest('/auth/profile'),

  // Buscar perfil da jogadora
  getJogadoraProfile: () => apiRequest('/jogadoras/profile'),

  // Atualizar perfil do usuário
  updateProfile: (data) => apiRequest('/auth/profile', {
    method: 'PUT',
    body: JSON.stringify(data),
    // NÃO PRECISAMOS FORÇAR O CONTENT-TYPE AQUI, pois o apiRequest faz isso agora
  }),

  // Upload de avatar
  uploadAvatar: (file) => {
    const formData = new FormData();
    formData.append('avatar', file);

    return apiRequest('/auth/avatar', {
      method: 'POST',
      // Content-Type será removido automaticamente pelo apiRequest
      body: formData,
    });
  },
};

export const authService = {
  // Login
  login: (credentials) => apiRequest('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
    // REMOVEMOS O HEADERS MANUALMENTE, pois a lógica está no apiRequest agora
  }),

  // Registro
  register: (userData) => apiRequest('/auth/register', {
    method: 'POST',
    body: JSON.stringify(userData),
    // REMOVEMOS O HEADERS MANUALMENTE
  }),

  // Logout
  logout: () => apiRequest('/auth/logout', {
    method: 'POST',
  }),
};

export default apiRequest;