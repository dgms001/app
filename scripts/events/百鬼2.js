//世界boss event by dgms qq:381991414

var eim;
var cal;
var map_2;
var endMap = 101000000;//打完BOSS，傳送的地圖
var startMap = 940513000;//BOSS所在的地圖
var falseEndMap = 101000000;//不通關地圖
let endTime;
let mob7;

let level = 0;
let mustLevel = 1;
let start;
//let endTime;
//let time = 180 * 1000; //廣播後 給玩家幾秒的準備時間

let player;
let players = [];
let map, map2;
let X = 256;
let Y = -626;
let HPS = 101000000;//10兆

function init(attachment) {

	event.setVariable("Count", "0");
	scheduleNew();
	//player = attachment;
	//event.setVariable("players", players);
}

function scheduleNew() {
	event.setVariable("state", "0");
	event.setVariable("stage", "0");
	event.setVariable("INCount", "0");
	map_2 = event.getMap(startMap);
	map_2.clearMobs();

	date = new Date();
	sec = date.getSeconds();
	let week = date.getDay();
	let day = date.getDate();
	let hour = date.getHours();
	let min = date.getMinutes();
	if (hour < 23) {
		event.startTimer("newopen", (((23 - 1) - hour) * 60 + (60 - min)) * 60 * 1000);
	}
}
function newopen() {//開場報名5分鐘
	if (parseInt(event.getVariable("state")) == 0) {
		event.setVariable("state", "1");
		map_2 = event.getMap(startMap);
		map_2.reset();
		map_2.setNoSpawn(true);//關閉原地圖重生怪物
		map_2.clearMobs();//清除
		tTime = (10 * 60);
		map_2.showTimer(tTime);
		endTime = new Date().getTime() + tTime * 1000;
		event.setVariable("endTime", endTime);
		event.startTimer("scheduledTimeout", tTime * 1000);
		event.startTimer("Timedcall", tTime * 1000);
		//event.broadcastWeatherEffectNotice(135,"【百鬼夜行即將開始！開放玩家入場時效5分鐘】",60000);
		event.broadcastNoticeWithoutPrefix("【百鬼夜行即將開始！開放玩家入場時效10分鐘】");
		event.broadcastNoticeWithoutPrefix("【百鬼夜行】開啟了請至1分流進場");
		event.broadcastNoticeWithoutPrefix("【百鬼夜行】無情提示:組隊進場");
	}
}

function scheduledTimeout() {//開始運行內容
	//事件實例計時完畢

	if (parseInt(event.getVariable("state")) == 1) {
		//進行檢測實例人數
		//if(event.getChannel() == 1){
		event.broadcastNoticeWithoutPrefix("【百鬼夜行】召喚怪物，設定時間為15分鐘!");
		event.setVariable("state", "2");//禁止入場
		event.setVariable("stage", "1");
		tTime = (15 * 60);
		map_2.showTimer(tTime);
		endTime = new Date().getTime() + tTime * 1000;
		//設定結束時間
		event.setVariable("endTime", endTime);
		event.startTimer("scheduledTimeout", tTime * 1000);
		event.startTimer("check", 10 * 1000);
		event.getMap(startMap).blowWeatherEffectNotice("【百鬼夜行】開始!！", 102, 5000);
		//}
	} else {
		kickfalse();
	}
}


function check() {
	var MobCount = event.getMap(startMap).getEventMobCount();
	if (MobCount == 0) {
		//SapwnMonster();
		startMobs();
		startMobs();
	}
	event.startTimer("check", 5 * 1000);

}

function SapwnMonster() {
	var stages = parseInt(event.getVariable("stage"));
	switch (stages) {
		case 1:
			mob7 = map_2.makeMob(9101078);//bossid
			//mob7.changeBaseHp(10100000000000);//hpmax
			map_2.spawnMob(mob7, -153, 186);//x y
			bosshp = 45000000000000000;
			bossX = map_2.getPlayerCount();
			bossY = 3;
			bossZ = (bossX * bossY / (bossX + bossY));
			mob7.changeBaseHp(bosshp * bossZ + bosshp);//hpmax
			event.getMap(startMap).blowWeatherEffectNotice("無敵如我!！", 102, 5000);
			event.setVariable("stage", 3);//不想要"stage",2   2改3 就是單boss
			break;

		case 2:
			mob7 = map_2.makeMob(9101078);//bossid
			//mob7.changeBaseHp(10100000000000);//hpmax
			map_2.spawnMob(mob7, -153, 186);//x y
			bosshp = 25000;
			bossX = map_2.getPlayerCount();
			bossY = 3;
			bossZ = (bossX * bossY / (bossX + bossY));
			mob7.changeBaseHp(bosshp * bossZ + bosshp);//hpmax
			event.getMap(startMap).blowWeatherEffectNotice("第二階段!！", 101, 5000);
			event.setVariable("stage", 3);

			break;
		case 3:
			kick();
			break;
	}
}
function kick() {
	map_2 = event.getMap(startMap);
	map_2.clearMobs();
	map_2.reset();
	event.stopTimer("scheduledTimeout");
	event.stopTimer("check");
	event.setVariable("state", "0");
	event.setVariable("stage", "0");
	event.setVariable("INCount", "0");//入場人數歸零
	event.setVariable("Count", map_2.getPlayerCount());//人數
	event.setVariable("players", players);
	map_2.transferPlayers(endMap);
	scheduleNew();
}

