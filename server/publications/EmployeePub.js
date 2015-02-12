Meteor.publish('Employee', function () {
  return Employee.find();
});
