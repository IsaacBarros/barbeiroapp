import { View, StyleSheet, FlatList } from "react-native";
import { useState, useEffect } from "react";

import Card from "./card";

const PokedexMain = () => {  

    const [ pokemons, setPokemons] = useState([]);
    useEffect(() => {
        carregarPokemons();
    }, []);       

    async function carregarPokemons() {
        try{
          const response = await fetch('http://192.168.1.4:8081api/pokemon/');
            // Usando o IP 192.168.1.4 e a porta 5000
         //   const response = await fetch('http://192.168.1.4:5000/api/pokemon/');
            const dados = await response.json();
            
            setPokemons(dados);
        }catch(error){
            console.log(error);
        }
    
    }

    return (
        <View style={styles.container}  >
            <FlatList
                data={pokemons}
            renderItem={
                ({item}) => {
                    return <Card 
                    id={item.id}
                    nome={item.nome} 
                    />
                }
            }
            />
        </View>
       
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
};

export default PokedexMain;