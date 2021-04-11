function showMetricWeight(){
	document.getElementById('weight_slider_pounds').style.display ='none';
	document.getElementById('weight_slider_kg').style.display ='block';
	$("#weight_slider_kg").roundSlider({
		radius: 100,
		min: 20,
		max: 200,
		step: 1,
		value: 0,
		editableTooltip: false,
		width: 20,
		handleSize: "+16",
		handleShape: "dot",
		sliderType: "min-range"
	});
}

function showImperialWeight(){
	document.getElementById('weight_slider_kg').style.display ='none';
	document.getElementById('weight_slider_pounds').style.display ='block';
	$("#weight_slider_pounds").roundSlider({
		radius: 100,
		min: 25,
		max: 300,
		step: 1,
		value: 0,
		editableTooltip: false,
		width: 20,
		handleSize: "+16",
		handleShape: "dot",
		sliderType: "min-range",
	});
}

function showMetricHeight(){
	document.getElementById('height_slider_imperial').style.display ='none';
	document.getElementById('height_slider_metric').style.display ='block';
	$("#height_slider_metric").roundSlider({
		radius: 100,
		min: 130,
		max: 240,
		step: 1,
		value: 0,
		editableTooltip: false,
		width: 20,
		handleSize: "+16",
		handleShape: "dot",
		sliderType: "min-range"
	});
}

function showImperialHeight(){
	document.getElementById('height_slider_metric').style.display ='none';
	document.getElementById('height_slider_imperial').style.display ='block';
	$("#height_slider_imperial").roundSlider({
		radius: 100,
		min: 0,
		max: 26,
		value: 0,
		editableTooltip: false,
		width: 20,
		handleSize: "+16",
		handleShape: "dot",
		sliderType: "min-range",
		tooltipFormat: "monthsf"
	});
}

function monthsf(args) {
	var months =
	["5'"+'0"',
	"5'"+'1"',
	"5'"+'2"',
	"5'"+'3"',
	"5'"+'4"',
	"5'"+'5"',
	"5'"+'6"',
	"5'"+'7"',
	"5'"+'8"',
	"5'"+'9"',
	"5'"+'10"',
	"5'"+'11"',
	"6'"+'0"',
	"6'"+'1"',
	"6'"+'2"',
	"6'"+'3"',
	"6'"+'4"',
	"6'"+'5"',
	"6'"+'6"',
	"6'"+'7"',
	"6'"+'8"',
	"6'"+'9"',
	"6'"+'10"',
	"6'"+'11"',
	"7'"+'0"',
	"7'"+'1"',
	"7'"+'2"',
	];
	return months[args.value];
}

(function ($) {

	"use strict";

	$(window).on('load', function () {
		$('[data-loader="circle-side"]').fadeOut(); // will first fade out the loading animation
		$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(350);
		$(window).scroll();
	});

	/* Round Input Slider *
	$("#weight_slider_kg").roundSlider({
		radius: 100,
		min: 20,
		max: 200,
		step: 1,
		editableTooltip: false,
		width: 20,
		handleSize: "+16",
		handleShape: "dot",
		sliderType: "min-range"
	});

	/* Round Input Slider *
	$("#weight_slider_pounds").roundSlider({
		radius: 100,
		min: 25,
		max: 300,
		step: 1,
		editableTooltip: false,
		width: 20,
		handleSize: "+16",
		handleShape: "dot",
		sliderType: "min-range",
	});

	/* Round Input Slider *
	$("#height_slider_metric").roundSlider({
		radius: 100,
		min: 130,
		max: 240,
		step: 1,
		editableTooltip: false,
		width: 20,
		handleSize: "+16",
		handleShape: "dot",
		sliderType: "min-range"
	});

	/* Round Input Slider *
	$("#height_slider_imperial").roundSlider({
		radius: 100,
		min: 0,
		max: 26,
		value: 0,
		editableTooltip: false,
		width: 20,
		handleSize: "+16",
		handleShape: "dot",
		sliderType: "min-range",
		tooltipFormat: "monthsf"
	});

	/* Check and radio input styles */
	$('input.icheck').iCheck({
		checkboxClass: 'icheckbox_square-grey',
		radioClass: 'iradio_square-grey'
	});

	/* Scroll to top small screens: change the top position offset based on your content*/
	var $Scrolbt = $('button.backward,button.forward');
	var $Element = $('html, body');

	if (window.innerWidth < 800) {
		$Scrolbt.on("click", function () {
			$Element.animate({
				scrollTop: 100
			}, "slow");
			return false;
		});
	}

    /* Form submit loader */
    $('form').on('submit',function() {
        var form = $("form#wrapped");
        form.validate();
        if (form.valid()) {
            $("#loader_form").fadeIn();
        }
    });

	/*  Image popups */
	$('.magnific-gallery').each(function () {
		$(this).magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery: {
				enabled: true
			},
			removalDelay: 500, //delay removal by X to allow out-animation
			callbacks: {
				beforeOpen: function () {
					// just a hack that adds mfp-anim class to markup
					this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
					this.st.mainClass = this.st.el.attr('data-effect');
				}
			},
			closeOnContentClick: true,
			midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
		});
	});

	/* Carousel*/
	$('.owl-carousel').owlCarousel({
		items: 1,
		dots: false,
		loop: true,
		autoplay: true,
		autoHeight: true,
		autoplayTimeout: 3500,
		animateOut: 'fadeOut',
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});

})(window.jQuery);
