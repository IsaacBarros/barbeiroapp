import axios from 'axios';

// Configuração do servidor local
const SERVER_URL = 'http://192.168.0.4:3000';

console.log('🔧 Servidor configurado:', SERVER_URL);

/**
 * Busca todos os Pokémons do servidor local
 */
export const fetchPokemons = async () => {
  try {
    console.log('Buscando pokémons do servidor:', `${SERVER_URL}/api/pokemon`);
    const response = await axios.get(`${SERVER_URL}/api/pokemon`);
    console.log('Pokémons carregados:', response.data.length);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar pokémons:', error.message);
    throw error;
  }
};

/**
 * Busca um Pokémon por ID do servidor local
 */
export const fetchPokemonById = async (id) => {
  try {
    const response = await axios.get(`${SERVER_URL}/api/pokemon/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar pokémon ${id}:`, error.message);
    throw error;
  }
};
