import React from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Button, Addition, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoItem } from './style'
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux'
import { actionCreators } from './store';
import { Link } from 'react-router-dom'

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
      <Link to='/' >
        <Logo></Logo>
      </Link>
      <Nav>
        <Link to='/'>
          <NavItem className='left active'>首页</NavItem>
        </Link>
        <NavItem className='left'><a href="/assets/web前端实习-毛忆宁-13588804610.pdf">查看简历</a></NavItem>
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
          <a href="/assets/回顾与作品集.pdf">作品集</a> 
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