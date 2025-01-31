
var needList=Array(
	Array(4033732,2),
);

var selStr =  "#fs21##e#r#v1052715##z1052715#製作升級。\r\n";

    selStr +="#fs16##e#b需要以下材料:#l\r\n";
for(var i = 0; i < needList.length; i++) {
	selStr += "\r\n#v" + needList[i][0] + "#x" + needList[i][1];
}
let selection = npc.askYesNo(selStr);
if(selection == 1) {
	if(!player.hasItem(4033732,2)){
		 npc.say("材料不足。");
	}else{
			var toDrop = player.makeItemWithId(1052715);
			//設置潛能等級
			player.gainItem(toDrop);
		
			player.loseItem(4033732,2);
			//npc.broadcastPlayerNotice(7, "[滅龍製作] : 恭喜 " + player.getName() + " 製作出   ★★★見習騎士盔甲★★★" );
            npc.say("成功製作。");
			//npc.say("成功升級到C等級BOSS競技場徽章。");
			
			//npc.broadcastGachaponMsgEx( "[符號升級] : 恭喜 " + player.getName() + " 製作出<C等級BOSS競技場徽章>獲得全屬性+10的符號證明.",toDrop);
		}
		}