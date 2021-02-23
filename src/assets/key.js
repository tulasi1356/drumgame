function myfunction()
{
   window.addEventListener("keyup", checkKeyPress, false);
// The parameters of the event listener are event, function to run, useCapture (optional).
// This event listener runs checkKeyPress function when a key is pressed down
// You can use keydown or keyup to check what key has been pressed or released
// this function checks to see if the letter 'a' key has been pressed
let a=0;
let b=0;
let c=0;
let d=0;
let e=0;
let f=0;
let g=0;
let h=0;
let i=0;
var count=0;
function checkKeyPress(key) {
 if (key.keyCode == "49") {
    let audio = new Audio();
    audio.src = "../assets/183097__dwsd__bd-doitlive.wav";
    audio.play();
 
   if(count==0)
   {
      var x=1
      var y="toms"
      var z="snare"
      var x1="bass"
      var y1="cello"
      var z1="alph"
      var x2="picolo"
      var y2="hi-hat"
      var z2="sax";
      // document.getElementById("myP").innerHTML = x.toString() 
      document.getElementById("myP1").innerHTML = y.toString() 
      document.getElementById("myP2").innerHTML = z.toString() 
      document.getElementById("myP3").innerHTML = x1.toString() 
      document.getElementById("myP4").innerHTML = y1.toString() 
      document.getElementById("myP5").innerHTML = z1.toString() 
      document.getElementById("myP6").innerHTML = x2.toString() 
      document.getElementById("myP7").innerHTML = y2.toString() 
      document.getElementById("myP8").innerHTML = z2.toString() 
      // document.getElementById("myP").style.color = "#0ff52a";
      document.getElementById("myP").innerHTML = x.toString() ;
      document.getElementById("myP").style.color = "#faf337"; 
      count=count+1;
   }
   else{
      // var x="kick"
      var y="toms"
      var z="snare"
      var x1="bass"
      var y1="cello"
      var z1="alph"
      var x2="picolo"
      var y2="hi-hat"
      var z2="sax";
      // document.getElementById("myP").innerHTML = x.toString() 
      document.getElementById("myP1").innerHTML = y.toString() 
      document.getElementById("myP2").innerHTML = z.toString() 
      document.getElementById("myP3").innerHTML = x1.toString() 
      document.getElementById("myP4").innerHTML = y1.toString() 
      document.getElementById("myP5").innerHTML = z1.toString() 
      document.getElementById("myP6").innerHTML = x2.toString() 
      document.getElementById("myP7").innerHTML = y2.toString() 
      document.getElementById("myP8").innerHTML = z2.toString() 
      document.getElementById("myP").style.color = "#0ff52a";
      count=0;
   }
 }
 if (key.keyCode == "50") {
    let audio = new Audio();
    audio.src="../assets/34843__zin__low-floor-tom-punk.wav";
    audio.play();
    var x=2;
   //  var d=2;
   // var count=0;
    document.getElementById("myP1").innerHTML = x.toString() 
   
   //   document.getElementById("myP1").style.color = "#faf337";
     if(count==0)
     {
      var x="kick"
      // var y="toms"
      var z="snare"
      var x1="bass"
      var y1="cello"
      var z1="alph"
      var x2="picolo"
      var y2="hi-hat"
      var z2="sax";
      document.getElementById("myP").innerHTML = x.toString() 
      // document.getElementById("myP1").innerHTML = y.toString() 
      document.getElementById("myP2").innerHTML = z.toString() 
      document.getElementById("myP3").innerHTML = x1.toString() 
      document.getElementById("myP4").innerHTML = y1.toString() 
      document.getElementById("myP5").innerHTML = z1.toString() 
      document.getElementById("myP6").innerHTML = x2.toString() 
      document.getElementById("myP7").innerHTML = y2.toString() 
      document.getElementById("myP8").innerHTML = z2.toString() 
      // var x="kick"
      // document.getElementById("myP").innerHTML = x.toString() 
        document.getElementById("myP1").style.color = "#faf337";
        count=count+1;
     }
     else{
      var x="kick"
      // var y="toms"
      var z="snare"
      var x1="bass"
      var y1="cello"
      var z1="alph"
      var x2="picolo"
      var y2="hi-hat"
      var z2="sax";
      document.getElementById("myP").innerHTML = x.toString() 
      // document.getElementById("myP1").innerHTML = y.toString() 
      document.getElementById("myP2").innerHTML = z.toString() 
      document.getElementById("myP3").innerHTML = x1.toString() 
      document.getElementById("myP4").innerHTML = y1.toString() 
      document.getElementById("myP5").innerHTML = z1.toString() 
      document.getElementById("myP6").innerHTML = x2.toString() 
      document.getElementById("myP7").innerHTML = y2.toString() 
      document.getElementById("myP8").innerHTML = z2.toString() 
        document.getElementById("myP1").style.color = "#0ff52a";
        count=0;
     }
 }
 if(key.keyCode == "51")
 {
   
    let audio = new Audio();
    audio.src="../assets/270156__theriavirra__04c-snare-smooth-cymbals-snares.wav";
    audio.play();
   //  document.getElementById("myP2").style.color = "#faf337";
   var x=3;
   document.getElementById("myP2").innerHTML = x.toString() 
   if(count==0)
   {
      var x="kick"
      var y="toms"
      // var z="snare"
      var x1="bass"
      var y1="cello"
      var z1="alph"
      var x2="picolo"
      var y2="hi-hat"
      var z2="sax";
      document.getElementById("myP").innerHTML = x.toString() 
      document.getElementById("myP1").innerHTML = y.toString() 
      // document.getElementById("myP2").innerHTML = z.toString() 
      document.getElementById("myP3").innerHTML = x1.toString() 
      document.getElementById("myP4").innerHTML = y1.toString() 
      document.getElementById("myP5").innerHTML = z1.toString() 
      document.getElementById("myP6").innerHTML = x2.toString() 
      document.getElementById("myP7").innerHTML = y2.toString() 
      document.getElementById("myP8").innerHTML = z2.toString() 

      document.getElementById("myP2").style.color = "#faf337";
      count=count+1;
   }
   else{
      var x="kick"
      var y="toms"
      // var z="snare"
      var x1="bass"
      var y1="cello"
      var z1="alph"
      var x2="picolo"
      var y2="hi-hat"
      var z2="sax";
      document.getElementById("myP").innerHTML = x.toString() 
      document.getElementById("myP1").innerHTML = y.toString() 
      // document.getElementById("myP2").innerHTML = z.toString() 
      document.getElementById("myP3").innerHTML = x1.toString() 
      document.getElementById("myP4").innerHTML = y1.toString() 
      document.getElementById("myP5").innerHTML = z1.toString() 
      document.getElementById("myP6").innerHTML = x2.toString() 
      document.getElementById("myP7").innerHTML = y2.toString() 
      document.getElementById("myP8").innerHTML = z2.toString() 
      document.getElementById("myP2").style.color = "#0ff52a";
      count=0;
   }
 }
 if(key.keyCode == "52")
 {
   var x=4;
   document.getElementById("myP3").innerHTML = x.toString() 
    let audio = new Audio();
    audio.src="../assets/171488__xicecoffeex__savannah-open-hh.wav";
    audio.play();
    document.getElementById("myP3").style.color = "#faf337";
    if(count==0)
   {
      document.getElementById("myP3").style.color = "#faf337";
      count=count+1;
      var x="kick"
      var y="toms"
      var z="snare"
      // var x1="bass"
      var y1="cello"
      var z1="alph"
      var x2="picolo"
      var y2="hi-hat"
      var z2="sax";
      document.getElementById("myP").innerHTML = x.toString() 
      document.getElementById("myP1").innerHTML = y.toString() 
      document.getElementById("myP2").innerHTML = z.toString() 
      // document.getElementById("myP3").innerHTML = x1.toString() 
      document.getElementById("myP4").innerHTML = y1.toString() 
      document.getElementById("myP5").innerHTML = z1.toString() 
      document.getElementById("myP6").innerHTML = x2.toString() 
      document.getElementById("myP7").innerHTML = y2.toString() 
      document.getElementById("myP8").innerHTML = z2.toString() 
   }
   else{
      document.getElementById("myP3").style.color = "#0ff52a";
      count=0;
      var x="kick"
      var y="toms"
      var z="snare"
      // var x1="bass"
      var y1="cello"
      var z1="alph"
      var x2="picolo"
      var y2="hi-hat"
      var z2="sax";
      document.getElementById("myP").innerHTML = x.toString() 
      document.getElementById("myP1").innerHTML = y.toString() 
      document.getElementById("myP2").innerHTML = z.toString() 
      // document.getElementById("myP3").innerHTML = x1.toString() 
      document.getElementById("myP4").innerHTML = y1.toString() 
      document.getElementById("myP5").innerHTML = z1.toString() 
      document.getElementById("myP6").innerHTML = x2.toString() 
      document.getElementById("myP7").innerHTML = y2.toString() 
      document.getElementById("myP8").innerHTML = z2.toString() 
   }
 }
 if(key.keyCode == "53")
 {
   var x=5;
   document.getElementById("myP4").innerHTML = x.toString() 
    let audio = new Audio();
    audio.src="  ../assets/87238__zgump__bass-rvb-4.wav";
    audio.play();
   //  document.getElementById("myP4").style.color = "#faf337";
   if(count==0)
   {
      document.getElementById("myP4").style.color = "#faf337";
      count=count+1;
      var x="kick"
      var y="toms"
      var z="snare"
      var x1="bass"
      // var y1="cello"
      var z1="alph"
      var x2="picolo"
      var y2="hi-hat"
      var z2="sax";
      document.getElementById("myP").innerHTML = x.toString() 
      document.getElementById("myP1").innerHTML = y.toString() 
      document.getElementById("myP2").innerHTML = z.toString() 
      document.getElementById("myP3").innerHTML = x1.toString() 
      // document.getElementById("myP4").innerHTML = y1.toString() 
      document.getElementById("myP5").innerHTML = z1.toString() 
      document.getElementById("myP6").innerHTML = x2.toString() 
      document.getElementById("myP7").innerHTML = y2.toString() 
      document.getElementById("myP8").innerHTML = z2.toString() 
   }
   else{
      var x="kick"
      var y="toms"
      var z="snare"
      var x1="bass"
      // var y1="cello"
      var z1="alph"
      var x2="picolo"
      var y2="hi-hat"
      var z2="sax";
      document.getElementById("myP").innerHTML = x.toString() 
      document.getElementById("myP1").innerHTML = y.toString() 
      document.getElementById("myP2").innerHTML = z.toString() 
      document.getElementById("myP3").innerHTML = x1.toString() 
      // document.getElementById("myP4").innerHTML = y1.toString() 
      document.getElementById("myP5").innerHTML = z1.toString() 
      document.getElementById("myP6").innerHTML = x2.toString() 
      document.getElementById("myP7").innerHTML = y2.toString() 
      document.getElementById("myP8").innerHTML = z2.toString() 
      document.getElementById("myP4").style.color = "#0ff52a";
      count=0;
   }
 }
 if(key.keyCode == "54")
 {
   var x=6;
   document.getElementById("myP5").innerHTML = x.toString() 
    let audio = new Audio();
    audio.src=" ../assets/337899__fschaeffer__34cello.wav";
    audio.play();
   //  document.getElementById("myP5").style.color = "#faf337";
   if(count==0)
   {
      document.getElementById("myP5").style.color = "#faf337";
      count=count+1;
      var x="kick"
      var y="toms"
      var z="snare"
      var x1="bass"
      var y1="cello"
      // var z1="alph"
      var x2="picolo"
      var y2="hi-hat"
      var z2="sax";
      document.getElementById("myP").innerHTML = x.toString() 
      document.getElementById("myP1").innerHTML = y.toString() 
      document.getElementById("myP2").innerHTML = z.toString() 
      document.getElementById("myP3").innerHTML = x1.toString() 
      document.getElementById("myP4").innerHTML = y1.toString() 
      // document.getElementById("myP5").innerHTML = z1.toString() 
      document.getElementById("myP6").innerHTML = x2.toString() 
      document.getElementById("myP7").innerHTML = y2.toString() 
      document.getElementById("myP8").innerHTML = z2.toString() 
   }
   else{
      var x="kick"
      var y="toms"
      var z="snare"
      var x1="bass"
      var y1="cello"
      // var z1="alph"
      var x2="picolo"
      var y2="hi-hat"
      var z2="sax";
      document.getElementById("myP").innerHTML = x.toString() 
      document.getElementById("myP1").innerHTML = y.toString() 
      document.getElementById("myP2").innerHTML = z.toString() 
      document.getElementById("myP3").innerHTML = x1.toString() 
      document.getElementById("myP4").innerHTML = y1.toString() 
      // document.getElementById("myP5").innerHTML = z1.toString() 
      document.getElementById("myP6").innerHTML = x2.toString() 
      document.getElementById("myP7").innerHTML = y2.toString() 
      document.getElementById("myP8").innerHTML = z2.toString() 
      document.getElementById("myP5").style.color = "#0ff52a";
      count=0;
   }
 }
 if(key.keyCode == "55")
 {
   var x=7;
   document.getElementById("myP6").innerHTML = x.toString() 
    let audio = new Audio();
    audio.src=" ../assets/175540__alphasnk__flo-x-regis-cb-e1.wav";
    audio.play();
   //  document.getElementById("myP6").style.color = "#faf337";
   if(count==0)
   {
      document.getElementById("myP6").style.color = "#faf337";
      count=count+1;
      var x="kick"
      var y="toms"
      var z="snare"
      var x1="bass"
      var y1="cello"
      var z1="alph"
      // var x2="picolo"
      var y2="hi-hat"
      var z2="sax";
      document.getElementById("myP").innerHTML = x.toString() 
      document.getElementById("myP1").innerHTML = y.toString() 
      document.getElementById("myP2").innerHTML = z.toString() 
      document.getElementById("myP3").innerHTML = x1.toString() 
      document.getElementById("myP4").innerHTML = y1.toString() 
      document.getElementById("myP5").innerHTML = z1.toString() 
      // document.getElementById("myP6").innerHTML = x2.toString() 
      document.getElementById("myP7").innerHTML = y2.toString() 
      document.getElementById("myP8").innerHTML = z2.toString() 
   }
   else{
      var x="kick"
      var y="toms"
      var z="snare"
      var x1="bass"
      var y1="cello"
      var z1="alph"
      // var x2="picolo"
      var y2="hi-hat"
      var z2="sax";
      document.getElementById("myP").innerHTML = x.toString() 
      document.getElementById("myP1").innerHTML = y.toString() 
      document.getElementById("myP2").innerHTML = z.toString() 
      document.getElementById("myP3").innerHTML = x1.toString() 
      document.getElementById("myP4").innerHTML = y1.toString() 
      document.getElementById("myP5").innerHTML = z1.toString() 
      // document.getElementById("myP6").innerHTML = x2.toString() 
      document.getElementById("myP7").innerHTML = y2.toString() 
      document.getElementById("myP8").innerHTML = z2.toString() 
      document.getElementById("myP6").style.color = "#0ff52a";
      count=0;
   }
 }
 if(key.keyCode == "56")
 {
   var x=8;
   document.getElementById("myP7").innerHTML = x.toString() 
    let audio = new Audio();
    audio.src=" ../assets/62270__fresh-g__a3.wav";
    audio.play();
   //  document.getElementById("myP7").style.color = "#faf337";
   if(count==0)
   {
      document.getElementById("myP7").style.color = "#faf337";
      count=count+1;
      var x="kick"
      var y="toms"
      var z="snare"
      var x1="bass"
      var y1="cello"
      var z1="alph"
      var x2="picolo"
      // var y2="hi-hat"
      var z2="sax";
      document.getElementById("myP").innerHTML = x.toString() 
      document.getElementById("myP1").innerHTML = y.toString() 
      document.getElementById("myP2").innerHTML = z.toString() 
      document.getElementById("myP3").innerHTML = x1.toString() 
      document.getElementById("myP4").innerHTML = y1.toString() 
      document.getElementById("myP5").innerHTML = z1.toString() 
      document.getElementById("myP6").innerHTML = x2.toString() 
      // document.getElementById("myP7").innerHTML = y2.toString() 
      document.getElementById("myP8").innerHTML = z2.toString() 
   }
   else{
      var x="kick"
      var y="toms"
      var z="snare"
      var x1="bass"
      var y1="cello"
      var z1="alph"
      var x2="picolo"
      // var y2="hi-hat"
      var z2="sax";
      document.getElementById("myP").innerHTML = x.toString() 
      document.getElementById("myP1").innerHTML = y.toString() 
      document.getElementById("myP2").innerHTML = z.toString() 
      document.getElementById("myP3").innerHTML = x1.toString() 
      document.getElementById("myP4").innerHTML = y1.toString() 
      document.getElementById("myP5").innerHTML = z1.toString() 
      document.getElementById("myP6").innerHTML = x2.toString() 
      // document.getElementById("myP7").innerHTML = y2.toString() 
      document.getElementById("myP8").innerHTML = z2.toString() 
      document.getElementById("myP7").style.color = "#0ff52a";
      count=0;
   }
 }
 if(key.keyCode == "57")
 {
   var x=9;
   document.getElementById("myP8").innerHTML = x.toString() 
    let audio = new Audio();
    audio.src="../assets/496042__phonosupf__sax-multiphonic-11.wav";
    audio.play();
   //  document.getElementById("myP8").style.color = "#faf337";
   if(count==0)
   {
      document.getElementById("myP8").style.color = "#faf337";
      count=count+1;
      var x="kick"
      var y="toms"
      var z="snare"
      var x1="bass"
      var y1="cello"
      var z1="alph"
      var x2="picolo"
      var y2="hi-hat"
      // var z2="sax";
      document.getElementById("myP").innerHTML = x.toString() 
      document.getElementById("myP1").innerHTML = y.toString() 
      document.getElementById("myP2").innerHTML = z.toString() 
      document.getElementById("myP3").innerHTML = x1.toString() 
      document.getElementById("myP4").innerHTML = y1.toString() 
      document.getElementById("myP5").innerHTML = z1.toString() 
      document.getElementById("myP6").innerHTML = x2.toString() 
      document.getElementById("myP7").innerHTML = y2.toString() 
   }
   else{
      var x="kick"
      var y="toms"
      var z="snare"
      var x1="bass"
      var y1="cello"
      var z1="alph"
      var x2="picolo"
      var y2="hi-hat"
      // var z2="sax";
      document.getElementById("myP").innerHTML = x.toString() 
      document.getElementById("myP1").innerHTML = y.toString() 
      document.getElementById("myP2").innerHTML = z.toString() 
      document.getElementById("myP3").innerHTML = x1.toString() 
      document.getElementById("myP4").innerHTML = y1.toString() 
      document.getElementById("myP5").innerHTML = z1.toString() 
      document.getElementById("myP6").innerHTML = x2.toString() 
      document.getElementById("myP7").innerHTML = y2.toString() 
      // document.getElementById("myP8").innerHTML = z2.toString() 
      document.getElementById("myP8").style.color = "#0ff52a";
      count=0;
   }
 }

}
  
}