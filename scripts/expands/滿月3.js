var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var rewardG;
var ABC;
var reward = [
    Array(4034085, 8888, 999, gain1),
    //Array(4034086, 8888, 100, gain2),
    //Array(4034087, 8888, 20, gain3),
    //Array(4034088, 8888, 30, gain4),
    //Array(4034089, 8888, 50, gain5),
    //Array(4034090, 6666, 999, gain6),
    //Array(4031065, 9999, 2, gain7),
];
var text = "\t\t\t\t\t#fs21##e#r週年收集字母活動\r\n";


for (var i = 0; i < reward.length; i++) {
    text += "#fs16##b#L" + i + "##b收集#r" + reward[i][1] + "個#v" + reward[i][0] + "##z" + reward[i][0] + "#\r\n#r兌換隨機物品\t#b當前擁有[#r" + player.getAmountOfItem(reward[i][0]) + "#b]個\t 限制次數[" + player.getEventValue("清明活動" + i) + "/" + reward[i][2] + "]\r\n\r\n";
}
var selection = npc.askMenuA(text);
if (player.getEventValue("清明活動" + selection) >= reward[selection][2]) {
    npc.say("本選項每日兌換次數不足,請明天再來~");
} else if (player.getAmountOfItem(reward[selection][0]) < reward[selection][1]) {
    npc.say("不足" + reward[selection][1] + "個#v" + reward[selection][0] + "#~");
} else {
    player.loseItem(reward[selection][0], reward[selection][1]);
    player.addEventValue("清明活動" + selection, 1, 1);
    reward[selection][3]();
}
function gain1() {
    rewardG = [
        Array(4001551, 1),
        Array(4001126,100),
    ];
    ABC = rand(0, 1);
    player.gainItem(rewardG[ABC][0], rewardG[ABC][1]);
     npc.broadcastPlayerNotice(3, "玩家 " + player.getName() + " 從活動中兌換到了" + player.makeItemWithId(rewardG[ABC][0]).getItemName() + "*" + rewardG[ABC][1] + ",恭喜!");//測試用say 自己改成公告
}
function gain2() {
    rewardG = [
        Array(5062026, 10),
        Array(2472000, 10),
    ];
    ABC = rand(0, 1);
    player.gainItem(rewardG[ABC][0], rewardG[ABC][1]);
    npc.broadcastPlayerNotice(3, "玩家 " + player.getName() + " 從活動中兌換到了" + player.makeItemWithId(rewardG[ABC][0]).getItemName() + "*" + rewardG[ABC][1] + ",恭喜!");//測試用say 自己改成公告
}
function gain3() {
    rewardG = [
        Array(2048761, 2),
		Array(2049384, 1),
		Array(2049385, 1),
		Array(2049386, 1),
        Array(2049387, 1),
        Array(2049388, 1),
        Array(2049389, 1),
        Array(2644006, 1),
        Array(2644007, 1),
    ];
    ABC = rand(0, 6);
    player.gainItem(rewardG[ABC][0], rewardG[ABC][1]);
    npc.broadcastPlayerNotice(3, "玩家 " + player.getName() + " 從活動中兌換到了" + player.makeItemWithId(rewardG[ABC][0]).getItemName() + "*" + rewardG[ABC][1] + ",恭喜!");//測試用say 自己改成公告
}
function gain4() {
    rewardG = [
        Array(2436527, 1),
        Array(2630118, 1),
        Array(5064400, 5),
    ];
    ABC = rand(0, 2);
    player.gainItem(rewardG[ABC][0], rewardG[ABC][1]);
    npc.broadcastPlayerNotice(3, "玩家 " + player.getName() + " 從活動中兌換到了" + player.makeItemWithId(rewardG[ABC][0]).getItemName() + "*" + rewardG[ABC][1] + ",恭喜!");//測試用say 自己改成公告
}
function gain5() {
    rewardG = [
        Array(5060048, 2),
        Array(4250000, 1),
        Array(4250001, 1),
        Array(4250002, 1),
        Array(4009393, 10),
        Array(4031831, 1),
		Array(4031917, 1),
        Array(4031595, 1),
    ];
    ABC = rand(0, 7);
    player.gainItem(rewardG[ABC][0], rewardG[ABC][1]);
    npc.broadcastPlayerNotice(3, "玩家 " + player.getName() + " 從活動中兌換到了" + player.makeItemWithId(rewardG[ABC][0]).getItemName() + "*" + rewardG[ABC][1] + ",恭喜!");//測試用say 自己改成公告
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
        Array(4251202, 1),
        Array(4251202, 1),
    ];
    ABC = rand(0, 1);
    player.gainItem(4251202, 1);
    npc.broadcastPlayerNotice(3, "玩家 " + player.getName() + " 從活動中兌換到了" + player.makeItemWithId(4251202).getItemName() + "*1,恭喜!");//測試用say 自己改成公告
}
function rand(minVal, maxVal) {//隨機 最大值 最小值
    return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}