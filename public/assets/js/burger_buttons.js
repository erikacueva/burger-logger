$(document).ready(function () {
  $(".devour-btn").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");

    $.ajax(`/burgers/update/${id}`, {
      type: "PUT",
      data: {
        devoured: true,
      },
    }).then(function (data) {
      location.reload();
    });
  });
});
