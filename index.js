// Creating bubbles inside bottom panel using JS loop (way#1)

// for (let i = 1; i < 71; i++) 
// {
//    let panelbottom=document.querySelector('.panelbottom');

//    //Creating a new element (bubble-element)
//    let newbubble= document.createElement('div');
//    //Adding a "bubble class in it."
//    newbubble.classList.add("bubble");
//    //Adding "numbering" it.
//    newbubble.innerHTML= i ;
//    //Making this new created element as child of "panel-bottom"  
//    panelbottom.append(newbubble);
    
// }

// Creating bubbles inside bottom panel using JS loop (way#2)

let container="";

for (let i = 1; i <= 144; i++) 
{
    // use += so that previous value doesnot got overwritten by new one.
    container += `<div class="bubble">${i}</div>`;
    document.querySelector('.panelbottom').innerHTML=container;
}
