 var sectionContainer =  document.getElementById('section-container');
 var textContainer =  document.getElementById('text-container');

 var textLength = 300  ; //The length (px) of the text to scroll
 var startScrollText =  sectionContainer.offsetTop;//at this height block the image and start scrolling text
 var stopScrollText = startScrollText+textLength; //ad this height stop scrolling text and go down


/* -  When the user scrolls -  */ 
$(window).scroll(function() { 
    currentScroll = getScrollTop(); //get the current position
     $('#scroll-pos').html(currentScroll+"px"); //update the view with the current height
     if(currentScroll>startScrollText && currentScroll < stopScrollText)
     {
            //Scroll down the text
            textContainer.style.position='fixed';
            console.log(currentScroll +' Must be Scrolling the text');
            scrollDivDown('text-container');
     }
     else
     {
             textContainer.style.position='relative';
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

/* Functions to control the scroll inside a div*/
function toTop(id){ 
    document.getElementById(id).scrollTop=0 
} 

defaultStep=1 
step=defaultStep 

function scrollDivDown(id){ 
    document.getElementById(id).scrollTop+=step 
    timerDown=setTimeout("scrollDivDown('"+id+"')",10) 
} 

function scrollDivUp(id){ 
    document.getElementById(id).scrollTop-=step 
    timerUp=setTimeout("scrollDivUp('"+id+"')",10) 
} 

function toBottom(id){ 
    document.getElementById(id).scrollTop=document.getElementById(id).scrollHeight 
} 

function toPoint(id){ 
    document.getElementById(id).scrollTop=100 
} 