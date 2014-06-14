$("#cg-menu-btn").click(function(e) {
  var isOpen = $("#menu").data("isOpen");
  alert("here");

  if (isOpen) {
    $("#menu").slideUp();
  } else {
    $("#menu").slideDown();
  }
  isOpen = !isOpen;
  $("#menu").data("isOpen", isOpen);
});