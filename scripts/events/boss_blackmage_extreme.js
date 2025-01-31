/*
 * Boss: BlackMage - Extreme
 * 
 */

const EXIT_MAP = 450012500

const PHASE_1_DIR = 450013900
const PHASE_1 = 450013910

const PHASE_2_DIR = 450013920
const PHASE_2 = 450013930

const PHASE_3_DIR = 450013940
const PHASE_3 = 450013950

const PHASE_4_DIR = 450013960
const PHASE_4 = 450013970

const PHASE_Final = 450013980

const DEATH_COUNT = 12
const TIME = 30 * 60
const BOSS_LOG = "黑魔法師[困難]"

let members
let endTime
let start;


export default defineEventScript({
    init(/**[ScriptParty, boolean]*/[party, practiceMode]) {
        let map_1 = event.makeMap(PHASE_1)
        let map_2 = event.makeMap(PHASE_2)
        let map_3 = event.makeMap(PHASE_3)
        let map_4 = event.makeMap(PHASE_4)
        let map_final = event.makeMap(PHASE_Final)
        map_1.reset()
        map_2.reset()
        map_3.reset()
        map_4.reset()
        map_final.reset()
        event.setPracticeMode(practiceMode)
        members = party.getLocalMembers()
        event.startTimer("kick", TIME * 1000)
        endTime = new Date().getTime() + TIME * 1000
		start = new Date().getTime();
		map_final.setIndividualDrop(true);
        for (const member of members) {
            member.setEvent(event)
            member.addPQLog("黑魔法師[困難]")
	        member.addEventValue("黑魔法師[困難]");
            member.setDeathCount(DEATH_COUNT)
            member.changeMap(PHASE_1_DIR)
        }
    },
    playerChangedMap(player, destination) {
        switch (destination.getId()) {
            case PHASE_1:
            case PHASE_2:
            case PHASE_3:
            case PHASE_4:
                player.showTimer((endTime - new Date().getTime()) / 1000)
                break
            case PHASE_Final:
                player.showTimer((endTime - new Date().getTime()) / 1000)
                player.cancelSkillEffect(80002623)
                break
            case PHASE_1_DIR:
            case PHASE_2_DIR:
            case PHASE_3_DIR:
            case PHASE_4_DIR:
                break
            default:
                player.setActionBar(-1)
                player.cancelSkillEffect(80002623)
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
            case "To_Stage_3":
                warpToMap(PHASE_3_DIR, 0)
                break
            case "To_Stage_4":
                warpToMap(PHASE_4_DIR, 0)
                break
            case "To_Stage_Final":
                warpToMap(PHASE_Final, 0)
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
        event.getMap(PHASE_3).endFieldEvent()
        event.getMap(PHASE_4).endFieldEvent()
    },
    mobDied(mob, killer) {
        switch (mob.getDataId()) {
            case 8880535:
                event.getMap(PHASE_1).endFieldEvent()
                event.setVariable("boss1", true)
                event.startTimer("To_Stage_2", 4000)
                break
            case 8880532:
                event.getMap(PHASE_2).endFieldEvent()
                event.setVariable("boss2", true)
                event.startTimer("To_Stage_3", 4000)
                break
            case 8880533:
                event.getMap(PHASE_3).endFieldEvent()
                event.setVariable("boss3", true)
                event.startTimer("To_Stage_4", 4000)
                break
            case 8880534:
                event.getMap(PHASE_4).endFieldEvent()
                event.setVariable("boss4", true)
                event.startTimer("To_Stage_Final", 4000)
                break
            case 8880548:
                event.setVariable("boss5", true)
				
				reward();
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
	let map_fina1l = event.getMap(450013980);
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
			player.showSystemMessage("【" + bossid + "】 通關時間 : " + mm + " 分 " + ss + " 秒 ");
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
        member.setDeathCount(-1)
        member.setEvent(null)
        member.changeMap(EXIT_MAP)
    }
    event.destroyEvent()
}

function warpToMap(map, portal) {
    for (const member of members) {
        member.changeMap(map, portal)
    }
}