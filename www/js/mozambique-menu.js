var menuVisible = false;


/* Toggle Menu*/
function toggleMenu()
{
	if(menuVisible)
	{
		//off
		menuVisible=false;
		$('#menuSection').hide();
	}
	else
	{
		//on
		$('#menuSection').show();
		menuVisible=true;

	}
}


//To be able to use anchor we need to tell the page to scroll to the right position.  
function updateMenuHrefHeights()
{	
	 $("#menu-item-1").attr('data-menu-top',  getStartingPixelOfSection(1,viewportH)) ; 
	 $("#menu-item-2").attr( 'data-menu-top', getStartingPixelOfSection(2,viewportH)); 
	 $("#menu-item-3").attr( 'data-menu-top', getStartingPixelOfSection(3,viewportH)); 
	 $("#menu-item-4").attr( 'data-menu-top', getStartingPixelOfSection(4,viewportH)); 
	 $("#menu-item-5").attr( 'data-menu-top', getStartingPixelOfSection(5,viewportH)); 
	 $("#menu-item-6").attr( 'data-menu-top', getStartingPixelOfSection(6,viewportH)); 
	 $("#menu-item-7").attr( 'data-menu-top', getStartingPixelOfSection(7,viewportH)); 
	 $("#menu-item-8").attr( 'data-menu-top', getStartingPixelOfSection(8,viewportH)); 
	 $("#menu-item-9").attr( 'data-menu-top', getStartingPixelOfSection(9,viewportH)); 
	 $("#menu-item-10").attr( 'data-menu-top', getStartingPixelOfSection(10,viewportH)); 
	 $("#menu-item-11").attr( 'data-menu-top', getStartingPixelOfSection(11,viewportH)); 
	 $("#menu-item-12").attr( 'data-menu-top', getStartingPixelOfSection(12,viewportH)); 
	 $("#menu-item-13").attr( 'data-menu-top', getStartingPixelOfSection(13,viewportH));  	
	 $("#menu-item-14").attr( 'data-menu-top', getStartingPixelOfSection(14,viewportH));  	
	 $("#menu-item-15").attr( 'data-menu-top', getStartingPixelOfSection(15,viewportH));  		
	 $("#menu-item-16").attr( 'data-menu-top', getStartingPixelOfSection(16,viewportH));  		
	 $("#menu-item-17").attr( 'data-menu-top', getStartingPixelOfSection(17,viewportH));  		
	 $("#menu-item-18").attr( 'data-menu-top', getStartingPixelOfSection(18,viewportH));  		
	 $("#menu-item-19").attr( 'data-menu-top', getStartingPixelOfSection(19,viewportH));  	
	 $("#menu-item-20").attr( 'data-menu-top', getStartingPixelOfSection(20,viewportH));  
	 $("#menu-item-21").attr( 'data-menu-top', getStartingPixelOfSection(21,viewportH));  		
	 $("#menu-item-22").attr('data-menu-top', getStartingPixelOfSection(22,viewportH));
	 $("#menu-item-23").attr('data-menu-top', getStartingPixelOfSection(23,viewportH));	
	
}


function getStartingPixelOfSection(sectionNumber)
{
	var startingPixel ;
	if(sectionNumber==0)
		startingPixel=0
	else
	{
		startingPixel = getStartingPixelOfSection(sectionNumber-1) + viewportH + getPausing(sectionNumber-1,false)
	}	
	return startingPixel;
}



/* Compute the number of pixels (percentage=false) scrolled (call it with (percentage=true) if you want it expressed in terms of a % of the viewport) ,
 in which each section must be frozen into the viewport .
  examples
	getPausing(3,true) = 400
	getPausing(3,false) = 3435
*/
function getPausing(sectionNumber,percentage)
{
	var sectionPausingPx ;
	switch(sectionNumber)
	{
		case 1: sectionPausingPx = 0; break;
		case 2: sectionPausingPx = 0; break;
		case 3: sectionPausingPx = 0; break;
		case 4: sectionPausingPx = 0; break;
		case 5: sectionPausingPx = $('#vidbgscrollabletext-text').innerHeight(); break; 
		case 6: sectionPausingPx = $('#vidbggridscrollabletext-text').innerHeight() ; break; 
		case 7: sectionPausingPx = 0; break;
		case 8: sectionPausingPx = $('#vidbggridscrollabletext-text').innerHeight(); break; 
		case 9: sectionPausingPx = 0; break;
		case 10: sectionPausingPx = 0; break;
		case 11: sectionPausingPx = $('#imgFullText-text').innerHeight(); break;
		case 12: sectionPausingPx = $('#imgFullTextGrid-text').innerHeight(); break; 
		case 13: sectionPausingPx = $('#imgFullTextScroll-text').innerHeight(); break;
		case 14: sectionPausingPx = 0; break;
		case 15: sectionPausingPx = 0; break;
		case 16: sectionPausingPx = 0; break;
		case 17: sectionPausingPx = $('#animDoubleText-text').innerHeight(); break;
		case 18: sectionPausingPx = 0; break;
		case 19: sectionPausingPx = $('#vidPlayerAutotoggleSideText-text').innerHeight(); break;
		case 20: sectionPausingPx = $('#animTextImg-text').innerHeight(); break;
		case 21: sectionPausingPx = 0; break;
		case 22: sectionPausingPx = 0; break;
		case 23: sectionPausingPx = 0; break;
		case 24: sectionPausingPx = 0; break;
		case 25: sectionPausingPx = 0; break;
		case 26: sectionPausingPx = 0; break;
		case 27: sectionPausingPx = 0; break;		
		default: sectionPausingPx = 0; break;
	}
	if(percentage)
		return getPausingInPercentage(sectionPausingPx);
	else
		return sectionPausingPx;
}


/*Returns a height expressed in terms of the % of viewportheight*/
function getPausingInPercentage(pausing)
{
	return (pausing/$(window).height()) *100;
}
