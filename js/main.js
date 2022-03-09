 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: true
 });

 jQuery(document).ready(function ($) {

 	"use strict";



 	var siteMenuClone = function () {

 		$('.js-clone-nav').each(function () {
 			var $this = $(this);
 			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
 		});


 		setTimeout(function () {

 			var counter = 0;
 			$('.site-mobile-menu .has-children').each(function () {
 				var $this = $(this);

 				$this.prepend('<span class="arrow-collapse collapsed">');

 				$this.find('.arrow-collapse').attr({
 					'data-toggle': 'collapse',
 					'data-target': '#collapseItem' + counter,
 				});

 				$this.find('> ul').attr({
 					'class': 'collapse',
 					'id': 'collapseItem' + counter,
 				});

 				counter++;

 			});

 		}, 1000);

 		$('body').on('click', '.arrow-collapse', function (e) {
 			var $this = $(this);
 			if ($this.closest('li').find('.collapse').hasClass('show')) {
 				$this.removeClass('active');
 			} else {
 				$this.addClass('active');
 			}
 			e.preventDefault();

 		});

 		$(window).resize(function () {
 			var $this = $(this),
 				w = $this.width();

 			if (w > 768) {
 				if ($('body').hasClass('offcanvas-menu')) {
 					$('body').removeClass('offcanvas-menu');
 				}
 			}
 		})

 		$('body').on('click', '.js-menu-toggle', function (e) {
 			var $this = $(this);
 			e.preventDefault();

 			if ($('body').hasClass('offcanvas-menu')) {
 				$('body').removeClass('offcanvas-menu');
 				$this.removeClass('active');
 			} else {
 				$('body').addClass('offcanvas-menu');
 				$this.addClass('active');
 			}
 		})

 		// click outisde offcanvas
 		$(document).mouseup(function (e) {
 			var container = $(".site-mobile-menu");
 			if (!container.is(e.target) && container.has(e.target).length === 0) {
 				if ($('body').hasClass('offcanvas-menu')) {
 					$('body').removeClass('offcanvas-menu');
 				}
 			}
 		});
 	};
 	siteMenuClone();


 	var sitePlusMinus = function () {
 		$('.js-btn-minus').on('click', function (e) {
 			e.preventDefault();
 			if ($(this).closest('.input-group').find('.form-control').val() != 0) {
 				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
 			} else {
 				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
 			}
 		});
 		$('.js-btn-plus').on('click', function (e) {
 			e.preventDefault();
 			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
 		});
 	};
 	// sitePlusMinus();


 	var siteSliderRange = function () {
 		$("#slider-range").slider({
 			range: true,
 			min: 0,
 			max: 500,
 			values: [75, 300],
 			slide: function (event, ui) {
 				$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
 			}
 		});
 		$("#amount").val("$" + $("#slider-range").slider("values", 0) +
 			" - $" + $("#slider-range").slider("values", 1));
 	};
 	// siteSliderRange();


 	var siteMagnificPopup = function () {
 		$('.image-popup').magnificPopup({
 			type: 'image',
 			closeOnContentClick: true,
 			closeBtnInside: false,
 			fixedContentPos: true,
 			mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
 			gallery: {
 				enabled: true,
 				navigateByImgClick: true,
 				preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
 			},
 			image: {
 				verticalFit: true
 			},
 			zoom: {
 				enabled: true,
 				duration: 300 // don't foget to change the duration also in CSS
 			}
 		});

 		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
 			disableOn: 700,
 			type: 'iframe',
 			mainClass: 'mfp-fade',
 			removalDelay: 160,
 			preloader: false,

 			fixedContentPos: false
 		});
 	};
 	siteMagnificPopup();


 	var siteCarousel = function () {
 		if ($('.nonloop-block-13').length > 0) {
 			$('.nonloop-block-13').owlCarousel({
 				center: false,
 				items: 1,
 				loop: true,
 				stagePadding: 0,
 				margin: 0,
 				autoplay: true,
 				nav: true,
 				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
 				responsive: {
 					600: {
 						margin: 0,
 						nav: true,
 						items: 2
 					},
 					1000: {
 						margin: 0,
 						stagePadding: 0,
 						nav: true,
 						items: 3
 					},
 					1200: {
 						margin: 0,
 						stagePadding: 0,
 						nav: true,
 						items: 4
 					}
 				}
 			});
 		}

 		$('.slide-one-item').owlCarousel({
 			center: false,
 			items: 1,
 			loop: true,
 			stagePadding: 0,
 			margin: 0,
 			autoplay: true,
 			pauseOnHover: false,
 			nav: true,
 			navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
 		});
 	};
 	siteCarousel();

 	var siteStellar = function () {
 		$(window).stellar({
 			responsive: false,
 			parallaxBackgrounds: true,
 			parallaxElements: true,
 			horizontalScrolling: false,
 			hideDistantElements: false,
 			scrollProperty: 'scroll'
 		});
 	};
 	siteStellar();

 	var siteCountDown = function () {

 		$('#date-countdown').countdown('2020/10/10', function (event) {
 			var $this = $(this).html(event.strftime('' +
 				'<span class="countdown-block"><span class="label">%w</span> weeks </span>' +
 				'<span class="countdown-block"><span class="label">%d</span> days </span>' +
 				'<span class="countdown-block"><span class="label">%H</span> hr </span>' +
 				'<span class="countdown-block"><span class="label">%M</span> min </span>' +
 				'<span class="countdown-block"><span class="label">%S</span> sec</span>'));
 		});

 	};
 	siteCountDown();

 	var siteDatePicker = function () {

 		if ($('.datepicker').length > 0) {
 			$('.datepicker').datepicker();
 		}

 	};
 	siteDatePicker();

 });

 document.getElementById("mybutton").addEventListener("click", (e) => {
 	e.preventDefault();
 	let user_name = document.getElementById('fq_name').value;
 	let user_number = parseInt(document.getElementById('fq_number').value);
 	if (user_name == "" || user_number == null) {
 		alert("Sorry Feilds cannot be blank")
 	}







 })

 //js particles 
 particlesJS("particles-js", {
 	"particles": {
 		"number": {
 			"value": 80,
 			"density": {
 				"enable": true,
 				"value_area": 800
 			}
 		},
 		"color": {
 			"value": "#ffffff"
 		},
 		"shape": {
 			"type": "circle",
 			"stroke": {
 				"width": 0,
 				"color": "#000000"
 			},
 			"polygon": {
 				"nb_sides": 5
 			},
 			"image": {
 				"src": "img/github.svg",
 				"width": 100,
 				"height": 100
 			}
 		},
 		"opacity": {
 			"value": 0.5,
 			"random": false,
 			"anim": {
 				"enable": false,
 				"speed": 1,
 				"opacity_min": 0.1,
 				"sync": false
 			}
 		},
 		"size": {
 			"value": 3,
 			"random": true,
 			"anim": {
 				"enable": false,
 				"speed": 40,
 				"size_min": 0.1,
 				"sync": false
 			}
 		},
 		"line_linked": {
 			"enable": true,
 			"distance": 150,
 			"color": "#ffffff",
 			"opacity": 0.4,
 			"width": 1
 		},
 		"move": {
 			"enable": true,
 			"speed": 6,
 			"direction": "none",
 			"random": false,
 			"straight": false,
 			"out_mode": "out",
 			"bounce": false,
 			"attract": {
 				"enable": false,
 				"rotateX": 600,
 				"rotateY": 1200
 			}
 		}
 	},
 	"interactivity": {
 		"detect_on": "canvas",
 		"events": {
 			"onhover": {
 				"enable": true,
 				"mode": "repulse"
 			},
 			"onclick": {
 				"enable": true,
 				"mode": "push"
 			},
 			"resize": true
 		},
 		"modes": {
 			"grab": {
 				"distance": 400,
 				"line_linked": {
 					"opacity": 1
 				}
 			},
 			"bubble": {
 				"distance": 400,
 				"size": 40,
 				"duration": 2,
 				"opacity": 8,
 				"speed": 3
 			},
 			"repulse": {
 				"distance": 200,
 				"duration": 0.4
 			},
 			"push": {
 				"particles_nb": 4
 			},
 			"remove": {
 				"particles_nb": 2
 			}
 		}
 	},
 	"retina_detect": true
 });
 var count_particles, stats, update;
 stats = new Stats;
 stats.setMode(0);
 stats.domElement.style.position = 'absolute';
 stats.domElement.style.left = '0px';
 stats.domElement.style.top = '0px';
 document.body.appendChild(stats.domElement);
 count_particles = document.querySelector('.js-count-particles');
 update = function () {
 	stats.begin();
 	stats.end();
 	if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
 		count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
 	}
 	requestAnimationFrame(update);
 };
 requestAnimationFrame(update);;