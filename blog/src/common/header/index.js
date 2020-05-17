import React from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Button, Addition, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoItem } from './style'
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux'
import { actionCreators } from './store';
function Header(props) {
  const getSearchList = props.searchList.map((item, index) => {
    return <SearchInfoItem key={index}>{item}</SearchInfoItem>
  })
  const getSearchArea = (show) => {
    if (show === true) {
      return (
        <SearchInfo>
          <SearchInfoTitle>猜你想搜</SearchInfoTitle>
          <div>
            {getSearchList}
          </div>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
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
          {getSearchArea(props.focused)}
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

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    searchList: state.getIn(['header', 'searchList'])
  }
}
const mapDispatchToProps = (dispatch) => ({
  handleInputFocus() {
    dispatch(actionCreators.getSearchList())
    dispatch(actionCreators.getFocusedAction())
  },
  handleInputBlur() {
    const action = actionCreators.getBlurAction()
    dispatch(action)
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)