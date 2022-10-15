import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';


export const Container = styled.View<{
  background: string,
}>`
  background:${(props) => props.background};
  width: ${Dimensions.get('window').width};
  padding: 10px 10px;
`;

export const ContainerButton = styled.View`
  display:flex;
  flex-direction: row;
   flex-wrap: wrap;
`;
export const RowTitle = styled.View`
  padding:5px;
  width: 100%;
`;
export const TxTitle = styled.Text`
  margin-top: 20px;
  font-size: 18px;
`;
export const RowButton = styled.View`
width: 50%;
  padding:5px;
`;