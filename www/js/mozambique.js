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
	updateMenuHrefHeights($(window).height());
	initSkrollr();
	initSkrollrMenu(); 	
	loadSlider();
	changeDiv(1);  
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
        direction: "horizontal",
		slideshow: "false"	 	    
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


/*__________________ Multiple div functions [start]__________________*/
function changeDiv(elem)
{
	var header, subheader, textBody;
	var selectedImage;
	if (elem==1)
	{
		header=$('#md_header1').html();
		subheader=$('#md_subheader1').html();
		textBody=$('#md_text1').html();

		$("#idmdimg1").addClass('mdSelected');
		$("#idmdimg2").removeClass('mdSelected');
		$("#idmdimg3").removeClass('mdSelected');
	}
	else if (elem==2)
	{
		header=$('#md_header2').html();
		subheader=$('#md_subheader2').html();
		textBody=$('#md_text2').html();
		$("#idmdimg2").addClass('mdSelected');
		$("#idmdimg1").removeClass('mdSelected');
		$("#idmdimg3").removeClass('mdSelected');
	}

	else {
		header=$('#md_header3').html();
		subheader=$('#md_subheader3').html();
		textBody=$('#md_text3').html();
		$("#idmdimg3").addClass('mdSelected');
		$("#idmdimg2").removeClass('mdSelected');
		$("#idmdimg1").removeClass('mdSelected');
	}

	$('#mdTextHeader').html(header);
	$('#mdTextSubHeader').html(subheader);
	$('#mdText').html(textBody);

	$('#mdArrows').html(generateArrowsLinks(elem));


}

function generateArrowsLinks(elem)
{
	if (elem==1)
	{
		return "<a href='javascript: changeDiv(2)'>> </a>" ; 
	}
	else if (elem==2)
	{
		return "<a href='javascript: changeDiv(1)'>< </a> / <a href='javascript: changeDiv(3)'>> </a>" ; 

	}

	else {
		return "<a href='javascript: changeDiv(2)'>< </a>" ; 
	}
}

/*__________________ Multiple div functions [end]__________________*/