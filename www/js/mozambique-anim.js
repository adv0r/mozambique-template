var menuVisible = false;
var startingPixel = new Array();
var totalNumberOfSections= 27; //TODO CHANGE WHEN ADD A NEW SECTION!!!!

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

	//Compute starting pixels and put into a global array
	for(i=1;i<=totalNumberOfSections;i++)
	{
		startingPixel[i]=getStartingPixelOfSection(i,viewportH);
	}
	startingPixel[totalNumberOfSections+1]=$(document).height(); //needed for the last section

	 $("#menu-item-1").attr('data-menu-top',  startingPixel[1]+1); 
	 $("#menu-item-2").attr( 'data-menu-top', startingPixel[2]+1); 
	 $("#menu-item-3").attr( 'data-menu-top', startingPixel[3]+1); 
	 $("#menu-item-4").attr( 'data-menu-top', startingPixel[4]+1); 
	 $("#menu-item-5").attr( 'data-menu-top', startingPixel[5]+1); 
	 $("#menu-item-6").attr( 'data-menu-top', startingPixel[6]+1); 
	 $("#menu-item-7").attr( 'data-menu-top', startingPixel[7]+1); 
	 $("#menu-item-8").attr( 'data-menu-top', startingPixel[8]+1); 
	 $("#menu-item-9").attr( 'data-menu-top', startingPixel[9]+1); 
	 $("#menu-item-10").attr( 'data-menu-top', startingPixel[10]+1);
	 $("#menu-item-11").attr( 'data-menu-top', startingPixel[11]+1);
	 $("#menu-item-12").attr( 'data-menu-top', startingPixel[12]+1);
	 $("#menu-item-13").attr( 'data-menu-top', startingPixel[13]+1); 	
	 $("#menu-item-14").attr( 'data-menu-top', startingPixel[14]+1); 	
	 $("#menu-item-15").attr( 'data-menu-top', startingPixel[15]+1); 		
	 $("#menu-item-16").attr( 'data-menu-top', startingPixel[16]+1); 		
	 $("#menu-item-17").attr( 'data-menu-top', startingPixel[17]+1); 		
	 $("#menu-item-18").attr( 'data-menu-top', startingPixel[18]+1); 		
	 $("#menu-item-19").attr( 'data-menu-top', startingPixel[19]+1); 	
	 $("#menu-item-20").attr( 'data-menu-top', startingPixel[20]+1); 
	 $("#menu-item-21").attr( 'data-menu-top', startingPixel[21]+1); 		
	 $("#menu-item-22").attr('data-menu-top', startingPixel[22]+1);
	 $("#menu-item-23").attr('data-menu-top', startingPixel[23]+1);	
 	 $("#menu-item-24").attr('data-menu-top', startingPixel[24]+1);	
 	 $("#menu-item-25").attr('data-menu-top', startingPixel[25]+1);	
 	 $("#menu-item-26").attr('data-menu-top', startingPixel[26]+1);	
 	 $("#menu-item-27").attr('data-menu-top', startingPixel[27]+1);	
 	 $("#menu-item-28").attr('data-menu-top', startingPixel[28]+1);	
 	 $("#menu-item-29").attr('data-menu-top', startingPixel[29]+1);	
 	 $("#menu-item-30").attr('data-menu-top', startingPixel[30]+1);	
 	 $("#menu-item-31").attr('data-menu-top', startingPixel[31]+1);	
 	 $("#menu-item-32").attr('data-menu-top', startingPixel[32]+1);	

	 //!!!Remember! if you add one  section change the variable totalNumberOfSections
}

/*Returns the startingPixel of section 'sectionNumber'*/
function getStartingPixelOfSection(sectionNumber)
{
	var startingPixel ;
	if(sectionNumber==0)
		startingPixel=1
	else
	{
		startingPixel = getStartingPixelOfSection(sectionNumber-1) + viewportH + getPausing(sectionNumber-1,false)
	}	
	return startingPixel;
}

/*Returns the startingPercentage of section 'sectionNumber' - the instant in which starts getting into the view*/
function getStartingPercentageOfSection(sectionNumber)
{
	var startingPercentage ;
	if(sectionNumber==0)
		startingPercentage=0;
	else
	{
		startingPercentage = getStartingPercentageOfSection(sectionNumber-1)  + getPausing(sectionNumber-1,true)
	}	
	return Math.round(startingPercentage);
}

/*Returns the sum of cumulative starting percentage + pausing percentage of 'sectionNumber' */
function getPausingSum(sectionNumber)
{
	return Math.round(getPausing(sectionNumber,true) + getStartingPercentageOfSection(sectionNumber));
}


/* Compute the number of pixels (percentage=false) scrolled (call it with (percentage=true) if you want it expressed in terms of a % of the viewport) ,
 in which each section must be frozen into the viewport .
  examples
	getPausing(3,true) = 400
	getPausing(3,false) = 3435
*/

function getPausing(sectionNumber,percentage) /*RALLENTA IL CONTENUTO DI UNA SECTION*/
{
	var sectionPausingPx ;
	var defaultTime = 800;
	switch(sectionNumber)
	{
		case 1: sectionPausingPx = 100; break;
		case 2: sectionPausingPx = 0; break;
		case 3: sectionPausingPx = 0; break;
		case 4: sectionPausingPx = 0; break;
		case 5: sectionPausingPx = viewportH + $('#vidbgscrollabletext-text').innerHeight(); break; 
		case 6: sectionPausingPx = viewportH + $('#vidbggridscrollabletext-text').innerHeight(); break; 
		case 7: sectionPausingPx = 0; break;
		case 8: sectionPausingPx = viewportH + $('#vidbggridscrollabletext-text').innerHeight(); break; 
		case 9: sectionPausingPx = 0; break;
		case 10: sectionPausingPx = 0; break;
		case 11: sectionPausingPx = $('#imgFullText-text').innerHeight(); break;
		case 12: sectionPausingPx = $('#imgFullTextGrid-text').innerHeight(); break; 
		case 13: sectionPausingPx = viewportH +$('#imgFullTextScroll-text').innerHeight(); break;
		case 14: sectionPausingPx = (3*viewportH); break;
		case 15: sectionPausingPx = (3*viewportH); break;
		case 16: sectionPausingPx = 0; break;
		case 17: sectionPausingPx = $('#animDoubleText-text').innerHeight(); break;
		case 18: sectionPausingPx = viewportH; break;
		case 19: sectionPausingPx = $('#vidPlayerAutotoggleSideText-text').innerHeight(); break;
		case 20: sectionPausingPx = $('#animTextImg-text').innerHeight(); break;
		case 21: sectionPausingPx = 0; break;
		case 22: sectionPausingPx = 0; break;
		case 23: sectionPausingPx = viewportH ; break;
		case 24: sectionPausingPx = viewportH; break;
		case 25: sectionPausingPx = 0; break;
		case 26: sectionPausingPx = 0; break;
		case 27: sectionPausingPx = (2*viewportH); break;	
		case 28: sectionPausingPx = 0; break;	
		case 29: sectionPausingPx = 0; break;	
		case 30: sectionPausingPx = 0; break;		
		default: sectionPausingPx = 0; break;
	}
	if(percentage)
		return Math.round(getPixelsInPercentage(sectionPausingPx));
	else
		return Math.round(sectionPausingPx);
}



/*Returns a height expressed in terms of the % of viewportheight*/
function getPixelsInPercentage(pausing)
{
	return (pausing/$(window).height()) *100;
}
