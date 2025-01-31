/**
 * 武器破功潛能轉移
 **/
let password = "確定"
let needItem = 2591008;//需要的餘額
let ItemNum = 5
let itemid = Array(
    1292022,
    1592022,
    1282040,
    1272040,
    1582044,
    1552130,
    1542128,
    1252106,
    1403022,
    1532157,
    1522152,
    1492245,
    1482232,
    1472275,
    1462252,
    1442285,
    1432227,
    1452266,
    1422197,
    1412189,
    1402268,
    1382274,
    1372237,
    1362149,
    1332289,
    1322264,
    1312213,
    1302355,
    1262051,
    1242141,
    1232122,
    1222122,
    1212129,
    1213022
);
let itemid2 = Array(
    //創世
    1292022,
    1592022,
    1282040,
    1272040,
    1582044,
    1552130,
    1542128,
    1252106,
    1532157,
    1522152,
    1492245,
    1482232,
    1472275,
    1403022,
    1462252,
    1442285,
    1432227,
    1452266,
    1422197,
    1412189,
    1402268,
    1382274,
    1372237,
    1362149,
    1332289,
    1322264,
    1312213,
    1302355,
    1262051,
    1242141,
    1232122,
    1222122,
    1212129,
    1213022
);
var Icon = Array(
    Array("方框", "#fUI/UIWindow.img/Item/New/inventory/0#"),
    Array("方框", "#fUI/UIWindow.img/Item/activeExpChairIcon#"),
    Array("錘子", "#fUI/Basic.img/Cursor/32/0#"),
    Array("數值", "#fUI/Basic.img/LevelNo/0#"),
    Array("數值", "#fUI/Basic.img/LevelNo/1#"),
    Array("數值", "#fUI/Basic.img/LevelNo/2#"),
    Array("數值", "#fUI/Basic.img/LevelNo/3#"),
    Array("數值", "#fUI/Basic.img/LevelNo/4#"),
    Array("數值", "#fUI/Basic.img/LevelNo/5#"),
    Array("數值", "#fUI/Basic.img/LevelNo/6#"),
    Array("數值", "#fUI/Basic.img/LevelNo/7#"),
    Array("數值", "#fUI/Basic.img/LevelNo/8#"),
    Array("數值", "#fUI/Basic.img/LevelNo/9#"),
    Array("確認", "#fUI/CashShop.img/CSCoupon/BtOK/disabled/0#"),
    Array("箭頭", "#fUI/Basic.img/icon/arrow#"),
    Array("箭頭", "#fUI/UIWindow.img/Quest/icon2/0#"),
    Array("確認", "#fUI/CashShop.img/CSCoupon/BtOK/normal/0#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/11#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/10#")
);

let str = "#fs16##e#r\t\t創世武器武功解封\r\n\r\n#fs13#";
str += "#b1.第一欄放入[#r解封創世武器#b]\r\n";
str += "#b2.此武功為[#r物理攻擊力10%#b]\r\n";
str += "解封材料如下:\r\n";
str += "#v2591008##z2591008##r*5#b#v2590028##z2590028##r*5#b\r\n";
str += "#v4310107##z4310107##r*5#b  #v4310218##z4310218##r*20#b\r\n";
str += "#v4000743##z4000743##r*4000#b#v4000739##z4000739##r*4000#b\r\n";
str += "#v4032053##z4032053##r*20000#b    #v4001715##z4001715##r*10#b\r\n";
//str += Icon[15][1] + " #d#r注意:#b此功能是將#r剝離道具#b的屬性「覆蓋」到#r傳承道具#b上，不是「累積」。#k\r\n\r\n";

str += " #b#e確認解封物攻請點擊[#r是#b]";

