/**
 * Roger's Apple (NPC 2000 Quest 1021) Start
 * Maple Road: Lower level of the Training Camp (Map 2)
 *
 * Gives advice to new players on how to use items.
 *
 *
 */

startScript();

function startScript() {
    npc.sayNext("Hey, Man~ What's up? Haha! I am Roger who can teach you adorable new Maplers lots of information.");
    npc.sayNext("You are asking who made me do this? Ahahahaha!\r\nMyself! I wanted to do this and just be kind to you new travellers.");
    let hurt = npc.askAccept("So..... Let me just do this for fun! Abaracadabra~!");
    if (hurt == 1) {
        if (!player.hasItem(2010007, 1)) {
            if (!player.gainItem(2010007, 1)) {
                npc.say("Please clear an empty slot in your use inventory and then click me again.");
                return;
            }
        }
        npc.startQuest();
        player.setHp(25);
        npc.sayNext("Surprised? If HP becomes 0, then you are in trouble. Now, I will give you #rRoger's Apple#k. Please take it. You will feel stronger. Open the Item window and double click to consume. Hey, it's very simple to open the Item window. Just press #bI#k on your keyboard.");
        npc.say("Please take all Roger's Apples that I gave you. You will be able to see the HP bar increasing. Please talk to me again when you recover your HP 100%.");
    } else {
        npc.sayNext("I can't believe you have just turned down an attractive guy like me!");
    }
}
