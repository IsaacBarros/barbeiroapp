import { Pressable, Text, StyleSheet } from "react-native";


const PokedexButton = ({ title, onPress }) => {
  return (
    <Pressable 
        style={({ pressed }) => pressed ? [styles.button, styles.buttonDisabled] : [styles.button, styles.buttonAbled]}
        onPress={onPress}>    
        <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonDisabled: {
    backgroundColor: '#A5D6A7',
  },    
  buttonAbled: {
    backgroundColor: '#4CAF50',
  },
});

export default PokedexButton;