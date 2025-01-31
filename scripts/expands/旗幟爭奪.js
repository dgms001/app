/**
 * Event : 跑旗賽 - accept
 * @author dgms
 * QQ:381991414
 */
date = new Date();
let em = npc.getEvent("event_manager");
let EXIT_MAP = 932200001; //正午
let EVENT_FIELD = 932200300;
let REWARD_MAP = 932200002;
//let REWARD_MAP = 104000000;
let MAP_NAME = "正午雪原"
let mapType = 0;
//updateMap();
let event = npc.getEvent("event_pqs");
//let text = "#e跑旗賽：#n\r\n";
let text = "#e旗幟爭奪戰：#n\r\n";
//text += "奔跑吧！跳躍吧！跑旗賽就要開始啦！\r\n";

text += "活動狀態:#e" + getEventStatus() + "#n 。#b\r\n\r\n";
text += (getEventStatus() == "#g等待中#k" ? "" + MAP_NAME + "" + (em.getVariable("pqsItem") == 1 ? "-道具賽" : "-競速賽") + "" + em.getVariable("pqsMaxLap") + "圈\r\n#L0#我想參加公會旗幟戰！#l\r\n" : "");
//text += "#L1#聽取活動說明。#l\r\n";
text += "#L2#離開這裡。#l\r\n";
text += "#L6#獎勵#l\r\n";
text += "1/3/5 整點5分內可以開啟,2/4/6請去玩OX\r\n";
text += "按步驟開啟即可\r\n";

if ((date.getDay() == 1 || date.getDay() == 3 || date.getDay() == 5) && (date.getMinutes() < 5)) {
	if(em == null){
	text += "#L7#強開事件[第一步]#l\r\n";
	}
    //text += "\r\n#eGM專用介面#n\r\n";
	if(getEventStatus() == "#r未開始#k"){
    text += "#L3#設定數據[第二步]#l\r\n";
    text += "#L5#開啟活動[第三步]#l\r\n";
}


}
let selection = npc.askMenuA(text,true);
if (selection == 0) {
    if (em.getVariable("pqs") == 0) {
        npc.sayS("活動還沒有開始哦。");
    } else if (event.getVariable("started") == true) {
        npc.sayS("你來晚了，比賽已經開始了。");
    } else if (player.getChannel() != 1) {
        npc.sayS("活動只在1頻道進行。");
    } else {
        player.setEvent(event);
        player.changeMap(EVENT_FIELD, 0);
        let members = event.getVariable("members");
        //members.push(player);
		event.getVariable("members").push(player);
        player.showTimer((event.getVariable("waitTime") - new Date().getTime()) / 1000);
        player.dropMessage(9, "正在等待其他玩家，目前 " + members.length + "人。");
		//em.setVariable("pqsRanking", {});//卡住
		/*let ranking = event.getVariable("ranking");
        //let currentRank = event.getVariable("currentRank");//當前是第幾名
        if (ranking[player.getName()] == null) {
            ranking[player.getName()] = { LAP: 0, BESTLAP: 2147483647, LAPTIME: 0, PASTTIME: 0 ,RANK : 99};//初始化玩家的排名信息
        }*/
    }
} else if (selection == 2) {
    player.changeMap(104000000);
    //player.removeBuffs();

} else if (selection == 3) {
    em.setVariable("pqsMapIndex", npc.askMenu("選擇開啟的地圖：\r\n#b#L2#深夜雪原#l"));
	//em.setVariable("pqsMapIndex", npc.askMenu("選擇開啟的地圖：\r\n#b#L0#正午雪原#l\r\n#L1#夕陽雪原#l\r\n#L2#深夜雪原#l"));
    //em.setVariable("pqsItem", npc.askMenu("選擇是否開啟道具？\r\n#b#L1#開啟#l\r\n#L0#關閉#l"));
    em.setVariable("pqsMaxLap", npc.askNumber("跑幾圈？", 3, 3, 3));
    updateMap();
    em.setVariable("pqs", 2);
    npc.say("已開放。");
} else if (selection == 4) {
    em.setVariable("pqs", 0);
    if (event != null) {
        event.destroyEvent();
    }
    npc.say("已關閉。");
} else if (selection == 5) {
	//npc.broadcastPlayerNotice(9, "公會旗幟戰 | 副本中心開放進場");
	//npc.broadcastPlayerNotice(12, "公會旗幟戰 | 副本中心開放進場");
	//npc.broadcastPlayerNotice(12, "公會旗幟戰 | 副本中心開放進場");
	//npc.broadcastPlayerNotice(12, "公會旗幟戰 | 有獎勵...或安慰獎");
	if (event == null) {
		if (npc.makeEvent("event_pqs", true, [em.getVariable("pqsItem"), mapType, EXIT_MAP, EVENT_FIELD, REWARD_MAP, em.getVariable("pqsMaxLap")]) != null) {
                em.setVariable("pqsRanking", {});
                event = npc.getEvent("event_pqs");
                //return getEventStatus();
		} 
	}
} else if (selection == 6) {
	player.runNpc(9000232);
} else if (selection == 7) {
var str = "測試賽"
	var event = npc.getEvent("event_manager");
		if(event == null){
			npc.say(str+"\r\n暫未開啟活動");
			if(!player.isGm()){
				var YN = npc.askYesNo("是否開啟公會旗幟戰？")
				if(YN == 1){
					if (npc.makeEvent("event_manager", true, player) == null) {
						npc.say("已經開始了");
						player.changeMap(910048100);//
					}
						player.dropMessage(9, "請稍等，跑旗賽就要開始啦！");
						//npc.broadcastNotice("[OX活動]開啟~請玩家至1分流,選擇副本中心傳送OX問答!!");//開啟報名之後 會廣播
						//npc.broadcastNotice("[OX活動]開啟~請玩家至1分流,選擇副本中心傳送OX問答!!");//開啟報名之後 會廣播
				} else {
					npc.say("你不想開啟嗎?");
				}
			}
		}
}

