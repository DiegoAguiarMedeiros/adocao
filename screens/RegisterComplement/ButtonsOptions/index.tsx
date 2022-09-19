import * as Styled from './styles';
import useColorScheme from '../../../hooks/useColorScheme';
import Colors from '../../../constants/Colors';
import Button from '../../../components/Button';



export default function ButtonsOptions({ options }: any) {
  const colorScheme = useColorScheme();


  const montButtonsOptions = (options: any) => {
    return
  }

  return (
    <Styled.Container background={Colors[colorScheme].backgroundLogin}>
      {console.log(options)}
      {options.map((option: any) => (
        <Styled.ContainerButton>
          <Styled.RowTitle>
            <Styled.TxTitle>
              {option.title}
            </Styled.TxTitle>
          </Styled.RowTitle>
          {option.options.map((option2: any) => (
            <Styled.RowButton>
              <Button
                textColor={Colors[colorScheme].buttonOptionColorText}
                style={{ marginRight: 16 }}
                colorShadow={Colors[colorScheme].buttonShadow}
                onPress={() => { console.log('RegisterComplement') }}
                color={Colors[colorScheme].buttonOptionColor}
                textSize="mediumtxt"
                size='login'
              >
                {option2}
              </Button>
            </Styled.RowButton>
          ))}

        </Styled.ContainerButton>
      ))}
    </Styled.Container>
  );
}