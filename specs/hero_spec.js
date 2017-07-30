var assert = require('assert');
var Hero = require('../hero');
var Task = require('../task');
var Food = require('../food');
var _ = require('lodash');

describe("Hero", function(){
  var hero;
  var task;
  var food;

  beforeEach(function(){
    hero = new Hero("Oswald", 100, "Pizza");
    task1 = new Task("Hard", "High", 50);
    task2 = new Task("Medium", "Low", 20);
    task3 = new Task("Easy", "Low", 10);
    food1 = new Food("Pizza", 50);
    
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

  it('should increase health * 1.5 if favourite food', function(){
    hero.increaseHealthWithFavouriteFood(food1);
    assert.strictEqual(hero.health, 175);
  });

  it('should be able to sort tasks by difficulty', function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.sortTasksByDifficulty();
    var task = _.head(hero.tasks);
    assert.strictEqual(task.difficulty_level, "Hard");
  });

  it('should be able to sort tasks by urgency', function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.sortTasksByUrgency();
    var task = _.head(hero.tasks);
    assert.strictEqual(task.urgency_level, "High");
  });

  it('should be able to sort tasks by reward', function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.sortTasksByReward();
    var task = _.head(hero.tasks);
    assert.strictEqual(task.reward, 50);
  });

  it('Should be able to view tasks which are completed', function(){
    task1.setComplete();
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    var tasks = hero.viewTasksByCompletedOrIncomplete(true);
    assert.strictEqual(tasks.length, 1);
  });

  it('Should be able to view tasks which are incomplete', function(){
    task1.setComplete();
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    var tasks = hero.viewTasksByCompletedOrIncomplete(false);
    assert.strictEqual(tasks.length, 2);
  })
 
})






