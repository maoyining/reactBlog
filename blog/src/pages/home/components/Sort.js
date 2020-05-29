import React, { PureComponent } from 'react'
import { SortWrapper, SortItem } from '../style'
import { connect } from 'react-redux'
import { actionCreator } from '../store'
class Sort extends PureComponent {
  render() {
    return (
      <SortWrapper>
        <p className="sortInfo">{"  我的分类  "}<i className="iconfont">&#xe7ab;</i></p>
        <SortItem>{"查看全部"}</SortItem>
        {this.props.list.map((item, index) => {
          return (
            <SortItem 
              onClick={()=>{this.props.getSortList(item)}} 
              key={index}
            >{item}{' 篇'}
            </SortItem>
          )
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