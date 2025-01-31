/*
 * Boss: Seren - Normal
 */

const EXIT_MAP = 410000670;

const PHASE_1_DIR = 410002200;
const PHASE_1 = 410002220;

const PHASE_2_DIR = 410002240;
const PHASE_2 = 410002260;

const PHASE_FINAL = 410002280;

const DEATH_COUNT = 5;
const BOSS_LOG = "賽連[困難]";
const TIME = 30 * 60

let members;
let endTime;
let start;

export default defineEventScript({
    init(/**[ScriptParty, boolean]*/[party, practiceMode]) {
        let map_1 = event.makeMap(PHASE_1)
        let map_2 = event.makeMap(PHASE_2)
        let map_final = event.makeMap(PHASE_FINAL)
        map_1.reset()
        map_2.reset()
        map_final.reset()
        event.setPracticeMode(practiceMode)
        members = party.getLocalMembers()
        event.startTimer("kick", TIME * 1000)
        endTime = new Date().getTime() + TIME * 1000
		start = new Date().getTime();
		map_final.setIndividualDrop(true);
        for (const member of members) {
            member.setEvent(event)
            if (practiceMode) {
                member.addPQLog("PracticeMode")
            } else {
                member.addPQLog("賽連[困難]")
				member.addEventValue("賽連[困難]");
            }
            member.setDeathCount(DEATH_COUNT)
            member.changeMap(PHASE_1_DIR)
        }
    },
    playerChangedMap(player, destination) {
        switch (destination.getId()) {
            case PHASE_1:
            case PHASE_2:
            case PHASE_FINAL:
                player.showDeathCount()
                player.showTimer((endTime - new Date().getTime()) / 1000)
                break
            case PHASE_1_DIR:
            case PHASE_2_DIR:
                break
            default:
                removePlayer(player.getId(), false)
                break
        }
    },
    timerExpired(key) {
        switch (key) {
            case "kick":
                kick()
                break
            case "To_Stage_2":
                warpToMap(PHASE_2_DIR, 0)
                break
            case "To_Stage_Final":
                warpToMap(PHASE_FINAL, 0)
                break
        }
    },
    playerDisconnected(player) {
        removePlayer(player.getId(), false)
    },
    partyMemberDischarged(party, player) {
        if (party.getLeader() === player.getId()) {
            kick()
        } else {
            removePlayer(player.getId(), true)
        }
    },
    deinit() {
        event.getMap(PHASE_1).endFieldEvent()
        event.getMap(PHASE_2).endFieldEvent()
    },
    mobDied(mob, killer) {
        switch (mob.getDataId()) {
            case 8880650://1阶段
                event.setVariable("boss1", true)
                event.getMap(PHASE_1).endFieldEvent()
                event.getMap(PHASE_1).showTextEffect("#r#fnNanum Gothic ExtraBold##fs26#太阳火焰是不会忘记报仇的。", 100, 2500, 4, 0, 0, 1, 4, 0, 0, 0, "", 0, false)
                event.startTimer("To_Stage_2", 4000)
                break
            case 8880652:
                event.setVariable("boss2", true)
                event.getMap(PHASE_2).endFieldEvent()
                event.getMap(PHASE_2).showTextEffect("#r#fnNanum Gothic ExtraBold##fs26#太阳很快会再次升起。。。", 100, 2500, 4, 0, 0, 1, 4, 0, 0, 0, "", 0, false)
                event.startTimer("To_Stage_Final", 4000)
                break
            case 8880664://宝箱
                event.setVariable("boss2", true)

				reward();
                break
            default:
                break
        }
    },
})

