var menuVisible = false;
var startingPixel = new Array();
var totalNumberOfSections= 36; //TODO CHANGE WHEN ADD A NEW SECTION!!!!

/* Toggle Menu*/
function toggleMenu()
{
	if(menuVisible)
	{
		//off
		menuVisible=false;
		 $( "#menuSection" ).fadeOut( "slow", function() {});
		 $( "#navigationbar" ).fadeIn( "slow", function() {});	
	}
	else
	{
		//on
		 $( "#menuSection" ).fadeIn( "fast", function() {});
		 $( "#navigationbar" ).fadeOut( "fast", function() {});		
		menuVisible=true;
	}
}

function closeMenu()
{
	 menuVisible=false;
	 $( "#menuSection" ).fadeOut( "slow", function() {});
	 $( "#navigationbar" ).fadeIn( "slow", function() {});
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
	 $("#menu-item-2").attr( 'data-menu-top', startingPixel[5]+1); 
	 $("#menu-item-3").attr( 'data-menu-top', startingPixel[9]+1); 
	 $("#menu-item-4").attr( 'data-menu-top', startingPixel[10]+1); 
	 $("#menu-item-5").attr( 'data-menu-top', startingPixel[16]+1); 
	 $("#menu-item-6").attr( 'data-menu-top', startingPixel[22]+1); 
	 $("#menu-item-7").attr( 'data-menu-top', startingPixel[26]+1); 


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
	/* some example of pausing :
	viewportH + $('#vidbgscrollabletext-text').innerHeight();
	viewportH/2;
	$('#imgFullText-text').innerHeight();
	2*viewportH
	viewportH
	*/
	switch(sectionNumber)
	{
		case 1: sectionPausingPx = 0; break;
		case 2: sectionPausingPx = viewportH/2; break;
		case 3: sectionPausingPx = viewportH*3.8 ; break;
		case 4: sectionPausingPx = viewportH*3 + $('#slide04text').innerHeight(); break;
		case 5: sectionPausingPx = viewportH/2; break; 
		case 6: sectionPausingPx = 0; break; 
		case 7: sectionPausingPx = 0; break;
		case 8: sectionPausingPx = 0; break; 
		case 9: sectionPausingPx = 0; break;
		case 10: sectionPausingPx = 0; break;
		case 11: sectionPausingPx = 0; break;
		case 12: sectionPausingPx = 0; break; 
		case 13: sectionPausingPx = 0; break;
		case 14: sectionPausingPx = 0; break;
		case 15: sectionPausingPx = 0; break;
		case 16: sectionPausingPx =  0; break;
		case 17: sectionPausingPx = 0; break;
		case 18: sectionPausingPx = 0; break;
		case 19: sectionPausingPx = 0; break;
		case 20: sectionPausingPx = 0; break;
		case 21: sectionPausingPx = 0; break;
		case 22: sectionPausingPx = 0; break;
		case 23: sectionPausingPx = 0; break;
		case 24: sectionPausingPx = 0; break;
		case 25: sectionPausingPx = 0; break;
		case 26: sectionPausingPx = 0; break;
		case 27: sectionPausingPx = 0; break;	
		case 28: sectionPausingPx = 0; break;	
		case 29: sectionPausingPx = 0; break;	
		case 30: sectionPausingPx = 0; break;		
		case 31: sectionPausingPx = 0; break;		
		case 32: sectionPausingPx = 0; break;		
		case 33: sectionPausingPx = 0; break;		
		case 34: sectionPausingPx = 0; break;		
		case 35: sectionPausingPx = 0; break;		
		case 36: sectionPausingPx = 0; break;		
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
