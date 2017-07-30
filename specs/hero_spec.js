var assert = require('assert');
var Hero = require('../hero');
var Task = require('../task');

describe("Hero", function(){
  var hero;
  var task;

  beforeEach(function(){
    hero = new Hero("Oswald", 100, "Pizza")
    task1 = new Task(10, "High", 50)
    task2 = new Task(10, "Low", 20)
    
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
})






