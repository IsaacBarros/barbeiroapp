import React from 'react';
//import Routes from './src/routes'; // Importa o arquivo index.jsx que criamos acima
import { SafeAreaView } from 'react-native-safe-area-context';

import main from './pokedex/main';  
import PokedexMain from './pokedex/main';


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <PokedexMain />
    </SafeAreaView>
  )
} 