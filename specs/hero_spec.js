var assert = require('assert');
var Hero = require('../hero');

describe("Hero", function(){
  var hero;

  beforeEach(function(){
    hero = new Hero("Oswald", 100, "Pizza")
    
  });

  it("Hero should have a name", function(){
    assert.strictEqual(hero.name, "Oswald");
  });
})






