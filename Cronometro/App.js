import React, { useState } from 'react'; // Importar o useState
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

let timer = null; // Variável externa para controlar o intervalo

export default function App() {
  const [numero, setNumero] = useState(0); // Estado do contador
  const [botao, setBotao] = useState('VAI'); // Estado do texto do botão

  function vai() {
    if (timer !== null) {
      // Aqui ele para o cronômetro
      clearInterval(timer);
      timer = null;
      setBotao('VAI');
    } else {
      // Aqui ele começa a girar o cronômetro
      timer = setInterval(() => {
        setNumero((prev) => prev + 0.1);
      }, 100); // Atualiza a cada 100ms
      setBotao('PARAR');
    }
  }

  function limpar() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    }
    setNumero(0);
    setBotao('VAI');
  }

  return (
    <View style={styles.Fundo}>
      <Image 
        source={require('./assets/cronometro.png')}
        style={styles.ImgCronometro}
      />

      {/* .toFixed(1) garante que mostre apenas uma casa decimal */}
      <Text style={styles.Contador}>{numero.toFixed(1)}</Text>

      <View style={styles.BtnArea}>
        <TouchableOpacity style={styles.Btn} onPress={vai}>
          <Text style={styles.BtnTexto}>{botao}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Btn} onPress={limpar}>
          <Text style={styles.BtnTexto}>LIMPAR</Text>
        </TouchableOpacity>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  Fundo: {
    flex: 1,
    backgroundColor: "#6999f1",
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImgCronometro: {
    width: 250,
    height: 250,
  },
  Contador: {
    marginTop: -150, // Ajuste para o texto subir para dentro da imagem
    color: "#ffffff",
    fontSize: 65,
    fontWeight: 'bold',
  },
  BtnArea: {
    flexDirection: 'row', // Coloca os botões lado a lado
    marginTop: 130,
    height: 40,
  },
  Btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  BtnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6999f1',
  }
});