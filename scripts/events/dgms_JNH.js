/* This is a piece of code

 * author dgms

 * global player

 * 腳本定製 技術支持 QQ 381991414

 */
let maps = [980002003, 980002004, 980000600, 980000700, 980001701, 980001601, 980001001, 980000901]
let EXIT_MAP = 980030000;
let START_MAP = 610030600;
let time = 10 * 60 * 1000; //闖關時間
let minPoint = 30;//最低打到多少積分才能拿
let PQLog = "dgms_JNH";
let DEATH_COUNT = 10;

let party;
let members;
let endTime;
let membersLength;
let map;

let team1 = Array();
let team2 = Array();
let team1Point = 0;
let team2Point = 0;
let team1Index = Array();
let nowLevel = 0;

let fightMaps = Array(
	Array(980001701, 980001601)
);

//每個階段怪物配置/boss/9601521,9601662,9601663,9601591,9601022
let roundMobs = Array(

	//第1階段，蘑菇王
	Array(

		Array(9833419, 13300000000, -228, -416),
		Array(9833419, 13300000000, -115, -416),
		Array(9833419, 13300000000, 28, -416),
		Array(9833419, 13300000000, 450, -416),
		Array(9833419, 13300000000, 595, -416),
		Array(9833419, 13300000000, 759, -416),
		Array(9833419, 13300000000, -228, -188),
		Array(9833419, 13300000000, -115, -188),
		Array(9833419, 13300000000, 28, -188),
		Array(9833419, 13300000000, 450, -188),
		Array(9833419, 13300000000, 595, -188),
		Array(9833419, 13300000000, 759, -188),
		Array(9833419, 13300000000, -402, 30),
		Array(9833419, 13300000000, -228, 30),
		Array(9833419, 13300000000, -115, 30),
		Array(9833419, 13300000000, 28, 30),
		Array(9833419, 13300000000, 450, 30),
		Array(9833419, 13300000000, 595, 30),
		Array(9833419, 13300000000, 759, 30),
		Array(9833419, 13300000000, 886, 30),
		Array(9833419, 13300000000, -402, 179),
		Array(9833419, 13300000000, -228, 179),
		Array(9833419, 13300000000, -115, 179),
		Array(9833419, 13300000000, 28, 179),
		Array(9833419, 13300000000, 450, 179),
		Array(9833419, 13300000000, 595, 179),
		Array(9833419, 13300000000, 759, 179),
		Array(9833419, 13300000000, 886, 179),
		Array(9833419, 13300000000, -228, -416),
		Array(9833419, 13300000000, -115, -416),
		Array(9833419, 13300000000, 28, -416),
		Array(9833419, 13300000000, 450, -416),
		Array(9833419, 13300000000, 595, -416),
		Array(9833419, 13300000000, 759, -416),
		Array(9833419, 13300000000, -228, -188),
		Array(9833419, 13300000000, -115, -188),
		Array(9833419, 13300000000, 28, -188),
		Array(9833419, 13300000000, 450, -188),
		Array(9833419, 13300000000, 595, -188),
		Array(9833419, 13300000000, 759, -188),
		Array(9833419, 13300000000, -402, 30),
		Array(9833419, 13300000000, -228, 30),
		Array(9833419, 13300000000, -115, 30),
		Array(9833419, 13300000000, 28, 30),
		Array(9833419, 13300000000, 450, 30),
		Array(9833419, 13300000000, 595, 30),
		Array(9833419, 13300000000, 759, 30),
		Array(9833419, 13300000000, 886, 30),
		Array(9833419, 13300000000, -402, 179),
		Array(9833419, 13300000000, -228, 179),
		Array(9833419, 13300000000, -115, 179)

	),

	//第2階段，蝙蝠怪
	Array(
		//怪物ID 血量 X坐標 Y坐標

		Array(9833420, 37500000000, -228, -416),
		Array(9833420, 37500000000, -115, -416),
		Array(9833420, 37500000000, 28, -416),
		Array(9833420, 37500000000, 450, -416),
		Array(9833420, 37500000000, 595, -416),
		Array(9833420, 37500000000, 759, -416),
		Array(9833420, 37500000000, -228, -188),
		Array(9833420, 37500000000, -115, -188),
		Array(9833420, 37500000000, 28, -188),
		Array(9833420, 37500000000, 450, -188),
		Array(9833420, 37500000000, 595, -188),
		Array(9833420, 37500000000, 759, -188),
		Array(9833420, 37500000000, -402, 30),
		Array(9833420, 37500000000, -228, 30),
		Array(9833420, 37500000000, -115, 30),
		Array(9833420, 37500000000, 28, 30),
		Array(9833420, 37500000000, 450, 30),
		Array(9833420, 37500000000, 595, 30),
		Array(9833420, 37500000000, 759, 30),
		Array(9833420, 37500000000, 886, 30),
		Array(9833420, 37500000000, -402, 179),
		Array(9833420, 37500000000, -228, 179),
		Array(9833420, 37500000000, -115, 179),
		Array(9833420, 37500000000, 28, 179),
		Array(9833420, 37500000000, 450, 179),
		Array(9833420, 37500000000, 595, 179),
		Array(9833420, 37500000000, 759, 179),
		Array(9833420, 37500000000, 886, 179),
		Array(9833420, 37500000000, -228, -416),
		Array(9833420, 37500000000, -115, -416),
		Array(9833420, 37500000000, 28, -416),
		Array(9833420, 37500000000, 450, -416),
		Array(9833420, 37500000000, 595, -416),
		Array(9833420, 37500000000, 759, -416),
		Array(9833420, 37500000000, -228, -188),
		Array(9833420, 37500000000, -115, -188),
		Array(9833420, 37500000000, 28, -188),
		Array(9833420, 37500000000, 450, -188),
		Array(9833420, 37500000000, 595, -188),
		Array(9833420, 37500000000, 759, -188),
		Array(9833420, 37500000000, -402, 30),
		Array(9833420, 37500000000, -228, 30),
		Array(9833420, 37500000000, -115, 30),
		Array(9833420, 37500000000, 28, 30),
		Array(9833420, 37500000000, 450, 30),
		Array(9833420, 37500000000, 595, 30),
		Array(9833420, 37500000000, 759, 30),
		Array(9833420, 37500000000, 886, 30),
		Array(9833420, 37500000000, -402, 179),
		Array(9833420, 37500000000, -228, 179),
		Array(9833420, 37500000000, -115, 179)

	),
	//第3階段，查烏
	Array(
		//怪物ID 血量 X坐標 Y坐標
		Array(9833421, 97500000000, -228, -416),
		Array(9833421, 97500000000, -115, -416),
		Array(9833421, 97500000000, 28, -416),
		Array(9833421, 97500000000, 450, -416),
		Array(9833421, 97500000000, 595, -416),
		Array(9833421, 97500000000, 759, -416),
		Array(9833421, 97500000000, -228, -188),
		Array(9833421, 97500000000, -115, -188),
		Array(9833421, 97500000000, 28, -188),
		Array(9833421, 97500000000, 450, -188),
		Array(9833421, 97500000000, 595, -188),
		Array(9833421, 97500000000, 759, -188),
		Array(9833421, 97500000000, -402, 30),
		Array(9833421, 97500000000, -228, 30),
		Array(9833421, 97500000000, -115, 30),
		Array(9833421, 97500000000, 28, 30),
		Array(9833421, 97500000000, 450, 30),
		Array(9833421, 97500000000, 595, 30),
		Array(9833421, 97500000000, 759, 30),
		Array(9833421, 97500000000, 886, 30),
		Array(9833421, 97500000000, -402, 179),
		Array(9833421, 97500000000, -228, 179),
		Array(9833421, 97500000000, -115, 179),
		Array(9833421, 97500000000, 28, 179),
		Array(9833421, 97500000000, 450, 179),
		Array(9833421, 97500000000, 595, 179),
		Array(9833421, 97500000000, 759, 179),
		Array(9833421, 97500000000, 886, 179),
		Array(9833421, 97500000000, -228, -416),
		Array(9833421, 97500000000, -115, -416),
		Array(9833421, 97500000000, 28, -416),
		Array(9833421, 97500000000, 450, -416),
		Array(9833421, 97500000000, 595, -416),
		Array(9833421, 97500000000, 759, -416),
		Array(9833421, 97500000000, -228, -188),
		Array(9833421, 97500000000, -115, -188),
		Array(9833421, 97500000000, 28, -188),
		Array(9833421, 97500000000, 450, -188),
		Array(9833421, 97500000000, 595, -188),
		Array(9833421, 97500000000, 759, -188),
		Array(9833421, 97500000000, -402, 30),
		Array(9833421, 97500000000, -228, 30),
		Array(9833421, 97500000000, -115, 30),
		Array(9833421, 97500000000, 28, 30),
		Array(9833421, 97500000000, 450, 30),
		Array(9833421, 97500000000, 595, 30),
		Array(9833421, 97500000000, 759, 30),
		Array(9833421, 97500000000, 886, 30),
		Array(9833421, 97500000000, -402, 179),
		Array(9833421, 97500000000, -228, 179),
		Array(9833421, 97500000000, -115, 179)

	),
	//第4階段，薛西斯
	Array(
		//怪物ID 血量 X坐標 Y坐標
		Array(9833421, 97500000000, -228, -416),
		Array(9833421, 97500000000, -115, -416),
		Array(9833421, 97500000000, 28, -416),
		Array(9833421, 97500000000, 450, -416),
		Array(9833421, 97500000000, 595, -416),
		Array(9833421, 97500000000, 759, -416),
		Array(9833421, 97500000000, -228, -188),
		Array(9833421, 97500000000, -115, -188),
		Array(9833421, 97500000000, 28, -188),
		Array(9833421, 97500000000, 450, -188),
		Array(9833421, 97500000000, 595, -188),
		Array(9833421, 97500000000, 759, -188),
		Array(9833421, 97500000000, -402, 30),
		Array(9833421, 97500000000, -228, 30),
		Array(9833421, 97500000000, -115, 30),
		Array(9833421, 97500000000, 28, 30),
		Array(9833421, 97500000000, 450, 30),
		Array(9833421, 97500000000, 595, 30),
		Array(9833421, 97500000000, 759, 30),
		Array(9833421, 97500000000, 886, 30),
		Array(9833421, 97500000000, -402, 179),
		Array(9833421, 97500000000, -228, 179),
		Array(9833421, 97500000000, -115, 179),
		Array(9833421, 97500000000, 28, 179),
		Array(9833421, 97500000000, 450, 179),
		Array(9833421, 97500000000, 595, 179),
		Array(9833421, 97500000000, 759, 179),
		Array(9833421, 97500000000, 886, 179),
		Array(9833421, 97500000000, -228, -416),
		Array(9833421, 97500000000, -115, -416),
		Array(9833421, 97500000000, 28, -416),
		Array(9833421, 97500000000, 450, -416),
		Array(9833421, 97500000000, 595, -416),
		Array(9833421, 97500000000, 759, -416),
		Array(9833421, 97500000000, -228, -188),
		Array(9833421, 97500000000, -115, -188),
		Array(9833421, 97500000000, 28, -188),
		Array(9833421, 97500000000, 450, -188),
		Array(9833421, 97500000000, 595, -188),
		Array(9833421, 97500000000, 759, -188),
		Array(9833421, 97500000000, -402, 30),
		Array(9833421, 97500000000, -228, 30),
		Array(9833421, 97500000000, -115, 30),
		Array(9833421, 97500000000, 28, 30),
		Array(9833421, 97500000000, 450, 30),
		Array(9833421, 97500000000, 595, 30),
		Array(9833421, 97500000000, 759, 30),
		Array(9833421, 97500000000, 886, 30),
		Array(9833421, 97500000000, -402, 179),
		Array(9833421, 97500000000, -228, 179),
		Array(9833421, 97500000000, -115, 179)

	),
	//第5階段，阿麗莎
	Array(
		//怪物ID 血量 X坐標 Y坐標
		Array(9833421, 97500000000, -228, -416),
		Array(9833421, 97500000000, -115, -416),
		Array(9833421, 97500000000, 28, -416),
		Array(9833421, 97500000000, 450, -416),
		Array(9833421, 97500000000, 595, -416),
		Array(9833421, 97500000000, 759, -416),
		Array(9833421, 97500000000, -228, -188),
		Array(9833421, 97500000000, -115, -188),
		Array(9833421, 97500000000, 28, -188),
		Array(9833421, 97500000000, 450, -188),
		Array(9833421, 97500000000, 595, -188),
		Array(9833421, 97500000000, 759, -188),
		Array(9833421, 97500000000, -402, 30),
		Array(9833421, 97500000000, -228, 30),
		Array(9833421, 97500000000, -115, 30),
		Array(9833421, 97500000000, 28, 30),
		Array(9833421, 97500000000, 450, 30),
		Array(9833421, 97500000000, 595, 30),
		Array(9833421, 97500000000, 759, 30),
		Array(9833421, 97500000000, 886, 30),
		Array(9833421, 97500000000, -402, 179),
		Array(9833421, 97500000000, -228, 179),
		Array(9833421, 97500000000, -115, 179),
		Array(9833421, 97500000000, 28, 179),
		Array(9833421, 97500000000, 450, 179),
		Array(9833421, 97500000000, 595, 179),
		Array(9833421, 97500000000, 759, 179),
		Array(9833421, 97500000000, 886, 179),
		Array(9833421, 97500000000, -228, -416),
		Array(9833421, 97500000000, -115, -416),
		Array(9833421, 97500000000, 28, -416),
		Array(9833421, 97500000000, 450, -416),
		Array(9833421, 97500000000, 595, -416),
		Array(9833421, 97500000000, 759, -416),
		Array(9833421, 97500000000, -228, -188),
		Array(9833421, 97500000000, -115, -188),
		Array(9833421, 97500000000, 28, -188),
		Array(9833421, 97500000000, 450, -188),
		Array(9833421, 97500000000, 595, -188),
		Array(9833421, 97500000000, 759, -188),
		Array(9833421, 97500000000, -402, 30),
		Array(9833421, 97500000000, -228, 30),
		Array(9833421, 97500000000, -115, 30),
		Array(9833421, 97500000000, 28, 30),
		Array(9833421, 97500000000, 450, 30),
		Array(9833421, 97500000000, 595, 30),
		Array(9833421, 97500000000, 759, 30),
		Array(9833421, 97500000000, 886, 30),
		Array(9833421, 97500000000, -402, 179),
		Array(9833421, 97500000000, -228, 179),
		Array(9833421, 97500000000, -115, 179)

	),
	//第6階段
	Array(
		//怪物ID 血量 X坐標 Y坐標
		Array(9833421, 97500000000, -228, -416),
		Array(9833421, 97500000000, -115, -416),
		Array(9833421, 97500000000, 28, -416),
		Array(9833421, 97500000000, 450, -416),
		Array(9833421, 97500000000, 595, -416),
		Array(9833421, 97500000000, 759, -416),
		Array(9833421, 97500000000, -228, -188),
		Array(9833421, 97500000000, -115, -188),
		Array(9833421, 97500000000, 28, -188),
		Array(9833421, 97500000000, 450, -188),
		Array(9833421, 97500000000, 595, -188),
		Array(9833421, 97500000000, 759, -188),
		Array(9833421, 97500000000, -402, 30),
		Array(9833421, 97500000000, -228, 30),
		Array(9833421, 97500000000, -115, 30),
		Array(9833421, 97500000000, 28, 30),
		Array(9833421, 97500000000, 450, 30),
		Array(9833421, 97500000000, 595, 30),
		Array(9833421, 97500000000, 759, 30),
		Array(9833421, 97500000000, 886, 30),
		Array(9833421, 97500000000, -402, 179),
		Array(9833421, 97500000000, -228, 179),
		Array(9833421, 97500000000, -115, 179),
		Array(9833421, 97500000000, 28, 179),
		Array(9833421, 97500000000, 450, 179),
		Array(9833421, 97500000000, 595, 179),
		Array(9833421, 97500000000, 759, 179),
		Array(9833421, 97500000000, 886, 179),
		Array(9833421, 97500000000, -228, -416),
		Array(9833421, 97500000000, -115, -416),
		Array(9833421, 97500000000, 28, -416),
		Array(9833421, 97500000000, 450, -416),
		Array(9833421, 97500000000, 595, -416),
		Array(9833421, 97500000000, 759, -416),
		Array(9833421, 97500000000, -228, -188),
		Array(9833421, 97500000000, -115, -188),
		Array(9833421, 97500000000, 28, -188),
		Array(9833421, 97500000000, 450, -188),
		Array(9833421, 97500000000, 595, -188),
		Array(9833421, 97500000000, 759, -188),
		Array(9833421, 97500000000, -402, 30),
		Array(9833421, 97500000000, -228, 30),
		Array(9833421, 97500000000, -115, 30),
		Array(9833421, 97500000000, 28, 30),
		Array(9833421, 97500000000, 450, 30),
		Array(9833421, 97500000000, 595, 30),
		Array(9833421, 97500000000, 759, 30),
		Array(9833421, 97500000000, 886, 30),
		Array(9833421, 97500000000, -402, 179),
		Array(9833421, 97500000000, -228, 179),
		Array(9833421, 97500000000, -115, 179)

	),


	//第7階段
	Array(
		//怪物ID 血量 X坐標 Y坐標
		Array(9833437, 1297500000000, 238, 179),

	),


	//第8階段
	Array(
		//怪物ID 血量 X坐標 Y坐標
		Array(9833439, 1797500000000, 238, 179),

	),



	//第9階段
	Array(
		//怪物ID 血量 X坐標 Y坐標

		Array(9833380, 2297500000000, 238, 179),
	)

);

