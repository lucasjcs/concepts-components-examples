import 'react-native-gesture-handler';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { YellowBox } from 'react-native';
import Routes from './navigation/Routes';

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

Icon.loadFont();
Feather.loadFont();

// import { Container } from './styles';

const App: React.FC = () => (
  <Routes />
);

export default App;
