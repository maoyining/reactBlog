import React, { Component } from 'react'
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch} from './style'
class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo></Logo>
        <Nav>
          <NavItem className='left active' href='/'>首页</NavItem>
          <NavItem className='left'>下载简历</NavItem>
          <NavItem className='right'>Aa</NavItem>
          <NavItem className='right'>登陆</NavItem>
          <NavSearch></NavSearch>
        </Nav>
      </HeaderWrapper>
    )
  }
}

export default Header