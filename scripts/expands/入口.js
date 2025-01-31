/**
 * BOSS入口
 **/
let joinCount = 5; //進入次數
let rewardCount = 1; //獎勵次數
let level = 10; //等級
let itemid = 4000016;//門票ID//4001018
let itemnum = 10;//門票數量

let openItemId = 4000016;//開啟的門票ID
let openItemNum = 1;	//開啟的門票數量
let opentupo = 0
let intupo = 0
let nowJoinCount = getEventValue("遠征火焰狼進入次數", false);
let nowRewardCount = getEventValue("每日全服BOSS", false);
let limit = 0;

let gqItems = [1032033, 4001024, 4001025, 4001026, 4001027, 4001028, 4001029, 4001030, 4001031, 4001032, 4001033, 4001034, 4001035, 4001036, 4001037];

var event = npc.getEvent("worldboss")


var a = ["日", "一", "二", "三", "四", "五", "六"];
var week = new Date().getDay();


var sss = "\t\t\t#b#e 遠征BOSS - 火焰狼\r\n#n"//#k#r<菇菇>#d被劫持了！需要冒險家家族的幫助！  \r\n
sss += "#k1.進場需要消耗#b" + itemnum + "個#r#v" + itemid + "#（務必遮蔽特效！！）\r\n"
sss += "#k2.進入後若沒有達到人數要求6~20人,則會退出挑戰\r\n"
sss += "#r3.發起條件:突破達到" + opentupo + "#b(1000億突破)#r\r\n#r4.參與條件:" + intupo + "#b(110億突破)\r\n"
sss += "#k5.每週的#r周1、3、5、7#k才可攻略\r\n"
sss += "#k6.(賬號限制)入場次數 #r<" + nowJoinCount + "/" + joinCount + ">#k - "
sss += "#k7.獎勵次數 #r<" + nowRewardCount + "/" + rewardCount + ">\r\n"
sss += "#k8.角色挑戰等級：" + level + "  \r\n"//成功挑戰將獲得家族積分+1000\r\n
//sss	+=  "#k6.挑戰火焰狼，挑戰地圖無法使用5轉技能哦\r\n"
//sss	+=  "#k7.挑戰火焰狼，如果不慎被它拍暈了，眩暈2-3分鐘是正常的\r\n"
//sss	+=  "#r#e注：過年活動期間全天開放,活動結束將調整為週末開放\r\n"
// if (week == 0 || week == 1 || week == 3 || week == 6) { //只有1+3+5+7
if (true) {
    //if(player.isGm()){ //GM才能進
    sss += "#e#b今天是星期" + a[week] + ",火焰狼的大門已開放,趕緊來挑戰吧!\r\n"
    //if(event != null && event.getVariable("GuildId") != player.getGuildId()){
    //if(event != null ){
    if (false) {
        //sss += "#e當前#k【#b"+event.getVariable("guildName")+"#k】#r家族正在挑戰！\r\n"
        sss += "當前有隊伍正在挑戰哦！"
    } else {
        sss += "#e#r#L0#發起遠征挑戰(消耗#v" + openItemId + "#x" + openItemNum + ")#l\r\n#L1#加入遠征挑戰#l"
    }
    //}//GM才能進
} else {
    sss += "\r\n#e#g今天不是周1、3、5、7火焰狼入口未開放!\r\n"
}

if (event != null) {

    let members = event.getVariable("members");
    sss += "當前報名人數:" + members.length;
}


sss += "#e#d#L3#遠征獎勵說明#l"
sss += "#L2#遠征攻堅排行#l\r\n"
let selection = npc.askMenu(sss, 1540921);

var getEquip = false;
if (selection == 0 || selection == 1) {
    //雙刀副手判斷
    var sdjobs = [430, 431, 432, 433, 434];
    //檢測武器
    if (sdjobs.indexOf(player.getJob()) == -1) {
        var todrop = player.getInventorySlot(-1, -11);
        if (todrop != null) {
            getEquip = true;
            limit = todrop.getLimitBreak();
        }
    } else {
        var todrop = player.getInventorySlot(-1, -11);
        var todrop1 = player.getInventorySlot(-1, -10);
        if (todrop != null && todrop1 != null) {
            getEquip = true;
            if (todrop.getLimitBreak() < todrop1.getLimitBreak()) {
                limit = todrop1.getLimitBreak();
            } else {
                limit = todrop.getLimitBreak();
            }
        }

    }
}

