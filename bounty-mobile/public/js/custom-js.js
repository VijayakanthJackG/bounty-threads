
$(document).ready(function(){


/*2*/
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

/*3*/

$(".dropdown").click(
  function () {
    $('>.dropdown-menu', this).stop(true, true).fadeIn("fast");
    $(this).addClass('open');
  },
  function () {
    $('>.dropdown-menu', this).stop(true, true).fadeOut("fast");
    $(this).removeClass('open');
  });

/*4*/
  $(".recyclable-inn").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: false,

});

/*5*/

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

/*6*/

$('.panel-collapse').on('show.bs.collapse', function () {
  $(this).siblings('.panel-heading').addClass('active');
});

$('.panel-collapse').on('hide.bs.collapse', function () {
  $(this).siblings('.panel-heading').removeClass('active');
});

    $('.campaigns').owlCarousel({
      loop:false,
      margin:15,
      nav: false,
      dots:true,
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

/*7*/

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