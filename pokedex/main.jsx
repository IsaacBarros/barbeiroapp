import { View, StyleSheet, FlatList, Text, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";

import Card from "./card";
import { fetchPokemons } from "../services/pokeApi";

const PokedexMain = () => {  

    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        carregarPokemons();
    }, []);       

    async function carregarPokemons() {
        try{
            console.log('Carregando pokémons do servidor...');
            setLoading(true);
            setError(null);
            const dados = await fetchPokemons();
            console.log('Pokémons carregados:', dados.length);
            setPokemons(dados);
        }catch(error){
            console.error('Erro ao carregar:', error);
            setError('Erro ao conectar ao servidor. Verifique se o servidor está rodando.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}  >
            {loading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#E63946" />
                    <Text style={styles.loadingText}>Carregando Pokémons...</Text>
                </View>
            ) : error ? (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{error}</Text>
                </View>
            ) : (
                <FlatList
                    data={pokemons}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    contentContainerStyle={styles.listContainer}
                    renderItem={
                        ({item}) => {
                            return <Card 
                            id={item.id}
                            nome={item.nome}
                            imagem={item.imagem}
                            />
                        }
                    }
                    ListEmptyComponent={
                        <Text style={styles.emptyText}>Nenhum Pokémon encontrado</Text>
                    }
                />
            )}
        </View>
       
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    listContainer: {
        padding: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#666',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    errorText: {
        fontSize: 16,
        color: '#E63946',
        textAlign: 'center',
    },
    emptyText: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginTop: 50,
    },
});

export default PokedexMain;