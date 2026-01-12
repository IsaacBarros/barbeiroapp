import { View, Image, StyleSheet, Text } from "react-native";
import Label from "./label";    
import PokedexButton from "./button";


const Card = ({id, nome, imagem}) => {
    // Se vier imagem do servidor, usa ela; senão constrói a URL
    const imageUrl = imagem || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    
    console.log(`Renderizando card: ID=${id}, Nome=${nome}, URL=${imageUrl}`);
    
    return(
        <View style={styles.card}>
            <Text style={styles.pokemonId}>#{id}</Text>
            <Image 
                source={{uri: imageUrl}}
                style={styles.image}
                onLoad={() => console.log(`Imagem carregada: ${nome}`)}
                onError={(e) => console.error(`Erro ao carregar imagem ${nome}:`, e.nativeEvent.error)}
            />
            <Label nome={nome} />
            <PokedexButton title="CAPTURAR" onPress={() => alert('Você capturou ' + nome + '!')} />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        padding: 16,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        margin: 10,
        minWidth: 150,
    },
    pokemonId: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#999',
        alignSelf: 'flex-end',
        marginBottom: 5,
    },
    image: {
        width: 120,
        height: 120,
        marginBottom: 12,
        backgroundColor: '#f0f0f0',
    },          
    
}  )

export default Card;    