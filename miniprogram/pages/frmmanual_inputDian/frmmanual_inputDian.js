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
    var finduser = app.globalData.finduser
    app.editTabBar2();
  
    const db = wx.cloud.database();
      console.log(finduser)
    db.collection('SY_LHDataAnalysis_gengxin').where({

      finduser: finduser
    })
      .get({
        success: res => {
          // console.log(app.globalData.finduser)
          // console.log(res.data)
          // console.log(res.data.finduser)
          console.log(res.data[0]._id)
         
          if (res.data[0]._id!=null ){
            db.collection('SY_LHDataAnalysis_gengxin').where({

              _id: res.data[0]._id
            })
            .get({
              success: res => {

          db.collection('SY_LHDataAnalysis_gengxin').doc(res.data[0]._id).get({
      success: res => {
       
        that.setData({
          zhuangmsg0: res.data.zhuangmsg0,
          zhuangmsg1: res.data.zhuangmsg1,
          zhuangmsg2: res.data.zhuangmsg2,
          zhuangmsg3: res.data.zhuangmsg3,
          zhuangmsg4: res.data.zhuangmsg4,
          zhuangmsg5: res.data.zhuangmsg5,
          zhuangmsg6: res.data.zhuangmsg6,
          zhuangmsg7: res.data.zhuangmsg7,
          zhuangmsg8: res.data.zhuangmsg8,
          zhuangmsg9: res.data.zhuangmsg9,
          zhuangmsg10: res.data.zhuangmsg10,
          zhuangmsg11: res.data.zhuangmsg11,
          zhuangmsg12: res.data.zhuangmsg12,
          zhuangmsg13: res.data.zhuangmsg13,
          zhuangmsg14: res.data.zhuangmsg14,
          zhuangmsg15: res.data.zhuangmsg15,
          zhuangmsg16: res.data.zhuangmsg16,
          zhuangmsg17: res.data.zhuangmsg17,
          zhuangmsg18: res.data.zhuangmsg18,
          zhuangmsg19: res.data.zhuangmsg19,
          zhuangmsg20: res.data.zhuangmsg20,
          zhuangmsg21: res.data.zhuangmsg21,
          zhuangmsg22: res.data.zhuangmsg22,
          zhuangmsg23: res.data.zhuangmsg23,
          zhuangmsg24: res.data.zhuangmsg24,
          zhuangmsg25: res.data.zhuangmsg25,
          zhuangmsg26: res.data.zhuangmsg26,
          zhuangmsg27: res.data.zhuangmsg27,
          zhuangmsg28: res.data.zhuangmsg28,
          zhuangmsg29: res.data.zhuangmsg29,
          zhuangmsg30: res.data.zhuangmsg30,
          zhuangmsg31: res.data.zhuangmsg31,
          zhuangmsg32: res.data.zhuangmsg32,
          zhuangmsg33: res.data.zhuangmsg33,
          zhuangmsg34: res.data.zhuangmsg34,
          zhuangmsg35: res.data.zhuangmsg35,
          zhuangmsg36: res.data.zhuangmsg36,
          zhuangmsg37: res.data.zhuangmsg37,
          zhuangmsg38: res.data.zhuangmsg38,
          zhuangmsg39: res.data.zhuangmsg39,
          zhuangmsg40: res.data.zhuangmsg40,
        })
      
        wx.setStorageSync('zhuangmsg0', res.data.zhuangmsg0)
        wx.setStorageSync('zhuangmsg1', res.data.zhuangmsg1)
        wx.setStorageSync('zhuangmsg2', res.data.zhuangmsg2)
        wx.setStorageSync('zhuangmsg3', res.data.zhuangmsg3)
        wx.setStorageSync('zhuangmsg4', res.data.zhuangmsg4)
        wx.setStorageSync('zhuangmsg5', res.data.zhuangmsg5)
        wx.setStorageSync('zhuangmsg6', res.data.zhuangmsg6)
        wx.setStorageSync('zhuangmsg7', res.data.zhuangmsg7)
        wx.setStorageSync('zhuangmsg8', res.data.zhuangmsg8)
        wx.setStorageSync('zhuangmsg9', res.data.zhuangmsg9)
        wx.setStorageSync('zhuangmsg10', res.data.zhuangmsg10)
        wx.setStorageSync('zhuangmsg11', res.data.zhuangmsg11)
        wx.setStorageSync('zhuangmsg12', res.data.zhuangmsg12)
        wx.setStorageSync('zhuangmsg13', res.data.zhuangmsg13)
        wx.setStorageSync('zhuangmsg14', res.data.zhuangmsg14)
        wx.setStorageSync('zhuangmsg15', res.data.zhuangmsg15)
        wx.setStorageSync('zhuangmsg16', res.data.zhuangmsg16)
        wx.setStorageSync('zhuangmsg17', res.data.zhuangmsg17)
        wx.setStorageSync('zhuangmsg18', res.data.zhuangmsg18)
        wx.setStorageSync('zhuangmsg19', res.data.zhuangmsg19)
        wx.setStorageSync('zhuangmsg20', res.data.zhuangmsg20)
        wx.setStorageSync('zhuangmsg21', res.data.zhuangmsg21)
        wx.setStorageSync('zhuangmsg22', res.data.zhuangmsg22)
        wx.setStorageSync('zhuangmsg23', res.data.zhuangmsg23)
        wx.setStorageSync('zhuangmsg24', res.data.zhuangmsg24)
        wx.setStorageSync('zhuangmsg25', res.data.zhuangmsg25)
        wx.setStorageSync('zhuangmsg26', res.data.zhuangmsg26)
        wx.setStorageSync('zhuangmsg27', res.data.zhuangmsg27)
        wx.setStorageSync('zhuangmsg28', res.data.zhuangmsg28)
        wx.setStorageSync('zhuangmsg29', res.data.zhuangmsg29)
        wx.setStorageSync('zhuangmsg30', res.data.zhuangmsg30)
        wx.setStorageSync('zhuangmsg31', res.data.zhuangmsg31)
        wx.setStorageSync('zhuangmsg32', res.data.zhuangmsg32)
        wx.setStorageSync('zhuangmsg33', res.data.zhuangmsg33)
        wx.setStorageSync('zhuangmsg34', res.data.zhuangmsg34)
        wx.setStorageSync('zhuangmsg35', res.data.zhuangmsg35)
        wx.setStorageSync('zhuangmsg36', res.data.zhuangmsg36)
        wx.setStorageSync('zhuangmsg37', res.data.zhuangmsg37)
        wx.setStorageSync('zhuangmsg38', res.data.zhuangmsg38)
        wx.setStorageSync('zhuangmsg39', res.data.zhuangmsg39)
        wx.setStorageSync('zhuangmsg40', res.data.zhuangmsg40)

      }}
      
      
      )
              }})
      }
      else{
            for (var i = 0; i < 40; i++) {
              that.setData({
                [`zhuangmsg${i}`]: 0

              })
              wx.setStorageSync(String('zhuangmsg' + i), 0)
            }
      }
      },
       


      })
  
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
    this.bao()
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
    that.bao()
  },
  qu:function(){
    var that = this
    that.setData({
      hiddenName8: !that.data.hiddenName8,
    })
    var id = that.data.id
    for (var i = 0; i < 40; i++) {
      that.setData({
        [`zhuangmsg${i}`]: 0,
 
      })
      wx.setStorageSync(String('zhuangmsg' + i), 0)
    }
    that.bao()
   
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
    that.bao()
  },

  bao:function(){
    var that = this;
    var finduser = app.globalData.finduser
    var zhuangmsg0 = wx.getStorageSync(String('zhuangmsg0'))
    var zhuangmsg1 = wx.getStorageSync(String('zhuangmsg1'))
    var zhuangmsg2 = wx.getStorageSync(String('zhuangmsg2'))
    var zhuangmsg3 = wx.getStorageSync(String('zhuangmsg3'))
    var zhuangmsg4 = wx.getStorageSync(String('zhuangmsg4'))
    var zhuangmsg5 = wx.getStorageSync(String('zhuangmsg5'))
    var zhuangmsg6 = wx.getStorageSync(String('zhuangmsg6'))
    var zhuangmsg7 = wx.getStorageSync(String('zhuangmsg7'))
    var zhuangmsg8 = wx.getStorageSync(String('zhuangmsg8'))
    var zhuangmsg9 = wx.getStorageSync(String('zhuangmsg9'))
    var zhuangmsg10 = wx.getStorageSync(String('zhuangmsg10'))
    var zhuangmsg11 = wx.getStorageSync(String('zhuangmsg11'))
    var zhuangmsg12 = wx.getStorageSync(String('zhuangmsg12'))
    var zhuangmsg13 = wx.getStorageSync(String('zhuangmsg13'))
    var zhuangmsg14 = wx.getStorageSync(String('zhuangmsg14'))
    var zhuangmsg15 = wx.getStorageSync(String('zhuangmsg15'))
    var zhuangmsg16 = wx.getStorageSync(String('zhuangmsg16'))
    var zhuangmsg17 = wx.getStorageSync(String('zhuangmsg17'))
    var zhuangmsg18 = wx.getStorageSync(String('zhuangmsg18'))
    var zhuangmsg19 = wx.getStorageSync(String('zhuangmsg19'))
    var zhuangmsg20 = wx.getStorageSync(String('zhuangmsg20'))
    var zhuangmsg21 = wx.getStorageSync(String('zhuangmsg21'))
    var zhuangmsg22 = wx.getStorageSync(String('zhuangmsg22'))
    var zhuangmsg23 = wx.getStorageSync(String('zhuangmsg23'))
    var zhuangmsg24 = wx.getStorageSync(String('zhuangmsg24'))
    var zhuangmsg25 = wx.getStorageSync(String('zhuangmsg25'))
    var zhuangmsg26 = wx.getStorageSync(String('zhuangmsg26'))
    var zhuangmsg27 = wx.getStorageSync(String('zhuangmsg27'))
    var zhuangmsg28 = wx.getStorageSync(String('zhuangmsg28'))
    var zhuangmsg29 = wx.getStorageSync(String('zhuangmsg29'))
    var zhuangmsg30 = wx.getStorageSync(String('zhuangmsg30'))
    var zhuangmsg31 = wx.getStorageSync(String('zhuangmsg31'))
    var zhuangmsg32 = wx.getStorageSync(String('zhuangmsg32'))
    var zhuangmsg33 = wx.getStorageSync(String('zhuangmsg33'))
    var zhuangmsg34 = wx.getStorageSync(String('zhuangmsg34'))
    var zhuangmsg35 = wx.getStorageSync(String('zhuangmsg35'))
    var zhuangmsg36 = wx.getStorageSync(String('zhuangmsg36'))
    var zhuangmsg37 = wx.getStorageSync(String('zhuangmsg37'))
    var zhuangmsg38 = wx.getStorageSync(String('zhuangmsg38'))
    var zhuangmsg39 = wx.getStorageSync(String('zhuangmsg39'))
    var zhuangmsg40 = wx.getStorageSync(String('zhuangmsg40'))
    // console.log(app.globalData.finduser)
    
    
    const db = wx.cloud.database();
    db.collection('SY_LHDataAnalysis_gengxin').where({

      finduser: finduser
    })
      .get({
         

        success: res => {
         
          db.collection('SY_LHDataAnalysis_gengxin').where({

            _id: res.data[0]._id
          })
            .get({
              success: res => {
               
          if (res.data[0]._id != null) {
            
            db.collection('SY_LHDataAnalysis_gengxin').doc(res.data[0]._id).update({
  data:{
    finduser: finduser,
    zhuangmsg0:zhuangmsg0,
    zhuangmsg1: zhuangmsg1,
    zhuangmsg2: zhuangmsg2,
    zhuangmsg3: zhuangmsg3,
    zhuangmsg4: zhuangmsg4,
    zhuangmsg5: zhuangmsg5,
    zhuangmsg6: zhuangmsg6,
    zhuangmsg7: zhuangmsg7,
    zhuangmsg8: zhuangmsg8,
    zhuangmsg9: zhuangmsg9,
    zhuangmsg10: zhuangmsg10,
    zhuangmsg11: zhuangmsg11,
    zhuangmsg12: zhuangmsg12,
    zhuangmsg13: zhuangmsg13,
    zhuangmsg14: zhuangmsg14,
    zhuangmsg15: zhuangmsg15,
    zhuangmsg16: zhuangmsg16,
    zhuangmsg17: zhuangmsg17,
    zhuangmsg18: zhuangmsg18,
    zhuangmsg19: zhuangmsg19,
    zhuangmsg20: zhuangmsg20,
    zhuangmsg21: zhuangmsg21,
    zhuangmsg22: zhuangmsg22,
    zhuangmsg23: zhuangmsg23,
    zhuangmsg24: zhuangmsg24,
    zhuangmsg25: zhuangmsg25,
    zhuangmsg26:zhuangmsg26,
    zhuangmsg27: zhuangmsg27,
    zhuangmsg28: zhuangmsg28,
    zhuangmsg29: zhuangmsg29,
    zhuangmsg30: zhuangmsg30,
    zhuangmsg31: zhuangmsg31,
    zhuangmsg32: zhuangmsg32,
    zhuangmsg33: zhuangmsg33,
    zhuangmsg34: zhuangmsg34,
    zhuangmsg35: zhuangmsg35,
    zhuangmsg36: zhuangmsg36,
    zhuangmsg37: zhuangmsg37,
    zhuangmsg38: zhuangmsg38,
    zhuangmsg39: zhuangmsg39,
    zhuangmsg40: zhuangmsg40,



  }
    
  })
  }
  else{
            db.collection('SY_LHDataAnalysis_gengxin').add({
              data: {
                finduser: finduser,
                zhuangmsg0: zhuangmsg0,
                zhuangmsg1: zhuangmsg1,
                zhuangmsg2: zhuangmsg2,
                zhuangmsg3: zhuangmsg3,
                zhuangmsg4: zhuangmsg4,
                zhuangmsg5: zhuangmsg5,
                zhuangmsg6: zhuangmsg6,
                zhuangmsg7: zhuangmsg7,
                zhuangmsg8: zhuangmsg8,
                zhuangmsg9: zhuangmsg9,
                zhuangmsg10: zhuangmsg10,
                zhuangmsg11: zhuangmsg11,
                zhuangmsg12: zhuangmsg12,
                zhuangmsg13: zhuangmsg13,
                zhuangmsg14: zhuangmsg14,
                zhuangmsg15: zhuangmsg15,
                zhuangmsg16: zhuangmsg16,
                zhuangmsg17: zhuangmsg17,
                zhuangmsg18: zhuangmsg18,
                zhuangmsg19: zhuangmsg19,
                zhuangmsg20: zhuangmsg20,
                zhuangmsg21: zhuangmsg21,
                zhuangmsg22: zhuangmsg22,
                zhuangmsg23: zhuangmsg23,
                zhuangmsg24: zhuangmsg24,
                zhuangmsg25: zhuangmsg25,
                zhuangmsg26: zhuangmsg26,
                zhuangmsg27: zhuangmsg27,
                zhuangmsg28: zhuangmsg28,
                zhuangmsg29: zhuangmsg29,
                zhuangmsg30: zhuangmsg30,
                zhuangmsg31: zhuangmsg31,
                zhuangmsg32: zhuangmsg32,
                zhuangmsg33: zhuangmsg33,
                zhuangmsg34: zhuangmsg34,
                zhuangmsg35: zhuangmsg35,
                zhuangmsg36: zhuangmsg36,
                zhuangmsg37: zhuangmsg37,
                zhuangmsg38: zhuangmsg38,
                zhuangmsg39: zhuangmsg39,
                zhuangmsg40: zhuangmsg40,




              }

            })
  }
        }
       



        })
      
        
    this.setData({
      hiddenName8: true,
  


    })
    wx.showToast({
      title: '保存成功！',//提示文字
     
    })
  
  }
    
})
}
}
)