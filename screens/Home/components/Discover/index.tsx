import * as Styled from './styles';
import useColorScheme from '../../../../hooks/useColorScheme';
import Colors from '../../../../constants/Colors';
import Button from '../../../../components/Button';
import { FontAwesome } from '@expo/vector-icons';
import image from '../../../../assets/images/dogs/pug.jpg';

export default function Discover() {
  const colorScheme = useColorScheme();

  return (
    <Styled.Container background={Colors[colorScheme].background}>
      <Styled.Img source={image} />
      <Styled.ContainerProfile background={Colors[colorScheme].background} shadow={Colors[colorScheme].shadow}>
        <Styled.Name color={Colors[colorScheme].text}>Bolinha
        </Styled.Name>
        <Styled.breed color={Colors[colorScheme].textSecondary}>Pug
        </Styled.breed>
      </Styled.ContainerProfile>
      <Styled.ContainerButtons background={Colors[colorScheme].background}>
        <Styled.Buttons background={Colors[colorScheme].background}>
          <Button
            style={{ marginRight: 16 }}
            size="xxmediumCircle"
            colorShadow="blackShadow"
            onPress={() => console.log('clicou')}
            color="white"
          >
            {' '}
            <FontAwesome
              name="times"
              size={25}
              color={Colors[colorScheme].textSecondary}
              style={{ marginRight: 15 }}
            />
          </Button>
          </Styled.Buttons>
          <Styled.Buttons background={Colors[colorScheme].background}>
          <Button
            style={{ marginRight: 16 }}
            size="xxmediumCircle"
            colorShadow="blackShadow"
            onPress={() => console.log('clicou')}
            color="white"
          >
            {' '}
            <FontAwesome
              name="check"
              size={25}
              color={Colors[colorScheme].textBlue}
              style={{ marginRight: 15 }}
            />
          </Button>
        </Styled.Buttons>
      </Styled.ContainerButtons>
    </Styled.Container>
  );
}