import styled from 'styled-components'
export const HomeWrapper = styled.div`
  width:960px;
  margin:30px auto 0;
  overflow:hidden;
`
export const HomeLeft =  styled.div`
  margin-left:15px;
  width:625px;
  float:left;
  .banner-img{
    width:625px;
    height:270px;
    border-radius:10px;
  }
`
export const HomeRight = styled.div`
  
  width:240px;
  float:right;
`
export const ListItem = styled.div`
  padding:30px 0;  
  border-bottom:1px solid #dcdcdc;
  .pic{
    display:block;
    width:150px;
    height:100px;
    float:right;
    border-radius: 10px;
  }
  
`

export const ListInfo = styled.div`
  width:475px;
  .title{
    font-size:18px;
    line-height:27px;
    font-weight:bold;
    color:#333;
  }

  .desc{
    font-size:13px;
    line-height:24px;
    color:#999;
    padding:10px 10px 5px 0;
  }
`
export const SortWrapper = styled.div`
  
  .sortInfo{
    color:rgb(49,103,111,0.46);
    border-bottom:1px solid #dcdcdc;
    padding:15px 0;
  }
`
export const SortItem = styled.div`
  height:40px;
  background:rgb(133,194,202,0.5);
  margin:8px 0;
  border-radius:5px;
  line-height:40px;
  text-align:center;
  color:rgb(69,139,149);
  cursor:pointer;
`

export const CollectWrapper = styled.div`
  margin:60px 0;
  .collectInfo{
    color:rgb(49,103,111,0.46);
    border-bottom:1px solid #dcdcdc;
    padding:15px 0;
  }
`
export const CollectItem = styled.a`
  margin:8px 0;
  background:rgb(225,106,136,0.2);
  height:40px;
  border-radius:5px;
  line-height:40px;
  text-align:center;
  color:#DD5B75;
  display:block;
  cursor: pointer;
  text-decoration:none;
`
export const LoadMore =styled.div`
  width:100%;
  height:40px;
  border-radius:20px;
  background:rgb(142,197,252,0.2);
  margin:20px 0;
  line-height:40px;
  text-align:center;
  color:#2B86C5;
  cursor: pointer;
`

export const BackToTop = styled.div`
  position:fixed;
  width:60px;
  height:60px;
  line-height:60px;
  text-align:center;
  border:1px solid rgb(43,134,197,0.5);
  right:100px;
  bottom:30px;
  font-size:14px;
  border-radius:30px;
  .iconfont{
    font-size:40px;
    color:#2B86C5;
  }
  cursor: pointer;
`