function updateMap() {
    switch (em.getVariable("pqsMapIndex")) {
        case 0:
            EXIT_MAP = 932200001; //正午
            EVENT_FIELD = 932200100;
            REWARD_MAP = 932200002;
            MAP_NAME = "正午雪原"
            break;
        case 1: //夕陽
            EXIT_MAP = 932200003;
            EVENT_FIELD = 932200200;
            REWARD_MAP = 932200004;
            mapType = 1;
            MAP_NAME = "夕陽雪原"
            break;
        case 2: //深夜
            EXIT_MAP = 932200005;
            EVENT_FIELD = 932200300;
            REWARD_MAP = 932200006;
            MAP_NAME = "深夜雪原"
            break;
    }
}
/*
function getEventStatus() {
    if (em == null) {
	if (em.getVariable("pqs") == 0) {
        return "#r未開始#k";
	}
    } else {
        if (event == null) {
            if (npc.makeEvent("event_pqs", true, [em.getVariable("pqsItem"), mapType, EXIT_MAP, EVENT_FIELD, REWARD_MAP, em.getVariable("pqsMaxLap")]) != null) {
                em.setVariable("pqsRanking", {});
                event = npc.getEvent("event_pqs");
                return getEventStatus();
            } else {
                npc.say("event error.");
                return null;
            }

        } else {
            if (event.getVariable("started")) {
                return "#r進行中#k";
            } else {
                return "#g等待中#k"
            }
        }

    }
}*/

function getEventStatus() {
	if (em != null) {
		if (event == null) {
		
		} else {
		if (event.getVariable("started")) {
                return "#r進行中#k";
            } else {
                return "#g等待中#k"
            }
			
		}
	} else {
	
	}
	return "#r未開始#k";
}