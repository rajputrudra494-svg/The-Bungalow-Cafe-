document.querySelectorAll("nav a").forEach(link=>{
link.addEventListener("click",()=>{
document.body.classList.remove("nav-open");
});
});
