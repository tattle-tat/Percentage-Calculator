function Calculate(){
var Number=  parseInt(document.getElementsByClassName("input1")[0].value)
var Percentage=parseInt(document.getElementsByClassName("input2")[0].value)
var Answer= Number/100*Percentage
document.getElementById("ans").value=Answer;
}
