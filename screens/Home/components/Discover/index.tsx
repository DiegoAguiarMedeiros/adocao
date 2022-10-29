import * as Styled from './styles';
import useColorScheme from '../../../../hooks/useColorScheme';
import Colors from '../../../../constants/Colors';
import Button from '../../../../components/Button';
import { FontAwesome } from '@expo/vector-icons';
import noImage from '../../../../assets/images/no-image.png';

import { useEffect, useState } from 'react';

export default function Discover(props: any) {
  const colorScheme = useColorScheme();

  const [position, setPosition] = useState(0);
  const [pet, setPet] = useState(props);

  const getPosition = (newPosition: number) => {
    const max = props.imgs.length;
    if (position < max && position > 0) {
      return newPosition === 1 ? position + 1 : position - 1;
    } else if (position === 0) {
      return newPosition === 1 ? position + 1 : max;
    } else {
      return newPosition === 1 ? 0 : position - 1;
    }
  }

  useEffect(() => {
    setPet(props[0])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  const getImageSrc = (next: number) => {
    const newPosition = getPosition(next)
    setPosition(newPosition)
  }
  return (
    <Styled.Container background={Colors[colorScheme].background}>
      <Styled.containerImgLeft onPress={() => getImageSrc(0)} />
      <Styled.containerImgRight onPress={() => getImageSrc(1)} />
      <Styled.Img source={{ uri: props.imgs[position] }} />
      <Styled.ContainerProfile background={Colors[colorScheme].background} shadow={Colors[colorScheme].shadow}>
        <Styled.Name color={Colors[colorScheme].text}>{props.name}
        </Styled.Name>
        <Styled.breed color={Colors[colorScheme].textSecondary}>{props.breed}
        </Styled.breed>
      </Styled.ContainerProfile>
      <Styled.ContainerButtons background={Colors[colorScheme].background}>
        <Styled.Buttons>
          <Button
            style={{ marginRight: 16 }}
            size="xxmediumCircle"
            colorShadow={Colors[colorScheme].buttonShadow}
            onPress={() => console.log('X')}
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
            onPress={() => console.log('V')}
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