import styled, {css} from 'styled-components/native';
import {BtnProps} from './index';
import {RFPercentage} from 'react-native-responsive-fontsize';


type Props = Pick<BtnProps, 'color' | 'colorShadow' | 'size' | 'textColor' | 'textSize'>;



const modifiersButton = {

  yellow: () => css`
    background-color: #FFFF00;
    shadow-color: #FFFF00;
  `,

  blue: () => css`
    background-color: #4169E1;
  `,

  white: () => css`
    background-color: #ffffff;
  `,

  black: () => css`
    background-color: #000000;
  `,
  yellowShadow: () => css`
    shadow-color: #FFFF00;
    shadow-offset: {width: 1, height: 2};
    shadow-opacity: 0.8;
    shadow-radius: 2;
    elevation: 3; 
  `,

  blueShadow: () => css`
    shadow-color: #4169E1;
    shadow-offset: {width: 1, height: 2};
    shadow-opacity: 0.8;
    shadow-radius: 2;
    elevation: 3; 
  `,

  whiteShadow: () => css`
    shadow-color: #ffffff;
    shadow-offset: {width: 1, height: 2};
    shadow-opacity: 0.8;
    shadow-radius: 2;
    elevation: 3; 
  `,

  blackShadow: () => css`
    shadow-color: #000000;
    shadow-offset: {width: 1, height: 2};
    shadow-opacity: 0.8;
    shadow-radius: 2;
    elevation: 3; 
  `,

  // Color Text
  blueText: () => css`
    color: #4169E1;
  `,

  whiteText: () => css`
    color:  #ffffff;
  `,

  blackText: () => css`
    color: #000000;
  `,

  grayText: () => css`
    color: #333333;
  `,

  //Size Buttons
  larger: () => css`
    width: ${RFPercentage(24.1)}px;
    height: ${RFPercentage(4.7)}px;
  `,

  medium: () => css`
    width: ${RFPercentage(18.9)}px;
    height: ${RFPercentage(3.8)}px;
  `,

  xmedium: () => css`
    width: 67px;
    height: 32px;
  `,

  xxmedium: () => css`
    width: 136px;
    height: 36px;
  `,

  small: () => css`
    width: 91px;
    height: 28px;
  `,

  mediumtxt: () => css`
    font-size: ${RFPercentage(2.3)}px;
  `,
  largerCircle: () => css`
    width: ${RFPercentage(24.1)}px;
    height: ${RFPercentage(24.1)}px;
    border-radius: 50;
  `,

  mediumCircle: () => css`
    width: ${RFPercentage(18.9)}px;
    height: ${RFPercentage(18.9)}px;
    border-radius: 50;
  `,

  xmediumCircle: () => css`
    width: 100px;
    height: 100px;
    border-radius: 50;
  `,

  xxmediumCircle: () => css`
    width: 75px;
    height: 75px;
    border-radius: 50;
  `,

  smallCircle: () => css`
    width: 45px;
    height: 45px;
    border-radius: 50;
  `,
};

export const Button = styled.TouchableOpacity<Props>`
  ${({color, size, colorShadow}) => css`
    justify-content: center;
    align-items: center;
    border-radius: 15x;
    ${!!color && modifiersButton[color]}
    ${!!size && modifiersButton[size]}
    ${!!colorShadow && modifiersButton[colorShadow]}
  `}
`;

export const TextButton = styled.Text<Props>`
  ${({ textColor, textSize}) => css`
    font-size: ${!!textSize && textSize === 'mediumtxt' ? `${RFPercentage(2.3)}px` : `${RFPercentage(1.9)}px`};
    ${!!textColor && modifiersButton[textColor]}
  `}
`;
