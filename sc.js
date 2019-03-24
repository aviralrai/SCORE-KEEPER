var p1button=document.querySelector("#b1");
var p2button=document.querySelector("#b2");
var resetbutton=document.querySelector("#res");
var p1span=document.querySelector("#p1span");
var p2span=document.querySelector("#p2span");
var input1=document.querySelector("input");
var gamenos=document.querySelector("p span");
// var p=document.querySelector("p");

// p.classList.add("green");

var gameover=false;

var uppercount=5;

var p1count=0;
var p2count=0;

p1button.addEventListener("click",function(){
	if(!gameover)
	{
		p1count++;
		if(p1count<=uppercount)
		{	
		p1span.textContent=p1count;
		}
		if(p1count===uppercount)
		{
			p1span.classList.toggle("green");
			gameover=!gameover;
		}
	}
});
p2button.addEventListener("click",function(){
	if(!gameover)
	{
		p2count++;
		if(p2count<=uppercount)
		{	
		p2span.textContent=p2count;
		}
		if(p2count===uppercount)
		{
			p2span.classList.toggle("green");
			gameover=!gameover;
		}
	}
});

function reset(){
	p1count=0;
	p2count=0;
	p1span.classList.remove("green");
	p2span.classList.remove("green");
	gameover=false;
	p1span.textContent=p1count;
	p2span.textContent=p2count;
}

resetbutton.addEventListener("click",function(){
	reset();
})

input1.addEventListener("change",function(){
	gamenos.textContent=input1.value;
	uppercount=Number(input1.value);
	reset();
})