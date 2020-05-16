import {constants} from "./index";

export const getFocusedAction=()=>({
  type:constants.SEARCH_FOCUSED
})

export const getBlurAction=()=>({
  type:constants.SEARCH_BLUR
})