let fightmap1, fightmap2;
let fightmap1Obj, fightmap2Obj;

function init(attachment) {


	//var ranmap = Math.floor(Math.random() *2);
	fightmap1 = 980001701;
	fightmap2 = 980001601;

	fightmap1Obj = event.getMap(fightmap1);
	fightmap2Obj = event.getMap(fightmap2);

	fightmap1Obj.setNoSpawn(true)
	fightmap2Obj.setNoSpawn(true)
	fightmap1Obj.clearMobs();
	fightmap2Obj.clearMobs();

	party = attachment;
	members = party.getLocalMembers();
	membersLength = members.length;

	for (let i = 0; i < members.length; i++) {
		members[i].setDeathCount(DEATH_COUNT);
		members[i].setEvent(event);
		members[i].addPQLog(PQLog);

	}


	//隨機分配人員
	var arr = [];
	for (let i = 0; i < members.length; i++) {
		arr.push(i);
	}
	var result = [];
	var ranNum = membersLength / 2;
	for (var i = 0; i < ranNum; i++) {
		var ran = Math.floor(Math.random() * arr.length);
		result.push(arr.splice(ran, 1)[0]);
	};

	//1隊
	for (var i = 0; i < result.length; i++) {
		team1.push(members[result[i]])
		team1[i].changeMap(980000600);
		team1[i].showTimer(30);
	}
	//2隊
	for (var i = 0; i < arr.length; i++) {
		team2.push(members[arr[i]])
		team2[i].changeMap(980000700);
		team1[i].showTimer(30);
	}

	for (let dd = 0; dd < members.length; dd++) {
		members[dd].showSystemMessage("--------------------------------------------------");
		members[dd].showSystemMessage("[嘉年華]：分隊提醒,一隊隊員為：");
		var sss = "";
		for (let ii = 0; ii < team1.length; ii++) {
			sss += team1[ii].getName() + "  "
		}
		members[dd].showSystemMessage("[嘉年華]：" + sss);
		members[dd].showSystemMessage("--------------------------------------------------");
		members[dd].showSystemMessage("[嘉年華]：分隊提醒,二隊隊員為：");
		sss = "";
		for (let ii = 0; ii < team2.length; ii++) {
			sss += team2[ii].getName() + "  "
		}
		members[dd].showSystemMessage("[嘉年華]：" + sss);
		members[dd].showSystemMessage("--------------------------------------------------");
		members[dd].showSystemMessage("[嘉年華]:即將傳送至戰場！請做好準備！倒計時10秒！");
	}


	event.startTimer("startGame", 10 * 1000);//準備時間
	var mapReady1 = event.getMap(980000600);
	mapReady1.showTimer(8);
	mapReady1.blowWeather(5120000, "你們被編為一隊，請做好準備，將二隊比下去！10秒後進入戰場！");
	var mapReady2 = event.getMap(980000700);
	mapReady2.showTimer(8);
	mapReady2.blowWeather(5120000, "你們被編為二隊，請做好準備，將一隊比下去！10秒後進入戰場！");

}

