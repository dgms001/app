/*
 * Instance: Spirit Savior
 * @author Yukinoshita
 */

let EXIT_MAP = 921172400
let FIELD = 921172300

let BOSS_LOG = "SpiritSavior"
//精靈殘骸數量
let DEBRIS_COUNT = 6
//精靈數量
let SPIRIT_COUNT = 12
//刷新精靈間隔
let SPAWN_SPIRIT_INTERVAL = 30000


let startTime = new Date().getTime()

/**
 * @type {ScriptPlayer}
 */
let player
/**
 * @type {ScriptField}
 */
let map
let reactorIdx = 0
/**
 * @type {StageInfo}
 */
let stageInfo = null

let time = 5 * 60 * 1000

function init(attachment) {
    player = attachment
    map = event.makeMap(FIELD)
    map.setDropDisabled(true)
    player.changeMap(map)
    map.showTimer(time / 1000)
    stageInfo = new StageInfo()
    event.startTimer("spawnSpirit", 1000)
    event.startTimer("kick", time);
    player.setEvent(event)
    player.screenEffect("event/start")
    player.soundEffect("Dojang/clear")
    player.addEventValue("SpiritSavior");
}

function removePlayer(changeMap) {
    player.setEvent(null)
    event.destroyEvent()
    if (changeMap) {
        player.changeMap(EXIT_MAP)
    }
}

function playerDisconnected(player) {
    //changeMap is false since all PQ maps force return the player to the exit
    //map on his next login anyway, and we don't want to deal with sending
    //change map packets to a disconnected client
    removePlayer(false)
}

function playerChangedMap(player, destination) {
    //TODO: is it true that even when a non-leader clicks Nella, the entire
    //party is booted? and that GMS forces party out when only two members
    //remain alive and online?
    switch (destination.getId()) {
        case FIELD:
            //player.showDeathCount()
            break
        default:
            //player died and respawned or clicked Nella to leave PQ
            //changeMap is false so player doesn't get re-warped to exit map
            removePlayer(false)
    }
}



function kick() {
    player.setEvent(null)
    player.changeMap(EXIT_MAP)
    player.screenEffect("Map/Effect2.img/event/gameover")
    event.destroyEvent()
}

/**
 *
 * @param {string} key
 */
function timerExpired(key) {
    switch (key) {
        case "kick":
            event.stopTimer("spawnSpirit")
            kick()
            break
        case "spawnSpirit":
            spawnSpirit()
            break
        default:
            if (key.includes("destroyReactor_")) {
                let idx = key.replace("destroyReactor_", "")
                map.destroyReactor("spirit" + idx)
            }
            break
    }
}

function deinit() {
    player.setEvent(null)
    event.destroyMap(map)
}

/**
 *
 * @param {ScriptMob} mob
 */
