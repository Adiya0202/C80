var names=[];
function submit(){
var name1=document.getElementById("student_1").value;
names.push(name1);
document.getElementById("display").innerHTML=names.toString();
}
function show(){
    var i=names.join("<br>");
    document.getElementById("t1").innerHTML=i.toString();
}
function searching(){
 var s=document.getElementById("s1").value;
 var gc;
 var found=0;
 for(gc=0; gc<names.length;gc++){
if(s==names[gc]){
    found=found+1;
}
 }
 document.getElementById("t2").innerHTML="Name Found"+found+"times";
}