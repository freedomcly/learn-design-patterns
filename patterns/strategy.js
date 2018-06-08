// 定义: 定义一系列算法，把它们一个个封装起来，并且使它们可以相互替换

var strategies = {
  'S' : function(salary) {
    return salary * 4
  },

  'A' : function(salary) {
    return salary * 3
  },

  'B' : function(salary) {
    return salary * 2
  }
}

var calculateBonus = function(func, salary) {
  return strategies[func](salary)
}

// test

calculateBonus('S', 10000)