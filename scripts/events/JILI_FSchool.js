
let EXIT_MAP = 744000000;

let party;
let members;
let endTime;
let maps = [
	744000002,
744000003,
744000004,
744000005,
744000006,
744000007,
744000008,
744000009,
744000010,
744000011,
744000012,
744000013,
744000014,
744000015,
744000016,
//744000020,
744000021,
744000022,
744000023,
744000024,
744000025,
744000026,
744000027,
744000028,
744000029,
744000030,
744000031,
744000032,
744000033,
744000034,
744000035,
744000036,
744000037,
744000038,
744000039,
744000040,
744000041
]
let pqlog = "FSchool"
let killed = 0;
let stage = 1;
let nowMap;
let index;

let rewards=Array(
	// 物品ID 最小数量 最大数量
	Array(4310105,5,10)
)

function init(attachment) {
    party = attachment;
	
	//丢弃任务物品
    party.loseItem(4001008);
    party.changeMap(744000001);
    members = party.getLocalMembers();

    event.getMap(744000001).showTimer(30 * 60);
	
	for(let i = 0;i<maps.length;i++){
		event.getMap(maps[i]).clearMobs();
		event.getMap(maps[i]).resetMobsSpawns();
	}
	//1
    var map = event.getMap(744000001);
	nowMap = map;
	var mob = map.makeMob(9410183);
	mob.changeBaseHp(1500000000);
    map.spawnMob(mob, 50, 240);
	
	//2
    map = event.getMap(744000002);
	mob = map.makeMob(9410182);
	mob.changeBaseHp(2000000000);
    map.spawnMob(mob, 50, 240);
	
	//3
    map = event.getMap(744000003);
	mob = map.makeMob(9410172);
	mob.changeBaseHp(2500000000);
    map.spawnMob(mob, 50, 240);
	
	//4
    map = event.getMap(744000004);
	mob = map.makeMob(9410192);
	mob.changeBaseHp(3000000000);
    map.spawnMob(mob, 50, 240);

	//6
	map = event.getMap(744000005);
	mob = map.makeMob(9410189);
	mob.changeBaseHp(3500000000);
    map.spawnMob(mob, 50, 240);
	
	//7
    map = event.getMap(744000006);
	mob = map.makeMob(9410147);
	mob.changeBaseHp(4000000000);
    map.spawnMob(mob, 50, 240);
	
	//8
    map = event.getMap(744000007);
	mob = map.makeMob(9410171);
	mob.changeBaseHp(4500000000);
    map.spawnMob(mob, 50, 240);

	//9
	map = event.getMap(744000008);
	mob = map.makeMob(9410181);
	mob.changeBaseHp(5000000000);
    map.spawnMob(mob, 50, 240);

	//10
	map = event.getMap(744000009);
	mob = map.makeMob(9410177);
	mob.changeBaseHp(5500000000);
    map.spawnMob(mob, 50, 240);
	
	//11
    map = event.getMap(744000010);
	mob = map.makeMob(9410194);
	mob.changeBaseHp(7500000000);
    map.spawnMob(mob, 290, 240);

    /*for(var i = 0; i <= 9; i++){
		mob = map.makeMob(9410190);
		mob.changeBaseHp(10000000);
		map.spawnMob(mob, 50, 240);
    }*/
	
	//12
    map = event.getMap(744000011);
	mob = map.makeMob(9410189);
	mob.changeBaseHp(8000000000);
    map.spawnMob(mob, 290, 240);
	
	//13
    map = event.getMap(744000012);
	mob = map.makeMob(9410194);
	mob.changeBaseHp(8500000000);
    map.spawnMob(mob, 50, 240);
	
	//14
    map = event.getMap(744000013);
	mob = map.makeMob(9410184);
	mob.changeBaseHp(9000000000);
    map.spawnMob(mob, 50, 240);
	
	//15
    map = event.getMap(744000014);
	mob = map.makeMob(9303081);//武公
	mob.changeBaseHp(9500000000);
    map.spawnMob(mob, 50, 240);
	
	//16
    map = event.getMap(744000015);
	mob = map.makeMob(9410184);
	mob.changeBaseHp(10300000000);
    map.spawnMob(mob, 50, 240);

	//17
    map = event.getMap(744000016);
	mob = map.makeMob(9410198);
	mob.changeBaseHp(15000000000);
    map.spawnMob(mob, 50, 240);

	//18


	//19
    map = event.getMap(744000021);
	mob = map.makeMob(9410199);
	mob.changeBaseHp(20000000000);
    map.spawnMob(mob, 50, 240);
	
	//20
    map = event.getMap(744000022);
	mob = map.makeMob(9410200);
	mob.changeBaseHp(25000000000);
    map.spawnMob(mob, 50, 240);

	//21
    map = event.getMap(744000023);
	mob = map.makeMob(9410201);
	mob.changeBaseHp(30000000000);
    map.spawnMob(mob, 50, 240);

	//22
    map = event.getMap(744000024);
	mob = map.makeMob(9410202);
	mob.changeBaseHp(35000000000);
    map.spawnMob(mob, 50, 240);

	//23
    map = event.getMap(744000025);
	mob = map.makeMob(9410203);
	mob.changeBaseHp(40000000000);
    map.spawnMob(mob, 50, 240);

	//24
    map = event.getMap(744000026);
	mob = map.makeMob(9410204);
	mob.changeBaseHp(45000000000);
    map.spawnMob(mob, 50, 240);
	
	//25
    map = event.getMap(744000027);
	mob = map.makeMob(9410205);
	mob.changeBaseHp(50000000000);
    map.spawnMob(mob, 50, 240);

	//26
    map = event.getMap(744000028);
	mob = map.makeMob(9410206);
	mob.changeBaseHp(55000000000);
    map.spawnMob(mob, 50, 240);

	//27
	map = event.getMap(744000029);
	mob = map.makeMob(9410207);
	mob.changeBaseHp(60000000000);
	map.spawnMob(mob, 50, 240);

	//28
	map = event.getMap(744000030);
	mob = map.makeMob(9410211);
	mob.changeBaseHp(65000000000);
	map.spawnMob(mob, 50, 240);

	//29
	map = event.getMap(744000031);
	mob = map.makeMob(9410208);
	mob.changeBaseHp(70000000000);
	map.spawnMob(mob, 50, 240);

	//30
	map = event.getMap(744000032);
	mob = map.makeMob(9410209);
	mob.changeBaseHp(75000000000);
	map.spawnMob(mob, 50, 240);

	//31
	map = event.getMap(744000033);
	mob = map.makeMob(9410210);
	mob.changeBaseHp(80000000000);
	map.spawnMob(mob, 50, 240);

	//32
	map = event.getMap(744000034);
	mob = map.makeMob(9410212);
	mob.changeBaseHp(85000000000);
	map.spawnMob(mob, 50, 240);

	//33
	map = event.getMap(744000035);
	mob = map.makeMob(9410213);
	mob.changeBaseHp(90000000000);
	map.spawnMob(mob, 50, 240);

	//34
	map = event.getMap(744000036);
	mob = map.makeMob(9410214);
	mob.changeBaseHp(95000000000);
	map.spawnMob(mob, 50, 240);

	//35
	map = event.getMap(744000037);
	mob = map.makeMob(9410215);
	mob.changeBaseHp(103000000000);
	map.spawnMob(mob, 50, 240);

	//36
	map = event.getMap(744000038);
	mob = map.makeMob(9410216);
	mob.changeBaseHp(150000000000);
	map.spawnMob(mob, 50, 240);

	//37
	map = event.getMap(744000039);
	mob = map.makeMob(9410218);
	mob.changeBaseHp(200000000000);
	map.spawnMob(mob, 50, 240);

	//38
	map = event.getMap(744000040);
	mob = map.makeMob(9410219);
	mob.changeBaseHp(250000000000);
	map.spawnMob(mob, 50, 240);

	//39
	map = event.getMap(744000041);
	mob = map.makeMob(4310015);
	mob.changeBaseHp(300000000000);
	map.spawnMob(mob, 50, 240);





    event.startTimer("kick", 30 * 60 * 1000);
    endTime = new Date().getTime() + 30 * 60 * 1000;

    event.setVariable("members", members);

    for (let i = 0; i < members.length; i++) {
        members[i].setEvent(event);
        members[i].addPQLog(pqlog);
    }
	
	//召唤怪物
}

