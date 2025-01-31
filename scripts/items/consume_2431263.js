var status = -1
    var txt;
var sel;
let number;
/*------------------------------------------------------------*/
var ltz45 = "#fMap/MapHelper.img/weather/starPlanet2/5#"; //
var ltz47 = "#fMap/MapHelper.img/weather/starPlanet/4#"; //

var GC2 = "#fEffect/CharacterEff/1022223/2/0#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1112924/0/0#"; //"+z+"//小選項用
var GC1 = "#fEffect/CharacterEff/1082700/2/0#";
var XD0 = "#fEffect/CharacterEff/1051366/0/0#";
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/5/icon#"; //最上面的

var z5 = "#fEffect/CharacterEff/1112904/2/1#"; //五角花
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

txt = "\t" + Icon[17][1] + "#fs20##fc0xFF00caf2##e會員中心" + Icon[17][1] + "#r#n\r\n";
txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
+Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
+Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
+Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n";

//txt = "\t      #fs32##fc0xFFE508F3##e"+zx50+"會員中心"+zx50+"\r\n#n";
//txt += "" +p9+p9+p9+p9+p9+p9+p9+p9+p9+p9+p9+p9+p9+p9+p9+ "\r\n";
txt += "#fs11##k";
txt += " 餘額點數:[#r" + getHyPay() + "#k]點\r\n 樂豆點數:[#r" + player.getCashShopCurrency(1) + "#k]點\r\n#b";
txt += "#L1#" + Icon[103][1] + "立即贊助 (比值 1:1)#l  #L4#" + Icon[103][1] + "累積贊助獎勵#l\r\n\r\n";
txt += "#L2#" + Icon[103][1] + "餘額轉換#l #L1012#" + Icon[103][1] + "餘額換樂豆#l #L3#" + Icon[103][1] + "樂豆商店#l\r\n\r\n";
//txt += "#L5#"+Icon[103][1] + "會員裝備強化#l \r\n";
//txt += "#L6#"+Icon[103][1] + "會員積分轉換#l \r\n";
txt += "#L7##r" + Icon[103][1] + "開通月會員功能#l #L9##r" + Icon[103][1] + "自由轉職#l\r\n\r\n";
txt += "#L8##r" + Icon[103][1] + "#v4310237#強化#l #L13##r" + Icon[103][1] + "#v4310225#強化#l #L15##r" + Icon[103][1] + "#v4310282#潛能#l \r\n\r\n";


if(player.getEventValue("自由專職箱") == 0){
txt += "#L11##r" + Icon[103][1] + "自由專職箱[個人使用]/2K樂豆/月/次#l";
}
txt += " #L14##r" + Icon[103][1] + "卸載NV#l\r\n\r\n";
txt += "\t\t\t#L12##r" + Icon[103][1] + "VIP倉庫取出物品[到期使用]#l \r\n\r\n";
txt += "\t\t\t\t#fs14##r#L10#【返回】#l\r\n\r\n";
txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
+Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
+Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
+Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n\r\n";

let selection = npc.askMenu(txt, true);

