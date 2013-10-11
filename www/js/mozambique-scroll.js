/* USAGE: 
1) markup this div 
        <div id="scroll-pos">0px</div>

2)add the following css properties :

#scroll-pos{
    background-color: black;
    color:white;
    font-size: 26px;
    position: fixed;
    top : 0;
    left:50%;
    opacity: 0.6;
    z-index: 9999;
}

3) include   
     <script src="js/jquery.js"></script>
     <script src="js/mozambique-scroll.js"></script>
/* -  When the user scrolls -  */ 


$(window).scroll(function() { 
     currentScroll = getScrollTop(); //get the current position
     $('#scroll-pos').html(currentScroll+"px"); //update the view with the current height

    //Auto toggle the video
     var videoContainer = document.getElementById('VIDEOPLAYERAUTOTOGGLE');
     var videoElem = document.getElementById('videoToggle');
     if(isScrolledIntoView(videoContainer))
     {
        if (videoElem.paused) 
                  videoElem.play();
     }
     else
     {
        if (!videoElem.paused) 
                videoElem.pause();
     }
});


/* -  Get the position from top, cross browser -  */ 
function getScrollTop(){
    if(typeof pageYOffset!= 'undefined'){
        //most browsers except IE before #9
        return pageYOffset;
    }
    else{
        var B= document.body; //IE 'quirks'
        var D= document.documentElement; //IE with doctype
        D= (D.clientHeight)? D: B;
        return D.scrollTop;
    }
}


/* The following part is used to detect the auto toggle of the video based on scroll*/

/*http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling*/
/* Detect if an element is visible in the viewport after scrolling
Note that this only works if the document is the element being scrolled, i.e. you aren't checking visibility of some element inside a scrolling inner pane
*/


function isScrolledIntoView(elem)
{
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}


/* Detect if an element is  COMPLETELY visible in the viewport after scrolling*/

function isCompletelyScrolledIntoView(elem)
{
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((docViewTop < elemTop) && (docViewBottom > elemBottom));
}

