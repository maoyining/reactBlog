import React, { PureComponent } from 'react'
import { HomeWrapper, HomeLeft, HomeRight, BackToTop } from './style'
import homePic from '../../static/cat.png'
import List from './components/List'
import Sort from './components/Sort'
import Collection from './components/Collection'
import { connect } from 'react-redux'
import { actionCreator } from './store'
class Home extends PureComponent {

  //性能调优
  
  handleScrollTop() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt="图片无法展示" title="今天你学习了吗？" className="banner-img" src={homePic}></img>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Sort />
          <Collection />
        </HomeRight>
        {
          this.props.showScroll ?
          <BackToTop onClick={this.handleScrollTop}>
            <i className="iconfont">&#xe608;</i>
          </BackToTop> : null
        }

      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.initHomeDate()
    this.bindEvents();
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

  //注意绑定事件之后一定要在组件被销毁前移除
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapStateToProps = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const DispatchToProps = (dispatch) => ({
  initHomeDate() {
    dispatch(actionCreator.getHomeList())
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 300) {
      dispatch(actionCreator.toggleTopShow(true))
    } else {
      dispatch(actionCreator.toggleTopShow(false))
    }
  }
})
export default connect(mapStateToProps, DispatchToProps)(Home)