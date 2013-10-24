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
	viewportH = $(window).height();
	initSkrollr();
	initSkrollrMenu(); 	
	loadSlider();
	changeDiv(1);  //Multiple div selector
	loadMap();
	updateMenuHrefHeights($(window).height());
	videojs.options.flash.swf = "data/video-js.swf";
	loadOverlays();

	//$('#scroll-pos').hide(); //un-comment if you want to hide pixels
}

function loadOverlays()
{
	$(".fancybox").fancybox({
	    openEffect  : 'none',
	    closeEffect : 'none',
	    afterLoad   : function() {
	        this.inner.prepend( '<h3>1. Get the code</h4>' );
	        this.content = '<h4>2. embed it into your blog</h5>' + this.content.html();
  		  }
	  });
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
			pausingCumulative0 : 0,
			pausingCumulative1 : getStartingPercentageOfSection(1),
			pausingCumulative2 : getStartingPercentageOfSection(2),
			pausingCumulative3 : getStartingPercentageOfSection(3),
			pausingCumulative4 : getStartingPercentageOfSection(4),
			pausingCumulative5 : getStartingPercentageOfSection(5),
			pausingCumulative6 : getStartingPercentageOfSection(6),
			pausingCumulative7 : getStartingPercentageOfSection(7),
			pausingCumulative8 : getStartingPercentageOfSection(8),
			pausingCumulative9 : getStartingPercentageOfSection(9),
			pausingCumulative10 : getStartingPercentageOfSection(10),
			pausingCumulative11 : getStartingPercentageOfSection(11),
			pausingCumulative12 : getStartingPercentageOfSection(12),
			pausingCumulative13 : getStartingPercentageOfSection(13),
			pausingCumulative14 : getStartingPercentageOfSection(14),
			pausingCumulative15 : getStartingPercentageOfSection(15),
			pausingCumulative16 : getStartingPercentageOfSection(16),
			pausingCumulative17 : getStartingPercentageOfSection(17),
			pausingCumulative18 : getStartingPercentageOfSection(18),
			pausingCumulative19 : getStartingPercentageOfSection(19),
			pausingCumulative20 : getStartingPercentageOfSection(20),
			pausingCumulative21 : getStartingPercentageOfSection(21),
			pausingCumulative22 : getStartingPercentageOfSection(22),
			pausingCumulative23 : getStartingPercentageOfSection(23),
			pausingCumulative24 : getStartingPercentageOfSection(24),
			pausingCumulative25 : getStartingPercentageOfSection(25),
			pausingCumulative26 : getStartingPercentageOfSection(26),
			pausingCumulative27 : getStartingPercentageOfSection(27),
			pausingCumulative28 : getStartingPercentageOfSection(28),
			pausingCumulative29 : getStartingPercentageOfSection(29),
			pausingCumulative30 : getStartingPercentageOfSection(30),
			pausingCumulative31 : getStartingPercentageOfSection(31),
			pausingCumulative32 : getStartingPercentageOfSection(32),
			pausingCumulative33 : getStartingPercentageOfSection(33),
			pausingCumulative34 : getStartingPercentageOfSection(34),
			pausingCumulative35 : getStartingPercentageOfSection(35),
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
			pausing35 : getPausing(35,true),
			pausingSum0 : 0,
			pausingSum1 : getPausingSum(1),
			pausingSum2 : getPausingSum(2),
			pausingSum3 : getPausingSum(3),
			pausingSum4 : getPausingSum(4),
			pausingSum5 : getPausingSum(5),
			pausingSum6 : getPausingSum(6),
			pausingSum7 : getPausingSum(7),
			pausingSum8 : getPausingSum(8),
			pausingSum9 : getPausingSum(9),
			pausingSum10 : getPausingSum(10),
			pausingSum11 : getPausingSum(11),
			pausingSum12 : getPausingSum(12),
			pausingSum13 : getPausingSum(13),
			pausingSum14 : getPausingSum(14),
			pausingSum15 : getPausingSum(15),
			pausingSum16 : getPausingSum(16),
			pausingSum17 : getPausingSum(17),
			pausingSum18 : getPausingSum(18),
			pausingSum19 : getPausingSum(19),
			pausingSum20 : getPausingSum(20),
			pausingSum21 : getPausingSum(21),
			pausingSum22 : getPausingSum(22),
			pausingSum23 : getPausingSum(23),
			pausingSum24 : getPausingSum(24),
			pausingSum25 : getPausingSum(25),
			pausingSum26 : getPausingSum(26),
			pausingSum27 : getPausingSum(27),
			pausingSum28 : getPausingSum(28),
			pausingSum29 : getPausingSum(29),
			pausingSum30 : getPausingSum(30),
			pausingSum31 : getPausingSum(31),
			pausingSum32 : getPausingSum(32),
			pausingSum33 : getPausingSum(33),
			pausingSum34 : getPausingSum(34),
			pausingSum35 : getPausingSum(35)
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

}


/* Stops the video */
    function restartVideo(elemID) {

        var video = videojs(elemID);
        video.currentTime(0);
    }


/*__________________ Multiple div functions [end]__________________*/