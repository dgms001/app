
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
txt = "\t" + Icon[17][1] + "#fs20##fc0xFF00caf2##e結婚流程" + Icon[17][1] + "#r#n\r\n";
txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
    + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
    + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
    + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n";
txt += "#fs14#1.楓點商店-雜項商店-購買#z5250501#\r\n";
txt += "#fs14#2.購買人在當前地圖輸入需要插屁洞對象\r\n";
txt += "#fs14#3.屁洞接受即可進入婚禮UI\r\n";
txt += "#fs14#4.然後聽一堆廢話呸,感人的話就完成拉\r\n";
txt += "#fs14#5.結完婚後人物愛心會長亮,這樣你就不乾淨了\r\n";
txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
    + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
    + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
    + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n\r\n";
txt += "";

let selection = npc.askMenuS(txt, true);

switch (selection) {
    case 1: //創世繼承
        player.runScript("創世繼承");
        break;
    case 2: //創世解封技能1增傷
        UWA();
        break;
    case 3: //創世解封技能1無敵
        UWB();
        break;
    case 4: //創世強化
        npc.say("正在製作當中");
        break;
    case 5: //創世分解
        player.runScript("創世分解");
        break;
}
function UWA() { //增傷
    txt = "\t" + Icon[17][1] + "#fs20##fc0xFF00caf2##e增傷解封" + Icon[17][1] + "#r#n\r\n";
    txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
        + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
        + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
        + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n";
    txt += "#fs11#創世增傷技能解封材料如下:\r\n";
    txt += "#fs11##r#z4032053##v4032053#X5000 #b當前數量:#c4032053#\r\n";
    txt += "#fs11##r#z4310260##v4310260#X100 #b當前數量:#c4310260#\r\n";
    txt += "#fs11##r#z4034622##v4034622#X30 #b當前數量:#c4034622#\r\n\r\n";
    txt += "#fs11##b是否需要解封呢?\r\n";
    txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
        + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
        + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
        + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n\r\n";
    txt += "";
    let selection = npc.askYesNoSNoEsc(txt, true);
    if (selection == 1) {
        if (player.getPQLog("創世增傷解封") > 0) {
            npc.say("該角色已經解封過此技能了");
        } else if (!player.hasItem(4032053, 5000) || !player.hasItem(4310260, 100) || !player.hasItem(4034622, 30)) {
            npc.say("材料不足,無法解封");
        } else {
            player.loseItem(4032053, 5000);
            player.loseItem(4310260, 100);
            player.loseItem(4034622, 30);
            player.setKeyValue("UWA", "1") //UWA創造增傷
            player.addPQLog("創世增傷解封", 1, 3000);
            npc.say("恭喜您解封了創世增傷技能");
        }
    } else {
        npc.say("下次再來");
    }
}

function UWB() { //無敵
    txt = "\t" + Icon[17][1] + "#fs20##fc0xFF00caf2##e無敵解封" + Icon[17][1] + "#r#n\r\n";
    txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
        + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
        + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
        + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n";
    txt += "#fs11#創世增傷技能解封材料如下:\r\n";
    txt += "#fs11##r#z4032053##v4032053#X5000 #b當前數量:#c4032053#\r\n";
    txt += "#fs11##r#z4310260##v4310260#X100 #b當前數量:#c4310260#\r\n";
    txt += "#fs11##r#z4034622##v4034622#X30 #b當前數量:#c4034622#\r\n\r\n";
    txt += "#fs11##b是否需要解封呢?\r\n";
    txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
        + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
        + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
        + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n\r\n";
    txt += "";
    let selection = npc.askYesNoSNoEsc(txt, true);
    if (selection == 1) {
        if (player.getPQLog("創世無敵解封") > 0) {
            npc.say("該角色已經解封過此技能了");
        } else if (!player.hasItem(4032053, 5000) || !player.hasItem(4310260, 100) || !player.hasItem(4034622, 30)) {
            npc.say("材料不足,無法解封");
        } else {
            player.loseItem(4032053, 5000);
            player.loseItem(4310260, 100);
            player.loseItem(4034622, 30);
            player.setKeyValue("UWB", "1") //UWB創造無敵
            player.addPQLog("創世無敵解封", 1, 3000);
            npc.say("恭喜您解封了創世無敵技能");
        }
    } else {
        npc.say("下次再來");
    }

}
