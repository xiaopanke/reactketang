let express=require('express');
let app=express();
app.use((req,res,next) => {
  //通过中间件解决接口跨域的问题
  //允许的来源
  res.header('Access-Control-Allow-Origin','http://localhost:8080')
  //允许客户端请求的方法
  res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE')
  //允许客户端发送的请求头
  res.header('Access-Control-Allow-Headers','Content-Type')
  //允许客户端发送cookie
  res.header('Access-Control-Allow-Credential','true');

  //当客户端发向服务器发post跨域的时候，会先发送OPTIONS请求，如果服务器返回的响应头Access-Control-Allow-Methods里有POST的话，才会再次发送POST请求
  if(req.method=='OPTIONS'){
    res.end();
  }else{
    next();
  }
})
let sliders=require('./mock/slider.js')
//获取轮播图
app.get('/sliders',(req,res) => {
    res.send(sliders)
})
let lessons=require('./mock/lessons.js')
//获取美女 //此接口可以再接收二个参数 offset（偏移量） limit (每页的条数)
// http://localhost:3000/lessons?offset=0&limit=5;
// http://localhost:3000/lessons?offset=5&limit=5;
// http://localhost:3000/lessons?offset=10&limit=5;
app.get('/lessons',(req,res) => {
    let cloneLessons=JSON.parse(JSON.stringify(lessons));//深度克隆
    //取得查询字符串对象参数
    let {offset=0,limit=5}=req.query; //前面是设置默认值
    for (var i = 0; i < cloneLessons.list.length; i++) {
      let lesson=cloneLessons.list[i];
      lesson.title=`${offset/1+i+1}-${lesson.title}`
    }
    if(offset==10){
      cloneLessons.hasMore=false
    }
    setTimeout(function() {
      res.send(cloneLessons)
    },1000)
})
app.listen(3000)
