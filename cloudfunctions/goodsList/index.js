// 云函数入口文件
const cloud = require('wx-server-sdk')
// const request = require('request')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  // const wxContext = cloud.getWXContext()

  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
  let url = 'https://mgapp.sitezt.cn/api/info/item/getitems?category=0&itemType=4&page=1&sort=0'
  // let query = new URLSearchParams([
  //   ['category', 0],
  //   ['itemType', 4],
  //   ['page', 1],
  //   ['sort', 0]
  // ])
  let res = await cloud.callFunction({
    name: 'http',
    data: {
      url
    }
  })
  return { res }
}

