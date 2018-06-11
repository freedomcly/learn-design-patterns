Function.prototype.before = function(beforefn) {
  var _self = this
  return function() {
    beforefn.apply(this, arguments)
    return _self.apply(this, arguments)
  }
}

Function.prototype.after = function(afterfn) {
  var _self = this
  return function() {
    var ret = _self.apply(this, arguments)
    afterfn.apply(this, arguments)
    return ret
  }
}

// test
var printA = function() {
  console.log('A')
}

var printB = function() {
  console.log('B')
}

var printC = function() {
  console.log('C')
}

printB.before(printA).after(printC)()