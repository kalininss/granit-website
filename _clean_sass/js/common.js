$(document).ready(function() {

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
  var jssor_slider1 = new $JssorSlider$('main-slider', options);

  //responsive code begin
  //you can remove responsive code if you don't want the slider scales
  //while window resizes
  function ScaleSlider() {
      var parentWidth = $('#main-slider').parent().width();
      if (parentWidth) {
          jssor_slider1.$ScaleWidth(parentWidth);
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
