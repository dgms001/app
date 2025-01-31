/**
 * BOSS入口
 **/
let joinCount = 14; //進入次數
let rewardCount = 14; //獎勵次數
let level = 270; //等級
let nowJoinCount = player.getEventValue("世界BOSS進入次數")
let nowRewardCount = player.getEventValue("世界BOSS獲得獎勵")
let nowResetCount = player.getEventValue("世界BOSS重置")
let limit = 0;


var event = npc.getEvent("worldbossbig")


var a = ["日", "一", "二", "三", "四", "五", "六"];
date = new Date();
let week = date.getDay();
let day = date.getDate();
let hour = date.getHours();

let minute = date.getMinutes();

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
//var sss = "#fs16##e#r\t\t世界Boss-烈焰戰狼\r\n\r\n#n";
if (nowResetCount == 0) {
    player.addEventValue("世界BOSS重置", 1, 7);
    player.resetEventValue("世界BOSS進入次數")
    player.resetEventValue("世界BOSS獲得獎勵")
    npc.say("世界BOSS重置完畢,7天后自動重置下一輪");
}
if (player.getChannel() < 6) {
    npc.askMenu("只有6-10分流才可以入場喲");
} else {
    var sss = "\t" + Icon[17][1] + "#fs20##fc0xFF00caf2##e烈焰戰狼" + Icon[17][1] + "#r#n\r\n";
    sss += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
        + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
        + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
        + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n";
    sss += "#fs11##b";
    sss += "世界Boss每周可進入20次,獎勵能夠領取14次\r\n";
    sss += "進場時間為0,8,10,12,16,20,22整點的0~3分! 6-10分流均可入場\r\n";
    sss += "入場條件:500萬 楓幣 等級限制:" + level + "\r\n";

    sss += "";

    sss += "目前進入次數:#r[" + nowJoinCount + "/" + joinCount + "]\r\n#b";
    sss += "目前獎勵次數:#r[" + nowRewardCount + "/" + rewardCount + "]\r\n";
    if (true) {

        if (false) {
            sss += "當前有隊伍正在挑戰哦！"
        } else {
            if ((hour == 0 || hour == 8 || hour == 10 || hour == 12 || hour == 16 || hour == 20 || hour == 22) && (minute >= 0 && minute <= 3)) {
                if (map.getId() != 993063000) {
                    if (map.getId() != 993000000) {
                        let event = npc.getEvent("worldbossbig");
                        if (event == null) {
                            sss += "#e#r#L0#開啟世界boss入場#l\r\n";
                        }

                    }

                }
            }
        }
    }
}

if (event != null) {
    let members = event.getVariable("members");
    if (event.getVariable("members").length >= 10) {
    } else {
        sss += "#L1#加入世界Boss等待室#l\r\n";
    }
    sss += "\r\n當前報名人數:" + members.length;
    sss += "[10人將關閉該分流入場]";
    sss += "\r\n如果結束世界BOSS後這個還在請截圖反饋給呆逼或者我\r\n";
}


sss += "\r\n#e#d#L3#傷害獎勵說明#l\r\n\r\n"
sss += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
    + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
    + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
    + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n\r\n";

let selection = npc.askMenu(sss, 3003124);

