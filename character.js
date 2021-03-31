let human = {
    name:'human',
    damage:10,
    armor:0.1,
    agility:1,
    health:100,
    type:"",
    money:0,
    imageUrl:"images/swordMan.png"

}
let elf = {
    name:'elf',
    damage:10,
    armor:0.1,
    agility:1,
    health:100,
    type:"",
    money:0,
    imageUrl:"images/elfSword.png"

}
let orc = {
    name:"orc",
    damage:10,
    armor:0.1,
    agility:1,
    health:140,
    type:"",
    money:0,
    imageUrl:"images/orc.png"

}
let vampire = {
    name:'vampire',
    damage:10,
    armor:0.1,
    agility:1,
    health:100,
    type:"",
    money:0,
    imageUrl:"images/vimpire.png"

}



let hero;//global variable
let intervalHeroAtack;
let animateHitAnim;
let enemy;

function init(){
 
    
    const heroArray = [human,elf];
    const enemyArray = [orc,vampire];

    let heroIndex = prompt("Choose your hero: 0 - human, 1 - elf");
     hero = heroArray[heroIndex];
    console.log(hero)
    document.getElementById("hero").style.backgroundImage = `url(${hero.imageUrl})`;
    updateStats();
    let enemyIndex = prompt("Choose your enemy: 0 - orc, 1 - vimpire");
    enemy = enemyArray[enemyIndex];
    console.log(enemy);
    get("enemy").style.backgroundImage = `url(${enemy.imageUrl})`;
    updateEnemyStats();

   get('atack').onclick = animateHeroAtack;
}
window.onload = function(){
    init();
    
    console.log(randomInteger(1,100));
}
// visualisation of hero statistique
function updateStats(){
    get("hero-name").innerHTML = " name: " + hero.name;
    get("hero-damage").innerHTML = " damage: " + hero.damage;
    get("hero-armor").innerHTML = " armor: " + hero.armor;
    get("hero-health").innerHTML = " health: " + hero.health;
}

// visualisation of enemy statistique
function updateEnemyStats(){
    get("enemy-name").innerHTML = " name: " + enemy.name;
    get("enemy-damage").innerHTML = " damage: " + enemy.damage;
    get("enemy-armor").innerHTML = " armor: " + enemy.armor;
    get("enemy-health").innerHTML = " health: " + enemy.health;
}

// for replace : document.getElementById("")
function get(item){
    return document.getElementById(item)
}
function randomInteger(min,max){
    let randomInt = min + Math.random() * (max + 1 - min)
    return Math.round(randomInt);//roundin method
}
// for animation of hero atack
function animateHeroAtack(){
    let position = 100;
    const interval = 100;
    const diff = 425;//bias to enemy distance

    get("hero").style.transform = "translate(600px)";// for smooth transition of atack
    intervalHeroAtack = setInterval(() => {
        get("hero").style.backgroundPosition = `-${position}px -3077px`;
        if(position < 2000){
            position = position + diff
        }
        else{
            
            position = 100;
            get("hero").style.backgroundPosition = `-${position}px -3077px`;
            get("hero").style.transform = "translate(100px)";
            animateHitScript("enemy","damage-enemy-container",56);
            setTimeout(() => {
                animateEnemyAtack()
            }, 2000);
            stopAnimations(intervalHeroAtack);
        }
    }, interval);
    
}

function animateHitScript(character, damageContainer, damage) {
    let position = 0;
    const interval = 140;
    const diff = 5;
    intervalHitAnim = setInterval(() => {

      get(character).style.transform =
        `translate(0px, -${position}px)`;
      get(damageContainer).innerHTML = damage;
      get(damageContainer).style.display = "block";
      get(damageContainer).style.transform =
        `translate(0px, -${position}px)`

      if (position < 30) {
        position = position + diff;
      } else {
        position = 0;
        get(character).style.transform = "translate(0px,0px)"
        get(damageContainer).style.transform = "translate(0px,0px)"
        get(damageContainer).style.display = "none";
       stopAnimations(intervalHitAnim);
      }

    }, interval);
  }
function stopAnimations(item){
    clearInterval(item);
}

// for animation of enemy atack
function animateEnemyAtack(){
    let position = 100;
    const interval = 100;
    const diff = 425;//bias to enemy distance

    get("enemy").style.transform = "translate(-520px)";// for smooth transition of atack
    intervalHeroAtack = setInterval(() => {
        get("enemy").style.backgroundPosition = `-${position}px -3077px`;
        if(position < 2000){
            position = position + diff
        }
        else{
            
            position = 900;
            get("enemy").style.backgroundPosition = `-${position}px -3248px`;
            get("enemy").style.transform = "translate(100px)";
            animateHitScript("hero","damage-hero-container",36);
            stopAnimations(intervalHeroAtack);
        }
    }, interval);
    
}

function animateHitScript(character, damageContainer, damage) {
    let position = 0;
    const interval = 140;
    const diff = 5;
    intervalHitAnim = setInterval(() => {

      get(character).style.transform =
        `translate(0px, -${position}px)`;
      get(damageContainer).innerHTML = damage;
      get(damageContainer).style.display = "block";
      get(damageContainer).style.transform =
        `translate(0px, -${position}px)`

      if (position < 30) {
        position = position + diff;
      } else {
        position = 0;
        get(character).style.transform = "translate(0px,0px)"
        get(damageContainer).style.transform = "translate(0px,0px)"
        get(damageContainer).style.display = "none";
       stopAnimations(intervalHitAnim);
      }

    }, interval);
  }