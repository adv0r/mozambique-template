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
			container2: 50,
			offset1 : getOffset(1),
			offset2 : getOffset(2),
			offset3 : getOffset(3),
			offset4 : getOffset(4),
			offset5 : getOffset(5),
			offset6 : getOffset(6),
			offset7 : getOffset(7),
			offset8 : getOffset(8),
			offset9 : getOffset(9),
			offset10 : getOffset(10),
			offset11: getOffset(11),
			offset12 : getOffset(12),
			offset13 : getOffset(13),
			offset14 : getOffset(14),
			offset15 : getOffset(15),
			offset16 : getOffset(16),
			offset17 : getOffset(17),
			offset18 : getOffset(18),
			offset19 : getOffset(19),
			offset20 : getOffset(20),
			offset21 : getOffset(21),
			offset22 : getOffset(22),
			offset23 : getOffset(23),
			offset24 : getOffset(24),
			offset25 : getOffset(25),
			offset26 : getOffset(26),
			offset27 : getOffset(27),
			offset28 : getOffset(28),
			offset29 : getOffset(29),
			offset30 : getOffset(30),
			offset31 : getOffset(31),
			offset32 : getOffset(32),
			offset33 : getOffset(33),
			offset34 : getOffset(34),
			offset35 : getOffset(35)
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