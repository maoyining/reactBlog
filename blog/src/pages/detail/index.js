import React, { Component } from 'react'
import { DetailWrapper, Header, Content, Info } from './style'
import Mark from '../detail/components/Mark'
class Detail extends Component {
  render() {


    return (
      <DetailWrapper>
        <Header>JavaScript事件冒泡 事件捕获 事件委托</Header>
        <Info>
          <i className="iconfont">&#xe600;</i>
          {"2020-05-22 · "}
          <i className="iconfont">&#xe7ab;</i>
          {"JavaScript篇"}</Info>
        <Content>
          <Mark></Mark>
        </Content>
      </DetailWrapper>
    )
  }
}
export default Detail