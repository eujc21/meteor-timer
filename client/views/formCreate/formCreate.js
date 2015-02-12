Template.formCreate.rendered = function() {
  //...
};
Template.formCreate.events({
  // This will genereate items in a table.
  'click #addCat': function() {
    var table = document.getElementById("catTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var a = $('#contCat').val();
    cell1.outerHTML = "<td name='category[]' value='" + a.toLowerCase().replace(/\s/g, '') + "'>" + a + "<a><i class='fa fa-minus-square-o delete'></i></a></td>";
    $('#contCat').select();
  },
  // This will genereate items in a table.\\\
  'keypress #contCat': function(event) {
    if (event.charCode == 13) {
      var table = document.getElementById("catTable");
      var row = table.insertRow(0);
      var cell1 = row.insertCell(0);
      var a = $('#contCat').val();
      cell1.outerHTML = "<td name='category[]' value='" + a.toLowerCase().replace(/\s/g, '') + "'>" + a + "<a><i class='fa fa-minus-square-o delete'></i></a></td>";
      $('#contCat').select();
      event.stopPropagation();
      return false;
    }
  },
  // This will delete items in a table.
  "click .delete": function(ev) {
    $(ev.toElement.offsetParent).remove();
  },
  // This will genereate a form with data.
  "click .createForm": function(ev) {
    var cati = $('#catTable').children().children().children();
    var name = $(".name").val();
    var lineOperation = $(".lineOperation").val();
    var catHash = CryptoJS.MD5(name + lineOperation).toString();

    var data = {
      "catHash": catHash,
      "name": $(".name").val(),
      "date": $(".date").val(),
      "lineOperation": $(".lineOperation").val(),
      "shift": $(".shift").val(),
      "postedon": (new Date).getTime()
    };
    Categories.insert(data, function(error, result) {

      //The insert will fail, error will be set,
      //and result will be undefined or false because "copies" is required.
      //
      //The list of errors is available on `error.invalidKeys` or by calling Books.simpleSchema().namedContext().invalidKeys()
    });

    // console.log(catHash);
    // catArr.push("catHash": catHash);
    $.each(cati, function(index, element) {
      var cat = $(element);
      Subcategories.insert({
        name: cat[0].outerText,
        parentID: catHash,
        flag: false
      }, function(error, result) {});
    });

    $('#main').find('form')[0].reset();
    $("#catTable tr").remove();
  }
});
