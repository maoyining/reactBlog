import {constants} from "./index";

const defaultState={
  focused:false
}
//导出的内容是一个纯函数，有固定的输入和固定的输出，并且没有副作用
export default (state=defaultState,action)=>{
  if(action.type===constants.SEARCH_FOCUSED){
     const newState = JSON.parse(JSON.stringify(state))
     newState.focused=true
     return newState
  }
  if(action.type===constants.SEARCH_BLUR){
    const newState = JSON.parse(JSON.stringify(state))
    newState.focused=false
    return newState
  }
  return state;
}