import axios from 'axios'
import {constants} from './index'
const initHomeList = (value)=>({
  type:constants.INIT_HOMEDATA,
  articleList:value.articleList,
  sortList:value.sortList,
  collectList:value.collectList
})

export const getHomeList=()=>{
  return (dispatch)=>{
    axios.get('/api/homeList.json').then((res)=>{
        console.log(res.data)
        dispatch(initHomeList(res.data))
    })
  }
}