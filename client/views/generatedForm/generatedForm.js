/////////////////////////////////////////////////////
///////////////Template Rendered/////////////////////
/////////////////////////////////////////////////////

Template.generatedForm.rendered = function() {
  $('.ui.accordion').accordion();
};

/////////////////////////////////////////////////////
///////////////Template Helpers//////////////////////
/////////////////////////////////////////////////////

Template.generatedForm.helpers({
  list: function() {
    return Categories.find({}).fetch();
  }
});


Template.tableBox.helpers({
  table: function() {
    return Subcategories.find({
      "parentID": this.catHash
    });
  }
});

Template.categoryRow.helpers({
  timeT: function(hID) {
    return Times.find({
      "hashid": hID,
      "times": {
        $exists: true
      }
    }).fetch();
  },

  'sum': function(hID) {
    var sum = 0.0;
    var cursor = Times.find({
      "hashid": hID
    });
    cursor.forEach(function(shit) {
      sum = parseFloat(sum) + parseFloat(shit.totalTime);
    });
    return sum;
  }
});

Template.times.helpers({
  'startTime': function(hID) {
    var sA = Times.find({
      "hashid": hID
    });
    sA.forEach(function(shit) {
      startTime = parseFloat(shit.startTime);
    });
    return startTime;
  }
});
/////////////////////////////////////////////////////
///////////////Template Events///////////////////////
/////////////////////////////////////////////////////

Template.generatedForm.events({
  // Start Timing Event
  'click #stopWatchjs': function(ev) {
    // Variables
    var sTi = ev.timeStamp;
    var goTo = $(ev.currentTarget).parent().parent().next().children().children();
    var startTime = $(goTo[0]).val(sTi);

    // Event
    $(ev.currentTarget).attr("id", "stopWatchjs1");


    // JSON Data
    data = {};
    data.hashid = this._id;
    data.startTime = sTi;

    // METEOR CALL
    Meteor.call("insertTime", data);
    // Times.insert(data);
  },

  'click #stopWatchjs1': function(ev) {
    // Variables

    var sTe = ev.timeStamp;
    var goTo = $(ev.currentTarget).parent().parent().next().children().children();
    var startTime = $(goTo[0]).val();
    var stop = $(goTo[1]).val(sTe);
    var stopTime = sTe;
    var current = (sTe - $(goTo[0]).val()) / 1000;
    var totalTime = current;

    // Event 1
    $(goTo[2]).val(current);

    // JSON Data
    var data = {};
    data.hashid = this._id;

    time = {
      "stopTime": stopTime,
      "totalTime": totalTime,
    };

    // METEOR CALL
    Meteor.call("updateTime", data.hashid, time);

    // Event 2
    $(ev.currentTarget).attr("id", "stopWatchjs");
  },

  'click #deleteT': function(ev) {
    Categories.remove(this._id);
  },
  'click #saveT': function(ev) {
    var category = Categories.findOne({
      _id: this._id
    });
    var subcategory = Subcategories.find({
      parentID: this.catHash
    }).fetch();

    var form = [];

    form.push({
      "Full-Name": category.name,
      "Form-Date": category.date,
      "Operation": category.lineOperation,
      "Shift": category.shift,
    });

    subcategory.forEach(function(shit) {
      var times = Times.findOne({
        "hashid": shit._id
      });
      form.push({
        "task": shit.name,
        "total-time": times.totalTime,
      });
    });
    Meteor.call("saveForm", form);
  }
});
