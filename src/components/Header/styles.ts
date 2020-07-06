import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Dimensions } from 'react-native';

import { colors } from '../../assets/styles';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  margin-top: ${getStatusBarHeight()}px;
`;

export const HeaderContent = styled.View`
  background: white;
  padding: 10px;
  border-bottom-width: 0.5px;
  border-bottom-color: ${colors.inputBg};
  justify-content: center;
`;

export const HeaderItem = styled.View`
  height: 100px;
  width: 100px;
  background: black;
  position: absolute;
  top: 140px;
  left: ${width / 2 - 50}px;
  border-radius: 500px;
`;

export const AccountLink = styled.View`
  flex-direction: row-reverse
`;
