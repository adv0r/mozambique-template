var  videoList = new Array();

function initVideoArray()
{
   //Create an array of object for videos with all the video IDs and the corresponding containers and the autotoggle
	videoList.push({videoid:"videoToggle", containerid:"VIDEOPLAYERAUTOTOGGLE", sectionid:16, autotoggle:true});
	videoList.push({videoid:"videoToggle2", containerid:"VIDPLAYERAUTOTOGGLESIDETEXT", sectionid:19, autotoggle:true});
	videoList.push({videoid:"videoNonFull", containerid:"VIDPLAYER", sectionid:7, autotoggle:false});
	videoList.push({videoid:"VIDPLAYERSIDE", containerid:"VIDPLAYERSIDE-TEXT", sectionid:8, autotoggle:false});
}

/*Called everytime the user scrolls to a new section with id (sectionScrolledTo)*/
function playVideos(sectionScrolledTo)
{
	for (i=0; i<videoList.length;i++)
	{
		tempVideoObj = videoList[i];
		if(tempVideoObj.sectionid==sectionScrolledTo && tempVideoObj.autotoggle )
			playSingleVideo(tempVideoObj);
  	}
}

function stopVideos(oldSectionID)
{
	for (i=0; i<videoList.length;i++)
	{
		tempVideoObj = videoList[i];
		if(tempVideoObj.sectionid==oldSectionID)
			stopSingleVideo(tempVideoObj);
  	}
}



function playSingleVideo(videoElem)
{
	videojs(videoElem.videoid).ready(function()
		{ //wait until the video is ready
			var vid = this;
			if (vid.paused()) 
				vid.play(); //play the video if the autotoggle is set to true
	               });
}

function stopSingleVideo(videoElem)
{
	videojs(videoElem.videoid).ready(function()
			{ //wait until the video is ready
				var vid = this;
				if (!vid.paused())
				{ 
					vid.pause(); //pause the video and set position to 0
					restartVideo(videoElem.videoid);
			                 }
		        	});	
}

/* Stops the video */
function restartVideo(elemID) {
	var video = videojs(elemID);
	video.currentTime(0);
}	