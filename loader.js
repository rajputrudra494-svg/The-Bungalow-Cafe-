window.addEventListener("load",()=>{
const loader=document.getElementById("page-loader");
if(loader){
loader.classList.add("hidden");
setTimeout(()=>{
loader.style.display="none";
},600);
}
});
