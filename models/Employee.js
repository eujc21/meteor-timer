Employee = new Mongo.Collection('Employee');
Employee.attachSchema(new SimpleSchema({
  first: {
    type: String,
    label: "First Name",
    max: 200
  },
  last: {
    type: String,
    label: "First Name",
    max: 200
  },
  employee: {
    type: Number,
    label: "Identification Number",
    min: 0
  },
  DOB: {
    type: Date,
    label: "Date of Birth",
    optional: true
  }
}));

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  Employee.allow({
    insert : function () {
      return true;
    },
    update : function () {
      return true;
    },
    remove : function () {
      return true;
    }
  });
}
