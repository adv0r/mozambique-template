// Init skrollr
function initSkrollr()
{
	var s=skrollr.init({
	constants: {
			container: 400,
			container2: 50	
		}
	});
	initSkrollrMenu(s); //init the menu	
}

function initSkrollrMenu(s)
{
	skrollr.menu.init(s, {
	//skrollr will smoothly animate to the new position using `animateTo`.
	animate: true,
	//The easing function to use.
	easing: 'sqrt',
	//How long the animation should take in ms.
	duration: function(currentTop, targetTop) {
		//By default, the duration is hardcoded at 500ms.
		return 500;
		//But you could calculate a value based on the current scroll position (`currentTop`) and the target scroll position (`targetTop`).
		//return Math.abs(currentTop - targetTop) * 10;
		},
	});
}

window.addEventListener('DOMContentLoaded', function() {	//This function is called on page load, works on iOs

	initSkrollr();  //Comment if you UNCOMMENT the queryloader below

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