if (false) {
    npc.say("武器都不帶？你去打什麼BOSS？(雙刀職業請帶上武器和副手)")
} else {
    switch (selection) {
        case 0:
            var todrop = player.getInventorySlot(-1, -11);
            if (todrop == null) {
                npc.say("沒帶武器不能開啟")
            } else if (!player.hasItem(1114301, 1)) {
                npc.say("檢測您沒有#r[防刷獎戒指#v1114301##z1114301#]#k無法挑戰\r\n")
            } else if (nowJoinCount >= joinCount) {
                npc.say("你今天不能再進去啦！")
            } else if (player.getLevel() < level) {
                npc.say("檢測到你等級不足" + level + "級，請確認！")
            } else if (!player.hasItem(openItemId, openItemNum)) {
                npc.say("檢測到你 #v" + itemid + "##z" + itemid + "# 不足2個，請確認！\r\n完成遠征前置副本可以獲得#v" + itemid + "##z" + itemid + "#哦！")
            } else {
                //if (player.getGuildId() <= 0 || player.getGuildRank() >= 3) { //no guild or not guild master/jr. master
                if (false) {
                    npc.sayNext("只有族長或者副族長才可以開始家族BOSS。", 2060102);
                } else {


                    // if (week == 0 || week == 1 || week == 3 || week == 5 || week == 6) { //只有1+3+5+7
                    if (true) {
                        //no true requirements, make an instance and start it up
                        let event = npc.getEvent("worldboss");
                        if (event == null) {
                            if (player.getFreeSlots(1) < 4 || player.getFreeSlots(2) < 4 || player.getFreeSlots(3) < 4 || player.getFreeSlots(4) < 2 || player.getFreeSlots(5) < 4) {
                                npc.say("包裹空間不足，請確保包裹每個欄位有至少 " + 4 + " 格空間,不然無法給你召喚扎昆的信物！#v4001796#");
                            } else {
                                //start GQ
                                let guildId = player.getGuildId();
                                let guildName = player.getName();

                                let gfame = player.getEventValue("世界BOSS善良積分");
                                let bfame = player.getEventValue("世界BOSS邪惡積分");
                                //makeEvent
                                event = npc.makeEvent("worldboss", true, [guildId, player, guildName, gfame, bfame]);
                                if (event == null) {
                                    npc.say("現在遠征BOSS還沒有開放，請稍後再試。");
                                } else {
                                    player.loseItem(openItemId, openItemNum);
                                    //remove all GQ items from player entering
                                    for (let i = 0; i < gqItems.length; i++) {
                                        player.loseItem(gqItems[i]);
                                    }
                                    //npc.broadcastGuildMessage(guildId, "[家族BOSS] 家族BOSS已開啟，請成員前往[頻道-" + player.getChannel() + "]的遺蹟發掘地參與家族BOSS！",2060102);

                                    // npc.broadcastPlayerNotice(13, "【世界BOSS-火焰狼遠征報名】 : 玩家【" + player.getName() + "】在[頻道-" + player.getChannel() + "]開啟火焰狼遠征！請隊員們儘快入場！");
                                    // npc.broadcastPlayerNotice(13, "【世界BOSS-火焰狼遠征報名】 : 玩家【" + player.getName() + "】在[頻道-" + player.getChannel() + "]開啟火焰狼遠征！請隊員們儘快入場！");
                                    // npc.broadcastPlayerNotice(13, "【世界BOSS-火焰狼遠征報名】 : 玩家【" + player.getName() + "】在[頻道-" + player.getChannel() + "]開啟火焰狼遠征！請隊員們儘快入場！");
                                    // npc.broadcastPlayerNotice(13, "【世界BOSS-火焰狼遠征報名】 : 玩家【" + player.getName() + "】在[頻道-" + player.getChannel() + "]開啟火焰狼遠征！請隊員們儘快入場！");
                                    // npc.broadcastPlayerNotice(13, "【世界BOSS-火焰狼遠征報名】 : 玩家【" + player.getName() + "】在[頻道-" + player.getChannel() + "]開啟火焰狼遠征！請隊員們儘快入場！");
                                }
                            }
                        } else {
                            /*let openGId = event.getVariable("GuildId");
                            if (openGId > 0) {
                                    if (openGId == player.getGuildId()) {
                                            npc.say("你的家族已經開啟了家族BOSS挑戰，無法再次開啟！",2060102);
                                    } else {
                                            npc.say("已經有家族在執行任務了，請更換頻道後再試。",2060102);
                                    }
                            }*/

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
            if (todrop == null) {
                npc.say("沒帶武器不能開啟")
            } else if (!player.hasItem(1114301, 1)) {
                npc.say("檢測您沒有#r[防刷獎戒指#v1114301##z1114301#]#k無法挑戰\r\n")
            } else if (nowJoinCount >= joinCount) {
                npc.say("你今天不能再進去啦！")
            } else if (player.getLevel() < level) {
                npc.say("檢測到你等級不足270級，請確認！")
            } else if (!player.hasItem(itemid, itemnum)) {
                npc.say("檢測到你 #v" + itemid + "##z" + itemid + "# 不足200個，請確認！\r\n完成遠征前置副本可以獲得#v" + itemid + "##z" + itemid + "#哦！")
            } else {
                //if (player.getGuildId() <= 0) { //no guild or not guild master/jr. master
                if (false) {
                    npc.sayNext("如果你想進入家族BOSS的話，你必須要加入一箇家族。", 2060102);
                } else {
                    let event = npc.getEvent("worldboss");
                    if (event == null) {
                        npc.say("當前頻道並沒有遠征BOSS在進行，請稍後再試。", 2060102);
                    } else {
                        let openGId = event.getVariable("GuildId");
                        let canEnter = event.getVariable("canEnter");
                        let canJoin = event.getVariable("canJoin");
                        let members = event.getVariable("members");
                        /*if (openGId > 0) {
                                if (openGId == player.getGuildId()) {*/
                        if (canJoin == "1") {
                            if (members.length < 50) {
                                //npc.sayNext("那麼我現在就送你進去！");
                                player.loseItem(itemid, itemnum);
                                for (let i = 0; i < gqItems.length; i++) {
                                    player.loseItem(gqItems[i]);
                                }
                                player.setEvent(event);
                                members.push(player);
                                // npc.broadcastPlayerNotice(4, "== 世界BOSS 全服遠征 ==: 玩家 " + player.getName() + "在[頻道-" + player.getChannel() + "]成功空降入場 當前總人數：<" + members.length + ">！");

                                player.changeMap(970072200, 0);
                                npc.say("BOSS遠征開始啦！", 2060102);
                            } else {
                                npc.say("當前已有30人参與，你無法進入了", 2060102);
                            }
                        } else {
                            npc.say("BOSS遠征已經正式開啟了，當前無法在進行申請進入！", 2060102);
                        }
                        /*	} else {
                                    npc.say("正在舉行家族BOSS的不是您的家族，請檢查後再試。",2060102);
                            }
                    }*/
                    }
                }
            }
            break;
        case 2:
            player.runScript("世界boss排行榜")
            break;
        case 3:
            sss = "\t\t\t#e#b  火焰狼世界遠征獎勵說明#n\r\n\r\n";
            sss += "不足5%傷害#v4000463# x5 \r\n累計造成5%傷害#v4000463# x30  福利抽獎幣\r\n累計造成10%傷害#v4000463# x70  福利抽獎幣 \r\n累計造成30%傷害#v4000463# x100 #v4310088# x1 福利抽獎幣\r\n最後1擊傷害#v4000463# x150 #v4310088# x2 福利抽獎幣\r\n\r\n\r\n";
            npc.say(sss, 2060102);

            break;
    }
}

function gainItemPeriod(itemid, quantity, time) {
    if (time < 1000 && time > 0) {
        time = 1000 * 60 * 60 * 24 * time;
    }
    for (var i = 0; i < quantity; i++) {
        let newItem = player.makeItemWithId(itemid);
        if (time != 0) {
            newItem.setExpiration(new Date().getTime() + time);
        }
        player.gainItem(newItem);
    }
}

function getGuildName(guildId) {
    var sql = "select `name` from guilds where id = " + guildId + "";

    var resultList = player.customSqlResult(sql);

    return resultList.get(0).get("name");
}

//flag = true 查總的不重置
//flag = false 查當天的
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
