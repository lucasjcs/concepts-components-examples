/* eslint-disable global-require */
import React from 'react';
import { FlatList, Image } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import {
  Container,
  Categories,
  CategoryItemContent,
  CategoryImageContent,
  CategoryTitleText,
  CategoryLink,
  EventsContent,
  HighlightHeaderText,
  HighlightItemContent,
  HighlightLink,
  HighlightTitleText,
  HighlightImageContent,
  CategoryHeaderText,
  ImageHighlight,
  CategoryImage,
} from './styles';

const Events: React.FC = () => {
  const categories = [
    { id: '1', name: 'Cognitiva', src: require('../../assets/images/transformed/PsycoOne.png') },
    { id: '2', name: 'Regressão', src: require('../../assets/images/transformed/PsycoTwo.png') },
    { id: '3', name: 'Terapia', src: require('../../assets/images/transformed/PsycoOne.png') },
    { id: '4', name: 'Psicanalise', src: require('../../assets/images/transformed/PsycoFour.png') },
    { id: '5', name: 'Alternativo', src: require('../../assets/images/transformed/PsycoFive.png') },
    { id: '6', name: 'Eletronico', src: require('../../assets/images/transformed/PsycoSix.png') },
  ];

  const renderCategories = (item: any) => (
    <CategoryItemContent>
      <CategoryLink>
        <CategoryImageContent>
          <CategoryImage source={require('../../assets/images/transformed/PsycoThree.png')} resizeMode="center" />
        </CategoryImageContent>
        <CategoryTitleText>{item.name}</CategoryTitleText>
      </CategoryLink>
    </CategoryItemContent>
  );

  const renderHighlights = (item: any) => (
    <HighlightItemContent>
      <HighlightLink>
        <HighlightImageContent>
          <ImageHighlight source={item.src} />
        </HighlightImageContent>
        <HighlightTitleText>{item.name}</HighlightTitleText>
      </HighlightLink>
    </HighlightItemContent>
  );
  return (
    <Container>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Categories>
          <CategoryHeaderText>Categorias</CategoryHeaderText>
          <FlatList
            data={categories}
            renderItem={({ item }) => renderCategories(item)}
            horizontal
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </Categories>
        <EventsContent>
          <HighlightHeaderText>Mais procuradas</HighlightHeaderText>
          <FlatList
            data={categories}
            renderItem={({ item }) => renderHighlights(item)}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </EventsContent>
      </ScrollView>
    </Container>
  );
};

export default Events;
