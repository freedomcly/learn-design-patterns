// 定义: 保证一个类仅有一个实例，并提供一个访问它的全局访问点

var getSingle = function(fn) {
  var result
  return function() {
    return result || (result = fn.apply(this, arguments)) // apply的意思是: 保留被返回函数的上下文this和arguments
  }
}

// test

function test(n) {
  return n
}

var singleTest = getSingle(test)

singleTest(3)
singleTest(2)
singleTest(1)