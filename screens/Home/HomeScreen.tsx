import { StyleSheet } from 'react-native';
import * as Styled from './styles';
import Discover from './components/Discover';
import { RootTabScreenProps } from '../../types';
import discoverData from '../../data/discoverData.json';
import noData from '../../assets/images/no-data.jpg';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';
import { useState } from 'react';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const colorScheme = useColorScheme();

  const [dataDogs , setDataDogs] = useState(discoverData);


  const removerdataDogs =() => {
    dataDogs.splice(0,1);
    const newDataDogs = [...dataDogs];
    setDataDogs(newDataDogs);
  }

  const rejectPerfil = () => {
    discoverData[0].rejects = true;
    removerdataDogs();
    console.log(dataDogs);
  }
  const acceptPerfil = () => {
    discoverData[0].accepts = true;
    removerdataDogs();
    console.log(dataDogs);
  }

  const renderDiscover = () => {
    if(dataDogs.length > 0){
      return <Discover {...dataDogs[0]} rejectPerfil={rejectPerfil} acceptPerfil={acceptPerfil}/>
    }else{
      return  <Styled.Container background={Colors[colorScheme].background}><Styled.ImgNoData source={noData} /></Styled.Container>
    }
  }

  return (
    renderDiscover()
  );
}


