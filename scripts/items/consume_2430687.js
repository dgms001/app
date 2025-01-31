/* 圓夢谷 TMS 237 萬能菜單 */
var status = -1
var txt;
/*------------------------- 表情符號 -------------------------*/
var SR1 = "#fUI/SoulUI.img/DungeonEffect/2350012/2#"; //最上面的
var SR2 = "#fUI/SoulUI.img/DungeonEffect/2350012/4#"; //最上面的
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/5/icon#"; //最上面的
var SR4 = "#fUI/SoulUI.img/DungeonEffect/2350012/3#"; //最上面的
var SR5 = "#fEffect/EffectPL.img/Beautyroid/connect_end/0"; //區隔條
var SR6 = "#fEffect/EventEffect.img/typingDefense/balloonIcon/blind/0#"; //最上面的星星-6
var SR7 = "#fEffect/CharacterEff/1050334/1/2#"; //最上面的星星-7
var SR8 = "#fEffect/CharacterEff/1050334/1/3#"; //最上面的星星-8
var SR9 = "#fEffect/CharacterEff/1050334/2/0#"; //最上面的星星-9
var SR10 = "#fEffect/CharacterEff/1050334/2/1#"; //最上面的星星-10
var SR11 = "#fEffect/CharacterEff/1050334/2/2#"; //最上面的星星-11
var SR12 = "#fEffect/CharacterEff/1050334/2/3#"; //最上面的星星-12
var GC2 = "#fEffect/CharacterEff/1005267/4/0#"; //"+z+"//小選項用
var XD0 = "#fEffect/CharacterEff/1051366/0/0#"
var GC1 = "#fEffect/CharacterEff/1082700/2/0#";

//var STAR1 = "#fEffect/CharacterEff/forceAtom/29/atom/3/endEff/0#"; //大星星-1
//var STAR2 = "#fEffect/CharacterEff/forceAtom/29/atom/2/endEff/1#"; //大星星-2
//var STAR3 = "#fEffect/CharacterEff/forceAtom/29/atom/3/endEff/2#"; //大星星-3
//var STAR4 = "#fEffect/CharacterEff/forceAtom/29/atom/2/endEff/3#"; //大星星-4
//var GC1 = "#fEffect/CharacterEff/1050312/0/0#"; //最上面的亮粉
//var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#"; //紅心桃心
//var Rainbow = "#fEffect/ItemEff/1070069/effect/walk1/2#" //彩虹
/*------------------------------------------------------------*/
txt = "\t\t\t  " + SR3 + "#fs32##fc0xFF00caf2##e《本服選單》" + SR3 + "\r\n";
txt += "" + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + "\r\n";
txt += "#e#fs17##fc0xFF33fbc9#";



txt += "#L0#" + GC1 + "傳送大廳#l #L1#" + GC1 + "萬能傳送#l #L2#" + GC1 + "贊助專區#l #L3#" + GC1 + "獎勵專區#l\r\n";
txt += "#L4#" + GC1 + "職業轉職#l #L5#" + GC1 + "外觀自選#l #L6#" + GC1 + "楓點交換#l #L7#" + GC1 + "各項排名#l\r\n";
txt += "#L8#" + GC1 + "楓幣商店#l #L9#" + GC1 + "楓點商店#l #L10#" + GC1 + "樂豆商店#l #L11#" + GC1 + "#其其他功能#b#l";
txt += "#fs16#\r\n";

if (player.isGm()) {
    txt += "#e#b#fs17#GM才看的到下方選項\r\n";
    txt += "#L21#" + GC1 + "GM套裝#l　#L22#" + GC1 + "刷刷裝備#l  \r\n";
    txt += "#L24#" + GC1 + "全民搶紅包#l  #L25#" + GC1 + "獎勵發送#l";
    txt += "";
}

let selection = npc.askMenuA(txt, true);

switch (selection) {
    case 0:
        var event = npc.getEvent("paodian");
        if (event != null) {
            var players = event.getVariable("players");
            var playersName = "";
            var playerL = players.length;
            for (var i = 0; i < playerL; i++) {
                try {
                    playersName += players[i].getId() + "." + players[i].getName() + "  "
                } catch (e) {
                    players.splice(i, 1);
                }
            }
        }
        player.changeMap(867157500);
        players.push(player);
        break;
    case 1:
        player.runScript("萬能傳送");
        break;
    case 2:
        player.runScript("贊助專區");
        break;
    case 3:
        player.runScript("獎勵專區");
        break;
    case 4:
        player.runScript("一鍵轉職");
        break;
    case 5:
        player.runScript("自選專區");
        break;
    case 6:
        player.runScript("通貨中心");
        break;
    case 7:
        player.runScript("各大排行");
        break;
    case 8:
        //player.runScript("楓幣商店");
        npc.sendShop(9330194);
        break;
    case 9:
        player.runScript("楓點商店");
        break;
    case 10:
        player.runScript("樂豆商店");
        break;
    case 11:
        player.runScript("其他功能");
        break;

    case 21:
        var zhizuoPQ = Array(1672075, 1032223, 1113075, 1122267, 1132246, 1592022, 1182285, 1012632, 1022278, 1112915, 1112915, 1452257, 1592020);
        for (var i = 0; i < zhizuoPQ.length; i++) {
            let newItem = player.makeItemWithId(zhizuoPQ[i]);
            newItem.setStr(30000);
            newItem.setDex(30000);
            newItem.setInt(30000);
            newItem.setLuk(30000);
            newItem.setMaxHp(20000);
            newItem.setPad(30000);
            newItem.setMad(30000);
            newItem.setBossDamageR(50);
            newItem.setIgnorePDR(50);
            newItem.setDamR(50);
            newItem.setCHUC(30); //星力
            newItem.setGrade(4); //傳說淺能
            //newItem.setOption(parseInt(5),42041, true);
            //newItem.setOption(1,40601,false);
            //newItem.setOption(2,40601,false);
            //newItem.setOption(3,40601,false);
            newItem.setOption(1, 30042, false);
            newItem.setOption(2, 30042, false);
            newItem.setOption(3, 30042, false);
            newItem.setOption(1, 40070, true);
            newItem.setOption(2, 40070, true);
            newItem.setOption(3, 40070, true);
            player.gainItem(newItem);
        }
        player.modifyCashShopCurrency(1, 500000);
        player.modifyCashShopCurrency(2, 50000000);

        break;

    case 22:
        player.runScript("刷裝備");
        break;
    case 24:
        player.runScript("全民搶紅包");
        break;
    case 25:
        player.runScript("獎勵發送");
        break;
}