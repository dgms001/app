/**
 * 拍賣系統
 * bydgms
 * qq381991414
 */
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

var timestamp = new Date().getTime();
var time = 1000 * 60 * 5;
var timesOP = java.lang.System.currentTimeMillis();
var SOP = 10; //一分鐘 這裡自己改時間
var TOP = parseInt(SOP - (((timesOP - parseInt(player.getQuestRecordEx(100000008))) / 1000)));
ban();
retur();
if (180 - (timestamp - getAuctionsTmie()) / 1000 > 0 && 180 - (timestamp - getAuctionsTmie()) / 1000 < 10) {
    npc.broadcastPlayerNotice(37, "[競標系統]當前價格:" + getmoney() + " 最後10秒 到底花落誰家呢!");

}
var txt = "\t" + Icon[17][1] + "#fs20##fc0xFF00caf2##e競標系統" + Icon[17][1] + "#r#n\r\n";
txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
    + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
    + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
    + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n";
if (whethershelves() == 0) {
    txt += "#fs11##r";
    txt += "目前暫定開放兩種物品競標\r\n";
    txt += "選擇要競拍的商品[楓點模式]\r\n";
    txt += "#b競標結束後買家不領取則流局,且永久不可使用競標功能\r\n";
    txt += "#b競標結束後賣家不領則失去上架物品也沒有楓點且永久BAN競標\r\n";
    txt += "#b競標結束後10小時後未領取,可以找GM清理\r\n";
    txt += "#L0##v4310086# #L1##v4310237#\r\n\r\n";
    txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
        + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
        + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
        + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n\r\n";
}
if ((timestamp - getAuctionsTmie()) / 1000 < 180) {
    txt += "#fs11##r";
    txt += "\t\t\t\t正在競標的商品為:#v" + whethershelves() + "#\r\n\t\t";
    txt += "" + 180 - (timestamp - getAuctionsTmie()) / 1000 + " 秒後無人出價競拍結束\r\n"
    txt += "\t\t\t#b當前價格:" + getmoney() + " 競拍玩家:" + getname() + "\r\n"
    txt += "\t\t\t#b距離你下次競標還有[" + TOP + "]秒\r\n"
    if (TOP < 0) {
        txt += "\t\t\t#r#L2#" + Icon[103][1] + "我要競價[楓點模式]\r\n";
    }
}
if (getname() == 121122 && player.getEventValue("上架商品記錄") > 0) {
    //txt += "#L5#" + Icon[103][1] + "我要下架\r\n";
}

if (player.getName() == getname() && (timestamp - getAuctionsTmie()) / 1000 > 180 && getod() == 0) {
    txt += "#L3#" + Icon[103][1] + "買家領取拍賣物品\r\n";

}
if (player.getEventValue("上架商品記錄") > 0 && (timestamp - getAuctionsTmie()) / 1000 > 180) {
    txt += "#L4#" + Icon[103][1] + "賣家領取錢錢\r\n";

}

let selection = npc.askMenuS(txt);
if (selection == 0) {
    if (!player.hasItem(4310086, 1)) {
        npc.say("你沒有上架的道具!");
    } else if (whethershelves() == 0) {
        dijia = npc.askNumber("輸入低價：", 5000000, 1, 9999999);
        insauction(1, 4310086, timestamp); //上傳
        insbid(1, dijia, timestamp, 0); //上傳
        upname(121122, 1);
        player.loseItem(4310086, 1);
        player.addEventValue("上架商品記錄", 5000000, 1000);
        npc.broadcastWeatherEffectNotice(20, "[競拍系統] 玩家 " + player.getName() + " 上架了自由轉職硬幣,底價:" + dijia + "楓點!!", 100000);
    } else {
        npc.say("已經有人上架了物品哦");
    }
} else if (selection == 1) {
    if (!player.hasItem(4310237, 1)) {
        npc.say("你沒有上架的道具!");
    } else if (whethershelves() == 0) {
        dijia = npc.askNumber("輸入低價：", 1, 1, 9999999);
        insauction(1, 4310237, timestamp); //上傳
        insbid(1, dijia, timestamp, 0); //上傳
        upname(121122, 1);
        player.loseItem(4310237, 1);
        player.addEventValue("上架商品記錄", 1, 1000);
        npc.broadcastWeatherEffectNotice(20, "[競拍系統] 玩家 " + player.getName() + " 上架了NOVA硬幣,底價:" + dijia + "楓點!!", 100000);
    } else {
        npc.say("已經有人上架了物品哦");
    }
} else if (selection == 2) {
    var timestamp = new Date().getTime();
    var time = 1000 * 60 * 5;
    paimaijia = npc.askNumber("#b請加價:\r\n#r[加價不是現價,你輸入多少就是 現在的價格+你輸入的價格]：", 1000000, 1000000, 100000000);
    if ((timestamp - getAuctionsTmie()) / 1000 > 180) {
        npc.say("本次競拍已經結束,請等待買賣雙方領取完畢即可下次拍賣");
    } else if (player.getEventValue("上架商品記錄") > 0) {
        npc.say("賣家不可參與競價");
    } else if (player.getCashShopCurrency(2) < (getmoney() + paimaijia)) {
        npc.say("#fs16##b#e楓點不足" + (getmoney() + paimaijia) + "，無法競價");
    } else if (getbid() == 0) { //競拍
        insbid(1, paimaijia, timestamp, 0); //上傳
        npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "發出競價 當前價格:" + getmoney() + "楓點!");
        player.updateQuestRecordEx(100000008, timesOP);
    } else {
        upbid(1, paimaijia, timestamp, 0); //競拍
        npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 發出競價 當前價格:" + getmoney() + "楓點!");
        player.updateQuestRecordEx(100000008, timesOP);
    }
} else if (selection == 3) { //領取拍賣品 競拍最高價
    if (player.getCashShopCurrency(2) < getmoney()) {
        player.addEventValue("惡意拍賣記錄", 1, 3000)
        npc.say("#fs16##b#e楓點不足" + getmoney() + "，無法領取,惡意拍賣記錄" + player.getEventValue("惡意拍賣記錄") + "次 三次後永久不可參與競拍");
    } else if (player.getFreeSlots(4) < 1) {
        npc.say("其他欄不足,請清理後再來");
    } else if (player.getName() == getname()) {
        npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "花費" + getmoney() + "楓點 從一億人競標中獲得了競拍物品!");
        player.modifyCashShopCurrency(2, - getmoney());
        player.gainItem(whethershelves(), 1);
        upod(1, 1);
        //公告
    } else {
        npc.say("你不應該點開這個");
    }
} else if (selection == 4) { //賣出拍賣品 獲得楓點
    liuju();
    if (getod() == 0) { //if == 1 才可以領
        npc.say("#fs16##b#e買家還未領取,請稍等!");
    } else if (player.getEventValue("上架商品記錄") > 0) {
        npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "在競標中賣出了競標物品,價格為:" + getmoney() + "楓點,恭喜這個B!");
        player.modifyCashShopCurrency(2, getmoney());
        player.addEventValue("拍賣商品獲得楓點", getmoney(), 999);
        player.resetEventValue("上架商品記錄");
        delAuction();
        delAuctions();
        npc.say("恭喜!");
        //公告
    } else {
        npc.say("你不應該點開這個");

    }
} else if (selection == 5) { //下架
    if (player.getEventValue("拍賣檢測下架") > 0) {
        npc.say("今天已經下架過一次了,無法下架!!");
    } else if (getname() == 121122) {
        player.addEventValue("拍賣檢測下架", 1, 1);
        player.gainItem(whethershelves(), 1);
        delAuction();
        delAuctions();
        player.resetEventValue("上架商品記錄");
        npc.say("下架成功");
    } else {
        npc.say("已經有人競拍,無法下架");
    }
}
function whethershelves() { //是否上架  =0就是沒有上架 獲得當前競價商品id
    var sql = "select itemid from dgms_Auction where id = ? ";
    var result = player.customSqlResult(sql, 1);
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("itemid");
        }
    } else {
        return 0;
    }
}
function getmoney() { //獲取當前競價商品最終價格
    var sql = "select quantity from dgms_Auctions where id = ? ";
    var result = player.customSqlResult(sql, 1);
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("quantity");
        }
    } else {
        return 0;
    }
}
function getname() { //獲取當前競價商品最終價格
    var sql = "select name from dgms_Auctions where id = ? ";
    var result = player.customSqlResult(sql, 1);
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("name");
        }
    } else {
        return 0;
    }
}

