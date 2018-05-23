//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    product:[
      {
        "title":"灯箱牌匾系列",
        "img":[
          "../../images/lamp (2).jpg",
          "../../images/lamp (1).jpg",
          "../../images/lamp (3).jpg",
          "../../images/lamp (4).jpg",
          "../../images/lamp.jpg",
        ]
      }, {
        "title":"店面/公司装饰",
        "img": [
          "../../images/store (3).jpg",
          "../../images/store (1).jpg",
          "../../images/store (2).jpg",
          "../../images/store (4).jpg",
          "../../images/store.jpg"
        ]
      }, {
        "title": "儿童教育装饰",
        "img": [
          "../../images/children (2).jpg",
          "../../images/children (1).jpg",          
          "../../images/children (3).jpg",
          "../../images/children (5).jpg",
          "../../images/children (4).jpg"
        ]
      }
      , {
        "title": "广告印刷系列",
        "img": [
          "../../images/ad (4).jpg",
          "../../images/ad (2).jpg",
          "../../images/ad (3).jpg",
          "../../images/ad (5).jpg",
          "../../images/ad (1).jpg"
        ]
      }, {
        "title": "楼体大字系列",
        "img": [
          "../../images/font (3).jpg",
          "../../images/font (2).jpg",
          "../../images/font (4).jpg",
          "../../images/font (5).jpg",
          "../../images/font (1).jpg"
        ]
      }, {
        "title": "展览展示系列",
        "img": [
          "../../images/portrait (5).jpg",
          "../../images/portrait (2).jpg",
          "../../images/portrait (4).jpg",
          "../../images/portrait (1).jpg",
          "../../images/portrait (3).jpg"
        ]
      }, {
        "title": "围墙广告系列",
        "img": [
          "../../images/wall (1).jpg",
          "../../images/wall (2).jpg",
          "../../images/wall (4).jpg",
          "../../images/wall (5).jpg",
          "../../images/wall (3).jpg"
        ]
      }, {
        "title": "喷绘写真系列",
        "img": [
          "../../images/pen (1).jpg",
          "../../images/pen (2).jpg",
          "../../images/pen (4).jpg",
          "../../images/pen (5).jpg",
          "../../images/pen (3).jpg"
        ]
      }
    ],
    imgUrls: [
      "../../images/caseBanner (2).jpg"
      // 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      // 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      // 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    interval: 5000,
    duration: 1000
    
  }
 
})
