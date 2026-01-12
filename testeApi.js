// Script de teste da API - Execute com: node testeApi.js
const axios = require('axios');

async function testarAPI() {
  console.log('🔍 Testando conexão com PokéAPI...\n');
  
  try {
    // Teste 1: Buscar lista de pokémons
    console.log('1️⃣ Buscando lista de pokémons...');
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=5&offset=0');
    console.log('✅ Sucesso! Encontrados:', response.data.results.length, 'pokémons');
    console.log('   Primeiros:', response.data.results.map(p => p.name).join(', '));
    
    // Teste 2: Buscar detalhes de um pokémon
    console.log('\n2️⃣ Buscando detalhes do Bulbasaur...');
    const detailsResponse = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const data = detailsResponse.data;
    console.log('✅ Sucesso!');
    console.log('   ID:', data.id);
    console.log('   Nome:', data.name);
    console.log('   Tipos:', data.types.map(t => t.type.name).join(', '));
    console.log('   Altura:', data.height / 10, 'm');
    console.log('   Peso:', data.weight / 10, 'kg');
    
    // Teste 3: Verificar URL da imagem
    console.log('\n3️⃣ URL da imagem:');
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;
    console.log('   ', imageUrl);
    
    console.log('\n✅ TODOS OS TESTES PASSARAM!');
    console.log('📱 A API está funcionando corretamente.\n');
    
  } catch (error) {
    console.error('❌ ERRO:', error.message);
    if (error.response) {
      console.error('   Status:', error.response.status);
      console.error('   Dados:', error.response.data);
    }
    console.log('\n⚠️  Verifique sua conexão com a internet.\n');
  }
}

testarAPI();
