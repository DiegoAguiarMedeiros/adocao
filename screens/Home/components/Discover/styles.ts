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

export const containerImgLeft = styled.TouchableOpacity`
margin:10px 0 0 10px;
position:absolute;
width:50%;
height:59%;
z-index:9999;
`    
export const containerImgRight = styled.TouchableOpacity`
margin:10px 0 0 10px;
left:50%;
position:absolute;
height:59%;
width:50%;
z-index:9999;
`    

export const Img = styled.Image`
  width: 100%;
  height: 60%;
  border-radius: 10px;
`;
export const ImgNoData = styled.Image`
  width: 300px;
  height: 300px;
  margin: 200px auto 0;
  border-radius: 10px;
`;

export const ContainerProfile = styled.View<{
  background: string,
  shadow: string,
}>`
  background:${(props) => props.background};
  width: 100%;
  border-radius: 10px;
  padding:15px;
  shadow-color: ${(props) => props.shadow};
  shadow-offset: {width: 1, height: 2};
  shadow-opacity: 0.8;
  shadow-radius: 2;
  top:-10px; 
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

export const ContainerButtons = styled.View<{
  background: string,
}>`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background:${(props) => props.background};
  width: 100%;
  border-radius: 10px;
  padding:15px;
`;
export const Buttons = styled.View`
  text-align: center;
`;