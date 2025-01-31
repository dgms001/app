var status = -1
var txt;
/*------------------------------------------------------------*/
var ltz45 = "#fMap/MapHelper.img/weather/starPlanet2/5#";
var ltz47 = "#fMap/MapHelper.img/weather/starPlanet/4#";
var Icon = [
    Array("星星", "#fEtc/ChatEmoticon/expression/1/0#"),
    Array("彩虹", "#fEffect/ItemEff/1102877/effect/default/0#"),
    Array("猫咪", "#fUI/NameTag/190/w#"),
    Array("猫咪", "#fUI/NameTag/190/c#"),
    Array("猫咪", "#fUI/NameTag/190/e#"),
    Array("兔子", "#fEffect/CharacterEff/1112960/0/1#"),
    Array("星空", "#fUI/GuildMark/BackGround/00001013/16#"),
    Array("骷髅", "#fUI/GuildMark/Mark/Etc/00009000/15#"),
    Array("红心", "#fUI/GuildMark/Mark/Etc/00009001/1#"),
    Array("白脸", "#fUI/GuildMark/Mark/Etc/00009002/4#"),
    Array("皇冠", "#fUI/GuildMark/Mark/Etc/00009004/3#"),
    Array("红灯", "#fUI/GuildMark/Mark/Etc/00009020/1#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/11#"),
    Array("水滴", "#fEffect/BasicEff/MainNotice/Gamsper/Notify/4#"),
    Array("红旗", "#fEffect/BasicEff/MainNotice/BlockBuster/Default/3#"),
    Array("红心", "#fEffect/CharacterEff/1112905/0/0#"),
    Array("云朵", "#fEffect/ItemEff/1102877/effect/default/1#"),
    Array("翅膀", "#fEffect/ItemEff/1102874/effect/ladder/0#"),
    Array("箭矢", "#fEffect/ItemEff/1112003/0/2#"),
    Array("黄鸭", "#fEffect/ItemEff/1004122/effect/default/8#"),
    Array("红点", "#fEffect/CharacterEff/1082588/0/0#"), //红点
    Array("蓝点", "#fEffect/CharacterEff/1082588/3/0#"),  //蓝点
    Array("黄星", "#fEffect/CharacterEff/1112924/0/0#"), //黄星
    Array("蓝星", "#fEffect/CharacterEff/1112925/0/0#"), //蓝星
    Array("红星", "#fEffect/CharacterEff/1112926/0/0#"), //红星
    Array("黄星星", "#fUI/UIPVP.img/MiniMapIcon/star#"),  //黄星星
    Array("星星", "#fEtc/ChatEmoticon/expression/1/0#"),
    Array("兔子", "#fEffect/CharacterEff/1112960/0/1#"),
    Array("星空", "#fUI/GuildMark/BackGround/00001013/16#"),
    Array("骷髅", "#fUI/GuildMark/Mark/Etc/00009000/15#"),
    Array("红心", "#fUI/GuildMark/Mark/Etc/00009001/1#"),
    Array("白脸", "#fUI/GuildMark/Mark/Etc/00009002/4#"),
    Array("皇冠", "#fUI/GuildMark/Mark/Etc/00009004/3#"),
    Array("红灯", "#fUI/GuildMark/Mark/Etc/00009020/1#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/11#"),
    Array("水滴", "#fEffect/BasicEff/MainNotice/Gamsper/Notify/4#"),
    Array("红旗", "#fEffect/BasicEff/MainNotice/BlockBuster/Default/3#"),
    Array("红心", "#fEffect/CharacterEff/1112905/0/0#"),
    Array("云朵", "#fEffect/ItemEff/1102877/effect/default/1#"),
    Array("翅膀", "#fEffect/ItemEff/1102874/effect/ladder/0#"),
    Array("箭矢", "#fEffect/ItemEff/1112003/0/2#"),
    Array("黄鸭", "#fEffect/ItemEff/1004122/effect/default/8#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/10#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/2#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/3#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/4#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/5#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/6#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/7#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/8#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/9#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/10#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/11#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/12#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/13#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/14#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/15#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/16#"),
    Array("条件", "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"),
    Array("信封", "#fUI/GuildMark/BackGround/00001003/5#"),
    Array("信封", "#fUI/GuildMark/BackGround/00001003/12#"),
    Array("钻石", "#fUI/NameTag/medal/556/w#"),
    Array("钻石", "#fUI/NameTag/medal/556/c#"),
    Array("钻石", "#fUI/NameTag/medal/556/e#"),
    Array("三角", "#fUI/piggyBarMinigame/crunch/5#"),
    Array("蓝点", "#fUI/piggyBarMinigame/crunch/1#"),
    Array("女神", "#fUI/RunnerGame/RunnerGameUI/Effect/ItemEffect_Protect1/3#"),
    Array("拇指", "#fUI/NameTag/medal/10/w#"),
    Array("拇指", "#fUI/NameTag/medal/10/c#"),
    Array("拇指", "#fUI/NameTag/medal/10/e#"),
    Array("成功", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/dear/7#"),
    Array("失败", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/fail/7#"),
    Array("星星", "#fUI/UIWindowGL/FeedbackSystem/Star#"),
    Array("蓝星", "#fEffect/CharacterEff/1003393/1/0#"),
    Array("花朵", "#fEffect/CharacterEff/1050334/2/0#"),
    Array("蓝星", "#fEffect/CharacterEff/1003393/0/0#"),
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
    Array("圣诞", "#fUI/NameTag/medal/728/w#"),
    Array("圣诞", "#fUI/NameTag/medal/728/c#"),
    Array("圣诞", "#fUI/NameTag/medal/728/e#"),
    Array("红钻", "#fUI/UIWindowPL/DuoEvent/Maximum/DuoInfo/icon/GoodF/0#"),
    Array("王冠", "#fUI/NameTag/medal/468/w#"),
    Array("王冠", "#fUI/NameTag/medal/468/c#"),
    Array("王冠", "#fUI/NameTag/medal/468/e#"),
    Array("确认", "#fUI/CashShop.img/CSCoupon/BtOK/normal/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/ladder/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/7#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/walk1/3#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/jump/0#"),
    Array("音符", "#fEffect/ItemEff/1112811/0/0#"),
    Array("红心", "#fEffect/CharacterEff/1112905/0/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/1#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/2#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/3#"),
    Array("金左指标", "#fUI/UIWindow/MonsterBook/arrowLeft/normal/0#"),
    Array("金右指标", "#fUI/UIWindow/MonsterBook/arrowRight/normal/0#"),
    Array("简单", "#fEffect/ItemEff/1102877/effect/default/0#")

];
var GC3 = "#fEffect/CharacterEff/1082700/1/0#"; //"+z+"//小選項用
var itemList = [


    Array(2613062, 100, 1),//V卷
    Array(2613063, 100, 1),//V卷
    Array(2612074, 100, 1),//V卷
    Array(2612075, 100, 1),//V卷
    Array(2616072, 100, 1),//V卷
    Array(2616073, 100, 1),//V卷
    Array(2615041, 100, 1),//V卷
    Array(2615042, 100, 1),//V卷
    Array(2048819, 100, 1),//V卷
    Array(2048820, 100, 1),//V卷
    Array(2590028, 100, 1),//V卷

    Array(2613048, 300, 1),//X卷
    Array(2613049, 300, 1),//X卷
    Array(2612055, 300, 1),//X卷
    Array(2612056, 300, 1),//X卷
    Array(2616059, 300, 1),//X卷
    Array(2616060, 300, 1),//X卷
    Array(2615029, 300, 1),//X卷
    Array(2615030, 300, 1),//X卷
    Array(2048815, 300, 1),//X卷
    Array(2048816, 300, 1),//X卷

    Array(2613012, 500, 1),//R卷
    Array(2613013, 500, 1),//R卷
    Array(2612019, 500, 1),//R卷
    Array(2612020, 500, 1),//R卷
    Array(2616000, 500, 1),//R卷
    Array(2616001, 500, 1),//R卷
    Array(2615005, 500, 1),//R卷
    Array(2615006, 500, 1),//R卷
    Array(2048812, 500, 1),//R卷
    Array(2048813, 500, 1),//R卷

    Array(2591600, 500, 1),//靈魂
    Array(2591282, 500, 1),//靈魂
    Array(2591000, 500, 1),//靈魂
    Array(2591009, 500, 1),//靈魂
    Array(2591005, 500, 1),//靈魂
    Array(2591281, 500, 1),//靈魂
    Array(2591002, 500, 1),//靈魂
    Array(2591283, 500, 1),//靈魂
    Array(2591001, 500, 1),//靈魂
    Array(2591006, 500, 1),//靈魂
    Array(2591004, 500, 1),//靈魂
    Array(2591562, 500, 1),//靈魂
    Array(2591563, 500, 1),//靈魂
    Array(2591543, 500, 1),//靈魂
    Array(2591003, 500, 1),//靈魂
    Array(2591287, 500, 1),//靈魂
    Array(2591280, 500, 1),//靈魂
    Array(2591007, 500, 1),//靈魂



];


//Jackpotchance 大獎機率是這個
var Jackpot1 = [ //榮耀
    Array(2591008, 20, 1),//靈魂
    Array(2590028, 20, 1),//靈魂

    Array(2612089, 10, 1),//榮耀
    Array(2612090, 10, 1),//榮耀
    Array(2613076, 10, 1),//榮耀
    Array(2613077, 10, 1),//榮耀
    Array(2615060, 10, 1),//榮耀
    Array(2615061, 10, 1),//榮耀
    Array(2616224, 10, 1),//榮耀
    Array(2616225, 10, 1),//榮耀
    Array(2048848, 10, 1),//榮耀
    Array(2048849, 10, 1),//榮耀



];
var Jackpot2 = [ //究極B
    Array(2613068, 30, 1),//B卷
    Array(2613069, 30, 1),//B卷
    Array(2612080, 30, 1),//B卷
    Array(2612081, 30, 1),//B卷
    Array(2616216, 30, 1),//B卷
    Array(2616217, 30, 1),//B卷
    Array(2615051, 30, 1),//B卷
    Array(2615052, 30, 1),//B卷
    Array(2048825, 30, 1),//B卷
    Array(2048826, 30, 1),//B卷
];

var zx24 = "#fMap/MapHelper.img/weather/nightMarket/5#";
var qq1 = "#fUI/EventShop/adventureShop/GradeBuyer/0#"
var qq2 = "#fUI/EventShop/adventureShop/GradeBuyer/1#"
var qq3 = "#fUI/EventShop/adventureShop/GradeBuyer/2#"
var qq4 = "#fUI/EventShop/adventureShop/GradeBuyer/3#"
var qq5 = "#fUI/EventShop/adventureShop/GradeBuyer/4#"
var qq6 = "#fUI/EventShop/adventureShop/GradeBuyer/5#"
轉蛋所需物品 = 5060032;
date = new Date();
let week = date.getDay();
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();
var timeStamp = java.lang.System.currentTimeMillis();
var min = 3; //一分鐘 這裏自己改時間
var time = parseInt(min - (((timeStamp - parseInt(player.getQuestRecordEx(100000002))) / 1000)));
if (time > 0) {
    player.showProgressMessageFont("你按太快了哦," + time + "秒後才能開啟!", 3, 30, 4, 10 * 1000);
} else {
    player.updateQuestRecordEx(100000002, timeStamp);


    //txt = "\r\n";
    var itemsl = 5060032;
    txt = "\t\t\t\t#fs21##r#e艾比卷軸轉蛋#fs12##n\r\n";
    txt += "#b每次需要消耗 #r1#b個#v5060032#\r\n"

    //txt += "\t\t   #e#fs20##r#v"+轉蛋所需物品+"##z"+轉蛋所需物品+"#\r\n#n";
    //txt += ""+zx24+zx24+zx24+zx24+zx24+zx24+zx24+zx24+zx24+zx24+zx24+"\r\n";
    txt += "";
    txt += "\t\t\t\t\t#L1#快速抽獎#l \r\n\r\n";//#L2#"+Icon[103][1]+"查看內容物#l

    txt += "#fs13##b靈魂大獎\r\n#v2591008##v2590028#\r\n卷軸大獎\r\n#v2612089##v2612090##v2613076##v2613077##v2615060##v2615061##v2616224##v2616225##v2048848##v2048849##v2613068##v2613069##v2612080##v2612081##v2616216##v2616217##v2615051##v2615052##v2048825##v2048826#\r\nV卷大獎\r\n#v2613062##v2613063##v2612074##v2612075##v2616072##v2616073##v2615041##v2615042##v2048819##v2048820#\r\nRX卷大獎\r\n#v2613048##v2613049##v2612055##v2612056##v2616059##v2616060##v2615030##v2048815##v2048816##v2613012##v2612019##v2612020##v2616000##v2616001##v2615005##v2048812##v2048813#\r\n靈魂大獎\r\n#v2591600##v2591282##v2591009##v2591005##v2591281##v2591002##v2591283##v2591001##v2591006##v2591004##v2591562##v2591563##v2591543##v2591003##v2591287##v2591280##v2591007#";


    //txt += "\t\t\t\t  持有#v"+itemsl+"#:[#r#c"+itemsl+"#個#b]\r\n";
    //txt += "\t\t\t\t  榮耀次數"+player.getEventValue("艾比榮耀")+"/10 B卷次數:"+player.getEventValue("艾比究極")+"/30\r\n";

    //txt += "\t\t#L2#查看本期大獎#l";

    txt += "";

    let selection = npc.askMenu(txt);

    switch (selection) {
        case 2:
            npc.say("#fs14##b獎品如下:\r\n#v2613070##v2613071##v2612082##v2612083##v2616218##v2616219##v2615054##v2615055##v2048830##v2048831#\r\n#v2613068##v2613069##v2612080##v2612081##v2616216##v2616217##v2615051##v2615052##v2048825##v2048826##v2613062##v2613063##v2612074##v2612075##v2616072##v2616073##v2615041##v2615042##v2048819##v2048820##v2613048##v2613049##v2612055##v2612056##v2616059##v2616060##v2615029##v2615030##v2048815##v2048816##v2613012##v2613013##v2612019##v2612020##v2616000##v2616001##v2615005##v2615006##v2048812##v2048813#");
            break;

        case 1:
            while (true) {
                Jackpotchance = Math.floor(Math.random() * 10000);//獎池總機率
                if (player.hasItem(轉蛋所需物品, 1) < 1) {
                    npc.say("#fs17##e#b玩家持有的#v" + 轉蛋所需物品 + "#不足");
                } else if (player.getFreeSlots(1) < 1 || player.getFreeSlots(2) < 1 || player.getFreeSlots(3) < 1 || player.getFreeSlots(4) < 1 || player.getFreeSlots(5) < 1) {
                    npc.say("#fs17##e#b身上背包空間不足。");
                } else {
                    if (Jackpotchance <= 30) {
                        if (player.getEventValue("艾比榮耀") < 100000) {
                            finalitem = Array();
                            for (var i = 0; i < Jackpot1.length; i++) {
                                finalitem.push(Jackpot1[i]);
                            }
                            random = new java.util.Random();
                            finalchance = random.nextInt(finalitem.length);
                            itemId = finalitem[finalchance][0];
                            quantity = finalitem[finalchance][2];
                            player.gainItem(itemId, quantity);
                            player.addEventValue("艾比榮耀", 1, 1);
                            // player.showSystemMessage("艾比榮耀"+player.getEventValue("艾比榮耀")+"次");
                            player.loseItem(轉蛋所需物品, 1);
                            npc.say("你獲得了 #b#t" + itemId + "##k " + quantity + "個。");
                        } else {
                            itemId = 2631487;
                            quantity = 1;
                            player.gainItem(itemId, quantity);
                            player.loseItem(轉蛋所需物品, 1);
                            npc.say("榮耀捲次數已滿,你獲得了 #b#t" + itemId + "##k " + quantity + "個。");
                        }

                    } else if (Jackpotchance <= 100) {
                        if (player.getEventValue("艾比究極") < 300000) {
                            finalitem = Array();
                            for (var i = 0; i < Jackpot2.length; i++) {
                                finalitem.push(Jackpot2[i]);
                            }
                            random = new java.util.Random();
                            finalchance = random.nextInt(finalitem.length);
                            itemId = finalitem[finalchance][0];
                            quantity = finalitem[finalchance][2];
                            player.gainItem(itemId, quantity);
                            player.addEventValue("艾比究極", 1, 1);
                            // player.showSystemMessage("艾比究極");
                            player.loseItem(轉蛋所需物品, 1);
                            npc.say("你獲得了 #b#t" + itemId + "##k " + quantity + "個。");
                        } else {
                            itemId = 2631487;
                            quantity = 1;
                            player.gainItem(itemId, quantity);
                            player.loseItem(轉蛋所需物品, 1);
                            npc.say("究極捲次數已滿,你獲得了 #b#t" + itemId + "##k " + quantity + "個。");
                        }

                    } else {
                        chance = Math.floor(Math.random() * 10000);
                        finalitem = Array();
                        for (var i = 0; i < itemList.length; i++) {
                            if (itemList[i][1] >= chance) {
                                finalitem.push(itemList[i]);
                            }
                        }
                        if (finalitem.length != 0) {
                            var item;
                            random = new java.util.Random();
                            finalchance = random.nextInt(finalitem.length);
                            itemId = finalitem[finalchance][0];
                            quantity = finalitem[finalchance][2];
                            if (item != -1) {
                                player.gainItem(itemId, quantity);
                                //player.gainItem(2630612,1);
                                player.loseItem(轉蛋所需物品, 1);
                                npc.say("你獲得了 #b#t" + itemId + "##k " + quantity + "個。");
                            } else {
                                npc.say("請你確認在背包的裝備，消耗，其他窗口中是否有一格以上的空間。");
                            }
               
                        }
                    }

                }
            }
            break;
    }
}
