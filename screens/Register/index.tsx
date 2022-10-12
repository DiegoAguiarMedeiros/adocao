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




export default function Register({ navigation }: any) {
  const { register, handleSubmit } = useForm();
  const colorScheme = useColorScheme();
  const [send, setSend] = useState(false);
  const [errorSubmit, setErrorSubmit] = useState("");
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
    handleVerify();
    try {
      console.log('aqui', send)
      if (send) {

        if (data.password !== data.confirmpassword) {
          setErrors({
            ...errorss,
            password: 'As senha precisam ser iguais',
            confirmpassword: 'As senha precisam ser iguais',
          });
        }

        console.log('aqui2')
        setErrorSubmit("");
        const returnApi = await restUsers.postUsers({
          name: data.name,
          email: data.email,
          password: data.password,
        });


        const userId = returnApi.data._id;

        User.setUserId(userId)

        setData({
          name: "",
          email: "",
          password: "",
          confirmpassword: "",
        });

        navigation.navigate('RegisterComplement')
      } else {

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

  const handleVerify = () => {
    if (
      data.name.length > 0 &&
      data.email.length > 0 &&
      data.password.length > 0 
    ) {
      setSend(true);
    } else {
      setSend(false);
    }
    console.log(send)
  };


  return (
    <Styled.Container background={Colors[colorScheme].backgroundLogin}>
      <Styled.input onBlur={handleVerify}
        onChangeText={(name) => setData({ ...data, name: name })}
        value={data.name}
        background={Colors[colorScheme].backgroundInput} text={Colors[colorScheme].text} placeholder="Nome" placeholderTextColor={Colors[colorScheme].text}></Styled.input>
      <Styled.input onBlur={handleVerify}
        onChangeText={(email) => setData({ ...data, email: email })}
        value={data.email}
        background={Colors[colorScheme].backgroundInput} text={Colors[colorScheme].text} placeholder="E-mail" placeholderTextColor={Colors[colorScheme].text}></Styled.input>
      <Styled.input onBlur={handleVerify} onChangeText={(password) => setData({ ...data, password: password })} value={data.password} background={Colors[colorScheme].backgroundInput} text={Colors[colorScheme].text} placeholder="Senha" placeholderTextColor={Colors[colorScheme].text} secureTextEntry={true}></Styled.input>
      <Styled.input onBlur={handleVerify} onChangeText={(confirmpassword) => setData({ ...data, confirmpassword: confirmpassword })} value={data.confirmpassword} background={Colors[colorScheme].backgroundInput} text={Colors[colorScheme].text} placeholder="Confirmar Senha" placeholderTextColor={Colors[colorScheme].text} secureTextEntry={true}></Styled.input>
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
          Cadastrar
        </Button>
      </Styled.Buttons>
    </Styled.Container >
  );
}

