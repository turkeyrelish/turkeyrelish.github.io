(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    $('#main-cta').click(function() {
        $('#modal-form').openModal();
     });

    $('#sidenav-cta').click(function() {
       $('#modal-form').openModal();
    });

    $('#second-cta').click(function() {
       $('#modal-form').openModal();
    });

    $('#third-cta').click(function() {
       $('#modal-form').openModal();
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
