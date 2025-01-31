/**
 *
 *
 */

let mapId;
let player, map;
let mFoothold = [];

function init(attachment) {
    player = attachment;
    let stage = parseInt(player.getQuestEntryData(34502));
    mapId = 993001000 + stage * 10;
    map = event.makeMap(mapId);
    player.changeMap(map);
    player.setEvent(event);
    if (mapId == 993001090) {
        //mFoothold[0] = new MoveFoothold("updown0", sh.newPoint(-4175, -688), sh.newPoint(-4175, -688), 0, 5, -1);
        //mFoothold[1] = new MoveFoothold("updown1", sh.newPoint(-305, -531), sh.newPoint(-305, -220), 0, 5, 1);
        event.startTimer("move_foothold0", 100);
        event.startTimer("move_foothold1", 100);
    } else if (mapId == 993001320) {
        //mFoothold[0] = new MoveFoothold("updown1", sh.newPoint(-3084, 166), sh.newPoint(-3084, -304), 0, 6, -1);
        //mFoothold[1] = new MoveFoothold("updown2", sh.newPoint(-2427, -304), sh.newPoint(-2427, 166), 0, 5, 1);
        //mFoothold[2] = new MoveFoothold("updown3", sh.newPoint(-2165, 166), sh.newPoint(-2165, -304), 0, 5, -1);
        event.startTimer("move_foothold2", 100);
        event.startTimer("move_foothold3", 100);
        event.startTimer("move_foothold4", 100);
    } else if (mapId == 993001360) {
        //mFoothold[0] = new MoveFoothold("updown1", sh.newPoint(-3156, 227), sh.newPoint(-3156, -480), 0, 7, -1);
        //mFoothold[1] = new MoveFoothold("updown2", sh.newPoint(-2156, 227), sh.newPoint(-2156, -480), 0, 7, -1);
        event.startTimer("move_foothold5", 100);
        event.startTimer("move_foothold6", 100);
    }
}

function playerDisconnected(player) {
    event.destroyEvent();
}

function playerChangedMap(player, destination) {
    if (destination.getId() != mapId) {
        event.destroyEvent();
    }
}

function timerExpired(key) {
    switch (key) {
        case "summon_obtacle":
            event.startTimer("summon_obtacle", 3000);
            map.createObtacleAtom(0, 10, 54, 54, -1000, 50);
            break;
        case "move_foothold0":
            event.startTimer("move_foothold0", 6000);
            map.createObtacleAtom(0, 10, 54, 54, -3800, 2400);
            break;
        case "move_foothold1":
            event.startTimer("move_foothold1", 1700);
            let mf1 = mFoothold[1];
            //mf1.move();
            //map.setFootHoldMove(mf1.sPos, mf1.ePos, mf1.nPos, mf1.getXPerPixel(), mf1.getYPerPixel(), mf1.name);
            break;
        case "move_foothold2":
            event.startTimer("move_foothold2", 1700);
            let mf2 = mFoothold[0];
            //mf2.move();
            //map.setFootHoldMove(mf2.sPos, mf2.ePos, mf2.nPos, mf2.getXPerPixel(), mf2.getYPerPixel(), mf2.name);
            break;
        case "move_foothold3":
            event.startTimer("move_foothold3", 1700);
            let mf3 = mFoothold[1];
            //mf3.move();
            //map.setFootHoldMove(mf3.sPos, mf3.ePos, mf3.nPos, mf3.getXPerPixel(), mf3.getYPerPixel(), mf3.name);
            break;
        case "move_foothold4":
            event.startTimer("move_foothold4", 1700);
            let mf4 = mFoothold[2];
            //mf4.move();
            //map.setFootHoldMove(mf4.sPos, mf4.ePos, mf4.nPos, mf4.getXPerPixel(), mf4.getYPerPixel(), mf4.name);
            break;
        case "move_foothold5":
            event.startTimer("move_foothold5", 1700);
            let mf5 = mFoothold[0];
            // mf5.move();
            //map.setFootHoldMove(mf5.sPos, mf5.ePos, mf5.nPos, mf5.getXPerPixel(), mf5.getYPerPixel(), mf5.name);
            break;
        case "move_foothold6":
            event.startTimer("move_foothold6", 1700);
            let mf6 = mFoothold[1];
            //mf6.move();
            //map.setFootHoldMove(mf6.sPos, mf6.ePos, mf6.nPos, mf6.getXPerPixel(), mf6.getYPerPixel(), mf6.name);
            break;
    }
}

function deinit() {
    player.setEvent(null);
    event.destroyMap(map);
}

function MoveFoothold(name, sPos, ePos, xPerPixel, yPerPixel, updown) {
    this.updown = updown;
    this.name = name;
    this.sPos = sPos;
    this.ePos = ePos;
    this.nPos = sPos;
    this.xPerPixel = xPerPixel;
    this.yPerPixel = yPerPixel;
    this.getName = function () {
        return this.name;
    };
    this.move = function () {
        this.sPos = this.ePos;
        this.ePos = this.nPos;
        this.nPos = this.sPos;
        this.updown *= -1;
    };
    this.getXPerPixel = function () {
        return this.xPerPixel * this.updown;
    };
    this.getYPerPixel = function () {
        return this.yPerPixel * this.updown;
    };
}