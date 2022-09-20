import { StyleSheet, Image, Button } from 'react-native';
import srcImage from '../../assets/images/foto-perfil-usuario.jpg';
import { Text, View } from '../../components/Themed';
import { RowButton } from '../RegisterComplement/ButtonsOptions/styles';

export default function UserScreen() {
  return (
    <View style={styles.container}>
      <Text>Aqui vão aparecer as informações sobre o usuário:</Text>
      <Image
        style={styles.foto}
        source={srcImage}
      />
      <View style={styles.linha}>
        <Text style={styles.title}>Nome: </Text>
        <Text style={styles.conteudo}>Seu Nome Completo Aqui</Text>
      </View> 
      <View style={styles.linha}>
        <Text style={styles.title}>E-mail: </Text>
        <Text style={styles.conteudo}>usuario@servidor.com.br</Text>
      </View>
      <View style={styles.linha}>
        <Text style={styles.title}>Celular: </Text>
        <Text style={styles.conteudo}>(xx) xxxxx-xxxx</Text>
      </View>
      <Button
        title="Alterar senha"
        onPress={() => alert('Quero alterar minha senha')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  linha:{
    flexDirection: 'row',
  },
  conteudo: {
    fontSize: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  foto: {
    height: 200,
    width: 200,
    borderColor: 'red',
    borderRadius: 100,
    borderWidth: 2,
  },
});
