import React from 'react';
import { GlobalStyled } from './style';
import { GlobalStyledIcon } from './static/iconfont/iconfont'
import Header from './common/header'
import store from './store'
import { Provider } from 'react-redux'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
function App() {
  return (
    <Provider store={store}>
      <GlobalStyled /> 
      <GlobalStyledIcon />
      <BrowserRouter>
        <Header />
        <Route path='/' exact component={Home}></Route>
        <Route path='/detail/:category/:time/:title/:id' exact component={Detail}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
