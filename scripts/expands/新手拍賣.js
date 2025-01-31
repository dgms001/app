
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
    Array("蓝点", "#fEffect/CharacterEff/1082588/3/0#"), //蓝点
    Array("黄星", "#fEffect/CharacterEff/1112924/0/0#"), //黄星
    Array("蓝星", "#fEffect/CharacterEff/1112925/0/0#"), //蓝星
    Array("红星", "#fEffect/CharacterEff/1112926/0/0#"), //红星
    Array("黄星星", "#fUI/UIPVP.img/MiniMapIcon/star#"), //黄星星
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
let mapA = map.getId();
txt = "\t" + Icon[17][1] + "#fs20##fc0xFF00caf2##e萌新選單" + Icon[17][1] + "#r#n\r\n";
txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
    + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
    + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
    + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n";

txt += "  #fs11##L1#" + Icon[103][1] + "#r新手強化#l#L2#" + Icon[103][1] + "#b等級獎勵#l#L3#" + Icon[103][1] + "在線獎勵#l\r\n\r\n";
txt += "   #fs11##L4#" + Icon[103][1] + "#b自選中心#l#L5#" + Icon[103][1] + "#r推文獎勵#l#L6#" + Icon[103][1] + "#b裝備副手#l\r\n\r\n";
txt += "   #fs11##L7#" + Icon[103][1] + "#b去除燈泡#l#L8#" + Icon[103][1] + "隨身倉庫#l#L9#" + Icon[103][1] + "萌獸系統#l\r\n\r\n";
txt += "   #fs11##L10#" + Icon[103][1] + "清除當前地圖怪物#l\t#L11#" + Icon[103][1] + "測試個人傷害#l\r\n\r\n";
txt += "   #fs11##L12#" + Icon[103][1] + "免費兌換P寵#l  #L13#" + Icon[103][1] + "練等模式#l";
if (mapA == 811000500) {
    txt += "#fs11##L14#" + Icon[103][1] + "農機自殺#l";

}

//txt += "#L1#"+qq3+"職業轉職#l #L2#"+qq3+"五轉中心#l #L3#"+qq3+"一鍵滿技能#l  \r\n";
// += "#L4#"+qq3+"補學技能#l #L5#"+qq3+"神子任務#l #L6#"+qq3+"裝備副手#l\r\n";
txt += "\t#fs14##e#r#L20#【返回】#l\r\n\r\n";
txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
    + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
    + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
    + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n\r\n";
txt += "";

let selection = npc.askMenuS(txt, true);

switch (selection) {
    case 1:
        player.runScript("新手強化整合");
        break;
    case 2:
        player.runScript("改版等級獎勵");
        break;
    case 3:
        player.runScript("改版在線獎勵");
        break;
    case 4:
        player.runScript("改版自選專區");
        break;
    case 5:
        player.runScript("改版推文獎勵");
        break;
    case 6:
        if (player.getJob() != 10112) {
            player.runScript("裝備副手");
        } else {
            npc.say("神之子用自帶的卸/裝 轉職中心有一鍵過神之子任務");
        }
        break;
    case 7:
        if (player.isQuestCompleted(100001)) {
            npc.say("#fs15##b你已經消除過燈泡了！#r如果頭頂還顯示有燈泡，點擊頭頂燈泡領取任務即可！");
            player.loseItem(2431838, 1);
        } else {
            let A = npc.askYesNo("#fs15##b想要消除頭頂的燈泡任務嗎？我可以幫你完成大部分任務哦！");
            if (A == 1) {
                var Care = [100001, 63351, 58513, 63521, 63832,
                    61155, 56553, 16909, 16880, 64011, 64010, 34901, 23220,
                    22603, 22602, 22300, 62241, 7107, 19018, 35057, 35056,
                    29900,
                    29901, 29902, 29903, 36102, 2646, 17035, 34965, 35900, 31800, 35942, 57400, 57156, 57452,
                    32240, 32241, 32242, 32243, 32244, 32245, 32246, 63405, 36102, 57460, 57164, 500763, 63403, 63404, 57156, 57102, 63351, 59031, 59030, 62395, 62396, 22507, 35800];
                for (var ii in Care) {
                    player.completeQuest(Care[ii], 0);
                }
                npc.say("已幫您消除燈泡！");
                player.loseItem(2431838, 1);
            }
        }
        break;
    case 8:
        if (player.getEventValue("檢測倉庫") == 0) {
            player.addEventValue("檢測倉庫", 5, 999)
            npc.say("倉庫商城購買楓點即可\r\n購買路徑:進入商城-遊戲-增加欄位-購買擴充\r\n[或直接搜索倉庫 購買樂豆點的 不是里程的]");
        } else {
            npc.sendStorage(3003639);
        }
        break;
    case 9:
        player.openUI(0x251);

        break;
    case 10:
        player.runScript("清除地圖");
        break;
    case 11:
        let mapB = map.getEventMobCount();
        if (map.getId() == 101050000) {
            if (mapB > 0) {
                map.reset();
                //player.updateQuestRecordEx(100000001, timeStamp);
                player.scriptProgressMessage("當前怪物超過1隻,進行清除");
            }
            if (player.getChannel() >= 6) {
                let mob = map.makeMob(9305650);
                ////mob.setForcedMobStat(player.getLevel()+35, player.getLevel()+35);
                map.spawnMob(mob, -1257, 2);
                mob.changeBaseHp(500000000000000000);
                player.dropAlertNotice("稻草人 HP: 5000兆\r\n創建成功!");
            } else {
                let mob = map.makeMob(9305650);
                //mob.setForcedMobStat(player.getLevel() + 35, player.getLevel() + 35);
                map.spawnMob(mob, -1257, 2);
                mob.changeBaseHp(500000000000000000);
                player.dropAlertNotice("稻草人 HP: 5000兆(超級減傷版 6-10S不減傷)\r\n創建成功!");
            }

        } else {
            player.changeMap(101050000); //993177300
            player.dropAlertNotice("傳送地圖成功!");
        }
        break;
    case 12:
        player.runScript("P寵復原");
        break;
    case 13:/*
    if (player.getName() == 121122) { //這裡是發檢舉腳本獎勵的地方 || 間隔
        gainPOHUANZHE();
    } else {
        npc.say("您還沒有檢舉成功,詳情查閱DC頻道[檢舉有獎]");
    }*/
        player.completeQuest(3102, 0);
        npc.say("模式開啟,模式開啟後不會掉落任何全局物品,直到下一次開啟萬能選單");
        break;
    case 14:
        player.setHp(0);
        break;
    case 20:
        player.runScript("本服菜單");
        break;
}
function gainPOHUANZHE() {
    if (player.getEventValue("每日檢舉獎勵") == 0) {
        player.gainItem(4000444, 30000);
        player.gainItem(4009454, 10000);
        player.addEventValue("每日檢舉獎勵", 1, 1);
        player.addEventValue("總計檢舉獎勵", 1, 999);
        npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "檢舉腳本成功,檢舉次數:" + player.getEventValue("總計檢舉獎勵") + "!");
        npc.say("#fs18##b#e獲得#g#z4000755#X30000#z4009454#X10000");
    } else {
        npc.say("#fs18##b#e已經領取");
    }
}
