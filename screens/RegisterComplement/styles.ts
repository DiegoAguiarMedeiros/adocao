import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';


export const Container = styled.View<{
  background: string,
}>`
  background:${(props) => props.background};
    width: ${Dimensions.get('window').width};
    height: ${Dimensions.get('window').height};
`;