function removePlayer(playerId, changeMap) {
	if (party.getLeader() == playerId) {
		for (let i = 0; i < members.length; i++) {
			members[i].setEvent(null);
			if (changeMap || members[i].getId() != playerId)
				members[i].changeMap(EXIT_MAP, "st00");
		}
		event.destroyEvent();
	} else {
		for (let i = 0; i < members.length; i++) {
			if (members[i].getId() == playerId) {
				members[i].setEvent(null);
				if (changeMap)
					members[i].changeMap(EXIT_MAP, "st00");
				members.splice(i, 1);
				break;
			}
		}
	}
}


function mobDied(mob) {
	var mapId = mob.getMapId();
	switch (mapId) {
		case fightmap1:
			//一隊的怪;
			team1Point++;

			notice(1, "殺死怪物獲得積分！當前積分 ：" + team1Point);
			//看怪物是否消滅完
			if (fightmap1Obj.getEventMobCount() <= 0) {

				//看是否是最後一關
				if (nowLevel >= roundMobs.length) {
					notice(3, "最後一輪怪物已被第一隊清理，即將統計積分分發獎勵!");
					event.startTimer("endTime", 2000);//結束時間
				} else {
					notice(3, "第" + (nowLevel + 1) + "輪怪物已被一隊清理完成，即將開啟下一輪！");
					fightmap1Obj.blowWeather(5120000, "3秒後第" + (nowLevel + 1) + "回合怪物將來襲。。一共" + roundMobs.length + "回合");
					fightmap2Obj.blowWeather(5120000, "3秒後第" + (nowLevel + 1) + "回合怪物將來襲。。一共" + roundMobs.length + "回合");
					event.startTimer("spwanMobs", 3 * 1000);//準備時間
				}

			}
			break;
		case fightmap2:
			//二隊的怪;
			team2Point++;
			notice(2, "殺死怪物獲得積分！當前積分 ：" + team1Point);
			//看怪物是否消滅完
			if (fightmap2Obj.getEventMobCount() <= 0) {

				//看是否是最後一關
				if (nowLevel >= roundMobs.length) {
					notice(3, "最後一輪怪物已被第二隊清理，即將統計積分分發獎勵!");
					event.startTimer("endTime", 2000);//結束時間
				} else {
					notice(3, "第" + (nowLevel + 1) + "輪怪物已被二隊清理完成，即將開啟下一輪！");
					fightmap1Obj.blowWeather(5120000, "3秒後下一個回合回合怪物將來襲。。一共" + roundMobs.length + "回合");
					fightmap2Obj.blowWeather(5120000, "3秒後第" + (nowLevel + 1) + "回合怪物將來襲。。一共" + roundMobs.length + "回合");
					event.startTimer("spwanMobs", 3 * 1000);//準備時間
				}

			}
			break;
	}
}

