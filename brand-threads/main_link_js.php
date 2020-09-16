<script src="public/js/jquery-3.3.1.min.js"></script>
<script src="public/js/owl.carousel.min.js"></script>
<script src="public/js/popper.min.js"></script>
<script src="public/js/bootstrap.min.js"></script>
<script src="public/js/jquery-ui.min.js"></script>
<script src="public/js/wow.min.js"></script>


<script src="public/js/slick.min.js" type="text/javascript" charset="utf-8"></script>

  <script src="public/js/jquery.preloadinator.min.js"></script>
    <script>
$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({'overflow':'visible'});
})
    </script>


<script>
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
</script>


<script>
   $('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });

</script>

  <script type="text/javascript">
    $(document).ready(function(){
      $(".recyclable-inn").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
    dots: false,
  infinite: false,
  //autoplay: true,
  //autoplaySpeed: 2000,
  //centerMode: true,
      });
    });
  </script>



<script>
	
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


</script>




 <script type="text/javascript">
 	$(".dropdown").click(
                        function () {
                            $('>.dropdown-menu', this).stop(true, true).fadeIn("fast");
                            $(this).addClass('open');
                        },
                        function () {
                            $('>.dropdown-menu', this).stop(true, true).fadeOut("fast");
                            $(this).removeClass('open');
                        });

 </script>
<script>
    $(document).ready(function(){
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
    });
</script>
<script>
    $(document).ready(function(){
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
    </script>