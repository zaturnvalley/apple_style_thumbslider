$(document).ready(function(){
  // Declared variables
  var totalWidth = 0;

  var positions = new Array();

  $('#slides .slide').each(function(i){
    // Get slider widths
    positions[i] = totalWidth;
    totalWidth += $(this).width();

    // Check widths
    if(!$(this).width()){
      alert('Please add a width to your images');
      return false;
    }
  });

  // Set width
  $('#slides').width(totalWidth);

  // Menu item click handler
  $('#menu ul li a').click(function(e, keepScroll){
    // Remove active class and add inactive  class
    $('li.product').removeClass('active').addClass('inactive');
    // Add active class to parent
    $(this).parent().addClass('active');

    // Position variable
    var pos = $(this).parent().prevAll('.product').length;

    // Initial animation
    $('#slides').stop().animate(marginLeft:-positions[pos]+"px", 450);

    // Prevent default
    e.preventDefault();
  });
});