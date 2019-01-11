import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './index.css'

import home_icon from '../../assets/home_icon.png'
import order_icon from '../../assets/order_icon.png'
import me_icon from '../../assets/me_icon.png'

class Footer extends Component {
    state = {
        footerList: [
            {link: '/', iconImg: home_icon, name: '首页'},
            {link: '/', iconImg: order_icon, name: '订单'},
            {link: '/', iconImg: me_icon, name: '我的'}
        ]
    }
    render() {
        return (
            <div className="footer">
                {this.state.footerList.map((item, index) => {
                    return (<Link to={item.link} key={index}>
                               {item.iconImg ? <img className="icon" src={item.iconImg} alt="footer_icon" /> : ''}
                                <div className="name">{item.name}</div>
                            </Link>
                    )
                })}
            </div>
        )
    }
}

export default Footer;