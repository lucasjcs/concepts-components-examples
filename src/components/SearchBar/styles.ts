import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { colors } from '../../assets/styles';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  height: 80px;
`;

export const SearchBarInput = styled.TextInput`
  border-width: 0.5px;
  border-color: ${colors.inputBg};
  padding: 20px;
  border-radius: 15px;
  color: ${colors.button};
`;

export const InputGroup = styled.View`
  
`;

export const IconContent = styled.View`
  position: absolute;
  left: ${width - 64}px;
  top: 15px;
`;
