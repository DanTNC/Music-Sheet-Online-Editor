var abcstr="$A$D,";
var Tstate=1; //0:A, 1:A  2:a  3:a'
var Dstate=5; //Mn, n=0~9. n=5 for N=1, n+1=>N*2, n-1=>N/2. 1n=N*(1+1/2), 2n=N*(1+1/2+1/4)... and so on
var CrtPos=0;


var mvpos = (md) => {
	if(md==0){
		for(var i=CrtPos-1;i>=0;i--){
			if(abcstr[i]=="$"){
				return i;
			}
		}
	}
	if(md==1){
		for(var i=CrtPos+1;i<=abcstr.length;i++){
			if(abcstr[i]=="$"){
				return i;
			}
		}
	}
};

var key = () => { // only keypress can tell if "shift" is pressed at the same time
	switch(event.keyCode){
		case 44:
			if(Dstate%10>0)
				Dstate=Dstate-1;
			break;
		case 46:
			if(Dstate%10<9)
				Dstate=Dstate+1;
			break;
		case 60:
			if((Math.floor(Dstate/10))!=0)
				Dstate=Dstate-10;
			break;
		case 62:
			Dstate=Dstate+10;
			break;
	// ----------Change Dstate-----------
		case 47:
			Tstate=(Tstate==3)?0:Tstate+1;
			break;
	// ----------Change Tstate-----------
		case 113:
			abcstr=abcstr.substring(0,CrtPos-1)+abcstr.substring(mvpos(1),abcstr.length);
			console.log(abcstr);
			break;
	// ----------Delete------------------
		default:
	}
	console.log(Dstate);
	console.log(Tstate);
	console.log(event.keyCode);
};

var move = () => { // "left" and "right" can't be detected in keypress
	if(event.keyCode==37){
		CrtPos=mvpos(0);
	}
	if(event.keyCode==39){
		CrtPos=mvpos(1);
	}
	console.log(CrtPos);
}

window.onload = () => {
	document.onkeypress=key;
	document.onkeydown=move;
}
