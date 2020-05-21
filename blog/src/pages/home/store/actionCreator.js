import axios from 'axios'
import {constants} from './index'
import { fromJS } from 'immutable'
const initHomeList = (value)=>({
  type:constants.INIT_HOMEDATA,
  articleList:value.articleList,
  sortList:value.sortList,
  collectList:value.collectList
})

const addMoreArticle = (value,nextPage)=>({
  type:constants.ADD_ARTICLE_LIST,
  value:fromJS(value),
  nextPage
})
export const getHomeList=()=>{
  return (dispatch)=>{
    axios.get('/api/homeList.json').then((res)=>{
        dispatch(initHomeList(res.data))
    })
  }
}

export const getMoreArticle = (page)=>{
  return (dispatch)=>{
    axios.get('/api/homeList.json?page='+page).then((res)=>{
      dispatch(addMoreArticle(res.data.articleList,page+1))
    })
 }
}