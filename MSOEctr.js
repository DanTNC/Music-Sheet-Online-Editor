var Tstate=0; //0:A, 1:A  2:a  3:a'
var Dstate=0.0; //n=-5~4. n=0 for N=1, n+1=>N*2, n-1=>N/2. n.1=N*(1+1/2), n.2=N*(1+1/2+1/4)... and so on

var key = () => {
	switch(event.keyCode){
		case 44:
			if(Dstate>-5.0)
				Dstate=Dstate-1.0;
			break;
		case 46:
			if(Dstate<4.0)
				Dstate=Dstate+1.0;
			break;
		case 60:
			if((Dstate-floor(Dstate))!=0.0)
				Dstate=Dstate-0.1;
			break;
		case 62:
			Dstate=Dstate+0.1;
			break;
	// ----------Change Dstate-----------
		
		default:
	}
	console.log(Dstate);
	console.log(event.keyCode);
};

window.onload = () => {
	document.onkeypress=key;

}
