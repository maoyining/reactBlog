import styled from 'styled-components'
import logoPic from '../../static/logo.png'
export const HeaderWrapper =styled.div`
  position:relative;
  height:56px;
  border-bottom:1px solid #f0f0f0;
  box-shadow:0 5px 10px 0 rgba(0,64,128,.05);
  line-height:56px;
`;
export const Logo =styled.a`
  position:absolute;
  height:56px;
  width:150px;
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
  padding:0 15px;
  color:#333;
  display:inline-block;
  cursor: pointer;
`
export const NavSearch = styled.input.attrs({
  placeholder:'搜索'
})`
  width:'160px';
  height:38px;
  margin-left:20px;
  border:none;
  outline:none;
  border-radius:19px;
  background:#eee;
  padding:0 20px;
  box-sizing:border-box;
`
export const Addition =styled.div`
  position:absolute;
  
`