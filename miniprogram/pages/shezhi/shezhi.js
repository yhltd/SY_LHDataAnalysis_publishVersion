// pages/shezhi/shezhi.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    appid: 'wx3fc524dbb2646bd7',
    secret: '691ce55bfc793a9aa352291877afffb4',
    showView: true,
    text: '\n',
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onGotUserInfo(res) {
    var that = this;
    console.log(res.detail.errMsg)
    console.log(res.detail.userInfo)
    console.log(res.detail.rawData)
    var requestUrl = wx.getStorageSync("url")
    this.setData({
      login_name: res.detail.userInfo.nickName,
      gender: res.detail.userInfo.gender,
       showView: (!that.data.showView)
        })
    wx.request({
      url: requestUrl,
      data: {
        code: res.code
      },
      success: function (res) {
        let ret = res.data;
        if (ret.status == 200) {
          // 添加到全局数据的header中
          app.globalData.header.Cookie = 'JSESSIONID=' + ret.data.sessionid;
        }
      }
    })
  },
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})