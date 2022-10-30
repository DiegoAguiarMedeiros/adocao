import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View<{
  background: string,
}>`
  background:${(props) => props.background};
    width: ${Dimensions.get('window').width};
    height: ${Dimensions.get('window').height};
    `;
export const ContainerInner = styled.View<{
  background: string,
  qtd: number
}>`
    background:${(props) => props.background};
    width: ${Dimensions.get('window').width};
    height: ${(props) =>  Dimensions.get('window').height + (props.qtd * 300)}px;
`;

export const ContainerList = styled.View<{
  background: string,
}>`
background:${(props) => props.background};
border-radius: 5px;
margin: 5px 0;
border: 1px solid #ccc;
height: 450px;
padding: 10px;
shadow-color: #000000;
shadow-offset: { width: 2, height: 2 };
shadow-opacity: 0.8;
elevation: 3;
`;

export const Name = styled.Text<{
  color: string,
}>`
color:${(props) => props.color};
font-weight: bold;
font-size: 20px;
`;
export const breed = styled.Text<{
  color: string,
}>`
color:${(props) => props.color};
font-size: 15px;
`;

export const Img = styled.Image`
width: 100 %;
height: 75 %;
border-radius: 10px;
`;

export const ContainerButtons = styled.View`
width: 100 %;
padding: 5px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
`;

export const RowButton = styled.View`
width: 50 %;
padding: 5px;
`;