(function ($) {
	"use strict";

	// TOGGLE HAMBURGER & COLLAPSE NAV
	$('.nav-toggle').on('click', function () {
		$(this).toggleClass('open');
		$('.menu-right').toggleClass('collapse');
	});

	// REMOVE X & COLLAPSE NAV ON ON CLICK
	$('.menu-left a').on('click', function () {
		$('.nav-toggle').removeClass('open');
		$('.menu-right').removeClass('collapse');
	});

	// One Page Nav
	var top_offset = $('.header-area').height() - 10;
	$('.menu nav ul').onePageNav({
		currentClass: 'active',
		scrollOffset: top_offset,
	});


	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$(".header-sticky").removeClass("sticky");
		} else {
			$(".header-sticky").addClass("sticky");
		}
	});

	//fade up slidk
	$('.reviews-active').slick({
		dots: false,
		infinite: true,
		speed: 500,
		autoplay: true,
		fade: true,
		cssEase: 'linear'
	});

	// scrollToTop
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

	// WOW active
	new WOW().init();

	//datepicker
	$('[data-toggle="datepicker"]').datepicker();

})(jQuery);