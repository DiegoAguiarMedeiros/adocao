import { StyleSheet } from 'react-native';
import * as Styled from './styles';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';
import Button from '../../components/Button';

export default function Register({ navigation }: any) {
  const colorScheme = useColorScheme();
  return (
    <Styled.Container background={Colors[colorScheme].backgroundLogin}>
      <Styled.input background={Colors[colorScheme].backgroundInput} text={Colors[colorScheme].text} placeholder="Nome" placeholderTextColor={Colors[colorScheme].text}></Styled.input>
      <Styled.input background={Colors[colorScheme].backgroundInput} text={Colors[colorScheme].text} placeholder="E-mail" placeholderTextColor={Colors[colorScheme].text}></Styled.input>
      <Styled.input background={Colors[colorScheme].backgroundInput} text={Colors[colorScheme].text} placeholder="Senha" placeholderTextColor={Colors[colorScheme].text} secureTextEntry={true}></Styled.input>
      <Styled.input background={Colors[colorScheme].backgroundInput} text={Colors[colorScheme].text} placeholder="Confirmar Senha" placeholderTextColor={Colors[colorScheme].text} secureTextEntry={true}></Styled.input>
      <Styled.Buttons>
        <Button
          textColor={Colors[colorScheme].buttonColorText}
          style={{ marginRight: 16 }}
          colorShadow={Colors[colorScheme].buttonShadow}
          onPress={() => { navigation.navigate('RegisterComplement') }}
          color={Colors[colorScheme].buttonColor}
          textSize="mediumtxt"
          size='login'
        >
          Cadastrar
        </Button>

      </Styled.Buttons>
    </Styled.Container>
  );
}

