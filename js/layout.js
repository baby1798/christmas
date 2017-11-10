	var html = document.documentElement;
	if(html.clientWidth>750){
	 	var x = 750;
	 	html.style.fontSize = x / 7.5 + "px";
	}else{
	 	html.style.fontSize = html.clientWidth / 7.5 + "px";
	}