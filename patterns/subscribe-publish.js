
var event = {
  clientList: [],
  listen: function(key, fn) {
    if (!this.clientList[key]) {
      this.clientList[key] = []
    }
    this.clientList[key].push(fn)
  },
  trigger: function() {
    var key = Array.prototype.shift.call(arguments)
    var fns = this.clientList[key]

    if(!fns || fns.length === 0) {
      return false
    }

    for(var i = 0, fn; fn = fns[i++]; ) {
      fn.apply(this, arguments)
    }
  }
}

var installEvent = function(obj) {
  for(var i in event) {
    obj[i] = event[i]
  }
}

// test
var salesOffices = {}
installEvent(salesOffices)

salesOffices.listen('squareMeter88', function(price){
  console.log('价格 = ', price)
})

salesOffices.listen('squareMeter110', function(price){
  console.log('价格 = ', price)
})

salesOffices.trigger('squareMeter88', 2000000)
salesOffices.trigger('squareMeter110', 3000000)
