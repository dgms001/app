/**
 * BOSS入口
 **/
let joinCount = 3; //進入次數
let rewardCount = 2; //獎勵次數
let level = 220; //等級
let nowJoinCount = player.getEventValue("世界BOSS進入次數")
let nowRewardCount = player.getEventValue("世界BOSS獲得獎勵")
let limit = 0;


var event = npc.getEvent("worldboss")


var a = ["日", "一", "二", "三", "四", "五", "六"];
date = new Date();
let week = date.getDay();
let day = date.getDate();
let hour = date.getHours();

let minute = date.getMinutes();

var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
//var sss = "#fs16##e#r\t\t世界Boss-烈焰戰狼\r\n\r\n#n";
if (player.getChannel() > 10) {
	npc.say("只有1-10分流才可以入場喲");
} else {
	var sss = "Welcome to the special trip              " + a38 + "\r\n";

	sss += "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n";

	sss += "#fs11##b";
	sss += "\t\t  每天進場次數[#r" + nowJoinCount + "/" + joinCount + "#b] 獎勵次數[#r" + nowRewardCount + "/" + rewardCount + "#b]\r\n\r\n";
	sss += "\t\t進場時間整點的0~3分! 所有分流均可入場\r\n\t\t\t\t[#r0,8,10,14,16,20,22#b]\r\n\r\n";
	sss += "\t\t\t入場條件:1000萬 楓幣 等級限制:" + level + "\r\n";

	sss += "";


	if (true) {

		if (false) {
			sss += "當前有隊伍正在挑戰哦！"
		} else {
			if ((hour == 0 || hour == 8 || hour == 10 || hour == 14 || hour == 16 || hour == 20 || hour == 22) && (minute >= 0 && minute <= 30)) {
				if (map.getId() != 993062000) {
					if (map.getId() != 993000500) {
						let event = npc.getEvent("worldboss");
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
		sss += "#L1#加入世界Boss等候室#l\r\n";
	}
	sss += "\r\n當前進入人數:" + members.length;
	sss += "[10人將關閉該分流入場]";
}


sss += "\r\n\t\t\t\t#e#d#L3#傷害獎勵說明#l\r\n\r\n"


let selection = npc.askMenu(sss, 1540417);

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

					let event = npc.getEvent("worldboss");
					if (event == null) {
						if (!player.hasMesos(10000000)) {
							npc.say("你沒有1000W楓幣");
						} else {
							//start GQ
							let guildId = player.getGuildId();
							let guildName = player.getName();

							let gfame = player.getEventValue("世界BOSS善良積分");
							let bfame = player.getEventValue("世界BOSS邪惡積分");
							//makeEvent
							event = npc.makeEvent("worldboss", true, [guildId, player, guildName, gfame, bfame]);
							if (event == null) {
								npc.say("現在世界BOSS還沒有開放，請稍後再試。");
							} else {
								player.loseMesos(10000000);
								npc.broadcastPlayerNotice(1, "【世界BOSS開啟】 : 玩家【" + player.getName() + "】打開" + player.getChannel() + "分流等待室,請快速進場!");
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
		} else if (!player.hasMesos(10000000)) {
			npc.say("你沒有1000W楓幣");;
		} else {
			//if (player.getGuildId() <= 0) { //no guild or not guild master/jr. master
			if (false) {
				npc.sayNext("123", 2060102);
			} else {
				let event = npc.getEvent("worldboss");
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
							player.loseMesos(10000000);
							gfamelist.push(gfame);//好的陣列
							bfamelist.push(bfame);//壞的陣列
							allfamelist.push(gfame);
							allfamelist.push(bfame);
							// gfamelist = [];
							// bfamelist = [];
							// allfamelist = [];
							player.setEvent(event);
							members.push(player);
							npc.broadcastPlayerNotice(2, "【世界BOSS】 : 玩家【" + player.getName() + "】已進入" + player.getChannel() + "分流等待室,請快速進場!");

							player.changeMap(993062000, 0);
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
	
		sss += "#b[對王傷害超過50%]\r\n";




		sss += "#v4032053# 公式:280*(戰地/1500+1) 當前獎勵:#r" + 280 * (Math.floor(player.getMapleUnionLevel() / 1500) + 1) + "#b個\r\n";
		sss += "#v4001713# 公式:80*(戰地/1500+1) 當前獎勵:#r" + 80 * (Math.floor(player.getMapleUnionLevel() / 1500) + 1) + "#b個\r\n";


		sss += "#v2633918# 公式:2*(戰地/1000+1) 當前獎勵:#r" + 2 * (Math.floor(player.getMapleUnionLevel() / 1000) + 1) + "#b個\r\n";
		sss += "#v2633336# 公式:1*(戰地/2000+1) 當前獎勵:#r" + 1 * (Math.floor(player.getMapleUnionLevel() / 2000) + 1) + "#b個\r\n";

		sss += "[對王傷害超過35%]\r\n";


		sss += "#v4032053# 公式:250*(戰地/1500+1) 當前獎勵:#r" + 250 * (Math.floor(player.getMapleUnionLevel() / 1500) + 1) + "#b個\r\n";
		sss += "#v4001713# 公式:50*(戰地/1500+1) 當前獎勵:#r" + 50 * (Math.floor(player.getMapleUnionLevel() / 1500) + 1) + "#b個\r\n";

		sss += "#v2633918# 公式:1*(戰地/1000+1) 當前獎勵:#r" + 1 * (Math.floor(player.getMapleUnionLevel() / 1000) + 1) + "#b個\r\n";
		sss += "#v2633336# 公式:1*(戰地/2000+1) 當前獎勵:#r" + 1 * (Math.floor(player.getMapleUnionLevel() / 2000) + 1) + "#b個\r\n";
	
		sss += "[對王傷害超過20%]\r\n";


		sss += "#v4032053# 公式:200*(戰地/1500+1) 當前獎勵:#r" + 200 * (Math.floor(player.getMapleUnionLevel() / 1500) + 1) + "#b個\r\n";
		sss += "#v4001713# 公式:30*(戰地/1500+1) 當前獎勵:#r" + 30 * (Math.floor(player.getMapleUnionLevel() / 1500) + 1) + "#b個\r\n";

		sss += "#v2633918# 公式:1*(戰地/2000+1) 當前獎勵:#r" + 1 * (Math.floor(player.getMapleUnionLevel() / 2000) + 1) + "#b個\r\n";
		sss += "#v2633336# 公式:1*(戰地/2000+1) 當前獎勵:#r" + 1 * (Math.floor(player.getMapleUnionLevel() / 2000) + 1) + "#b個\r\n";

		sss += "[對王傷害為零]\r\n";


		sss += "#v4032053# 公式:150*(戰地/1500+1) 當前獎勵:#r" + 150 * (Math.floor(player.getMapleUnionLevel() / 1500) + 1) + "#b個\r\n";
		sss += "#v4001713# 公式:40*(戰地/1500+1) 當前獎勵:#r" + 40 * (Math.floor(player.getMapleUnionLevel() / 1500) + 1) + "#b個\r\n";

		sss += "#v2633336# 公式:1*(戰地/2000+1) 當前獎勵:#r" + 1 * (Math.floor(player.getMapleUnionLevel() / 2000) + 1) + "#b個\r\n";
		sss += "#v2633918# 固定獎勵:#r" + 2 + "#b個\r\n";
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
