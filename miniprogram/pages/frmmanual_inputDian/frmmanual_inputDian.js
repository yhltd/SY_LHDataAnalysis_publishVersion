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
    var that=this
    app.editTabBar2();
    for(var i=0;i<40;i++){
      that.setData({
        [`zhuangmsg${i}`]: 0

      })
      wx.setStorageSync(String('zhuangmsg' + i), 0)
    }

  
  },
  clickMe8: function (e) {
    
    var id = e.target.dataset.index
    // console.log(idd8)
    // console.log(id)
    this.setData({
      hiddenName8: !this.data.hiddenName8,
     id:id
    })

  },
  click8: function (e) {
     var id = this.data.id
    var id8 = e.target.id
    // console.log(id)
    // console.log(id8)
    
    wx.setStorageSync((String('zhuangmsg'+id)), id8)
    this.setData({
      hiddenName8: !this.data.hiddenName8,
      [`zhuangmsg${id}`]: id8,
       
   
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

  },
  // all:function(){
  //   var that = this
  //   that.setData({
  //     hiddenName8: true
  //   })
   
  // },
  shan:function(){
    var that = this
    
   
    var id = that.data.id
    wx.setStorageSync(String('zhuangmsg' + id), 0)
    that.setData({
      hiddenName8: !that.data.hiddenName8,
   
      [`zhuangmsg${id}`]: 0,
   id8: 0

    })
  },
  qu:function(){
    var that = this
    var id = that.data.id
    that.onLoad()
    that.setData({
      hiddenName8: !that.data.hiddenName8,
      [`zhuangmsg${id}`]: 0,
      id8:0
    })
  },
  jia:function(e){
    var that = this
   
    
    var id = that.data.id
    var jia1 = parseInt(wx.getStorageSync(String('zhuangmsg' + id))) + 1
    
   
 
    that.setData({
      hiddenName8: !that.data.hiddenName8,

      [`zhuangmsg${id}`]: jia1,
      

    })
    wx.setStorageSync((String('zhuangmsg' + id)), jia1)
  }
})