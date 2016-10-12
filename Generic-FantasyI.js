//1.Player
//2.3 different enemies
//3.Battle with prompts
//4.Stats (health etc.)
//5.Items (weapons etc)
//6.Story prompts and alerts
prompt("Our story begins in the small humble beginnings of an unlikely hero. Our hero wanders from land to land, searching for evil to vanquish and maidens to save.");
prompt("After wandering all day, our hero stumbles upon a small town outside the confines of the great city of Divendell. Our hero decides to stay at the small villages inn, (Not that he couldn't afford to stay at the cities in, he has the coin...*cough*)");
prompt("After sleeping through the night, the hero decides to leave the small inn.");
var hero = {
    name: window.prompt("hero"),
    class: "Knight",
    health: 150,
    damage: 25,
    level: 1,
    Inventory: ["Old tarnished armor set, old battered shield, and standard broadsword."]
    messenger: function (message) {alert("Does all of this look right to you? " + message);
    }
}

var Bandit = {
    name: "Bandit",
    health: 100,
    damage: 10,
    level: 2,
    loot: ["10G, longsword"];
}

var BlackKnight = {
    name: "BlackKnight",
    health: 500,
    damage: 50,
    level: 5,
    loot: ["500G, Steel chestArmor"];
}

var forestSpider = {
    name: "forestSpider",
    health: 250,
    damage: 25,
    level: 3,
    loot: ["150G, Venemous sac"];
}
prompt("Once awakening and leaving the town inn, you've found that the town is being terrorized by bandits!");
var weapon = prompt("The bandits are terrorizing the town, now is your time to prove yourself hero! What weapon do you have to defend yourseflf? A handaxe, a shortsword, or a spear?");
var randomNumber = Math.floor((Math.random() * 3) + 1);
 
alert("You attack the Bandit with your" + " " + weapon);
 
if(randomNumber === 1){
    alert("You rush into battle, aching to prove your worth to the local townspeople, you fail miserably. You died!!");
    outcome = Game Over!
} else if (randomNumber === 2){
alert("You rush into battle raising your" + " " + weapon + ". above your head and striking him with immense power, killing him on the spot.");
outcome = "victory"
character.level++;
}
 
else if (randomNumber === 3){
alert("As you run towards the nearest vile villian just before you attack him a nearby piece of house rubble falls down on him crushing him to death, poor bloke.");
outcome = "victory"
character.level++;
}
 
if(randomnumber === 1 && 3){
    prompt("After a long battle the Bandits are driven off back to where they came from, the townspeople praise you! Well done hero!");
    prompt("You found a longsword and 10G, hooray!");
} else if (randomNumber === 2){
    prompt("You died and failed your quest for glory, better luck next time hero.");
}

prompt("After fending off the invading bandits, you hear from one of the villagers that a large forest spider has taken someones child. You tell the villager that you will return with the creatures head.");
prompt("You follow down the treaden path in the forest. Time starts to feel like it's slowing down, and after not too long you lose your way. You are lost.");
prompt("You soon start to lose faith in finding this spider and saving the child, but just as you are about to give up hope and make a camp for the night you hear rustling in a nearby bush. Once looking towards the direction you can see a cave poking out of the ground in the distance, its covered in cobwebs.");
var choice = window.prompt("You start walking towards the cave with your weapon drawn, but not before you take another step a huge forest spider comes crawling out of the gaping hole. What do you do? Attack it or try to Sneak past it?");
var randomNumber = Math.floor((Math.random() * 3) + 1);
 
