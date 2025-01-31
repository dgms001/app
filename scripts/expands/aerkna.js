let minPlayers = 1;
let maxPlayers = 6;
let minLevel = [260];
let maxLevel = [300];
let maxenter = [1];

let BossName = "調和精靈";
let PQLog = ["調和精靈"];
let event = ["boss_aerkna"];
let onlyOne = true;
let warn = true;
let checkLimit = 1000000;


var XC01 = "#fUI/NameTag.img/medal/175/w#";// - BURNING(左)
var XC02 = "#fUI/NameTag.img/medal/175/c#";// - BURNING(中)
var XC03 = "#fUI/NameTag.img/medal/175/e#";// - BURNING(右)
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


var text = "";
text = "\t" + Icon[17][1] + "#fs20##fc0xFF00caf2##e調和精靈" + Icon[17][1] + "#r#n\r\n";
text += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
        + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
        + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
        + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n";
//text += "\t\t\t         #fs32##b#e#fc0xFFF0F90A#【" + BossName + "】\r\n";
//text += ""+XC01;
for (var i = 0; i <= 240; i++) {
        //text += XC02;
};
//text += XC03 + "\r\n"
text += "#n#fs11#";
text += "人數限制:[" + minPlayers + "-" + maxPlayers + "]  次數限制:[" + player.getEventValue(PQLog) + "/" + maxenter + "] 入場等級:[" + minLevel + "-" + maxLevel + "]\r\n";
text += "#b";
text += "需搭配強化的調和精靈6件套才能有效對王造成傷害\r\n";

text += "#fs17##e\t     ";
for (var i = 0; i < PQLog.length; i++) {
        text += "#g#fs20##e#L" + i + "#進入" + PQLog[i] + "#l";
        //text += "#r暫時關閉";

}
text += "#r#fs11##L2#副本說明#l\r\n\r\n";
text += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
        + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
        + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
        + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n\r\n";




if (player.isGm()) {
        text += "\r\n#L3#GM創裝備#l\r\n";
        text += "        #g#fs20##e#L0#進入" + PQLog[0] + "#l";
}

let sel = npc.askMenuS(text, true);
if (sel == 0) {
        if (party == null && player.getId() != party.getLeader()) {
                npc.sayNextS("#fs18##e#b\t  請玩家先創建隊伍\r\n\t #fs14#此副本接受#r[" + minPlayers + "-" + maxPlayers + "]#b人的隊伍\r\n\t  並且等級在#r[" + minLevel[sel] + "-" + maxLevel[sel] + "]#b之間\r\n\t   讓你的隊長和我對話吧!", true);
        } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
                npc.sayNextS("#fs17##e#b你需要有一個#r" + minPlayers + "-" + maxPlayers + "#b人的隊伍.!", true);
        } else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < party.getMembersCount(map.getId(), 1, 300)) {
                npc.sayNextS("#fs17##e#b你隊員的等級要在#r[" + minLevel[sel] + "-" + maxLevel[sel] + "]#b之間!", true);
        } else if (party.numberOfMembersInChannel() < party.getMembersCount()) {
                npc.sayNextS("#fs17##e#b好像你有隊員在其他地方,請把隊員都召集到這裡!");
        } else if (!party.isAllMembersAllowedPQ(PQLog[sel], maxenter[sel])) {
                npc.sayNextS("#fs17##e#b你隊員#r[" + party.getNotAllowedMember(PQLog[sel], maxenter[sel]) + "]#b次數已經達到上限了。", true);
        } else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
                npc.sayNextS("#fs17##e#b已經有隊伍在進行了,請更換其他頻道嘗試。", true);
        }

        if (warn) {
                //進場通知
                npc.broadcastPlayerNotice(49, "【" + BossName + "】 " + player.getName() + " 帶領成員進入 AUT-調和精靈！！");

        }
}
if (sel == 2) {
        txt = "#b副本說明:#k\r\n";
        txt += " 地圖總共4張圖，#b看不見#k隊友，地圖設置無法更動\r\n";
        txt += " 過圖傳送需要打怪掉落物30,40,50個，無怪請#r跳水生怪#k\r\n";
        txt += " 僅需要一人拾取掉落物即可全員傳送\r\n";
        txt += " 副本重點第4張圖#r波次獎勵#k\r\n";
        txt += " 奇數關卡#v4001489#X2偶數#v2633336#X1\r\n\r\n";
        txt += " 總獎勵波數:[ 6 ]\r\n\r\n";
        txt += "#b調和精靈6件套:#k\r\n";
        txt += " 每強化#r+1#k 便可對王造成有效傷害\r\n";
        txt += " 合計最高強化#r +5 * 6件 = 【+30】#k\r\n";
        txt += " 如果#r未裝備#k該類型裝備 或 強化#r+0#k\r\n";
        txt += " 將無法對王造成有效傷害\r\n";
        txt += " ";

        npc.sayS(txt, true);
}
if (sel == 3) {

        gainItem5(1012174, 1);
        gainItem5(1032219, 1);
        gainItem5(1113132, 1);
        gainItem5(1122296, 1);
        gainItem5(1112956, 1);
        gainItem5(1113083, 1);

}


function gainItem5(itemid, quantity) {
        for (var i = 0; i < quantity; i++) {
                let newItem = player.makeItemWithId(itemid);
                if (true) {
                        if (newItem.getTitle() == "") {
                                newItem.setTitle("強化+" + 5);
                        }
                        var str = newItem.getTitle();
                        var get = str.substring(3, 4);
                        var qhcs = Number(get) + 1;
                        newItem.setTitle("強化+" + 5);
                        newItem.setAttribute(1080)
                }
                player.gainItem(newItem);
        }
}