switch (selection) {
    case 0:
        var todrop = player.getInventorySlot(-1, -11);
        if (nowJoinCount >= joinCount) {
            npc.say("你今天不能再進去啦！")
        } else if (player.getLevel() < level) {
            npc.say("檢測到你等級不足" + level + "級，請確認！")
        } else {

            if (false) {
                npc.sayNext("只有族長或者副族長才可以開始家族BOSS。", 2060102);
            } else {

                if (true) {

                    let event = npc.getEvent("worldbossbig");
                    if (event == null) {
                        if (!player.hasMesos(5000000)) {
                            npc.say("你沒有500W楓幣");
                        } else {
                            //start GQ
                            let guildId = player.getGuildId();
                            let guildName = player.getName();

                            let gfame = player.getEventValue("世界BOSS善良積分");
                            let bfame = player.getEventValue("世界BOSS邪惡積分");
                            //makeEvent
                            event = npc.makeEvent("worldbossbig", true, [guildId, player, guildName, gfame, bfame]);
                            if (event == null) {
                                npc.say("現在世界BOSS還沒有開放，請稍後再試。");
                            } else {
                                player.loseMesos(5000000);

                                //player.loseItem(openItemId, openItemNum);


                                npc.broadcastPlayerNotice(13, "【世界BOSS-烈焰戰狼[困難]】 : 玩家【" + player.getName() + "】已開啟" + player.getChannel() + "分流等待室,其餘玩家請盡速進場!");
                            }
                        }
                    } else {

                        npc.say("已經有隊伍在執行任務了，請更換頻道後再試。", 2060102);
                    }
                } else {
                    npc.say("今天無法挑戰")
                }
            }
        }
        break;
    case 1:
        var todrop = player.getInventorySlot(-1, -11);
        if (nowJoinCount >= joinCount) {
            npc.say("你今天不能再進去啦！")
        } else if (player.getLevel() < level) {
            npc.say("檢測到你等級不足" + level + "級，請確認！")
        } else if (!player.hasMesos(5000000)) {
            npc.say("你沒有500W楓幣");;
        } else {
            //if (player.getGuildId() <= 0) { //no guild or not guild master/jr. master
            if (false) {
                npc.sayNext("123", 2060102);
            } else {
                let event = npc.getEvent("worldbossbig");
                if (event == null) {
                    npc.say("#fs14##b當前頻道並沒有世界BOSS在進行", 2060102);
                } else {
                    let openGId = event.getVariable("GuildId");
                    let canEnter = event.getVariable("canEnter");
                    let canJoin = event.getVariable("canJoin");
                    let members = event.getVariable("members");
                    let gfamelist = event.getVariable("gfamelist");
                    let bfamelist = event.getVariable("bfamelist");
                    let allfamelist = event.getVariable("allfamelist");
                    let gfame = player.getEventValue("世界BOSS善良積分");
                    let bfame = player.getEventValue("世界BOSS邪惡積分");
                    /*if (openGId > 0) {
                            if (openGId == player.getGuildId()) {*/
                    if (canJoin == "1") {
                        if (members.length < 50) {
                            player.loseMesos(5000000);
                            gfamelist.push(gfame);//好的陣列
                            bfamelist.push(bfame);//壞的陣列
                            allfamelist.push(gfame);
                            allfamelist.push(bfame);
                            // gfamelist = [];
                            // bfamelist = [];
                            // allfamelist = [];
                            player.setEvent(event);
                            members.push(player);
                            npc.broadcastPlayerNotice(13, "【世界BOSS-烈焰戰狼[困難]】 : 玩家【" + player.getName() + "】已進入" + player.getChannel() + "分流等待室,其餘玩家請盡速進場!");

                            player.changeMap(993063000, 0);
                            // npc.say("BOSS遠征開始啦！", 2060102);
                        } else {
                            npc.say("當前已有10人参與，你無法進入了", 2060102);
                        }
                    } else {
                        npc.say("世界BOSS已經正式開啟了，當前無法在進行申請進入！", 2060102);
                    }
                    /*	} else {
                                npc.say("正在舉行家族BOSS的不是您的家族，請檢查後再試。",2060102);
                        }
                }*/
                }
            }
        }
        break;


    case 3:
        sss = "";
        sss += "#fs16##r";
        sss += "[傷害超過50%]\r\n";
        sss += "#fs14##b";


        sss += "#v2049323# :90個\r\n";
        sss += "#v4034622# :3個\r\n";
        sss += "#v4032053# 公式:280*(戰地/1500+1)*1.5 當前獎勵:#r" + 1.5 * 280 * (Math.floor(player.getMapleUnionLevel() / 1500) + 1) + "#b個\r\n";
        sss += "#v4001713# 公式:80*(戰地/1500+1)*1.5 當前獎勵:#r" + 1.5 * 80 * (Math.floor(player.getMapleUnionLevel() / 1500) + 1) + "#b個\r\n";
        sss += "#v4000850# 公式:2*(戰地/3000+2)*1.5 當前獎勵:#r" + 1.5 * 2 * (Math.floor(player.getMapleUnionLevel() / 3000) + 2) + "#b個\r\n";
        sss += "#v2633634# 公式:2*(戰地/1000+1)*1.5 當前獎勵:#r" + 1.5 * 2 * (Math.floor(player.getMapleUnionLevel() / 1000) + 1) + "#b個\r\n";
        sss += "#v2633336# 公式:1*(戰地/2000+1)*1.5 當前獎勵:#r" + 1.5 * 1 * (Math.floor(player.getMapleUnionLevel() / 2000) + 1) + "#b個\r\n";
        sss += "#fs16##r";
        sss += "[傷害超過35%]\r\n";
        sss += "#fs14##b";
        sss += "#v2049323# :58個\r\n";
        sss += "#v4034622# :2個\r\n";
        sss += "#v4032053# 公式:250*(戰地/1500+1)*1.3 當前獎勵:#r" + 1.3 * 250 * (Math.floor(player.getMapleUnionLevel() / 1500) + 1) + "#b個\r\n";
        sss += "#v4001713# 公式:50*(戰地/1500+1)*1.3 當前獎勵:#r" + 1.3 * 50 * (Math.floor(player.getMapleUnionLevel() / 1500) + 1) + "#b個\r\n";
        sss += "#v4000850# 公式:1*(戰地/3000+2)*1.3 當前獎勵:#r" + 1.3 * 1 * (Math.floor(player.getMapleUnionLevel() / 3000) + 2) + "#b個\r\n";
        sss += "#v2633634# 公式:1*(戰地/1000+1)*1.3 當前獎勵:#r" + 1.3 * 1 * (Math.floor(player.getMapleUnionLevel() / 1000) + 1) + "#b個\r\n";
        sss += "#v2633336# 公式:1*(戰地/2000+1)*1.3 當前獎勵:#r" + 1.3 * 1 * (Math.floor(player.getMapleUnionLevel() / 2000) + 1) + "#b個\r\n";
        sss += "#fs16##r";
        sss += "[傷害超過20%]\r\n";
        sss += "#fs14##b";
        sss += "#v2049323# :36個\r\n";
        sss += "#v4034622# :1個\r\n";
        sss += "#v4032053# 公式:200*(戰地/1500+1)*1.2 當前獎勵:#r" + 1.2 * 200 * (Math.floor(player.getMapleUnionLevel() / 1500) + 1) + "#b個\r\n";
        sss += "#v4001713# 公式:30*(戰地/1500+1)*1.2 當前獎勵:#r" + 1.2 * 30 * (Math.floor(player.getMapleUnionLevel() / 1500) + 1) + "#b個\r\n";
        sss += "#v4000850# 公式:1*(戰地/3000+2)*1.2 當前獎勵:#r" + 1.2 * 1 * (Math.floor(player.getMapleUnionLevel() / 3000) + 2) + "#b個\r\n";
        sss += "#v2633634# 公式:1*(戰地/2000+1)*1.2 當前獎勵:#r" + 1.2 * 1 * (Math.floor(player.getMapleUnionLevel() / 2000) + 1) + "#b個\r\n";
        sss += "#v2633336# 公式:1*(戰地/2000+1)*1.2 當前獎勵:#r" + 1.2 * 1 * (Math.floor(player.getMapleUnionLevel() / 2000) + 1) + "#b個\r\n";
        sss += "#fs16##r";
        sss += "[保底獎勵]\r\n";
        sss += "#fs14##b";
        sss += "#v2049323# :10個\r\n";
        sss += "#v4032053# 公式:150*(戰地/1500+1) 當前獎勵:#r" + 150 * (Math.floor(player.getMapleUnionLevel() / 1500) + 1) + "#b個\r\n";
        sss += "#v4001713# 公式:40*(戰地/1500+1) 當前獎勵:#r" + 40 * (Math.floor(player.getMapleUnionLevel() / 1500) + 1) + "#b個\r\n";
        sss += "#v4000850# 固定獎勵:#r" + 2 + "#b個\r\n";
        sss += "#v2633634# 固定獎勵:#r" + 2 + "#b個\r\n";
        sss += "#v2633336# 公式:1*(戰地/2000+1) 當前獎勵:#r" + 1 * (Math.floor(player.getMapleUnionLevel() / 2000) + 1) + "#b個\r\n";
        //sss += "#v2633336# 公式:1*(戰地/2000+1) 當前獎勵:#r"+1*(Math.floor(player.getMapleUnionLevel()/2000)+1)+"#b個\r\n";
        sss += "";
        sss += "";
        sss += "";
        sss += "";
        sss += "";
        sss += "";
        sss += "";
        sss += "";
        sss += "";
        sss += "";

        npc.say(sss, 2060102);

        break;
}




