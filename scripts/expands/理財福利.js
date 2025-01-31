var status = -1
//var txt;
/*------------------------------------------------------------*/
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var f2 = "#fUI/CashShop/CSBeauty/hairColor/Enable/2#"
var f3 = "#fUI/CashShop/CSBeauty/hairColor/Enable/3#"
var f4 = "#fUI/CashShop/CSBeauty/hairColor/Enable/4#"
var f5 = "#fUI/CashShop/CSBeauty/hairColor/Enable/5#"
let mapA = map.getId();
if (mapA == 993001100) { //限制開啟地圖
    //player.showSystemMessage("在卡BUG頭蓋骨給你打出來 操!!");
} else {
    txt = "#fs21##e#r你好,這裡是理財每日福利中心\r\n";

    if (player.getEventValue("初級會員開通") > 0 && player.getEventValue("檢測初級1") == 0) { //自動減少初級會員天數
        player.addEventValue("初級會員開通", -1, 1000);
        player.addEventValue("檢測初級1", 1, 1);
    }
    if (player.getEventValue("高级會員開通") > 0 && player.getEventValue("檢測高級1") == 0) { //自動減少高級會員天數
        player.addEventValue("高级會員開通", -1, 1000);
        player.addEventValue("檢測高級1", 1, 1);
    }
	    if (player.getEventValue("永久會員開通") > 0 && player.getEventValue("檢測永久1") == 0) { //自動減少高級會員天數
        player.addEventValue("永久會員開通", -1, 1000);
        player.addEventValue("檢測永久1", 1, 1);
    }
    if (player.getEventValue("初級會員開通") == 0 && player.getEventValue("高级會員開通") == 0&& player.getEventValue("永久會員開通") == 0) { //沒有天數清空log和盒子
        player.resetEventValue("會員開通");
        //player.resetEventValue("萌獸一鍵滿級");
        player.loseItem(2434727);
    }

    txt += "#fs13##n#r";


    //txt += "#fs16##n#b\r\n\t\t\t\t\t[初級VIP功能]\r\n";
    txt += "#fs16##e#b當前周費會員剩餘天數:#b[#r" + player.getEventValue("初級會員開通") + "#b]天\r\n";
    if (player.getEventValue("初級會員開通") >= 1) {
        txt += "\t\t\t#L7#領取每日福利#l\r\n";//L1#" + f2 + "30分buff一鍵使用#l\t
        //txt += "#L2#" + f2 + "Buff一鍵存入#l#L3#" + f2 + "Buff物品取出#l#L4#" + f2 + "buff存入介面#l\r\n\r\n";
    }

    if (player.getEventValue("高级會員開通") >= 1) {
        txt += "------------------------------------------------------\r\n";
        
        txt += "#fs16##e#b當前月費會員剩餘天數:[#r" + player.getEventValue("高级會員開通") + "#b]天\r\n";
        txt += "\t\t\t#L8##r領取每日福利#l\r\n";//#L5#" + f2 + "#r系統倉庫#l\t#L6#" + f2 + "#r每日Boss重置#l\t
        /*if (player.getEventValue("NV幣購買周") == 0) {
            //txt += "\t\t\t#L10#購買NOVA幣(1000樂豆/次/周)\r\n\r\n"
        }
        if (player.getEventValue("萌獸一鍵滿級") == 0) {
            //txt += "\t\t\t#L9#萌獸一鍵滿級(300W楓點/次/月)\r\n\r\n"
        }*/
    }
    if (player.getEventValue("永久會員開通") >= 1) {
        txt += "------------------------------------------------------\r\n";
        
        txt += "#fs16##e#b當前永久費會員剩餘天數:[#r" + player.getEventValue("永久會員開通") + "#b]天\r\n";
        txt += "\t\t\t#L9##r領取每日福利#l\r\n\r\n";
        /*if (player.getEventValue("NV幣購買周") == 0) {
            //txt += "\t\t\t#L10#購買NOVA幣(1000樂豆/次/周)\r\n\r\n"
        }
        if (player.getEventValue("萌獸一鍵滿級") == 0) {
            //txt += "\t\t\t#L9#萌獸一鍵滿級(300W楓點/次/月)\r\n\r\n"
        }*/
    }

    txt += "";
    txt += "";
}
let selection = npc.askMenuA(txt, true);


