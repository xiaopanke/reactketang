const domain='http://localhost:3000'
//后台的url地址是3000端口
export function get(url) {
  //fetch 是promise的升级 是axjx的封装，比axjx好用，
  //这里会返回一个promise，resolve之后就是轮播图数据 
  return  fetch(domain+url,{
    method:'GET',
    header:{
      //需要服务器返回json格式的数据
      "Accept":'application/json',
      //客户跨域请求服务器的要携带cookie
      "credential":"include"
    }
  }).then((res) =>res.json())
}
