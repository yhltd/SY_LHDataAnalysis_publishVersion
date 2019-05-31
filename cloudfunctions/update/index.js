// 云函数入口文件
const cloud = require('wx-server-sdk')
console.log('cloud wx-server-sdk')
cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  // const wxContext = cloud.getWXContext()

  console.log('update:' + event.a)
  try {
    // return await db.collection('SY_LHDataAnalysis_gengxin').where({
    //   _id: event.a
    // }).update({
    //   data: {
    //     finduser: finduser,
    //     zhuangmsg0: zhuangmsg0,
    //     zhuangmsg1: zhuangmsg1,
    //     zhuangmsg2: zhuangmsg2,
    //     zhuangmsg3: zhuangmsg3,
    //     zhuangmsg4: zhuangmsg4,
    //     zhuangmsg5: zhuangmsg5,
    //     zhuangmsg6: zhuangmsg6,
    //     zhuangmsg7: zhuangmsg7,
    //     zhuangmsg8: zhuangmsg8,
    //     zhuangmsg9: zhuangmsg9,
    //     zhuangmsg10: zhuangmsg10,
    //     zhuangmsg11: zhuangmsg11,
    //     zhuangmsg12: zhuangmsg12,
    //     zhuangmsg13: zhuangmsg13,
    //     zhuangmsg14: zhuangmsg14,
    //     zhuangmsg15: zhuangmsg15,
    //     zhuangmsg16: zhuangmsg16,
    //     zhuangmsg17: zhuangmsg17,
    //     zhuangmsg18: zhuangmsg18,
    //     zhuangmsg19: zhuangmsg19,
    //     zhuangmsg20: zhuangmsg20,
    //     zhuangmsg21: zhuangmsg21,
    //     zhuangmsg22: zhuangmsg22,
    //     zhuangmsg23: zhuangmsg23,
    //     zhuangmsg24: zhuangmsg24,
    //     zhuangmsg25: zhuangmsg25,
    //     zhuangmsg26: zhuangmsg26,
    //     zhuangmsg27: zhuangmsg27,
    //     zhuangmsg28: zhuangmsg28,
    //     zhuangmsg29: zhuangmsg29,
    //     zhuangmsg30: zhuangmsg30,
    //     zhuangmsg31: zhuangmsg31,
    //     zhuangmsg32: zhuangmsg32,
    //     zhuangmsg33: zhuangmsg33,
    //     zhuangmsg34: zhuangmsg34,
    //     zhuangmsg35: zhuangmsg35,
    //     zhuangmsg36: zhuangmsg36,
    //     zhuangmsg37: zhuangmsg37,
    //     zhuangmsg38: zhuangmsg38,
    //     zhuangmsg39: zhuangmsg39,
    //     zhuangmsg40: zhuangmsg40,
    //   }

    // })
  } catch (e) {
    console.error(e)
  }
}