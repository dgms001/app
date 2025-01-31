let EXIT_MAP = 101000000;
let PHASE_1 = 865000300;

let DEATH_COUNT = 3;

let BOSS_LOG = "致命海盜船";
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
    map_1.showTimer(20 * 60);
    map_1.clearMobs();
    event.setVariable("stage", "0")
    endTime = new Date().getTime() + 20 * 60 * 1000;
    event.startTimer("kick", 20 * 60 * 1000);
    event.startTimer("navigation", 5 * 1000);
    event.startTimer("UUI", 1 * 1000);

    event.startTimer("check", 10 * 1000);

    event.setVariable("members", members);
    for (let i = 0; i < members.length; i++) {
        if (members[i].getEventValue("致命海盜船") >= 3) {
            members[i].showSystemMessage("當日次數已用完");
            members[i].changeMap(101000000);
        }

        members[i].addEventValue(BOSS_LOG, 1, 1);
        members[i].setDeathCount(DEATH_COUNT);
        members[i].setEvent(event);
    }
}

function check() {
    var stage = parseInt(event.getVariable("stage"));
    var check = event.getVariable("check");
    ////////java.lang.System.out.println(stage  +"------"+ check +"----怪物數量："+map_1.getEventMobCount());
    if (stage < 18) {
        if (stage == check && map_1.getEventMobCount() == 0) {
            //說明10秒都沒有動過狀態，並且地圖剩餘怪物為0 是卡死了龍王副本.
            event.setVariable("stage", stage + 1);
            event.startTimer("SapwnMonster", 5000);
        } else {
            event.setVariable("check", stage);
        }
        event.startTimer("check", 10 * 1000);
    } else {
        map_1.blowWeatherEffectNotice("擊敗了海上龍王,請找【萊文'達尼爾拉】領取獎勵。", 134, 5000);
    }
}

function navigation() {
    map_1.blowWeatherEffectNotice("雖然暴風雨好像馬上就要來了,但請相信舵手我的能力吧.", 133, 5000);
    event.startTimer("SapwnMonster", 5000);
}

