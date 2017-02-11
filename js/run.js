var maxT = 10;
var timer = document.getElementById('time');
var t1 = document.getElementById('n1');
var t2 = document.getElementById('n2');
var t3 = document.getElementById('n3');
var n1, n2, n3;
// console.log('test');

function ranNum(){
	return Math.floor(Math.random() * 100);
}

var c = setInterval(function(){
	if(maxT == 10){
		t1.value = n1 = ranNum();
		t2.value = n2 = ranNum();
		// t3.value = n3 = n1+n2;
		n3 = n1+n2;
	}
	maxT--;
	// console.log(maxT);
	timer.innerText = maxT;
	if(maxT == 0){
		maxT = 10;
		n1 = n2 = n3 = null;
	}
}, 1000);

document.getElementById('stop').addEventListener('click', function(){
	if(c > 0){
		clearInterval(c);
		timer.innerText = 10;
	}	
});

t3.addEventListener('keyup', function(){
	if(parseInt(t3.value)==n3){
		maxT = 10;
		t1.value = n1 = ranNum();
		t2.value = n2 = ranNum();
		t3.value = "";
		n3 = n1+n2;
	}
})