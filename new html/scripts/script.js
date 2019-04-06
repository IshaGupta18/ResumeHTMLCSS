console.log("inside javascript");
//document.addEventListener('click',function (){
	//console.log(event);
	//console.log("click called");
    //window.alert('click event called!')


//});
// var i=0;

// var arr=["red","green","blue"];
// var bodyHeaderContent = document.querySelector("#navbar");
// console.log(bodyHeaderContent)

// bodyHeaderContent.addEventListener("mouseover",function(){
// 	this.style.backgroundColor=arr[i];
// 	if (i>=3){
// 		i=0;
// 	}
// 	else{
// 		i++;
// 	}


// });

var dict={};
var arr=["educa","work","linkto","form"]
//var my=document.getElementById(arr[0]);
//console.log(my);
var j=0;
function getposfromtop(element){
	var yPosition=0;
	while (element){
		yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
	}
	dict[arr[j]]=yPosition;
	j++;
}
for (var i=0;i<4;i++){
	getposfromtop(document.getElementById(arr[i]));
}
var mybox=document.getElementById("educa1");
var mydist=dict["educa"];
mybox.addEventListener('click',function(){
		var dist=0;
		
		var x = setInterval(function(){
  		window.scrollBy(0, 10);
  		dist+=10;
  		if (dist>=662){
  			clearInterval(x);
  		}
		}, 10);

})
var mybox=document.getElementById("work1");
var mydist=dict["work"];
mybox.addEventListener('click',function(){
		var dist=0;
		
		var x = setInterval(function(){
  		window.scrollBy(0, 10);
  		dist+=10;
  		if (dist>=2000){
  			clearInterval(x);
  		}
		}, 10);

})
var mybox=document.getElementById("linkto1");
var mydist=dict["linkto"];
mybox.addEventListener('click',function(){
		var dist=0;
		
		var x = setInterval(function(){
  		window.scrollBy(0, 10);
  		dist+=10;
  		if (dist>=2650){
  			clearInterval(x);
  		}
		}, 10);

})
var mybox=document.getElementById("form1");
var mydist=dict["form"];
mybox.addEventListener('click',function(){
		var dist=0;
		
		var x = setInterval(function(){
  		window.scrollBy(0, 10);
  		dist+=10;
  		if (dist>=4550){
  			clearInterval(x);
  		}
		}, 10);

})
var mybox=document.getElementById("back");
var mydist=dict["form"];
mybox.addEventListener('click',function(){
		var dist=5210;
		
		var x = setInterval(function(){
  		window.scrollBy(0, -10);
  		dist-=10;
  		if (dist<=0){
  			clearInterval(x);
  		}
		}, 10);

})


