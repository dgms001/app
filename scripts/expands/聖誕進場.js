/*
 * AuroMS MapleStory server emulator written in Java
 * Copyright (C) 2018 dgms
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/* global npc, player, map */

let minPlayers = 4;
let maxPlayers = 6;
//等級限制
var minLevel = [200];
var maxLevel = [300];
//次數限制
var maxenter = [100];
let BossName = "聖誕雪人";
let PQLog = ["聖誕BOSS"];
let event = ["XMAS"];
let onlyOne = true;
let warn = true;

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
var XC01 = "#fUI/NameTag.img/medal/175/w#";// - BURNING(左)
var XC02 = "#fUI/NameTag.img/medal/175/c#";// - BURNING(中)
var XC03 = "#fUI/NameTag.img/medal/175/e#";// - BURNING(右)


var text = "" + Icon[17][1] + "#fs24##b#e#fc0xFFCC13AB#  " + bossname + "" + Icon[17][1] + "\r\n";
text += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
        + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
        + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
        + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "#n#k\r\n";
text += "\r\n#b#n#fs11#"
text += "\t\t\t\t\t   人數4-6人\r\n";
text += "\t\t\t     全員獎勵(帳號限定):#v4310011#\r\n";
text += "\t\t\t     掉落物:[#v4000539##v4000540##v4000541##v4000850#]\r\n";
text += "\t\t\t\t 每日可進入100次 獎勵一次";
text += "\r\n#fs15#";

for (var i = 0; i < PQLog.length; i++) {
        text += "#b\t   #L" + i + "##b " + PQLog[i] + " [#r" + player.getPQLog(PQLog[i]) + "/#r" + maxenter[i] + "#b]#l";
}
text += "#b#L999#聖誕商店#l\r\n\r\n";
text += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
        + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
        + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
        + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n";
let sel = npc.askMenu("" + text, true);
if (sel == 999) {
        player.runScript("聖誕商店")
} else if (party == null || player.getId() != party.getLeader()) {
        npc.sayNextS("#fs18##e#b\t  請玩家先創建隊伍\r\n\t #fs14#此副本接受#r[" + minPlayers + "-" + maxPlayers + "]#b人的隊伍\r\n\t  並且等級在#r[" + minLevel[sel] + "-" + maxLevel[sel] + "]#b之間\r\n\t   讓你的隊長和我對話吧!", true);
} else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
        npc.sayNextS("#fs17##e#b你需要有一個#r" + minPlayers + "-" + maxPlayers + "#b人的隊伍.!", true);
} else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < party.getMembersCount(map.getId(), 1, 300)) {
        npc.sayNextS("#fs17##e#b你隊員的等級要在#r[" + minLevel[sel] + "-" + maxLevel[sel] + "]#b之間!", true);
} else if (party.numberOfMembersInChannel() < party.getMembersCount()) {
        npc.sayNextS("#fs17##e#b好像你有隊員在其他地方,請把隊員都召集到這裡!");
} else if (!party.isAllMembersAllowedPQ(event[sel], maxenter[sel])) {
        npc.sayNextS("#fs17##e#b你隊員#r[" + party.getNotAllowedMember(event[sel], maxenter[sel]) + "]#b次數已經達到上限了。", true);
} else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
        npc.sayNextS("#fs17##e#b已經有隊伍在進行了,請更換其他頻道嘗試。", true);
} else {

}