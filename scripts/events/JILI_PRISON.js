
let EXIT_MAP = 921160000;

let party;
let members;
let endTime;
let maps = [921160100,921160200,921160300,921160310,921160320,921160330,921160340,921160350,921160400,921160500,921160600,921160700,921160701]
let pqlog = "JILI_PRISON"

function init(attachment) {
    party = attachment;
	
	//丟棄任務物品
    party.loseItem(4001008);
    party.loseItem(4001007);
    party.changeMap(921160100);
    members = party.getLocalMembers();

    event.getMap(921160100).showTimer(30 * 60);
	
	for(let i = 0;i<maps.length;i++){
		event.getMap(maps[i]).clearMobs();
		event.getMap(maps[i]).resetMobsSpawns();
	}
	
    let map = event.getMap(921160700);
	let mob = map.makeMob(9305003);
	mob.changeBaseHp(10000000);
    map.spawnMob(mob, -1237, -182);
	map.spawnTempNpc(9020006,-1880,-182);
	
    event.startTimer("kick", 30 * 60 * 1000);
    endTime = new Date().getTime() + 30 * 60 * 1000;

    event.setVariable("members", members);

    for (let i = 0; i < members.length; i++) {
        members[i].setEvent(event);
        members[i].addPQLog(pqlog);
    }
}

function mobDied(mob) {
	if(mob.getDataId() == 9305003){
		//BOSS死了
		
		for (let dd = 0; dd < members.length; dd++) {
			members[dd].showSystemMessage("獲得通行證 x 1");
			members[dd].gainItem(4001008,1);
		}
		mob.dropItem(4001008);
		mob.dropItem(4001008);
		mob.dropItem(4001008);
		mob.dropItem(4001008);
		mob.dropItem(4001008);
		mob.dropItem(4001008);
		mob.dropItem(4001008);
		mob.dropItem(4001008);
		mob.dropItem(4001008);
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
    if (maps.indexOf(destination.getId()) == -1)
        //player died and respawned or clicked Nella to leave PQ
        //changeMap is false so player doesn't get re-warped to exit map
        removePlayer(player.getId(), false);
    else
        player.showTimer((endTime - new Date().getTime()) / 1000);
}

function partyMemberDischarged(party, player) {
    removePlayer(player.getId(), true);
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