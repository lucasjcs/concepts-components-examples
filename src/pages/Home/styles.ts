import styled from 'styled-components/native';

import { colors } from '../../assets/styles';

export const Container = styled.View`
  flex: 1;
  background: #efefef;
  padding: 15px;
`;

export const Card = styled.View`
  width: 200px;
  height: 150px;
  border-radius: 8px;
  background: black;
`;

export const SliderContent = styled.View`
  flex: 1;
  background: #bbb;
  border-radius: 35px;
`;

export const TitleSlider = styled.Text`
  color: white;
  font-size: 18px;
  margin-left: 25px;
  font-weight: bold;
`;

export const ButtonSliderContent = styled.TouchableOpacity`
  height: 30px;
  background: transparent;
`;

export const ButtonSlider = styled.View`
  background: ${colors.white};
  width: 70px;
  height: 4px;
  margin-top: 10px;
  border-radius: 8px;
  align-self: center;
`;

export const BottomSliderContent = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 20px;
  margin-top: 20px;
`;

export const ShowMoreButtom = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 14px;
  border-radius: 8px;
  width: 200px;
  background: #ccc;
`;

export const ShowMoreTextButton = styled.Text`
  font-size: 18px;
  color: ${colors.white};
  font-weight: bold;
`;

export const ListFavoriteView = styled.View`
  padding: 20px;
`;

export const CardFav = styled.View`
  height: 100px;
  width: 180px;
  border-radius: 10px;
  background: ${colors.white};
  padding: 20px;
  margin-top: 10px;
  margin-right: 10px;
`;

export const EventTitle = styled.Text`
  font-size: 16px;
  align-self: center;
  margin-top: 5px;
`;

export const Footer = styled.View`
  height: 20px;
  margin-bottom: 25px;
`;
