function generate(){
    var str ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad in veritatis error, fugiat voluptate omnis nobis saepe hic aspernatur facere?";

var strArray = str.split(" ");
var finalStr = "";

for(i = 0; i < document.getElementById("number").value; i++){

    var x = Math.floor(Math.random()*20);
    finalStr=finalStr+strArray[x]+" "; }
document.getElementById('textA').value = finalStr;
}