function getEventValue(event1, flag) {
    var charInfo = getCharInfo();
    if (flag) {
        var sql = "select sum(value) as numbe from zz_xr_event where accounts_id = " + parseInt(charInfo.accounts_id) + " and event = '" + event1 + "'";
    } else {
        var sql = "select sum(value) as numbe from zz_xr_event where accounts_id = " + parseInt(charInfo.accounts_id) + " and event = '" + event1 + "'AND DATE_FORMAT(time, '%Y-%m-%d') = DATE_FORMAT(NOW(), '%Y-%m-%d') ";
    }
    var resultList = player.customSqlResult(sql);
    var count = 0;
    for (var i = 0; i < resultList.size(); i++) {
        var result = resultList.get(i);
        if (result == null) {
            break;
        }
        count = result.get("numbe");
        if (count == null) {
            count = 0;
        }
    }
    return parseInt(count);
}

function setEventValue(event1, value1) {
    var charInfo = getCharInfo();
    var sql = "insert into zz_xr_event(accounts_id, world, `event`,`value`,time) values(" + charInfo.accounts_id + "," + charInfo.world + ",'" + event1 + "'," + value1 + ",now())";
    player.customSqlInsert(sql);
}

function getCharInfo() {
    var sql = "SELECT accounts_id,world FROM characters where id = " + player.getId() + "";
    var resultList = player.customSqlResult(sql);
    var charInfo = {};
    for (var i = 0; i < resultList.size(); i++) {
        var result = resultList.get(i);
        if (result == null) {
            break;
        }
        charInfo.accounts_id = result.get("accounts_id");
        charInfo.world = result.get("world");
    }
    return charInfo;
}
