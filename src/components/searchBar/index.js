import React, {Component} from 'react'
import './index.css'

import arrow_bottom from '../../assets/arrow_bottom.png'
import filter_icon from '../../assets/filter_icon.png'

class SearchBar extends Component{
    render(){
        return (
            <div className="search-bar">
                <ul>
                    <li>综合排序<img src={arrow_bottom} className="arrow-bottom" alt="综合"/></li>
                    <li>销量最高</li>
                    <li>距离最近</li>
                    <li>筛选<img src={filter_icon} className="filter-icon" alt="刷选"/></li>
                </ul>
            </div>
        )
    }
}

export default SearchBar;