switch (selection) {
case 1:
    let url = "https://web-hosts.net/%E5%B9%BB%E8%B1%A1%E8%B0%B7.html";
    player.addEventValue("檢測總次數", 1, 999);
    player.addEventValue("檢測次數", 1, 1);
    player.openURL(url); //開這個就行兒子
    break;
case 2:
    txt = "";
    txt += "\t" + Icon[17][1] + "#fs20##fc0xFF00caf2##e轉換餘額" + Icon[17][1] + "#r#n\r\n";
    txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
    +Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
    +Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
    +Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n\r\n\r\n";
    txt += "#e#fs11##b";
    txt += " #L0#" + Icon[103][1] + "#v4036313# 換【餘額】#l #L1#" + Icon[103][1] + "【餘額】換 #v4036313##l\r\n\r\n\r\n";
    txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
    +Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
    +Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
    +Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n\r\n";
    txt += "\r\n";
    /* txt += "當前#b餘額#k數量：#d" + getHyPay() + "\r\n";
    txt += "#r當前點卷數量：#d" + player.getCashShopCurrency(1) + "#r\r\n";
    txt += "當前貨幣數量：#d" + player.getAmountOfItem(4000463) + "\r\n"; */
    //getpayLog();
    sel = npc.askMenu(txt, true);
    if (sel == 0) {
        var yue = player.getAmountOfItem(4036313);
        number = npc.askNumber("\r\n\t\t\t\t  #e#fs16##fc0xFF43EABE#【轉換餘額】\r\n\r\n#b兌換比例:\r\n【#v4036313##z4036313#*1:10餘額點數】\r\n\r\n#d請輸入你要消耗的餘額中介幣：", 1, 1, yue);
        if (number > yue) {
            npc.say("#e#fs17##v3801159# #z3801159#不足，請重新輸入");
        } else {
            addHyPay(number * 10);
            player.loseItem(4036313, number);
            player.addEventValue("兌換中介幣數量", number * 10, 3000)
            //npc.broadcastNotice("" + player.getName() + " 用 " + number + " 個星星 兌換 " + number * 1 + " 餘額點數");
            npc.say("#fs16##b#e兌換成功，共獲得 " + number * 10 + " 餘額");
        }
    } else if (sel == 1) {
        var yue = getHyPay();
        number = npc.askNumber("\r\n\t\t\t\t  #e#fs17##fc0xFF43EABE#【轉換餘額】\r\n\r\n#b兌換比例:\r\n【10餘額點數:#v4036313##z4036313#*1】\r\n\r\n#d請輸入你要獲取的餘額中介幣：", 1, 1, yue / 10);
        addHyPay(-number * 10);
        if (getHyPay() < 0) {
            player.loseItem(4036313);
            player.addEventValue("刷餘額", number, 999)
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM");
            npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 正在使用bug,看到此提示聯繫GM001");
            npc.say("傻逼你沒了 難受想哭");
        } else {
            player.gainItem(4036313, number);
			player.addEventValue("兌換中介幣數量", -number * 10, 3000)
        }

        //npc.broadcastNotice("" + player.getName() + " 用 " + number + " 餘額點數 購買 " + number * 1 + " 個星星");
        npc.say("#fs16##b#e兌換成功");

    }
    break;
case 1012:
    txt = "\t     #fs32##fc0xFFE508F3##e" + zx50 + "餘額轉樂豆" + zx50 + "\r\n#n";
    txt += "" + p9 + p9 + p9 + p9 + p9 + p9 + p9 + p9 + p9 + p9 + p9 + p9 + p9 + p9 + p9 + "\r\n";
    txt += "#fs14##k\r\n";
    txt += "餘額點數:[#r" + getHyPay() + "#k]點   樂豆點數:[#r" + player.getCashShopCurrency(1) + "#k]點\r\n";
    txt += "\r\n\t#g#L0##b" + z5 + " 餘額點數兌換成樂豆點數 " + z5 + "#l\r\n";
    txt += "\r\n";
    txt += "\r\n";

    sel = npc.askMenu(txt, true);
    if (sel == 0) {
        var yue = getHyPay();
        number = npc.askNumber("#fs18##e#b兌換比例:\r\n【1 餘額點數 : 1 樂豆點數】\r\n\r\n#d請輸入你要消耗的餘額：", 1, 1, yue);
        if (number > yue) {
            npc.say("餘額點數不足，請重新輸入");
        } else {
            addHyPayleji(number); //累計
            addHyPay(-number); //計算消耗總量
            //player.gainItem(4032031,-number);
            player.modifyCashShopCurrency(1, number)
            player.addEventValue("累計餘額換樂豆總數", number, 1000);
            //npc.broadcastNotice("" + player.getName() + " 用 " + number + " 餘額點數 兌換 " + number * 1 + " 樂豆點數");
            npc.say("#fs16##b#e兌換成功");
        }
    }
    break;
case 3:
    player.runScript("樂豆商店");
    break;
case 4:
    player.runScript("改版累積贊助獎勵");
    break;
case 5:
    player.runScript("會員裝備強化");
    break;
case 6:
    player.runScript("會員積分轉換");
    break;
case 8:
    player.runScript("NV幣強化");
    break;
case 9:
    player.runScript("自由轉職");
    break;
case 10:
    player.runScript("改版本服菜單");
    break;
	case 15:
    player.runScript("裝備蠟筆");
    break;
case 11:
revenue = parseInt(getHyPayLeiji(2));
    if (player.getCashShopCurrency(1) < 2000) {
        npc.say("#fs16##b#e樂豆不足，無法購買");
} else if (revenue < 20000) {
        npc.say("#fs14##b纍計不足2W，無法購買!");
    } else if (player.getFreeSlots(2) < 1) {
        npc.say("#fs14##b請先確保所有消耗空1格以上!");
}else{
player.modifyCashShopCurrency(1, -2000);
        player.gainItem(2431849, 1);
        player.addEventValue("自由專職箱", 1, 30)
}
    break;
case 12:
         player.runScript("賬號倉庫取出");
    break;
case 13:
    player.runScript("NB幣強化");
    break;
case 14:
if(!player.hasItem(3994020,1)){
	npc.say("#z3994020# 不足無法使用");
	}else{
    player.runScript("NV卸載");
	}
    break;
case 7:
    txt = "\t" + Icon[17][1] + "#fs20##fc0xFF00caf2#會員開通" + Icon[17][1] + "#r#n\r\n";
    txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
    +Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
    +Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
    +Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n\r\n";
    txt += "#fs13##r當前餘額:" + getHyPay() + "\r\n";
    txt += "#fs11##r開通會員後賬號通用,但是福利類只可使用一次\r\n";
    txt += "#fs11##r首次開通會有累計,後續就無了\r\n\r\n";
    txt += "#b初級會員福利[500餘額/月]:\r\n";
    txt += "#b1, 會員BUFF#r[一鍵使用BUFF效果]\r\n";
    txt += "#b2, 初級會員每日福利#r[每日一次]\r\n";
    txt += "#b3, 初級會員每日福利如下:\r\n";
    txt += "#b4, 17餘額[月510]\r\n";
    txt += "#b5, #z4009454# X 2000\r\n";
    txt += "#b6, #z2049323# X 20\r\n";
    txt += "#b7, #z5060048# X 8\r\n";
    txt += "#b8, #z2022709# X 1\r\n";

    txt += "#r高級會員福利[1500餘額/月]:\r\n";
    txt += "#b1, BOSS次數重置#r[每日一次]\r\n";
    txt += "#b2, 會員倉庫#r[一鍵存取貨幣材料]\r\n";
    txt += "#b3, 300W楓點一鍵滿萌寵等/階#r[月/次]\r\n";
    txt += "#b4, 1000樂豆購買NV幣#r[周/次]\r\n";
    txt += "#b5, 高級會員每日福利#r[每日一次]\r\n";
    txt += "#b6, 餘額55[月1650]\r\n";
    txt += "#b7, #z4009454# X 5000\r\n";
    txt += "#b8, #z2049323# X 50\r\n";
    txt += "#b9, #z5060048# X 20\r\n";
    txt += "#b10, #z2022709# X 2\r\n";

    txt += "#b#L0#" + Icon[103][1] + "點我開通[初級會員]#l\t#r#L1#" + Icon[103][1] + "點我開通[高級會員]#l\r\n\r\n";
    txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
    +Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
    +Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
    +Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n\r\n";
    //txt = "";
    //txt += "#fs14##b確定要消耗10積分開通會員嗎?\r\n";
    //txt += "";
    //txt += "#L0#點我開通#l\r\n";

    sel = npc.askMenu(txt, true);
    if (sel == 0) {
        if (getHyPay() < 500) {
            npc.say("#fs14##b您沒有足夠的餘額 無法開通!!");
        } else if (player.getEventValue("初級會員開通") >= 1) {
            npc.say("#fs14##b你已經是初級會員了,下個月再續費吧!!");
        } else if (player.getEventValue("第一次開通初級會員") == 0) {
            player.addEventValue("會員開通", 1, 1000);
            player.addEventValue("初級會員開通", 30, 1000);
            player.addEventValue("第一次開通初級會員", 1, 3000);
            player.loseItem(2435885);
            player.gainItem(2435885, 1);
            addHyPay(-500);
            addHyPayleji(+500);
            npc.broadcastNotice("玩家" + player.getName() + "開通初級會員功能!由於您是第一次開通所以有加累計贊助");
            npc.say("#fs14##b初級會員開通成功,獲得會員箱子!由於您是第一次開通所以有加累計贊助");
        } else {
            player.addEventValue("會員開通", 1, 1000);
            player.addEventValue("初級會員開通", 30, 1000);
            player.loseItem(2435885);
            player.gainItem(2435885, 1);
            addHyPay(-500);
            npc.broadcastNotice("玩家" + player.getName() + "開通初級會員功能!");
            npc.say("#fs14##b初級會員開通成功,獲得會員箱子!");
        }
    } else if (sel == 1) {
        if (getHyPay() < 1500) {
            npc.say("#fs14##b您沒有足夠的餘額 無法開通!!");
        } else if (player.getEventValue("高級會員開通") >= 1) {
            npc.say("#fs14##b你已經是高級會員了,下個月再續費吧!!");
        } else if (player.getEventValue("第一次開通高級會員") == 0) {
            player.addEventValue("會員開通", 1, 1000);
            player.addEventValue("高級會員開通", 30, 1000);
            player.addEventValue("第一次開通高級會員", 1, 3000);
            player.loseItem(2435885);
            player.gainItem(2435885, 1);
            addHyPay(-1500);
            addHyPayleji(+1500);
            npc.broadcastNotice("玩家" + player.getName() + "開通高級會員功能! 由於您是第一次開通所以有加累計贊助");
            npc.say("#fs14##b高級會員開通成功,獲得會員箱子!由於您是第一次開通所以有加累計贊助");
        } else {
            player.addEventValue("會員開通", 1, 1000);
            player.addEventValue("高級會員開通", 30, 1000);
            player.loseItem(2435885);
            player.gainItem(2435885, 1);
            addHyPay(-1500);
            npc.broadcastNotice("玩家" + player.getName() + "開通高級會員功能!");
            npc.say("#fs14##b高級會員開通成功,獲得會員箱子!");
        }

    }

}
function getHyPayLeiji() {
    var sql = "select leiji from hypay where accountid = ? ";
    var result = player.customSqlResult(sql, player.getAccountId());
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("leiji");
        }
    } else {
        return 0;
    }

}
function getHyPay() {
    var sql = "select pay from hypay where accountid = ? ";
    var result = player.customSqlResult(sql, player.getAccountId());
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("pay");
        }
    } else {
        return 0;
    }

}

function addHyPay(price) {
    if (price < 0) {
        price = price * +1;
    }
    var sql = "update hypay set pay=pay+?,payused=payused+" + price + " where accountId=?";
    var result = player.customSqlUpdate(sql, price, player.getAccountId());

}

function addHyPayleji(price) {
    if (price < 0) {
        price = price * -1;
    }
    var sql = "update hypay set leiji=leiji+?,payused=payused+" + price + " where accountId=?";
    var result = player.customSqlUpdate(sql, price, player.getAccountId());

}

function getIDname() {
    var sql = "select name from accounts where id = ? ";
    var result = player.customSqlResult(sql, player.getAccountId());
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("name");
        }
    } else {
        return 0;
    }

}

function getpayLog() {
    if (player.getEventValue("餘額") == 0) {
        var sql = "insert into hypay(accountid,name,accname) values('" + player.getAccountId() + "','" + player.getName() + "','" + getIDname() + "')";
        player.customSqlInsert(sql);
        player.addEventValue("餘額", 1, 999);
    }
}
