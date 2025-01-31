let party, maps,rewardItem,rewardNumber;
 

let BOSS_LOG = "跳跳入場";

let members;
let endTime;
let DEATH_COUNT = 3;
let partyCount;

function init(attachment) {
        let timeMin = 60;
		[party,maps,rewardItem,rewardNumber] = attachment;
		partyCount = party.length;
        party.changeMap(maps[0], 0);
        members = party.getLocalMembers();

        let map = event.getMap(maps[0]);
        map.showTimer(timeMin * 60);
        map.clearMobs();
        map.resetMobsSpawns();
        map.setNoSpawn(true);
        map.blowWeather(5120043, "快用你800碼的速度奪得第一!!!!");
        event.startTimer("kick", timeMin * 60 * 1000);
        endTime = new Date().getTime() + timeMin * 60 * 1000;
		event.setVariable("rewardItem", rewardItem);
		event.setVariable("rewardNumber", rewardNumber);
		event.setVariable("partyCount", partyCount);
        event.setVariable("members", members);
        for (let i = 0; i < members.length; i++) {
				members[i].loseItem(rewardItem,parseInt(rewardNumber/members.length));
                members[i].setEvent(event);
                members[i].addPQLog(BOSS_LOG);
                members[i].setDeathCount(DEATH_COUNT);
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
		var flag = false;
		for(var i =0;i<maps.length;i++){
			if(destination.getId()==maps[i]){
				flag = true;
			}		
		}
		if(flag){
			  player.showTimer((endTime - new Date().getTime()) / 1000);
              player.showDeathCount();
		}else{
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
        }
}

function deinit() {
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(null);
                members[i].setDeathCount(-1);
        }
}