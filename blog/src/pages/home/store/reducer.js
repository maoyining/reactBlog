import {fromJS} from 'immutable'
import {constants} from './index'
const defaultState=fromJS({
  articleList:[],
  sortList:[],
  collectList:[],
  articlePage:1,
  showScroll:false
})

export default (state=defaultState,action)=>{
  switch (action.type){
    case constants.INIT_HOMEDATA:{ 
      return state.merge({
        articleList:fromJS(action.articleList),
        sortList:fromJS(action.sortList),
        collectList:fromJS(action.collectList)
      })
    }
    case constants.ADD_ARTICLE_LIST:
      return state.merge({
        'articleList':state.get('articleList').concat(action.value),
        'articlePage':action.nextPage
      })
    case constants.TOGGLE_SCROLL_TOP:
      return state.set('showScroll',action.value)
    case constants.UPDATE_HOMEDATA:{
      console.log(action.value)
      return state.set('articleList',action.value)
    }
    default:return state;
  }
  
}