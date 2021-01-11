$(document).ready(function () {
    $(".page-container").on("click", function (event) {
      event.preventDefault();
      var id = $(this).data("id");
  
      $.ajax(`/burgers/update/${id}`, {
        type: "PUT",
      }).then(function (data) {
        location.reload();
      });
    });
  });

  // need to fix this error: "Rethrow non-MySQL errors"; 'ER_BAD_FIELD_ERROR',   sql: 'UPDATE burgers SET devoured=undefined WHERE id = undefined'