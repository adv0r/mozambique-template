/* Global variables */
var s;

/*This function is called on page load, works on iOs*/
window.addEventListener('DOMContentLoaded', function() {	

	initTemplate();  //Comment if you UNCOMMENT the queryloader below

	//uncomment to see the preloader  and comment the line above
	/* 
	 $("body").queryLoader2(
		{
		        	percentage: true,
                   	        	barHeight: 80,
	                	completeAnimation: "grow",
	                	onComplete : initSkrollr() 
		});
	*/
});


/* On document load!*/
function initTemplate()
{
	initMenuItemVars();
	updateMenuHrefHeights($(window).height());
	initSkrollr();
	initSkrollrMenu(); 	
	loadSlider();
}

/**/
function loadSlider()
{
	$('.flexslider').flexslider({
		prevText: " ",
		nextText: " "  	
	});

	$('.flexslider2').flexslider({
	        prevText: " ",
	        nextText: " ",
	        animation: "slide",
	        direction: "horizontal"    
	 });
}

/* Init skrollr  plugin */
function initSkrollr()
{
	s=skrollr.init({
	constants: {
		//Qui dobbiamo dichiarare l'altezza in pixels delle varie sezioni, da utilizzare in pixel
		//https://github.com/Prinzhorn/skrollr#working-with-constants
			container: 400,
			container2: 50	
		}
	});
}

function initSkrollrMenu()
{
	skrollr.menu.init(s, {
	animate: true,
	easing: 'sqrt',
	duration: function(currentTop, targetTop) {
		//By default, the duration is hardcoded at 500ms.
		return 500;
		//But you could calculate a value based on the current scroll position (`currentTop`) and the target scroll position (`targetTop`).
		//return Math.abs(currentTop - targetTop) * 1;
		},
	});
}




/* This function is called when the window is resized*/
$(window).resize(function(e){
	var viewportH = $(window).height();
	updateMenuHrefHeights(viewportH);
});
