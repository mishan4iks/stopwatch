var btnStart=document.getElementById("btnStart");
var row=document.querySelector(".row");
var btn=document.getElementById("btn");
document.getElementById("inp").innerHTML=inp;
 function func(){
 	var p=document.getElementById("out");
 	var audio=document.getElementById("audio");
 	if (inp.value==-1) {
 		clearInterval();
 		p.innerHTML="Введите число от единицы до 1000";
 		audio.src="audio/audi.mp3";
		audio.autoplay=true;

 	}
 	else if (inp.value>=1001) {
 		clearInterval();
 		p.innerHTML="Введите число от единицы до 1000";	
 	}
 	else{
 		p.innerHTML=inp.value--;
 	}
 }
btn.addEventListener('click', function(e){
	var target = e.target;
	if (target.id=="btn") {
		setInterval(func,1000);
		row.style.display="none";
		btnStart.style.display="block";

	}else{
		clearInterval(func);
		row.style.display="block";
		btnStart.style.display="none";
	}


});
function loc(){
	location.reload();
}


