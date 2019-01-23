import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import './index.css'

class ShopList extends Component{
    render(){
        return ( 
            <div className="shop-list">
               {
                    this.props.shopList.map((item,index) => (
                      <Link className="shop-item" key={index} to={'/menu/' + item.mtWmPoiId}>
                        <div className="item-left">
                            <img src={item.picUrl} alt="shop-pic" className="shop-pic"/>
                            <img src={item.poiTypeIcon} alt="brand-pic" className="brand-pic"/>
                        </div>
                        <div className="item-right">
                            <p className="shop-name">
                                {item.shopName}
                            </p>
                            <p className="shop-score">
                                <span>{item.wmPoiScore/10}</span>
                                <span>{item.deliveryTimeTip}|{item.distance}</span>
                            </p>
                            <p className="send">{item.minPriceTip}|{item.shippingFeeTip}|{item.averagePriceTip}</p>
                            {
                                // 条件渲染 大众点评
                                item.recommendInfo && 
                                (
                                    <p className="dazhong">
                                        <img className="recommendInfo-icon" src={item.recommendInfo.icon} alt="recommendInfo-icon"/>
                                        <span>{item.recommendInfo.recommendReason}</span>
                                    </p>
                                )
                            }
                            {
                                item.discounts2 && item.discounts2.map((disItem,disIndex)=> (
                                    <p className="discount-item" key={'dis' + disIndex}>
                                        <img src={disItem.iconUrl} alt="discount-pic" className="discount-pic"/>
                                        {disItem.info}
                                    </p>
                                ))
                            }
                        </div>
                      </Link>  
                    ))
               }
            </div> 
        )
    }
}

export default ShopList;