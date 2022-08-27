import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View<{
  background: string,
}>`
  background:${(props) => props.background};
    width: ${Dimensions.get('window').width};
    height: ${Dimensions.get('window').height};
    padding:10px;
    `;


export const ImgNoData = styled.Image`
  width: 300px;
  height: 300px;
  margin: 200px auto 0;
  border-radius: 10px;
`;
