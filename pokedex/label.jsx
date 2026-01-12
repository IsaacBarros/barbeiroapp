import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Label = ({nome}) => {
  return (
      <View>  
        <Text style={estiles.texto}>{nome}</Text>
      </View> 
  );
};

const estiles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
});

export default Label;   