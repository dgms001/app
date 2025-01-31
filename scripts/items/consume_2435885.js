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
    txt = "Welcome to the special trip              " + a38 + "\r\n";

    txt += "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n"

    if (player.getEventValue("初級會員開通") > 0 && player.getEventValue("檢測初級1") == 0) { //自動減少初級會員天數
        player.addEventValue("初級會員開通", -1, 1000);
        player.addEventValue("檢測初級1", 1, 1);
    }
    if (player.getEventValue("高級會員開通") > 0 && player.getEventValue("檢測高級1") == 0) { //自動減少高級會員天數
        player.addEventValue("高級會員開通", -1, 1000);
        player.addEventValue("檢測高級1", 1, 1);
    }
    if (player.getEventValue("初級會員開通") == 0 && player.getEventValue("高級會員開通") == 0) { //沒有天數清空log和盒子
        player.resetEventValue("會員開通");
        //player.resetEventValue("萌獸一鍵滿級");
        player.loseItem(2435885);
    }

    txt += "#fs13##n#r";


    txt += "#fs11##n#b\r\n\t\t\t\t\t[初級VIP功能]\r\n";
    txt += "\t\t\t\t  初級VIP剩餘天數:#b[#r" + player.getEventValue("初級會員開通") + "#b]天\r\n";
    if (player.getEventValue("初級會員開通") >= 1) {
        txt += "\t#L1#" + f2 + "30分buff一鍵使用#l\t#L7#" + f2 + "每日福利#l\r\n\r\n";
        txt += "#L2#" + f2 + "Buff物品存入#l#L3#" + f2 + "Buff物品取出#l#L4#" + f2 + "buff存入介面#l\r\n\r\n";
    }

    if (player.getEventValue("高級會員開通") >= 1) {
        txt += "------------------------------------------------------\r\n";
        txt += "\t\t\t\t\t#r[高級VIP功能]\r\n";
        txt += "\t\t\t\t  高級VIP剩餘天數:[#r" + player.getEventValue("高級會員開通") + "]天\r\n";
        txt += "#L5#" + f2 + "#r系統倉庫#l\t#L6#" + f2 + "#r每日Boss重置#l\t#L8#" + f2 + "#r每日福利#l\r\n\r\n";
        if (player.getEventValue("NV幣購買周") == 0) {
            //txt += "\t\t\t#L10#購買NOVA幣(1000樂豆/次/周)\r\n\r\n"
        }
        if (player.getEventValue("萌獸一鍵滿級") == 0) {
            //txt += "\t\t\t#L9#萌獸一鍵滿級(300W楓點/次/月)\r\n\r\n"
        }
    }


    txt += "";
    txt += "";
}
let selection = npc.askMenuS(txt, true);


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
        /*
txt = "";
for (var i = 1; i < items.length; i++) {
    txt += "#L" + i + "# #v" + items[i][0] + "##b#z" + items[i][0] + "# 擁有:[#r#c" + items[i][0] + "##b]\r\n";
}
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
    }*/
        for (var i = 1; i < items.length; i++) {
            var item = items[i][0]
            var quts = player.getAmountOfItem(items[i][0]);
            player.loseItem(item, quts);
            player.addEventValue("會員BUFF存入" + items[i][0] + "", quts, 1000);
        }
        npc.say("#fs14##b一鍵存入Buff成功");
        //setbuff();
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
        var bossevent = Array("boss_zakum", "boss_zakum_Chaos", "闇黑龍王[普通]", "闇黑龍王[困難]", "boss_papulatus_normal", "boss_papulatus_chaos", "boss_vonleon", "boss_vonleon_hard", "boss_hillah", "boss_hillah_hard", "boss_pinkbeen", "boss_pinkbeen_chaos", "boss_shinas", "boss_shinas_HARD", "boss_akayrum_easy", "boss_akayrum", "boss_ranmaru", "boss_ranmaru_crazy", "boss_caoong", "boss_pierre", "boss_pierre_chaos", "BossBanban_NORMAL", "BossBanban_CHAOS", "BossBloody_NORMAL", "BossBloody_CHAOS", "BossBelen_NORMAL", "BossBelen_CHAOS", "boss_magnus", "boss_magnus_hard", "BossPrincessNoPQ", "boss_blackmage_hard", "boss_seren_hard", "boss_beidler", "boss_siwu", "boss_siwu_chaos", "boss_demian", "boss_demian_hard", "boss_lucid", "boss_lucid_hard", "boss_will", "boss_will_hard", "boss_dusk", "boss_jinhillah", "boss_jinhillah_hard", "boss_dunkel", "boss_seren", "boss_blackmage", "boss_kalos_easy", "boss_kalos", "boss_angle_slime_chaos", "boss_angle_slime");
        var bossitem = Array("炎魔普通全員獎勵", "炎魔困難全員獎勵", "拉圖斯普通全員獎勵", "拉圖斯困難全員獎勵", "凡雷恩普通全員獎勵", "凡雷恩困難全員獎勵", "希拉普通全員獎勵", "希拉困難全員獎勵", "皮卡啾普通全員獎勵", "皮卡啾困難全員獎勵", "西格諾斯普通全員獎勵", "西格諾斯困難全員獎勵", "阿卡伊農普通全員獎勵", "阿卡伊農困難全員獎勵", "森蘭丸普通全員獎勵", "森蘭丸困難全員獎勵", "卡翁普通全員獎勵", "比艾樂普通全員獎勵", "比艾樂困難全員獎勵", "斑斑普通全員獎勵", "斑斑困難全員獎勵", "血腥皇后普通全員獎勵", "血腥皇后困難全員獎勵", "貝倫普通全員獎勵", "貝倫困難全員獎勵", "梅格耐斯普通全員獎勵", "梅格耐斯困難全員獎勵", "濃姬普通全員獎勵", "黑魔法師[困難]全員獎勵", "賽蓮全員獎勵[困難]", "培羅德獎勵1", "史烏普通全員獎勵", "史烏困難全員獎勵", "戴米安普通全員獎勵", "戴米安困難全員獎勵", "露希妲普通全員獎勵", "露希妲困難全員獎勵", "威爾普通全員獎勵", "威爾困難全員獎勵", "戴斯克普通全員獎勵", "真希拉普通全員獎勵", "真希拉困難全員獎勵", "頓凱爾困難全員獎勵", "賽蓮全員獎勵", "黑魔法師困難全員獎勵", "卡洛斯普通全員獎勵", "卡洛斯全員獎勵", "綠水靈普通全員獎勵", "綠水靈困難全員獎勵");
        if (player.getEventValue("每日BOSS重置") < 1) {
            for (var i = 0; i < bossevent.length; i++) {
                player.addPQLog(bossevent[i], -1, 1);
            }
            for (var i = 0; i < bossitem.length; i++) {
                player.addEventValue(bossitem[i], -1, 1);
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
            addHyPay(17); //17餘額
            player.gainItem(4009454, 2000); //草元素
            player.gainItem(2049323, 20); //高級強化捲軸
            player.gainItem(5060048, 8); //黃金蘋果
            player.gainItem(2022709, 1); //雙爆
            player.addEventValue("每日福利初級會員", 1, 1);
            npc.broadcastWeatherEffectNotice(9, "[初級會員] 玩家 " + player.getName() + " 領取了會員每日福利", 3000); //35[特效 1-???] 1000[1秒]
        } else {
            npc.say("您今天已經領取過了");
        }
        break;
    case 8: //高級會員福利
        if (player.getEventValue("每日福利高級會員") == 0) {
            addHyPay(55); //55餘額
            player.gainItem(4009454, 5000); //草元素
            player.gainItem(2049323, 50); //高級強化捲軸
            player.gainItem(5060048, 20); //黃金蘋果
            player.gainItem(2022709, 2); //雙爆
            player.addEventValue("每日福利高級會員", 1, 1);
            npc.broadcastWeatherEffectNotice(10, "[高級會員] 玩家 " + player.getName() + " 領取了會員每日福利", 8000); //35[特效 1-???] 1000[1秒]
        } else {
            npc.say("您今天已經領取過了");
        }
        break;
    case 9: //一鍵滿怪怪卡
        player.runScript("一鍵滿怪怪卡");
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
