import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';


export const Container = styled.View<{
  background: string,
}>`
  background:${(props) => props.background};
    width: ${Dimensions.get('window').width};
    height: ${Dimensions.get('window').height};
`;


export const ContainerButtons = styled.View`
    width: 100%;
    padding:5px;
    display:flex;
    flex-direction: row;
     flex-wrap: wrap;
    `;

export const RowButton = styled.View`
width: 50%;
  padding:5px;
`;