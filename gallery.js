const imgs=document.querySelectorAll("main img");

imgs.forEach(img=>{
img.addEventListener("click",()=>{
const overlay=document.createElement("div");
overlay.style.position="fixed";
overlay.style.inset="0";
overlay.style.background="rgba(0,0,0,0.85)";
overlay.style.display="flex";
overlay.style.alignItems="center";
overlay.style.justifyContent="center";
overlay.style.zIndex="10000";

const big=img.cloneNode();
big.style.maxWidth="90%";
big.style.maxHeight="90%";
big.style.borderRadius="20px";

overlay.appendChild(big);
document.body.appendChild(overlay);

overlay.addEventListener("click",()=>{
overlay.remove();
});
});
});
