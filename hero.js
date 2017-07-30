var _ = require("lodash");

var Hero = function(name, health, favourite_food) {
  this.name = name;
  this.health = health;
  this.favourite_food = favourite_food;
  this.tasks = [];

  Hero.prototype.sayName = function() {
    return "Hello, My name is " + this.name;
  }

  Hero.prototype.addTask = function(task) {
    this.tasks.push(task);
  }

  Hero.prototype.increaseHealthByEating = function(food) {
    this.health += food.replenishment_value;
  }

  Hero.prototype.increaseHealthWithFavouriteFood = function(food){
    if(food.name === this.favourite_food){
     food.replenishment_value = food.replenishment_value * 1.5;
   }
   this.increaseHealthByEating(food);
 }

 Hero.prototype.sortTasksByDifficulty = function(){
  return _.sortBy(this.tasks, ['difficulty_level']);
}

 Hero.prototype.sortTasksByUrgency = function(){
  return _.sortBy(this.tasks, ['urgency_level']);
}

 Hero.prototype.sortTasksByReward = function(){
  return _.sortBy(this.tasks, ['reward']);
}

Hero.prototype.viewTasksByCompletedOrIncomplete = function(isComplete){
 return _.filter(this.tasks, {'is_complete': isComplete });
}
}


module.exports = Hero;