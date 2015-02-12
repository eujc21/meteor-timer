Meteor.publish('forms', function () {
  return forms.find();
});
