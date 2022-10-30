import { ScrollView, StyleSheet, Linking, TextInput } from 'react-native';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';
import * as Styled from './styles';
import restUser from "../../api/user/rest-user";
import { useEffect, useState } from 'react';
import Button from '../../components/Button';
export default function ChatScreen() {
  const colorScheme = useColorScheme();
  const [canFetchData, setCanFetchData] = useState(true);
  const [pet, setPet] = useState([]);
  const fetchPet = async () => {
    const pets = await restUser.getAllAcceptPets()
    setPet(pets.data.petts)
    setCanFetchData(false);
  };

  useEffect(() => {
    if (canFetchData) {
      fetchPet();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Styled.Container background={Colors[colorScheme].background}>


      <ScrollView style={styles.scrollView}>
        <Styled.ContainerInner background={Colors[colorScheme].background} qtd={pet.length}>
          {pet && pet.map((p: any) => (
            <Styled.ContainerList background={Colors[colorScheme].background}>
              {console.log('p', p)}
              <Styled.Name color={Colors[colorScheme].text}>{p.name} ({p.company.name})
              </Styled.Name>
              <Styled.breed color={Colors[colorScheme].textSecondary}>{p.breed}
              </Styled.breed>
              <Styled.Img source={{ uri: p.imgs[0] }} />
              <Styled.ContainerButtons>
                <Styled.RowButton>
                  <Button
                    textColor={Colors[colorScheme].buttonOptionColorTextActive}
                    style={{ marginRight: 16 }}
                    colorShadow={Colors[colorScheme].buttonShadow}
                    onPress={() => Linking.openURL(`mailto:${p.company.email}`)}
                    color={Colors[colorScheme].buttonOptionColorActive}
                    textSize="mediumtxt"
                    size='login'
                  >
                    Email
                  </Button>
                </Styled.RowButton>
                <Styled.RowButton>
                  <Button
                    textColor={Colors[colorScheme].buttonOptionColorTextActive}
                    style={{ marginRight: 16 }}
                    colorShadow={Colors[colorScheme].buttonShadow}
                    onPress={() =>
                      Linking.canOpenURL(`whatsapp://send?text=oi`).then(supported => {
                        if (supported) {
                          return Linking.openURL(
                            `whatsapp://send?phone=${p.company.tel}&text=Oi`
                          );
                        } else {
                          return Linking.openURL(
                            `https://api.whatsapp.com/send?phone=${p.company.tel}&text=Oi`
                          );
                        }
                      })}
                    color={Colors[colorScheme].buttonOptionColorActive}
                    textSize="mediumtxt"
                    size='login'
                  >
                    Wahts'App
                  </Button>
                </Styled.RowButton>
              </Styled.ContainerButtons>
            </Styled.ContainerList>

          ))}
        </Styled.ContainerInner >

      </ScrollView>
    </Styled.Container >
  );
}

const styles = StyleSheet.create({

  scrollView: {
    height: '100%',
  },

});