let YN = npc.askYesNo(str);
if (YN == 1) {
    if (!player.hasItem(needItem, ItemNum)) {
        npc.say("無法使用！!您沒有#v" + needItem + "# x " + ItemNum + "");

    } else if (!player.hasItem(2590028, 5)) {
        npc.say("#v2590028##z2590028#不足。");
    } else if (!player.hasItem(4310107, 5)) {
        npc.say("#v4310107##z4310107#不足。");
    } else if (!player.hasItem(4310218, 20)) {
        npc.say("#v4310218##z4310218#不足。");
    } else if (!player.hasItem(4000743, 4000)) {
        npc.say("#v4000743##z4000743#不足。");
    } else if (!player.hasItem(4000739, 4000)) {
        npc.say("#v4000739##z4000739#不足。");
    } else if (!player.hasItem(4032053, 20000)) {
        npc.say("#v4032053##z4032053#不足。");
    } else if (!player.hasItem(4001715, 10)) {
        npc.say("#v4001715##z4001715#不足。");
    } else {
        //獲取裝備
        let toDrop1 = player.getInventorySlot(1, 1);

        if (toDrop1 == null) {
            npc.say("請將需要武器放到裝備欄#r第一格");

            //}else if(itemid1.indexOf(toDrop1.getDataId()) == -1|| itemid2.indexOf(toDrop2.getDataId()) == -1){
            //	npc.say("#b您其中一箇裝備不是#r#e深淵、航海、神祕、創世，#b#n請加以確認再使用本功能");
        } else if (itemid.indexOf(toDrop1.getDataId()) == -1) {
            npc.say("第一格裝備不是#r解封的創世武器#k型別");


        } else {
            str = "#b請確定您要解封的武器:\r\n";
            str += "您的第一格裝備：#r#v" + toDrop1.getDataId() + "##r#e";
            //str += "\r\n#b#n您的第二格裝備：#r#v" + toDrop2.getDataId() + "##r#b#e此為傳承道具，會繼承第一格裝備";
            str += "\r\n\r\n#b請輸入#r確定#b 解封？如有失誤#r無法補償。"
            YN = npc.askText(str, "", 0, 999);
            if (YN == password) {
                //更換破功
                apNum = 250
                //toDrop2.setLimitBreak(toDrop1.getLimitBreak());//破功

                //toDrop2.setJump(toDrop1.getJump());//跳躍力


                //toDrop1.setSoulSocket(1);
                //靈魂技能
                toDrop1.setSoulId(9)
                toDrop1.setSoulSocketState(1)
                toDrop1.setSoulOption(30051)

                //temp = toDrop1.getGrade();//淺能等級
                //toDrop2.setGrade(temp);
                //
                //temp = toDrop2.getOption(1,false);
                //toDrop2.setOption(1,temp,false);
                //
                //temp = toDrop2.getOption(2,false);
                //toDrop2.setOption(2,temp,false);
                //
                //temp = toDrop2.getOption(3,false);
                //toDrop2.setOption(3,temp,false);
                //
                //temp = toDrop2.getOption(1,true);
                //toDrop2.setOption(1,temp,true);
                //
                //temp = toDrop2.getOption(2,true);
                //toDrop2.setOption(2,temp,true);
                //
                //temp = toDrop2.getOption(3,true);
                //toDrop2.setOption(3,temp,true);
                //player.setKeyValue("UWA", "1") //UWA創造增傷
                //player.setKeyValue("UWB", "1") //UWB創造無敵
                //player.loseInvSlot(1, 1);
                player.updateItem(1, toDrop1);
                //gainHyPay(-needYE)
                player.loseItem(needItem, ItemNum);
                //player.loseItem(2591008, 5);
                player.loseItem(2590028, 5);
                player.loseItem(4310107, 5);
                player.loseItem(4310218, 20);
                player.loseItem(4000743, 4000);
                player.loseItem(4000739, 4000);
                player.loseItem(4032053, 20000);
                player.loseItem(4001715, 10);
                npc.broadcastPlayerNotice(13, "[創世武功解封]  玩家家: " + player.getName() + "  成功解除武功攻擊力10%");

            } else {
                npc.say("你不確定那我也沒辦法囉~");
            }
        }
    }
}


function getHyPay(type) {
    var sql = "select * from hypay where accname = '" + getAccountName() + "'";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        if (type == 1) {
            var pay = result.get("pay");
        } else if (type == 2) {
            var pay = result.get("payUsed");
        } else if (type == 3) {
            var pay = result.get("payReward");
        }
    } else {
        player.customSqlInsert("INSERT INTO `hypay` (`accname`, `name`) VALUES ('" + getAccountName() + "', '" + player.getName() + "')");
        return getHyPay(1);
    }

    return pay;
}

function getAccountName() {
    var i = -1;
    var sql = "select name,id from accounts where id=" + player.getAccountId() + " order by name limit 1;";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        var name = result.get("name");
    }

    return name;
}

function gainHyPay(count) {
    var sql = "update hypay set pay =pay+? where accname = '" + getAccountName() + "';";
    player.customSqlUpdate(sql, count);
}