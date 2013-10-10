// Init skrollr
function initSkrollr()
{
	skrollr.init({
	constants: {
			container: 400,
			container2: 50	
		}
	});	
}

window.addEventListener('DOMContentLoaded', function() {	//This function is called on page load

	initSkrollr();  //Comment if you UNCOMMENT the queryloader!

	/* uncomment to see the preloader  and comment the line above
	 $("body").queryLoader2(
		{
		        	percentage: true,
                   	        	barHeight: 80,
	                	completeAnimation: "grow",
	                	onComplete : initSkrollr() 
		});
	*/
});