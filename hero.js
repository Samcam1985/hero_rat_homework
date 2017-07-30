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
}


module.exports = Hero;