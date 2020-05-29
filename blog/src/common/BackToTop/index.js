import React, { PureComponent } from 'react'
import { BackWrapper } from './style'
import {connect} from 'react-redux'
import { actionCreator } from '../../pages/home/store'

class BackToTop extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      this.props.showScroll ?
      <BackWrapper onClick={this.handleScrollTop}>
        <i className="iconfont">&#xe608;</i> 
      </BackWrapper>: null
    )
  }
  componentDidMount() {
    this.bindEvents();
  }
  //性能优化：加入防抖函数防止频发触发scroll事件，只有在滚轮停下超过500ms才会触发事件
  debounce(fn,delay=200){
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
    window.addEventListener('scroll', this.debounce(this.props.changeScrollTopShow))
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
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 300) {
      dispatch(actionCreator.toggleTopShow(true))
    } else {
      dispatch(actionCreator.toggleTopShow(false))
    }
  }
})
export default connect(mapStateToProps, DispatchToProps)(BackToTop)