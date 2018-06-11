// 传统装饰者模式

var Plane = function(){}
Plane.prototype.fire = function(){
  console.log('发射普通子弹')
}

var MissileDecorator = function(plane) {
  this.plane = plane
}
MissileDecorator.prototype.fire = function() {
  this.plane.fire()
  console.log('发射导弹')
}

var AtomDecorator = function(plane) {
  this.plane = plane
}
AtomDecorator.prototype.fire = function() {
  this.plane.fire()
  console.log('发射原子弹')
}

// test
var plane = new Plane()
plane = new MissileDecorator(plane)
plane = new AtomDecorator(plane)
plane.fire()

// JavaScript 装饰者模式
var plane = {
  fire: function() {
    console.log('发射普通子弹')
  }
}

var missileDecorator = function() {
  console.log('发射导弹')
}

var atomDecorator = function() {
  console.log('发射原子弹')
}

var fire1 = plane.fire

plane.fire = function() {
  fire1()
  missileDecorator()
}

var fire2 = plane.fire

plane.fire = function() {
  fire2()
  atomDecorator()
}

plane.fire()