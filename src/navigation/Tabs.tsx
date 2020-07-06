import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';

const Tab = createBottomTabNavigator();

const Tabs: React.FC = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
  </Tab.Navigator>
);

export default Tabs;
