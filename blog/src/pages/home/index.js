import React,{Component} from 'react'
import { HomeWrapper, HomeLeft,HomeRight } from './style'
import homePic from '../../static/cat.png'
import List from './components/List'
import Sort from './components/Sort'

class Home extends Component {
  render(){
    return(
      <HomeWrapper>
        <HomeLeft>
          <img alt="图片无法展示" title="今天你学习了吗？" className="banner-img" src={homePic}></img>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Sort></Sort>
        </HomeRight>
       
      </HomeWrapper>
    )
  }
}
export default Home