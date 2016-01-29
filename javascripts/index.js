window.onload=function(){
	var sence=document.getElementById('sence');
	var btn=document.getElementById('btn');
	var btn1=document.getElementById('btn1');
	var left=document.getElementById('left');
	var right=document.getElementById('right');
  	var index=10,cishu=0;
	var fn=function(){
		for(var i=0;i<7;i++){
			for(j=0;j<i+1;j++){
				var div=document.createElement('div');
				div.setAttribute('class','poker');
				div.setAttribute('id',i+'-'+j);
				div.style.top=i*50+'px';
				div.style.left=(6-i)*60+j*120+'px';
				sence.appendChild(div);
			}
		}
	};
	fn();
  var drow=function(){
    for(var i=0;i<24;i++){
      var dpoker=document.createElement('div');
      dpoker.setAttribute('class','l-poker');
      dpoker.setAttribute('id',12+'-'+i);
      dpoker.style.zIndex=index;
      index++;
      left.appendChild(dpoker);
    }
  };
  drow();

	var previous=null;
	var xianshi=100;
	var shuzi={A:'1',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9',10:'10',J:'11',Q:'12'};
	sence.onclick=function(e){
		var el=e.target;
		if(el==this) return;
		var id=el.getAttribute('id');
		var x=Number(id.split('-')[0]);
		var y=Number(id.split('-')[1]);
		var newx=document.getElementById((x+1)+'-'+y);
		console.log(newx);
		var newy=document.getElementById((x+1)+'-'+(y+1));
		console.log(newy);
		if(newx||newy)return;
			if(previous!==null){previous.style.boxShadow='1px 2px 6px black';
			if(Number(shuzi[el.innerHTML])+Number(shuzi[previous.innerHTML])==13){
				el.parentElement.removeChild(el);
				previous.parentElement.removeChild(previous);
			}
		}
		if(el.innerHTML=='K'){
			el.parentElement.removeChild(el);
		}
		el.style.border='1px solid #928B8B';
		el.style.boxShadow='0px 2px 12px rgba(165,161,161,0.6)';

		if(id=='btn'){
			if(left.length<=0)return;
			right.appendChild(left.removeChild(left.lastElementChild));
			right.lastElementChild.style.zIndex=xianshi;
		}
		if(id=='btn1'){
			while(right.lastElementChild){
				left.appendChild(right.removeChild(right.lastElementChild));
		}
			cishu++;
		}
		if(cishu>3){
			game.style.display='block'; 
		}
		previous=el;
	};
	game.onclick=function(){
		location.reload();
	}


	var dict={1:'A',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9',10:'10',11:'J',12:'Q',13:'K'};
	var type=['red','bk','fk','mh'];
	var rand=function(){
		var zidian={};
		var poker=[],hs,num;
		while(poker.length!==52){
			var hs=type[Math.floor(Math.random()*4)];
			var num=dict[Math.floor(1+Math.random()*13)];
			var pai={huase:hs,number:num};
			if(!zidian[hs+num]){
				poker.push(pai);
				zidian[hs+num]=true;
			}
		}
		return poker;
		div.innerHTML(poker);
	};
	var puke=rand();
	
	//在屏幕上显示花色和数字
	var els=document.getElementsByClassName('poker');
	for(var i=0;i<els.length;i++){
		els[i].innerHTML=puke[i].number;
		if(puke[i].huase=='red'){
			els[i].style.backgroundImage='url(./img/hongta3.jpg)';
		}
		if(puke[i].huase=='bk'){
     		els[i].style.backgroundImage='url(./img/heitao4.jpg)';
		}
		if(puke[i].huase=='fk'){
      		els[i].style.backgroundImage='url(./img/fangpian2.jpg)';
		}
		if(puke[i].huase=='mh'){
      		els[i].style.backgroundImage='url(./img/meihua1.jpg)';
		}
	}
  	var dpokers=document.getElementsByClassName('l-poker');
  	for(var i=0;i<dpokers.length;i++){
  		dpokers[i].innerHTML=puke[28+i].number;
  	if(puke[28+i].huase=='red'){
			dpokers[i].style.backgroundImage='url(./img/hongta3.jpg)';
		}
		if(puke[28+i].huase=='bk'){
      		dpokers[i].style.backgroundImage='url(./img/heitao4.jpg)';
		}
		if(puke[28+i].huase=='fk'){
      		dpokers[i].style.backgroundImage='url(./img/fangpian2.jpg)';
		}
		if(puke[28+i].huase=='mh'){
      		dpokers[i].style.backgroundImage='url(./img/meihua1.jpg)';
		}
  	}
  	
  	// guize.onmouseover=function(){
  	// 	shuoming.style.display='block';
  		
  	// }
  	// guize.onmouseout=function(){
  	// 	shuoming.style.display='none';
  		
  	// }
  	var kaiguan=true;
  	guize.onclick=function(){
  		if(kaiguan){
  			shuoming.style.display='block';
  			kaiguan=false;
  		}else{
  			shuoming.style.display='none';
  			kaiguan=true;
  		}
  	}


};