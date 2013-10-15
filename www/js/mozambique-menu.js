var menuItem1, menuItem2,menuItem3, menuitem4, menuitem5;
var menuItem6, menuItem7,menuItem8, menuitem9, menuitem10;
var menuItem11, menuItem12,menuitem13,menuitem14,menuitem15;
var menuitem16,menuItem17,menuItem18, menuItem19,menuItem20;

//To be able to use anchor we need to tell the page to scroll to the right position.  
function updateMenuHrefHeights(viewportH)
{	
	var cumulativeLenght=0;
	menuItem1.setAttribute('data-menu-top', 0* viewportH + cumulativeLenght); 
	menuItem2.setAttribute( 'data-menu-top', 1* viewportH + cumulativeLenght); 
	menuItem3.setAttribute( 'data-menu-top', 2* viewportH + cumulativeLenght); 
	menuItem4.setAttribute( 'data-menu-top', 3* viewportH + cumulativeLenght); 
	menuItem5.setAttribute( 'data-menu-top', 4* viewportH + cumulativeLenght); 
	cumulativeLenght+=3850;
	menuItem6.setAttribute( 'data-menu-top', 5* viewportH + cumulativeLenght); 
	cumulativeLenght+=3900;
	menuItem7.setAttribute( 'data-menu-top', 6* viewportH + cumulativeLenght); 
	cumulativeLenght+=700;
	menuItem8.setAttribute( 'data-menu-top', 7* viewportH + cumulativeLenght); 
	cumulativeLenght+=4450;
	menuItem9.setAttribute( 'data-menu-top', 8* viewportH + cumulativeLenght); 
	menuItem10.setAttribute( 'data-menu-top', 9* viewportH + cumulativeLenght); 
	menuItem11.setAttribute( 'data-menu-top', 10* viewportH + cumulativeLenght); 
	menuItem12.setAttribute( 'data-menu-top', 11* viewportH + cumulativeLenght); 
	menuItem13.setAttribute( 'data-menu-top', 12* viewportH + cumulativeLenght);  	
	cumulativeLenght+=2500;	
	menuItem14.setAttribute( 'data-menu-top', 13* viewportH + cumulativeLenght);  	
	cumulativeLenght+=1230;	
	menuItem15.setAttribute( 'data-menu-top', 14* viewportH + cumulativeLenght);  		
	cumulativeLenght+=1420;		
	menuItem16.setAttribute( 'data-menu-top', 15* viewportH + cumulativeLenght);  		
	cumulativeLenght+=500;		
	menuItem17.setAttribute( 'data-menu-top', 16* viewportH + cumulativeLenght);  		
	cumulativeLenght+=5900;		
	menuItem18.setAttribute( 'data-menu-top', 17* viewportH + cumulativeLenght);  		
	cumulativeLenght+=2000;		
	menuItem19.setAttribute( 'data-menu-top', 18* viewportH + cumulativeLenght);  	
	menuItem20.setAttribute( 'data-menu-top', 19* viewportH + cumulativeLenght);  		
}


/*Only sets the variables - TODO dynamic using arrays*/
function initMenuItemVars()
{
	menuItem1 = document.getElementById("#menu-item-1"); 
	menuItem2 = document.getElementById("#menu-item-2"); 
	menuItem3 = document.getElementById("#menu-item-3"); 
	menuItem4 = document.getElementById("#menu-item-4"); 
	menuItem5 = document.getElementById("#menu-item-5"); 
	menuItem6 = document.getElementById("#menu-item-6"); 
	menuItem7 = document.getElementById("#menu-item-7"); 
	menuItem8 = document.getElementById("#menu-item-8"); 
	menuItem9 = document.getElementById("#menu-item-9"); 
	menuItem10 = document.getElementById("#menu-item-10"); 
	menuItem11 = document.getElementById("#menu-item-11"); 
	menuItem12 = document.getElementById("#menu-item-12"); 
	menuItem13 = document.getElementById("#menu-item-13"); 
	menuItem14 = document.getElementById("#menu-item-14"); 
	menuItem15 = document.getElementById("#menu-item-15"); 
	menuItem16 = document.getElementById("#menu-item-16"); 
	menuItem17 = document.getElementById("#menu-item-17"); 
	menuItem18 = document.getElementById("#menu-item-18"); 
	menuItem19 = document.getElementById("#menu-item-19"); 
	menuItem20= document.getElementById("#menu-item-20"); 

}
