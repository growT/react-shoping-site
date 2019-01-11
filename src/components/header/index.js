import React, { Component } from 'react'
import './index.css'

import back_icon from '../../assets/返回.png'
class header extends Component {
    // constructor() {
    //     this.state = {
    //         title: '首页'
    //     }
    // }
    render(){
        return (<div className="header">
                    <img className="back_icon" src={back_icon} alt="返回"/>
                    {this.props.titleName}
                </div>)
    }
}

export default header;