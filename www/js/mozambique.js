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
	//$('#scroll-pos').hide(); //un-comment if you want to see pixels
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
		// The boolean set to true returns the value expressed in % of the viewport, false in pixels
		//https://github.com/Prinzhorn/skrollr#working-with-constants
			container: 400, //TODO delete
			container2: 50, //TODO delete
			pausing0 : 0,
			pausing1 : getPausing(1,true),
			pausing2 : getPausing(2,true),
			pausing3 : getPausing(3,true),
			pausing4 : getPausing(4,true),
			pausing5 : getPausing(5,true),
			pausing6 : getPausing(6,true),
			pausing7 : getPausing(7,true),
			pausing8 : getPausing(8,true),
			pausing9 : getPausing(9,true),
			pausing10 : getPausing(10,true),
			pausing11 : getPausing(11,true),
			pausing12 : getPausing(12,true),
			pausing13 : getPausing(13,true),
			pausing14 : getPausing(14,true),
			pausing15 : getPausing(15,true),
			pausing16 : getPausing(16,true),
			pausing17 : getPausing(17,true),
			pausing18 : getPausing(18,true),
			pausing19 : getPausing(19,true),
			pausing20 : getPausing(20,true),
			pausing21 : getPausing(21,true),
			pausing22 : getPausing(22,true),
			pausing23 : getPausing(23,true),
			pausing24 : getPausing(24,true),
			pausing25 : getPausing(25,true),
			pausing26 : getPausing(26,true),
			pausing27 : getPausing(27,true),
			pausing28 : getPausing(28,true),
			pausing29 : getPausing(29,true),
			pausing30 : getPausing(30,true),
			pausing31 : getPausing(31,true),
			pausing32 : getPausing(32,true),
			pausing33 : getPausing(33,true),
			pausing34 : getPausing(34,true),
			pausing35 : getPausing(35,true)
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