function mobDied(mob) {
	killed ++;
	var needKill = 0;
	switch (stage){
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		case 12:
		case 13:
		case 14:	
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
		case 20:
		case 21:
		case 22:
		case 23:	
		case 24:
		case 25:
		case 26:
		case 27:
		case 28:
		case 29:
		case 30:
		case 31:
		case 32:
		case 33:	
		case 34:
		case 35:
		case 36:
		case 37:
		case 38:





			/*
			 */
	}
	index = maps.indexOf(nowMap.getId());
	if(killed >= needKill){
		if(stage == maps.length){
			//最后一关
			
			//奖
			for (let dd = 0; dd < members.length; dd++) {
				members[dd].scriptProgressMessage("恭喜你制霸高校！三秒后自动退出副本！");
				event.broadcastNoticeWithoutPrefix("[枫之高校]:玩家 "+members[dd].getName()+" 成功制霸枫之高校！");
				members[dd].showSystemMessage("----------------获得通关奖励------------------");
				for(let mm = 0;mm<rewards.length;mm++){
					let ran = Math.floor(Math.random() * (rewards[mm][2] - rewards[mm][1] + 1) + rewards[mm][1]);
					if(ran > 0){
						members[dd].gainItem(rewards[mm][0],ran);
					}
				}
			}
			event.startTimer("end", 5 * 1000);
		}else{
			map1 = nowMap;
			killed = 0;
			stage++;
			event.startTimer("next", 5 * 1000);
			for (let dd = 0; dd < members.length; dd++) {
				members[dd].scriptProgressMessage("恭喜你挑战成功！三秒后进入下一关！");
				members[dd].scriptProgressMessage("恭喜你挑战成功！三秒后进入下一关！");
				members[dd].scriptProgressMessage("恭喜你挑战成功！三秒后进入下一关！");
				members[dd].showSystemMessage("【枫之高校】恭喜你挑战成功！三秒后进入下一关！");
				Equip = members[0].getInventorySlot(-1, -11);
                Equip.setLimitBreak(Equip.getLimitBreak() + 10000);
                members[0].updateItem(-11, Equip);
			}
			//party.changeMap(maps[index+1]);
		}
	}
}
function removePlayer(playerId, changeMap) {
    if (party.getLeader() == playerId) {
        //boot the entire party (changeMap parameter only applies to member
        //whose player ID matches playerId parameter, so those who are not the
        //leader are always booted)
        for (let i = 0; i < members.length; i++) {
            //dissociate event before changing map so playerChangedMap is not
            //called and this method is not called again by the player
            members[i].setEvent(null);
            if (changeMap || members[i].getId() != playerId)
                members[i].changeMap(EXIT_MAP);
        }
        event.destroyEvent();
    } else {
        for (let i = 0; i < members.length; i++) {
            if (members[i].getId() == playerId) {
                //dissociate event before changing map so playerChangedMap is
                //not called and this method is not called again by the player
                members[i].setEvent(null);
                if (changeMap)
                    members[i].changeMap(EXIT_MAP);
                //collapse the members array so we don't accidentally warp
                //this member again if the leader leaves later.
                members.splice(i, 1);
                break;
            }
        }
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
    if (maps.indexOf(destination.getId()) == -1){
        //player died and respawned or clicked Nella to leave PQ
        //changeMap is false so player doesn't get re-warped to exit map
        removePlayer(player.getId(), false);
		player.loseItem(4001008);
		player.loseItem(4001007);
	}else{
        player.showTimer((endTime - new Date().getTime()) / 1000);
	}
	
}

function partyMemberDischarged(party, player) {
    removePlayer(player.getId(), true);
}

function timerExpired(key) {
    switch (key) {
        case "kick":
            removePlayer(party.getLeader(), true);
            break;
		case "next":
			party.changeMap(maps[stage-1]);
			break;
		case "end":
			party.changeMap(EXIT_MAP);
			break;
    }
}

function deinit() {
    for (let i = 0; i < members.length; i++)
        members[i].setEvent(null);

}