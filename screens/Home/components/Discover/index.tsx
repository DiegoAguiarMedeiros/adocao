import * as Styled from './styles';
import useColorScheme from '../../../../hooks/useColorScheme';
import Colors from '../../../../constants/Colors';
import Button from '../../../../components/Button';
import { FontAwesome } from '@expo/vector-icons';
import image from '../../../../assets/images/dogs/pug.jpg';
import { DiscoverInformationArray } from '../../../../state/types/discover-state-types';

export default function Discover({ data }: DiscoverInformationArray) {
  const colorScheme = useColorScheme();

  console.log(data)

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
        <Styled.Buttons>
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
        <Styled.Buttons>
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