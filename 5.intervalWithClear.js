var checking = setInterval(function(){
	if(true){
		clearInterval(checking); //clearing the interval after meeting the condition 
		//do something
	}
},50)

setTimeout(function(){
	clearInterval(checking);
},4000);
// If the condition doesn't meet, after 4 second it'll stop for searching.
