import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, ScrollView } from 'react-native';
import * as Styled from './styles';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';
import Button from '../../components/Button';
import { FontAwesome } from '@expo/vector-icons';
import noImage from '../../../../assets/images/no-image.png';
import Loading from '../../components/loading'
import { useEffect, useState } from 'react';
import navigation from '../../navigation';
import { Badge } from 'react-native-elements'

export default function ModalScreen({ route, navigation }: any) {


  const tamanho = {
    small: "Pequeno",
    medium: "Médio",
    big: "Grande"
  };

  const socialve = ["Sociável", "Não sociável"]

  const { pet, acceptPerfil } = route.params;
  const colorScheme = useColorScheme();
  const [position, setPosition] = useState(0);

  const getPosition = (newPosition: number) => {
    const max = pet.imgs.length - 1;
    if (position < max && position > 0) {
      return newPosition === 1 ? position + 1 : position - 1;
    } else if (position === 0) {
      return newPosition === 1 && max > 0 ? position + 1 : max;
    } else {
      return newPosition === 1 ? 0 : position - 1;
    }
  }

  const getImageSrc = (next: number) => {
    const newPosition = getPosition(next)
    setPosition(newPosition)
  }


  return (
    <Styled.Container background={Colors[colorScheme].background}>
      <ScrollView style={styles.scrollView}>
        <Styled.ContainerImg background={Colors[colorScheme].background}>
          <Styled.containerImgLeft onPress={() => getImageSrc(0)} />
          <Styled.containerImgRight onPress={() => getImageSrc(1)} />
          <Styled.Img source={{ uri: pet.imgs[position] }} />
        </Styled.ContainerImg>
        <Styled.ContainerProfile background={Colors[colorScheme].background} shadow={Colors[colorScheme].shadow}>
          <Styled.NameTouchable onPress={() => navigation.navigate('Modal', {
            pet: pet,
          })}>
            <Styled.Name color={Colors[colorScheme].text}>{pet.name}
            </Styled.Name>
            <Styled.Badge>
              <Styled.BadgeInner>
                <Badge value={tamanho[pet.size]} status="success" />
              </Styled.BadgeInner>
              <Styled.BadgeInner>
                <Badge value={pet.sociable ? "Sociável" : "Não sociável"} status={pet.sociable ? "success" : "error"} />
              </Styled.BadgeInner>
            </Styled.Badge>

          </Styled.NameTouchable>
          <Styled.breed color={Colors[colorScheme].textSecondary}>{pet.breed}
          </Styled.breed>


          <Styled.description color={Colors[colorScheme].textSecondary}>{pet.description}
          </Styled.description>

          <Styled.ContainerButtons background={Colors[colorScheme].background}>

            <Styled.Buttons>
              <Button
                style={{ marginRight: 16 }}
                size="larger"
                textColor={Colors[colorScheme].buttonOptionColorTextActive}
                colorShadow={Colors[colorScheme].buttonShadow}
                onPress={() => { acceptPerfil(pet._id); navigation.navigate('Root') }}
                color={Colors[colorScheme].buttonOptionColorActive}
              >
                {' '}
                ME ADOTE!
              </Button>
            </Styled.Buttons>
          </Styled.ContainerButtons>
        </Styled.ContainerProfile>
      </ScrollView>
    </Styled.Container >
  );
}

const styles = StyleSheet.create({

  scrollView: {
    height: '100%',
  },

});