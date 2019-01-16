import axios from 'axios';

axios.defaults.baseURL = 'http://i.waimai.meituan.com/'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

function axios_post(url,params) {
    axios.post(url, params)
}
function axios_get(url, params = {}) {
    axios.get(url, {params})
}
export function getShopList(params) {
    return axios_post('/openh5/homepage/poilist?_=1547451420594', params);
}