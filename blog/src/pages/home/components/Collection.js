import React, { PureComponent } from 'react'
import { CollectWrapper,CollectItem } from '../style'
import {connect} from 'react-redux'

class Collection extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <CollectWrapper>
        <p className="collectInfo">Good Websites To Share ❤</p>
        {this.props.list.map((item,index)=>{
          return(
          <CollectItem key={item.get('id')} target="_blank" href={item.get('link')}>{item.get('title')}</CollectItem>
        )})}
        </CollectWrapper>
        
      </div>
    )
  }
}


const mapPropsToState = (state)=>({
  list:state.getIn(['home','collectList'])
})
export default connect(mapPropsToState,null)(Collection)