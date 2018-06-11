// 缓存代理

var mult = function() {
  var a = 1
  for (var i = 0, l = arguments.length; i < l; i++) {
    a = a * arguments[i]
  }
  return a
}

var plus = function() {
  var a = 0
  for (var i = 0, l = arguments.length; i < l; i++) {
    a = a + arguments[i]
  }
  return a
}

var createProxyFactory = function(fn) {
  var cache = {}

  return function() {
    var args = Array.prototype.join.call(arguments, ',')
    if(args in cache) {
      return cache[args]
    }
    return cache[args] = fn.apply(this, arguments)
  }
}

// test
var proxyMult = createProxyFactory(mult)
var proxyPlus = createProxyFactory(plus)

proxyMult(1,2,3)
proxyMult(1,2,3)