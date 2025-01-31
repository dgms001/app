let EXIT_MAP = 921160000;

let party;
let members;
let endTime;
let maps = [993059620, 993059621, 993059622, 993059623, 993059624, 993059625, 993059626]
let pqlog = "wxfk"
let stage = 0;
let kills = 0;
let map;

function init(attachment) {
    party = attachment;

    //丟棄任務物品
    party.loseItem(4001008);
    party.changeMap(993059620);
    members = party.getLocalMembers();

    event.getMap(993059620).showTimer(30 * 60);

    for (let i = 0; i < maps.length; i++) {
        event.getMap(maps[i]).clearMobs();
        event.getMap(maps[i]).resetMobsSpawns();
    }

    map = event.getMap(993059623);
    let mob = map.makeMob(9390110);
    mob.changeBaseHp(100000000);
    map.spawnMob(mob, 239, 31);

    stage = 1;
    event.startTimer("kick", 30 * 60 * 1000);
    endTime = new Date().getTime() + 30 * 60 * 1000;

    event.setVariable("members", members);

    for (let i = 0; i < members.length; i++) {
        members[i].setEvent(event);
        members[i].addPQLog(pqlog);
    }
}

function mobDied(mob) {
    switch (stage) {
        case 1:
            kills++;
            if (kills >= 65) {
                kills = 0;
                stage = 0;
                map = event.getMap(993059621);
                map.blowWeather(5120000, "怪物擊殺完成，拿上通行證去下一關吧！");
                for (let dd = 0; dd < members.length; dd++) {
                    members[dd].gainItem(4001008, 1);
                    members[dd].gainItem(2436273, 1);


                    if (members[dd].getLevel() >= 150 && members[dd].getLevel() < 220) {
                        var rate = 0;
                        if (members[dd].getLevel() < 160) rate = 15;
                        else if (members[dd].getLevel() < 170) rate = 40;
                        else if (members[dd].getLevel() < 180) rate = 80;
                        else if (members[dd].getLevel() < 190) rate = 100;
                        else if (members[dd].getLevel() < 200) rate = 200;
                        else if (members[dd].getLevel() < 210) rate = 600;
                        else if (members[dd].getLevel() < 220) {
                            rate = 1200
                            members[dd].gainExp(members[dd].getLevel() * rate);
                            members[dd].gainExp(members[dd].getLevel() * rate);
                            members[dd].gainExp(members[dd].getLevel() * rate);
                        }
                        members[dd].gainExp(members[dd].getLevel() * rate);
                    }

                    members[dd].showSystemMessage("怪物擊殺完成，拿上通行證去下一關吧！");
                }
            } else {
                for (let dd = 0; dd < members.length; dd++) {
                    members[dd].showSystemMessage("擊殺進度:" + kills + "/65");
                }
            }
            break;
        case 2:
            kills++;
            if (kills >= 65) {
                kills = 0;
                stage = 0;
                map = event.getMap(993059622);
                map.blowWeather(5120000, "怪物擊殺完成，拿上通行證去下一關吧！");
                for (let dd = 0; dd < members.length; dd++) {
                    members[dd].gainItem(4001008, 1);
                    members[dd].gainItem(2436273, 2);

                    if (members[dd].getLevel() >= 150 && members[dd].getLevel() < 220) {
                        var rate = 0;
                        if (members[dd].getLevel() < 160) rate = 15;
                        else if (members[dd].getLevel() < 170) rate = 40;
                        else if (members[dd].getLevel() < 180) rate = 80;
                        else if (members[dd].getLevel() < 190) rate = 100;
                        else if (members[dd].getLevel() < 200) rate = 200;
                        else if (members[dd].getLevel() < 210) rate = 600;
                        else if (members[dd].getLevel() < 220) {
                            rate = 1200
                            members[dd].gainExp(members[dd].getLevel() * rate);
                            members[dd].gainExp(members[dd].getLevel() * rate);
                            members[dd].gainExp(members[dd].getLevel() * rate);
                        }
                        members[dd].gainExp(members[dd].getLevel() * rate);
                    }
                    members[dd].showSystemMessage("怪物擊殺完成，拿上通行證去下一關吧！");
                }
            } else {
                for (let dd = 0; dd < members.length; dd++) {
                    members[dd].showSystemMessage("擊殺進度:" + kills + "/65");
                }
            }
            break;
        case 3:
            kills++;
            if (kills >= 1) {
                kills = 0;
                stage = 0;
                map = event.getMap(993059623);
                map.blowWeather(5120000, "怪物擊殺完成，拿上通行證去下一關吧！");
                for (let dd = 0; dd < members.length; dd++) {
                    members[dd].gainItem(4001008, 1);
                    members[dd].gainItem(2436273, 2);

                    if (members[dd].getLevel() >= 150 && members[dd].getLevel() < 220) {
                        var rate = 0;
                        if (members[dd].getLevel() < 160) rate = 15;
                        else if (members[dd].getLevel() < 170) rate = 40;
                        else if (members[dd].getLevel() < 180) rate = 80;
                        else if (members[dd].getLevel() < 190) rate = 100;
                        else if (members[dd].getLevel() < 200) rate = 200;
                        else if (members[dd].getLevel() < 210) rate = 600;
                        else if (members[dd].getLevel() < 220) {
                            rate = 1200
                            members[dd].gainExp(members[dd].getLevel() * rate);
                            members[dd].gainExp(members[dd].getLevel() * rate);
                            members[dd].gainExp(members[dd].getLevel() * rate);
                        }
                        members[dd].gainExp(members[dd].getLevel() * rate);
                    }
                    members[dd].showSystemMessage("怪物擊殺完成，拿上通行證去下一關吧！");
                }
            } else {
                for (let dd = 0; dd < members.length; dd++) {
                    members[dd].showSystemMessage("擊殺進度:" + kills + "/1");
                }
            }
            break;
        case 4:
            kills++;
            if (kills >= 65) {
                kills = 0;
                stage = 0;
                map = event.getMap(993059624);
                map.blowWeather(5120000, "怪物擊殺完成，拿上通行證去下一關吧！");
                for (let dd = 0; dd < members.length; dd++) {
                    members[dd].gainItem(4001008, 1);
                    members[dd].gainItem(2436273, 1);

                    if (members[dd].getLevel() >= 150 && members[dd].getLevel() < 220) {
                        var rate = 0;
                        if (members[dd].getLevel() < 160) rate = 15;
                        else if (members[dd].getLevel() < 170) rate = 40;
                        else if (members[dd].getLevel() < 180) rate = 80;
                        else if (members[dd].getLevel() < 190) rate = 100;
                        else if (members[dd].getLevel() < 200) rate = 200;
                        else if (members[dd].getLevel() < 210) rate = 600;
                        else if (members[dd].getLevel() < 220) {
                            rate = 1200
                            members[dd].gainExp(members[dd].getLevel() * rate);
                            members[dd].gainExp(members[dd].getLevel() * rate);
                            members[dd].gainExp(members[dd].getLevel() * rate);
                        }
                        members[dd].gainExp(members[dd].getLevel() * rate);
                    }
                    members[dd].showSystemMessage("怪物擊殺完成，拿上通行證去下一關吧！");
                }
            } else {

                for (let dd = 0; dd < members.length; dd++) {
                    members[dd].showSystemMessage("擊殺進度:" + kills + "/65");
                }
            }
            break;
        case 5:
            kills++;
            if (kills >= 2) {
                kills = 0;
                stage = 0;
                map = event.getMap(993059622);
                map.blowWeather(5120000, "怪物擊殺完成，拿上通行證去下一關吧！");
                for (let dd = 0; dd < members.length; dd++) {
                    members[dd].gainItem(4001008, 1);
                    members[dd].gainItem(2436273, 1);

                    if (members[dd].getLevel() >= 150 && members[dd].getLevel() < 220) {
                        var rate = 0;
                        if (members[dd].getLevel() < 160) rate = 15;
                        else if (members[dd].getLevel() < 170) rate = 40;
                        else if (members[dd].getLevel() < 180) rate = 80;
                        else if (members[dd].getLevel() < 190) rate = 100;
                        else if (members[dd].getLevel() < 200) rate = 200;
                        else if (members[dd].getLevel() < 210) rate = 600;
                        else if (members[dd].getLevel() < 220) {
                            rate = 1200
                            members[dd].gainExp(members[dd].getLevel() * rate);
                            members[dd].gainExp(members[dd].getLevel() * rate);
                            members[dd].gainExp(members[dd].getLevel() * rate);
                        }
                        members[dd].gainExp(members[dd].getLevel() * rate);
                    }
                    members[dd].showSystemMessage("怪物擊殺完成，拿上通行證去通關吧！");
                }
            } else {
                for (let dd = 0; dd < members.length; dd++) {
                    members[dd].showSystemMessage("擊殺進度:" + kills + "/2");
                }
            }
            break;
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
    if (maps.indexOf(destination.getId()) == -1) {
        //player died and respawned or clicked Nella to leave PQ
        //changeMap is false so player doesn't get re-warped to exit map
        removePlayer(player.getId(), false);
        player.loseItem(4001008);
    } else {
        switch (destination.getId()) {
            case 993059621:
                stage = 1;
                break;
            case 993059622:
                stage = 2;
                break;
            case 993059623:
                stage = 3;
                break;
            case 993059624:
                stage = 4;
                break;
            case 993059625:
                let map1 = event.getMap(993059625);
                map1.clearMobs();
                //map1.resetMobsSpawns();
                let mob1 = map1.makeMob(9390110);
                mob1.changeBaseHp(100000000);
                map1.spawnMob(mob1, 239, 31);
                mob1 = map1.makeMob(9390110);
                mob1.changeBaseHp(100000000);
                map1.spawnMob(mob1, 239, 31);
                stage = 5;
                break;
            case 993059626:
                stage = 6;
                break;
        }
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
    }
}

function deinit() {
    for (let i = 0; i < members.length; i++)
        members[i].setEvent(null);

}