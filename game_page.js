 l=localStorage.getItem("player1");
 s=localStorage.getItem("player2");
 var p1_s=0;
 var p2_s=0;
 document.getElementById("p1_name").innerHTML=l+" : ";
 document.getElementById("p2_name").innerHTML=s+" : ";
 document.getElementById("p1_score").innerHTML=p1_s;
 document.getElementById("p2_score").innerHTML=p2_s;
 document.getElementById("p_question").innerHTML="Question turn- "+l;
 document.getElementById("p_answer").innerHTML="Answer turn- "+s;

 function send(){
var u=document.getElementById("w").value ;
q=u.toLowerCase();

c1=q.charAt(1);

l=Math.floor(q.length/2);
c2=q.charAt(l);

lminus=q.length-1;
c3=q.charAt(lminus);

rc1=q.replace(c1,"_");
rc2=rc1.replace(c2,"_");
rc3=rc2.replace(c3,"_");

questionword="<h4 id='z'> Q. "+rc3+"</h4>";
inputbox="<br> Answer: <input id='ic' type='text'>";
checkButton="<br><br><button class='btn btn-danger' onclick='bt()'>CHECK</button>";
v=questionword+inputbox+checkButton;
document.getElementById("output").innerHTML=v;
document.getElementById("w").value="";
 }
questionturn="player1";
answerturn="player2";
function bt(){
r=document.getElementById("ic").value;
r2=r.toLowerCase();
if (q==r2) {
if (answerturn=="player1") {
 p1_s=p1_s+1;  
 document.getElementById("p1_score").innerHTML=p1_s;
}  
else{
p2_s=p2_s+1;
document.getElementById("p2_score").innerHTML=p2_s;
}  
}
if (questionturn=="player1") {
questionturn="player2"; 
document.getElementById("p_question").innerHTML="Question turn- "+s;
}
else{
questionturn="player1";
document.getElementById("p_question").innerHTML="Question turn- "+l;
}
if (answerturn=="player1") {
    answerturn="player2"; 
    comsole.log(s);
    document.getElementById("p_answer").innerHTML="answer turn- "+s;
    }
    else
    { 
    answerturn="player1";
    console.log(l);
    document.getElementById("p_answer").innerHTML="answer turn- "+l;
    }
    document.getElementById("output").innerHTML="";
}