import { StyleSheet } from 'react-native';
import * as Styled from './styles';
import Discover from './components/Discover';
import { RootTabScreenProps } from '../../types';
import discoverData from '../../data/discoverData.json';
import noData from '../../assets/images/no-data.jpg';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const colorScheme = useColorScheme();

  const renderDiscover = () => {
    if(discoverData){
      return <Discover data={discoverData} />
    }else{
      return  <Styled.Container background={Colors[colorScheme].background}><Styled.ImgNoData source={noData} /></Styled.Container>
    }
  }

  return (
    renderDiscover()
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
