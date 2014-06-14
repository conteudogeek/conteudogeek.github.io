$("#menu-btn").click(function() {
  var isOpen = $("#menu").data("isOpen");

  if (isOpen) {
    $("#menu").slideUp();
  } else {
    $("#menu").slideDown();
  }
  isOpen = !isOpen;
  $("#menu").data("isOpen", isOpen);
})