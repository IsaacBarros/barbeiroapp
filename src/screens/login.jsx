import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Login</Text>
      <Button 
        title="Entrar (Ir para Home)" 
        onPress={() => navigation.replace('home')} 
      />
      <Button  
        title="Voltar (Ir para Login)" 
        onPress={() => navigation.replace('teste')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, marginBottom: 20 }
});