switch (selection) {
    case 1:
        var items = Array(
            Array(5072000, 1),
            Array(2022952, 1),
            Array(2022953, 1),
            Array(2022954, 1),
            Array(2022959, 1),
            Array(2022960, 1),
            Array(2022961, 1),
            Array(2022851, 1),
            Array(2022852, 1),
            Array(2022853, 1),
            Array(2023346, 1),
            Array(2023347, 1),
            Array(2023348, 1),
            Array(2023349, 1),
            Array(2023350, 1),
            Array(2022827, 1),
            Array(2022828, 1),
            Array(2022829, 1),
            Array(2022814, 1),
            Array(2022815, 1),
            Array(2022816, 1),
            Array(2023188, 1),
            Array(2023355, 1),
            Array(2023402, 1),
            Array(2023403, 1),
            Array(2023578, 1));
        for (var i = 1; i < items.length; i++) {
            if (player.getEventValue("會員BUFF存入" + items[i][0]) >= 1) {
                player.addEventValue("會員BUFF存入" + items[i][0], -1, 1000);
                player.useItemEffect("" + items[i][0] + "");
                //player.useItemEffect(70000049);

            }
        }
        break;

    case 2:
        var items = Array(
            Array(5072000, 1),
            Array(2022952, 1),
            Array(2022953, 1),
            Array(2022954, 1),
            Array(2022959, 1),
            Array(2022960, 1),
            Array(2022961, 1),
            Array(2022851, 1),
            Array(2022852, 1),
            Array(2022853, 1),
            Array(2023346, 1),
            Array(2023347, 1),
            Array(2023348, 1),
            Array(2023349, 1),
            Array(2023350, 1),
            Array(2022827, 1),
            Array(2022828, 1),
            Array(2022829, 1),
            Array(2022814, 1),
            Array(2022815, 1),
            Array(2022816, 1),
            Array(2023188, 1),
            Array(2023355, 1),
            Array(2023402, 1),
            Array(2023403, 1),
            Array(2023578, 1));
        for (var i = 1; i < items.length; i++) {
            var item = items[i][0];
            var quts = player.getAmountOfItem(items[i][0]);
            if (quts > 0) {
                player.loseItem(item, quts);
                player.addEventValue("會員BUFF存入" + items[i][0] + "", quts, 1000);
            }
        }
        npc.say("#fs14##b一鍵存入Buff成功");
        break;
    case 3:
        var items = Array(
            Array(5072000, 1),
            Array(2022952, 1),
            Array(2022953, 1),
            Array(2022954, 1),
            Array(2022959, 1),
            Array(2022960, 1),
            Array(2022961, 1),
            Array(2022851, 1),
            Array(2022852, 1),
            Array(2022853, 1),
            Array(2023346, 1),
            Array(2023347, 1),
            Array(2023348, 1),
            Array(2023349, 1),
            Array(2023350, 1),
            Array(2022827, 1),
            Array(2022828, 1),
            Array(2022829, 1),
            Array(2022814, 1),
            Array(2022815, 1),
            Array(2022816, 1),
            Array(2023188, 1),
            Array(2023355, 1),
            Array(2023402, 1),
            Array(2023403, 1),
            Array(2023578, 1));
        txt = "";
        for (var i = 1; i < items.length; i++) {
            txt += "#L" + i + "# #v" + items[i][0] + "##b#z" + items[i][0] + "# 擁有:[#r" + player.getEventValue("會員BUFF存入" + items[i][0] + "") + "#b]\r\n";
        }

        txt += "";
        txt += "";
        txt += "";
        txt += "";
        let selection3 = npc.askMenu(txt, 9330576);
        A = selection3;
        txt = "";
        txt += "#b當前#v" + items[A][0] + "##b#z" + items[A][0] + "#擁有:[#r" + player.getEventValue("會員BUFF存入" + items[A][0] + "") + "#b]\r\n";
        txt += "請輸入要取出的數量";
        txt += "";
        selection3 = npc.askNumber(txt, 1, 1, 999);
        B = selection3
        itemss = items[A][0]
        if (player.getEventValue("會員BUFF存入" + items[A][0] + "") < B) {
            npc.say("#fs14##b物品不足");
        } else {
            player.gainItem(itemss, B);
            player.addEventValue("會員BUFF存入" + itemss + "", -B, 1000);
            npc.say("#fs14##b物品取出成功");
            losebuff();
        }
        break;
    case 4:
        var items = Array(
            Array(5072000, 1),
            Array(2022952, 1),
            Array(2022953, 1),
            Array(2022954, 1),
            Array(2022959, 1),
            Array(2022960, 1),
            Array(2022961, 1),
            Array(2022851, 1),
            Array(2022852, 1),
            Array(2022853, 1),
            Array(2023346, 1),
            Array(2023347, 1),
            Array(2023348, 1),
            Array(2023349, 1),
            Array(2023350, 1),
            Array(2022827, 1),
            Array(2022828, 1),
            Array(2022829, 1),
            Array(2022814, 1),
            Array(2022815, 1),
            Array(2022816, 1),
            Array(2023188, 1),
            Array(2023355, 1),
            Array(2023402, 1),
            Array(2023403, 1),
            Array(2023578, 1));
        txt = "";
        txt += "";
        for (var i = 1; i < items.length; i++) {
            txt += "#fs14##b#v" + items[i][0] + "#:[#r" + player.getEventValue("會員BUFF存入" + items[i][0] + "") + "#b] ";
            if (i == 3 || i == 6 || i == 9 || i == 12 || i == 15 || i == 18 || i == 21 || i == 24) {
                txt += "\r\n";
            }
        }

        let skill = npc.askMenu(txt, 9330576);

        break;
    case 5:
        player.runScript("帳號倉庫");
        break;
    case 6:
        var bossevent = Array("boss_papulatus_normal", "boss_papulatus_chaos", "boss_zakum", "boss_zakum_Chaos", "boss_hontale", "boss_hontale_chaos", "boss_pinkbeen", "boss_pinkbeen_chaos", "boss_vonleon", "boss_vonleon_hard", "boss_akayrum_easy", "boss_akayrum", "boss_shinas", "boss_shinas_HARD", "boss_hillah", "boss_hillah_hard", "boss_pierre", "boss_pierre_chaos", "BossBanban_NORMAL", "BossBanban_CHAOS", "BossBloody_NORMAL", "BossBloody_CHAOS", "BossBelen_NORMAL", "BossBelen_CHAOS", "boss_ranmaru", "boss_ranmaru_crazy", "BossPrincessNoPQ", "boss_beidler", "boss_magnus", "boss_magnus_hard", "boss_siwu", "boss_siwu_chaos", "boss_demian", "boss_demian_hard", "boss_lucid", "boss_lucid_hard", "boss_will", "boss_will_hard", "boss_dunkel", "boss_dunkel_hard", "boss_slime", "boss_slime_chaos", "boss_jinhillah", "boss_jinhillah_hard", "boss_dusk", "boss_dusk_hard", "boss_blackmage", "boss_blackmage_hard", "boss_seren", "boss_seren_hard", "boss_kalos", "boss_kalos_hard");
        if (player.getEventValue("每日BOSS重置") < 1) {
            for (var i = 0; i < bossevent.length; i++) {
                player.addPQLog(bossevent[i], -1, 1);
                player.addEventValue(bossevent[i], -1, 1);
            }
            player.addEventValue("每日BOSS重置", 1, 1);
            npc.broadcastPlayerNotice(35, "會員玩家" + player.getName() + "重置了BOSS次數");
            npc.say("重置成功");
        } else {
            npc.say("今日已經重置過了");
        }
        break;
    case 7: //初級會員福利
        if (player.getEventValue("每日福利初級會員") == 0) {
            //addHyPay(40);
            player.gainItem(4009411, 20); //餘額幣
            player.gainItem(2633609, 1); //經驗卡
            player.gainItem(5060048, 10); //黃金蘋果
            player.gainItem(2022709, 2); //雙爆
            player.addEventValue("每日福利初級會員", 1, 1);
            npc.broadcastWeatherEffectNotice(207, "[理財周權] 玩家 " + player.getName() + " 領取了每日理財福利", 3000); //35[特效 1-???] 1000[1秒]
        } else {
            npc.say("您今天已經領取過了");
        }
        break;
    case 8: //高級會員福利
        if (player.getEventValue("每日福利高級會員") == 0) {
            //addHyPay(80);
            player.gainItem(4009411, 65); //餘額幣
            player.gainItem(2633609, 2); //經驗卡
            player.gainItem(5060048, 20); //黃金蘋果
            player.gainItem(2022709, 2); //雙爆
            player.addEventValue("每日福利高級會員", 1, 1);
            npc.broadcastWeatherEffectNotice(208, "[理財月權] 玩家 " + player.getName() + " 領取了每日理財福利", 8000); //35[特效 1-???] 1000[1秒]
        } else {
            npc.say("您今天已經領取過了");
        }
        break;
    case 9: //一鍵滿怪怪卡
        if (player.getEventValue("每日福利永久會員") == 0) {
            //addHyPay(80);
            player.gainItem(4009411, 100); //餘額幣
            player.gainItem(2633609, 5); //經驗卡
            player.gainItem(5060048, 50); //黃金蘋果
            player.gainItem(2022709, 4); //雙爆
            player.addEventValue("每日福利永久會員", 1, 1);
            npc.broadcastWeatherEffectNotice(208, "[理財永久權] 玩家 " + player.getName() + " 領取了每日理財福利", 8000); //35[特效 1-???] 1000[1秒]
        } else {
            npc.say("您今天已經領取過了");
        }
        break;
    case 10: //一鍵滿怪怪卡
        player.runScript("購買NV幣");
        break;

}
function addHyPay(price) {
    if (price < 0) {
        price = price * +1;
    }
    var sql = "update hypay set pay=pay+?,payused=payused+" + price + " where accountId=?";
    var result = player.customSqlUpdate(sql, price, player.getAccountId());

}
function setbuff() {
    var items = Array(
        Array(5072000, 1),
        Array(2022952, 1),
        Array(2022953, 1),
        Array(2022954, 1),
        Array(2022959, 1),
        Array(2022960, 1),
        Array(2022961, 1),
        Array(2022851, 1),
        Array(2022852, 1),
        Array(2022853, 1),
        Array(2023346, 1),
        Array(2023347, 1),
        Array(2023348, 1),
        Array(2023349, 1),
        Array(2023350, 1),
        Array(2022827, 1),
        Array(2022828, 1),
        Array(2022829, 1),
        Array(2022814, 1),
        Array(2022815, 1),
        Array(2022816, 1),
        Array(2023188, 1),
        Array(2023355, 1),
        Array(2023402, 1),
        Array(2023403, 1),
        Array(2023578, 1));
    txt = "";
    for (var i = 1; i < items.length; i++) {
        txt += "#L" + i + "# #v" + items[i][0] + "##b#z" + items[i][0] + "# 擁有:[#r#c" + items[i][0] + "##b]\r\n";
    }

    txt += "";
    txt += "";
    txt += "";
    txt += "";
    let selection2 = npc.askMenu(txt, 9330576);
    A = selection2;
    txt = "";
    txt += "#b當前#v" + items[A][0] + "##b#z" + items[A][0] + "#擁有:[#r#c" + items[A][0] + "##b]\r\n";
    txt += "請輸入要存入的數量";
    txt += "";
    selection2 = npc.askNumber(txt, 1, 1, 999);
    B = selection2
    itemss = items[A][0]
    if (!player.hasItem(itemss, B)) {
        npc.say("#fs14##b物品不足");
    } else {
        player.loseItem(itemss, B);
        player.addEventValue("會員BUFF存入" + itemss + "", B, 1000);
        npc.say("#fs14##bBuff存入成功");
        setbuff();
    }
}
function losebuff() {
    var items = Array(
        Array(5072000, 1),
        Array(2022952, 1),
        Array(2022953, 1),
        Array(2022954, 1),
        Array(2022959, 1),
        Array(2022960, 1),
        Array(2022961, 1),
        Array(2022851, 1),
        Array(2022852, 1),
        Array(2022853, 1),
        Array(2023346, 1),
        Array(2023347, 1),
        Array(2023348, 1),
        Array(2023349, 1),
        Array(2023350, 1),
        Array(2022827, 1),
        Array(2022828, 1),
        Array(2022829, 1),
        Array(2022814, 1),
        Array(2022815, 1),
        Array(2022816, 1),
        Array(2023188, 1),
        Array(2023355, 1),
        Array(2023402, 1),
        Array(2023403, 1),
        Array(2023578, 1));
    txt = "";
    for (var i = 1; i < items.length; i++) {
        txt += "#L" + i + "# #v" + items[i][0] + "##b#z" + items[i][0] + "# 擁有:[#r" + player.getEventValue("會員BUFF存入" + items[i][0] + "") + "#b]\r\n";
    }

    txt += "";
    txt += "";
    txt += "";
    txt += "";
    let selection3 = npc.askMenu(txt, 9330576);
    A = selection3;
    txt = "";
    txt += "#b當前#v" + items[A][0] + "##b#z" + items[A][0] + "#擁有:[#r" + player.getEventValue("會員BUFF存入" + items[A][0] + "") + "#b]\r\n";
    txt += "請輸入要取出的數量";
    txt += "";
    selection3 = npc.askNumber(txt, 1, 1, 999);
    B = selection3
    itemss = items[A][0]
    if (player.getEventValue("會員BUFF存入" + items[A][0] + "") < B) {
        npc.say("#fs14##b物品不足");
    } else {
        player.gainItem(itemss, B);
        player.addEventValue("會員BUFF存入" + itemss + "", -B, 1000);
        npc.say("#fs14##b物品取出成功");
        losebuff();
    }

}
