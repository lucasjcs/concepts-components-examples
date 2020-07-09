import React, { useState } from 'react';

import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Text } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../assets/styles';
import {
  Container, SearchBarInput, InputGroup, IconContent,
} from './styles';

const SearchBar: React.FC = () => {
  const [inputText, setInputText] = useState('');

  const searchSubmit = () => {
    alert('oi');
    setInputText('');
  };

  return (
    <Container>
      <InputGroup>
        <SearchBarInput
          placeholder="Qual terapia você precisa?"
          autoCorrect={false}
          onChangeText={(text) => setInputText(text)}
          onSubmitEditing={searchSubmit}
        />
        <IconContent>
          {inputText === '' ? (
            <Feather name="search" size={24} color={colors.inputBg} />
          ) : (
            <TouchableOpacity onPress={searchSubmit}>
              <Icon name="send" size={25} color={colors.black} />
            </TouchableOpacity>
          )}
        </IconContent>
      </InputGroup>
    </Container>
  );
};
export default SearchBar;