function reward() {
	//通關
	endTime = new Date().getTime();
	totalTime = (endTime - start) / 1000;
	//停止倒計時踢出
	event.stopTimer("kick");
	//30秒後踢出
	event.startTimer("kick", 8 * 1000);
	let map_fina1l = event.getMap(410002280);
	map_fina1l.showTimer(8);
	var damList = [];
	var datotal = 0;
	//做傷害排名
	for (let i = 0; i < members.length; i++) {
		//冒泡排序
		//獲取傷害
		var da = parseFloat(event.getVariable(members[i].getName() + "傷害"));
		datotal += da;
		var arr = new Array(da, members[i]);
		damList.push(arr);
	}
	//拿到數組進行排序
	var temp;
	for (var i = 0; i < damList.length; i++) {
		//j是數組的最後一個角標
		for (var j = damList.length - 1; j > i; j--) {
			if (damList[j][0] > damList[j - 1][0]) {
				//從後往前進行比較，小數往前，一輪之後最小數就在最前面了
				temp = damList[j - 1];
				damList[j - 1] = damList[j];
				damList[j] = temp;
			}
		}
	}

	//damList此時為從大到小排序
	//event.broadcastPlayerNotice(7, "[傷害排名] 總傷害 " + parseFloat(datotal) + " ");
	var killId = 0;
	for (var i = 0; i < damList.length; i++) {

		var player = damList[i][1];
		//排名獎勵
		if (i == 0) { //第一名
			if (party.getMembersCount() > 1) {
				//player.gainItem(4009004, 1);
				var sql = "insert into dgms_bossinfo(bossName, playersName, `time`) values('" + bossid + "','" + player.getName() + "','" + totalTime + "')";
				player.customSqlInsert(sql);
				mm = Math.floor(parseFloat(totalTime) / 60);
				ss = Math.floor(parseFloat(totalTime) % 60);
				event.broadcastPlayerNotice(2, "[" + bossid + "] 玩家 " + player.getName() + "統領隊伍的通關時間  " + mm + " 分 " + ss + " 秒 ");
			} else {
				var sql = "insert into dgms_bossinfo(bossName, playersName, `time`) values('" + bossid + "','" + player.getName() + "','" + totalTime + "')";
				player.customSqlInsert(sql);
				mm = Math.floor(parseFloat(totalTime) / 60);
				ss = Math.floor(parseFloat(totalTime) % 60);
				event.broadcastPlayerNotice(2, "[" + bossid + "] 玩家 " + player.getName() + "統領隊伍的通關時間  " + mm + " 分 " + ss + " 秒 ");
			}
			//player.showSystemMessage("【" + bossid + "】 通關時間 : " + mm + " 分 " + ss + " 秒 ");
		} else if (i == 1) { //第二名

		} else if (i == 2) { //第三名

		}
		if (killPlayer == player.getId()) { //擊殺者獎勵
			killId = i;

		}
		//player.runScript("黑魔法師困難獎勵");
		//event.broadcastPlayerNotice(7, "[傷害排名] 排名:" + (i + 1) + "  玩家：" + player.getName() + "  傷害 ：" + damList[i][0] + "  傷害占比 : " + parseFloat(damList[i][0] / datotal) * 100 + " %");

	}
	var player = damList[killId][1];
	//event.broadcastPlayerNotice(7, "[擊殺獎勵]通關時間: " + totalTime + " 秒 擊殺 玩家：" + damList[killId][1].getName() + "  傷害 ：" + damList[killId][0] + "  傷害占比 : " + parseFloat(damList[killId][0] / datotal) * 100 + " %");
}

function removePlayer(playerId, changeMap) {
    for (let i = 0; i < members.length; i++) {
        if (members[i].getId() === playerId) {
            members[i].setDeathCount(-1)
            members[i].setEvent(null)
            if (changeMap)
                members[i].changeMap(EXIT_MAP)
            members.splice(i, 1)
            break
        }
    }
    if (members.length <= 0) {
        event.destroyEvent()
    }
}

function kick() {
    for (const member of members) {
        member.setEvent(null)
        member.setDeathCount(-1)
        member.changeMap(EXIT_MAP)
    }
    event.destroyEvent()
}

function warpToMap(map, portal) {
    for (const member of members) {
        member.changeMap(map, portal)
    }
}