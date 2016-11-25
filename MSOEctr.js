var Tstate=0; //0:A, 1:A  2:a  3:a'
var Dstate=0.0; //n=-5~4. n=0 for N=1, n+1=>N*2, n-1=>N/2. n.1=N*(1+1/2), n.2=N*(1+1/2+1/4)... and so on

var ChgDstt = () => {
	switch(event.KeyCode){
		case 44:
			if(Dstate>-5)
				Dstate=Dstate-1;
			break;
		case 46:
			if(Dstate<4)
				Dstate=Dstate+1;
			break;
		case 60:
			if(Dstate*10%10!=0.0)
				Dstate=Dstate-0.1;
			break;
		case 62:
			Dstate=Dstate+0.1;
			break;
		default:
	}
	console.log(Dstate);
	console.log(event.KeyCode);
};

window.onload = () => {
	document.onkeypress=ChgDstt;
}
