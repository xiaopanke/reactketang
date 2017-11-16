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

}
