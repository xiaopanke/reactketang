//上拉加载更多，限流，防抖
export function upMore(element,callback){
    let timeId;
    let clientHeight=element.clientHeight; //可视区的高度
  element.addEventListener('scroll',function () {
    let scrollTop=element.scrollTop; //向上卷去的高度
    let scrollHeight=element.scrollHeight //内容的高度
    if(timeId) clearTimeout(timeId)
    timeId=setTimeout(function() {
      console.log(scrollTop,scrollHeight,clientHeight);
      if(scrollTop+clientHeight+10>scrollHeight){
        callback()
      }
    },80)
  })
}

//下拉刷新
export function downRefresh(element,callback){

  element.addEventListener('touchstart',touchStart);
  let startY;//开始触摸的纵坐标
  let distance ; //移动的距离
  let initTop=element.offsetTop;
  function touchStart(event) {
    if(element.offsetTop==initTop && element.scrollTop==0){
      console.log('startY='+startY);
      startY=event.targetTouches[0].pageY; //初始值
      element.addEventListener('touchmove',touchMove)
      element.addEventListener('touchend',touchEnd)
    }
    function touchMove(e) {
      let pageY=e.targetTouches[0].pageY; //move中的纵坐标
      console.log('pageY='+pageY);
      if(pageY>startY){//新的纵坐标大于旧的，表示下拉
        distance=pageY-startY;
        console.log('distance='+distance);
        element.style.top=initTop+distance+'px';

      }else{//如果是上拉，则移除监听
        element.removeEventListener('touchmove',touchMove)
        element.removeEventListener('touchend',touchEnd)
      }
    }
    function touchEnd(e) {
      element.removeEventListener('touchmove',touchMove)
      element.removeEventListener('touchend',touchEnd)
      let timerId=setInterval(function functionName() {
        //如果说当前的距离已经小于等于初始的值 了，就清除定时器
        if(element.offsetTop<=initTop){
          element.style.top=initTop+'px';
          clearTimeout(timerId)
        }else{
          element.style.top=element.offsetTop-5+'px'
        }

      },5)
      if(distance>50){
        callback();
      }
    }
  }
}
