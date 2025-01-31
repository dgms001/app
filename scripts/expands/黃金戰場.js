
//隊伍人數
let minPlayers = 1;
let maxPlayers = 6;
//隊伍等級
var minLevel = [200];
var maxLevel = [300];
//總次數
var maxenter = [1];
let BossName = "黃金戰場";
let PQLog = ["黃金戰場"];
let event = ["黃金戰場"];
let onlyOne = true;
let warn = true;
let itemss1 = 4032055; //入場道具
let itemss2 = 0; //數量


var XC01 = "#fUI/NameTag.img/medal/175/w#"; // - BURNING(左)
var XC02 = "#fUI/NameTag.img/medal/175/c#"; // - BURNING(中)
var XC03 = "#fUI/NameTag.img/medal/175/e#"; // - BURNING(右)
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
var py = getmaxhpInfo();

var text = "";
text = "#fs21##e#r[黃金戰場]\r\n";


text += "#fs16##b";
text += "每日次數:[" + player.getEventValue("黃金戰場") + "/1]\r\n";
//text += "#b角色真實血量:["+py.maxhp+"] 目前增加血量:["+player.getPQLog("紀錄增加血量")+"/3000]\r\n";
text += "擊殺怪物機率掉落#v2630512#\r\n\r\n";





text += "\t\t\t\t\t#fs16##r#L0#進入黃金戰場#l\r\n\r\n";
text += "\t\t\t\t\t#r#L66##e使用#v2633609#重載副本#l\r\n\r\n";


let sel = npc.askMenuA(text, true);
//text += "\r\n";
//let sel = npc.askMenuA("" + text,true);
if (sel == 0) {
    if (party == null || player.getId() != party.getLeader()) {
        npc.sayNext("#fs16##e#b\r\n\r\n\r\n\r\n你需要有一個#r" + minPlayers + "~" + maxPlayers + "#b人的隊伍.並且等級在" + minLevel[sel] + "~" + maxLevel[sel] + ",\r\n那麼請讓你的組隊長和我對話吧!", true);
    } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
        npc.sayNext("#fs16##e#b\r\n\r\n\r\n\r\n你需要有一個#r" + minPlayers + "~" + maxPlayers + "#b人的隊伍.!", true);
    } else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < minPlayers) {
        npc.sayNext("#fs16##e#b\r\n\r\n\r\n\r\n你隊員的等級要在" + minLevel[sel] + "~" + maxLevel[sel] + "內!", true);
    } else if (party.getMembersCount(map.getId(), 1, 300) < party.getMembersCount()) {
        npc.sayNext("#fs16##e#b\r\n\r\n\r\n\r\n好像有隊員在其他地方，請把隊員都召集到這裡！", true);
    } else if (player.getEventValue(event[sel]) >= maxenter[sel]) {
        npc.sayNext("#fs16##e#b\r\n\r\n\r\n\r\n次數已經達到上限了。", true);
    }
    /*else if (party.getNotHasItemMember​​(item,itemcount)) {
    npc.sayNext("#fs16##e#b隊伍中有人#v"+item+"#不足.", true);
    } */
    else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
        npc.sayNext("#fs16##e#b\r\n\r\n\r\n\r\n已經有隊伍在進行了,請更換其他頻道嘗試。", true);
    }
    //npc.broadcastPlayerNotice(49,"【"+BossName+"】 " + player.getName() + " 帶領成員進入！！");
} else if (sel == 1) {
    text = "25萬楓點:100HP\r\n剩餘可購買次數:[" + (40 - player.getEventValue("楓點HPMP")) + "]";
    let YN = npc.askNumber("" + text + "\r\n#b請輸入兌換數量：", 1, 1, 40);
    if (player.getCashShopCurrency(2) < YN * 250000) {
        npc.say("#fs16##b#e楓點不足，無法購買");
    } else if ((40 - player.getEventValue("楓點HPMP")) < YN) {
        npc.say("#fs16##b#e次數不足，無法購買");
    } else {
        player.addEventValue("楓點HPMP", YN, 1);
        player.modifyCashShopCurrency(2, -YN * 250000);
        player.increaseMaxHp(YN * 100);
        player.showSystemMessage("血量增加 " + YN * 100 + " 了");
    }
} else if (sel == 2) {
    text = "25萬楓點:100MP\r\n剩餘可購買次數:[" + (40 - player.getEventValue("楓點HPMP")) + "]";
    let YN = npc.askNumber("" + text + "\r\n#b請輸入兌換數量：", 1, 1, 40);
    if (player.getCashShopCurrency(2) < YN * 250000) {
        npc.say("#fs16##b#e楓點不足，無法購買");
    } else if ((40 - player.getEventValue("楓點HPMP")) < YN) {
        npc.say("#fs16##b#e次數不足，無法購買");
    } else {
        player.addEventValue("楓點HPMP", YN, 1);
        player.modifyCashShopCurrency(2, -YN * 250000);
        player.increaseMaxMp(YN * 100);
        player.showSystemMessage("魔量增加 " + YN * 100 + " 了");
    }
} else if (sel == 3) {
    text = "5樂豆:100HP\r\n剩餘可購買次數:[" + (40 - player.getEventValue("樂豆HPMP")) + "]";
    let YN = npc.askNumber("" + text + "\r\n#b請輸入兌換數量：", 1, 1, 40);
    if (player.getCashShopCurrency(1) < YN * 5) {
        npc.say("#fs16##b#e樂豆不足，無法購買");
    } else if ((40 - player.getEventValue("樂豆HPMP")) < YN) {
        npc.say("#fs16##b#e次數不足，無法購買");
    } else {
        player.addEventValue("樂豆HPMP", YN, 1);
        player.modifyCashShopCurrency(1, -YN * 5);
        player.increaseMaxHp(YN * 100);
        player.showSystemMessage("血量增加 " + YN * 100 + " 了");
    }
} else if (sel == 66) {
            var bossevent = Array("黃金戰場");
        if (player.hasItem(2633609, 1)) {
            for (var i = 0; i < bossevent.length; i++) {
				player.loseItem(2633609, 1)
                player.addPQLog(bossevent[i], -1, 1);
                player.addEventValue(bossevent[i], -1, 1);
            }
            player.addEventValue("每日BOSS重置", 1, 1);
            npc.broadcastPlayerNotice(7, "[副本系統]  玩家 ★★★ " + player.getName() + " ★★★ 重置" + BossName + "副本");
            npc.say("重置成功");
        } else {
            npc.say("你重置物品不足");
        }
 }

function getmaxhpInfo() {
    var sql = "SELECT maxhp FROM characters WHERE id = '" + player.getId() + "' ;";
    var resultList = player.customSqlResult(sql);
    var charInfo = {};
    for (var i = 0; i < resultList.size(); i++) {
        var result = resultList.get(i);
        if (result == null) {
            break;
        }
        charInfo.maxhp = result.get("maxhp");
    }
    return charInfo;
}
