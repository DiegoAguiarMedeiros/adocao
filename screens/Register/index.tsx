import { StyleSheet } from 'react-native';
import * as Styled from './styles';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';
import Button from '../../components/Button';
import restUsers from '../../api/user/rest-user';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import User from '../../utils/user'
import Swal from 'sweetalert2';
import Loading from '../../components/loading'



export default function Register({ navigation }: any) {
  const { register, handleSubmit } = useForm();
  const colorScheme = useColorScheme();
  const [send, setSend] = useState(false);
  const [errorSubmit, setErrorSubmit] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [errorss, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  async function onSubmit() {
    setShowLoading(true)
    setErrors({
      ...errorss,
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
    try {
      if (handleVerify()) {

        if (data.password !== data.confirmpassword) {
          setErrors({
            ...errorss,
            password: 'As senha precisam ser iguais',
            confirmpassword: 'As senha precisam ser iguais',
          });
        }

        console.log('a',{
          name: data.name,
          email: data.email,
          house: '',
          houseSize: '',
          otherPets: false,
          timeInHouse: '',
          password: data.password,
        })

        setErrorSubmit("");
        const returnApi = await restUsers.postUsers({
          name: data.name,
          email: data.email,
          house: '',
          houseSize: '',
          otherPets: false,
          timeInHouse: '',
          password: data.password,
        });
        console.log('b')

        console.log('returnApi',returnApi)

        const userId = returnApi.data._id;

        User.setUserId(userId)

        setData({
          name: "",
          email: "",
          password: "",
          confirmpassword: "",
        });
        setShowLoading(false)
        navigation.navigate('Login')
      } else {
        setShowLoading(false)
        if (data.password !== data.confirmpassword) {
          setErrors({
            ...errorss,
            password: 'As senha precisam ser iguais',
            confirmpassword: 'As senha precisam ser iguais',
          });
        } else {
          setErrorSubmit("Verificar os campos");

        }

      }
    } catch (error: any) {
      console.log('error',error)
      setShowLoading(false)
      if (
        error.response.data?.message ===
        "CreateUserUseCase: email already exists."
      ) {
        setErrors({
          ...errorss,
          email: 'E-mail já existe',
        });
      } else if (
        error.response.data?.message ===
        "CreateUserUseCase: email is not valid."
      ) {
        setErrors({
          ...errorss,
          email: 'E-mail não é válido',
        });
      } else if (
        error.response.data?.message ===
        "CreateUserUseCase: user name is no valid."
      ) {
        setErrors({
          ...errorss,
          name: "Nome inválido",
        });
      } else if (
        error.response.data?.message ===
        "CreateUserUseCase: user email is not valid."
      ) {
        setErrors({ ...errorss, email: "Email inválido" });
      }
    }
  }

  const handleVerify = () => {
    if (
      data.name.length > 0 &&
      data.email.length > 0 &&
      data.password.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  const showLoadingFunc = () => {
    return (<Loading />)
  }

  return (
    <Styled.Container background={Colors[colorScheme].backgroundLogin}>
      {showLoading && showLoadingFunc()}
      <Styled.input onChangeText={(name) => setData({ ...data, name: name })}
        value={data.name}
        background={Colors[colorScheme].backgroundInput} text={Colors[colorScheme].text} placeholder="Nome" placeholderTextColor={Colors[colorScheme].text}></Styled.input>
      <Styled.txError>
        {errorss && errorss.name}
      </Styled.txError>
      <Styled.input onChangeText={(email) => setData({ ...data, email: email })}
        value={data.email}
        background={Colors[colorScheme].backgroundInput} text={Colors[colorScheme].text} placeholder="E-mail" placeholderTextColor={Colors[colorScheme].text}></Styled.input>
      <Styled.txError>
        {errorss && errorss.email}
      </Styled.txError>
      <Styled.input onChangeText={(password) => setData({ ...data, password: password })} value={data.password} background={Colors[colorScheme].backgroundInput} text={Colors[colorScheme].text} placeholder="Senha" placeholderTextColor={Colors[colorScheme].text} secureTextEntry={true}></Styled.input>
      <Styled.txError>
        {errorss && errorss.password}
      </Styled.txError>
      <Styled.input onChangeText={(confirmpassword) => setData({ ...data, confirmpassword: confirmpassword })} value={data.confirmpassword} background={Colors[colorScheme].backgroundInput} text={Colors[colorScheme].text} placeholder="Confirmar Senha" placeholderTextColor={Colors[colorScheme].text} secureTextEntry={true}></Styled.input>
      <Styled.txError>
        {errorss && errorss.confirmpassword}
      </Styled.txError>
      <Styled.Buttons>
        <Button
          textColor={Colors[colorScheme].buttonOptionColorTextActive}
          style={{ marginRight: 16 }}
          colorShadow={Colors[colorScheme].buttonShadow}
          onPress={handleSubmit(onSubmit)}
          color={Colors[colorScheme].buttonOptionColorActive}
          textSize="mediumtxt"
          size='login'
        >
          Cadastrar
        </Button>
      </Styled.Buttons>
    </Styled.Container >
  );
}

