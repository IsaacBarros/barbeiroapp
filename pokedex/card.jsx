import { View, Image, StyleSheet } from "react-native";
import Label from "./label";    
import PokedexButton from "./button";


const Card =({id, nome}) => {
    return(
        <View style={styles.card}>
            <Image 
                source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}}
                style={styles.image}
            />
            <Label nome={nome} />
            <PokedexButton title="CAPTURAR" onPress={() => alert('PEGOU O DANADO')} />
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
    },
    image: {
        width: 120,
        height: 120,
        marginBottom: 12,
    },          
    
}  )

export default Card ;    