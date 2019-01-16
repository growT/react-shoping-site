import axios from 'axios';
import qs from 'qs';

axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5c3eab8177961b2d18d7ff96/shopsite'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

const axios_post = (url,params) => {
    return axios.post(url, qs.stringify(params))
}
const axios_get = (url, params = {}) => {
    return axios.get(url, {params})
}
export const getShopList = (params)=> {
    return axios_get('/shoplist', params);
}