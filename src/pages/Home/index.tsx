import React, { useState, useRef } from 'react';

import {
  Animated, Dimensions, FlatList, View,
} from 'react-native';

import SlidingUpPanel from 'rn-sliding-up-panel';

import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Events from '../../components/Events';

import {
  Container,
  SliderContent,
  ButtonSlider,
  ButtonSliderContent,
  ShowMoreButtom,
  ShowMoreTextButton,
  BottomSliderContent,
  TitleSlider,
  ListFavoriteView,
  CardFav,
  EventTitle,
  Footer,
} from './styles';

const Home: React.FC = () => {
  const { height } = Dimensions.get('window');

  const fakeData = [
    { id: 1, name: 'Encore - Live Sessions' },
    { id: 2, name: 'DFDC - Mente Andorinha ' },
    { id: 3, name: 'Valentino: Funk-me' },
    { id: 4, name: 'Batalha do Zerão' },
  ];

  function renderFavItem(item: any) {
    return (
      <TouchableOpacity>
        <View>
          <CardFav />
          <EventTitle style={{ color: 'white' }}>{item.name}</EventTitle>
        </View>
      </TouchableOpacity>

    );
  }

  const [dragRange] = useState({
    top: height - (height / 2),
    bottom: 30,
  });

  const draggedValue = new Animated.Value(30);
  const ModalRef = useRef(null);

  return (
    <>
      <Header />
      <Container>
        <SearchBar />
        <Events />
        <SlidingUpPanel
          ref={ModalRef}
          draggableRange={dragRange}
          animatedValue={draggedValue}
          backdropOpacity={0}

          friction={0.9}
        >
          <SliderContent>
            <ButtonSliderContent>
              <ButtonSlider />
            </ButtonSliderContent>
            <TitleSlider>Favorites events</TitleSlider>
            <ListFavoriteView>
              <FlatList
                data={fakeData}
                numColumns={2}
                renderItem={({ item }) => renderFavItem(item)}
              />
            </ListFavoriteView>
            <BottomSliderContent>
              <ShowMoreButtom>
                <ShowMoreTextButton>View Full List</ShowMoreTextButton>
              </ShowMoreButtom>
            </BottomSliderContent>
          </SliderContent>
        </SlidingUpPanel>
        <Footer />
      </Container>
    </>
  );
};

export default Home;
