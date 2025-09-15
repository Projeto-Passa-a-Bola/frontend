const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

// Buscar times por nome (com paginação baseada em skip/limit)
export const buscarTimesPorNome = async (nome, page = 1, limit = 10) => {
  try {
    const skip = (page - 1) * limit; // Converte page para skip
    const response = await fetch(`${API_BASE_URL}/times/buscar?nome=${encodeURIComponent(nome)}&limit=${limit}&skip=${skip}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    if (!response.ok) {
      throw new Error('Erro ao buscar times');
    }
    
    const data = await response.json();
    // Adiciona info de paginação para consistência
    return {
      ...data,
      currentPage: page,
      totalPages: Math.ceil((data.times?.length || 0) / limit) || 1,
      hasMore: (data.times?.length || 0) === limit // Se retornou o limit completo, pode haver mais
    };
  } catch (error) {
    console.error('Erro na busca de times:', error);
    throw error;
  }
};

// Buscar jogadoras (já com paginação nativa)
export const buscarJogadoras = async (nome, aprovada, page = 1, limit = 10) => {
  try {
    let url = `${API_BASE_URL}/jogadoras/buscar?page=${page}&limit=${limit}`;
    
    if (nome) {
      url += `&nome=${encodeURIComponent(nome)}`;
    }
    
    if (aprovada !== undefined) {
      url += `&aprovada=${aprovada}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    if (!response.ok) {
      throw new Error('Erro ao buscar jogadoras');
    }
    
    const data = await response.json();
    return {
      ...data,
      hasMore: data.currentPage < data.totalPages
    };
  } catch (error) {
    console.error('Erro na busca de jogadoras:', error);
    throw error;
  }
};