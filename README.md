### 前言
  不知道用什么项目练手，最后选择美团外卖用来练手吧
### 技术栈
    react + redux + react-router

### 项目运行

  ```
    开发模式：npm run start

    生产模式：npm run build
   ```
    
### 功能模块

目前的功能模块主要包括：
- [x] 首页 -- 主要包括城市选择器....
- [x] 搜索页 -- 包括热门搜索和搜索历史，搜索结果（例如：搜索粥，会出现各种粥）
- [x] 搜索结果页 -- 按照搜索关键字，得到的所有含有此类商品的商家
- [x] 商家列表页 -- 存在不同的筛选
- [x] 商家详情页 -- 包括各种美食，评论，以及商家的具体信息
- [x] 订单页 -- 订单信息
- [x] 个人中心 -- 用户个人中心
- [x] 登陆页 

### 项目结构

```
my-app
|-- README.md
|-- node_modules
|-- package.json
|-- .gitignore
|-- public
|   |-- favicon.ico
|   |-- index.html
|   |-- manifest.json
|-- src
    |-- index.css : 公共的css
    |-- index.js : 入口文件
    |-- serviceWorker.js
    |-- assets : 静态资源
    |-- components ：公共的组件
    |-- pages : 单独的页面
    |-- router ：路由
    |-- store ：redux状态管理
    |-- utils ：工具包
    |-- server ：后台请求接口
```