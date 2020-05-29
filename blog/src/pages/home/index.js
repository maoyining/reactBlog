import React, { PureComponent } from 'react'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import homePic from '../../static/cat.png'
import List from './components/List'
import Sort from './components/Sort'
import Collection from './components/Collection'
import { connect } from 'react-redux'
import { actionCreator } from './store'
import BackToTop from '../../common/BackToTop'
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
        <BackToTop></BackToTop>

      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.initHomeDate()
  }
}
const DispatchToProps = (dispatch) => ({
  initHomeDate() {
    dispatch(actionCreator.getHomeList())
  }
})
export default connect(null, DispatchToProps)(Home)