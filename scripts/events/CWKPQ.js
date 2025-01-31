var mapz = Array(100, 200, 300, 400, 500, 510, 520, 521, 522, 530, 540, 550, 600, 700, 800);

let EXIT_MAP = 610030020;
let FIELD_1 = 610030100;
let FIELD_2 = 610030200;
let FIELD_3 = 610030300;
let FIELD_4 = 610030400;
let FIELD_5 = 610030500;
let FIELD_6 = 610030510;
let FIELD_7 = 610030520;
let FIELD_8 = 610030521;
let FIELD_9 = 610030522;
let FIELD_10 = 610030530;
let FIELD_11 = 610030540;
let FIELD_12 = 610030550;
let FIELD_13 = 610030600;
let FIELD_14 = 610030700;
let FIELD_15 = 610030800;

let map_1;

let DEATH_COUNT = 5;

let BOSS_LOG = "緋紅組隊任務";
let party;
let members;
let endTime;
var pos_x = Array(944, 401, 28, -332, -855);
var pos_y = Array(- 204, -384, -504, -384, -204);
var pos_y2 = Array(- 144, -444, -744, -1044, -1344, -1644);

function init(attachment) {
	party = attachment;
	members = party.getLocalMembers();

	event.setVariable("state", "1");
	event.setVariable("leader", "true");
	event.setVariable("current_instance", "0");
	event.setVariable("pass_number", "0");
	event.setVariable("glpq1", "0");
	event.setVariable("glpq2", "0");
	event.setVariable("glpq3", "0");
	event.setVariable("glpq4", "0");
	event.setVariable("glpq5", "0");
	event.setVariable("glpq6", "0");
	event.setVariable("glpq5_1", "0");

	map_1 = event.getMap(FIELD_1);
	for (var i = 0; i < mapz.length; i++) {
		var map = event.getMap(610030000 + mapz[i]);

		if (map != null) {
			map.reset();
			if (610030400 == 610030000 + mapz[i]) {
				var boss = map.makeMob(9480317);
				boss.changeBaseHp(1);
				map.spawnMob(boss, 271, 515);
				var boss = map.makeMob(9480317);
				boss.changeBaseHp(1);
				map.spawnMob(boss, -795, -565);
				var boss = map.makeMob(9480317);
				boss.changeBaseHp(1);
				map.spawnMob(boss, 10, -865);
				var boss = map.makeMob(9480317);
				boss.changeBaseHp(1);
				map.spawnMob(boss, 981, -745);
				var boss = map.makeMob(9480317);
				boss.changeBaseHp(1);
				map.spawnMob(boss, 1145, -85);


			} else if (610030510 == 610030000 + mapz[i]) {
				for (var z = 0; z < pos_y2.length; z++) {
					var boss = map.makeMob(9400582);
					boss.changeBaseHp(5000000000);
					map.spawnMob(boss, 0, pos_y2[z]);
				}
			} else if (610030530 == 610030000 + mapz[i]) {
				var boss = map.makeMob(9400585);
				boss.changeBaseHp(1);
				map.spawnMob(boss, -369, 215);
				var boss = map.makeMob(9400585);
				boss.changeBaseHp(1);
				map.spawnMob(boss, 456, -25);
				var boss = map.makeMob(9400585);
				boss.changeBaseHp(1);
				map.spawnMob(boss, 867, -625);
				var boss = map.makeMob(9400585);
				boss.changeBaseHp(1);
				map.spawnMob(boss, 362, -925);
				var boss = map.makeMob(9400585);
				boss.changeBaseHp(1);
				map.spawnMob(boss, -991, -865);
			} else if (610030540 == 610030000 + mapz[i]) {
				for (var z = 0; z < pos_x.length; z++) {
					var boss = map.makeMob(9400594);
					boss.changeBaseHp(50000000000);
					map.spawnMob(boss, pos_x[z], pos_y[z]);
				}
			} else if (610030550 == 610030000 + mapz[i]) {
				map.resetReactors(); //pirate room
			}
		}
	}
	party.changeMap(FIELD_1, 0);
	map_1.showTimer(2 * 60);

	event.startTimer("spawnGuardians", 60 * 1000);
	event.startTimer("kick", 2 * 60 * 1000);
	endTime = new Date().getTime() + 2 * 60 * 1000;

	event.setVariable("members", members);
	for (let i = 0; i < members.length; i++) {
		members[i].setEvent(event);
		members[i].addPQLog(BOSS_LOG);
		members[i].setDeathCount(DEATH_COUNT);
	}
}

function spawnGuardians() {
	var map = event.getMap(610030000 + mapz[0]);
	map.broadcastEventNotice("主監護人發現你。");
	for (var i = 0; i < 20; i++) { //spawn 20 guardians
		var boss = map.makeMob(9400594);
		boss.changeBaseHp(70000000000);
		map.spawnMob(boss, 1000, 336);
	}
}

function mobDied(mob) {
	switch (mob.getDataId()) {
		case 9480317:
			event.setVariable("glpq4", parseInt(event.getVariable("glpq4")) + 1);
			event.getMap(FIELD_4).broadcastEventNotice("錘死了:" + event.getVariable("glpq4"));
			if (parseInt(event.getVariable("glpq4")) == 5) {
				event.getMap(FIELD_4).screenEffect("quest/party/clear");
			}
			break;
		case 9400585:
			event.setVariable("glpq5_1", parseInt(event.getVariable("glpq5_1")) + 1);
			event.getMap(FIELD_10).broadcastEventNotice("錘死了:" + event.getVariable("glpq5_1"));
			if (parseInt(event.getVariable("glpq5_1")) == 5) {
				event.getMap(FIELD_10).screenEffect("quest/party/clear");
			}
			break;
	}
}

