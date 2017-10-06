$(document).ready(function() {

	$(".mobile-menu-icon").on("click", function(){
		$(".primary-nav").toggleClass("active");
		$(this).toggleClass("open");
	});
	//open modal
	$(".learn-more").on("click", function(event){
		event.preventDefault();
		$(".modal-learn-more").fadeIn();
	});
	//close modal
	$(".close-modal").on("click", function(event){
		event.preventDefault();
		$(".modal-learn-more").fadeOut();
	});
});//end doc ready