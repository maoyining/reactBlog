import React, { Component } from 'react'
import { DetailWrapper, Header, Content, Info } from './style'
import Mark from '../detail/components/Mark'
class Detail extends Component {
  render() {

    const {category,id,title,time}=this.props.match.params
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Info>
          <i className="iconfont">&#xe600;</i>
          {"  "}{time}{" · "}
          <i className="iconfont">&#xe7ab;</i>
          {"  "}{category}{"篇"}</Info>
        <Content>
          <Mark category={category} id={id}></Mark>
        </Content>
        <Info>已经到底啦~</Info>
      </DetailWrapper>
    )
  }
}
export default Detail