function stageClear(stage) {
    event.setVariable("stage" + stage, "clear");
}
function sendMsg(msg) {
    for (let i = 0; i < members.length; i++) {
        members[i].scriptProgressMessage(msg);
        members[i].showSystemMessage(msg);
    }
}
function SapwnMonster() {

    var stage = parseInt(event.getVariable("stage"));
    //////java.lang.System.out.println("第---"+stage+"---波怪物");
    switch (stage) {
        case 0:
            if (!"clear".equals(event.getVariable("stage" + stage))) {
                for (var i = 0; i < 15; i++) {
                    var mob = map_1.makeMob(8220022);
                    ////mob.setForcedMobStat(315, 1);
                    //mob.setForcedMobStat(315, 199999, 199999, 999, 999, 999, 999);
                    mob.changeBaseHp(300000000000); //30E
                    map_1.spawnMob(mob, 220 - i * 30, 199)
                }
                map_1.blowWeatherEffectNotice("我相信勇士你. 請擊退海螺姑娘吧", 133, 5000);
                stageClear(stage);
                sendMsg("當前副本時間:" + (20 * 60 * 1000 - (endTime - new Date().getTime())) / 1000 + "秒, 1200後自動傳出")
            }
            break;

        case 1:
            if (!"clear".equals(event.getVariable("stage" + stage))) {
                for (var i = 0; i < 15; i++) {
                    var mob = map_1.makeMob(9100044);
                    //mob.setForcedMobStat(315, 199999, 199999, 999, 999, 999, 999);
                    mob.changeBaseHp(300000000000); //30E
                    map_1.spawnMob(mob, 240 - i * 35, 199)
                }
                map_1.blowWeatherEffectNotice("額啊啊. 船長!!大事不好了, 海盜團員正在攻擊我們的船.", 133, 5000);
                stageClear(stage);
                sendMsg("當前副本時間:" + (20 * 60 * 1000 - (endTime - new Date().getTime())) / 1000 + "秒, 1200後自動傳出")
            }
            break;

        case 2:
            if (!"clear".equals(event.getVariable("stage" + stage))) {
                for (var i = 0; i < 15; i++) {
                    var mob = map_1.makeMob(9300806);
                    //mob.setForcedMobStat(315, 199999, 199999, 999, 999, 999, 999);
                    mob.changeBaseHp(500); //30E
                    map_1.spawnMob(mob, 220 - i * 35, 199)
                }
                map_1.blowWeatherEffectNotice("我相信勇士你. 請擊退海螺姑娘吧", 133, 5000);
                stageClear(stage);
                sendMsg("當前副本時間:" + (20 * 60 * 1000 - (endTime - new Date().getTime())) / 1000 + "秒, 1200後自動傳出")
            }
            break;
        case 3:
            if (!"clear".equals(event.getVariable("stage" + stage))) {
                var mob = map_1.makeMob(9390802); //暗礁9390826
                //mob.setForcedMobStat(315, 199999, 199999, 999, 999, 999, 999);
                mob.changeBaseHp(300000000000); //1000E
                map_1.spawnMob(mob, 745, 455);
                map_1.blowWeatherEffectNotice("在我們的航海圖上沒有暗礁呢······它是什麼時候出現的。", 133, 5000);
                stageClear(stage);
                sendMsg("當前副本時間:" + (20 * 60 * 1000 - (endTime - new Date().getTime())) / 1000 + "秒, 1200後自動傳出")
            }
            break;
        case 4:
            if (!"clear".equals(event.getVariable("stage" + stage))) {
                for (var i = 0; i < 15; i++) {
                    var mob = map_1.makeMob(9400300);
                    //mob.setForcedMobStat(315, 199999, 199999, 999, 999, 999, 999);
                    mob.changeBaseHp(500000000000); //50E
                    map_1.spawnMob(mob, 220 - i * 35, 199);
                }
                map_1.blowWeatherEffectNotice("海螺姑孃的聲音真是動聽。我的意識漸漸變得模糊。", 133, 5000);
                stageClear(stage);
                sendMsg("當前副本時間:" + (20 * 60 * 1000 - (endTime - new Date().getTime())) / 1000 + "秒, 1200後自動傳出")
            }
            break;
        case 5:
            if (!"clear".equals(event.getVariable("stage" + stage))) {
                for (var i = 0; i < 15; i++) {
                    var mob = map_1.makeMob(9401021); /* 海螺姑娘 */
                    //mob.setForcedMobStat(315, 199999, 199999, 999, 999, 999, 999);
                    mob.changeBaseHp(500000000000); //50E
                    map_1.spawnMob(mob, 220 - i * 35, 199);
                }
                map_1.blowWeatherEffectNotice("小心。船長。雖然海螺姑孃的外表美麗。但是他們十分凶殘。", 133, 5000);
                stageClear(stage);
                sendMsg("當前副本時間:" + (20 * 60 * 1000 - (endTime - new Date().getTime())) / 1000 + "秒, 1200後自動傳出")
            }
            break;
        case 6:
            if (!"clear".equals(event.getVariable("stage" + stage))) {
                for (var i = 0; i < 15; i++) {
                    var mob = map_1.makeMob(9402285); /* 海盜 */
                    //mob.setForcedMobStat(315, 199999, 199999, 999, 999, 999, 999);
                    mob.changeBaseHp(5000000); //50E
                    map_1.spawnMob(mob, 240 - i * 35, 199);
                }
                map_1.blowWeatherEffectNotice("它有著鋒利的趾甲·······你要小心不要受傷啊。", 133, 5000);
                stageClear(stage);
                sendMsg("當前副本時間:" + (20 * 60 * 1000 - (endTime - new Date().getTime())) / 1000 + "秒, 1200後自動傳出")
            }
            break;
        case 7:
            if (!"clear".equals(event.getVariable("stage" + stage))) {
                for (var i = 0; i < 15; i++) {
                    var mob = map_1.makeMob(9390713); /* 海螺姑娘 */
                    //mob.setForcedMobStat(315, 199999, 199999, 999, 999, 999, 999);
                    mob.changeBaseHp(500000000000); //50E
                    map_1.spawnMob(mob, 220 - i * 35, 199);
                }
                map_1.blowWeatherEffectNotice("海螺姑娘出現了。海螺姑娘可謂是航海士最大的敵人呢。", 133, 5000);
                stageClear(stage);
                sendMsg("當前副本時間:" + (20 * 60 * 1000 - (endTime - new Date().getTime())) / 1000 + "秒, 1200後自動傳出")
            }
            break;
        case 8:
            if (!"clear".equals(event.getVariable("stage" + stage))) {
                for (var i = 0; i < 20; i++) {
                    var mob = map_1.makeMob(9390713); /* 海螺姑娘 */
                    //mob.setForcedMobStat(315, 199999, 199999, 999, 999, 999, 999);
                    mob.changeBaseHp(500000000000); //50E
                    map_1.spawnMob(mob, 220 - i * 10, 199);
                }
                map_1.blowWeatherEffectNotice("它有著鋒利的趾甲·······你要小心不要受傷啊。", 133, 5000);
                stageClear(stage);
                sendMsg("當前副本時間:" + (20 * 60 * 1000 - (endTime - new Date().getTime())) / 1000 + "秒, 1200後自動傳出")
            }
            break;
        case 9:
            if (!"clear".equals(event.getVariable("stage" + stage))) {
                for (var i = 0; i < 20; i++) {
                    var mob = map_1.makeMob(9390713); /* 海螺姑娘 */
                    //mob.setForcedMobStat(315, 199999, 199999, 999, 999, 999, 999);
                    mob.changeBaseHp(2000000000000); //100E
                    map_1.spawnMob(mob, 220 - i * 15, 199);
                }
                map_1.blowWeatherEffectNotice("海螺姑娘出現了。海螺姑娘可謂是航海士最大的敵人呢。", 133, 5000);
                stageClear(stage);
                sendMsg("當前副本時間:" + (20 * 60 * 1000 - (endTime - new Date().getTime())) / 1000 + "秒, 1200後自動傳出")
            }
            break;
        case 10:
            if (!"clear".equals(event.getVariable("stage" + stage))) {
                for (var i = 0; i < 20; i++) {
                    var mob = map_1.makeMob(9833321); /* 海螺姑娘 */
                    //mob.setForcedMobStat(315, 199999, 199999, 999, 999, 999, 999);
                    mob.changeBaseHp(1010000000000); //100E
                    map_1.spawnMob(mob, 220 - i * 15, 199);
                }
                map_1.blowWeatherEffectNotice("它有著鋒利的趾甲·······你要小心不要受傷啊。", 133, 5000);
                stageClear(stage);
                sendMsg("當前副本時間:" + (20 * 60 * 1000 - (endTime - new Date().getTime())) / 1000 + "秒, 1200後自動傳出")
            }
            break;
        case 11:
            if (!"clear".equals(event.getVariable("stage" + stage))) {
                var mob = map_1.makeMob(9390826); /* 珊瑚礁 */
                //mob.setForcedMobStat(315, 199999, 199999, 999, 999, 999, 999);
                mob.changeBaseHp(101000000000000); //2000E
                map_1.spawnMob(mob, 851, 455);
                map_1.blowWeatherEffectNotice("船長,請你處理掉珊瑚礁吧。只要除去那珊瑚礁,我們就可以更快達到目的地了。", 133, 5000);
                stageClear(stage);
                sendMsg("當前副本時間:" + (20 * 60 * 1000 - (endTime - new Date().getTime())) / 1000 + "秒, 1200後自動傳出")
            }
            break;
        case 12:
            if (!"clear".equals(event.getVariable("stage" + stage))) {
                var mob = map_1.makeMob(9390859); //海龍王
                //mob.setForcedMobStat(315, 199999, 199999, 999, 999, 999, 999);
                mob.changeBaseHp(300000000000000); //3000E
                map_1.spawnMob(mob, 690, 454);
                map_1.blowWeatherEffectNotice("雖然我是聽說過有水龍······它開始攻擊了。請小心!!!", 133, 5000);
                stageClear(stage);
                sendMsg("當前副本時間:" + (20 * 60 * 1000 - (endTime - new Date().getTime())) / 1000 + "秒, 1200後自動傳出")
            }
            break;
        case 13:
            if (!"clear".equals(event.getVariable("stage" + stage))) {
                var mob = map_1.makeMob(9390802); //暗礁9390826
                //mob.setForcedMobStat(315, 199999, 199999, 999, 999, 999, 999);
                mob.changeBaseHp(300000000000000); //3000E
                map_1.spawnMob(mob, 843, 455);
                map_1.blowWeatherEffectNotice("消滅暗礁最簡單的方法是.....啊,我想不起來了。", 133, 5000);
                stageClear(stage);
                sendMsg("當前副本時間:" + (20 * 60 * 1000 - (endTime - new Date().getTime())) / 1000 + "秒, 1200後自動傳出")
            }
            break;
        case 14:
            if (!"clear".equals(event.getVariable("stage" + stage))) {
                for (var i = 0; i < 15; i++) {
                    var mob = map_1.makeMob(9402359); /* 海盜 */
                    //mob.setForcedMobStat(315, 199999, 199999, 999, 999, 999, 999);
                    mob.changeBaseHp(1010000000000); //100E
                    map_1.spawnMob(mob, 240 - i * 35, 199);
                }
                map_1.blowWeatherEffectNotice("普賽依海盜團出現了!請用盡全力將它們擊退吧。", 133, 5000);
                stageClear(stage);
                sendMsg("當前副本時間:" + (20 * 60 * 1000 - (endTime - new Date().getTime())) / 1000 + "秒, 1200後自動傳出")
            }
            break;
        case 15:
            if (!"clear".equals(event.getVariable("stage" + stage))) {
                for (var i = 0; i < 15; i++) {
                    var mob = map_1.makeMob(9402359); /* 海盜 */
                    //mob.setForcedMobStat(315, 199999, 199999, 999, 999, 999, 999);
                    mob.changeBaseHp(101000000000); //100E
                    map_1.spawnMob(mob, 240 - i * 35, 199);
                }
                map_1.blowWeatherEffectNotice("我相信勇士你!請把那些邪惡的海盜團擊退吧!!", 133, 5000);
                stageClear(stage);
                sendMsg("當前副本時間:" + (20 * 60 * 1000 - (endTime - new Date().getTime())) / 1000 + "秒, 1200後自動傳出")
            }
            break;
        case 16:
            if (!"clear".equals(event.getVariable("stage" + stage))) {
                var mob = map_1.makeMob(9390867); //深海巨妖
                mob.changeBaseHp(8000000000000); //8000E
                map_1.spawnMob(mob, 396, 484);
                var mob = map_1.makeMob(9390835); //深海巨妖的觸手
                //mob.setForcedMobStat(315, 199999, 199999, 999, 999, 999, 999);
                mob.changeBaseHp(101000000000000); //1000E
                map_1.spawnMob(mob, 63, 455);
                map_1.blowWeatherEffectNotice("你見過那麼大的章魚嗎? 這是我有生以來見過最大的章魚了。", 133, 5000);
                stageClear(stage);
                sendMsg("當前副本時間:" + (20 * 60 * 1000 - (endTime - new Date().getTime())) / 1000 + "秒, 1200後自動傳出")
            }
            break;
        case 17:
            if (!"clear".equals(event.getVariable("stage" + stage))) {
                var mob = map_1.makeMob(9390857); //深海巨妖
                mob.changeBaseHp(800000000000); //8000E
                map_1.spawnMob(mob, 396, 484);
                var mob = map_1.makeMob(9390835); //深海巨妖的觸手
                //mob.setForcedMobStat(315, 199999, 199999, 999, 999, 999, 999);
                mob.changeBaseHp(101000000000000); //1000E
                map_1.spawnMob(mob, 63, 455);
                map_1.blowWeatherEffectNotice("船長,請把它擊退吧。拜託你了。 就全交給船長了。", 133, 5000);
                stageClear(stage);
                sendMsg("當前副本時間:" + (20 * 60 * 1000 - (endTime - new Date().getTime())) / 1000 + "秒, 1200後自動傳出")
            }
            break;
        case 18:
            if (!"clear".equals(event.getVariable("stage" + stage))) {
                var mob = map_1.makeMob(9390868); //海龍王
                //mob.setForcedMobStat(315, 199999, 199999, 999, 999, 999, 999);
                mob.changeBaseHp(1010000000000000); //10000E
                map_1.spawnMob(mob, 690, 454);
                map_1.blowWeatherEffectNotice("那種水龍到底是生活在哪裡的呢。真是可怕。", 133, 5000);
                stageClear(stage);
                sendMsg("當前副本時間:" + (20 * 60 * 1000 - (endTime - new Date().getTime())) / 1000 + "秒, 1200後自動傳出")
            }
            break;
        default:
            break;
    }

}

