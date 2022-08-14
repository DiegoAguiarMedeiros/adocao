import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
    width: ${Dimensions.get('window').width};
    height: ${Dimensions.get('window').height};
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    padding:10px;
    top: 20px;
`;


export const Title = styled.Text<{
  color: string;
}>`
    color:${(props) => props.color};
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 8px;
`;