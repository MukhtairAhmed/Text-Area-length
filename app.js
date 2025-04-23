var len = 60;
var user_data = document.getElementById("data");
var res = document.getElementById("res");
res.textContent = 0 + "/" + len;
user_data.addEventListener("input",function(){
let max_length = user_data.value.length;
res.textContent =  max_length + "/" + len;

if(max_length > len){
    user_data.style.background = "tan";
}else{
    user_data.style.background = "blue";
}
});