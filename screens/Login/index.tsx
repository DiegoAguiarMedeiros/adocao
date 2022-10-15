import * as Styled from './styles';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';
import Button from '../../components/Button';
import { FontAwesome } from '@expo/vector-icons';
import loginImg from '../../assets/images/login.png';
import { RootStackParamList } from '../../types';
import { TouchableOpacity, Text } from 'react-native';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import User from '../../utils/user'
import restAuth from '../../api/auth/rest-auth';

export default function Login({ navigation }: any) {
  const colorScheme = useColorScheme();
  const { register, handleSubmit } = useForm();
  const [send, setSend] = useState(false);
  const [errorSubmit, setErrorSubmit] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleVerify = () => {
    if (
      data.email.length > 0 &&
      data.password.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  async function onSubmit() {
    try {
      console.log('aqui', send)
      if (handleVerify()) {

        console.log('aqui2')
        setErrorSubmit("");
        const returnApi = await restAuth.postAuth({
          email: data.email,
          password: data.password,
        });

        User.setUserData(returnApi.data)

        setData({
          email: "",
          password: "",
        });

        navigation.navigate('RegisterComplement')
      } else {

        setErrorSubmit("Verificar os campos");

      }
    } catch (error: any) {
      console.log('error')
      console.log(error)
      // if (
      //   error.response.data?.message ===
      //   "CreateUserUseCase: email already exists."
      // ) {
      //   setErrors({
      //     ...errorss,
      //     email: 'E-mail já existe',
      //   });
      // } else if (
      //   error.response.data?.message ===
      //   "CreateUserUseCase: email is not valid."
      // ) {
      //   setErrors({
      //     ...errorss,
      //     email: 'E-mail não é válido',
      //   });
      // } else if (
      //   error.response.data?.message ===
      //   "CreateUserUseCase: user name is no valid."
      // ) {
      //   setErrors({
      //     ...errorss,
      //     name: "Nome inválido",
      //   });
      // } else if (
      //   error.response.data?.message ===
      //   "CreateUserUseCase: user email is not valid."
      // ) {
      //   setErrors({ ...errorss, email: "Email inválido" });
      // }
    }
  }

  return (
    <Styled.Container background={Colors[colorScheme].backgroundLogin}>
      <Styled.input
        onChangeText={(email) => setData({ ...data, email: email })}
        value={data.email}
        background={Colors[colorScheme].backgroundInput} text={Colors[colorScheme].text} placeholder="Login" placeholderTextColor={Colors[colorScheme].text}></Styled.input>
      <Styled.input
        onChangeText={(password) => setData({ ...data, password: password })}
        value={data.password}
        background={Colors[colorScheme].backgroundInput} text={Colors[colorScheme].text} placeholder="Senha" placeholderTextColor={Colors[colorScheme].text} secureTextEntry={true}></Styled.input>
      <Styled.Buttons>
        <Button
          textColor={Colors[colorScheme].buttonColorText}
          style={{ marginRight: 16 }}
          colorShadow={Colors[colorScheme].buttonShadow}
          onPress={handleSubmit(onSubmit)}
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
      <Styled.LinkAqui>
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
        >
          <Text>
            Cadastre-se
          </Text>
        </TouchableOpacity>
      </Styled.LinkAqui>
      <Styled.ImgLogin source={loginImg} />
    </Styled.Container>
  );
}