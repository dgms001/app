/* 副本進場 */
var status = -1
var txt;

var p9 = "#fMap/MapHelper.img/weather/knitsWithWarmWinter/8#";
var zx50 = "#fMap/MapHelper.img/weather/lovelypartybear/7#";
var qq1 = "#fUI/EventShop/adventureShop/GradeBuyer/0#"
var qq2 = "#fUI/EventShop/adventureShop/GradeBuyer/1#"
var qq3 = "#fUI/EventShop/adventureShop/GradeBuyer/2#"
var qq4 = "#fUI/EventShop/adventureShop/GradeBuyer/3#"
var qq5 = "#fUI/EventShop/adventureShop/GradeBuyer/4#"
var qq6 = "#fUI/EventShop/adventureShop/GradeBuyer/5#"
var zx28 = "#fMap/MapHelper.img/weather/NatureTale2/1#";
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
txt = "\t" + Icon[17][1] + "#fs20##fc0xFF00caf2##e副本中心" + Icon[17][1] + "#r#n\r\n";
txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
    + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
    + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
    + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n";

txt += "#fs14##b";
//txt += "\t\t\t#L11#"+Icon[103][1] + "世界Boss#l\r\n\r\n";
txt += "#fs11##L33#" + Icon[103][1] + "#b靈魂拯救者#l#L34#" + Icon[103][1] + "碎夢塔#l#L35#" + Icon[103][1] + "OX問答#l\r\n\r\n";
txt += "#fs11##L36#" + Icon[103][1] + "#bBingo#l#L37#" + Icon[103][1] + "安哈林防禦#l#L38#" + Icon[103][1] + "艾爾達光譜#l\r\n\r\n";
txt += "#fs11##L39#" + Icon[103][1] + "#b 啾啾島#l\r\n\r\n";

txt += "\t\t\t\t #fs14##r單人副本\r\n";
txt += "#fs11##L0#" + Icon[103][1] + "#b武陵道場#l#L6#" + Icon[103][1] + "怪物公園 #l#L18#" + Icon[103][1] + "跑環副本#l\r\n\r\n";
txt += "#fs11##L30#" + Icon[103][1] + "#b無限火力#l#L31#" + Icon[103][1] + "#b創世忍耐#l #L32#" + Icon[103][1] + "#r聖誕活動#l\r\n\r\n"; //#L6#" + Icon[103][1] + "怪物公園 #l#L18#" + Icon[103][1] + "跑環副本#l

txt += "\t\t\t\t\t#fs14##r多人副本\r\n";
txt += "#fs11##L66#" + Icon[103][1] + "#rPVP 戰場#l#L88#" + Icon[103][1] + "搶奪城戰 #l#L11#" + Icon[103][1] + "#r世界BOSS#l\r\n\r\n";
txt += "#fs11##L4#" + Icon[103][1] + "#b椅子副本#l#L2#" + Icon[103][1] + "次元入侵 #l#L17#" + Icon[103][1] + "航海爭略#l\r\n\r\n";
txt += "#fs11##L22#" + Icon[103][1] + "機 器 人#l#L10#" + Icon[103][1] + "#b調和精靈#l #l#L29#" + Icon[103][1] + "#b起源之塔#l\r\n\r\n";

txt += "#fs11##L21#" + Icon[103][1] + "煉血洞府#l#L23#" + Icon[103][1] + "#b致命海盜#l #l#L24#" + Icon[103][1] + "#b飢餓繆斯#l\r\n\r\n";

//txt += "\t\t\t\t   #r#fs16##e[單人]#b#fs14#\r\n#n";
//txt += ""+Icon[103][1] + "#L0##n#b武陵道場#l "+Icon[103][1] + "#L6#怪物公園#l "+Icon[103][1] + "#L18#跑環副本#l \r\n\r\n";

//txt += "\t\t\t\t   #r#fs16##e[多人]#b#fs14#\r\n#n";
//txt += "#L4#椅子副本#l #L2#次元入侵#l #L17#航海爭略#l \r\n";
//txt += "#L19#圖騰副本1#l#L20#圖騰副本2#l#L21#煉血洞府#l\r\n";
//txt += "#L10#調和精靈#l #L22# 機器人  ##L11#全場BOSS2#ll\r\n";


txt += "\t\t\t\t\t#fs14##r娛樂活動\r\n";
//txt += "\t\t\t\t   #r#fs16##e[活動]#b#fs14#\r\n#n";
txt += "#fs11##L7#" + Icon[103][1] + "#b旗幟爭奪#l#L3#" + Icon[103][1] + "OX問答#l #L25#中秋月妙#l\r\n\r\n";
//txt += "#L7#旗幟爭奪#l #L3#OX問答#l\r\n\r\n";


