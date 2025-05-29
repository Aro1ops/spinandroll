async function hashText(text) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}
const correctHash = '0ec3a5c3a2226141d76557641569a5f01cefeb56a0be9dd2b5bd5ecc8b7194b7'; 
let balance = parseInt(window.localStorage.getItem('balance'));
let dep = parseInt(window.localStorage.getItem('dep'));
const audio1 = new Audio('song1.mp3');
const audio2 = new Audio('song2.mp3');
const depai = new Audio('depai.mp3');
let time = null;
let repeattme = null;
let randomItem;
let randomItem2;
let randomItem3;
let depC = false;
let subaki = Math.round(Math.random(1));
let dolg =JSON.parse(localStorage.getItem('dolg'));
let cheat =JSON.parse(localStorage.getItem('cheat'));
let betik = JSON.parse(localStorage.getItem('betik'));
let dolgcartely = parseInt(window.localStorage.getItem('dolgcartely'));

window.addEventListener("scroll", () => {
  if (window.scrollX > 0) {
    window.scrollTo(0, window.scrollY);
  }
});
if (localStorage.getItem('cheat') === null) {
  
  localStorage.setItem('cheat', JSON.stringify(false));
}
if (localStorage.getItem('dolg') === null) {
  
  localStorage.setItem('dolg', JSON.stringify(false));
}
if (localStorage.getItem('betik') === null) {
  
  localStorage.setItem('betik', JSON.stringify(false));
}
if (isNaN(dolgcartely)){
    dolgcartely = 0;
    window.localStorage.setItem('dolgcartely', dolgcartely);
}
if (isNaN(balance)){
    balance = 1500;
    window.localStorage.setItem('balance', balance);
}
if (isNaN(dep)){
    dep = 100;
    window.localStorage.setItem('balance', dep);
}
async function check(){
    
    if (await hashText(document.getElementById('password').value) == correctHash){
        document.getElementById('plus').style.display = 'flex';
    }
}

function plus(){
    balance += 10000;
    localStorage.setItem('cheat', JSON.stringify(true));
    updateBalanceDisplay();
}
const slots = ["7️⃣","🍋","🍒","🍇"]
const phone = document.getElementById('phone');
window.localStorage.setItem('balance', balance);
updateBalanceDisplay();
phone.style.display = 'none';
document.getElementById('password').style.display = 'none';
document.getElementById('sum').style.display = 'none';
document.getElementById('cann').style.display = 'none';
document.getElementById('plus').style.display = 'none';
function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
function updateBalanceDisplay(){
    
    StartTime();
    window.localStorage.setItem('balance', balance);
    window.localStorage.setItem('dep', dep);
    if (balance <= 100){
        balance = 1000;
    }
    window.localStorage.setItem('dolgcartely', dolgcartely);
    if (betik === true){
        document.getElementById('koreltxt').textContent = "ТЫ СПАС ПСА";
        if (subaki == 1){
            document.getElementById('bet').src = "betik.jpg"
        } else {
            document.getElementById('bet').src = "olivka.jpg"
        }
        
    } else {
        if (subaki == 1 ){
            document.getElementById('bet').src = "betikKletka.jpg"
        } else {
            document.getElementById('bet').src = "kletkaolivka.jpg"
        }
        
    }

    
    document.getElementById('depcoin').textContent = "DEP:" + dep;
    if (cheat == true){
        document.getElementById('balance').textContent = "Balance:" + balance + "ch";
        
    } else{
        document.getElementById('balance').textContent = "Balance:" + balance;
    }
    
    if (balance>dolgcartely){
        
        balance -= dolgcartely; 

        dolgcartely = 0;
        window.localStorage.setItem('balance', balance);
    
    
        window.localStorage.setItem('dolgcartely', dolgcartely);
    }
}
function root(){
    phone.style.display = 'block'
    document.getElementById('password').style.display = 'flex';
    document.getElementById('sum').style.display = 'flex';
    document.getElementById('cann').style.display = 'flex';
    document.getElementById('plus').style.display = 'none';
}
function Bet(){
    if(balance>=10000000 && betik ==false){//100000000
        balance -=  10000000;
        
        betik = true;
        localStorage.setItem('betik', JSON.stringify(true));
   //   localStorage.setItem('dolg', JSON.stringify(false));
        updateBalanceDisplay();
    }
}

