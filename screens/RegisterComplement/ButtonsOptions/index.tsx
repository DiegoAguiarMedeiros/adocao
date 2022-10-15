import * as Styled from './styles';
import useColorScheme from '../../../hooks/useColorScheme';
import Colors from '../../../constants/Colors';
import Button from '../../../components/Button';
import { useEffect, useState } from 'react';



export default function ButtonsOptions({ options,optionState, setOptionState }: any) {
  const colorScheme = useColorScheme();
  
  const [count, setCount] = useState(0);
  const activeButton = (key: number, buttonOption: string) => {
    optionState[key - 1].active = buttonOption;
    console.log('optionState2', optionState)
    setOptionState(optionState);
  }
  useEffect(() => {
    renderOptions(optionState)
  }, [optionState]);


  const renderOptions = (option: any) => {
    return option.map((option: any) => (
      < Styled.ContainerButton >
        <Styled.RowTitle>
          <Styled.TxTitle>
            {option.title}
          </Styled.TxTitle>
        </Styled.RowTitle>
        {
          option.options.map((option2: any) => (
            <Styled.RowButton>
              <Button
                textColor={option.active && option.active === option2 ? Colors[colorScheme].buttonOptionColorTextActive : Colors[colorScheme].buttonOptionColorText}
                style={{ marginRight: 16 }}
                colorShadow={Colors[colorScheme].buttonShadow}
                onPress={() => activeButton(option.key, option2)}
                color={option.active && option.active === option2 ? Colors[colorScheme].buttonOptionColorActive : Colors[colorScheme].buttonOptionColor}
                textSize="mediumtxt"
                size='login'
              >
                {option2}
              </Button>
            </Styled.RowButton>
          ))
        }

      </Styled.ContainerButton>
    ))
  }


  return (
    <Styled.Container background={Colors[colorScheme].backgroundLogin}>

      <Styled.TxTitle>You clicked {count} times</Styled.TxTitle>
      <Button textColor={Colors[colorScheme].buttonOptionColorTextActive}
        style={{ marginRight: 16 }}
        colorShadow={Colors[colorScheme].buttonShadow}
        onPress={() => setCount(count + 1)}
        color={Colors[colorScheme].buttonOptionColorActive}
        textSize="mediumtxt"
        size='login'
      >
        Click me
      </Button>
      {renderOptions(optionState)}
    </Styled.Container >
  );
}