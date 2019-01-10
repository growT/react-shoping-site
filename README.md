### 前言

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
- [x] 列表页 -- 存在不同的筛选
- [x] 详情页 -- 商品的具体信息
- [x] 购物车 -- 加入购物车的商品信息
- [x] 个人中心 -- 用户个人中心

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