import React, { Component } from 'react'
import Header from '../../components/header'
import './index.css'

import location_icon from '../../assets/location_icon.png'
import arrow_right from '../../assets/arrow_right01.png'


class msite extends Component {
    state = {
        curLocation : {
            name : '古平岗4号'
        },
        catalogueList: [
            {id:'11',image: 'http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png', link: '', name: '美食'},
            {id:'12', image: 'http://p0.meituan.net/jungle/45ff2f098a20a77122bff8385192f0ec10547.png', link: '', name: '美团超市'},
            {id:'13',image: 'http://p1.meituan.net/jungle/12a9834827909fa55f54bce96e67470711250.png', link: '', name: '生鲜果蔬'},
            {id:'14',image: 'http://p1.meituan.net/jungle/da9181f93dd2e11c5d74cf685470408f10016.png', link: '', name: '美团专卖'},
            {id:'15',image: 'http://p1.meituan.net/jungle/c1048e334022a93221b0e63bbfb998b18861.png', link: '', name: '午餐优选'},
            {id:'16',image: 'http://p1.meituan.net/jungle/e54f1fe77b0588d2dfe82a12e424108a9450.png', link: '', name: '甜点饮品'},
            {id:'17',image: 'http://p0.meituan.net/jungle/2ec76f8f4f21a4ec163adc7fccfa1a399428.png', link: '', name: '小吃馆'},
            {id:'18',image: 'http://p1.meituan.net/jungle/2eee7747fd143249b100b9fa5ee5e31d9873.png', link: '', name: '家常菜'},
            {id:'19',image: 'http://p1.meituan.net/jungle/dfd03fd91f640682c16179ba85837f739679.png', link: '', name: '鲜花蛋糕'},
            {id:'20',image: 'http://p1.meituan.net/jungle/99fb0a3687a7ad570d015ec081ff396a9989.png', link: '', name: '品牌连锁'},
        ]
    }
    render() {
        return(
            <div>
                <Header titleName="主页"/>
                <div className="msite">
                    <div className="head-title">
                        <div className="location">
                            <img src={location_icon} className="location-icon" alt ="loaction" />
                            <span>{this.state.curLocation.name}</span>
                            <img src={arrow_right} className="arrow-right" alt="arrow-right"/>
                        </div>
                       <div className="search">
                            <input type="text" readOnly disabled placeholder="请输入商家或商品名称" className="btn" />
                       </div>
                    </div>
                    <div className="catalogue">
                    {
                        this.state.catalogueList.map(item => 
                            (<div  className="catalogue-item" key={item.id}>
                                <img src={item.image} alt="图片"/>
                                <span>{item.name}</span>
                            </div>
                            )
                        )
                    }</div>
                    <div className="shop-list">
                        <div className="shop-list-title">附近商家</div>
                    </div>
                </div>
            </div>
        )
    }
   
}

export default msite;