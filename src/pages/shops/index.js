import React, {Component} from 'react'
import './index.css'

import SearchBar from '../../components/searchBar'
import ShopList from '../../components/shopList'

import {getShopList} from '../../server'

class Shops extends Component{
    state = {
        shopList: [],
    }
    componentDidMount() {
        this.getShopList();
    }
    getShopList() {
        getShopList({
            startIndex: 0,
            sortId: 0,
            multiFilterIds: "",
            sliderSelectCode: "",
            sliderSelectMin: "",
            sliderSelectMax: "",
            geoType: 2,
            rankTraceId: "",
            wm_latitude: 32070303,
            wm_longitude: 118753765,
            wm_actual_latitude: 32070754,
            wm_actual_longitude: 118753805,
            _token: "",
        }).then(res => {
            if(res.data.code === '0') {
                this.setState({"shopList": res.data.data.shopList})
            } else {
                this.setState({"shopList": []})
            }
        })
        .catch(()=> {
            this.setState({"shopList": []})
        }) 
    }
    render(){
        return (
            <div>
                <SearchBar></SearchBar>
                <ShopList shopList={this.state.shopList}></ShopList>
            </div>
            
        )
    }
}

export default Shops;