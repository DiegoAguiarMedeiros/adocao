import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import * as Styled from './styles';


export type BtnProps = TouchableOpacityProps & {
  children: React.ReactNode;
  color?: 'yellow' | 'blue' | 'white' | 'black';
  colorShadow?: 'yellowShadow' | 'blueShadow' | 'whiteShadow' | 'blackShadow';
  size?: 'larger' | 'medium' | 'xmedium' | 'xxmedium' | 'small' | 'largerCircle' | 'mediumCircle' | 'xmediumCircle' | 'xxmediumCircle' | 'smallCircle';
  textColor?: 'whiteText' | 'blackText' | 'blueText' | 'grayText';
  textSize?: 'mediumtxt';
  circle?: true | false;
  active?: boolean;
  onPress: () => void;
};

export default function Button({
  textColor,
  textSize,
  size,
  color,
  colorShadow,
  children,
  onPress
}: BtnProps) {
  return (
    <Styled.Button color={color} size={size} onPress={onPress} colorShadow={colorShadow}>
      <Styled.TextButton textSize={textSize} textColor={textColor}>
        {children}
      </Styled.TextButton>
    </Styled.Button>
  );
}
