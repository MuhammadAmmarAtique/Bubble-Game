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

//1)b- Creating bubbles inside bottom panel using JS loop (way#2)(better way)

function bubblegenerator() 
{
    let container="";

for (let i = 1; i <= 220; i++) 
{
    let randomno= Math.floor(Math.random()*10);
    // use += so that previous value doesnot got overwritten by new one.
    container += `<div class="bubble">${randomno}</div>`;
    document.querySelector('.panelbottom').innerHTML=container;
}
}
bubblegenerator();

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
let time=document.querySelector('#timer').innerHTML=30;
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
        // alert("Your time is over!");
        clearInterval(1); 

       // RESULT DISPLAY
      let highestscore_str= localStorage.getItem('best_score');
      let highestscore_arr = JSON.parse(highestscore_str);

    //   getting highest number from array
      const max_no = Math.max(...highestscore_arr);


    document.querySelector('.panelbottom').innerHTML= 
    `<h1 class="result-red">Game over!</h1> 
     <h3 class="result">Previous Best Score : ${max_no}`;
    }




}

setInterval(update_time, 1000);


// 3) Activating Hit

let hit_no = Math.floor(Math.random()*10);
document.querySelector('#hit').innerHTML=hit_no;

// 4) Activating Score

// document.querySelector('#score').innerHTML=0;

// let All_bubbles= document.querySelectorAll('.bubble');

// All_bubbles.forEach(bubble => {

//     bubble.addEventListener('click',()=>{
        
//         if (bubble.innerHTML == hit_no ) 
//         {
//             document.querySelector('#score').innerHTML++;
//             // Generating new number every time user clicks on bubble.
//             bubble.innerHTML=null;
//             bubble.innerHTML=Math.floor(Math.random()*10);
//         } 
//         else 
//         {
//             // console.log("not equal");  
//             bubble.innerHTML=null;
//             bubble.innerHTML=Math.floor(Math.random()*10);  
//         }

//         })
    
// });

// 4)b- Activating Score (2ND WAY OF PLAYING GAME)(Better one)

// // setting initial value of score =0
// let score= document.querySelector('#score').innerHTML=0;

// //storing all html bubbles in "bubbles" variable
// let bubbles =document.querySelectorAll('.bubble');

// // Adding event in each bubble
// bubbles.forEach((bubble)=>{

//     bubble.addEventListener('click',()=>{

//         if (bubble.innerHTML == document.querySelector('#hit').innerHTML ) 
//         {
//             console.log("Hit & bubble value is equal");

//             // increasing score value by 10
//             // score=score+10;
//             score += 10;
//             document.querySelector('#score').innerHTML=score;

//             // regenrating random no. again for all "bubbles" and "hit"
//             bubbles.forEach((bubble)=>{
//                 bubble.innerHTML=Math.floor(Math.random()*10);
//             })
//             document.querySelector('#hit').innerHTML=Math.floor(Math.random()*10);
//         } 
//         else 
//         {
//             console.log("Hit & bubble value is not equal");
            
//         }


//     })

// })

// 4)c- Activating Score by using event bubbling concept

let score =document.querySelector("#score").innerHTML=0;

     // event bubbling
document.querySelector('.panelbottom').addEventListener('click',(bubble)=>{

    // bubble.target is the element in which user has clicked
    // console.log(bubble.target);

    if (bubble.target.innerHTML === document.querySelector('#hit').innerHTML) 
    {
        // increasing score 
        score += 10;
        document.querySelector("#score").innerHTML=score;

        // Storing score inside local storage and will use it in displaying result above when timer is finished.
        if(localStorage.getItem('best_score')==null)
        {
            let arr=[];
            arr.push([score]);
            localStorage.setItem('best_score',JSON.stringify(arr));
        }
        
        else
        {
           let arrstring=localStorage.getItem('best_score');
           arr=JSON.parse(arrstring);
           arr.push([score]);
           localStorage.setItem('best_score',JSON.stringify(arr));
        }

        // genrating new numbers inside all bubbles
        bubblegenerator();

        // genrating new number inside hit
        document.querySelector('#hit').innerHTML= Math.floor(Math.random()*10);  
    } 
   })

 