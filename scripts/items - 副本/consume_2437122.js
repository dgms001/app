let event = npc.getEvent("測試副本4");
var sql = "SELECT id,Score  FROM zz_guild_sky ORDER BY Score DESC";
var resultList = player.customSqlResult(sql);
var result = resultList.get(0);
date = new Date();
let week = date.getDay();
let day = date.getDate();
let hour=date.getHours();
let minute=date.getMinutes();



txt ="\r\n";
txt+="城戰事件\r\n";
// if(result.get("id") != 0){
	// txt += "當前城堡被 : #b"+ getNAME(result.get("id")) + " #k 佔據\r\n";
// }else{
	// txt+="#r目前無人佔據,趕快佔領!#k\r\n";
// }
// txt+="\r\n";
if(event != null){
	let guildIdss = event.getVariable("guildIdss");
	for (var i = 0; i < guildIdss.length; i++) {
		txt+=""+ getNAME(guildIdss[i]) +" :  "+event.getVariable(guildIdss[i])+" 分\r\n";
	}
	
}
// txt+="說明:\r\n";
// txt+="公會累積獲得10000分數成功佔據城堡\r\n";
// txt+="同時全公會分數歸0\r\n";
// txt+="倒計時結束前仍可篡位\r\n";
// txt+="\r\n";
// txt+="Q版人形怪物 : 4分\r\n";
// txt+="Q版BOSS怪物 : 10分\r\n";
// txt+="肥胖的嫩寶 : 20分\r\n";
// txt+="得分方式 : 尾刀者公會獲得分數\r\n";

// txt+="由於系統問題 攻擊會判斷二次尾刀實際分數為\r\n";
// txt+="2分兩次 , 5分兩次 , 10分兩次\r\n";

if (event == null && player.isGm()) {
txt+="#L0#GM開啟城戰#l\r\n";
}

txt+="#L1#加入戰場#l\r\n";

if(player.isGm()){
	
txt+="#L2#gm測試功能 限時領取#l\r\n";
}

let sel = npc.askMenuS("" + txt,true);
	if(sel==0){
		if (event == null) {
				let guildId = player.getGuildId();
				let guildName = player.getName();
				// if(player.isGm()){
					event = npc.makeEvent("測試副本4", true, [guildId, player]);
				// }
				
				if (event == null) {
					npc.say("現在世界BOSS還沒有開放，請稍後再試。");
				} else {
					
					//npc.broadcastPlayerNotice(13, "測試副本開始");
				}
		}
	}
	
	if(sel==1){
		if (event == null) {
			npc.say("#fs14##b當前沒有在進行");
		} else {
			let guildId = player.getGuildId();
			let guildName = player.getName();
			let guildIdss = event.getVariable("guildIdss");
			let members = event.getVariable("members");
			player.setEvent(event);
            members.push(player);
			if (event.getVariable(player.getGuildId()) == null){
				guildIdss.push(player.getGuildId());//註冊公會
				event.setVariable(player.getGuildId(), 0);
				player.showSystemMessage("註冊公會成功");
			}
			player.changeMap(993110600, 0);
			player.showDeathCount();
		}
	}
	
	if(sel==2){
		if(week == 0 && hour == 22 && minute >= 30){
			npc.say("123");
		}else{
			npc.say("非領取時間");
		}
	}
	
	
function getNAME(ID) { //轉成中文
    var sql = "select name from guilds where id = '"+ID+"' ";
    var result = player.customSqlResult(sql);
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("name");
        }
    } else {
        return 0;
    }

}