function kickfalse() {
	map_2 = event.getMap(startMap);
	map_2.clearMobs();
	map_2.reset();
	event.stopTimer("scheduledTimeout");
	event.stopTimer("check");
	event.setVariable("state", "0");
	event.setVariable("stage", "0");
	event.setVariable("INCount", "0");//入場人數歸零
	event.setVariable("Count", map_2.getPlayerCount());//人數
	event.setVariable("players", players);
	map_2.transferPlayers(falseEndMap);
	scheduleNew();
}

function timerExpired(key) {
	switch (key) {
		case "scheduledTimeout":
			scheduledTimeout();
			break;
		case "newopen":
			newopen();
			break;
		case "kick":
			kick();
			break;
		case "check":
			check();
			break;
		case "Timedcall":
			if (map_2.getEventMobCount() < 80) {
				startMobs();
			} if (map_2.getEventMobCount() < 60) {
				startMobs();
			} if (map_2.getEventMobCount() < 40) {
				startMobs();
			} if (map_2.getEventMobCount() < 20) {
				startMobs();
			}
			startMobs();
			event.startTimer("Timedcall", 10 * 1000);
			break;
		case "Timedcall2":
			startMobs2();
			event.startTimer("Timedcall2", 15 * 1000);
			break;
	}
}


/*-------------------怪物召喚------------------------*/
function makeMob11() {//影響level
	var mobs = mobList[level];
	for (var i = 0; i < mobs.length; i++) {
		var mob = map1.makeMob(mobs[i][0]);
		//mob.setForcedMobStat(10,1);
		mob.changeBaseHp((mobs[i][1] * (level * 0.2 + 1)));
		map1.spawnMob(mob, X + mobs[i][2], Y + mobs[i][3]);


	}
	event.broadcastPlayerNotice(12, "正在屠殺怪物...");
	/*if (level < mobList.length) {
	level++;
	}*/
}

let mobs0 = Array(9400023, 9400021, 9400031, 9400032, 9400033, 9391008, 9400022, 9400580,
	9400023, 9400021, 9400031, 9400032, 9400033, 9391008, 9400022, 9400580,
	9400023, 9400021, 9400031, 9400032, 9400033, 9391008, 9400022, 9400580
);//9410483
let XYS = [
	[-772, -820], [-82, -820], [143, -820], [265, -820], [701, -820],
	[-510, -560], [-350, -560], [200, -820], [300, -460], [775, -340],
	[-772, -220], [-450, -220], [200, -220], [300, -220], [400, -220], [575, -220], [675, -220], [775, -220],
	[-772, 140], [-450, 140], [200, 140], [300, 140], [400, 140], [575, 140], [675, 140], [775, 140]
];
function startMobs() {
	let pos = XYS[Math.floor(Math.random() * XYS.length)]; //pos[0], pos[1]
	let mobsss = Math.floor(Math.random() * mobs0.length);
	var XY = Math.floor(Math.random() * 400);
	//let moblevel=(endTime-start)/60000;//算法为1
	let moblevel = (map_2.getPlayerCount() * 30000 / 60000);//算法为1
	//for (var i = 0; i < (moblevel*1-1)*8; i++) {//时间*10召唤数量
	for (var i = 0; i < 15; i++) {//10*招喚數量
		var mob = map_2.makeMob(mobs0[mobsss]);
		//mob.setForcedMobStat(200,1);
		//mob.changeBaseHp(1010000000*(moblevel-1)*3);//时间*2HP
		mob.changeBaseHp((50000000000 * moblevel));
		map_2.spawnMob(mob, pos[0] + (i * 20), pos[1]);
	}
	event.broadcastPlayerNotice(12, "正在屠殺怪物1...");

	//event.broadcastPlayerNotice(7, ""+moblevel+"");
}

function startMobs2() {
	let pos = XYS[Math.floor(Math.random() * XYS.length)];
	var XY = Math.floor(Math.random() * 400);
	let moblevel = (map_2.getPlayerCount() * 3 / 6);//人數1*3/6
	//for (var i = 0; i < (moblevel*1-1)*8; i++) {//时间*10召唤数量
	for (var i = 0; i < 3; i++) {//10*招喚數量
		var mob = map_2.makeMob(9410483);
		//mob.setForcedMobStat(200,1);
		//mob.changeBaseHp(1010000000*(moblevel-1)*3);//时间*2HP
		mob.changeBaseHp((500000000000 * moblevel));//人數1=0.5HP
		map_2.spawnMob(mob, pos[0] + (i * 10), pos[1]);
	}
	event.broadcastPlayerNotice(12, "正在屠殺怪物2...");

	//event.broadcastPlayerNotice(7, ""+moblevel+"");
}