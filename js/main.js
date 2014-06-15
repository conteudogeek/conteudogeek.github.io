function slider(triggerSelector, menuSelector) {
  $(triggerSelector).click(function(e) {
    var isOpen = $(menuSelector).data("isOpen");

    if (isOpen) {
      $(menuSelector).slideUp();
    } else {
      $(menuSelector).slideDown();
    }
    isOpen = !isOpen;
    $(menuSelector).data("isOpen", isOpen);

    return false;
  });  
}

slider("#menu-btn", "#menu");
slider("#social-btn", "#social-menu");

/*$("#menu-btn").click(function(e) {
  var isOpen = $("#menu").data("isOpen");

  if (isOpen) {
    $("#menu").slideUp();
  } else {
    $("#menu").slideDown();
  }
  isOpen = !isOpen;
  $("#menu").data("isOpen", isOpen);
});*/