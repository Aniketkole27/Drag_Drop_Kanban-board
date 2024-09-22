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
        const afterElement = getDragAfterElement(drag, event.clientY);
        if (afterElement == null) {
            drag.appendChild(dragItem);
        } else {
            drag.insertBefore(dragItem, afterElement);
        }
    })

    drag.addEventListener("dragleave",()=>{
        drag.classList.add("hover");
    })

    drag.addEventListener("drop",(event)=>{
        drag.classList.remove("hover");
        dragItem = null;
        // if(dragItem){
        //     drag.appendChild(dragItem)
        //     dragItem = null;
        // }

        // if (dragItem) {
        //     const container = drag.parentNode;
        //     container.insertBefore(dragItem, drag);
        // }
    })
})

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.fbox:not(.hide)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.width;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}


// drag.addEventListener("dragover",(event) =>{
//     event.preventDefault();
// })
// drag.addEventListener("drop",(event)=>{
//     if(dragItem){
//        drag.appendChild(dragItem);
//        dragItem = null;
//     }
// })


