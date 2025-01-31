

let EXIT_MAP =103000000;
let PHASE_1 = 920020000; 

let DEATH_COUNT = 2;

let BOSS_LOG = "艾利杰2";
let party;
let members;
let endTime;
var map;
let map_1;
var killN = 0;
 
function init(attachment) {
        party = attachment;
		party.changeMap(PHASE_1, 0);
        members = party.getLocalMembers();
	    map_1 = event.getMap(PHASE_1);

        map_1.showTimer(5 * 60);
        map_1.clearMobs();
		endTime = new Date().getTime() + 5 * 60 * 1000;
		event.startTimer("kick", 5 * 60 * 1000);
		event.startTimer("SapwnMonster", 5 * 1000);

        event.setVariable("members", members);
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(event);
                members[i].addPQLog(BOSS_LOG);
                members[i].setDeathCount(DEATH_COUNT);
        }
}


function SapwnMonster() {
	for (var i = 0; i < 10; i++) {
		var mob1 = map_1.makeMob(9600037);//怪物ID,怪物1
		mob1.changeBaseHp(50000000);//5000W//血量
		map_1.spawnMob(mob1,200, 82);//召喚怪物
		
		var mob2 = map_1.makeMob(9600038);//怪物ID,怪物2
		mob2.changeBaseHp(50000000);//5000W//血量
		map_1.spawnMob(mob2,200, 82);//召喚怪物
		
		var mob3 = map_1.makeMob(9600039);//怪物ID,怪物3
		mob3.changeBaseHp(50000000);//5000W//血量
		map_1.spawnMob(mob3,200, 82);//召喚怪物
		
		var mob4 = map_1.makeMob(9600040);//怪物ID,怪物4
		mob4.changeBaseHp(50000000);//5000W//血量
		map_1.spawnMob(mob4,200, 82);//召喚怪物
	}
}


 
function mobDied(mob) { 
		killN++;
		if(killN >= 40){
			killN = 0;
			event.startTimer("SapwnMonster", 3 * 1000);
		}
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
                //dissociate event before changing map so playerChangedMap is not
                //called and this method is not called again by the player
                members[i].setEvent(null);
                members[i].changeMap(EXIT_MAP);
        }
        event.destroyEvent();
}

function timerExpired(key) {
	switch (key) {
		case "SapwnMonster":
			SapwnMonster();
			break;
			
        case "kick":
            removePlayer(party.getLeader(), true);
            break;
	}
}

function deinit() {
        event.getMap(PHASE_1).endFieldEvent();
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(null);
                members[i].setDeathCount(-1);
        }
}