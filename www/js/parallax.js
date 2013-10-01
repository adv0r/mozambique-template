$(document).ready(function() {
	var $window = $(window);
	var $one = $('#one');
	var $two = $('#two');
	var $three = $('#three');
	var $four = $('#four');
	var $cricket = $("#two .bg");
	var $video_pattern = $("#video_pattern");
	var $page_height = $(".page_height");
	
	var windowHeight = $window.height();
	$page_height.css({'height': windowHeight});
	
	
	$('#one, #two, #three, #four').bind('inview', function (event, visible) {
		if (visible == true) {
			$(this).addClass("inview");
			} else {
			$(this).removeClass("inview");
		}
	});
	
		function Navigation(){
		var windowHeight = $window.height(); 
		var navHeight = $('#nav').height() / 2;
		var windowCenter = (windowHeight / 2); 
		var newtop = windowCenter - navHeight;
		$('#nav').css({"top": newtop}); 
	}
	
	function movePos(x, windowHeight, pos, offset, speed){
		return x + "% " + (-((windowHeight + pos) - offset) * speed)  + "px";
	}
	
	function Parallax(){ 
		var pos = $window.scrollTop(); 
		if($one.hasClass("inview")){
			$one.css({'backgroundPosition': movePos(50, windowHeight, pos, windowHeight, 0.3)}); 
		}
		if($two.hasClass("inview")){
			$two.css({'backgroundPosition': movePos(50, windowHeight, pos, windowHeight*2, 0.3)}); /* TODO Questo snippet serve a muovere lo sfondo ad una velocità diversa rispetto allo scroll (0.3%). la sintassi "*4" significa "il quarto div" e "windowHeight" è l'altezza della finestra del browser */
		}
		if($three.hasClass("inview")){
			$three.css({'backgroundPosition': movePos(50, windowHeight, pos, windowHeight*3, 0.3)});
		}
		if($four.hasClass("inview")){
			$four.css({'backgroundPosition': movePos(50, windowHeight, pos, windowHeight*4, 0.3)});
		}
		/* NICO : TODO, I commented this line because I'm not what it does!
		if($four.hasClass("inview")){
			$four.css({'backgroundPosition': movePos(0, windowHeight, pos, 200, 0.9) + ", " + movePos(50, windowHeight, pos, 0, 0.7) + ", " + movePos(50, windowHeight, pos, 0, 0.5) + ", " + movePos(50, windowHeight, pos, 3700, 0.3)});
		}*/
		
	}
	
	Navigation(); 
	
	$window.resize(function(){ 
		Parallax(); 
		Navigation();
	});		
	
	$window.bind('scroll', function(){ 
		Parallax(); 
	});
	
	
})