function mobDied(mob) {
    //所有註冊在事件裡面的怪物都死亡後執行
    //////java.lang.System.out.println("龍王：剩餘怪物"+map_1.getEventMobCount());
    if (map_1.getEventMobCount() == 0) {
        var stage = parseInt(event.getVariable("stage"));
        switch (stage) {
            case 3:
            case 9:
                map_1.blowWeatherEffectNotice("你的實力真是驚人 . 航行目前很安全 . 請別擔心.", 134, 5000);
                break
            case 4:
                map_1.blowWeatherEffectNotice("居然一下子就除去了障礙物.船長你真了不起。", 134, 5000);
                break
            case 5:
            case 6:
                map_1.blowWeatherEffectNotice("呼。不過幸好怪物都被擊退了。", 134, 5000);
                break;
            case 7:
            case 11:
            case 15:
                map_1.blowWeatherEffectNotice("在航海中。必須要有出眾的戰鬥實力。", 134, 5000);
                break;
            case 12:
                map_1.blowWeatherEffectNotice("那些石塊。不能讓它們成為我們的絆腳石。", 134, 5000);
                break;
            case 13:
                map_1.blowWeatherEffectNotice("區區水龍......這無非是證明瞭飛禽走獸是無法戰勝人類的。", 134, 5000);
                break;
            case 14:
                map_1.blowWeatherEffectNotice("粉碎了所有障礙物,現在又能順利航海了。", 134, 5000);
                break;
            case 15:
                map_1.blowWeatherEffectNotice("只要有船長在,無論去哪裡航海,我好像都不會感到害怕了。", 134, 5000);
                break;
            case 16:
                map_1.blowWeatherEffectNotice("又 又 又是海盜·····還好有船長在,我想我不用太擔心什麼", 134, 5000);
                break;
            case 17:
                map_1.blowWeatherEffectNotice("哇哦····,這章魚的腿真是巨大,能夠得到的話,把它當做零食吃還蠻好的·····", 134, 5000);
                break;
            case 18:
                map_1.blowWeatherEffectNotice("你盡然將深海巨妖擊退了!船長你果然是最強的勇士。", 134, 5000);
                break;
            case 19:
                map_1.blowWeatherEffectNotice("真棒 ! ! ! 船長. 這趟有驚無險 ! 期待與船長下回的航海之旅。", 134, 5000);
                break;

            default:
                map_1.blowWeatherEffectNotice("真不愧是船長.", 134, 5000);
                break;
        }

        event.setVariable("stage", stage + 1);
        if (stage < 18) {
            event.startTimer("SapwnMonster", 5000);
        } else {
            map_1.blowWeatherEffectNotice("擊敗了海上龍王即可獲取獎勵。", 134, 5000);

        }

        if (mob.getDataId() == 9390868) {
            for (let i = 0; i < members.length; i++) {
                members[i].runScript("航海困難獎勵");
            }
            for (let i = 0; i < members.length; i++) {
                members[i].changeMap(EXIT_MAP, "st00");
            }
        }
    }

}

