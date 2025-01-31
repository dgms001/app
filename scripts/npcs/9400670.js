let mapId = map.getId();

if (mapId == 993000705) {
    npc.askMenu("               #r冒險家#k，雪龜島豈是你能登陸的！\r\n\r\n\r\n     #L100#我...是被異世界黑洞吸引來的...我想逃離這個地方#l");
} else if (mapId == 993000714) {
    npc.askMenu("               #r冒險家#k，又見面了！\r\n\r\n\r\n     #L100#上次真的非常感謝你！#l");
} else if (mapId == 993000715) {
    npc.askMenu("               #r冒險家#k，又見面了！不過你好像#r誤入歧途#k了。\r\n                回去吧！\r\n\r\n\r\n     #L100#謝謝你幫助我！#l");
}

if (mapId == 993000705) {
    npc.askMenu("             在這條路的盡頭,有搭乘回到#r冒險世界#k的飛船                                   \r\n             拿上#v4009340#回到你自己的世界吧！！\r\n             #v4009340#雖然是碎片，但是效力依舊！\r\n           #L100#謝謝你的幫助(#r請確保揹包有剩餘空間#k)#l");
} else if (mapId == 993000714) {
    npc.askMenu("             上次的碎片魔力消失了吧？                                   \r\n             這裡還有一箇#v4009340#拿著吧！！\r\n          #L100#再次謝謝你的幫助(#r請確保揹包有剩餘空間#k)#l");
} else if (mapId == 993000715) {
    player.changeMap(993000714, 1);
}

if (mapId == 993000705) {
    if (player.getPQLog("xueyuandao11") < 1) {
        player.gainItem(4009340, 1);
        player.addPQLog("xueyuandao11", 1, 1);
        npc.say("#v4009340# 已經給你,快透過出口走吧!");
    } else {
        npc.say("#v4009340# 你已經擁有,快透過出口走吧");
    }
} else if (mapId == 993000714) {

    if (player.getPQLog("xueyuandao12") < 1) {
        player.gainItem(4009340, 1);
        player.addPQLog("xueyuandao12", 1, 1);
        npc.say("#v4009340# 已經給你,快走吧!");
    } else {

        npc.say("#v4009340# 你已經擁有,快走吧!");
    }
} else if (mapId == 993000715) {
    npc.say("勇往向前吧！");
} else {
    npc.say("發生未知錯誤，請離開此地圖！");
}

