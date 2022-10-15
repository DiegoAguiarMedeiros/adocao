import * as Styled from './styles';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';
import loading from '../../assets/loading.gif';

export default function Login({ navigation }: any) {
  const colorScheme = useColorScheme();
  return (
    <Styled.Container background={Colors[colorScheme].backgroundLogin}>
      <Styled.Img source={loading} />
    </Styled.Container>
  );
}