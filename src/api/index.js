const domain='http://localhost:3000'
//后台的url地址是3000端口
export function get(url) {
  //fetch 是promise的升级 是axjx的封装，比axjx好用，
  //这里会返回一个promise，resolve之后就是轮播图数据
  //浏览器原生支持fetch
  return  fetch(domain+url,{
    method:'GET',
    "credentials":"include" , //客户跨域请求服务器的要携带cookie
    headers:{
      //需要服务器返回json格式的数据
      "Accept":'application/json'
    }
  }).then((res) =>{
    console.log(res);
    return res.json()
  })
}
//向服务器发送post请求
export function post(url,data) {
  return fetch(domain+url,{
    method:'POST',
    "credentials":"include",
    headers:{
      "Accept":'application/json',//用来指定客户端能够接收的响应体类型
      "Content-Type":'application/json' //内容类型
    },
    body:JSON.stringify(data)
  }).then(res=>res.json())
}
