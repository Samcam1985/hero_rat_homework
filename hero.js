var Hero = function(name, health, favourite_food) {
  this.name = name;
  this.health = health;
  this.favourite_food = favourite_food;

  Hero.prototype.sayName = function() {
    return "Hello, My name is " + this.name;
  }
}


module.exports = Hero;