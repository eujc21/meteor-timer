Meteor.publish('Times', function () {
  return Times.find();
});
