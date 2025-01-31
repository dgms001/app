

let EXIT_MAP =103000000;
let PHASE_1 = 706041715; 

let DEATH_COUNT = 10;

let BOSS_LOG = "臥虎藏龍";
let party;
let members;
let endTime;
var map;
let map_1;
 
function init(attachment) {
        party = attachment;
		party.changeMap(PHASE_1, 0);
        members = party.getLocalMembers();
       
	    map_1 = event.getMap(PHASE_1);  
        map_1.showTimer(30 * 60);
        map_1.clearMobs(); 
	    spawnall(); 
		endTime = new Date().getTime() + 30 * 60 * 1000;
		event.setVariable("endTime", endTime);
		event.setVariable("count","0")
		event.startTimer("kick", 30 * 60 * 1000);
        event.setVariable("members", members);
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(event);
                members[i].addPQLog(BOSS_LOG);
                members[i].setDeathCount(DEATH_COUNT);
        }
}

function spawnall(){
	for (var i = 9601013; i <= 9601018; i++) {
		var mob = map_1.makeMob(i);
		mob.changeBaseHp(5000000000000);//設置改變怪物的HP量 9000000000000
		//mob.changeBaseHp(2000000);
		map_1.spawnMob(mob, 162, 95);
    }
	
}

 
 
 
function mobDied(mob) {
	
	for (var i = 9601013; i <= 9601018; i++) {
		if(mob.getDataId()==i){
			event.setVariable("count",parseInt(event.getVariable("count"))+1)
		}
	}
	if(parseInt(event.getVariable("count"))==6){
		for (let i = 0; i < members.length; i++) {
			members[i].runScript("new_地獄副本獎勵");
        }
	}
}

function removePlayer(playerId, changeMap) {
        for (let i = 0; i < members.length; i++) {
                if (members[i].getId() == playerId) {
						if(members.length==1){
							//java.lang.System.out.println("66new_臥虎藏龍出場");
							members[i].runScript("new_臥虎藏龍出場");
						}
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
        switch (destination.getId()) {
                case PHASE_1:
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
			if(i ==0){
				//java.lang.System.out.println("120new_臥虎藏龍出場");
				members[0].runScript("new_臥虎藏龍出場");
			}
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
	 
	}
}

function deinit() {
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(null);
                members[i].setDeathCount(-1);
        }
}