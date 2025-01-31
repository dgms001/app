/* global npc, player, map */

let taxiMaps = Array(

	Array(100040400, "10-22等  "),
	Array(104010000, "10-15等  "),
	Array(100040400, "10-22等  "),
	Array(101030100, "10-31等  "),
	Array(103020310, "31-46等  "),
	Array(105010000, "46-70等  "),
	Array(260020610, "70-79等  "),
	Array(261020401, "79-100等 "),
	Array(224000100, "109-142等"),
	Array(251010402, "121-151等"),
	Array(103041157, "151-169等"),
	Array(221030730, "169-190等"),
	Array(273040100, "175-200等"),
	Array(240010600, "100-121等"),
	Array(211042000, "121-142等"),
	Array(211042200, "121-142等"),
	Array(103041119, "142-166等"),
	Array(221030640, "161-200等"),
	Array(450001114, "200-205等"),
	Array(450001261, "200-205等"),
	Array(450014020, "205-210等"),
	Array(450014300, "205-210等"),
	Array(450002008, "210-215等"),
	Array(450002010, "210-215等"),
	Array(450015290, "215-220等"),
	Array(450003300, "220-225等"),
	Array(450003420, "220-225等"),
	Array(450003450, "220-225等"),
	Array(450005430, "225-250等"),
	Array(450005431, "225-250等"),
	Array(450005500, "225-250等"),
	Array(450005510, "225-250等"),
	Array(450006230, "230-250等"),
	Array(450007110, "235-250等"),
	Array(450007120, "235-250等"),
	Array(450016140, "240-250等"),
	Array(450016210, "240-250等"),
	Array(450009330, "245-250等"),
	Array(450011600, "250-275等"),
	Array(450011630, "250-275等"),
	Array(450012030, "255-275等"),
	Array(450012110, "255-275等"),
	Array(450012340, "255-275等"),
	Array(450012440, "255-275等"),
	Array(410000650, "260-300等"),
	Array(410000600, "260-300等"),
	Array(410000710, "260-300等"),
	Array(410000930, "265-300等"),
	Array(410000990, "265-300等"),
	Array(410000880, "265-300等"),
	Array(410003050, "270-300等"),
	Array(410003070, "270-300等"),
	Array(410007002, "270-300等"),
	Array(410007017, "270-300等")
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
);
//npc.sayNext("你好~!我是#p1012000#。你想快速又安全地移動到其他村莊嗎? 那麼就請使用令客戶百分百滿意的#b#p1012000##k吧。這次我給你免費優待!我將會送你去想去的地方。");
let prompt = "#fs21##r#e請選擇你要接連的地方。\r\n";
for (let i = 0; i < taxiMaps.length; i++) {
    if (taxiMaps[i] != map.getId()) {
        prompt += "#fs16##b#e#L" + i + "##m" + taxiMaps[i][0] + "#     #g適應#r" + taxiMaps[i][1] + "#l#r\r\n\r\n";
    }
}
let mapIndex = npc.askMenuA(prompt);
let selection = npc.askYesNo("出發吧！");
if (selection == 1) {
    player.changeMap(taxiMaps[mapIndex][0]);
} else if (selection == 0) {
    npc.say("如果你想移動到其他地圖, 請隨時使用我們的傳送服務~");
}

