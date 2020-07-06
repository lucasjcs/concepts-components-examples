import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { View } from 'react-native';
import { Container, HeaderContent, AccountLink } from './styles';

const Header: React.FC = () => (
  <Container>
    <HeaderContent>
      <View>
        <AccountLink>
          <Icon name="account-circle" size={34} color="#555" />
        </AccountLink>
      </View>
    </HeaderContent>
  </Container>

);

export default Header;