if (choice === "Attack") {
    alert("You attack the Forest Spider with your" + " " + weapon);
    else if (randomNumber === 2){
        alert("You gouge your" + " " + weapon "into its head, then slice it cleanly off. This will make a good prize to show the villagers!");
        outcome = "victory"
        alert("You found 150G and a venemous sac on the spiders corpse, awesome! Wait, why does a spider carry more gold than a bandit? Don't worry about it.....")
        character.level++;
    } else if (randomNumber <= 2) {
        window.alert("You charge the spider, raising your" + " " + weapon "and screaming, but it was prepared for your attack and raises its stinger just before you reach it, impaling you in the stomach, killing you.";
        outcome = "Defeat"
    }
}
 
if (choice === "Sneak" || choice === "You sneak past the spider") {
    if (randomNumber === 3) {
        window.alert("You sneak by forest spider, it never even knew you were there!");
}
if (randomNumber < 3) {
    window.alert("You attempt to sneak past the spider, but step on some twigs snapping them and alerting the spider. It turns towards you and starts walking towards you.");
    if (randomNumber === 3) {
        window.alert("Even though you stumbled and alerted the spider of your wherabouts, you still manage to fight the beast off and slice off its head, a fine prize for the villagers!");
        outcome = "victory";
        alert("You found 150G and a venemous sac on the spiders body. Why is it that large creatures carry more gold on them than a regular human? Oh, whatever.")
        character.level++;
    } else {
        window.alert("The spider reacts too fast for you to think, it lobs a ball of webbing at you, and immobolizes you. It creeps up and stabs its stinger into your chest, you die slowly from the poision.");
        outcome = "defeat";
        }
    }
}
prompt("Killing that beast was no small feat! But nothing is too hard for you hero. Wait, you were coming into this forest to search for a missing child weren't you?");
prompt("You search the cave where the spider crawled out of. It reeks of rotting flesh. You reer in disgust as you see the childs lifeless body hanging from a string of web from the cieling. Poor thing...");
prompt("With the spiders head in your inventory (Don't ask how a giant spider head fits in your pockets, it just does okay?) you leave the cave and decide to set up camp for the night and rest up, you've earned it.");
prompt("You wake up to the sound of birds chirping, the air is clear and the sky is blue and bright. You pack up camp and set off back to the village.");
prompt("after trekking back towards the village, you notice a fog starts to creep up amoung the trees. You scoff and pass it off as nothing, but after it gets thicker and thicker you have no choice but to acknoledge its presence. Before fifteen minutes pass the fog gets so thick that you cant even see 10 feet in front of you. You push on, but stop in your tracks when you see a dark figure, tall and reeking of evil, standing in your way. Your heart races as you think back on all of the old stories you were told as a child. This creature, is a black knight. No one has ever lived to tell the tale of seeing one. Will you be the first?");
 prompt("You race towards the black kngiht, raising your" + " " + weapon "and preparing to strike with all of your might!");
 
if(randomNumber === 1){
    alert("You charge the monster, gripping your" + " " + weapon "'s handle tightly, you attack it head on! It isn't impressed by your heroism, it blocks your attack, and cleaves you clean in two.");
    outcome = "defeat"
} else if (randomNumber === 2){
alert("You focus on the target, prepping yourself for the battle ahead. You lay out an elaborate attack pattern in your head, then strike with your" + " " + weapon + ". manuvering around its massive shield, and stabbing it straight in the side. It falls to its knees, and you lob its head clean off.");
outcome = "victory"
alert("You found 500G and a enchanted steel chestArmor on its body, a small reward for a huge undertaking.")
character.level++;
}
 
else if (randomNumber === 3){
alert("You think to yourself 'there's absolutely no way that I can defeat this monster' but attempt to defend yourself regardless. You pray to your god that he spares your life. You run towards the beast with tears running down your face, this is it. Just as you are about to reach it, a tree falls over ontop of it. The knight's figure turns to dust and whisps away in the wind as if it were nothing. You turn towards the direction of the tree stump, and find a strong lumberjack from the village coming to cut firewood. He nods towards you, and walks drags the tree back towards the town.");
outcome = "victory"
alert("You found 500G and a enchanted steel chestArmor where its body would be, the items are covered in dust. A small reward for your efforts.");
character.level++;
}
 
prompt("After being shaken from your battle with the Black Knight, you decide to keep the stories to yourself. You inform the villager of the childs demise, and offer its head as revenge hoping it gives them some sort of comfort. The village rewards you 500G for your continued efforts. You may not be a dragonslayer or a Legendary war hero, but you are something that the stories are not. You're a real hero.");
 
if (outcome === "defeat") {
    window.alert("You are slain!");
} else if (outcome === "victory") {
    window.alert("You are victorious!")
}