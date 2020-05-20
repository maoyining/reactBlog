import React, { Component } from 'react'
import { SortWrapper, SortItem } from '../style'
import { connect } from 'react-redux'
class Sort extends Component {
  render() {
    console.log(this.props.list)
    return (
      <SortWrapper>
        <p className="sortInfo">我的分类</p>
        {this.props.list.map((item, index) => {
          return (<SortItem key={index}>{item}{' >'}</SortItem>)
        })}
      </SortWrapper>

    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'sortList'])
})

export default connect(mapStateToProps, null)(Sort)