//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    swiperList: [
    {
      src: '../../images/home/house1.jpg'
    },
    {
      src: '../../images/home/deer.jpg'
    },
    {
      src: '../../images/home/person2.jpg'
    },
    {
      src: '../../images/home/spring1.jpeg'
    },
    ],
    dataList: [
      {
        aid: 1,
        pic: '../../images/home/summer1.jpeg',
        //  attribute :'林深见鹿',
        // duration:20,
        title: "决策疲劳",
        desc: "test"
      },
      {
        aid: 2,
        pic: '../../images/home/summer2.jpeg',
        attribute: 'ninininini',
        duration: 20,
        title: "黑羊效应",
        desc: "test"
      },
      {
        aid: 3,
        pic: '../../images/home/summer3.jpeg',
        attribute: 'ninininini',
        duration: 20,
        title: "费曼学习法",
        desc: "test"
      },
      {
        aid: 4,
        pic: '../../images/home/weding1.jpg',
        attribute: 'ninininini',
        duration: 20,
        title: "垃圾人定律",
        desc: "test"
      }
      ,
      {
        aid: 5,
        pic: '../../images/home/winter1.jpeg',
        attribute: 'ninininini',
        duration: 20,
        title: "重商主义",
        desc: "test"
      },
      {
        aid: 6,
        pic: '../../images/home/lonly.jpg',
        attribute: 'ninininini',
        duration: 20,
        title: "兜底条款",
        desc: "test"
      }
    ],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