txt += "";
txt += "\t\t\t  #fs14##e#r#L50#【返回】#l\r\n\r\n";
txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
    + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
    + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
    + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n\r\n";

if (player.isGm()) {

    txt += "#fs14# #L19#圖騰副本#l";
    txt += "  #L5#" + qq3 + "聖誕雪人#l \r\n";
    txt += "  #L8#" + qq3 + "百鬼夜行#l #L9#" + qq3 + "戰國無雙#l \r\n";
    txt += "  \r\n";
    txt += "";
    txt += "\t\t\t #fs20##e#r#L50#【返回】#l\r\n\r\n";
}

let selection = npc.askMenuS(txt, true);

switch (selection) {

    case 0:
        player.changeMap(925020001);
        break;
    case 66:
        player.changeMap(980030000);
        break;
    case 88:
        player.runScript("城戰活動");
        break;
    case 1:
        player.runNpc("mc2_enter");
        break;
    case 2:
        player.runScript("次元入侵進場");
        break;
    case 3:
        player.showProgressMessageFont("記得報名在這邊 →", 10, 50, 10, 60 * 1000); //MSG,字體,大小,顏色,毫秒後消失(也可設定0)
        player.showProgressMessageFont("記得報名在這邊", 10, 50, 10, 60 * 1000); //MSG,字體,大小,顏色,毫秒後消失(也可設定0)
        player.changeMap(910048000);
        break;
    case 4:
        player.runScript("椅子進場");
        break;
    case 5:
        //player.changeMap(910000008);
        player.runScript("聖誕進場");
        break;
    case 6:
        var AS = 0; // 配合迴圈
        let pass = Math.floor(Math.random() * getMinAndMax(1000, 9999)); // 密碼
        selection = npc.askNumber("防止腳本循環\r\n密碼為" + pass + "\r\n輸入密碼：", 1, 1, 9999);
        if (pass != selection) {
            npc.say("密碼錯誤");
        } else if (selection == pass) {
            player.addEventValue("檢測一次限購", 1, 1);
            if (AS == 0) {
                player.runScript("mPark02");
            }
        }
        break;
    case 7:
        //player.changeMap(749050400);
        player.runScript("旗幟爭奪");
        break;
    case 8:
        player.runScript("百鬼進場");
        break;
    case 9:

        player.runScript("戰國無雙進場");
        //player.changeMap(130000101);
        break;
    case 10:
        //if(player.isGm()) {
        player.runScript("aerkna");
        //}
        break;
    case 11:
        if (player.getEventValue("世界王困難獎勵記錄") > 3) {
            player.runNpc("9001033ON");
        } else {
            player.runNpc("9001033OFF");
        }
        break;
    case 12:
        break;
    case 13:
        player.changeMap(103000000);
        break;
    case 14:
        player.changeMap(951000000);
        break;
    case 15:
        player.changeMap(240010501);
        break;
    case 16:
        player.runScript("武陵進場");
        break;
    case 17:
        player.runScript("航海進場");
        break;
    case 18:
        player.runScript("跑環副本進場");
        break;
    case 19:
        player.runScript("改版圖騰進場");
        break;
    case 20:
        player.runScript("改版圖騰進場2");
        break;
    case 21:
        player.runScript("煉血洞府進場");
        break;
    case 22:
        player.runScript("機器人副本進場");
        break;
    case 23:
        player.runScript("航海困難入場");
        break;
    case 24:
        player.setEvent(null);
        player.changeMap(450002023);
        break;
    case 25:
        player.changeMap(910196001);
        break;
    case 29:
        player.changeMap(992000000);
        break;
    case 30:
        player.runScript("無限火力");
        break;
    case 31:
        player.runScript("創世忍苦入場");
        break;
    case 32:
        player.runScript("聖誕進場");
        break;
    case 33:
        player.runScript("靈魂拯救者入場");
        break;
    case 34:
        player.runScript("碎夢塔");
        break;
    case 35:
        player.changeMap(910048000);
        break;
    case 36:
        player.changeMap(922290000);
        break;
    case 37:
        player.runScript("安哈林防禦入場");
        break;
    case 38:
        player.runScript("艾爾達光譜入場");
        break;
    case 39:
        player.runScript("球球島入場");
        break;
    case 50:


        player.changeMap(992000000);
        break;
}
function getMinAndMax(minVal, maxVal) { //隨機 最大值 最小值
    return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}
