

var status = -1
date = new Date();
let week = date.getDay();
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();
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
var XD0 = "#fEffect/CharacterEff/1051366/0/0#";
var GC1 = "#fEffect/CharacterEff/1082700/2/0#";

var p9 = "#fMap/MapHelper.img/weather/knitsWithWarmWinter/8#";
var zx50 = "#fMap/MapHelper.img/weather/lovelypartybear/7#";
var qq1 = "#fUI/EventShop/adventureShop/GradeBuyer/0#"
var qq2 = "#fUI/EventShop/adventureShop/GradeBuyer/1#"
var qq3 = "#fUI/EventShop/adventureShop/GradeBuyer/2#"
var qq4 = "#fUI/EventShop/adventureShop/GradeBuyer/3#"
var qq5 = "#fUI/EventShop/adventureShop/GradeBuyer/4#"
var qq6 = "#fUI/EventShop/adventureShop/GradeBuyer/5#"
var Icon = [
    Array("星星", "#fEtc/ChatEmoticon/expression/1/0#"),
    Array("彩虹", "#fEffect/ItemEff/1102877/effect/default/0#"),
    Array("?咪", "#fUI/NameTag/190/w#"),
    Array("?咪", "#fUI/NameTag/190/c#"),
    Array("?咪", "#fUI/NameTag/190/e#"),
    Array("兔子", "#fEffect/CharacterEff/1112960/0/1#"),
    Array("星空", "#fUI/GuildMark/BackGround/00001013/16#"),
    Array("骷?", "#fUI/GuildMark/Mark/Etc/00009000/15#"),
    Array("?心", "#fUI/GuildMark/Mark/Etc/00009001/1#"),
    Array("白?", "#fUI/GuildMark/Mark/Etc/00009002/4#"),
    Array("皇冠", "#fUI/GuildMark/Mark/Etc/00009004/3#"),
    Array("??", "#fUI/GuildMark/Mark/Etc/00009020/1#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/11#"),
    Array("水滴", "#fEffect/BasicEff/MainNotice/Gamsper/Notify/4#"),
    Array("?旗", "#fEffect/BasicEff/MainNotice/BlockBuster/Default/3#"),
    Array("?心", "#fEffect/CharacterEff/1112905/0/0#"),
    Array("云朵", "#fEffect/ItemEff/1102877/effect/default/1#"),
    Array("翅膀", "#fEffect/ItemEff/1102874/effect/ladder/0#"),
    Array("箭矢", "#fEffect/ItemEff/1112003/0/2#"),
    Array("??", "#fEffect/ItemEff/1004122/effect/default/8#"),
    Array("??", "#fEffect/CharacterEff/1082588/0/0#"), //??
    Array("??", "#fEffect/CharacterEff/1082588/3/0#"), //??
    Array("?星", "#fEffect/CharacterEff/1112924/0/0#"), //?星
    Array("?星", "#fEffect/CharacterEff/1112925/0/0#"), //?星
    Array("?星", "#fEffect/CharacterEff/1112926/0/0#"), //?星
    Array("?星星", "#fUI/UIPVP.img/MiniMapIcon/star#"), //?星星
    Array("星星", "#fEtc/ChatEmoticon/expression/1/0#"),
    Array("兔子", "#fEffect/CharacterEff/1112960/0/1#"),
    Array("星空", "#fUI/GuildMark/BackGround/00001013/16#"),
    Array("骷?", "#fUI/GuildMark/Mark/Etc/00009000/15#"),
    Array("?心", "#fUI/GuildMark/Mark/Etc/00009001/1#"),
    Array("白?", "#fUI/GuildMark/Mark/Etc/00009002/4#"),
    Array("皇冠", "#fUI/GuildMark/Mark/Etc/00009004/3#"),
    Array("??", "#fUI/GuildMark/Mark/Etc/00009020/1#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/11#"),
    Array("水滴", "#fEffect/BasicEff/MainNotice/Gamsper/Notify/4#"),
    Array("?旗", "#fEffect/BasicEff/MainNotice/BlockBuster/Default/3#"),
    Array("?心", "#fEffect/CharacterEff/1112905/0/0#"),
    Array("云朵", "#fEffect/ItemEff/1102877/effect/default/1#"),
    Array("翅膀", "#fEffect/ItemEff/1102874/effect/ladder/0#"),
    Array("箭矢", "#fEffect/ItemEff/1112003/0/2#"),
    Array("??", "#fEffect/ItemEff/1004122/effect/default/8#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/10#"),
    Array("??", "#fUI/GuildMark/Mark/Etc/00009020/2#"),
    Array("??", "#fUI/GuildMark/Mark/Etc/00009020/3#"),
    Array("??", "#fUI/GuildMark/Mark/Etc/00009020/4#"),
    Array("??", "#fUI/GuildMark/Mark/Etc/00009020/5#"),
    Array("??", "#fUI/GuildMark/Mark/Etc/00009020/6#"),
    Array("??", "#fUI/GuildMark/Mark/Etc/00009020/7#"),
    Array("??", "#fUI/GuildMark/Mark/Etc/00009020/8#"),
    Array("??", "#fUI/GuildMark/Mark/Etc/00009020/9#"),
    Array("??", "#fUI/GuildMark/Mark/Etc/00009020/10#"),
    Array("??", "#fUI/GuildMark/Mark/Etc/00009020/11#"),
    Array("??", "#fUI/GuildMark/Mark/Etc/00009020/12#"),
    Array("??", "#fUI/GuildMark/Mark/Etc/00009020/13#"),
    Array("??", "#fUI/GuildMark/Mark/Etc/00009020/14#"),
    Array("??", "#fUI/GuildMark/Mark/Etc/00009020/15#"),
    Array("??", "#fUI/GuildMark/Mark/Etc/00009020/16#"),
    Array("?件", "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"),
    Array("信封", "#fUI/GuildMark/BackGround/00001003/5#"),
    Array("信封", "#fUI/GuildMark/BackGround/00001003/12#"),
    Array("?石", "#fUI/NameTag/medal/556/w#"),
    Array("?石", "#fUI/NameTag/medal/556/c#"),
    Array("?石", "#fUI/NameTag/medal/556/e#"),
    Array("三角", "#fUI/piggyBarMinigame/crunch/5#"),
    Array("??", "#fUI/piggyBarMinigame/crunch/1#"),
    Array("女神", "#fUI/RunnerGame/RunnerGameUI/Effect/ItemEffect_Protect1/3#"),
    Array("拇指", "#fUI/NameTag/medal/10/w#"),
    Array("拇指", "#fUI/NameTag/medal/10/c#"),
    Array("拇指", "#fUI/NameTag/medal/10/e#"),
    Array("成功", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/dear/7#"),
    Array("失?", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/fail/7#"),
    Array("星星", "#fUI/UIWindowGL/FeedbackSystem/Star#"),
    Array("?星", "#fEffect/CharacterEff/1003393/1/0#"),
    Array("花朵", "#fEffect/CharacterEff/1050334/2/0#"),
    Array("?星", "#fEffect/CharacterEff/1003393/0/0#"),
    Array("淡星", "#fEffect/CharacterEff/moveRandomSprayEff/eunwol_seal/effect/0/2#"),
    Array("花朵", "#fEffect/CharacterEff/1051294/1/0#"),
    Array("花朵", "#fEffect/CharacterEff/1051296/1/0#"),
    Array("金菇", "#fUI/NameTag/medal/74/w#"),
    Array("金菇", "#fUI/NameTag/medal/74/c#"),
    Array("金菇", "#fUI/NameTag/medal/74/e#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/w#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/c#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/e#"),
    Array("胡子", "#fUI/NameTag/124/w#"),
    Array("胡子", "#fUI/NameTag/124/c#"),
    Array("胡子", "#fUI/NameTag/124/e#"),
    Array("帽子", "#fUI/NameTag/nick/312/w#"),
    Array("帽子", "#fUI/NameTag/nick/312/c#"),
    Array("帽子", "#fUI/NameTag/nick/312/e#"),
    Array("圣?", "#fUI/NameTag/medal/728/w#"),
    Array("圣?", "#fUI/NameTag/medal/728/c#"),
    Array("圣?", "#fUI/NameTag/medal/728/e#"),
    Array("??", "#fUI/UIWindowPL/DuoEvent/Maximum/DuoInfo/icon/GoodF/0#"),
    Array("王冠", "#fUI/NameTag/medal/468/w#"),
    Array("王冠", "#fUI/NameTag/medal/468/c#"),
    Array("王冠", "#fUI/NameTag/medal/468/e#"),
    Array("确?", "#fUI/CashShop.img/CSCoupon/BtOK/normal/0#"),
    Array("幽?", "#fEffect/ItemEff/1004738/effect/ladder/0#"),
    Array("幽?", "#fEffect/ItemEff/1004738/effect/default/7#"),
    Array("幽?", "#fEffect/ItemEff/1004738/effect/walk1/3#"),
    Array("幽?", "#fEffect/ItemEff/1004738/effect/jump/0#"),
    Array("音符", "#fEffect/ItemEff/1112811/0/0#"),
    Array("?心", "#fEffect/CharacterEff/1112905/0/0#"),
    Array("幽?", "#fEffect/ItemEff/1004738/effect/default/0#"),
    Array("幽?", "#fEffect/ItemEff/1004738/effect/default/1#"),
    Array("幽?", "#fEffect/ItemEff/1004738/effect/default/2#"),
    Array("幽?", "#fEffect/ItemEff/1004738/effect/default/3#"),
    Array("金左指?", "#fUI/UIWindow/MonsterBook/arrowLeft/normal/0#"),
    Array("金右指?", "#fUI/UIWindow/MonsterBook/arrowRight/normal/0#"),
    Array("??", "#fEffect/ItemEff/1102877/effect/default/0#")

];
var itemid = 4031890; //所需物品


var days = 16; //這裡要改當天時間 如果你已經結算了
var days1 = 16; //這是預測的開始時間 結算換成和days一致即可 沒結算就不要動了
//第一場
var xuanshou1 = "100T1";
var xuanshoupeilv1 = 1.85;
var xuanshou2 = "CFO1";
var xuanshoupeilv2 = 1.96;
//第二場
var xuanshou3 = "CFO2";
var xuanshoupeilv3 = 10.04;
var xuanshou4 = "GEN2";
var xuanshoupeilv4 = 1.05;
//第三場
var xuanshou5 = "RNG3";
var xuanshoupeilv5 = 1.14;
var xuanshou6 = "100T3";
var xuanshoupeilv6 = 5.72;
//第四場
var xuanshou7 = "GEN4";
var xuanshoupeilv7 = 1.06;
var xuanshou8 = "100T4";
var xuanshoupeilv8 = 9.21;
//第五場
var xuanshou9 = "CFO5";
var xuanshoupeilv9 = 5.99;
var xuanshou10 = "RNG5";
var xuanshoupeilv10 = 1.13;
//第六場
var xuanshou11 = "RNG6";
var xuanshoupeilv11 = 2.41;
var xuanshou12 = "GEN6";
var xuanshoupeilv12 = 1.57;
//如何發獎勵 數據庫-選擇dgms-表-F6[執行後 玩家就可以去領獎勵了]
/*
//一行有一個WIN戰隊 一共6個 date改成前一天時間即可[10號結算就改09] 11點結算 不要提前可以延後也可以12:00

UPDATE dgms_lolbocai SET `now`='0' WHERE ZhanduiName = "100T1" AND date >= '2022-10-16 11:00:00';
UPDATE dgms_lolbocai SET `now`='0' WHERE ZhanduiName = "GEN2" AND date >= '2022-10-16 11:00:00';
UPDATE dgms_lolbocai SET `now`='0' WHERE ZhanduiName = "RNG3" AND date >= '2022-10-16 11:00:00';
UPDATE dgms_lolbocai SET `now`='0' WHERE ZhanduiName = "GEN4" AND date >= '2022-10-16 11:00:00';
UPDATE dgms_lolbocai SET `now`='0' WHERE ZhanduiName = "RNG5" AND date >= '2022-10-16 11:00:00';
UPDATE dgms_lolbocai SET `now`='0' WHERE ZhanduiName = "GEN6" AND date >= '2022-10-16 11:00:00';

 */
while (true) {
    txt = "" + Icon[17][1] + "#fs14##fc0xFF00caf2##e電競菠菜[小組賽BO1]" + Icon[17][1] + "#r#n\r\n";
    txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
        + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
        + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
        + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n";
    if ((day == days || hour < 3)) {
        txt += "#fs13##L1#" + xuanshou1 + "賠率[" + xuanshoupeilv1 + "] VS#l #L2#" + xuanshou2 + "賠率[" + xuanshoupeilv2 + "] 03:00封盤#l\r\n";
    }
    if ((day == days || hour < 4)) {
        txt += "#fs13##L3#" + xuanshou3 + "賠率[" + xuanshoupeilv3 + "] VS#l #L4#" + xuanshou4 + "賠率[" + xuanshoupeilv4 + "] 04:00封盤#l\r\n";
    }
    if ((day == days || hour < 5)) {
        txt += "#fs13##L5#" + xuanshou5 + "賠率[" + xuanshoupeilv5 + "] VS#l #L6#" + xuanshou6 + "賠率[" + xuanshoupeilv6 + "] 05:00封盤#l\r\n";
    }
    if ((day == days || hour < 6)) {
        txt += "#fs13##L7#" + xuanshou7 + "賠率[" + xuanshoupeilv7 + "] VS#l #L8#" + xuanshou8 + "賠率[" + xuanshoupeilv8 + "] 06:00封盤#l\r\n";
    }
    if ((day == days || hour < 7)) {
        txt += "#fs13##L9#" + xuanshou9 + "賠率[" + xuanshoupeilv9 + "] VS#l #L10#" + xuanshou10 + "賠率[" + xuanshoupeilv10 + "] 07:00封盤#l\r\n";
    }
    if ((day == days || hour < 8)) {
        txt += "#fs13##L11#" + xuanshou11 + "賠率[" + xuanshoupeilv11 + "] VS#l #L12#" + xuanshou12 + "賠率[" + xuanshoupeilv12 + "] 08:00封盤#l\r\n";
    }
    txt += "  #fs13##b#L13#我要領獎#l #L14#兌換#z4031890##l #L15#兌換#z4009411##l\r\n";
    txt += "#r\t\t\t  #L16#查看我的當期預測#l\r\n\r\n";
    txt += "#r必看說明:投注封盤後會消失,結算後去領獎即可\r\n\r\n";
    txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
        + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
        + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
        + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n\r\n";
    txt += "";

    let selection = npc.askMenuS(txt, true);

    switch (selection) {
        case 1:
            var currentItemQuantity = player.getAmountOfItem(4031890);
            txt = "\r\n\t\t  #fs24##r#e【投注" + xuanshou1 + "】\r\n";
            txt += "#fs16##b當前賠率:" + xuanshoupeilv1 + ",最低投注100\r\n\r\n";
            txt += "請輸入要投注的數量:[當前盈虧 " + player.getEventValue("投注總量") + "]";
            txt += "";
            var number = npc.askNumber(txt, 100, 100, currentItemQuantity);
            var peilv = number * xuanshoupeilv1;
            if (!player.hasItem(4031890, number)) {
                npc.say("物品不足,你在幹嘛呢???");
            } else if (hour == 5) {
                npc.say("已封盤,你在幹嘛呢???");
            } else {
                player.loseItem(4031890, number);
                player.addEventValue("投注總量", -number, 1000);
                player.customSqlInsert("INSERT INTO `dgms_lolbocai` (`nameid`,`type`, `num`,`max`,`now`,`ZhanduiName`,`date`) VALUES ('" + player.getAccountId() + "','4031890', '" + peilv + "','1','1','" + xuanshou1 + "',now())");
                addLOLBC(-number);
                npc.say("投注成功");
            }
            break;
        case 2:
            var currentItemQuantity = player.getAmountOfItem(4031890);
            txt = "\r\n\t\t  #fs24##r#e【投注" + xuanshou2 + "】\r\n";
            txt += "#fs16##b當前賠率:" + xuanshoupeilv2 + ",最低投注100\r\n\r\n";
            txt += "請輸入要投注的數量:[當前盈虧 " + player.getEventValue("投注總量") + "]";
            txt += "";
            var number = npc.askNumber(txt, 100, 100, currentItemQuantity);
            var peilv = number * xuanshoupeilv2;
            if (!player.hasItem(4031890, number)) {
                npc.say("物品不足,你在幹嘛呢???");
            } else if (hour == 5) {
                npc.say("已封盤,你在幹嘛呢???");
            } else {
                player.loseItem(4031890, number);
                player.addEventValue("投注總量", -number, 1000);
                player.customSqlInsert("INSERT INTO `dgms_lolbocai` (`nameid`,`type`, `num`,`max`,`now`,`ZhanduiName`,`date`) VALUES ('" + player.getAccountId() + "','4031890', '" + peilv + "','1','1','" + xuanshou2 + "',now())");
                addLOLBC(-number);
                npc.say("投注成功");
            }
            break;
        case 3:
            var currentItemQuantity = player.getAmountOfItem(4031890);
            txt = "\r\n\t\t  #fs24##r#e【投注" + xuanshou3 + "】\r\n";
            txt += "#fs16##b當前賠率:" + xuanshoupeilv3 + ",最低投注100\r\n\r\n";
            txt += "請輸入要投注的數量:[當前盈虧 " + player.getEventValue("投注總量") + "]";
            txt += "";
            var number = npc.askNumber(txt, 100, 100, currentItemQuantity);
            var peilv = number * xuanshoupeilv3;
            if (!player.hasItem(4031890, number)) {
                npc.say("物品不足,你在幹嘛呢???");
            } else if (hour == 6) {
                npc.say("已封盤,你在幹嘛呢???");
            } else {
                player.loseItem(4031890, number);
                player.addEventValue("投注總量", -number, 1000);
                player.customSqlInsert("INSERT INTO `dgms_lolbocai` (`nameid`,`type`, `num`,`max`,`now`,`ZhanduiName`,`date`) VALUES ('" + player.getAccountId() + "','4031890', '" + peilv + "','1','1','" + xuanshou3 + "',now())");
                addLOLBC(-number);
                npc.say("投注成功");
            }
            break;
        case 4:
            var currentItemQuantity = player.getAmountOfItem(4031890);
            txt = "\r\n\t\t  #fs24##r#e【投注" + xuanshou4 + "】\r\n";
            txt += "#fs16##b當前賠率:" + xuanshoupeilv4 + ",最低投注100\r\n\r\n";
            txt += "請輸入要投注的數量:[當前盈虧 " + player.getEventValue("投注總量") + "]";
            txt += "";
            var number = npc.askNumber(txt, 100, 100, currentItemQuantity);
            var peilv = number * xuanshoupeilv4;
            if (!player.hasItem(4031890, number)) {
                npc.say("物品不足,你在幹嘛呢???");
            } else if (hour == 6) {
                npc.say("已封盤,你在幹嘛呢???");
            } else {
                player.loseItem(4031890, number);
                player.addEventValue("投注總量", -number, 1000);
                player.customSqlInsert("INSERT INTO `dgms_lolbocai` (`nameid`,`type`, `num`,`max`,`now`,`ZhanduiName`,`date`) VALUES ('" + player.getAccountId() + "','4031890', '" + peilv + "','1','1','" + xuanshou4 + "',now())");
                addLOLBC(-number);
                npc.say("投注成功");
            }
            break;
        case 5:
            var currentItemQuantity = player.getAmountOfItem(4031890);
            txt = "\r\n\t\t  #fs24##r#e【投注" + xuanshou5 + "】\r\n";
            txt += "#fs16##b當前賠率:" + xuanshoupeilv5 + ",最低投注100\r\n\r\n";
            txt += "請輸入要投注的數量:[當前盈虧 " + player.getEventValue("投注總量") + "]";
            txt += "";
            var number = npc.askNumber(txt, 100, 100, currentItemQuantity);
            var peilv = number * xuanshoupeilv5;
            if (!player.hasItem(4031890, number)) {
                npc.say("物品不足,你在幹嘛呢???");
            } else if (hour == 7) {
                npc.say("已封盤,你在幹嘛呢???");
            } else {
                player.loseItem(4031890, number);
                player.addEventValue("投注總量", -number, 1000);
                player.customSqlInsert("INSERT INTO `dgms_lolbocai` (`nameid`,`type`, `num`,`max`,`now`,`ZhanduiName`,`date`) VALUES ('" + player.getAccountId() + "','4031890', '" + peilv + "','1','1','" + xuanshou5 + "',now())");
                addLOLBC(-number);
                npc.say("投注成功");
            }
            break;
        case 6:
            var currentItemQuantity = player.getAmountOfItem(4031890);
            txt = "\r\n\t\t  #fs24##r#e【投注" + xuanshou6 + "】\r\n";
            txt += "#fs16##b當前賠率:" + xuanshoupeilv6 + ",最低投注100\r\n\r\n";
            txt += "請輸入要投注的數量:[當前盈虧 " + player.getEventValue("投注總量") + "]";
            txt += "";
            var number = npc.askNumber(txt, 100, 100, currentItemQuantity);
            var peilv = number * xuanshoupeilv6;
            if (!player.hasItem(4031890, number)) {
                npc.say("物品不足,你在幹嘛呢???");
            } else if (hour == 7) {
                npc.say("已封盤,你在幹嘛呢???");
            } else {
                player.loseItem(4031890, number);
                player.addEventValue("投注總量", -number, 1000);
                player.customSqlInsert("INSERT INTO `dgms_lolbocai` (`nameid`,`type`, `num`,`max`,`now`,`ZhanduiName`,`date`) VALUES ('" + player.getAccountId() + "','4031890', '" + peilv + "','1','1','" + xuanshou6 + "',now())");
                addLOLBC(-number);
                npc.say("投注成功");
            }
            break;
        case 7:
            var currentItemQuantity = player.getAmountOfItem(4031890);
            txt = "\r\n\t\t  #fs24##r#e【投注" + xuanshou7 + "】\r\n";
            txt += "#fs16##b當前賠率:" + xuanshoupeilv7 + ",最低投注100\r\n\r\n";
            txt += "請輸入要投注的數量:[當前盈虧 " + player.getEventValue("投注總量") + "]";
            txt += "";
            var number = npc.askNumber(txt, 100, 100, currentItemQuantity);
            var peilv = number * xuanshoupeilv7;
            if (!player.hasItem(4031890, number)) {
                npc.say("物品不足,你在幹嘛呢???");
            } else if (hour == 8) {
                npc.say("已封盤,你在幹嘛呢???");
            } else {
                player.loseItem(4031890, number);
                player.addEventValue("投注總量", -number, 1000);
                player.customSqlInsert("INSERT INTO `dgms_lolbocai` (`nameid`,`type`, `num`,`max`,`now`,`ZhanduiName`,`date`) VALUES ('" + player.getAccountId() + "','4031890', '" + peilv + "','1','1','" + xuanshou7 + "',now())");
                addLOLBC(-number);
                npc.say("投注成功");
            }
            break;
        case 8:
            var currentItemQuantity = player.getAmountOfItem(4031890);
            txt = "\r\n\t\t  #fs24##r#e【投注" + xuanshou8 + "】\r\n";
            txt += "#fs16##b當前賠率:" + xuanshoupeilv8 + ",最低投注100\r\n\r\n";
            txt += "請輸入要投注的數量:[當前盈虧 " + player.getEventValue("投注總量") + "]";
            txt += "";
            var number = npc.askNumber(txt, 100, 100, currentItemQuantity);
            var peilv = number * xuanshoupeilv8;
            if (!player.hasItem(4031890, number)) {
                npc.say("物品不足,你在幹嘛呢???");
            } else if (hour == 8) {
                npc.say("已封盤,你在幹嘛呢???");
            } else {
                player.loseItem(4031890, number);
                player.addEventValue("投注總量", -number, 1000);
                player.customSqlInsert("INSERT INTO `dgms_lolbocai` (`nameid`,`type`, `num`,`max`,`now`,`ZhanduiName`,`date`) VALUES ('" + player.getAccountId() + "','4031890', '" + peilv + "','1','1','" + xuanshou8 + "',now())");
                addLOLBC(-number);
                npc.say("投注成功");
            }
            break;
        case 9:
            var currentItemQuantity = player.getAmountOfItem(4031890);
            txt = "\r\n\t\t  #fs24##r#e【投注" + xuanshou9 + "】\r\n";
            txt += "#fs16##b當前賠率:" + xuanshoupeilv9 + ",最低投注100\r\n\r\n";
            txt += "請輸入要投注的數量:[當前盈虧 " + player.getEventValue("投注總量") + "]";
            txt += "";
            var number = npc.askNumber(txt, 100, 100, currentItemQuantity);
            var peilv = number * xuanshoupeilv9;
            if (!player.hasItem(4031890, number)) {
                npc.say("物品不足,你在幹嘛呢???");
            } else if (hour == 9) {
                npc.say("已封盤,你在幹嘛呢???");
            } else {
                player.loseItem(4031890, number);
                player.addEventValue("投注總量", -number, 1000);
                player.customSqlInsert("INSERT INTO `dgms_lolbocai` (`nameid`,`type`, `num`,`max`,`now`,`ZhanduiName`,`date`) VALUES ('" + player.getAccountId() + "','4031890', '" + peilv + "','1','1','" + xuanshou9 + "',now())");
                addLOLBC(-number);
                npc.say("投注成功");
            }
            break;
        case 10:
            var currentItemQuantity = player.getAmountOfItem(4031890);
            txt = "\r\n\t\t  #fs24##r#e【投注" + xuanshou10 + "】\r\n";
            txt += "#fs16##b當前賠率:" + xuanshoupeilv10 + ",最低投注100\r\n\r\n";
            txt += "請輸入要投注的數量:[當前盈虧 " + player.getEventValue("投注總量") + "]";
            txt += "";
            var number = npc.askNumber(txt, 100, 100, currentItemQuantity);
            var peilv = number * xuanshoupeilv10;
            if (!player.hasItem(4031890, number)) {
                npc.say("物品不足,你在幹嘛呢???");
            } else if (hour == 9) {
                npc.say("已封盤,你在幹嘛呢???");
            } else {
                player.loseItem(4031890, number);
                player.addEventValue("投注總量", -number, 1000);
                player.customSqlInsert("INSERT INTO `dgms_lolbocai` (`nameid`,`type`, `num`,`max`,`now`,`ZhanduiName`,`date`) VALUES ('" + player.getAccountId() + "','4031890', '" + peilv + "','1','1','" + xuanshou10 + "',now())");
                addLOLBC(-number);
                npc.say("投注成功");
            }
            break;
        case 11:
            var currentItemQuantity = player.getAmountOfItem(4031890);
            txt = "\r\n\t\t  #fs24##r#e【投注" + xuanshou11 + "】\r\n";
            txt += "#fs16##b當前賠率:" + xuanshoupeilv11 + ",最低投注100\r\n\r\n";
            txt += "請輸入要投注的數量:[當前盈虧 " + player.getEventValue("投注總量") + "]";
            txt += "";
            var number = npc.askNumber(txt, 100, 100, currentItemQuantity);
            var peilv = number * xuanshoupeilv11;
            if (!player.hasItem(4031890, number)) {
                npc.say("物品不足,你在幹嘛呢???");
            } else if (hour == 10) {
                npc.say("已封盤,你在幹嘛呢???");
            } else {
                player.loseItem(4031890, number);
                player.addEventValue("投注總量", -number, 1000);
                player.customSqlInsert("INSERT INTO `dgms_lolbocai` (`nameid`,`type`, `num`,`max`,`now`,`ZhanduiName`,`date`) VALUES ('" + player.getAccountId() + "','4031890', '" + peilv + "','1','1','" + xuanshou11 + "',now())");
                addLOLBC(-number);
                npc.say("投注成功");
            }
            break;
        case 12:
            var currentItemQuantity = player.getAmountOfItem(4031890);
            txt = "\r\n\t\t  #fs24##r#e【投注" + xuanshou12 + "】\r\n";
            txt += "#fs16##b當前賠率:" + xuanshoupeilv12 + ",最低投注100\r\n\r\n";
            txt += "請輸入要投注的數量:[當前盈虧 " + player.getEventValue("投注總量") + "]";
            txt += "";
            var number = npc.askNumber(txt, 100, 100, currentItemQuantity);
            var peilv = number * xuanshoupeilv12;
            if (!player.hasItem(4031890, number)) {
                npc.say("物品不足,你在幹嘛呢???");
            } else if (hour == 10) {
                npc.say("已封盤,你在幹嘛呢???");
            } else {
                player.loseItem(4031890, number);
                player.addEventValue("投注總量", -number, 1000);
                player.customSqlInsert("INSERT INTO `dgms_lolbocai` (`nameid`,`type`, `num`,`max`,`now`,`ZhanduiName`,`date`) VALUES ('" + player.getAccountId() + "','4031890', '" + peilv + "','1','1','" + xuanshou12 + "',now())");
                addLOLBC(-number);
                npc.say("投注成功");
            }
            break;
        case 13:
            jianglifasong();
            break;
        case 14:
            var currentItemQuantity = player.getAmountOfItem(4009411);
            txt = "\r\n\t\t  #fs24##r#e【餘額交換】\r\n";
            txt += "#fs16##g#v4009411##z4009411##b 換 #v4031890##z4031890# X 100\r\n\r\n";
            txt += "請輸入兌換的數量:";
            txt += "";
            var number = npc.askNumber(txt, 1, 1, currentItemQuantity);
            if (!player.hasItem(4009411, number)) {
                npc.say("物品不足,不他嗎想啥呢???");
            } else if (player.getFreeSlots(4) < number / 99) {
                npc.say("您的消耗背包其他欄空間不足,請保證欄位至少(" + number / 99 + ")格的空間。");
            } else {
                player.loseItem(4009411, number);
                player.gainItem(4031890, number * 100);
                npc.say("兌換成功");
            }
            break;
        case 15:
            var currentItemQuantity = player.getAmountOfItem(4031890);
            txt = "\r\n\t\t  #fs24##r#e【卡片交換】\r\n";
            txt += "#fs16##g#v4031890##z4031890# X 100 #b 換 #v4009411##z4009411#\r\n\r\n";
            txt += "請輸入兌換的數量:";
            txt += "";
            var number = npc.askNumber(txt, 1, 1, currentItemQuantity / 100);
            if (!player.hasItem(4031890, number * 100)) {
                npc.say("物品不足,不他嗎想啥呢???");
            } else {
                player.loseItem(4031890, number * 100);
                player.gainItem(4009411, number);
                npc.say("兌換成功");
            }
            break;
        case 16:
            test();
            break;
    }
}
function test() {
    var sql = "select * from dgms_lolbocai where nameid = '" + player.getAccountId() + "' and date > '2022-10-" + days1 + " 11:00:00'";
    var push = player.customSqlResult(sql);
    str = "#b下列是你本期投注的戰隊:\r\n";
    for (let i = 0; i < push.size(); i++) {
        let signle = push.get(i);
        if (signle.get("nameid") == player.getAccountId()) {
            str += " #r預測" + signle.get("ZhanduiName") + "戰隊勝利,勝利會獲得 " + signle.get("num") + " 菠菜卡片#l\r\n";

        }
    }

    selected = npc.askMenu(str);
    let luckId = push.get(selected).get("id");
}
function jianglifasong() {
    let sql = "SELECT jl.* FROM	dgms_lolbocai jl WHERE jl.max > jl.now AND jl.id NOT IN ( SELECT luckyId FROM dgms_server_log WHERE account = '" + getAccountName() + "')";
    let push = player.customSqlResult(sql);
    str = "#b請選擇獎勵(不會顯示已領的獎勵):\r\n";
    for (let i = 0; i < push.size(); i++) {
        let signle = push.get(i);
        if (signle.get("nameid") == player.getAccountId()) {
            str += "#L" + i + "# #r預測中" + signle.get("ZhanduiName") + "的獎勵#z4031890# X " + signle.get("num") + "#l\r\n";

        }
    }

    selected = npc.askMenu(str);
    let luckId = push.get(selected).get("id");

    sql = "select * from dgms_lolbocai where id = '" + push.get(selected).get("id") + "' and max > now";
    push = player.customSqlResult(sql);
    if (push.size() > 0) {
        let signle = push.get(0);
        let type = parseInt(signle.get("type").toString());
        let typeTxt = "";
        switch (type) {
            case 1:
                typeTxt = signle.get("num") + "餘額";
                gainHyPay(parseInt(signle.get("num").toString()));
                break;
            case 2:
                typeTxt = signle.get("num") + "樂豆";
                player.modifyCashShopCurrency(1, parseInt(signle.get("num").toString()));
                break;
            case 3:
                typeTxt = signle.get("num") + "楓點";
                player.modifyCashShopCurrency(2, parseInt(signle.get("num").toString()));
                break;
            case 4:
                typeTxt = signle.get("num") + "楓幣";
                player.gainMesos(parseInt(signle.get("num").toString()))
                break;
            default:
                typeTxt = "『" + player.makeItemWithId(type).getItemName() + "』x " + signle.get("num");

                break;
        }
        if (player.getFreeSlots(4) < (signle.get("num") / 9999)) {
            npc.say("您的消耗背包其他欄空間不足,請保證欄位至少(" + signle.get("num") / 9999 + ")格的空間。");
        } else {
            //存數據庫
            player.customSqlUpdate("update dgms_lolbocai set now = now + 2 where id = '" + luckId + "';");
            player.customSqlInsert("INSERT INTO `dgms_server_log` (`account`, `luckyId`,`date`) VALUES ('" + getAccountName() + "','" + luckId + "',now())");
            player.addEventValue("投注總量", signle.get("num"), 1000);
            addLOLBC(signle.get("num"));
            player.gainItem(type, parseInt(signle.get("num").toString()));
            npc.say("#b領到啦！#r獲取:" + typeTxt);
        }
    } else {
        npc.say("#b該紅包已被搶完！#r趕緊搶下一個紅包吧！");
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
function addLOLBC(price) {
    var sql = "update dgms_lolbocai_log set Allsl=Allsl+? where id=?";
    var result = player.customSqlUpdate(sql, price, 1);
}