function removePlayer(playerId, changeMap) {
    for (let i = 0; i < members.length; i++) {
        if (i == 0) {
            //////java.lang.System.out.println("319new_航海獎勵"+members.length);
            //members[0].runScript("new_蜈蚣出場");
        }
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
        //////java.lang.System.out.println("338new_航海獎勵"+members.length);
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
    event.stopTimer("check");
    event.stopTimer("navigation");
    event.stopTimer("SapwnMonster");
    for (let i = 0; i < members.length; i++) {
        //dissociate event before changing map so playerChangedMap is not
        //called and this method is not called again by the player
        members[i].setEvent(null);
        members[i].changeMap(EXIT_MAP);
    }
    event.destroyEvent();
}

function timerExpired(key) {
    //////java.lang.System.out.println(key);
    switch (key) {
        case "kick":
            kick();
            break;
        case "navigation":
            navigation();
            break;
        case "SapwnMonster":
            SapwnMonster();
            break;
        case "check":
            check();
            break;
        case "UUI":
            event.startTimer("UUI", 4000);
            let map_1 = event.getMap(PHASE_1);
            map_1.createObtacleAtom(0, 5, 65, 67, -13, -155);
    }
}

function deinit() {
    event.getMap(PHASE_1).endFieldEvent();
    for (let i = 0; i < members.length; i++) {
        members[i].setEvent(null);
        members[i].setDeathCount(-1);
    }
}
