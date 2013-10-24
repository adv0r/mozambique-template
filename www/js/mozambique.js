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
			pausing0 : 0,
			pausing1 : getStartingPercentageOfSection(1,true),
			pausing2 : getStartingPercentageOfSection(2,true),
			pausing3 : getStartingPercentageOfSection(3,true),
			pausing4 : getStartingPercentageOfSection(4,true),
			pausing5 : getStartingPercentageOfSection(5,true),
			pausing6 : getStartingPercentageOfSection(6,true),
			pausing7 : getStartingPercentageOfSection(7,true),
			pausing8 : getStartingPercentageOfSection(8,true),
			pausing9 : getStartingPercentageOfSection(9,true),
			pausing10 : getStartingPercentageOfSection(10,true),
			pausing11 : getStartingPercentageOfSection(11,true),
			pausing12 : getStartingPercentageOfSection(12,true),
			pausing13 : getStartingPercentageOfSection(13,true),
			pausing14 : getStartingPercentageOfSection(14,true),
			pausing15 : getStartingPercentageOfSection(15,true),
			pausing16 : getStartingPercentageOfSection(16,true),
			pausing17 : getStartingPercentageOfSection(17,true),
			pausing18 : getStartingPercentageOfSection(18,true),
			pausing19 : getStartingPercentageOfSection(19,true),
			pausing20 : getStartingPercentageOfSection(20,true),
			pausing21 : getStartingPercentageOfSection(21,true),
			pausing22 : getStartingPercentageOfSection(22,true),
			pausing23 : getStartingPercentageOfSection(23,true),
			pausing24 : getStartingPercentageOfSection(24,true),
			pausing25 : getStartingPercentageOfSection(25,true),
			pausing26 : getStartingPercentageOfSection(26,true),
			pausing27 : getStartingPercentageOfSection(27,true),
			pausing28 : getStartingPercentageOfSection(28,true),
			pausing29 : getStartingPercentageOfSection(29,true),
			pausing30 : getStartingPercentageOfSection(30,true),
			pausing31 : getStartingPercentageOfSection(31,true),
			pausing32 : getStartingPercentageOfSection(32,true),
			pausing33 : getStartingPercentageOfSection(33,true),
			pausing34 : getStartingPercentageOfSection(34,true),
			pausing35 : getStartingPercentageOfSection(35,true)
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