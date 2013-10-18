/* Global variables */
var s;
var viewportH;
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
	loadMap();
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
			container: 400, //TODO delete
			container2: 50, //TODO delete
			pausing0 : 0,
			pausing1 : getPausing(1,false),
			pausing2 : getPausing(2,false),
			pausing3 : getPausing(3,false),
			pausing4 : getPausing(4,false),
			pausing5 : getPausing(5,false),
			pausing6 : getPausing(6,false),
			pausing7 : getPausing(7,false),
			pausing8 : getPausing(8,false),
			pausing9 : getPausing(9,false),
			pausing10 : getPausing(10,false),
			pausing11 : getPausing(11,false),
			pausing12 : getPausing(12,false),
			pausing13 : getPausing(13,false),
			pausing14 : getPausing(14,false),
			pausing15 : getPausing(15,false),
			pausing16 : getPausing(16,false),
			pausing17 : getPausing(17,false),
			pausing18 : getPausing(18,false),
			pausing19 : getPausing(19,false),
			pausing20 : getPausing(20,false),
			pausing21 : getPausing(21,false),
			pausing22 : getPausing(22,false),
			pausing23 : getPausing(23,false),
			pausing24 : getPausing(24,false),
			pausing25 : getPausing(25,false),
			pausing26 : getPausing(26,false),
			pausing27 : getPausing(27,false),
			pausing28 : getPausing(28,false),
			pausing29 : getPausing(29,false),
			pausing30 : getPausing(30,false),
			pausing31 : getPausing(31,false),
			pausing32 : getPausing(32,false),
			pausing33 : getPausing(33,false),
			pausing34 : getPausing(34,false),
			pausing35 : getPausing(35,false)
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
	viewportH = $(window).height();
	updateMenuHrefHeights();
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