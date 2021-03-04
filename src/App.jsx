import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import ColorsContext, { colors } from './Context/ColorsContext/ColorsContext';
import rootReducer from './redux/rootReducer';

import View from './Components/View/View';
import Layout from './Components/Layout/Layout';

import "./styles/sass/index.sass"
import "./App.sass";

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <ColorsContext.Provider value={colors}>
        <View>
          <Layout />
        </View>
      </ColorsContext.Provider>
    </Provider>
  )
}

export default App
