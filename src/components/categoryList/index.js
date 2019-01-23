import React, { Component } from 'react'
import './index.css'

import add_icon from '../../assets/add_icon.png'
import minus_icon from '../../assets/minus_icon.png'

class CategoryList extends Component {
    constructor() {
        super();
        this.navClick = this.navClick.bind(this);
        this.filterCartList = this.filterCartList.bind(this);
    }
    state = {
      rightHeightList :[],
      activeIndex: 0,
    }
    componentDidMount() {
        //这里还没有做出来监听滚动
        let childNodes = this.refs.itemRight.childNodes;
        let rightHeightList = [];
        console.log(childNodes)
        childNodes.forEach((element,index) => {
            console.log(element)
            console.log(element.offsetHeight)
            this.rightHeightList.push(element.offsetHeight * index)
        });
        console.log(this.rightHeightList)
    }
    componentDidUpdate() {
        console.log('jjj');
    }
    /**
     * @Description: 点击左侧，右侧滚动
     * @param {type} 
     */
    navClick(e) {
        let activeIndex = e.target.getAttribute('data-index');
        this.setState({activeIndex: Number(activeIndex)})
        window.scrollTo(0, this.refs.itemRight.childNodes[activeIndex].offsetTop - 40);
    }
    filterCartList(spuId) {
        let food = this.props.cartList.filter((item) => item.spuId === spuId)
        if(food.length > 0 && food[0].count >= 1) {
            return food[0].count
        }
        return null;
    }
    render() {
        let leftList = [];
        this.props.categoryList.map((item) => leftList.push({categoryName: item.categoryName,tag: item.tag}))
        return (
            <div className="category-list">
                <div className="item-left">
                    <ul>
                        {
                            leftList.map((item,index) =>(
                                <li data-index={index} key={index + 'left'} onClick={this.navClick} className={this.state.activeIndex === index ? 'active' : ''}>
                                    {item.categoryName}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="item-right">
                    <div ref="itemRight">
                        {
                            this.props.categoryList.map((item,rightIndex) => (
                                <div key={rightIndex+ 'right'}>
                                    <div className="category-name">{item.categoryName}</div>
                                    {item.spuList && item.spuList.length && (
                                        <ul>
                                            {
                                                item.spuList.map((spuItem,supIndex) => (
                                                    <li key={supIndex +'supright'}>
                                                        <div className="left">
                                                            <img className="food-icon" src={spuItem.bigImageUrl} alt="food-icon"/>
                                                        </div>
                                                        <div className="right">
                                                            <p className="spu-name">{spuItem.spuName}</p>
                                                            <p className="sup-desc">{spuItem.spuDesc}</p>
                                                            <p className="price">
                                                                <span >
                                                                    <span className="money-sign">￥</span>
                                                                    {spuItem.currentPrice}
                                                                    <span className="unit">/个</span>
                                                                    <span className="org-price">￥{spuItem.originPrice}
                                                                    </span>
                                                                </span>
                                                                <span className="opt-cart">
                                                                    {
                                                                       this.filterCartList(spuItem.spuId) && (
                                                                           <>
                                                                                <img className="minus-icon" src={minus_icon} onClick={() => this.props.minusCart(spuItem)} alt="minus-icon"/>
                                                                                <span className="count">{this.filterCartList(spuItem.spuId)}</span>
                                                                           </>
                                                                       )
                                                                       
                                                                    }
                                                                    
                                                                    <img className="add-icon" src={add_icon} onClick={() => this.props.addCart(spuItem)} alt="add-icon"/>
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </li>
                                                ))
                                            }
                                        </ul> 
                                    )} 
                                </div>
                            ))
                            
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default CategoryList;