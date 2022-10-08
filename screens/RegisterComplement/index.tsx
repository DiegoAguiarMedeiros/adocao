import * as Styled from './styles';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';
import Button from '../../components/Button';
import { RootStackParamList } from '../../types';
import ButtonsOptions from './ButtonsOptions'

export default function RegisterComplement({ navigation }: any) {
  const colorScheme = useColorScheme();

  const options = [
    {
      key: 1,
      title: "Você mora em:",
      options: ['Casa', 'Apê'],
      active: 'Casa',
    },
    {
      key: 2,
      title: "Espaço disponível na residência:",
      options: ['Grande', 'Médio','Pequeno'],
      active: 'Médio',
    },
    {
      key: 3,
      title: "Tem outros pets:",
      options: ['Sim','Não'],
      active: 'Não',
    },
    {
      key: 4,
      title: "Quantas horas você passa em casa por dia",
      options: ['4 ou menos','4 a 8 horas','8 a 12 horas','12 ou mais'],
      active: '4 ou menos',
    },
  ]

  return (
    <Styled.Container background={Colors[colorScheme].backgroundLogin}>
      <ButtonsOptions options={options} />
    </Styled.Container>
  );
}