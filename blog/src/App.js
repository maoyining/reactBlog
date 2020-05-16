import React from 'react';
import { GlobalStyled } from './style';
import { GlobalStyledIcon } from './static/iconfont/iconfont'
import Header from './common/header'
import store from './store'
import { Provider } from 'react-redux'
function App() {
  return (
    <Provider store={store}>
      <GlobalStyled />
      <GlobalStyledIcon />
      <Header />
    </Provider>
  );
}

export default App;
