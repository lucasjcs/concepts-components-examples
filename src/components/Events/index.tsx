import React from 'react';
import { FlatList } from 'react-native';

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
} from './styles';

const Events: React.FC = () => {
  const categories = [
    { id: '1', name: 'Baladas' },
    { id: '2', name: 'Pubs' },
    { id: '3', name: 'Underground' },
    { id: '4', name: 'Rock Bar' },
    { id: '5', name: 'Alternativo' },
    { id: '6', name: 'Eletronico' },
  ];

  const renderCategories = (item: any) => (
    <CategoryItemContent>
      <CategoryLink>
        <CategoryImageContent />
        <CategoryTitleText>{item.name}</CategoryTitleText>
      </CategoryLink>
    </CategoryItemContent>
  );

  const renderHighlights = (item: any) => (
    <HighlightItemContent>
      <HighlightLink>
        <HighlightImageContent />
        <HighlightTitleText>{item.name}</HighlightTitleText>
      </HighlightLink>
    </HighlightItemContent>
  );

  return (
    <Container>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Categories>
          <CategoryHeaderText>Categories</CategoryHeaderText>
          <FlatList
            data={categories}
            renderItem={({ item }) => renderCategories(item)}
            horizontal
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </Categories>
        <EventsContent>
          <HighlightHeaderText>Highlights</HighlightHeaderText>
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
