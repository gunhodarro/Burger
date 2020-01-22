$(function() {
    $(".change-yum").on("click", function(event) {
      var id = $(this).data("id");
      var devoured = $(this).data("yum");
  
      var newYumType = {
        yum: devoured
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newYumType
      }).then(
        function() {
          console.log("changed burger to", newYumType);
          location.reload();
        }
      );
    });
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        yum: $("[name=yum]:checked").val().trim()
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("maka da burger");
          location.reload();
        }
      );
    });
  });