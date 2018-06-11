Function.prototype.after = function(fn) {
  var self = this

  return function() {
    var ret = self.apply(this, arguments)
    if (ret === 'nextSuccessor') {
      return fn.apply(this, arguments)
    }
    return ret
  }
}

// test
var order500 = function(orderType, pay, stock) {
  if (orderType === 1 && pay === true) {
    console.log('500元定金预购，得到100优惠劵')
  } else {
    return 'nextSuccessor'
  }
}

var order200 = function(orderType, pay, stock) {
  if (orderType === 2 && pay === true) {
    console.log('200元定金预购，得到50优惠劵')
  } else {
    return 'nextSuccessor'
  }
}

var orderNormal = function(orderType, pay, stock) {
  if (stock > 0) {
    console.log('普通购买，无优惠劵')
  } else {
    console.log('手机库存不足')
  }
}

var order = order500.after(order200).after(orderNormal)
order(2, true, 500)
