let input = document.querySelector("input");
let btn = document.querySelector(".btn");
let boxs=document.querySelectorAll(".box");
let drag = null;

btn.onclick = function(){

    if(input.value !=''){

        boxs[0].innerHTML += `
        <p class='itme' draggable="true">${input.value}<p/>

        `
        input.value = "";
    }
    dragItme();
}

function dragItme(){
    let Itmes = document.querySelectorAll('.itme');
    
    Itmes.forEach((itme)=>{
    
        itme.addEventListener('dragstart',function(){
        
            itme.style.opacity='0.5';
            drag = itme;
        })
        itme.addEventListener('dragend',function(){
            itme.style.opacity='1';
            drag = null;
        })
        
        boxs.forEach(box=>{

            box.addEventListener("dragover", function(e){
            
                e.preventDefault();
                this.style.background ='#f28482';
                this.style.color = '#fff';
            })
            box.addEventListener("dragleave", function(){

                this.style.background ='#fff';
                this.style.color = 'black';
            })
            box.addEventListener("drop",function(){

                this.append(drag);
                
                this.style.background ='#fff';
                this.style.color = 'black';

            })
        })
    })

}