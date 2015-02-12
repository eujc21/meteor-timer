Meteor.methods({
  insertTime: function(data) {
    var insertFlag = Subcategories.update({
      "_id": data.hashid
    }, {
      $set: {
        flag: true
      }
    });
    var insertTime = Times.insert(data);
  },
  updateTime: function(id, time) {
    var updateTime = Times.update({
      "hashid": id
    }, {
      $set: time
    });
    var updateFlag = Subcategories.update({
      "_id": id
    }, {
      $set: {
        flag: false
      }
    });
  },
  saveForm:function(data){
    var saveForm = forms.insert(data);
  }
});
