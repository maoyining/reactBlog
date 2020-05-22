import React, { PureComponent } from 'react'
import { SortWrapper, SortItem } from '../style'
import { connect } from 'react-redux'
import { actionCreator } from '../store'
class Sort extends PureComponent {
  render() {
    return (
      <SortWrapper>
        <p className="sortInfo">我的分类</p>
        {this.props.list.map((item, index) => {
          return (<SortItem onClick={()=>{this.props.getSortList(item)}} key={index}>{item}{' >'}</SortItem>)
        })}
      </SortWrapper>

    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'sortList'])
})

const dispatchToProps = (dispatch) =>({
  getSortList(item){
    const value=item.toLowerCase()
    dispatch(actionCreator.getSortList(value))
  }
})
export default connect(mapStateToProps, dispatchToProps)(Sort)