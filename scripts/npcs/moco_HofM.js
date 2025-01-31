let mapId = map.getId();
if (mapId == 350110600) {
    npc.askMenu("你好呀，冒險家！\r\n\r\n\r\n#L100#你好啊，這裡是?#l");
} else if (mapId == 350111000) {
    npc.say("冒險家，這裡面是否會有你追尋的東西呢？");
} else if (mapId == 350130500) {
    npc.askMenu("你也到達了這裡，摩柯給你加油！\r\n\r\n\r\n#L100#接下來，我該怎麼走呢?#l");
    //cm.dispose();
    //cm.warp(350130500);
} else if (mapId == 350130700) {
    npc.askMenu("快回到你自己的世界去吧！冒險家！\r\n\r\n\r\n#L100#再見！(請留空”其他欄“至少一格,領取通關文牒)#l");
    //cm.dispose();
    //cm.warp(350130500);
}

if (mapId == 350110600) {
    npc.askMenu("#r穿過那個冰山吧，那裡有你要的答案！\r\n\r\n\r\n#L100#好的，再見！#l");
} else if (mapId == 350130500) {
    npc.askMenu("#r前面的#b傳送口已經被摧毀#r了,我能幫到你的只有施展魔法將你傳送出去了！\r\nmiamia，boom！\r\n\r\n\r\n#L100#謝謝你！摩柯！#l");
    player.changeMap(350130600);
} else if (mapId == 350130700) {
    player.changeMap(993000800);
    player.gainItem(4032472, 100);
}
