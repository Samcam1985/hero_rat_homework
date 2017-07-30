var assert = require('assert');
var Hero = require('../hero');
var Task = require('../task');
var Food = require('../food');

describe("Hero", function(){
  var hero;
  var task;
  var food;

  beforeEach(function(){
    hero = new Hero("Oswald", 100, "Pizza")
    task1 = new Task(10, "High", 50)
    task2 = new Task(10, "Low", 20)
    food1 = new Food("Pizza", 50)
    
  });

  it("Hero should have a name", function(){
    assert.strictEqual(hero.name, "Oswald");
  });

  it("Should have health", function(){
    assert.strictEqual(hero.health, 100);
  });

  it("Should have a favourite food", function(){
    assert.strictEqual(hero.favourite_food, "Pizza");
  });

  it("Should talk saying their name", function(){
    assert.strictEqual(hero.sayName(), "Hello, My name is Oswald");
  });

  it("Should add a task", function(){
    hero.addTask(task1);
    assert.strictEqual(hero.tasks.length, 1);
  });

  it('should be able to eat food and health should go up by replenishment value', function () {
    hero.increaseHealthByEating(food1);
    assert.strictEqual(hero.health, 150);
  });
})






