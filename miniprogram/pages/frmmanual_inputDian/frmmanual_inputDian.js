// miniprogram/pages/frmmanual_inputDian/frmmanual_inputDian.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenName8: true,
  
    idd8: 0,
    
    id8: 0,
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.editTabBar1();
  },
  clickMe8: function (e) {
    var idd8 = e.target.id
    console.log(idd8)
    this.setData({
      hiddenName8: !this.data.hiddenName8
    })

  },
  click8: function (e) {
    var id8 = e.target.id
    var idd8 = e.target.dataset.id
    console.log(id8)
    console.log(idd8)
    this.setData({
      hiddenName8: !this.data.hiddenName8,
      id8: id8,
      idd8: idd8,
   
    })
    
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