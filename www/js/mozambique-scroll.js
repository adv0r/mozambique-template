var currentSectionID = '#lid1';
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


/* called on scroll*/
$(window).scroll(function() { 
     currentScroll = getScrollTop(); //get the current position
     $('#scroll-pos').html(currentScroll+"px"); //update the view with the current height


     //Create an array of object for videos with all the video IDs and the corresponding containers and the autotoggle
    videoList = new Array();
    
    videoList.push({videoid:"videoToggle", containerid:"VIDEOPLAYERAUTOTOGGLE",autotoggle:true});
    videoList.push({videoid:"videoToggle2", containerid:"VIDPLAYERAUTOTOGGLESIDETEXT",autotoggle:true});
    videoList.push({videoid:"videoNonFull", containerid:"VIDPLAYER",autotoggle:false});
    videoList.push({videoid:"VIDPLAYERSIDE", containerid:"VIDPLAYERSIDE-TEXT",autotoggle:false});
               
    
    for (i=0; i<videoList.length;i++)
    {
            tempVideoObj = videoList[i];
            videoContainer = document.getElementById(tempVideoObj.containerid);
            videoElem = document.getElementById(tempVideoObj.videoid);

            if(isScrolledIntoView(videoContainer))
            {
                  if (videoElem.paused && tempVideoObj.autotoggle) 
                  videoElem.play(); //play the video if the autotoggle is set to true
            }
            else
            {
                if (!videoElem.paused) 
                    videoElem.pause(); //pause the video and set position to 0
                    restartVideo(tempVideoObj.videoid);
            }
    }

     var newSectionID= getCurrentElementID(currentScroll);
     if(newSectionID!=currentSectionID)
    {
        //console.log("Scrolled to a new section . Menu Section id = " +newSectionID);
       $(currentSectionID).removeClass('currentMenuItem');
       $(newSectionID).addClass('currentMenuItem');
        currentSectionID= newSectionID;
    } 
});



/* Returns the ID of the current element based on scrollPosition*/
function getCurrentElementID(currentScroll){
    for(i=1;i<=totalNumberOfSections;i++)
    {
        initialPixel = startingPixel[i-1];
        finalPixel= startingPixel[i];
        if(currentScroll >= initialPixel && currentScroll <=finalPixel)
        {
            //The user is inside the i-th section!
            return "#lid"+i;
        }
    }
     return "#lid1";
}




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

