import React from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Button, Addition, SearchWrapper } from './style'
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux'
import { actionCreators } from './store';
function Header (props){
    return (
      <HeaderWrapper>
        <Logo></Logo>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载简历</NavItem>
          <NavItem className='right'><i className="iconfont">&#xe605;</i></NavItem>
          <NavItem className='right'>登陆</NavItem>
          <SearchWrapper>
            <CSSTransition
              in={props.focused}
              timeout={200}
              classNames="slide">
              <NavSearch
                className={props.focused ? 'focused' : ''}
                onFocus={props.handleInputFocus}
                onBlur={props.handleInputBlur}>
              </NavSearch>
            </CSSTransition>
            <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe69d;</i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button>分享</Button>
          <Button className='writing'>
            <i className="iconfont">&#xe678;</i>&nbsp;
            创作
          </Button>
        </Addition>
      </HeaderWrapper>
    )
}

const mapStateToProps=(state)=>{
  return {
    focused:state.header.focused
  }
}
const mapDispatchToProps=(dispatch)=>({
  handleInputFocus(){
    const action = actionCreators.getFocusedAction()
    dispatch(action)
  },
  handleInputBlur(){
    const action = actionCreators.getBlurAction()
    dispatch(action)
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Header)