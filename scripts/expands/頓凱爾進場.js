

let minPlayers = 1;
let maxPlayers = 6;
//等級限制
var minLevel = [270];
var maxLevel = [300];
//次數限制
var maxenter = [1];
let BossName = "頓凱爾";
let PQLog = ["頓凱爾[普通]"];
let event = ["boss_dunkel"];
let onlyOne = true;
let startmap = 105200000;
//如果需要破攻值則填寫破攻值
let checkLimit = 0;
//false不進行廣播 true進行進入副本廣播
let warn = true;

var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var f2 = "#fUI/CashShop/CSBeauty/hairColor/Enable/2#"
var f3 = "#fUI/CashShop/CSBeauty/hairColor/Enable/3#"
var f4 = "#fUI/CashShop/CSBeauty/hairColor/Enable/4#"
var f5 = "#fUI/CashShop/CSBeauty/hairColor/Enable/5#"


var text = "";
	text = "\t\t\t#v3994016##v3994000##v3994006##v3994006##v3994010#  #v3994025##v3994000##v3994012##v3994001#\r\n";
	
		text += "#e#r請選擇進入模式：#b完成記錄將在晚0點初始化\r\n\r\n";
for (var i = 0; i < PQLog.length; i++) {
        text += "#b\t\t#L" + i + "##b" + PQLog[i] + "[#r" + player.getPQLog(event[i]) + "/#r" + maxenter[i] + "#b]#l";
		
}
text += "\t#L7#挑戰困難模式#l\r\n\r\n";
text +="\t\t\t\t  #L6#使用#v2633609#重置BOSS#l";
//let selection = npc.askMenu(txt);
let sel = npc.askMenuA("" + text, true);
			      if (sel == 6) {
        var bossevent = Array("boss_dunkel");
        if (player.hasItem(2633609, 1)) {
            for (var i = 0; i < bossevent.length; i++) {
				player.loseItem(2633609, 1)
                player.addPQLog(bossevent[i], -1, 1);
                player.addEventValue(bossevent[i], -1, 1);
            }
            player.addEventValue("每日BOSS重置", 1, 1);
            npc.broadcastPlayerNotice(7, "[副本系統]  玩家 ★★★ " + player.getName() + " ★★★ 重置" + BossName + "副本");
            npc.say("重置成功");
        } else {
            npc.say("你重置物品不足");
        }
} else if (sel == 7) {
    player.runScript("頓凱爾進場困難");
} else if (party == null || player.getId() != party.getLeader()) {
	npc.askMenuA("\r\n\r\n\r\n\r\n#b請玩家先創建隊伍,限制人數#r[" + minPlayers + "-" + maxPlayers + "]#b人隊伍,並且等級在#r[" + minLevel[sel] + "-" + maxLevel[sel] + "]#b之間,讓你的隊長和我對話吧!", true);
} else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
	npc.askMenuA("\r\n\r\n\r\n\r\n#b你需要有一個#r" + minPlayers + "-" + maxPlayers + "#b人的隊伍.!", true);
} else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < party.getMembersCount(map.getId(), 1, 300)) {
	npc.askMenuA("\r\n\r\n\r\n\r\n#b你隊員的等級要在#r[" + minLevel[sel] + "-" + maxLevel[sel] + "]#b之間!", true);
} else if (party.numberOfMembersInChannel() < party.getMembersCount()) {
	npc.say("\r\n\r\n\r\n\r\n#b好像你有隊員在其他地方,請把隊員都召集到這裡!");
} else if (!party.isAllMembersAllowedPQ(event[sel], maxenter[sel])) {
	npc.askMenuA("\r\n\r\n\r\n\r\n#b你隊員#r[" + party.getNotAllowedMember(event[sel], maxenter[sel]) + "]#b次數已經達到上限了。", true);
} else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
	npc.askMenuA("\r\n\r\n\r\n\r\n#b已經有隊伍在進行了,請更換其他頻道嘗試。", true);
} else {
	if (warn) {
		npc.broadcastPlayerNotice(8, "[BOSS提示] : " + player.getName() + " 隊伍人數：" + party.getMembersCount() + " 進入了 [" + BossName + "]副本。");
	}
}
