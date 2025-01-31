/**
 * Sera (NPC 2100)
 * Maple Road: Entrance - Mushroom Town Training Camp (Map 0),
 *   Maple Road: Upper level of the Training Camp (Map 1)
 *
 * Greets newly created players at the entrance of the Mushroom Town Training
 * Camp, and gives a player some help in Upper Level of the Training Camp.
 *
 *
 */

let map = map.getId();
if (map == 0 || map == 3) {
    let enterCamp = npc.askYesNo("Welcome to the world of MapleStory. The purpose of this training camp is to help beginners. Would you like to enter this training camp? Some people start their journey without taking the training program. But I strongly recommend you take the training program first.");
    if (enterCamp == 1) {
        npc.sayNext("Ok then, I will let you enter the training camp. Please follow your instructor's lead.");
        player.changeMap(1);
    } else {
        let confirm = npc.askYesNo("Do you really wanted to start your journey right away?");
        if (confirm) {
            npc.sayNext("It seems like you want to start your journey without taking the training program. Then, I will let you move on the training ground. Be careful~");
            player.changeMap(40000);
        } else {
            npc.sayNext("Please talk to me again when you finally made your decision.");
        }
    }
} else if (map == 1) {
    npc.sayNext("This is the image room where your first training program begins. In this room, you will have an advance look into the job of your choice.");
    npc.say("Once you train hard enough, you will be entitled to occupy a job. You can become a Bowman in Henesys, a Magician in Ellinia, a Warrior in Perion, and a Thief in Kerning City..");
}