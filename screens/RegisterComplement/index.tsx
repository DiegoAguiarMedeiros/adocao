import * as Styled from './styles';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';
import Button from '../../components/Button';
import { RootStackParamList } from '../../types';
import ButtonsOptions from './ButtonsOptions'
import { useEffect, useState } from 'react';
import Auth from '../../utils/auth'
import { useForm } from 'react-hook-form';
import restUsers from '../../api/user/rest-user';
import User from '../../utils/user'

export default function RegisterComplement({ navigation }: any) {
  const colorScheme = useColorScheme();

  const { register, handleSubmit } = useForm();
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

  useEffect(() => {
    if (Auth.isAuthenticated()) {
      navigation.navigate('RegisterComplement')
    }
    // eslint-disable-next-line
  }, []);

  const options = [
    {
      key: 1,
      title: "Você mora em:",
      options: ['Casa', 'Apê'],
      active: '',
    },
    {
      key: 2,
      title: "Espaço disponível na residência:",
      options: ['Grande', 'Médio', 'Pequeno'],
      active: '',
    },
    {
      key: 3,
      title: "Tem outros pets:",
      options: ['Sim', 'Não'],
      active: '',
    },
    {
      key: 4,
      title: "Quantas horas você passa em casa por dia",
      options: ['4 ou menos', '4 a 8 horas', '8 a 12 horas', '12 ou mais'],
      active: '',
    },

  ]
  const [optionState, setOptionState] = useState(options);

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
      return true;
    } else {
      return false;
    }
  };

  return (
    <Styled.Container background={Colors[colorScheme].backgroundLogin}>
      <ButtonsOptions options={options} optionState={optionState} setOptionState={setOptionState} />
      <Styled.ContainerButtons>
        <Styled.RowButton>
          <Button
            textColor={Colors[colorScheme].buttonOptionColorTextActive}
            style={{ marginRight: 16 }}
            colorShadow={Colors[colorScheme].buttonShadow}
            onPress={() => navigation.navigate('Root')}
            color={Colors[colorScheme].buttonOptionColorActive}
            textSize="mediumtxt"
            size='login'
          >
            Pular
          </Button>
        </Styled.RowButton>
        <Styled.RowButton>
          <Button
            textColor={Colors[colorScheme].buttonOptionColorTextActive}
            style={{ marginRight: 16 }}
            colorShadow={Colors[colorScheme].buttonShadow}
            onPress={() => console.log('pular')}
            color={Colors[colorScheme].buttonOptionColorActive}
            textSize="mediumtxt"
            size='login'
          >
            Salvar
          </Button>
        </Styled.RowButton>
      </Styled.ContainerButtons>
    </Styled.Container>
  );
}