function removePlayer(playerId, changeMap) {
	for (let i = 0; i < members.length; i++) {
		if (members[i].getId() == playerId) {
			//dissociate event before changing map so playerChangedMap is
			//not called and this method is not called again by the player
			members[i].setEvent(null);
			if (changeMap)
				members[i].changeMap(EXIT_MAP, "st00");
			//collapse the members array so we don't accidentally warp
			//this member again if the leader leaves later.
			members.splice(i, 1);
			break;
		}
	}
	if (members.length <= 0) {
		event.destroyEvent();
	}
}

function playerDisconnected(player) {
	//changeMap is false since all PQ maps force return the player to the exit
	//map on his next login anyway, and we don't want to deal with sending
	//change map packets to a disconnected client
	removePlayer(player.getId(), false);
}

function playerChangedMap(player, destination) {
	//TODO: is it true that even when a non-leader clicks Nella, the entire
	//party is booted? and that GMS forces party out when only two members
	//remain alive and online?
	////java.lang.System.out.println("地圖發生改變"+destination.getId());

	switch (destination.getId()) {
		case FIELD_2:
			if (event.getVariable("current_instance").equals("0")) {
				endTime = new Date().getTime() + 30 * 60 * 1000;
				event.getMap(destination.getId()).showTimer(600000); //10 mins
				event.stopTimer("kick");
				event.startTimer("kick", 30 * 60 * 1000);
				event.setVariable("current_instance", "1");
			}
			break;
		case FIELD_3:
			if (event.getVariable("current_instance").equals("1")) {
				endTime = new Date().getTime() + 30 * 60 * 1000;
				event.getMap(destination.getId()).showTimer(600000); //10 mins
				event.stopTimer("kick");
				event.startTimer("kick", 30 * 60 * 1000);
				event.setVariable("current_instance", "2");
			}
			break;
		case FIELD_4:
			if (event.getVariable("current_instance").equals("2")) {
				endTime = new Date().getTime() + 30 * 60 * 1000;
				event.getMap(destination.getId()).showTimer(600000); //10 mins
				event.stopTimer("kick");
				event.startTimer("kick", 30 * 60 * 1000);
				event.setVariable("current_instance", "3");
			}
			break;
		case FIELD_5:
			if (event.getVariable("current_instance").equals("3")) {
				endTime = new Date().getTime() + 20 * 60 * 1000;
				event.getMap(destination.getId()).showTimer(120000); //20 mins
				event.stopTimer("kick");
				event.startTimer("kick", 20 * 60 * 1000);
				event.setVariable("current_instance", "4");
			}
			break;
		case FIELD_13:
			if (event.getVariable("current_instance").equals("4")) {
				endTime = new Date().getTime() + 60 * 60 * 1000;
				event.getMap(destination.getId()).showTimer(360000); //1 hr
				event.stopTimer("kick");
				event.startTimer("kick", 60 * 60 * 1000);
				event.setVariable("current_instance", "5");
			}
			break;
		case FIELD_15:
			if (event.getVariable("current_instance").equals("5")) {
				endTime = new Date().getTime() + 60 * 1000;
				event.getMap(destination.getId()).showTimer(60000); //1 min
				event.stopTimer("kick");
				event.startTimer("kick", 60 * 1000);
				event.setVariable("current_instance", "6");
			}
			break;
	}
	switch (destination.getId()) {
		case FIELD_1:
		case FIELD_2:
		case FIELD_3:
		case FIELD_4:
		case FIELD_5:
		case FIELD_6:
		case FIELD_7:
		case FIELD_8:
		case FIELD_9:
		case FIELD_10:
		case FIELD_11:
		case FIELD_12:
		case FIELD_13:
		case FIELD_14:
		case FIELD_15:
			player.showTimer((endTime - new Date().getTime()) / 1000);
			player.showDeathCount();
			break;
		default:
			//player died and respawned or clicked Nella to leave PQ
			//changeMap is false so player doesn't get re-warped to exit map
			removePlayer(player.getId(), false);
	}
}

function partyMemberDischarged(party, player) {
	if (party.getLeader() == player.getId()) {
		kick();
	} else {
		removePlayer(player.getId(), true);
	}
}

function kick() {
	for (let i = 0; i < members.length; i++) {
		//dissociate event before changing map so playerChangedMap is not
		//called and this method is not called again by the player
		members[i].setEvent(null);
		members[i].changeMap(EXIT_MAP);
	}
	event.destroyEvent();
}

function timerExpired(key) {
	switch (key) {
		case "kick":
			kick();
			break;
		case "spawnGuardians":
			spawnGuardians();
			break;
	}
}

function deinit() {
	event.getMap(FIELD_1).endFieldEvent();
	event.getMap(FIELD_2).endFieldEvent();
	event.getMap(FIELD_3).endFieldEvent();
	event.getMap(FIELD_4).endFieldEvent();
	event.getMap(FIELD_5).endFieldEvent();
	event.getMap(FIELD_6).endFieldEvent();
	event.getMap(FIELD_7).endFieldEvent();
	event.getMap(FIELD_8).endFieldEvent();
	event.getMap(FIELD_9).endFieldEvent();
	event.getMap(FIELD_10).endFieldEvent();
	event.getMap(FIELD_11).endFieldEvent();
	event.getMap(FIELD_12).endFieldEvent();
	event.getMap(FIELD_13).endFieldEvent();
	event.getMap(FIELD_14).endFieldEvent();
	event.getMap(FIELD_15).endFieldEvent();
	for (let i = 0; i < members.length; i++) {
		members[i].setEvent(null);
		members[i].setDeathCount(-1);
	}
}