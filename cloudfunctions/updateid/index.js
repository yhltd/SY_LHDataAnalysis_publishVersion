// 云函数入口文件
console.log('wx:'  )
const cloud = require('wx-server-sdk') 
cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
 
  console.log('update:' + event.a)
  try {
    return await db.collection('SY_LHDataAnalysis_gengxin').where({
      _id: event.a
    }).update({
      data: {  
        zhuangmsg0: event.zhuangmsg0,
        zhuangmsg1: event.zhuangmsg1,
        zhuangmsg2: event.zhuangmsg2,
        zhuangmsg3: event.zhuangmsg3,
        zhuangmsg4: event.zhuangmsg4,
        zhuangmsg5: event.zhuangmsg5,      
        zhuangmsg6: event.zhuangmsg6,     
        zhuangmsg7: event.zhuangmsg7,     
        zhuangmsg8: event.zhuangmsg8,     
        zhuangmsg9: event.zhuangmsg9,     
        zhuangmsg10: event.zhuangmsg10,     
        zhuangmsg11: event.zhuangmsg11,       
        zhuangmsg12: event.zhuangmsg12,     
        zhuangmsg13: event.zhuangmsg13,     
        zhuangmsg14: event.zhuangmsg14,     
        zhuangmsg15: event.zhuangmsg15,     
        zhuangmsg16: event.zhuangmsg16,     
        zhuangmsg17: event.zhuangmsg17,     
        zhuangmsg18: event.zhuangmsg18,     
        zhuangmsg19: event.zhuangmsg19,     
        zhuangmsg20: event.zhuangmsg20,     
        zhuangmsg21: event.zhuangmsg21,     
        zhuangmsg22: event.zhuangmsg22,     
        zhuangmsg23: event.zhuangmsg23,     
        zhuangmsg24: event.zhuangmsg24,     
        zhuangmsg25: event.zhuangmsg25,     
        zhuangmsg26: event.zhuangmsg26,     
        zhuangmsg27: event.zhuangmsg27,     
        zhuangmsg28: event.zhuangmsg28,     
        zhuangmsg29: event.zhuangmsg29,     
        zhuangmsg30: event.zhuangmsg30,     
        zhuangmsg31: event.zhuangmsg31,     
        zhuangmsg32: event.zhuangmsg32,   
        zhuangmsg33: event.zhuangmsg33,   
        zhuangmsg34: event.zhuangmsg34,   
        zhuangmsg35: event.zhuangmsg35,   
        zhuangmsg36: event.zhuangmsg36,   
        zhuangmsg37: event.zhuangmsg37,   
        zhuangmsg38: event.zhuangmsg38,   
        zhuangmsg39: event.zhuangmsg39,   
        zhuangmsg40: event.zhuangmsg40  
      }
    })
  } catch (e) {
    console.log('eoor:'  )
    console.error(e)
  }
}