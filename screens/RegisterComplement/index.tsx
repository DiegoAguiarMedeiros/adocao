import * as Styled from './styles';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';
import Button from '../../components/Button';
import { RootStackParamList } from '../../types';
import ButtonsOptions from './ButtonsOptions'
import { useEffect, useState } from 'react';

export default function RegisterComplement({ navigation }: any) {
  const colorScheme = useColorScheme();


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