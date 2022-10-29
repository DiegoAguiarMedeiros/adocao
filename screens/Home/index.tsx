import { StyleSheet } from 'react-native';
import * as Styled from './styles';
import Discover from './components/Discover';
import { RootTabScreenProps } from '../../types';
import discoverData from '../../data/discoverData.json';
import noData from '../../assets/images/no-data.jpg';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';
import { useEffect, useState } from 'react';
import restPet from "../../api/pet/rest-pet";
import discoverState from "./DiscoverState"

export default function TabOneScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const colorScheme = useColorScheme();
  const [canFetchData, setCanFetchData] = useState(true);
  const [dataDogs, setDataDogs] = useState(discoverData);
  const [pet, setPet] = useState(discoverState.discoverState);


  const fetchPet = async () => {
    const pets = await restPet.fetchPet()
    setPet(pets.data.petts)
    setCanFetchData(false);
  };

  const removerdataDogs = () => {
    dataDogs.splice(0, 1);
    const newDataDogs = [...dataDogs];
    setDataDogs(newDataDogs);
  }

  const rejectPerfil = () => {
    discoverData[0].rejects = true;
    removerdataDogs();
  }
  const acceptPerfil = () => {
    discoverData[0].accepts = true;
    removerdataDogs();
  }


  useEffect(() => {
    if (canFetchData) {
      fetchPet();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const renderDiscover = () => {
    if (pet.length > 0) {
      return <Discover {...pet[0]} />
    } else {
      return <Styled.Container background={Colors[colorScheme].background}><Styled.ImgNoData source={noData} /></Styled.Container>
    }
  }

  return (
    renderDiscover()
  );
}


