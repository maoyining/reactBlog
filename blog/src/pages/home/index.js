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
  //性能优化：加入防抖函数防止频发触发scroll事件，只有在滚轮停下超过500ms才会触发事件
  debounce(fn,delay=500){
    let timer=null;//timer在闭包中
    return function(){
      if(timer){
        clearTimeout(timer)
      }
      timer=setTimeout(()=>{
        fn.apply(this,arguments)
        timer=null
      },delay)
    }
  }
  bindEvents() {
    window.addEventListener('scroll', this.debounce(this.props.changeScrollTopShow),500)
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
    console.log(document.documentElement.scrollTop)
    if (document.documentElement.scrollTop > 300) {
      dispatch(actionCreator.toggleTopShow(true))
    } else {
      dispatch(actionCreator.toggleTopShow(false))
    }
  }
})
export default connect(mapStateToProps, DispatchToProps)(Home)