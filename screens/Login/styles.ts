import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';


export const Container = styled.View<{
  background: string,
}>`
  background:${(props) => props.background};
    width: ${Dimensions.get('window').width};
    height: ${Dimensions.get('window').height};
    padding: 120px 50px;
    `;

export const input = styled.TextInput<{
  background: string,
  text: string,
}>`
    border: ${(props) => `${props.background} solid 1px`}
    height:50px;
    font-size:20px;
    color:${(props) => props.text};
    background-color:${(props) => props.background};
    border-radius:10px;
    margin:15px 0;
    padding:8px;
`
export const Buttons = styled.View`
  text-align: center;
`;

export const ImgLogin = styled.Image`
position:absolute;
top:65%;
  width: 150%;
  height: 100%;
`;

export const LinkAqui = styled.TouchableOpacity`
`;
export const txCadastreSe = styled.Text`
color:#87CEEB;
font-size: 20px;
    `;
export const txTenhoConta = styled.Text`
    margin-top: 20px;
    font-size: 20px;
`;
export const txError = styled.Text`
    color:#f00;
    margin-top: 20px;
    font-size: 20px;
`;