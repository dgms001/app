/**
 * NLC ticket gate (NPC 9201068)
 * New Leaf City Town Street: NLC Subway Station (Map 600010001)
 *
 * Admits players into New Leaf City subway.
 * Teleports players to waiting room of subway to Kerning City.
 *
 *
 */

let str = "這裡是新葉城地鐵檢票口 ";
let tic = map.getId() == 600010001 ? 4031713 : 4031711;
let toMap = map.getId() == 600010001 ? 600010002 : 600010004;
let a = player.hasItem(tic, 1);
if (a) {
    str += "你想使用哪一張地鐵票?\r\n";
    if (a)
        str += "#b#L0##t" + tic + "##l#k\r\n";
    let selection = npc.askMenu(str);

    let go = true;
    if (selection == 0) {
        let event = npc.getEvent("ship_nlc");
        if (event == null) {
            npc.say("對不起，去新葉城的地鐵正在檢修。");
            go = false;
        } else if (event.getVariable("board")) {
            if (npc.askYesNo("請雖然看起來這輛車有很多空位。請準備好車票我才能讓你上車。這將是長途旅程，不過正好會到達你的目的地。你覺得如何？想搭乘這輛車嗎？") == 0) {
                npc.sayNext("你在這裡還有其他事情要處理，對吧?");
                go = false;
            }
        } else if (event.getVariable("docked")) {
            npc.sayNext("我們將會在列車出發前1分鐘進行檢票，請耐心等待幾分鐘，請注意時間，要在出發前1分鐘準時到達這裡.");
            go = false;
        } else {
            npc.sayNext("嗯 ... 你沒有車票.沒有車票的話是不能讓你進去的. 請找貝爾購買車票吧.");
        }
    }
    if (go) {
        player.loseItem(tic, 1);
        player.changeMap(toMap);
    }
} else {
    npc.say(str + "嗯 ... 你沒有車票.沒有車票的話是不能讓你進去的. 請找貝爾購買車票吧.");
}