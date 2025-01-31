//隊伍人數
let minPlayers = 1;
let maxPlayers = 1;

//隊伍等級
var minLevel = [260];
var maxLevel = [300];

//總次數
var maxenter = [10];

let BossName = ["是男人就堅持60秒"];
let PQLog = ["是男人就堅持60秒"];
let event = ["是男人就堅持60秒"];

//塞入場道具用
let item = 4001832; //入場道具
let itemcount = 5000; //消耗數量

let onlyOne = true;

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
if (player.getEventValue("是男人就堅持60秒秒數") > 0) {
    text = "\t\t#r#fs11##L1##e領取獎勵,本次時間為:" + player.getEventValue("是男人就堅持60秒秒數") + "#l\r\n\r\n";
} else {
    var text = "\t" + Icon[17][1] + "#fs20##fc0xFF00caf2##e堅持60秒" + Icon[17][1] + "#r#n\r\n";
    text += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
        + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
        + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
        + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n";
    text += "#n#fs11#";
    text += "人數限制:[" + minPlayers + "-" + maxPlayers + "]  次數限制:[" + player.getEventValue("" + event + "") + "/" + maxenter + "] 入場等級:[" + minLevel + "-" + maxLevel + "]\r\n";

    text += "#fs11##n";
    text += "\t\t\t\t#b通關完成獎勵如下:\r\n";
    text += "\t\t\t\t#b30秒獎勵如下[獨立]:\r\n";
    text += "\t\t\t#v2633634#*3 #v5062010#*30 #v5062503#*10\r\n";
    text += "\t\t\t100圓夢經驗,150公會貢獻點\r\n";
    text += "\t\t\t\t#b40秒獎勵如下[獨立]:\r\n";
    text += "\t\t\t#v2633634#*4 #v4034622#*1 #v5062010#*30 #v5062503#*20\r\n";
    text += "\t\t\t200圓夢經驗,249公會貢獻點\r\n";
    text += "\t\t\t\t#b50秒獎勵如下[獨立]:\r\n";
    text += "\t\t\t#v2633634#*5 #v4034622#*2 #v5062010#*30 #v5062503#*30\r\n";
    text += "\t\t\t300圓夢經驗,350公會貢獻點\r\n";
    text += "\t\t\t\t#r#fs11##L0##e進入堅持六十秒#l\r\n\r\n";
    if (player.isGm()) {
        text += "GM查看\r\n";
        text += "\t\t#r#fs11##L0##e進入堅持六十秒#l  #L2##e排行榜#l\r\n\r\n";
    }
    text += "#fs11##n";
    text += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
        + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
        + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
        + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n\r\n";

}
let sel = npc.askMenuS(text, true);
if (sel == 0) {
    if (party == null || player.getId() != party.getLeader()) {
        npc.sayNext("#fs14##b你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.並且等級在" + minLevel[sel] + "~" + maxLevel[sel] + ",\r\n那麼請讓你的組隊長和我對話吧!", true);
    } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
        npc.sayNext("#fs14##b你需要有一個#r" + minPlayers + "~" + maxPlayers + "#b人的隊伍.!", true);
    } else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < minPlayers) {
        npc.sayNext("#fs14##b你隊員的等級要在" + minLevel[sel] + "~" + maxLevel[sel] + "內!", true);
    } else if (party.getMembersCount(map.getId(), 1, 300) < party.getMembersCount()) {
        npc.sayNext("#fs14##b好像有隊員在其他地方，請把隊員都召集到這裡！", true);
    } else if (player.getEventValue(event[sel]) >= maxenter[sel]) {
        npc.sayNext("#fs14##b次數已經達到上限了。", true);
    } else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
        npc.sayNext("#fs14##b已經有隊伍在進行了,請更換其他頻道嘗試。", true);
    }
    player.cancelSkillEffect(400031030);
    player.cancelSkillEffect(400031031);
    for (let i = 0; i < 400051091; i++) {
        player.cancelSkillEffect(i);
    }


} else if (sel == 1) {
    player.runScript("是男人就堅持60秒獎勵");
} else if (sel == 2) {
    var sql = "select * from (select playersName,max(`time`) as `time` from dgms_bossinfo where bossName='堅持六十秒' group by playersName) t order by t.`time` DESC limit 10 "
    var resultList = player.customSqlResult(sql);
    var bossName1 = "堅持六十秒";
    var str = new String(bossName1);
    var bytesCount = 0,
        n;
    for (var dd = 0, n = str.length; dd < n; dd++) {
        var c = str.charCodeAt(dd);
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
            bytesCount += 1;
        } else {
            bytesCount += 2;
        }
    }

    if (bytesCount < 14) {
        for (var ii = 0; ii < 14 - bytesCount; ii++) {
            if (ii % 2 == 0) {
                bossName1 += " ";
            } else {
                bossName1 = " " + bossName1;
            }
        }
    }

    var text = "#fs18##e#r\t   #b" + bossName1 + "#fs14#\r\n\r\n";

    for (var i = 0; i < resultList.size(); i++) {
        var result = resultList.get(i);
        var rank = i + 1;
        var m = Math.floor(parseFloat(result.get("time")) / 60);
        var s = Math.floor(parseFloat(result.get("time")) % 60);
        if (rank == 1) {
            text += "\t#r第" + rank + "名 #d耗時:" + m + "分" + s + "秒 #b玩家:" + result.get("playersName") + "\r\n"
        } else if (rank == 2) {
            text += "\t#d第" + rank + "名 #d耗時:" + m + "分" + s + "秒 #b玩家:" + result.get("playersName") + "\r\n"
        } else if (rank == 3) {
            text += "\t#g第" + rank + "名 #d耗時:" + m + "分" + s + "秒 #b玩家:" + result.get("playersName") + "\r\n"
        } else {
            text += "\t#k第" + rank + "名 #d耗時:" + m + "分" + s + "秒 #b玩家:" + result.get("playersName") + "\r\n"
        }

    }
    npc.say(text, 3003307);
}
