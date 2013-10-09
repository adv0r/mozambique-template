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
     <script src="js/moz-scroll-pos.js"></script>

/* -  When the user scrolls -  */ 
$(window).scroll(function() { 
    currentScroll = getScrollTop(); //get the current position
     $('#scroll-pos').html(currentScroll+"px"); //update the view with the current height
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
