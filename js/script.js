$(document).ready(function(){
	$('.header-menu__btn').click(function(){
		$(this).toggleClass('open');
		$('.header-menu__list').toggleClass('active');
	});
});