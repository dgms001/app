/*
 *
 *  功能：[啾啾島]橫亙的神祕河 - 換地圖  [啾啾]這個味道是？！劇情動畫
 *

 */
check();
if (player.getEventValue("大魔戒指獲取") >= 0) {
    player.setInGameCurNodeEventEnd(true);
    player.setStandAloneMode(true);
    player.setInGameDirectionMode(true, false, false, false);
    player.spawnTempNpc(3003167, 1392, 76);
    player.setNpcSpecialAction(3003167, "summon", 0, false);
    //player.changeBGM("Bgm46/ChewChew MainTheme");
    player.setForcedInput(0);
    npc.setDelay(100);
    player.setInGameCurNodeEventEnd(true);
    player.showNpcEffectPlay(3003164, "Effect/OnUserEff.img/AbyssExpedition/LevelUP", 0, 0, 0, true, 0, false, 0, 0); //升級
    npc.setDelay(2000);
    npc.sayNextENoEsc("#face3#歡迎來到#b劇情模式#k！", 9062158);
    npc.sayNextENoEsc("#b劇情模式#k嗎…？", true);
    npc.sayNextENoEsc("#face0#嗯，皮卡皮卡！這個名字怎麼樣？是不是很帥氣？哈哈哈！這是我起的名字！\r\n這個名字很容易讓人有好感吧？", 9062069);
    npc.sayNextENoEsc("並沒有!! ！！", true);
    npc.sayNextENoEsc("#face3#這位朋友，你是要我噴你嗎?", 9062069);
    npc.sayNextENoEsc("#face3#咳咳,跑題了,現在正式來體驗劇情吧!", 9062069);
    npc.sayNextENoEsc("#face3#哇,你不會真的相信會有劇情吧,666！！", 9062069);
    npc.sayNextENoEsc("我日你媽,GM!!!!", true);
    npc.sayNextENoEsc("#face3##r劇情#k…？那是什麼？", 9062069);
    npc.sayNextENoEsc("我只是告訴你們我可以寫出來但是沒有必要！", 9062069);
    player.setLayerOff(300, "0");
    npc.sayNextENoEsc("我日你媽,GM!!!!", true);
    player.setLayerOff(300, "1");
    npc.sayNextENoEsc("#face3#不過,作為回報我會開放#r大魔戒指#k給你們使用~~。", 9062069);
    npc.sayNextENoEsc("#face3#不過…前提是你需要給我88888武陵道場點", 9062069);
    npc.sayNextENoEsc("??????,我剛剛不是已經付款過了嗎!!!!", true);
    npc.sayNextENoEsc("#face3#是的,所以我只是單純的嚇嚇你~~", 9062069);
    npc.sayNextENoEsc("還是熟悉的味道,日妳媽!!!!", true);
    player.addEventValue("大魔戒指獲取", 1, 3000)
    npc.sayNextENoEsc("#face3#記得點擊武陵排行榜強化哦", 9062069);
    npc.sayNextENoEsc("我日你媽,GM!!!!", true);
    npc.sayNextENoEsc("#face3#您已經被BAN,請向皮卡道歉解封", 9062069);
    npc.sayNextENoEsc("我...我錯了哥哥,好哥哥[被迫道歉]!!!!", true);
    player.showNpcEffectPlay(3003164, "Effect/OnUserEff.img/blackHeaven/pung1", 0, 100, 0, true, 0, false, 0, 0); //炸彈特效
    player.showNpcEffectPlay(3003164, "Effect/OnUserEff.img/blackHeaven/pung1", 0, 200, 0, true, 0, false, 0, 0); //炸彈特效
    player.showNpcEffectPlay(3003164, "Effect/OnUserEff.img/blackHeaven/pung1", 0, 300, 0, true, 0, false, 0, 0); //炸彈特效
    player.showNpcEffectPlay(3003164, "Effect/OnUserEff.img/blackHeaven/pung1", 0, 400, 0, true, 0, false, 0, 0); //炸彈特效
    player.showNpcEffectPlay(3003164, "Effect/OnUserEff.img/blackHeaven/pung1", 0, 500, 0, true, 0, false, 0, 0); //炸彈特效
    player.showNpcEffectPlay(3003164, "Effect/OnUserEff.img/blackHeaven/pung1", 0, -100, 0, true, 0, false, 0, 0); //炸彈特效
    player.showNpcEffectPlay(3003164, "Effect/OnUserEff.img/blackHeaven/pung1", 0, -200, 0, true, 0, false, 0, 0); //炸彈特效
    player.showNpcEffectPlay(3003164, "Effect/OnUserEff.img/blackHeaven/pung1", 0, -300, 0, true, 0, false, 0, 0); //炸彈特效
    player.showNpcEffectPlay(3003164, "Effect/OnUserEff.img/blackHeaven/pung1", 0, -400, 0, true, 0, false, 0, 0); //炸彈特效
    player.showNpcEffectPlay(3003164, "Effect/OnUserEff.img/blackHeaven/pung1", 0, -500, 0, true, 0, false, 0, 0); //炸彈特效
    player.loseItem(2439544);
    player.gainItem(1113196, 1);
    npc.setDelay(2000);
    player.showNpcEffectPlay(3003164, "Effect/BasicEff.img/JobChangedHoyoung", 0, 0, -30, true, 0, false, 0, 0); //
    player.setInGameCurNodeEventEnd(true);
    player.setInGameDirectionMode(false, false, false, false);
}
function check() {
    let mapA = map.getId();
    if (mapA != 925020001) {
        player.changeMap(925020001);
        npc.askMenuS("嘻嘻");
    } else if (player.getFreeSlots(1) < 1) {
        npc.askMenuS("裝備欄最少空出一格");
    }

}
