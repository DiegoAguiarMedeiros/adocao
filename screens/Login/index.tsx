import * as Styled from './styles';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';
import Button from '../../components/Button';
import { FontAwesome } from '@expo/vector-icons';
import loginImg from '../../assets/images/login.png';
import { RootStackParamList } from '../../types';
import { TouchableOpacity, Text } from 'react-native';
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';
import User from '../../utils/user'
import Auth from '../../utils/auth'
import restAuth from '../../api/auth/rest-auth';
import Loading from '../../components/loading'

export default function Login({ navigation }: any) {
  const colorScheme = useColorScheme();
  const { register, handleSubmit } = useForm();
  const [showLoading, setShowLoading] = useState(false);
  const [send, setSend] = useState(false);
  const [errorSubmit, setErrorSubmit] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });


  useEffect(() => {
    if (Auth.isAuthenticated()) {
      navigation.navigate('RegisterComplement')
    }
    // eslint-disable-next-line
  }, []);
  const [errorss, setErrors] = useState({
    erro: "",
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
    setShowLoading(true)
    setErrors({
      ...errorss,
      erro: '',
    });
    try {
      console.log('aqui', send)
      if (handleVerify()) {

        console.log('aqui2')
        setErrorSubmit("");
        const returnApi = await restAuth.postAuth({
          email: data.email,
          password: data.password,
        });

        User.setDomainAndUser(returnApi.data)

        setData({
          email: "",
          password: "",
        });
        setShowLoading(false)
        navigation.navigate('RegisterComplement')
      } else {

        setErrorSubmit("Verificar os campos");

      }
    } catch (error: any) {
      setShowLoading(false)
      console.log('error')
      console.log(error.response.data?.message)
      if (
        error.response.data?.message ===
        "AuthenticateUseCase: user not found."
      ) {
        setErrors({
          ...errorss,
          erro: 'Usuário ou senha inválidos',
        });
      } else if (
        error.response.data?.message ===
        "AuthenticateUseCase: invalid password."
      ) {
        setErrors({
          ...errorss,
          erro: 'Usuário ou senha inválidos',
        });
      }
    }
  }

  const showLoadingFunc = () => {
    return (<Loading />)
  }

  return (
    <Styled.Container background={Colors[colorScheme].backgroundLogin}>

      {showLoading && showLoadingFunc()}

      <Styled.txError>
        {errorss && errorss.erro}
      </Styled.txError>
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