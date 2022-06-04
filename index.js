// Your code here

//MOVING THE DODGER TO THE LEFT
const dodger = document.getElementById('dodger');
function moveDodgerLeft(){
    const leftPosition = dodger.style.left.replace('px','');
    const left = parseInt(leftPosition,10);

    if(left > 0){
        dodger.style.left=`${left-1}px`;
    }
}

//MOVING THE DODGER TO THE RIGHT
function moveDodgerRight(){
    const rightPosition = dodger.style.left.replace('px','');
    const right = parseInt(rightPosition,10);

    if(right >= 0 && right<360){
       dodger.style.left=`${right+1}px`;
    }
}

//MOVING TOP--trial
function moveDodgerTop(){
    const bottomPosition =dodger.style.bottom.replace('px','');
    const bottom = parseInt(bottomPosition,10);

    if(bottom>=0 && bottom<380){
      dodger.style.bottom=`${bottom+1}px`;
    }
}

//ADDING THE EVENTLISTENER
document.addEventListener('keydown',function(event){
    console.log(event);
    if(event.key === "ArrowLeft"){
       moveDodgerLeft();
    }else if(event.key === "ArrowRight"){
       moveDodgerRight();
          
    }else if(event.key === 'ArrowUp'){
        moveDodgerTop();
    }
});




