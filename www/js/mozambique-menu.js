
//To be able to use anchor we need to tell the page to scroll to the right position.  
function updateMenuHrefHeights(viewportH)
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
}


function getStartingPixelOfSection(sectionNumber,viewportH)
{
	var startingPixel ;
	if(sectionNumber==0)
		startingPixel=0
	else
	{
		startingPixel = getStartingPixelOfSection(sectionNumber-1) + viewportH + getOffset(sectionNumber-1)
	}	
	return startingPixel;
}



/* Compute the number of pixels scrolled in which each section must be frozen into the viewport */
function getOffset(sectionNumber)
{
	var sectionOffset ;
	switch(sectionNumber)
	{
		case 1: sectionOffset = 0; break;
		case 2: sectionOffset = 0; break;
		case 3: sectionOffset = 0; break;
		case 4: sectionOffset = 0; break;
		case 5: sectionOffset = $('vidbgscrollabletext-text').innerHeight(); break; 
		case 6: sectionOffset = $('vidbggridscrollabletext-text').innerHeight(); break; 
		case 7: sectionOffset = 0; break;
		case 8: sectionOffset = 0; break;
		case 9: sectionOffset = 0; break;
		case 10: sectionOffset = 0; break;
		case 11: sectionOffset = 0; break;
		case 12: sectionOffset = 0; break;
		case 13: sectionOffset = 0; break;
		case 14: sectionOffset = 0; break;
		case 15: sectionOffset = 0; break;
		case 16: sectionOffset = 0; break;
		case 17: sectionOffset = 0; break;
		case 18: sectionOffset = 0; break;
		case 19: sectionOffset = 0; break;
		case 20: sectionOffset = 0; break;
		case 21: sectionOffset = 0; break;
		case 22: sectionOffset = 0; break;
		case 23: sectionOffset = 0; break;
		case 24: sectionOffset = 0; break;
		case 25: sectionOffset = 0; break;
		case 26: sectionOffset = 0; break;
		case 27: sectionOffset = 0; break;		
		default: sectionOffset = 0; break;
	}
	return sectionOffset;
}