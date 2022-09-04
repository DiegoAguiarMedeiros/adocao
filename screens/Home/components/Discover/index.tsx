import * as Styled from './styles';
import useColorScheme from '../../../../hooks/useColorScheme';
import Colors from '../../../../constants/Colors';
import Button from '../../../../components/Button';
import { FontAwesome } from '@expo/vector-icons';
import image from '../../../../assets/images/images';
import { DiscoverInformation } from '../../../../state/types/discover-state-types';
import { useState } from 'react';

export default function Discover(props: DiscoverInformation) {
  const colorScheme = useColorScheme();

  const [position, setPosition] = useState(0);

  const getPosition = (newPosition: number) => {
    if(position < 4 && position > 0){
      return newPosition === 1 ? position + 1 : position - 1;
    }else if(position === 0){
      return newPosition === 1 ? position + 1 : 4;
    }else {
      return newPosition === 1 ? 0 : position - 1;
    }
  }

  const getImageSrc = (next: number) => {
    const newPosition = getPosition(next)
    setPosition(newPosition)
  }
  return (
    <Styled.Container background={Colors[colorScheme].background}>
      <Styled.containerImgLeft onPress={() => getImageSrc(0)} />
      <Styled.containerImgRight onPress={() => getImageSrc(1)} />
      <Styled.Img source={image[props.photos[position]]} />
      <Styled.ContainerProfile background={Colors[colorScheme].background} shadow={Colors[colorScheme].shadow}>
        <Styled.Name color={Colors[colorScheme].text}>{props.name}
        </Styled.Name>
        <Styled.breed color={Colors[colorScheme].textSecondary}>{props.raca}
        </Styled.breed>
      </Styled.ContainerProfile>
      <Styled.ContainerButtons background={Colors[colorScheme].background}>
        <Styled.Buttons>
          <Button
            style={{ marginRight: 16 }}
            size="xxmediumCircle"
            colorShadow={Colors[colorScheme].buttonShadow}
            onPress={() => props.rejectPerfil()}
            color={Colors[colorScheme].buttonColor}
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
            colorShadow={Colors[colorScheme].buttonShadow}
            onPress={() => props.acceptPerfil()}
            color={Colors[colorScheme].buttonColor}
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