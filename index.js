var ytplayers = document.getElementsByTagName('yt-embed');
for (var i = 0; i < ytplayers.length; i++) {
  var videoid = ytplayers[i].getAttribute('videoid');
  var element = document.createElement("iframe");
  var url = "http://youtube.com/embed/" + videoid;
  element.src = url;
  element.setAttribute('width', ytplayers[i].getAttribute('width'));
  element.setAttribute('height', ytplayers[i].getAttribute('height'));
  ytplayers[i].appendChild(element);
}
var youtubejs = {
      embed: function(embedwidth,embedheight,embedid) {
         var newembed = document.createElement('yt-embed'); 
	 newembed.setAttribute('videoid', embedid);
	 var videoid = newembed.getAttribute('videoid');
	 var element = document.createElement("iframe");
  	 var url = "http://youtube.com/embed/" + videoid;
  	 element.src = url;
	 element.setAttribute('width', embedwidth);
	 element.setAttribute('height', embedheight);
  	 newembed.appendChild(element);
	 document.body.appendChild(newembed);
      }
}
//Test
//youtubejs.embed("1000", "500", "some_id");
