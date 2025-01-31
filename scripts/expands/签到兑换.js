var status = -1;

var reward = Array(
	Array(2049384, 2),
	Array(2049385, 4),
	Array(2049386, 6),
	Array(2049387, 8),
	Array(2049388, 10),
	Array(2049389, 15),
	Array(2644006, 5),
	Array(2644007, 10),
	Array(2644008, 15)
);

var itemId = -1;
var points = -1;
var period = -1;
var xx = "#fEffect/CharacterEff/1082565/4/0#"; //兔子
var epp = "#fEffect/CharacterEff/1082312/0/0#"; //彩光
var need = 2439483;
var selStr = "#fs21##b#e-請選購的時候注意背包空間哦，如果因為空間不夠導致沒有得到物品不負責的哦:\r\n#fs16#";

for(var i = 0; i < reward.length; i++) {
	selStr += "\r\n#L" + i + "##i" + reward[i][0] + ":# #b#t" + reward[i][0] + "#  需要#r " + reward[i][1] + " #b個#i" + need + "##l";
}
var 序號 = npc.askMenuA(selStr);

if(player.hasItem(need, reward[序號][1])) {
	if(player.canGainItem(reward[序號][0], 1)){
		player.gainGachaponItem("[簽到商店]", reward[序號][0], 1, 1);
		player.loseItem(need, reward[序號][1]);
		npc.say("兌換成功。");
	}else{
		npc.say("請整理背包。");
	}
	
} else {
	npc.say("您的#v" + need + "#不足" + reward[序號][1] + "個.");
}