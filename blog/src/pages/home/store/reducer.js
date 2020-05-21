import {fromJS} from 'immutable'
import {constants} from './index'
const defaultState=fromJS({
  articleList:[],
  sortList:[],
  collectList:[],
  articlePage:1
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
    default:return state;
  }
  
}