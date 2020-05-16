import React, { Component } from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Button,Addition,SearchWrapper } from './style'
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
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载简历</NavItem>
          <NavItem className='right'><i className="iconfont">&#xe605;</i></NavItem>
          <NavItem className='right'>登陆</NavItem>
          <SearchWrapper>
          <NavSearch></NavSearch>
          <i className='iconfont'>&#xe69d;</i>
          </SearchWrapper>
        </Nav>
        <Addition>
         <Button>分享</Button>
         <Button className='writing'>
           <i className="iconfont">&#xe678;</i>&nbsp;
           创作</Button> 
        </Addition>
      </HeaderWrapper>
    )
  }
}

export default Header