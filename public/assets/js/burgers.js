// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-eaten").on("click", function (event) {
    var id = $(this).data("id");
    var newEaten = $(this).data("eaten");

    var newEatenState = {
      eaten: newEaten,
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatenState,
    }).then(function () {
      console.log("changed status to", newEaten);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newEaten = {
      name: $("#ca").val().trim(),
      eaten: $("[name=eaty]:checked").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newEaten,
    }).then(function () {
      console.log("new special added");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete-burgers").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("deleted burgers", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
