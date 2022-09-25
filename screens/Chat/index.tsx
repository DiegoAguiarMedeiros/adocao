import { ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from '../../components/Themed';

export default function ChatScreen() {
  const [mensagem] = ''
  return (
    <View style={styles.container}>
      <View style={styles.areaMensagens}>
        <ScrollView>
          <Text style={styles.mensagemOutroUsuario}>Aqui irão aparecer as mensagens de outros usuários para você...</Text>
          <Text style={styles.suaMensagem}>Entendi!</Text>
        </ScrollView>
      </View>

      <View style={styles.areaInterativa}>
        <TextInput
          placeholder='Escreva uma mensagem aqui...'
          value={mensagem}
          style={{width: '80%'}}
        />
        <TouchableOpacity
          style={styles.botaoEnviar}
          onPress={() => alert('A mensagem foi enviada com sucesso!')}
        >
          <Text>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'green',
    borderWidth: 1,
    height: '100%',
    width: '100%',
  },
  areaMensagens: {
    flexDirection: 'row',
    borderColor: 'red',
    borderWidth: 1,
    height: '80%',
    width: '100%',
    margin: 5,
  },
  areaInterativa: {
    borderColor: 'blue',
    borderWidth: 1,
    height: '10%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  botaoEnviar: {
    height: 40,
    width: 50,
    borderColor: 'orange',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  mensagemOutroUsuario: {
    justifyContent: 'flex-start',
  },
  suaMensagem: {
    justifyContent: 'flex-end',
  },
});
