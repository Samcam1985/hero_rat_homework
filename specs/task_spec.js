var assert = require('assert');
var Task = require('../task');

describe("Task", function(){
  var task;

  beforeEach(function(){
    task = new Task(10, "High", 50)

  });

  it("Should have a difficulty level", function(){
    assert.strictEqual(task.difficulty_level, 10);
  });

  it("Should have an urgency level", function(){
    assert.strictEqual(task.urgency_level, "High");
  });

  it("Should have a reward", function(){
    assert.strictEqual(task.reward, 50);
  });
})
