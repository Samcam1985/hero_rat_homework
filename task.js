var Task = function(difficulty_level, urgency_level, reward) {
  this.difficulty_level = difficulty_level;
  this.urgency_level = urgency_level;
  this.reward = reward;
  this.is_complete = false;

  Task.prototype.setComplete = function() {
    this.is_complete = true;
  }
}


module.exports = Task;