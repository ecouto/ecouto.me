$(document).ready(function(){

  $('.home__header > h1').on('click', function(){
    location.reload();    
  });

  function contentHide(){
    $('#home__content').hide( "slide", { direction: "left"  }, 800 );
  };

  function workShow(){
    $('#home__work').show( "slide", { direction: "left"  }, 1000 );
  }

  // slide jobs
  function slideJob(){
    
    $('#slider').slick({
      infinite: false,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      slidesToScroll: 1,
    });
  };

  $('#slider').hide();
  
  $('.workLink').on('click', function(){
    contentHide();
    setTimeout(function(){
      workShow();
    }, 1000);

    setTimeout(function(){
      $('#slider').show();
      slideJob();
    },2000);
  });
  

});