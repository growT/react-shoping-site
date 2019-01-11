import React, {Component} from 'react'
import './index.css'

class Shop extends Component{
    render(){
        return (
            <div>
                <div>这是shop</div>
                {this.props.children}
            </div>
        )
    }
}

export default Shop;