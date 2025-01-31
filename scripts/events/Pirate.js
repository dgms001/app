/*  This is mada by dgms    
 *  This source is made by Funms Team
 *  功能：海盜
 *  @Author dgms 
 */



var Map1=925100000;
var Map2=925100100;
var Map3=925100200;
var Map4=925100201;
var Map5=925100202;
var Map6=925100300;
var Map7=925100301;
var Map8=925100302;
var Map9=925100400;
var Map10=925100500;
var EXIT_MAP=251010404;
function init(attachment) {
    party = attachment;
    

    event.getMap(Map1).reset();
    event.getMap(Map2).reset();
    event.getMap(Map3).reset();
    event.getMap(Map4).reset();
    event.getMap(Map5).reset();
    event.getMap(Map6).reset();
    event.getMap(Map7).reset();
    event.getMap(Map8).reset();
    event.getMap(Map9).reset();
    event.getMap(Map10).reset();
	

	var Map3_mob=event.getMap(Map3);
	Map3_mob.resetReactors();
	for (var i = 0; i < 5; i++) {
        var mob = Map3_mob.makeMob(9300124);
        var mob2 = Map3_mob.makeMob(9300125);
        var mob3 = Map3_mob.makeMob(9300124);
        var mob4 = Map3_mob.makeMob(9300125);
        Map3_mob.spawnMob(mob, 430, 75);
        Map3_mob.spawnMob(mob2, 1600, 75);
        Map3_mob.spawnMob(mob3, 430, 238);
        Map3_mob.spawnMob(mob4, 1600, 238);
    }
	var Map4_mob=event.getMap(Map4);
	for (var i = 0; i < 10; i++) {
        var mob = Map4_mob.makeMob(9300112);
        var mob2 = Map4_mob.makeMob(9300113);
        Map4_mob.spawnMob(mob, 0, 238);
        Map4_mob.spawnMob(mob2, 1700, 238);
    }
	var Map6_mob=event.getMap(Map6);
	Map6_mob.clearMobs();
	Map6_mob.resetReactors();
	for (var i = 0; i < 5; i++) {
        var mob = Map6_mob.makeMob(9300124);
        var mob2 = Map6_mob.makeMob(9300125);
        var mob3 = Map6_mob.makeMob(9300124);
        var mob4 = Map6_mob.makeMob(9300125);
        Map6_mob.spawnMob(mob, 430, 75);
        Map6_mob.spawnMob(mob2, 1600, 75);
        Map6_mob.spawnMob(mob3, 430, 238);
        Map6_mob.spawnMob(mob4, 1600, 238);
    }
	var Map7_mob=event.getMap(Map7);
	for (var i = 0; i < 10; i++) {
        var mob = Map7_mob.makeMob(9300112);
        var mob2 = Map7_mob.makeMob(9300113);
        Map7_mob.spawnMob(mob, 0, 238);
        Map7_mob.spawnMob(mob2, 1700, 238);
    }
    let field = event.getMap(Map10);
	let Boss = field.makeMob(2600326);
	Boss.changeBaseHp(555555555);
    field.spawnMob(Boss, 605, 237);

    members = party.getLocalMembers();
	event.getMap(Map1).showTimer(30 * 60);
	event.getMap(Map2).showTimer(30 * 60);
    event.startTimer("kick", 30 * 60 * 1000);
    endTime = new Date().getTime() + 30 * 60 * 1000;
	event.setVariable("stage2", "0");
	event.setVariable("endTime", endTime);
	
    event.setVariable("members", members);

    for (let i = 0; i < members.length; i++) {
		//members[i].startQuest(1204,2094000);
        members[i].setEvent(event);
		members[i].changeMap(Map2, 0);
        members[i].addPQLog("海盜船組隊任務");
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
		if(members.length==0){
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
	if (destination.getId() < 925100000 || destination.getId() > 925100500) {
		removePlayer(player.getId(), false);
	}else{
		player.showTimer((endTime - new Date().getTime()) / 1000);
        player.showDeathCount();
	}
}

function partyMemberDischarged(party, player) {
    removePlayer(player.getId(), false);
}

function timerExpired(key) {
    switch (key) {
        case "kick":
            removePlayer(party.getLeader(), true);
            break;
    }
}

function deinit() {
    for (let i = 0; i < members.length; i++)
        members[i].setEvent(null);

}