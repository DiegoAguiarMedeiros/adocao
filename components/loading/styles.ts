import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';


export const Container = styled.View<{
  background: string,
}>`
z-index:10;
    position:absolute;
    background:${(props) => props.background};
    opacity:.5;
    width: ${Dimensions.get('window').width};
    height: ${Dimensions.get('window').height};
    padding: 120px 50px;
    `;
export const Img = styled.Image`
margin: auto;
border-radius: 10px;
  `;