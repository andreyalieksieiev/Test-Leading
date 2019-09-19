$(function(){

	$('.menu-toggle').click(function(){
		$(this).toggleClass('active')
		$('.menu').slideToggle(400)
	})

	$('.tabs a').click(function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		return false
	});

	$('.banner-slider, .testimonial-slider').slick({
		arrows: false,
		dots: true,
	});

	$('.portfolio-slider').slick({
		dots: true,
		appendArrows: '.portfolio-slider__buttons',
		prevArrow: '<button type="button" class="slick-prev"><</button>',
		nextArrow: '<button type="button" class="slick-next">></button>',
		responsive: [
		{
			breakpoint: 767,
			settings: {
				dots: false,
			}
		}
		]
	});


	$nav_tab_slider = $('.nav-tab-list');
	settings = {
		slidesToShow: 1,
		prevArrow: '<button type="button" class="slick-prev"><</button>',
		nextArrow: '<button type="button" class="slick-next">></button>',
		infinite: false,
	}

	$nav_tab_slider.on('afterChange', function(event, slick, currentSlide, nextSlide){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).find('.slick-current').siblings().removeClass('active');
		var id = $(this).find('.slick-current a').attr('href');
		$(id).removeClass('hide');
		$(this).find('.slick-current').addClass('active');
		return false
	})

	$(window).on('resize load', function(){
		if($(window).width() > 767){
			if($nav_tab_slider.hasClass('slick-initialized')) {
				$nav_tab_slider.slick('unslick')
			}
			return
		}
		if(!$nav_tab_slider.hasClass('slick-initialized')) {
			return $nav_tab_slider.slick(settings)
		}
	})

});


// function initMap() {
// 	var coordinates = {lat: -37.806006, lng: 144.961291}, // координати центра карти
// 	markerImg = 'img/Layer_48.png', //  Иконка для маркера

// 	// coздаем карту и настраиваем 
// 	map = new google.maps.Map(document.getElementById('map'),{
// 		center: coordinates,
// 		zoom: 16, // опредиляет первоначальний маштаб
// 		disableDefaultUI: true, // убирает елементи управления
// 		scrollwheel: false, // отключяет маштабирование колесиком мишки
// 	});

// 	//маркер
// 	marker = new google.maps.Marker({
// 		position: coordinates, // координати маркера
// 		map: map, // cтавим маркер в карту с id map
// 		animation: google.maps.Animation.DROP, // АНИМАЦЫЯ МАРКЕРА drop / BOUNCE
// 		icon: markerImg,
// 	});
// }
// // запускаем карту при загрузке странице 
// google.maps.event.addDomiListener(window, 'load', initMap);

   


