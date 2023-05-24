const counterDisplay = document.querySelector('h3');
let counter = 0;


const bubblePlayer = () =>{
    const urls = ["./assets/fusee.png", "./assets/kfkfk.png", "./assets/rggrg.png"]
    const bubble = document.createElement("img");
    const random = Math.floor(Math.random()*3)
    bubble.src = urls[random];
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);
    bubble.ondragstart = function() { return false; };
    
    const size = Math.random() *200 + 100 + "px";
    bubble.style.height = size;
    bubble.style.width = size;


    const plusMinus = Math.random()> 0.5 ? 1 : -1;
    bubble.style.top = Math.random() *100 + 50 + "%";
    bubble.style.left = Math.random() *100 + "%";
    bubble.style.setProperty('--left', Math.random() *100 * plusMinus +"%" )
    bubble.addEventListener('click', () =>{
        counter ++;
        counterDisplay.textContent = counter;
        bubble.remove();
    })
    setTimeout(() =>{
        bubble.remove();
    },8000)
}


setInterval(bubblePlayer,300)