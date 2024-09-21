const boxes = document.querySelectorAll(".fbox");
const dragArea = document.querySelectorAll(".f_row");
// const drag = document.querySelector(".last");
let dragItem = null;

boxes.forEach((box) =>{
    box.addEventListener("dragstart",(event)=>{
        dragItem = event.target; 
        console.log(dragItem)
        
        event.target.classList.add('hold');  
        setTimeout(()=>{
            event.target.classList.add('hide');
        },0);
    });
    
    box.addEventListener("dragend",(event)=>{
        event.target.classList.remove('hold','hide');
    });

});

dragArea.forEach((drag) =>{
    drag.addEventListener("dragover",(event)=>{
        event.preventDefault();
    })

    drag.addEventListener("dragleave",()=>{
        drag.classList.add("hover");
    })

    drag.addEventListener("drop",(event)=>{
        drag.classList.remove("hover");

        if(dragItem){
            drag.appendChild(dragItem)
            dragItem = null;
        }
    })
})


// drag.addEventListener("dragover",(event) =>{
//     event.preventDefault();
// })
// drag.addEventListener("drop",(event)=>{
//     if(dragItem){
//        drag.appendChild(dragItem);
//        dragItem = null;
//     }
// })


