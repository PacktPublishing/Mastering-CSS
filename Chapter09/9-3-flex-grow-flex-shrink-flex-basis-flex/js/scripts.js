$(document).ready(function() {

	$(".mobile-menu-icon").on("click", function(){
		$(".primary-nav").toggleClass("active");
		$(this).toggleClass("open");
	});
});//end doc ready