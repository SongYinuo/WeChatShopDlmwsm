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