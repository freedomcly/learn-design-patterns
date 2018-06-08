// 保护代理: 提前拒绝掉不合理的请求
// 虚拟代理: 把开销很大的操作延迟到真正需要的时候

// 预加载
var myImage = (function() {
  var imgNode = document.createElement('img')
  document.body.appendChild(imgNode)
  return function(src) {
    imgNode.src = src
  }
})

var proxyImage = (function() {
  var img = new Image

  img.onload = function() {
    myImage(this.src)
  }

  return function(src) {
    myImage('http://...')
    img.src = src
  }
})()

proxyImage('http://...')
