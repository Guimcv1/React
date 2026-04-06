import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useFonts, Ubuntu_300Light, Ubuntu_400Regular } from '@expo-google-fonts/ubuntu';

export default function Inicio({ navigation }) {
  let [fontsLoaded] = useFonts({
      Ubuntu_300Light,
      Ubuntu_400Regular,
    });

    if (!fontsLoaded) {
    return null; // Ou um componente de Loading
  }

  return (
    <View style={styles.fundo}>
      <View style={styles.texto_1}>
        <Text style={styles.titulo_1}>Consumo inteligente.{'\n'}
          <Text style={{color:'#b3b3b3'}}>
            Sustentabilidade no dia a dia.
          </Text>
        </Text>
      </View>
      <Button
        title="Ir para Detalhes"
        onPress={() => navigation.navigate('Teste')}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  fundo:{
    width:'100%',
    height:'100%',
    backgroundColor:'#306BAC',
  },
  texto_1:{
    position:'relative',
    marginTop:100,
    padding:30,
  },
  titulo_1:{
    fontFamily:'Ubuntu_400Regular',
    color:'#fff',
    fontSize:30,

  },

});