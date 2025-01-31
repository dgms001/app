// CC 活動入口

let cat1 = "#fItem/Pet/5000000.img/alert/0#";
let cat2 = "#fItem/Pet/5000000.img/fly/0#";
let cat3 = "#fItem/Pet/5000000.img/cry/0#";
let tu1 = "#fItem/Cash/0501.img/05010045/effect/stand1/1#"
let tu2 = "#fItem/Cash/0501.img/05010002/effect/default/7#"
let tu3 = "#fUI/NameTag/medal/758/w#"
let tu4 = "#fEffect/SetEff.img/245/effect/28#"
let tu5 = "#fUI/NameTag/medal/758/e#"
let tu6 = "#fUI/NameTag/medal/758/c#"
let fy = "#fUI/RunnerGame.img/RunnerGameUI/UI/Point/1#";
let fy1 = "#fUI/RunnerGame.img/RunnerGameUI/UI/Point/2#";
let dz = "#fUI/GuildMark/Mark/Etc/00009020/1#";
let dz1 = "#fEffect/CharacterEff/1003393/1/0#";
let star = "#fEffect/CharacterEff/1051294/1/1#"


let activites = Array(
    //活動名 地圖ID 事件名
    Array("跑酷達人", 911000300),
    Array("雪原跑旗", 932200005),
    Array("雪崩逃生", 993000700)
);
let channel = 1;//幾線可以玩
let mapId = map.getId();


if (mapId == 911000300) {
    //雪崩入口
    if (player.getChannel() != channel) {
    } else if (getActiveStatus("跑酷達人")) {
        player.changeMap(911003400);
        player.loseItem(4001007);
        player.loseItem(4032472);
        npc.say("加油吧，冒險家！");
    } else {
        npc.say("沒有開放活動,或已經關閉入口1");
    }
} else if (mapId == 932200005) {
    //雪原跑旗
    if (getActiveStatus("雪原跑旗")) {
        player.changeMap(932200300);
        var sql = "INSERT INTO jili_flag(name, count,reward) VALUES('" + player.getName() + "',0,0)";
        player.customSqlInsert(sql);
        npc.say("加油吧，冒險家！");
    } else {
        npc.say("沒有開放活動,或已經關閉入口2");
    }
} else if (mapId == 993000700) {
    //雪崩逃生
    if (getActiveStatus("雪崩逃生")) {
        player.changeMap(993000704);
        var sql = "INSERT INTO jili_flag(name, count,reward) VALUES('" + player.getName() + "',0,0)";
        player.customSqlInsert(sql);
        npc.say("加油吧，冒險家！");
    } else {
        npc.say("活動還沒開始或已經關閉入口！\r\n*請在地圖內等候管理開啟活動！\r\n*活動開啟且倒計時結束後點選NPC即可進入");
    }
} else {
    let selStr = "";
    selStr += tu3;
    for (let i = 0; i < 35; i++) {
        selStr += tu6;
    }
    selStr += tu5;
    selStr += "\r\n\t#d請選擇你要參加的活動？#r(需要等待GM開放相應活動)\r\n#d\t 注意：必須是 #r冒險家新手職業 #d才可進入！\r\n"
    for (let i = 0; i < activites.length; i++) {
        selStr += "#L" + i + "# " + fy + "參加" + activites[i][0] + "#l\r\n"
    }
    let selected = npc.askMenu(selStr);
    if (player.getJob() != 0 && !player.isGm()) {
        npc.say("#d注意：必須是 #r冒險家新手職業 #d才可進入！");
    } else if (player.getChannel() == channel) {
        player.changeMap(activites[selected][1]);
    } else {
        npc.say("#d注意：只有在頻道 #r" + channel + " #d才可進入！");
    }
}

function getActiveStatus(name) {
    var sql = "SELECT status FROM jili_active_status WHERE activeName = '" + name + "'";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        var stage = result.get("status");
        if (stage == 1) {
            return true;
        }
    }
    return false;
}