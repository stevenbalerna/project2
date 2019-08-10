// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");
var $compareTable = $("#compareTable");

var selected1;
var selected2;

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getPlayer: function(id, cb) {
    $.ajax({
      url: "api/player/"+id,
      type: "GET"
    }).then(function(res){
      cb(res);
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);

$compareTable.on("click", "button", function(){
  var index = parseInt($(this).attr("data-target"))+1;
  var $tRow = $("#compareTable tbody").children("tr:nth-child("+index+")");
  var playerId = parseInt($($tRow).attr("data-player"));

  console.log(playerId);

  if(selected1 && selected2){
    if(selected2 !== index && selected1 !== index){
      $("#compareTable tbody").children("tr:nth-child("+selected2+")").removeClass("selected");
      selected2 = index;
      $($tRow).addClass("selected");
      API.getPlayer(playerId, function(res){
        addPlayerCard(res,2)
      })
    }else if(selected1 === index){
      $("#compareTable tbody").children("tr:nth-child("+selected1+")").removeClass("selected");
      selected1 = null;
      removePlayerCard(1);
    }else if(selected2 === index){
      $("#compareTable tbody").children("tr:nth-child("+selected2+")").removeClass("selected");
      selected2 = null;
      removePlayerCard(2);
    }
  }else if(selected1 && !selected2){
    if(selected1 !== index){
      selected2 = index;
      $($tRow).addClass("selected");
      API.getPlayer(playerId, function(res){
        addPlayerCard(res,2)
      })
    }else{
      $("#compareTable tbody").children("tr:nth-child("+selected1+")").removeClass("selected");
      selected1 = null;
      removePlayerCard(1);
    }
  }else if(!selected1){
    if(selected2 !== index){
      selected1 = index;
      $($tRow).addClass("selected");
      API.getPlayer(playerId, function(res){
        addPlayerCard(res,1)
      })
    }else{
      $("#compareTable tbody").children("tr:nth-child("+selected2+")").removeClass("selected");
      selected2 = null;
      removePlayerCard(2);
    }
  }

});

$("#filterDrop").change(function(){
  var option = $("#filterDrop").find(":selected").attr("value");
  console.log(option);
  $.get('/refresh/' + option, function (resultHtml) {
    $('#compareTable').html(resultHtml);
  })
});



function removePlayerCard(position){
  $("#player"+position+"Bio").empty();
  $("#player"+position+"Stats").empty();
  $("#player"+position+"Projections").empty();
};

function addPlayerCard(player, position){
  removePlayerCard(position);
  var $flipCard = $("<div>").attr("class", "flip-card");
  var $flipInner = $("<div>").attr("class", "flip-card-inner");
  var $flipFront = $("<div>").attr("class", "flip-card-front");
  var $flipBack = $("<div>").attr("class", "flip-card-back");
 
  var $profilePic = $("<img>").attr("src", player.profilePic);
  var $row1 = $("<div>").attr("class", "row py-1");
  var $row2 = $("<div>").attr("class", "row py-1");
  var $col = $("<div>").attr("class", "col-12");
  var $name = $("<h3>").text(player.bio.Name);
  var $pos = $("<h5>").text(player.bio.Position);


  for (var key in player.bio) {
    var $rCol = $("<div>").attr("class", "col-12 py-1");
    $rCol.html(`<strong>${key}</strong>: <span">${player.bio[key]}</span>`)

    $row2.append($rCol);
  }
  $flipCard.append($flipInner);
  $flipInner.append($flipFront);
  $flipFront.append($profilePic);
  $flipInner.append($flipBack);
  $flipBack.append($row1)
  $row1.append($col);
  $col.append($name);
  $col.append($pos);
  $flipBack.append($row2)


  var $stats = $("<div>").attr("class", "row py-1 px-0 text-center");
  
  for (const key in player.Stats2018) {
    
    var $col = $("<div>").addClass("col-6");
    var $tag = $("<h5>").text(key).css("color", "#ff0");
    var $stat = $("<h5>").text(player.Stats2018[key]);

    $col.append($tag);
    $col.append($stat)
    $stats.append($col);
  }

  var $projections = $("<div>").attr("class", "row py-1 px-0 text-center");
  
  for (const key in player.Projections2019) {
    
    var $col = $("<div>").addClass("col-6");
    var $tag = $("<h5>").text(key).css("color", "#ff0");
    var $stat = $("<h5>").text(player.Projections2019[key]);

    $col.append($tag);
    $col.append($stat)
    $projections.append($col);
  }


  
  $("#player"+position+"Bio").append($flipCard);
  $("#player"+position+"Stats").append($stats);
  $("#player"+position+"Projections").append($projections);

}
