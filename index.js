// 1) Creating bubbles inside bottom panel using JS loop (way#1)

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

// Creating bubbles inside bottom panel using JS loop (way#2)(better way)

function bubblegenenrator() 
{
    let container="";

for (let i = 1; i <= 144; i++) 
{
    let randomno= Math.floor(Math.random()*10);
    // use += so that previous value doesnot got overwritten by new one.
    container += `<div class="bubble">${randomno}</div>`;
    document.querySelector('.panelbottom').innerHTML=container;
}
}
bubblegenenrator();

// 2) Activating Timer

let initial_time= 5;

let timer=document.querySelector('#timer');
timer.innerHTML= initial_time;

function update_time()
 {
    if (timer.innerHTML >0) 
    {
        timer.innerHTML--;
    } else 
    {
        alert("Sorry, Your time is over!")
        clearInterval(1);
    }    
}

setInterval(update_time, 1000);

