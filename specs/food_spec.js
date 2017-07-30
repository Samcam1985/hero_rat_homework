var assert = require('assert');
var Food = require('../food');

describe("Food", function(){
  var food;

  beforeEach(function(){
    food = new Food("Pizza", 50)

  });

it("Should have a name", function(){
  assert.strictEqual(food.name, "Pizza");
});

});
