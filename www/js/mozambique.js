/* Global variables */
var menuItem1, menuItem2,menuItem3, menuitem4, menuitem5;
var menuItem6, menuItem7,menuItem8, menuitem9, menuitem10;
var menuItem11, menuItem12,menuitem13,menuitem14,menuitem15;
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
	initMenuItemVars();
	updateMenuHrefHeights($(window).height());
	initSkrollr();
	initSkrollrMenu(); 	
}

/* Init skrollr  plugin */
function initSkrollr()
{
	s=skrollr.init({
	constants: {
		//Qui dobbiamo dichiarare l'altezza in pixels delle varie sezioni, da utilizzare in pixel
		//https://github.com/Prinzhorn/skrollr#working-with-constants
			container: 400,
			container2: 50	
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

//To be able to use anchor we need to tell the page to scroll to the right position.  
function updateMenuHrefHeights(viewportH)
{	
	menuItem1.setAttribute('data-menu-top', 0* viewportH); 
	menuItem2.setAttribute( 'data-menu-top', 1* viewportH); 
	menuItem3.setAttribute( 'data-menu-top', 2* viewportH); 
	menuItem4.setAttribute( 'data-menu-top', 3* viewportH); 
	menuItem5.setAttribute( 'data-menu-top', 4* viewportH); 
	menuItem6.setAttribute( 'data-menu-top', 5* viewportH); 
	menuItem7.setAttribute( 'data-menu-top', 6* viewportH); 
	menuItem8.setAttribute( 'data-menu-top', 7* viewportH); 
	menuItem9.setAttribute( 'data-menu-top', 8* viewportH); 
	menuItem10.setAttribute( 'data-menu-top', 9* viewportH); 
	menuItem11.setAttribute( 'data-menu-top', 10* viewportH); 
	menuItem12.setAttribute( 'data-menu-top', 11* viewportH); 
	menuItem13.setAttribute( 'data-menu-top', 12* viewportH);  	
	menuItem14.setAttribute( 'data-menu-top', 13* viewportH);  	
	menuItem15.setAttribute( 'data-menu-top', 14* viewportH);  		
}


/* This function is called when the window is resized*/
$(window).resize(function(e){
	var viewportH = $(window).height();
	updateMenuHrefHeights(viewportH);
});

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
}
