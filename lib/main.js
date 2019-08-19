$(document).ready(function() {
      $('.bank-select').on('click', function(){
            $(this).toggleClass('active')
          })
          
          $('.bank-select ul li').on('click', function() {
            var v = $(this).text();
            $('.bank-select ul li').not($(this)).removeClass('active');
            $(this).addClass('active');
            $('.bank-select label button').text(v)
          })
});

