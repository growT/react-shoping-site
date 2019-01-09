import React, { Component } from 'react'
import './header.less'
class header extends Component {
    // constructor() {
    //     this.state = {
    //         title: '首页'
    //     }
    // }
    render(){
        return (<div className="title-name">{this.props.titleName}</div>)
    }
}

export default header;