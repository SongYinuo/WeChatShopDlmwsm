import axios from 'axios'

let http = {}
// 正式服
let completeUrl = 'http://192.168.1.12' 
http.post = (url, body) => {
  return axios({
    method: 'post',
    url: completeUrl + url,
    data: body,
    headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        if(data[it].constructor === Array){
          ret += encodeURIComponent(it) + '=' + JSON.stringify(data[it]) + '&'
        }else{
          ret += encodeURIComponent(it) + '=' + data[it] + '&'
        }
      }
      return ret
    }]
  })
  .then((response) => response.data)
  .catch(error => error)
}

http.get = (url, params) => {
  return axios.get(completeUrl + url, { params })
    .then((response) => response.data)
    .catch(error => error)
}


export default http

// export function formatDate (date, fmt) {
//   if (/(y+)/.test(fmt)) {
//       fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
//   }
//   let o = {
//       'M+': date.getMonth() + 1,
//       'd+': date.getDate(),
//       'h+': date.getHours(),
//       'm+': date.getMinutes(),
//       's+': date.getSeconds()
//   };
//   for (let k in o) {
//       if (new RegExp(`(${k})`).test(fmt)) {
//           let str = o[k] + '';
//           fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
//       }
//   }
//   return fmt;
// };

// function padLeftZero (str) {
//   return ('00' + str).substr(str.length);
// };


export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}
 
function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}