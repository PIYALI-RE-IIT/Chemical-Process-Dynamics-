/*Document Name:FD_js.js
    Author:Piyali Chattopadhyay
	Research Engineer,VLABS IIT KGP*/


//////animation for Inlet EtOH+Water//////
var arr = [];
arr[0]= new Image();
arr[0].src = "images/inlet0.png";
arr[1]= new Image();
arr[1].src = "images/inlet1.png";
arr[2]= new Image();
arr[2].src = "images/inlet2.png";
arr[3]= new Image();
arr[3].src = "images/inlet3.png";
arr[4]= new Image();
arr[4].src = "images/inlet4.png";
arr[5]= new Image();
arr[5].src = "images/inlet5.png";
arr[6]= new Image();
arr[6].src = "images/inlet6.png";
arr[7]= new Image();
arr[7].src = "images/inlet7.png";
arr[8]= new Image();
arr[8].src = "images/inlet8.png";
arr[9]= new Image();
arr[9].src = "images/inlet9.png";
arr[10]= new Image();
arr[10].src ="images/inlet10.png";
arr[11]= new Image();
arr[11].src ="images/inlet11.png";
arr[12]= new Image();
arr[12].src ="images/inlet12.png";
arr[13]= new Image();
arr[13].src ="images/inlet13.png";


var i=0;
function inletfeed(){
 document.getElementById("img").src= arr[i].src;
 i++; 
 if(i==arr.length){
  i=13;
 }
 setTimeout(function(){ inletfeed(); },100);
 clearTimeout(20); 
}

function animatesmoke(){
	var i=0;
	for(i=0;i<=8;i++){
	document.getElementsByClassName('vapourspan')[i].style.display='block';
}
}
function showBlink(){
	
	document.getElementById('blinkingtext').style.display="block" ;
	
	}
function stopsmoke(){
	document.getElementsByClassName('vapour').style.display='none';
}

//////animation for simulation with temperature//////

var arr2 = [];
arr2[0]= new Image();
arr2[0].src = "simulation/sim1.png";
arr2[1]= new Image();
arr2[1].src = "simulation/sim2.png";
arr2[2]= new Image();
arr2[2].src = "simulation/sim3.png";
arr2[3]= new Image();
arr2[3].src = "simulation/sim4.png";
arr2[4]= new Image();
arr2[4].src = "simulation/sim5.png";
arr2[5]= new Image();
arr2[5].src = "simulation/sim6.png";
arr2[6]= new Image();
arr2[6].src = "simulation/sim7.png";
/*arr2[7]= new Image();
arr2[7].src = "simulation/sim2.png";
arr2[8]= new Image();
arr2[8].src = "simulation/sim3.png";
arr2[9]= new Image();
arr2[9].src = "simulation/sim4.png";
arr2[10]= new Image();
arr2[10].src ="simulation/sim5.png";
arr2[11]= new Image();
arr2[11].src ="simulation/sim5.png";
arr2[12]= new Image();
arr2[12].src ="simulation/sim6.png";;
arr2[13]= new Image();
arr2[13].src ="simulation/sim7.png";*/

var t=0;
function simulatefeed(){	
 document.getElementById("img").src= arr2[t].src;
 t++;  
 if(t==arr2.length){
  t=6;
 animatesmoke();
 showBlink();
 }
 
 setTimeout(function(){ simulatefeed(); },1000);
 clearTimeout(50); 
  //animatesmoke();
}
////y-x diagram/////
function plotyx(){
 document.getElementById('closediv').style.display="block";
 document.getElementById('chartContainer').style.display="block";
 var chart = new CanvasJS.Chart("chartContainer",
    {
      title:{
      text: "y-x Diagram(McCabe-Thiele diagram for the EtOH-water binary mixture)",
	  fontSize:17,
	  fontFamily:"Times new roman",
	  fontColor:"#1A7A87",
      },
	  
	  axisX:{
        interlacedColor: "#CCF6FB",
        title: "X_EtOH"
      },
      axisY:{
		title: "Y_EtOH"
      //interval:2000,
      //maximum:6000,
      //minimum:-6000
    },
      
      data: [
      {        
        type: "spline",
		color:"#27ACBD",
        dataPoints: [
         
        { x: 0,   y: 0 },
        { x: 0.0190, y:0.17},
        { x: 0.0721, y:0.3891},
        { x: 0.0966, y: 0.4375},
        { x: 0.1238, y: 0.4704},
        { x: 0.1661, y: 0.5089},  
        { x: 0.2337, y: 0.5445},
        { x: 0.2608, y: 0.558},
        { x: 0.3273, y: 0.5826},
        { x: 0.3965, y: 0.6122}, 
        { x: 0.5198, y: 0.6599},
        { x: 0.6763, y: 0.7385},
        { x: 0.7472, y: 0.7815},
       { x: 0.8943, y: 0.8943},
       { x: 1.0, y: 1.0},
      
         
        ]
      }
      ]
    });

    chart.render();
  
}
////T y-x diagram/////
function plotTyx(){
 document.getElementById('closediv').style.display="block";
 document.getElementById('chartContainer2').style.display="block";
 var chart = new CanvasJS.Chart("chartContainer2",
    {
      title:{
      text: "T_x-y Diagram( for the EtOH-water binary mixture)",
	  fontSize:17,
	  fontFamily:"Times new roman",
	  fontColor:"#1A7A87",
      },
	  
	  axisX:{
        interlacedColor: "#CCF6FB",
        title: "X_Y EtOH",
		//titleFontColor:"#27ACBD"
		},
	  
      axisY:{
		title: "T\u00B0c"
      //interval:2000,
      //maximum:6000,
      //minimum:-6000
    },
      axisY2:{
		title: "Ty" ,
		  
	  },
       data: [
      {        
        type: "spline",
		showInLegend: true,
		color:"#27ACBD",
		name:"Tx",
        dataPoints: [
         
        { x: 0.0,   y: 100 },
		{ x: 0.0966,y:  86.62,markerColor:"red",toolTipContent:"Bubble Point:86.62\u00B0c"},
        { x: 0.1238, y: 85.3},
	    { x: 0.2337, y: 82.7},
        { x: 0.3273, y: 81.5},
        { x: 0.4, y: 80.7}, 
        { x: 0.5198, y: 79.7},
        { x: 0.6763, y: 78.7},
        { x: 0.7472, y: 78.4},
       { x: 0.8943, y: 78.2},
       { x: 1.0, y: 78.3},
      
         
	  ]},
	  {
		  type:"spline",
		  showInLegend: true,
		  color:"green",
		  name:"Ty",
		  dataPoints:[
		  { x: 0.0,   y: 100 },
        { x: 0.1, y: 95.3},
	    //{ x: 0.2337, y: 90.97,markerColor:"yellow"},
        { x: 0.3891, y: 89.0},
        { x: 0.4375, y: 86.7}, 
        { x: 0.5089, y: 84.1},
        { x: 0.6122, y: 80.7},
        { x: 0.7385, y: 78.7},
       { x: 0.8943, y: 78.2},
       { x: 1.0, y: 78.3},
      
         
	  ]}
		
     ] 
    });

    chart.render();
  
}





///hide div////
function hideplot(){
	document.getElementById('chartContainer').style.display="none";
	document.getElementById('closediv').style.display="none";
	document.getElementById('chartContainer2').style.display="none";
}
































