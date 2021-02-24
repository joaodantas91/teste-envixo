$(document).ready(()=>{
  
  $("body").removeClass("preload"); // Remove Pre-load class

  $('.green-bar').css('width', $('.title.active').width());
  $('#submit').css('top', $('.inputs-form.show').outerHeight());
  

  $('.title').click(function() {
    if (!$(this).hasClass('active')) {
      
      // class changing to animate on handle switch title
      $('.title').removeClass('active');
      $(this).addClass('active');
      $('.green-bar').css('width', $('.title.active').width());
      


      let idTarget = $(this).attr("id-target");

      $('.inputs-form').css('animation-name', 'hide')
      $(`.inputs-form[id="${idTarget}"]`).css('animation-name', 'show') // Prevent key frame runs on
      
      $('.inputs-form').removeClass('show');
      $('.inputs-form').addClass('hide');
      $(`.inputs-form[id="${idTarget}"]`).removeClass('hide');
      $(`.inputs-form[id="${idTarget}"]`).addClass('show');

      $(`#submit span`).removeClass('active')//submit buttons text changing
      $(`${'#'+ idTarget}-button`).addClass('active');
    }
    $('.green-bar').css('width', $(this).width());
    $('#submit').css('top', $('.inputs-form.show').outerHeight());
  })
});