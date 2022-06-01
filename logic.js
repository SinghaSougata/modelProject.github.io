const openEle=document.querySelector(".model-btn");
const closeEle=document.querySelector(".close-btn");

const modelOver= document.querySelector(".model-overlay");

openEle.addEventListener("click",function(){
    modelOver.classList.add('show');
});
closeEle.addEventListener("click",function(){
    modelOver.classList.remove('show');
})