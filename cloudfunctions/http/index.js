const request = require('request')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let { url, data, method = 'GET', header } = event
  let res = await new Promise((resolve, reject) => {
    let headers = {
      'content-type': 'application/json'
    }
    header && Object.assign(headers, header)
    request({
      url,
      method,
      headers
    }, function (err, res, body) {
      resolve(body)
    })
  })
  return { res }
}
