
/*Interactivity to determine when an animated element in in view. In view elements trigger our animation*/
$(document).ready(function () {

    //window and animation items
    var animation_elements = $.find('.animation-element');
    var web_window = $(window);
  
    //check to see if any animation containers are currently in view
    function check_if_in_view() {
      //get current window information
      var window_height = web_window.height();
      var window_top_position = web_window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);
  
      //iterate through elements to see if its in view
      $.each(animation_elements, function () {
  
        //get the element sinformation
        var element = $(this);
        var element_height = $(element).outerHeight();
        var element_top_position = $(element).offset().top;
        var element_bottom_position = (element_top_position + element_height);
  
        //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
        if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
          element.addClass('in-view');
        } else {
          element.removeClass('in-view');
        }
      });
  
    }
  
    //on or scroll, detect elements in view
    $(window).on('scroll resize', function () {
      check_if_in_view()
    })
    //trigger our scroll event on initial load
    $(window).trigger('scroll');
  
  });
  
  
  // var text = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic eos dolor quidem similique veritatis soluta reiciendis dolorem saepe, perferendis inventore amet ab eaque esse non necessitatibus fuga nostrum quo molestias numquam, voluptatum fugiat? Fuga laboriosam tempore corporis enim pariatur harum minima voluptate qui.';
  
  // var chars = text.split('');
  // var container = document.getElementById("mypara");
  
  // var i = 0;
  // setInterval(function () {
  //   if (i < chars.length) {
  //     container.innerHTML += chars[i++];
  //   } else {
  //     i = 0;
  //     container.innerHTML = "";
  //   }
  // }, 100);