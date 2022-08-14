import * as Styled from './styles';
import useColorScheme from '../../../../hooks/useColorScheme';
import Colors from '../../../../constants/Colors';
export default function Discover() {

  const colorScheme = useColorScheme();

  return (
    <Styled.Container>
      <Styled.Title color={Colors[colorScheme].text}>
        discover
      </Styled.Title>
    </Styled.Container>
  );
}