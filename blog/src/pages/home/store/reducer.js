import {fromJS} from 'immutable'

const defaultState=fromJS({
  topicList:[],
  articleList:[{
    id:1,
    title:'《平凡的世界》：善良和奋斗才是人生的底色',
    desc:'趁着假期，慢慢地翻完了这部从高中时就念念不忘的经典著作。 说来惭愧，这次竟然是第一次完整地读完了这部厚厚的书。 如果，非要在读完之后谈谈感想的话...',
    imgUrl:'./assets/img/list.jpeg'
  },{
    id:2,
    title:'《平凡的世界》：善良和奋斗才是人生的底色',
    desc:'趁着假期，慢慢地翻完了这部从高中时就念念不忘的经典著作。 说来惭愧，这次竟然是第一次完整地读完了这部厚厚的书。 如果，非要在读完之后谈谈感想的话...',
    imgUrl:'./assets/img/list.jpeg'
  },{
    id:3,
    title:'《平凡的世界》：善良和奋斗才是人生的底色',
    desc:'趁着假期，慢慢地翻完了这部从高中时就念念不忘的经典著作。 说来惭愧，这次竟然是第一次完整地读完了这部厚厚的书。 如果，非要在读完之后谈谈感想的话...',
    imgUrl:'./assets/img/list.jpeg'
  },{
    id:4,
    title:'《平凡的世界》：善良和奋斗才是人生的底色',
    desc:'趁着假期，慢慢地翻完了这部从高中时就念念不忘的经典著作。 说来惭愧，这次竟然是第一次完整地读完了这部厚厚的书。 如果，非要在读完之后谈谈感想的话...',
    imgUrl:'./assets/img/list.jpeg'
  }],
  sortList:['Javascript篇 >','ES6篇 >','CSS篇 >','React篇 >']
})

export default (state=defaultState,action)=>{
  return state;
}