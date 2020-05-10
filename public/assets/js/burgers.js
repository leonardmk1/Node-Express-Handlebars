$(function() {
    $(".change-eat").on("click", function(event) {
      var id = $(this).data("id");
      var newEat = $(this).data("neweat");
        console.log(newEat, id)
      var newEatState = {
        eaten: newEat
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatState
      }).then(
        function() {
          console.log("changed eat to", newEat);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
        console.log($("#bur").val().trim()) 
        console.log($("[name=eaten]:checked").val().trim())
      var newBurger = {
        name: $("#bur").val().trim(),
        eaten: $("[name=eaten]:checked").val().trim()
      };
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          location.reload();
        }
      );
    });
  });
  