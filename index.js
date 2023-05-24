const counterDisplay = document.querySelector('h3');
let counter = 0;
const counterSeconds = document.querySelector('h2');
let seconds = 30;
const record = document.querySelector('h1');
let highest = 0;

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
        counterDisplay.textContent = "Kills : " + counter;
        bubble.remove();
    })
    setTimeout(() =>{
        bubble.remove();
    },8000)
}

function incrementSeconds(){
    seconds--;
    counterSeconds.textContent = seconds + "s";
    if(seconds === 0){
        alert("Vous avez détruit " + counter + " vaisseaux");
        response = "";
        while(response != "oui" && response != "non"){
            response = prompt("Voulez-vous rejouer ? (oui ou non)");
        }
        if(counter > highest){
            highest = counter;
            record.textContent = "Record " + highest;
        }
        promptDemand(response);
    }
}

function promptDemand(response){
    if(response === "oui"){
        seconds = 30;
        counter = 0;
        counterSeconds.textContent = seconds;
        counterDisplay.textContent = "Kills : " +counter;
    }
    else if(response === "non"){
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley');
        seconds = 30;
        counter = 0;
        counterSeconds.textContent = seconds;
        counterDisplay.textContent = "Kills : " +counter;
    }
}

alert("Ready ?");

setInterval(incrementSeconds, 1000);
setInterval(bubblePlayer,300);

