$(document).ready(function () {
    $(".page-container").on("click", ".eat-burger-btn", function (event) {
      event.preventDefault();
      var id = $(this).data("id");
  
      $.ajax(`/burgers/update/${id}`, {
        type: "PUT",
      }).then(function (data) {
        location.reload();
      });
    });
  });