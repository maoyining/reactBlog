import styled from 'styled-components'
import logoPic from '../../static/logo.png'
export const HeaderWrapper =styled.div`
  position:relative;
  height:56px;
  border-bottom:1px solid #f0f0f0;
  box-shadow:0 5px 10px 0 rgba(0,64,128,.05);
  line-height:56px;  
`;
export const Logo =styled.div`
  position:absolute;
  height:56px;
  width:120px;
  top:0;
  left:1%;
  display:inline-block;
  border-bottom:1px solid #f0f0f0;
  background:url(${logoPic}) no-repeat;
  background-size:contain;
  cursor: pointer;
`;

export const Nav = styled.div`
  width:960px;
  height:100%;
  margin:0 auto;
  padding:0 70px;
  box-sizing:border-box;
`
export const NavItem=styled.div`
  &.left{
    float:left
  }
  &.right{
    float:right;
    color:#969696
  }
  &.active{
    color:#00909e
  }
  a{
    text-decoration:none;
    color:#333;
  }
  a:hover{
    color:#00909e;
  }
  padding:0 15px;
  color:#333;
  display:inline-block;
  cursor: pointer;
`

export const SearchWrapper=styled.div`
  float: left;
  position:relative;
  .iconfont{
    position:absolute;
    right:5px;
    bottom:12px;
    width:30px;
    height:30px;
    border-radius:50%;
    line-height:30px;
    text-align:center;
    color:#969696;
    &.focused{
      background:#969696;
      color:white;
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder:'Search'
})`
  width:160px;
  height:38px;
  margin-left:10px;
  border:none;
  outline:none;
  border-radius:19px;
  background:#eee;
  padding:0 35px 0 20px;
  box-sizing:border-box;
  color:#777;
  &::placeholder{ /*伪元素::placeholder可以选择一个表单元素的占位文本，它允许开发者和设计师自定义占位文本的样式。*/
    color:#999
  }
  &.focused{
    width:240px;
  }
  &.slide-enter{
    transition:all .2s ease-out;
  }
  &.slide-enter-active{
    width:240px;
  }
  &.slide-exit{
    transition:all .2s ease-out;
  }
  &.slide-exit-active{
    width:160px;
  }
`

export const SearchInfo = styled.div`
  width:240px;
  position:absolute;
  top:62px;
  left:10px;
  box-shadow:0 0 8px rgba(0,0,0,.2);
  padding:0 15px 15px 15px;
  background:white;
`

export const SearchInfoTitle = styled.div`
  color:#969696;
  font-size:14px;
  line-height:46px;
`

export const Addition =styled.div`
  position:absolute;
  right:0;
  top:0;
  height:56px;
`

export const Button = styled.div`
  float:right;
  line-height:38px;
  border-radius:19px;
  margin-top:9px;
  margin-right:20px;
  padding:0 20px;
  border:1px solid #00909e;
  color:#00909e;
  &.writing{
    color:white;
    background:#00909e;
  }
  a{
    text-decoration:none;
    color:white;
  }
`
export const SearchInfoItem = styled.a`
  cursor: pointer;
  list-style-type:none;
  font-size:13px;
  padding:5px;
  color:#969696;
  border:1px solid #ddd;
  line-height:20px;
  border-radius:5px;
  margin:0 5px 5px 0;
  float:left;
  display:block;
`
export const SearchInfoSwitch =styled.span`

`

