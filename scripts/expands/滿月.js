var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var rewardG;
8/var ABC;
var reward = [
    Array(2432140, 200, 3, gain1),
    Array(2432141, 200, 3, gain2),
    Array(2432142, 200, 50, gain3),
    Array(2432143, 200, 20, gain4),
    Array(2432144, 200, 10, gain5),
    //Array(2432144, 200, 50, gain6),
    Array(2432145, 200, 50, gain7),
];
var text = "\t\t\t\t\t#fs21##e#r滿月收集字母活動\r\n";


for (var i = 0; i < reward.length; i++) {
    text += "#fs16##e#r#L" + i + "##b#r" + reward[i][1] + "個#v" + reward[i][0] + "##r兌換物品\t#b當前擁有[#r" + player.getAmountOfItem(reward[i][0]) + "#b]個\t 每日次數[" + player.getEventValue("清明活動" + i) + "/" + reward[i][2] + "]\r\n\r\n";
}
var selection = npc.askMenuA(text);
if (player.getEventValue("清明活動" + selection) >= reward[selection][2]) {
    npc.say("本選項每日兌換次數不足,請明天再來~");
} else if (player.getAmountOfItem(reward[selection][0]) < reward[selection][1]) {
    npc.say("不足" + reward[selection][1] + "個#v" + reward[selection][0] + "#~");
} else {
    player.loseItem(reward[selection][0], reward[selection][1]);
    player.addEventValue("清明活動" + selection, 1, 1);
    player.runScript("滿月");
    reward[selection][3]();
}
function gain1() {
    rewardG = [
        Array(4001226, 1),
        Array(4001227, 1),
        Array(4001228, 1),
        Array(4001229, 1),
        Array(4001230, 1),

    ];
    ABC = rand(0, 4);
    player.gainItem(rewardG[ABC][0], rewardG[ABC][1]);
    npc.broadcastPlayerNotice(2, "玩家 " + player.getName() + " 從滿月活動兌換" + player.makeItemWithId(rewardG[ABC][0]).getItemName() + "*" + rewardG[ABC][1] + ",恭喜!");//測試用say 自己改成公告
}
function gain2() {
    rewardG = [
        Array(2633609, 1),
        Array(2633609, 1),
    ];
    ABC = rand(0, 1);
    player.gainItem(rewardG[ABC][0], rewardG[ABC][1]);
    npc.broadcastPlayerNotice(2, "玩家 " + player.getName() + " 從滿月活動兌換" + player.makeItemWithId(rewardG[ABC][0]).getItemName() + "*" + rewardG[ABC][1] + ",恭喜!");//測試用say 自己改成公告
}
function gain3() {
    rewardG = [
        Array(5062503, 1),
        Array(5062026, 1),

    ];
    ABC = rand(0, 1);
    player.gainItem(rewardG[ABC][0], rewardG[ABC][1]);
    //npc.broadcastPlayerNotice(3, "玩家 " + player.getName() + " 從滿月活動兌換" + player.makeItemWithId(rewardG[ABC][0]).getItemName() + "*" + rewardG[ABC][1] + ",恭喜!");//測試用say 自己改成公告
}
function gain4() {
    rewardG = [
        Array(5060086, 1),
        Array(5064502, 1),

    ];
    ABC = rand(0, 1);
    player.gainItem(rewardG[ABC][0], rewardG[ABC][1]);
    npc.broadcastPlayerNotice(3, "玩家 " + player.getName() + " 從滿月活動兌換" + player.makeItemWithId(rewardG[ABC][0]).getItemName() + "*" + rewardG[ABC][1] + ",恭喜!");//測試用say 自己改成公告
}
function gain5() {
    rewardG = [
        Array(5064400, 1),
        Array(2635032, 1),

    ];
    ABC = rand(0, 1);
    player.gainItem(rewardG[ABC][0], rewardG[ABC][1]);
    npc.broadcastPlayerNotice(3, "玩家 " + player.getName() + " 從滿月活動兌換" + player.makeItemWithId(rewardG[ABC][0]).getItemName() + "*" + rewardG[ABC][1] + ",恭喜!");//測試用say 自己改成公告
}
function gain6() {
    ABC = rand(0, 1);
    var inc = rand(50, 100);
    if (ABC == 0) {
        player.increaseMaxHp(inc)
        npc.broadcastPlayerNotice(3, "玩家 " + player.getName() + " 從活動中兌換到了Hp*" + inc + ",恭喜!");//測試用say 自己改成公告
    } else {
        player.increaseMaxMp(inc)
        npc.broadcastPlayerNotice(3, "玩家 " + player.getName() + " 從活動中兌換到了Mp*" + inc + ",恭喜!");//測試用say 自己改成公告
    }
}
function gain7() {
    rewardG = [
        Array(5060048, 1),
        Array(5060048, 1),
    ];
    ABC = rand(0, 1);
    player.gainItem(5060048, 1);
    npc.broadcastPlayerNotice(3, "玩家 " + player.getName() + " 從滿月活動兌換" + player.makeItemWithId(5060048).getItemName() + "*1,恭喜!");//測試用say 自己改成公告
}
function rand(minVal, maxVal) {//隨機 最大值 最小值
    return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}