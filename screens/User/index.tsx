import { StyleSheet, Image, Button } from 'react-native';
import srcImage from '../../assets/images/foto-perfil-usuario.jpg';
import { Text, View } from '../../components/Themed';
import { RowButton } from '../RegisterComplement/ButtonsOptions/styles';
import User from '../../utils/user'
import { useEffect, useState } from 'react';

export default function UserScreen() {
  const [nome, setNome] = useState('Nome');
  const [email, setEmail] = useState('E-mail');
  const loadUser = async () => {
    const userString: any = await User.getUser();
    const user: any = JSON.parse(userString);
    setNome(`${user.name}`);
    setEmail(user.email);
  }
  useEffect(() => {
    loadUser();
  }, []);
  return (
    <View style={styles.container}>
      <Image
        style={styles.foto}
        source={srcImage}
      />
      <View style={styles.linha}>
        <Text style={styles.title}>Nome: </Text>
        <Text style={styles.conteudo}>{nome}</Text>
      </View>
      <View style={styles.linha}>
        <Text style={styles.title}>E-mail: </Text>
        <Text style={styles.conteudo}>{email}</Text>
      </View>
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
  linha: {
    flexDirection: 'row',
  },
  conteudo: {
    fontSize: 20,
  },
  separator: {
    marginVertical: 10,
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
