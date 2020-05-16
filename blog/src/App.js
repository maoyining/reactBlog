import React from 'react';
import {GlobalStyled} from './style';
import {GlobalStyledIcon} from './static/iconfont/iconfont'
import Header from './common/header'
function App() {
  return (
    <div>
    <GlobalStyled/>
    <GlobalStyledIcon/>
    <Header/>    
    </div>
  );
}

export default App;
