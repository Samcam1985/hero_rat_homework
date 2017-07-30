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
 
}


module.exports = Hero;