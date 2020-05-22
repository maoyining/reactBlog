import React, { PureComponent } from 'react'
import ReactMarkdown from "react-markdown";
import CodeBlock from './CodeBlock'
import '../../../static/css/github-markdown.css'
import axios from 'axios'
class Mark extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      input:''
    }
  }

  render() {
    return (
      <ReactMarkdown source={this.state.input}
        className="markdown-body"
        renderers={{
          code: CodeBlock,
        }}
      />
    )
  }
  componentDidMount(){
    axios.get('/article/'+'p'+this.props.id+'.md').then((res)=>{
      this.setState({
        input:res.data
      })
    })
   
  }
}

export default Mark