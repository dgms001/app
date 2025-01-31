
var event = npc.getEvent("次元入侵");
if (event != null) {
    var map1 = event.getMap(940021000);
    var stage = parseInt(event.getVariable("state"));
    if (stage < 31) {
        npc.say("請擊所有怪物後找我領取獎勵。當前第：" + stage + "波,總共31波~")
    } else if (map1.getEventMobCount() > 0) {
        npc.say("請擊所有怪物後找我領取獎勵。")
    } else if (stage > 30) {
        player.runScript("InvasionFinish");
    } else {
        npc.say("關卡" + stage);
    }
} else {
    npc.say("使用副本中心進入");
}

