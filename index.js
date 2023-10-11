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

//1)a- Creating bubbles inside bottom panel using JS loop (way#2)(better way)

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

// let initial_time= 60;

// let timer=document.querySelector('#timer');
// timer.innerHTML= initial_time;

// function update_time()
//  {
//     if (timer.innerHTML >0) 
//     {
//         timer.innerHTML--;
//     } else 
//     {
//         alert("Sorry, Your time is over!")
//         clearInterval(1);
//     }    
// }

// setInterval(update_time, 1000);

//2)b- Activating Timer (way#2)(better way)
let time=20;
// Update time function will update time inside html timer
function update_time() 
{
    if (time > 0) 
    {
        time --;
        document.querySelector('#timer').innerHTML=time;
        
    }
    else
    {
        alert("Your time is over!");
        clearInterval(1); 
    }
}
setInterval(update_time, 1000);

// 3) Activating Hit

let hit_no = Math.floor(Math.random()*10);
document.querySelector('#hit').innerHTML=hit_no;

// 4) Activating Score

let All_bubbles= document.querySelectorAll('.bubble');

All_bubbles.forEach(bubble => {

    bubble.addEventListener('click',()=>{
        
        if (bubble.innerHTML == hit_no ) 
        {
            document.querySelector('#score').innerHTML++;
            // Generating new number every time user clicks on bubble.
            bubble.innerHTML=null;
            bubble.innerHTML=Math.floor(Math.random()*10);
        } 
        else 
        {
            // console.log("not equal");  
            bubble.innerHTML=null;
            bubble.innerHTML=Math.floor(Math.random()*10);  
        }

        })
    
});