function notice(team, msg) {
	if (team == 1) {
		for (let ii = 0; ii < team1.length; ii++) {
			try {
				team1[ii].showSystemMessage("[嘉年華]:" + msg);
			} catch (e) {

			}
		}
	} else if (team == 2) {
		for (let ii = 0; ii < team2.length; ii++) {
			try {
				team2[ii].showSystemMessage("[嘉年華]:" + msg);
			} catch (e) {

			}
		}
	} else {
		for (let ii = 0; ii < team1.length; ii++) {
			try {
				team1[ii].showSystemMessage("[嘉年華]:" + msg);
			} catch (e) {

			}
		}
		for (let ii = 0; ii < team2.length; ii++) {
			try {
				team2[ii].showSystemMessage("[嘉年華]:" + msg);
			} catch (e) {

			}
		}
	}
}

function spwanMobs() {
	fightmap1Obj.clearMobs();
	fightmap2Obj.clearMobs();

	//召喚怪物
	var mobs = roundMobs[nowLevel];
	for (var i = 0; i < mobs.length; i++) {

		var mob = fightmap1Obj.makeMob(mobs[i][0]);
		mob.changeBaseHp(mobs[i][1]);
		fightmap1Obj.spawnMob(mob, mobs[i][2], mobs[i][3]);

		mob = fightmap2Obj.makeMob(mobs[i][0]);
		mob.changeBaseHp(mobs[i][1]);
		fightmap2Obj.spawnMob(mob, mobs[i][2], mobs[i][3]);
	}

	notice(3, "當前階段 ：" + (nowLevel + 1) + ",請盡快消滅怪物！")

	nowLevel++;

}

