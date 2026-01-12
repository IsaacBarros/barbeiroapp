import axios from 'axios';

<<<<<<< HEAD
// Configuração para usar servidor local
const USE_LOCAL_SERVER = true;
const LOCAL_SERVER_URL = 'http://192.168.0.4:3000';
const POKEAPI_URL = 'https://pokeapi.co/api/v2';

const BASE_URL = USE_LOCAL_SERVER ? LOCAL_SERVER_URL : POKEAPI_URL;

console.log('🔧 Configuração da API:');
console.log('   Modo:', USE_LOCAL_SERVER ? 'SERVIDOR LOCAL' : 'POKEAPI PÚBLICA');
console.log('   URL:', BASE_URL);

/**
 * Busca uma lista de Pokémons
 * Se usar servidor local, busca de /api/pokemon
 * Se usar PokéAPI, busca com paginação
 */
export const fetchPokemons = async (limit = 20, offset = 0) => {
  try {
    if (USE_LOCAL_SERVER) {
      // Buscar do servidor local
      console.log('Buscando do servidor local:', `${BASE_URL}/api/pokemon`);
      const response = await axios.get(`${BASE_URL}/api/pokemon`);
      console.log('Resposta do servidor local:', response.data);
      return response.data;
    } else {
      // Buscar da PokéAPI pública
      const response = await axios.get(`${BASE_URL}/pokemon`, {
        params: { limit, offset }
      });
      
      const pokemonPromises = response.data.results.map(async (pokemon) => {
        const details = await fetchPokemonDetails(pokemon.url);
        return details;
      });
      
      return await Promise.all(pokemonPromises);
    }
  } catch (error) {
    console.error('Erro ao buscar pokémons:', error);
    console.error('URL tentada:', USE_LOCAL_SERVER ? `${BASE_URL}/api/pokemon` : `${BASE_URL}/pokemon`);
=======
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
>>>>>>> 1016952ab9916595ddbb3b48080bd605a9d40e24
    throw error;
  }
};

/**
<<<<<<< HEAD
 * Busca detalhes de um Pokémon específico
 * @param {string} urlOrId - URL ou ID do pokémon
 * @returns {Promise} Detalhes do pokémon
 */
export const fetchPokemonDetails = async (urlOrId) => {
  try {
    const url = typeof urlOrId === 'string' && urlOrId.startsWith('http') 
      ? urlOrId 
      : `${BASE_URL}/pokemon/${urlOrId}`;
    
    const response = await axios.get(url);
    const data = response.data;
    
    return {
      id: data.id,
      nome: data.name,
      height: data.height,
      weight: data.weight,
      types: data.types.map(t => t.type.name),
      sprites: data.sprites,
      stats: data.stats.map(s => ({
        name: s.stat.name,
        value: s.base_stat
      })),
      abilities: data.abilities.map(a => a.ability.name)
    };
  } catch (error) {
    console.error('Erro ao buscar detalhes do pokémon:', error);
    throw error;
  }
};

/**
 * Busca um Pokémon por nome
 * @param {string} name - Nome do pokémon
 * @returns {Promise} Detalhes do pokémon
 */
export const searchPokemonByName = async (name) => {
  try {
    if (!name) return null;
    const response = await axios.get(`${BASE_URL}/pokemon/${name.toLowerCase()}`);
    const data = response.data;
    
    return {
      id: data.id,
      nome: data.name,
      height: data.height,
      weight: data.weight,
      types: data.types.map(t => t.type.name),
      sprites: data.sprites,
      stats: data.stats.map(s => ({
        name: s.stat.name,
        value: s.base_stat
      })),
      abilities: data.abilities.map(a => a.ability.name)
    };
  } catch (error) {
    console.error('Erro ao buscar pokémon por nome:', error);
    return null;
  }
};
=======
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
>>>>>>> 1016952ab9916595ddbb3b48080bd605a9d40e24
