// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devour").on("click", function(event) {
    var burgerid = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");
    // console.log("change-devour" + newDevoured);
    // console.log("button change-dev id=" + burgerid)
    var newEatState = {
      id: burgerid,
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + burgerid, {
      type: "PUT",
      data: newEatState
    }).then(
      function() {
        // console.log("changed newEatState to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burg").val().trim(),
      // devoured: $("[burger_name=devoured]:checked").val().trim()
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // $(".delete-cat").on("click", function(event) {
  //   var id = $(this).data("id");

  //   // Send the DELETE request.
  //   $.ajax("/api/cats/" + id, {
  //     type: "DELETE"
  //   }).then(
  //     function() {
  //       console.log("deleted cat", id);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });
});
