import axios from 'axios'
import {constants} from './index'
import { fromJS } from 'immutable'
const initHomeList = (value)=>({
  type:constants.INIT_HOMEDATA,
  articleList:value.articleList,
  sortList:value.sortList,
  collectList:value.collectList
})


const updateHomeList = (value)=>({
  type:constants.UPDATE_HOMEDATA,
  value:fromJS(value),
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

export const toggleTopShow = (show)=>({
  type:constants.TOGGLE_SCROLL_TOP,
  value:fromJS(show)
})

export const getSortList = (item)=>{
  return (dispatch)=>{
    axios.get('/sort/'+item+'.json').then((res)=>{
      dispatch(updateHomeList(res.data.articleList))
    })
  }
}