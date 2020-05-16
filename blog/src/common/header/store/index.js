/**
 * store下所有文件的一个出口
 */
import reducer from './reducer'
import *  as actionCreators from './actionCreator' 
import * as constants from './actionType'
export {actionCreators,constants,reducer};