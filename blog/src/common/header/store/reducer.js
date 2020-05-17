import { constants } from "./index"
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  searchList:[]
})
//导出的内容是一个纯函数，有固定的输入和固定的输出，并且没有副作用
//immutable对象的set方法，会结合之前的immutable对象的值
//和设置的值，返回一个全新的对象
export default (state = defaultState, action) => {
  switch(action.type){
    case constants.SEARCH_FOCUSED:
      return state.set('focused', true); //因为return出去了，所以就不写break拉
    case constants.SEARCH_BLUR:
      return state.set('focused', false);
    case constants.CHANGE_SEARCH_LIST:
      return state.set('searchList',action.value);
    default:
      return state;
  }
}