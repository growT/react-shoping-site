import React, { Component } from 'react'
import Footer from '../../components/footer'

 class Main extends Component {
     render() {
        return (
            <div>
                {this.props.children}
                <Footer />
            </div>
        )
     }
 }
 export default Main; 