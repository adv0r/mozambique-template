
//To be able to use anchor we need to tell the page to scroll to the right position.  
function updateMenuHrefHeights(viewportH)
{	
	var cumulativeLenght=0;
	 $("#menu-item-1").attr('data-menu-top', 0* viewportH + cumulativeLenght); 
	 $("#menu-item-2").attr( 'data-menu-top', 1* viewportH + cumulativeLenght); 
	 $("#menu-item-3").attr( 'data-menu-top', 2* viewportH + cumulativeLenght); 
	 $("#menu-item-4").attr( 'data-menu-top', 3* viewportH + cumulativeLenght); 
	 $("#menu-item-5").attr( 'data-menu-top', 4* viewportH + cumulativeLenght); 
	cumulativeLenght+=3850;
	 $("#menu-item-6").attr( 'data-menu-top', 5* viewportH + cumulativeLenght); 
	cumulativeLenght+=3900;
	 $("#menu-item-7").attr( 'data-menu-top', 6* viewportH + cumulativeLenght); 
	cumulativeLenght+=700;
	 $("#menu-item-8").attr( 'data-menu-top', 7* viewportH + cumulativeLenght); 
	cumulativeLenght+=4450;
	 $("#menu-item-9").attr( 'data-menu-top', 8* viewportH + cumulativeLenght); 
	 $("#menu-item-10").attr( 'data-menu-top', 9* viewportH + cumulativeLenght); 
	 $("#menu-item-11").attr( 'data-menu-top', 10* viewportH + cumulativeLenght); 
	 $("#menu-item-12").attr( 'data-menu-top', 11* viewportH + cumulativeLenght); 
	 $("#menu-item-13").attr( 'data-menu-top', 12* viewportH + cumulativeLenght);  	
	cumulativeLenght+=2500;	
	 $("#menu-item-14").attr( 'data-menu-top', 13* viewportH + cumulativeLenght);  	
	cumulativeLenght+=1230;	
	 $("#menu-item-15").attr( 'data-menu-top', 14* viewportH + cumulativeLenght);  		
	cumulativeLenght+=1420;		
	 $("#menu-item-16").attr( 'data-menu-top', 15* viewportH + cumulativeLenght);  		
	cumulativeLenght+=500;		
	 $("#menu-item-17").attr( 'data-menu-top', 16* viewportH + cumulativeLenght);  		
	cumulativeLenght+=5900;		
	 $("#menu-item-18").attr( 'data-menu-top', 17* viewportH + cumulativeLenght);  		
	cumulativeLenght+=2000;		
	 $("#menu-item-19").attr( 'data-menu-top', 18* viewportH + cumulativeLenght);  	
	 $("#menu-item-20").attr( 'data-menu-top', 19* viewportH + cumulativeLenght);  
	 $("#menu-item-21").attr( 'data-menu-top', 20* viewportH + cumulativeLenght);  		
	 $("#menu-item-22").attr('data-menu-top', 21* viewportH + cumulativeLenght);	
}


