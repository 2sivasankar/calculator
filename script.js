function myfunction(v) {
    document.getElementsByClassName("display-output")[0].value += v;
}
const btn=document.getElementById("change");
function random(number){
    return Math.floor(Math.random()*(number+1));

}
btn.addEventListener("click",()=>{
    const color=`rgb(${random(255)},${random(255)},${random(255)})`;
    document.body.style.backgroundColor=color;

});