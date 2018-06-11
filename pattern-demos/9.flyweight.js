// 享元模式是用时间换空间的性能优化模式

// 享元模式适应情况：
// （1）大量相似对象
// （2）造成很大的内存损耗
// （3）大多数状态可以变为外部状态
// （4）剥离出外部状态，用较少的共享对象取代大量对象

// 列表页不停地新建DOM对象，可以用享元模式来重构

var Model = function(sex){
  this.sex = sex
}

Model.prototype.takePhoto = function(){
  console.log('sex=' + this.sex + ' underwear=' + this.underwear)
}

var maleModel = new Model('male')
var femaleModel = new Model('female')

for(var i = 1; i <= 50; i++) {
  maleModel.underwear = 'underwear' + i
  maleModel.takePhoto()
}

for(var i = 1; i <= 50; i++) {
  femaleModel.underwear = 'underwear' + i
  femaleModel.takePhoto()
}