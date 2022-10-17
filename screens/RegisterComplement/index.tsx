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

  const isAuthenticated = async () => {
    const authenticated = await Auth.isAuthenticated();
    if (authenticated) {
      navigation.navigate('RegisterComplement')
    }
  }


  useEffect(() => {
    isAuthenticated();
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


    try {
      if (handleVerify()) {



        setErrorSubmit("");
        const userId = await User.getUserId();
        console.log('1',userId,{
          house: optionState[0].active,
          houseSize: optionState[1].active,
          otherPets: optionState[2].active === 'Sim' ? true : false,
          timeInHouse: optionState[3].active,
        })
        const returnApi = await restUsers.putUsersComplement(userId,{
          house: optionState[0].active,
          houseSize: optionState[1].active,
          otherPets: optionState[2].active === 'Sim' ? true : false,
          timeInHouse: optionState[3].active,
        });
        console.log('2',returnApi)


        setData({
          name: "",
          email: "",
          password: "",
          confirmpassword: "",
        });
        console.log('3')
        navigation.navigate('Root')
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
      console.log('error asd')
      console.log(error)

    }
  }

  const handleVerify = () => {
    const retorno = optionState.filter((item) => item.active !== '')
    if (retorno.length === optionState.length) {
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
            onPress={handleSubmit(onSubmit)}
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