function mobDied(mob) {
    dropDebug(1, "[Spirit Savior] Mob died. Mob:" + mob.getDataId())
    let lifeLoss = 0
    let clearPartner = false
    let mobId = mob.getDataId()
    switch (mobId) {
        case 8644201:// - 精靈殘骸 - 被碰到減少5點防禦點數
            lifeLoss = 5
            break
        case 8644301:// - 劇毒追擊者 - 被碰到減少10點防禦點數 - 清除所有被拯救的石頭精靈
        case 8644302:// - 劇毒追擊者
        case 8644303:// - 劇毒追擊者
        case 8644304:// - 劇毒追擊者
        case 8644305:// - 劇毒追擊者
            lifeLoss = 10
            clearPartner = true
            break
        case 8644101:// - 被束縛的石精靈
        case 8644102:// - 被束縛的石精靈
        case 8644103:// - 被束縛的石精靈
        case 8644104:// - 被束縛的石精靈
        case 8644105:// - 被束縛的石精靈
        case 8644106:// - 被束縛的石精靈
        case 8644107:// - 被束縛的石精靈
        case 8644108:// - 被束縛的石精靈
        case 8644109:// - 被束縛的石精靈
        case 8644110:// - 被束縛的石精靈
        case 8644111:// - 被束縛的石精靈
        case 8644112:// - 被束縛的石精靈
            event.setVariable("Spawn_" + mobId, false)
            let chase = stageInfo.chase
            if (chase < 5) {
                map.spawnReactor(3600001, "spirit" + reactorIdx, mob.getPosition().x, mob.getPosition().y)
                event.startTimer("destroyReactor_" + reactorIdx, 10000)
                reactorIdx++
                stageInfo.addChase()
                let lastMobId = 8644300 + chase
                let nextMobId = 8644301 + chase
                let point = [-200, -1391]
                if (chase > 0) {
                    let flyMob = map.getMobById(lastMobId)
                    if (flyMob != null) {
                        point = [flyMob.getPosition().x, flyMob.getPosition().y]
                    }
                    map.killMobByDataId(lastMobId)
                }
                let chaser = map.makeMob(nextMobId)
                chaser.setKeepAggro(true)
                map.spawnMob(chaser, point[0], point[1])
                let msg = ""
                switch (stageInfo.chase) {
                    case 1:
                        msg = "劇毒精靈有所察覺了！快逃！"
                        break
                    case 5:
                        msg = "劇毒精變成完全體了！小心！"
                        break
                    default:
                        msg = "劇毒精靈越來越強……！"
                        break
                }
                map.blowWeather(5120175, msg)
            }
            break
    }
    if (lifeLoss > 0) {
        if (clearPartner) {
            stageInfo.clearSaved()
            stageInfo.clearChase()
            player.showScreenAutoLetterBox("Map/Effect3.img/savingSpirit/failed", 100)
            map.blowWeather(5120175, "朋友們……小心劇毒精靈！")
        }
        stageInfo.changeLife(-lifeLoss)
        if (stageInfo.life <= 0) {
            kick()
        }
    }

}


function clearPartner() {
    for (var i = 0; i < stageInfo.saved; i++) {
        let mobId = 3003381 + i * 100
        updatePartner(mobId, false)
    }
}

function updatePartner(partnerId, spawn) {
    player.setPartner(spawn, partnerId, spawn ? 80002310 : 0, false)
}

function spawnSpirit() {
    let debrisCount = map.getEventMobCountById(8644201)
    let spiritCount = getSpiritCount()
    if (spiritCount < SPIRIT_COUNT) {
        let loop = 0
        while (spiritCount < SPIRIT_COUNT) {
            let mobId = 8644101 + Math.floor(Math.random() * 12)
            if (event.getVariable("Spawn_" + mobId) !== true) {
                let point = getSpiritPos(mobId)
                event.setVariable("Spawn_" + mobId, true)
                let mob0 = map.makeMob(mobId)
                mob0.setKeepAggro(true)
                map.spawnMob(mob0, point[0], point[1])
                spiritCount++
                if (debrisCount < DEBRIS_COUNT) {
                    debrisCount++
                    let debris = map.makeMob(8644201)
                    debris.setKeepAggro(true)
                    map.spawnMob(debris, point[0], point[1]) //精靈殘骸
                }
            }
            if (++loop > 1000) {
                player.dropAlertNotice("Death loop!")
                break
            }
        }
    }
    event.startTimer("spawnSpirit", SPAWN_SPIRIT_INTERVAL)
}

function getSpiritCount() {
    let count = 0
    for (let i = 0; i < 12; i++) {
        let mobId = 8644101 + i
        if (event.getVariable("Spawn_" + mobId) === true) {
            count++
        }
    }
    return count
}

