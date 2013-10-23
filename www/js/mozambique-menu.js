var menuVisible = false;
var startingPixel = new Array();
var totalNumberOfSections= 23; //TODO CHANGE WHEN ADD A NEW SECTION!!!!

/* Toggle Menu*/
function toggleMenu()
{
	if(menuVisible)
	{
		//off
		menuVisible=false;
		 $( "#menuSection" ).fadeOut( "fast", function() {});	
	}
	else
	{
		//on
		 $( "#menuSection" ).fadeIn( "fast", function() {});	
		menuVisible=true;
	}
}

function closeMenu()
{
	 menuVisible=false;
	 $( "#menuSection" ).fadeOut( "fast", function() {
	  });	
}


//To be able to use anchor we need to tell the page to scroll to the right position.  
function updateMenuHrefHeights()
{	
	i=0;
	startingPixel[i]=0; //useless
	i++;
	//Compute starting pixels and put into a global array
	for(i=1;i<=totalNumberOfSections;i++)
	{
		startingPixel[i]=getStartingPixelOfSection(i,viewportH);
	}
	i++;
	startingPixel[i]=$(document).height(); //needed for the last section

	 $("#menu-item-1").attr('data-menu-top',  startingPixel[1]) ; 
	 $("#menu-item-2").attr( 'data-menu-top', startingPixel[2]); 
	 $("#menu-item-3").attr( 'data-menu-top', startingPixel[3]); 
	 $("#menu-item-4").attr( 'data-menu-top', startingPixel[4]); 
	 $("#menu-item-5").attr( 'data-menu-top', startingPixel[5]); 
	 $("#menu-item-6").attr( 'data-menu-top', startingPixel[6]); 
	 $("#menu-item-7").attr( 'data-menu-top', startingPixel[7]); 
	 $("#menu-item-8").attr( 'data-menu-top', startingPixel[8]); 
	 $("#menu-item-9").attr( 'data-menu-top', startingPixel[9]); 
	 $("#menu-item-10").attr( 'data-menu-top', startingPixel[10]);
	 $("#menu-item-11").attr( 'data-menu-top', startingPixel[11]);
	 $("#menu-item-12").attr( 'data-menu-top', startingPixel[12]);
	 $("#menu-item-13").attr( 'data-menu-top', startingPixel[13]); 	
	 $("#menu-item-14").attr( 'data-menu-top', startingPixel[14]); 	
	 $("#menu-item-15").attr( 'data-menu-top', startingPixel[15]); 		
	 $("#menu-item-16").attr( 'data-menu-top', startingPixel[16]); 		
	 $("#menu-item-17").attr( 'data-menu-top', startingPixel[17]); 		
	 $("#menu-item-18").attr( 'data-menu-top', startingPixel[18]); 		
	 $("#menu-item-19").attr( 'data-menu-top', startingPixel[19]); 	
	 $("#menu-item-20").attr( 'data-menu-top', startingPixel[20]); 
	 $("#menu-item-21").attr( 'data-menu-top', startingPixel[21]); 		
	 $("#menu-item-22").attr('data-menu-top', startingPixel[22]);
	 $("#menu-item-23").attr('data-menu-top', startingPixel[23]);	
	 //!!!Remember! if you add one  section change the variable totalNumberOfSections
}


function getStartingPixelOfSection(sectionNumber)
{
	var startingPixel ;
	if(sectionNumber==1)
		startingPixel=1
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
	var defaultTime = 800;
	switch(sectionNumber)
	{
		case 1: sectionPausingPx = 0; break;
		case 2: sectionPausingPx = 0; break;
		case 3: sectionPausingPx = 0; break;
		case 4: sectionPausingPx = 0; break;
		case 5: sectionPausingPx = viewportH + $('#vidbgscrollabletext-text').innerHeight(); break; 
		case 6: sectionPausingPx = viewportH + $('#vidbggridscrollabletext-text').innerHeight(); break; 
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
		return getPixelsInPercentage(sectionPausingPx);
	else
		return sectionPausingPx;
}



/*Returns a height expressed in terms of the % of viewportheight*/
function getPixelsInPercentage(pausing)
{
	return (pausing/$(window).height()) *100;
}
