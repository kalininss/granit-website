$(document).ready(function() {

	/* ИНИЦИАЛИЗАЦИЯ СЛАЙДЕРОВ */
  if ( $(window).width() < 480 ) {

  	$(".builds__slider").css({
  		'width': '300px',
  		'margin': '0 auto'
  	});
  	$(".builds__slider > div").css({
  		'width': '220px',
  		'margin-left': '-110px'
  	});

		//Jssor slider: builds_slider
		var options = {
			$SlideWidth: 220,				                
			$DisplayPieces: 1,  
			$SlideSpacing: 12,
			$CaptionSliderOptions: {
				$Class: $JssorCaptionSlider$,
				$PlayInMode: 1,
				$PlayOutMode: 3
			},
			$ArrowNavigatorOptions: {
				$Class: $JssorArrowNavigator$,
				$ChanceToShow: 2
			}
		};  
		var builds__slider_new = new $JssorSlider$("builds__slider_new", options);
		var builds__slider_used = new $JssorSlider$("builds__slider_used", options);
		var builds__slider_commercial = new $JssorSlider$("builds__slider_commercial", options);
		var builds__slider_resident = new $JssorSlider$("builds__slider_resident", options);
		var builds__slider_news = new $JssorSlider$("builds__slider_news", options);	

	
  } else if ( $(window).width() < 768 ) {

  	$(".builds__slider").css({
  		'width': '540px',
  		'margin': '0 auto'
  	});
  	$(".builds__slider > div").css({
  		'width': '452px',
  		'margin-left': '-226px'
  	});
  	$("#testimonials__slider").css({
  		'width': '540px',
  		'margin': '0 auto'
  	});
  	$("#testimonials__slider > div").css({
  		'width': '431',
  		'margin-left': '-216px'
  	});
		//Jssor slider: builds_slider
		var options = {
			$SlideWidth: 220,				                
			$DisplayPieces: 2,  
			$SlideSpacing: 12,
			$CaptionSliderOptions: {
				$Class: $JssorCaptionSlider$,
				$PlayInMode: 1,
				$PlayOutMode: 3
			},
			$ArrowNavigatorOptions: {
				$Class: $JssorArrowNavigator$,
				$ChanceToShow: 2
			}
		};  
		var builds__slider_new = new $JssorSlider$("builds__slider_new", options);
		var builds__slider_used = new $JssorSlider$("builds__slider_used", options);
		var builds__slider_commercial = new $JssorSlider$("builds__slider_commercial", options);
		var builds__slider_resident = new $JssorSlider$("builds__slider_resident", options);
		var builds__slider_news = new $JssorSlider$("builds__slider_news", options);	

	  //Jssor slider: main-slider
	  var options = { 
	  	$AutoPlay: true,
	  	$ArrowNavigatorOptions: {
	  		$Class: $JssorArrowNavigator$,
	  		$ChanceToShow: 2
	  	},
	  	$BulletNavigatorOptions: {
	  		$Class: $JssorBulletNavigator$,
	  		$ChanceToShow: 2,
	  		$AutoCenter: 1,
	  		$SpacingX: 10,   
	  	}
	  };   
	  var main_slider = new $JssorSlider$('main-slider', options);

		//Jssor slider: testimonials-slider
		var options = {
			$SlideWidth: 431,  
			$SlideSpacing: 3, 					                
			$DisplayPieces: 1,  
			$SlideSpacing: 50,
			$CaptionSliderOptions: {
				$Class: $JssorCaptionSlider$,
				$PlayInMode: 1,
				$PlayOutMode: 3
			},
			$ArrowNavigatorOptions: {
				$Class: $JssorArrowNavigator$,
				$ChanceToShow: 2
			}
		};   
	  var testimonials__slider = new $JssorSlider$('testimonials__slider', options);

  }  else if ( $(window).width() < 1200 ) {

  	$(".builds__slider").css({
  		'width': '780px',
  		'margin': '0 auto'
  	});
  	$(".builds__slider > div").css({
  		'width': '684px',
  		'margin-left': '-342px'
  	});
  	$("#testimonials__slider").css({
  		'width': '540px',
  		'margin': '0 auto'
  	});
  	$("#testimonials__slider > div").css({
  		'width': '431',
  		'margin-left': '-216px'
  	});
		//Jssor slider: builds_slider
		var options = {
			$SlideWidth: 220,				                
			$DisplayPieces: 2,  
			$SlideSpacing: 12,
			$CaptionSliderOptions: {
				$Class: $JssorCaptionSlider$,
				$PlayInMode: 1,
				$PlayOutMode: 3
			},
			$ArrowNavigatorOptions: {
				$Class: $JssorArrowNavigator$,
				$ChanceToShow: 2
			}
		};  
		var builds__slider_new = new $JssorSlider$("builds__slider_new", options);
		var builds__slider_used = new $JssorSlider$("builds__slider_used", options);
		var builds__slider_commercial = new $JssorSlider$("builds__slider_commercial", options);
		var builds__slider_resident = new $JssorSlider$("builds__slider_resident", options);
		var builds__slider_news = new $JssorSlider$("builds__slider_news", options);	

	  //Jssor slider: main-slider
	  var options = { 
	  	$AutoPlay: true,
	  	$ArrowNavigatorOptions: {
	  		$Class: $JssorArrowNavigator$,
	  		$ChanceToShow: 2
	  	},
	  	$BulletNavigatorOptions: {
	  		$Class: $JssorBulletNavigator$,
	  		$ChanceToShow: 2,
	  		$AutoCenter: 1,
	  		$SpacingX: 10,   
	  	}
	  };   
	  var main_slider = new $JssorSlider$('main-slider', options);

		//Jssor slider: testimonials-slider
		var options = {
			$SlideWidth: 431,  
			$SlideSpacing: 3, 					                
			$DisplayPieces: 1,  
			$SlideSpacing: 50,
			$CaptionSliderOptions: {
				$Class: $JssorCaptionSlider$,
				$PlayInMode: 1,
				$PlayOutMode: 3
			},
			$ArrowNavigatorOptions: {
				$Class: $JssorArrowNavigator$,
				$ChanceToShow: 2
			}
		};   
	  var testimonials__slider = new $JssorSlider$('testimonials__slider', options);

  }else {

		//Jssor slider: builds_slider
		var options = {
			$SlideWidth: 220,				                
			$DisplayPieces: 3,  
			$SlideSpacing: 12,
			$CaptionSliderOptions: {
				$Class: $JssorCaptionSlider$,
				$PlayInMode: 1,
				$PlayOutMode: 3
			},
			$ArrowNavigatorOptions: {
				$Class: $JssorArrowNavigator$,
				$ChanceToShow: 2
			}
		};  
		var builds__slider_new = new $JssorSlider$("builds__slider_new", options);
		var builds__slider_used = new $JssorSlider$("builds__slider_used", options);
		var builds__slider_commercial = new $JssorSlider$("builds__slider_commercial", options);
		var builds__slider_resident = new $JssorSlider$("builds__slider_resident", options);
		var builds__slider_news = new $JssorSlider$("builds__slider_news", options);	

	  //Jssor slider: main-slider
	  var options = { 
	  	$AutoPlay: true,
	  	$ArrowNavigatorOptions: {
	  		$Class: $JssorArrowNavigator$,
	  		$ChanceToShow: 2
	  	},
	  	$BulletNavigatorOptions: {
	  		$Class: $JssorBulletNavigator$,
	  		$ChanceToShow: 2,
	  		$AutoCenter: 1,
	  		$SpacingX: 10,   
	  	}
	  };   
	  var main_slider = new $JssorSlider$('main-slider', options);

		//Jssor slider: testimonials-slider
		var options = {
			$SlideWidth: 431,  
			$SlideSpacing: 3, 					                
			$DisplayPieces: 2,  
			$SlideSpacing: 50,
			$CaptionSliderOptions: {
				$Class: $JssorCaptionSlider$,
				$PlayInMode: 1,
				$PlayOutMode: 3
			},
			$ArrowNavigatorOptions: {
				$Class: $JssorArrowNavigator$,
				$ChanceToShow: 2
			}
		};   
	  var testimonials__slider = new $JssorSlider$('testimonials__slider', options);
	
	}//end else

  //responsive code begin
  //you can remove responsive code if you don't want the slider scales
  //while window resizes
  function ScaleSlider() {
  	var parentWidth = $('#main-slider').parent().width();
  	var parentWidth_builds_slider_new = $('#builds__slider_new').parent().width();
  	var parentWidth_builds_slider_used = $('#builds__slider_used').parent().width();
  	var parentWidth_builds_slider_commercial = $('#builds__slider_commercial').parent().width();
  	var parentWidth_builds_slider_resident = $('#builds__slider_resident').parent().width();
  	var parentWidth_builds_slider_news = $('#builds__slider_news').parent().width();
  	var parentWidth_testimonials__slider = $('#testimonials__slider').parent().width();

  	if (parentWidth_builds_slider_new) {
  		builds__slider_new.$ScaleWidth(parentWidth_builds_slider_new);
  		builds__slider_used.$ScaleWidth(parentWidth_builds_slider_used);
  		builds__slider_commercial.$ScaleWidth(parentWidth_builds_slider_commercial);
  		builds__slider_resident.$ScaleWidth(parentWidth_builds_slider_resident);
  		builds__slider_news.$ScaleWidth(parentWidth_builds_slider_news);
  		if (main_slider) main_slider.$ScaleWidth(parentWidth);
  		if (testimonials__slider) testimonials__slider.$ScaleWidth(parentWidth_testimonials__slider);
  	}
  	else
  		window.setTimeout(ScaleSlider, 30);
  }
  //Scale slider after document ready
  ScaleSlider();

  //Scale slider while window load/resize/orientationchange.
  $(window).bind("load", ScaleSlider);
  $(window).bind("resize", ScaleSlider);
  $(window).bind("orientationchange", ScaleSlider);
  //responsive code end

  //responsive menu
  var touch 	= $('#touch-menu');
  var menu 	= $('.menu');

  $(touch).on('click', function(e) {
  	e.preventDefault();
  	menu.slideToggle();
  });

  $(window).resize(function(){
  	var w = $(window).width();
  	if(w > 767 && menu.is(':hidden')) {
  		menu.removeAttr('style');
  	}
  });

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});