function playerDisconnected(player) {
	removePlayer(player.getId(), false);
}

function playerChangedMap(player, destination) {
	if (destination.getId() == 980000600 || destination.getId() == 980000700) {
	} else if (destination.getId() == fightmap1 || destination.getId() == fightmap2) {
		var mapReady1 = event.getMap(fightmap1);
		mapReady1.showTimer(time / 1000);
		var mapReady2 = event.getMap(fightmap2);
		mapReady2.showTimer(time / 1000);
	} else if (maps.indexOf(destination.getId()) != -1) {
	} else {
		removePlayer(player.getId(), false);
	}
}

function partyMemberDischarged(party, player) {
}

function timerExpired(key) {
	switch (key) {
		case "endTime":
			//時間到
			//計算分值
			var mapY = event.getMap(980002003);
			var mapN = event.getMap(980002004);
			if (team1Point > team2Point) {
				//1隊贏
				for (let ii = 0; ii < team1.length; ii++) {
					try {
						team1[ii].changeMap(980002003);
						team1[ii].showSystemMessage("[嘉年華]:遊戲結束！");
						team1[ii].showSystemMessage("[嘉年華]:一隊積分 " + team1Point + "   二隊積分 " + team2Point);
						team1[ii].showSystemMessage("[嘉年華]:恭喜你們，獲得勝利！5秒後自動出場！");
						if (team1Point >= minPoint)
							team1[ii].runScript("嘉年華勝利獎勵");
						else
							team1[ii].showSystemMessage("[嘉年華]:積分未達到" + minPoint + ",沒有獎勵！");
					} catch (e) {

					}
				}
				for (let ii = 0; ii < team2.length; ii++) {
					try {
						team2[ii].changeMap(980002004);
						team2[ii].showSystemMessage("[嘉年華]:遊戲結束！");
						team2[ii].showSystemMessage("[嘉年華]:一隊積分 " + team1Point + "   二隊積分 " + team2Point);
						team2[ii].showSystemMessage("[嘉年華]:很遺憾，你們輸了！5秒後自動出場！");
						if (team2Point >= minPoint)
							team2[ii].runScript("嘉年華失敗獎勵");
						else
							team2[ii].showSystemMessage("[嘉年華]:積分未達到" + minPoint + ",沒有獎勵！");
					} catch (e) {

					}
				}
			} else if (team1Point < team2Point) {
				for (let ii = 0; ii < team1.length; ii++) {
					try {
						team1[ii].changeMap(980002004);
						team1[ii].showSystemMessage("[嘉年華]:遊戲結束！");
						team1[ii].showSystemMessage("[嘉年華]:一隊積分 " + team1Point + "   二隊積分 " + team2Point);
						team1[ii].showSystemMessage("[嘉年華]:很遺憾，你們輸了！5秒後自動出場！");
						if (team1Point >= minPoint)
							team1[ii].runScript("嘉年華失敗獎勵");
						else
							team1[ii].showSystemMessage("[嘉年華]:積分未達到" + minPoint + ",沒有獎勵！");
					} catch (e) {

					}
				}
				for (let ii = 0; ii < team2.length; ii++) {
					try {
						team2[ii].changeMap(980002003);
						team2[ii].showSystemMessage("[嘉年華]:遊戲結束！");
						team2[ii].showSystemMessage("[嘉年華]:一隊積分 " + team1Point + "   二隊積分 " + team2Point);
						team2[ii].showSystemMessage("[嘉年華]:恭喜你們，獲得勝利！5秒後自動出場！");
						if (team2Point >= minPoint)
							team2[ii].runScript("嘉年華勝利獎勵");
						else
							team2[ii].showSystemMessage("[嘉年華]:積分未達到" + minPoint + ",沒有獎勵！");
					} catch (e) {

					}
				}

			} else {
				//平局
				for (let ii = 0; ii < team1.length; ii++) {
					try {
						team1[ii].changeMap(980002003);
						team1[ii].showSystemMessage("[嘉年華]:遊戲結束！");
						team1[ii].showSystemMessage("[嘉年華]:一隊積分 " + team1Point + "   二隊積分 " + team2Point);
						team1[ii].showSystemMessage("[嘉年華]:平局收尾,請再接再厲！5秒後自動出場！");
						if (team1Point >= minPoint)
							team1[ii].runScript("嘉年華平局獎勵");
						else
							team1[ii].showSystemMessage("[嘉年華]:積分未達到" + minPoint + ",沒有獎勵！");
					} catch (e) {

					}
				}
				for (let ii = 0; ii < team2.length; ii++) {
					try {
						team2[ii].changeMap(980002003);
						team2[ii].showSystemMessage("[嘉年華]:遊戲結束！");
						team2[ii].showSystemMessage("[嘉年華]:一隊積分 " + team1Point + "   二隊積分 " + team2Point);
						team2[ii].showSystemMessage("[嘉年華]:平局收尾,請再接再厲！5秒後自動出場！");
						if (team2Point >= minPoint)
							team2[ii].runScript("嘉年華平局獎勵");
						else
							team2[ii].showSystemMessage("[嘉年華]:積分未達到" + minPoint + ",沒有獎勵！");
					} catch (e) {

					}
				}
			}
			mapY.showTimer(8);
			mapN.showTimer(8);
			mapY.blowWeather(5120000, "恭喜你們獲得勝利！");
			mapN.blowWeather(5120000, "很遺憾，你們失敗了！請再接再厲！");
			event.startTimer("black", 5000);//準備時間
			break;
		case "startGame":
			for (let ii = 0; ii < team1.length; ii++) {
				try {
					team1[ii].changeMap(fightmap1);
					team1[ii].showSystemMessage("[嘉年華]: 你屬於一隊！趕緊為隊伍爭光吧！消滅怪物獲取積分！");
				} catch (e) {

				}
			}
			for (let ii = 0; ii < team2.length; ii++) {

				try {
					team2[ii].changeMap(fightmap2);
					team2[ii].showSystemMessage("[嘉年華]: 你屬於二隊！趕緊為隊伍爭光吧！消滅怪物獲取積分！");
				} catch (e) {

				}
			}
			//召喚怪物
			event.startTimer("spwanMobs", 3000);//結束時間
			fightmap1Obj.blowWeather(5120000, "3秒後第1回合怪物將來襲。。一共" + roundMobs.length + "回合");
			fightmap2Obj.blowWeather(5120000, "3秒後第1回合怪物將來襲。。一共" + roundMobs.length + "回合");

			event.startTimer("endTime", time);//結束時間
			break;
		case "black":
			kick();
			break;
		case "spwanMobs":
			spwanMobs();
			break;
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

function deinit() {
	event.getMap(980002003).endFieldEvent();
	event.getMap(980002004).endFieldEvent();
	event.getMap(980000600).endFieldEvent();
	event.getMap(980000700).endFieldEvent();
	event.getMap(980001701).endFieldEvent();
	event.getMap(980001601).endFieldEvent();
	event.getMap(980001001).endFieldEvent();
	event.getMap(980000901).endFieldEvent();
	for (let i = 0; i < members.length; i++) {
		members[i].setEvent(null);
		members[i].setDeathCount(-1);
	}
}