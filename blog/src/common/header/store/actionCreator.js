import {constants} from "./index"
import axios from 'axios'
import {fromJS} from 'immutable'

const initSearchList=(value)=>({
  type:constants.CHANGE_SEARCH_LIST,
  value:fromJS(value)
})

export const getFocusedAction=()=>({
  type:constants.SEARCH_FOCUSED
})

export const getBlurAction=()=>({
  type:constants.SEARCH_BLUR
})

export const getSearchList = ()=>{
  return (dispatch)=>{
    axios.get('/api/headerList.json').then(res=>{
      dispatch(initSearchList(res.data))
    })
  }
}