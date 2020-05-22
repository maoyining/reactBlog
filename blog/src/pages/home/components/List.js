import React, { PureComponent } from 'react'
import { ListItem, ListInfo, LoadMore } from '../style'
import { connect } from 'react-redux'
import { actionCreator } from '../store'
import { Link } from 'react-router-dom'

class List extends PureComponent {

  render() {
    const { list, getMoreArticle, page } = this.props
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <Link
                style={{ textDecoration: 'none' }}
                to={'/detail/' + item.get('category') + "/" + item.get('time') + "/" + item.get('title') + "/" + item.get('id')}
                key={item.get('id')}>
                <ListItem>
                  <img alt='' className="pic" src={item.get('imgUrl')}></img>
                  <ListInfo>
                    <h3 className="title">{item.get('title')} </h3>
                    <p className="desc" >{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })}
        {/*阅读更多的功能先放一放（后端接口没有整好）*/}
        {/* <LoadMore onClick={()=>{getMoreArticle(page)}}>阅读更多</LoadMore> */}
      </div>
    )
  }

}
const DispatchToProps = (dispatch) => ({
  getMoreArticle(page) {
    dispatch(actionCreator.getMoreArticle(page))
  }
})
const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
})
export default connect(mapStateToProps, DispatchToProps)(List)