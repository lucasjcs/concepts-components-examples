import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
`;

export const Categories = styled.View`
`;

export const CategoryItemContent = styled.View`
  margin-top: 13px;
  margin-right: 10px;
`;

export const CategoryHeaderText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #555;
`;

export const CategoryLink = styled.TouchableOpacity`
    align-items: center;
`;
export const CategoryImageContent = styled.View`
  height: 100px;
  width: 100px;
  background: white;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;

`;
export const CategoryImage = styled.Image`
  height: 200px;
  width: 100px;
`;

export const CategoryTitleText = styled.Text`
  font-size: 15px;
  color: #555;
`;

export const EventsContent = styled.View`
  margin-top: 40px;
`;

export const HighlightHeaderText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #555;
`;

export const HighlightItemContent = styled.View`
  margin-top: 20px;
`;

export const ImageHighlight = styled.Image`
  height: 90%;
  width: ${width - 100}px;
`;

export const HighlightLink = styled.TouchableOpacity``;
export const HighlightImageContent = styled.View`
  height: 200px;
  border-width: 0.5px;
  border-color: #ccc;
  border-radius: 8px;
  background: #fff;
  justify-content: center;
  align-items: center;
`;
export const HighlightTitleText = styled.Text`
  font-size: 16px;
  color: #555;
  padding-top: 3px;
`;
