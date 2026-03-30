import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Linking, ToastAndroid } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  return (
    <View style={styles.fundo}>
      <View style={styles.box}>

        <Image 
          source={require('./assets/icon.png')} 
          style={styles.logo} 
        />
        
        <Text style={styles.texto}>Login</Text>

        <View style={styles.inputArea}>
          <Ionicons name="person-outline" size={20} color="#767676" />
          <TextInput 
            placeholder='Usuário' 
            style={styles.textinput} 
            placeholderTextColor="#818181"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputArea}>
          <Ionicons name="lock-closed-outline" size={20} color="#767676" />
          <TextInput 
            placeholder='Senha' 
            style={styles.textinput} 
            secureTextEntry={true}
            placeholderTextColor="#818181"
          />
        </View>
        
        <TouchableOpacity>
          <Text style={styles.cadastro}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: "#5d8dfe",
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#fff',
    position:'relative',
    top:150,
    width: '85%',
    padding: 30,
    borderRadius: 25,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 20,
  },
  texto: {
    color: "#444",
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    marginBottom: 15,
    paddingHorizontal: 15,
    height: 55,
    backgroundColor: '#f9f9f9',
  },
  textinput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  botao: {
    backgroundColor: '#5d8dfe',
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  botaoTexto: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cadastro:{
    textAlign:'center',
    padding:10,
    color:'#176ef2',
    fontWeight: 'bold',
  },
});