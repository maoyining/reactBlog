import {fromJS} from 'immutable'
import {constants} from './index'
const defaultState=fromJS({
  articleList:[],
  sortList:[],
  collectList:[]
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
    default:return state;
  }
  
}