Meteor.publish('Subcategories', function () {
  return Subcategories.find();
});
