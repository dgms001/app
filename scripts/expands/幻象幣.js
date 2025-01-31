
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
let mapA = map.getId();
xianzhi()
txt = "\t" + Icon[17][1] + "#fs18##fc0xFF10caf8##e圓夢幣[USDT]" + Icon[17][1] + "#r#n\r\n";
txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
    + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
    + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
    + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n";
txt += "  \t\t#fs11#當前價格:" + getmoney() + "楓點[時序]\r\n";

txt += "\t\t\t\t#fs11##L1#" + Icon[103][1] + "#r歷史走勢#l\r\n\r\n";
txt += "   #fs11##L2#" + Icon[103][1] + "#r我要買入#l#L3#" + Icon[103][1] + "#b我要賣出#l#L4#" + Icon[103][1] + "#fc0xFF10caf8#說 明 書#l\r\n\r\n";
txt += "#b當前總流通:" + getsz() + "楓點\r\n";
txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
    + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
    + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
    + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n\r\n";
txt += "";

let selection = npc.askMenuS(txt, true);

switch (selection) {
    case 1:
        phb();
        break;
    case 2: //買入
        selection = npc.askNumber("購買#z4310236#[" + getmoney() + "楓點:#v4310236#X1]#k\r\n請輸入購買個數：", 1, 1, 999);
        if (player.getCashShopCurrency(2) < selection * getmoney()) {
            npc.say("#fs16##b#e楓點不足，無法購買");
        } else if (player.getFreeSlots(4) < 1) {
            npc.say("#fs14##b請先確保其他欄空1格以上!");
        } else if (getmoney() < 0) {
            npc.say("#fs14##b此幣面臨退市等待GM退市衝上!");
        } else {
            player.showSystemMessage("消耗 [ " + (selection * getmoney()) + " ] 楓點");
            player.modifyCashShopCurrency(2, - (selection * getmoney()));
            player.gainItem(4310236, selection);
            updateitems(1, selection);
            player.addEventValue("圓夢幣每日限制", selection, 1);
            updateLeiji(1, (selection * getmoney()));
            npc.say("#fs16##b#e購買成功");
            player.runScript("圓夢幣");
        }
        break;
    case 3: //賣出
        selection = npc.askNumber("賣出#z4310236#[" + getmoney() + "楓點:#v4310236#X1]#k\r\n請輸入賣出個數：", 1, 1, 999);
        if (!player.hasItem(4310236, selection)) {
            npc.say("#fs16##b#e數量不足，無法賣出");
        } else if (player.getCashShopCurrency(2) > 2000000000) {
            npc.say("#fs16##b#e楓點超過20E,請先兌換楓葉後再兌換");
        } else {
            player.showSystemMessage("獲得 [ " + (selection * getmoney()) + " ] 楓點");
            player.modifyCashShopCurrency(2, (selection * getmoney()));
            player.loseItem(4310236, -selection);
            player.addEventValue("圓夢幣每日限制", selection, 1);
            updateitems(1, -selection);
            //updateLeiji(1,  - (selection * getmoney()));
            npc.say("#fs16##b#e賣出成功");
            player.runScript("圓夢幣");
        }
        break;
    case 4:
        sms();
        break;
}
function updateitems(id, sl) { //更新總額度 +-
    var sql = "update dgms_usdt SET Allsl = Allsl+" + sl + " where ID = '" + id + "';"; //疑問 有兩個分號;
    player.customSqlUpdate(sql);
}

function updateLeiji(id, sl) { //獲得總市值
    var sql = "update dgms_usdt SET Leiji = Leiji+" + sl + " where ID = '" + id + "';"; //疑問 有兩個分號;
    player.customSqlUpdate(sql);
}
function getmoney() { //獲取幣價
    var sql = "select ALLmoney from dgms_usdt where ID = ? ";
    var result = player.customSqlResult(sql, 1);
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("ALLmoney");
        }
    } else {
        return 0;
    }

}
function getsz() { //獲取市值
    var sql = "select Leiji from dgms_usdt where ID = ? ";
    var result = player.customSqlResult(sql, 1);
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("Leiji");
        }
    } else {
        return 0;
    }

}
function phb() {
    var sql = "select id,PastALLmoney from dgms_usdtLog where ID >0 order by ID desc, ID desc limit 100";
    var resultList = player.customSqlResult(sql);
    var text = "\t\t  #e#r#fs24##fc0xFFFF4EFF#【近期查閱】#k#n\r\n\r\n#fs18#";
    text += "     #b#e近期    #n#e#g價格#n#n\t #e #n\r\n";
    for (var i = 0; i < resultList.size(); i++) {
        var rank = i + 1;
        var result = resultList.get(i);
        if (result == null) {
            break;
        }
        if (rank == 1) {
            text += "#b";
        } else if (rank == 2) {
            text += "#b";
        } else if (rank == 3) {
            text += "#b";
        }
        text += "\t   #b" + rank + "\t  #r";
        for (var j = 18 - result.get("id").length; j > 0; j--) {
            text += "";
        }
        text += result.get("PastALLmoney") + "#r\t  ";

        //text += result.get("id") + "\t";
        text += "\r\n";
    }
    npc.askMenuS(text, true);
}
function sms() {
    var txt = "";
    txt += "1.圓夢幣是一種通過玩家賣買以及結合隨機串碼變動的虛擬幣\r\n\r\n";
    txt += "2.每小時0-1分鐘會隨機+-貨幣價格\r\n\r\n";
    txt += "3.每小時0-1分鐘結算上輪總貨幣對比現總貨幣也會影響價格\r\n\r\n";
    txt += "4.每小時0-1分會有圓夢幣的提示也可以查閱歷史走勢\r\n\r\n";
    txt += "5.所以每個玩家都可以參與模擬機構的方式控制貨幣走勢\r\n\r\n";
    txt += "6.因此會有機構產生從而割其他玩家的韭菜或者被割韭菜\r\n\r\n";
    txt += "7.圓夢幣每天只能購買10萬個\r\n\r\n";
    txt += "8.GM會有總數量的50%圓夢幣來玩這個系統[因此不要想著一家獨大會沒內褲的]\r\n\r\n";
    txt += "9.好了多的不說了誰是韭菜馬上見分曉\r\n\r\n";
    txt += "10.幣價負數GM會清空所有玩家的圓夢幣,然後重新上市貨幣/10W楓點[這種情況極難發生]\r\n\r\n";
    txt += "11.具體不多說,反正貨幣影響價格系統占40% 人為占60%";
    npc.askMenuS(txt, true);

}
function xianzhi() {
    if (player.getEventValue("圓夢幣每日限制") > 100000) {
        npc.askMenuS("今日賣買次數已超過10W圓夢幣,請明天再來");
    }
}
