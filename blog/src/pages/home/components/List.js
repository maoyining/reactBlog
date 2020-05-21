import React, { Component } from 'react'
import { ListItem, ListInfo,LoadMore } from '../style'
import { connect } from 'react-redux'
import { actionCreator } from '../store'
class List extends Component {

  render() {
    const {list,getMoreArticle,page} = this.props
    return (
      <div>
        {list.map((item, index) => {
         
          return (
            <ListItem key={index}/*{item.get('id')}*/>
              <img alt='' className="pic" src={item.get('imgUrl')}></img>
              <ListInfo>
                <h3 className="title">{item.get('title')} </h3>
                <p className="desc" >{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
          )
        })}
        <LoadMore onClick={()=>{getMoreArticle(page)}}>阅读更多</LoadMore>
      </div>
    )
  }

}
const DispatchToProps = (dispatch)=>({
  getMoreArticle(page){
    dispatch(actionCreator.getMoreArticle(page))
  }
})
const mapStateToProps = (state) => ({
  list : state.getIn(['home', 'articleList']),
  page : state.getIn(['home','articlePage'])
})
export default connect(mapStateToProps, DispatchToProps)(List)