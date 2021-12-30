import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import store from './store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
        <NavigationContainer>
          <TopTabNavigator />
        </NavigationContainer>
    </Provider>
  );
};

export default App;