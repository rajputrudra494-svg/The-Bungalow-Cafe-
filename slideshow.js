const hero=document.getElementById("hero");

if(hero){
const images=hero.querySelectorAll("img");
let index=0;

if(images.length>1){
images.forEach((img,i)=>{
img.style.position="absolute";
img.style.inset="0";
img.style.opacity=i===0?"1":"0";
img.style.transition="opacity 1s ease";
});

setInterval(()=>{
images[index].style.opacity="0";
index=(index+1)%images.length;
images[index].style.opacity="1";
},5000);
}
}