function getAuctionsTmie() { //獲取拍賣者時間
    var sql = "select time from dgms_Auctions where id = ? ";
    var result = player.customSqlResult(sql, 1);
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("time");
        }
    } else {
        return 0;
    }
}
function getbid() { //是否有人進價
    var sql = "select quantity from dgms_Auctions	where id = ? ";
    var result = player.customSqlResult(sql, 1);
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("quantity");
        }
    } else {
        return 0;
    }
}

function getod() { //賣家是否已經領獎
    var sql = "select od from dgms_Auctions	where id = ? ";
    var result = player.customSqlResult(sql, 1);
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("od");
        }
    } else {
        return 0;
    }
}

function upname(name, id) { //上架第一個是GM購買
    var sql = "update dgms_Auctions SET name = '" + name + "' where id = '" + id + "';"; //疑問 有兩個分號;
    player.customSqlUpdate(sql);
}
function insbid(id, quantity, time, od) { //競拍者出價 增加
    var sql = "insert into dgms_Auctions(id,quantity,time,name,od) values('" + id + "','" + quantity + "','" + time + "','" + player.getName() + "','" + od + "')";
    player.customSqlInsert(sql);

}
function upbid(id, quantity, time, od) { //競拍者出價 更新
    var sql = "update dgms_Auctions SET quantity = quantity+" + quantity + ", time = '" + time + "' ,name = '" + player.getName() + "',od = '" + od + "' where id = '" + id + "';"; //疑問 有兩個分號;
    player.customSqlUpdate(sql);
}

function upod(od, id) { //買家領取完畢
    var sql = "update dgms_Auctions SET od = od+" + od + " where id = '" + id + "';"; //疑問 有兩個分號;
    player.customSqlUpdate(sql);
}
function insauction(id, item, time) { //競拍者出價 增加
    var sql = "insert into dgms_Auction(id,itemid,time) values('" + id + "','" + item + "','" + time + "')";
    player.customSqlInsert(sql);

}
function delAuction() { //刪除拍賣記錄
    var sql = "delete from dgms_Auction where ID > 0";
    player.customSqlUpdate(sql);

}
function delAuctions() { //刪除購買記錄
    var sql = "delete from dgms_Auctions where ID > 0";
    player.customSqlUpdate(sql);

}
function retur() {
    let mapA = map.getId();
    if (mapA != 876006000) {
        npc.askMenuS("競標請至1S分流自由市場最左邊NPC");

    }
}
function ban() {
    if (player.getEventValue("惡意拍賣記錄") > 3) {
        npc.askMenuS("由於你惡意競標,現在對你做出永久不可用競標功能");
    }
}
function liuju() {
    if (getname() == 121122) {
        player.gainItem(whethershelves(), 1);
        delAuction();
        delAuctions();
        player.resetEventValue("上架商品記錄");
        npc.broadcastPlayerNotice(37, "流局了 你們到底行不行!!!");
        npc.askMenuS("流局");
    }
}