function getSpiritPos(mobId) {
    let point = []
    switch (mobId) {
        case 8644101:// - 被束縛的石精靈
            point = [740, -731]
            break
        case 8644102:// - 被束縛的石精靈
            point = [1350, -971]
            break
        case 8644103:// - 被束縛的石精靈
            point = [2654, -1571]
            break
        case 8644104:// - 被束縛的石精靈
            point = [1889, -1751]
            break
        case 8644105:// - 被束縛的石精靈
            point = [1078, -1991]
            break
        case 8644106:// - 被束縛的石精靈
            point = [407, -2231]
            break
        case 8644107:// - 被束縛的石精靈
            point = [-685, -2231]
            break
        case 8644108:// - 被束縛的石精靈
            point = [-1349, -1991]
            break
        case 8644109:// - 被束縛的石精靈
            point = [-2163, -1751]
            break
        case 8644110:// - 被束縛的石精靈
            point = [-2937, -1571]
            break
        case 8644111:// - 被束縛的石精靈
            point = [-1621, -971]
            break
        case 8644112:// - 被束縛的石精靈
            point = [-1101, -731]
            break
    }
    return point
}

function reactorHit(name) {
    dropDebug(3, "[Spirit Savior] Touch reactor:" + name)
    map.destroyReactor(name)
    if (stageInfo.saved < 5) {
        stageInfo.addSaved()
    }
}

function save() {
    if (stageInfo.saved > 0) {
        stageInfo.changePoint(getPoint(stageInfo.saved))
        map.screenEffect("Map/Effect3.img/savingSpirit/" + stageInfo.saved)
        map.soundEffect("Sound/MiniGame.img/Result_Yut")
        map.killMobByDataId(8644300 + stageInfo.chase)
        stageInfo.clearSaved()
        stageInfo.clearChase()
    }
}

function getPoint(saved) {
    switch (saved) {
        case 1:
            return 200
        case 2:
            return 500
        case 3:
            return 1000
        case 4:
            return 1500
        case 5:
            return 2500
    }
}

function dropDebug(type, content) {
    if (player.isGm()) {
        player.dropMessage(type, content);
    }
}

/**
 * @constructor
 */
function StageInfo() {
    this.qrexId = 16215
    this.init()
}

StageInfo.prototype.init = function () {
    this.life = 100
    this.saved = 0
    this.point = 0
    this.play = 1
    this.chase = 0
    player.updateQuestRecordEx(this.qrexId, "life", this.life)
    player.updateQuestRecordEx(this.qrexId, "saved", this.saved)
    player.updateQuestRecordEx(this.qrexId, "point", this.point)
    player.updateQuestRecordEx(this.qrexId, "play", this.play)
    player.updateQuestRecordEx(this.qrexId, "chase", this.chase)
}

StageInfo.prototype.changeLife = function (life) {
    dropDebug(3, "[Spirit Savior] life change. before:" + this.life + ", after:" + (this.life + life))
    this.life += life
    player.updateQuestRecordEx(this.qrexId, "life", Math.min(100, Math.max(0, this.life)))
}

StageInfo.prototype.changePoint = function (point) {
    this.point += point
    player.updateQuestRecordEx(this.qrexId, "point", Math.max(0, this.point))
}

StageInfo.prototype.addSaved = function () {
    dropDebug(3, "[Spirit Savior] add saved. before:" + this.saved + ", after:" + (this.saved + 1))
    updatePartner(3003381 + stageInfo.saved * 100, true)
    player.updateQuestRecordEx(this.qrexId, "saved", Math.min(5, ++this.saved))
    player.updateSpiritSaviorSavedCounter(this.saved)
}

StageInfo.prototype.clearSaved = function () {
    clearPartner()
    player.updateQuestRecordEx(this.qrexId, "saved", this.saved = 0)
    player.updateSpiritSaviorSavedCounter(0)
}

StageInfo.prototype.addChase = function () {
    player.updateQuestRecordEx(this.qrexId, "chase", Math.min(5, ++this.chase))
}

StageInfo.prototype.clearChase = function () {
    player.updateQuestRecordEx(this.qrexId, "chase", this.chase = 0)
}
