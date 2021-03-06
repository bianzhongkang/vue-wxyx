
### 关于
适配多种设备视口是移动端所面对的场景，之前开发项目中多采用rem、media查询、flex百分比等布局，最近研究vw(视口单位)实现适配布局过程中，决定采用vue写仿网易严选项目练习下
- - -
注：讲解几种适配大法比较好的文章[https://juejin.im/post/5bc07ebf6fb9a05d026119a9]  
 
### 关于兼容
由于精力有限，只测试了vivo、6p、xr机型部分浏览器。由于vw针对视口逐步放大，暂未解决pc下字体和盒子元素过大的问题

#### 关于后端
暂未开发后台，留待以后开发node + mongodb的简单后台。开发环境采用简单mock数据，生产环境采用axios请求固定数据源。目前跟登录、购物相关页面暂未开发

### 技术栈
vue2 + vuex + vue-router + webpack + ES6 + axios + sass   

### 运行
```
git clone https://github.com/lusteng/vue-yanxuan.git  

cd vue-yanxuan

npm i 或者 yarn

npm run serve 

```

### Demo

[http://www.liubaitong.com/view/?site=yanxuan](http://www.liubaitong.com/view/?site=yanxuan)

### 部分页面截图

<img src="http://www.liubaitong.com/storage/images/index.gif" width="375" height="465"/>  <img src="http://www.liubaitong.com/storage/images/index1.gif" width="375" height="465"/>

<img src="http://www.liubaitong.com/storage/images/detail.gif" width="375" height="465"/>  <img src="http://www.liubaitong.com/storage/images/catelist.gif" width="375" height="465"/>  

<img src="http://www.liubaitong.com/storage/images/items.gif" width="375" height="465"/>  <img src="http://www.liubaitong.com/storage/images/topic.gif" width="375" height="465"/> 

### 目录结构

```   

├── mock                              //dev 开发环境 mock数据 
├── public  
├── src
|  ├── api                            //请求接口集合
|  |  ├── cateList.js
|  |  ├── comment.js
|  |  ├── common.js
|  |  ├── goodsDetail.js
|  |  ├── index.js
|  |  ├── items.js
|  |  ├── manufacturer.js
|  |  ├── marketDesc.js
|  |  ├── middleware.js
|  |  ├── search.js
|  |  ├── topic.js
|  |  └── user.js
|  ├── App.vue
|  ├── assets                          //logo、样式、字体集合
|  |  ├── css
|  |  ├── font
|  |  └── img
|  ├── components                      //公共组件
|  |  ├── common
|  |  └── market
|  ├── layout                          //布局组件
|  |  ├── footer
|  |  └── header
|  ├── main.js
|  ├── page                            //页面
|  |  ├── cart
|  |  ├── cateList
|  |  ├── comment
|  |  ├── goodsDetail
|  |  ├── index
|  |  ├── items
|  |  ├── login
|  |  ├── manufacturer
|  |  ├── marketDesc
|  |  ├── notFound.vue
|  |  ├── search
|  |  └── topic
|  ├── router.js
|  ├── store                            //数据源
|  |  ├── index.js
|  |  └── mutation-types.js
|  └── utils                            //工具方法
|     └── index.js
├── static                              //静态资源
|  └── img 
├── tests    
├── .postcssrc.js                   //配置vw文件  
.
. 

```

### TODO 
+ node + mongodb 模仿数据后台
+ 登录系统、用户系统
