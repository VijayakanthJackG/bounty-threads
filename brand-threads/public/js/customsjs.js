
$(document).ready(function(){

/*1*/
$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({'overflow':'visible'});
})
   
/*2*/


window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

/*3*/


   $('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });



/*4*/

      $(".recyclable-inn").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
    dots: false,
  infinite: false,
      });



/*5*/
  $(".dropdown").click(
                        function () {
                            $('>.dropdown-menu', this).stop(true, true).fadeIn("fast");
                            $(this).addClass('open');
                        },
                        function () {
                            $('>.dropdown-menu', this).stop(true, true).fadeOut("fast");
                            $(this).removeClass('open');
                        });


/*6*/

        // Add minus icon for collapse element which is open by default
        $(".collapse.show").each(function(){
          $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
        });
        
        // Toggle plus minus icon on show hide of collapse element
        $(".collapse").on('show.bs.collapse', function(){
          $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
        }).on('hide.bs.collapse', function(){
          $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
        });

/*7*/
    $('.recyclablesin').owlCarousel({
  loop:false,
  margin:30,
 nav: true,
 dots:false,
navText: [
  "<i class='fa fa-chevron-left'></i>",
  "<i class='fa fa-chevron-right'></i>"
],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});

/*8*/

  const
  range = document.getElementById('range'),
  rangeV = document.getElementById('rangeV'),
  setValue = ()=>{
    const
    newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
    newPosition = 10 - (newValue * 0.2);
    rangeV.innerHTML = `<span>${range.value}</span>`;
    rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
  };
  document.addEventListener("DOMContentLoaded", setValue);
  range.addEventListener('input', setValue);
/*9*/


        $('#datepicker').datepicker({
            uiLibrary: 'bootstrap4'
        });
         $('#datepicker2').datepicker({
            uiLibrary: 'bootstrap4'
        });
/*10*/


/*11*/

});

  
  $(document).on("scroll", function(){
    if
      ($(document).scrollTop() > 86){
      $("#banner").addClass("shrink");
    }
    else
    {
      $("#banner").removeClass("shrink");
    }
  });

         $(document).ready(function(){
           $('.campaigns').owlCarousel({
             loop:false,
             margin:15,
             nav: true,
             dots:false,
             navText: [
             "<i class='fa fa-chevron-left'></i>",
             "<i class='fa fa-chevron-right'></i>"
             ],
             responsive:{
               0:{
                 items:3
               },
               600:{
                 items:3
               },
               1000:{
                 items:3
               }
             }
           });


    $('.recyclablesin').owlCarousel({
  loop:false,
  margin:30,
 nav: true,
 dots:false,
navText: [
  "<i class='fa fa-chevron-left'></i>",
  "<i class='fa fa-chevron-right'></i>"
],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});

         });







