
let boxId = 2437115;//箱子ID
let addAp = 150;//增加的屬性
let items = [
	Array(5062017, 49),
	Array(5062020, 78),
	Array(5062500, 60),
	Array(5062503, 25),
	//Array(2644029,1),
	Array(5060028, 25),
	Array(5060029, 150),
	Array(5064400, 9)
];

let text = ""
text += "#fs17##b感謝圓夢玩家第三期的贊助支持!!\r\n這是你的贊助禮包\r\n";
text += "#L0#點我領取#l";
let selected = npc.askMenu(text);

if (player.hasItem(boxId, 1)) {


	player.loseItem(boxId, 1);


	for (var i = 0; i < items.length; i++) {
		player.gainItem(items[i][0], items[i][1]);//text = "#v"+items[0][0]+"##b "+items[0][1]+"個 #e\r\n";// 
	}

} else {
	npc.say("你沒有#v" + boxId + "#");
}