function Dolg(){
    if (dolg === false && dolgcartely < 300000){
        dolg = true;
        balance += 10000;
        dolgcartely += 30000;
        
        
        localStorage.setItem('dolg', JSON.stringify(true));
        window.localStorage.setItem('dolgcartely', dolgcartely);
        updateBalanceDisplay();

        setTimeout(() => {
            dolg = false;
            localStorage.setItem('dolg', JSON.stringify(false));
            updateBalanceDisplay();
        }, 60000);
    } else {
        setTimeout(() => {
            dolg = false;
            localStorage.setItem('dolg', JSON.stringify(false));
            updateBalanceDisplay();
        }, 60000);
    }
}
function cann(){
    phone.style.display = 'none';
    document.getElementById('password').style.display = 'none';
    document.getElementById('sum').style.display = 'none';
    document.getElementById('cann').style.display = 'none';
    document.getElementById('plus').style.display = 'none';
}
function remove(){
    balance = 1000;
    dolgcartely += 30000;
        
        
    localStorage.setItem('dolg', JSON.stringify(false));
    window.localStorage.setItem('dolgcartely', 0);

    updateBalanceDisplay();
}
function Deps(){
    
   
    dep = dep + 100;
    
    updateBalanceDisplay();
}
function Depc(){
    if  (dep<=50){
        dep = dep;
    }
    else{
        dep = dep - 1000;
    }
    updateBalanceDisplay();
}
function StartTime(){
    clearTimeout(time);
    clearTimeout(repeattme);
    depai.pause();
    depai.currentTime = 0;

    time = setTimeout(() => {
        depai.play();
        repeattme = setTimeout(() => {
            StartTime();
        }, 40000);
    }, 60000);     
}

function Dep(){
    if(balance <=0 && depC == true){

    }else{
        if (balance>=dep && depC == false){
            
            StartTime();
            depai.pause();
            depai.currentTime = 0;
            audio1.pause();
            audio1.currentTime = 0;
            audio2.pause();
            audio2.currentTime = 0;

            clearTimeout(time);
            clearTimeout(repeattme);
            let rand = Math.round(Math.random(1));
            if (rand==1){
                audio1.play();
            } else {
                audio2.play();
            }
    
           
            depC = true;
            let interval;
            let curretdep = dep;
            balance = balance - dep;
            interval = setInterval(() => {
                randomItem = slots[Math.floor(Math.random() * slots.length)];
                document.getElementById('slot1').textContent = randomItem;
            }, 100);
            setTimeout(() => {
                clearInterval(interval);
            }, 3000);
            interval2 = setInterval(() => {
                randomItem2 = slots[Math.floor(Math.random() * slots.length)];
                document.getElementById('slot2').textContent = randomItem2;
            }, 100);
            setTimeout(() => {
                clearInterval(interval2);
            }, 4500);
            interval3 = setInterval(() => {
                randomItem3 = slots[Math.floor(Math.random() * slots.length)];
                document.getElementById('slot3').textContent = randomItem3;
            }, 100);
            setTimeout(() => {
                clearInterval(interval3);
            }, 6000); //const slots = ["💣","7️⃣","🍋","🍒","🍇"]
            setTimeout(() =>{
                if (randomItem === "💣" && randomItem2 === "💣" && randomItem3 === "💣"){
                    balance -= curretdep * 2;
                }
                else if (randomItem === "7️⃣" && randomItem2 === "7️⃣" && randomItem3 === "7️⃣"){
                    balance += curretdep * 10;
                }
                else if (randomItem === "🍋" && randomItem2 === "🍋" && randomItem3 === "🍋"){
                    balance += curretdep * 2;
                }
                else if (randomItem === "🍒" && randomItem2 === "🍒" && randomItem3 === "🍒"){
                    balance += curretdep * 2;
                }
                else if (randomItem === "🍇" && randomItem2 === "🍇" && randomItem3 === "🍇"){
                    balance += curretdep * 2;
                }
                else if ((randomItem === "🍇" || randomItem === "🍋" || randomItem === "🍒") && (randomItem2 === "🍇" || randomItem2 === "🍋" || randomItem2 === "🍒") && (randomItem3 === "🍇" || randomItem3 === "🍋" || randomItem3 === "🍒")){
                    balance = balance + curretdep * 1.2;
                } 
                else {
                    setTimeout(() => {
                        document.getElementById('slot1').textContent = "До";
                        document.getElementById('slot2').textContent = "де";
                        document.getElementById('slot3').textContent = "п!";
                    }, 700);
                    
                }
                depC = false;
                updateBalanceDisplay();
            }, 6010);
            
            updateBalanceDisplay();
        }
        
    }
    
}
