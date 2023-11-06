// let test=document.querySelector(".day .prog");
// test.style.backgroundColor="blue";


let boxes=document.querySelectorAll(".box-container .box .text span");
let actSection=document.querySelector(".Activity");
let spans=document.querySelectorAll(".prog span");




window.onload=function(){
 
    spans.forEach(function (span){
        span.style.height=span.dataset.height;
    }); 
       
        boxes.forEach(function(span){
           let reach=+span.getAttribute("data");
        //    +span.textContent+10
        function countup(){
           if(+span.innerHTML!= reach){
                span.innerHTML= +span.innerHTML+1;
            }
        }
        setInterval(countup,100);

       
        });
 
}
