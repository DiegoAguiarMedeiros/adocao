import * as Styled from './styles';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';
import Button from '../../components/Button';
import { FontAwesome } from '@expo/vector-icons';
import loginImg from '../../assets/images/login.png';

import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../../types';

export default function Login() {
  const colorScheme = useColorScheme();
  return (
    <Styled.Container background={Colors[colorScheme].backgroundLogin}>
      <Styled.input background={Colors[colorScheme].backgroundInput} text={Colors[colorScheme].text} placeholder="Login" placeholderTextColor={Colors[colorScheme].text}></Styled.input>
      <Styled.input background={Colors[colorScheme].backgroundInput} text={Colors[colorScheme].text} placeholder="Senha" placeholderTextColor={Colors[colorScheme].text} secureTextEntry={true}></Styled.input>
      <Styled.Buttons>
        <Button
          textColor={Colors[colorScheme].buttonColorText}
          style={{ marginRight: 16 }}
          colorShadow={Colors[colorScheme].buttonShadow}
          onPress={() => { console.log('a') }}
          color={Colors[colorScheme].buttonColor}
          textSize="mediumtxt"
          size='login'
        >
          Login
        </Button>

      </Styled.Buttons>

      <Styled.txTenhoConta>
        Não possui conta? 
      </Styled.txTenhoConta>
      <Styled.LinkAqui onPress={console.log('clicou')}>
        <Styled.txCadastreSe>
        Cadastre-se
        </Styled.txCadastreSe>
      </Styled.LinkAqui>
      <Styled.ImgLogin source={loginImg} />
    </Styled.Container>
  );
}