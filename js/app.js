$(document).ready(function () {

	$('.works__inner').slick({
		dots: true,
		adaptiveHeight: true
	});

	$(".yandex__sliders").slick();

	$(".video__sliders").slick();

	$(".whatsapp__sliders").slick();

	$('.sertefikat__sliders').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
			}
		]
	});


	/* --------   Smooth scroll    ---------  */

	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		var $this = $(this)
		blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;

		$('nav a').removeClass('active');
		$this.addClass('active');

		$('#nav_toggle').removeClass('active');
		$('nav').removeClass('active');

		$('html, body').animate({
			scrollTop: blockOffset
		}, 1000)
	})

	$('#yandex').on('click', function () {
		$('.choise__yandex').addClass('active');
		$('.yandex__sliders').css('display', 'block');
		$('.yandex__sliders').slick('setPosition');
		$('.choise__whatsapp, .choise__video').removeClass('active');
		$('.video__sliders').css('display', 'none'), $('.whatsapp__sliders').css('display', 'none');
		if ($('#yandex').hasClass('active')) {
			$('.choise__whatsapp', '.choise__video').removeClass('active');
		}
	});

	$('#video').on('click', function () {
		$('.choise__video').addClass('active');
		$('.choise__yandex, .choise__whatsapp').removeClass('active');
		$('.video__sliders').css('display', 'block');
		$('.video__sliders').slick('setPosition');
		$('.choise__yandex, .choise__whatsapp').removeClass('active');
		$('.yandex__sliders').css('display', 'none'), $('.whatsapp__sliders').css('display', 'none');
		if ($('#video').hasClass('active')) {
			$('.choise__yandex', '.choise__whatsapp').removeClass('active');
			$('.video__sliders').slick('setPosition');
		}
	});

	$('#whatsapp').on('click', function () {
		$('.choise__whatsapp').addClass('active');
		$('.choise__yandex, .choise__video').removeClass('active');
		$('.whatsapp__sliders').css('display', 'block');
		$('.whatsapp__sliders').slick('setPosition');
		$('.choise__yandex, .choise__video').removeClass('active');
		$('.video__sliders').css('display', 'none'), $('.yandex__sliders').css('display', 'none');
		if ($('#whatsapp').hasClass('active')) {
			$('.choise__yandex', '.choise__video').removeClass('active');
		}
	});

	$(function () {
		if ($('.choise__yandex').hasClass('active')) {
			$('.yandex__sliders').css('display', 'block');
			$('.video__sliders').css('display', 'none'), $('.whatsapp__sliders').css('display', 'none')
		};

		if ($('.choise__whatsapp').hasClass('active')) {
			$('.whatsapp__sliders').css('display', 'block');
			$('.yandex__sliders').css('display', 'none'), $('.video__sliders').css('display', 'none')
		};

		if ($('.choise__video').hasClass('active')) {
			$('.video__sliders').css('display', 'block');
			$('.yandex__sliders').css('display', 'none'), $('.whatsapp__sliders').css('display', 'none')
		};
	});

	/* --------   Nav Menu(BurgerMenu)    ---------  */

	$('#nav_toggle').on('click', function (event) {
		event.preventDefault();
		$(this).toggleClass("active");
		$('.nav').toggleClass("active");
	})

});