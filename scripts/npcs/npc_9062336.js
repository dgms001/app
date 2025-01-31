/**
 * Bingo
 */

let WAIT_FIELD = 922290000;
let EVENT_FIELD = 922290100;
let OUT_FIELD = 922290200;

let event = npc.getEvent("event_bingo");
switch (map.getId()) {
    case EVENT_FIELD: {
        let text = "Bingo~#b\r\n"
        if (event == null) {
            text += "活动出错。\r\n"
        } else if (player.getGlobalVariable("BingoResult") != null) {
            text += "#L0#领取奖励#l\r\n"
        }
        text += "#L1#出去#l"
        let sel = npc.askMenu(text);
        switch (sel) {
            case 0:
                let r = getReward(player.getGlobalVariable("BingoResult"));
                text = r[0];
                if (r[1]) {
                    npc.askMenu(text);
                    getRewardByRank(r[2]);
                } else {
                    npc.say(text);
                }
                break;
            case 1:
                player.changeMap(OUT_FIELD);
                break;
        }
        break;
    }
    case OUT_FIELD: {
        let text = "欢迎下次再来~#b\r\n"
        if (player.getGlobalVariable("BingoResult") != null) {
            text += "#L0#领取奖励#l\r\n"
        }
        text += "#L1#出去#l"
        let sel = npc.askMenu(text);
        switch (sel) {
            case 0:
                let r = getReward(player.getGlobalVariable("BingoResult"));
                text = r[0];
                if (r[1]) {
                    npc.askMenu(text);
                    getRewardByRank(r[2]);
                } else {
                    npc.say(text);
                }
                break;
            case 1:
                player.changeMap(WAIT_FIELD);
                break;
        }
        break;
    }
    case WAIT_FIELD: {
        if (player.getGlobalVariable("BingoOpen") == 0 && event == null) {
            text = "现在不是活动时间。"
            if (player.isGm()) {
                text += "你要开启Bingo吗？";
                if (npc.askYesNo(text)) {
                    player.setGlobalVariable("BingoOpen", true);

                }
            } else {
                npc.say(text);
            }
        } else {
            if (event == null) {
                event = npc.makeEvent("event_bingo", true, null);
                player.setGlobalVariable("BingoOpen", true);
            }
            let text = "欢迎来到Bingo~\r\n#b"
            if (!event.getVariable("Closed")) {
                text += "#L1#我要报名参加Bingo#l\r\n"
            }
            if (player.getGlobalVariable("BingoResult") != null) {
                text += "#L2#我要领取奖励#l\r\n"
            }
            text += "#L4#听取活动说明#l\r\n"
            text += "#L5#离开这里#l\r\n"
            if (player.isGm()) {
                text += "#L3#关闭Bingo#l"
            }
            let sel = npc.askMenu(text);
            switch (sel) {
                case 1:
                    player.setEvent(event);
                    event.getVariable("Players").push(player);
                    player.showTimer((event.getVariable("endTime") - new Date().getTime()) / 1000);
                    npc.say("稍等片刻，活动即将开始。");
                    break;
                case 2:
                    let r = getReward(player.getGlobalVariable("BingoResult"));
                    text = r[0];
                    if (r[1]) {
                        npc.askMenu(text);
                        getRewardByRank(r[2]);
                    } else {
                        npc.say(text);
                    }
                    break;
                case 3:
                    event.destroyEvent();
                    player.setGlobalVariable("BingoOpen", false);
                    npc.say("活动已关闭。");
                    break;
                case 4:
                    npc.say("入场后，稍等片刻上方将会开始报数，当念到的数在自己的BINGO面板中拥有时，点击它即可。\r\n任意横竖撇捺方向其中之一全部点击的话，就可以按下BINGO按钮来获得排名。\r\n即使错过了念出的号码，只要号码被念过，仍然可以点击。")
                    break;
                case 5:
                    player.changeMap(910000000);
                    break;
            }

        }
        break
    }
}

function getReward(info) {
    let canReward = false;
    let rank = 99;
    let json = info["rank"];
    let text = "#e排行榜#n\r\n"
    for (let i = 0; i < json.length; i++) { //stage
        text += "STAGE " + (i + 1) + "\r\n"
        for (let j = 0; j < json[i].length; j++) {
            text += json[i][j]["id"] + "角色名:" + json[i][j]["name"] + " 排名:" + json[i][j]["rank"] + "\r\n"
            if (json[i][j]["id"] == player.getId()) {
                canReward = true;
                if (rank > json[i][j]["rank"]) {
                    rank = json[i][j]["rank"];
                }
            }
        }
    }
    if (info["rewarded"] == undefined) {
        info["rewarded"] = {}
    }
    if (canReward && rank > -1) {
        if (info["rewarded"][player.getId()] == true) {
            canReward = false;
            text += "已经领过了！"
        } else {
            text += "#b#L0#领取奖励#l";
        }
    } else {
        text += "没有你的奖励哦，下次努力吧。"
    }
    return [text, canReward, rank];
}

function getRewardByRank(rank) {
    player.getGlobalVariable("BingoResult")["rewarded"][player.getId()] = true
    player.gainItem(4110010, (31 - rank) * 3);
    npc.say("获得了#v4110010##b#z4110010##k *" + ((31 - rank) * 3) + "个")
}