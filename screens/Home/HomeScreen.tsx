import { StyleSheet } from 'react-native';

import Discover from './components/Discover';
import { RootTabScreenProps } from '../../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <Discover />
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