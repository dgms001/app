/**
* 角色改名 
* by dgms
* qq381991414
**/
let needItem = 2437563;//需要的道具
let characters = getCharacters();
let mapA = map.getId();
if (mapA == 993001100) { //限制開啟地圖
	//player.showSystemMessage("在卡BUG頭蓋骨給你打出來 操!!");
} else {
	npc.say("#fs21##e#r請使用分身修改需要更名的角色\r\n\r\n需要一張#v" + needItem + "#");
	if (characters == null) {
		npc.say("沒有查找到賬號信息，請聯系管理員");
	} else {
		let str = "#fs21##e#r請選擇需要修改的角色:\r\n"
		for (let i = 0; i < characters.size(); i++) {
			if (player.getName() != characters.get(i).get("name"))
				str += "#fs16##e#b#L" + i + "# " + characters.get(i).get("name") + " #l\r\n"
		}
		let selected = npc.askMenuA(str);
		let text = npc.askText("#d為" + characters.get(selected).get("name") + "改名,輸入新名字", "", 0, 12);
		if (checkName(text)) {
			if (player.hasItem(needItem, 1)) {
				player.loseItem(needItem, 1);
				player.customSqlUpdate("UPDATE `characters` SET `name`= '" + text + "' WHERE `id`='" + characters.get(selected).get("id") + "'");
				player.customSqlUpdate("UPDATE `dgms_zhanling` SET `name`= '" + text + "' WHERE `name`='" + characters.get(selected).get("name") + "'");
				npc.say("改名成功！");
			} else {
				npc.say("你沒有#v" + needItem + "#");
			}
		} else {
			npc.say("這個名字有人用了哦！");
		}
	}
}


function checkName(text) {
	var sql = "select id from characters where name='" + text + "';";
	var push = player.customSqlResult(sql);
	if (push.size() > 0) {
		return false;
	} else {
		return true;
	}
}

function getCharacters() {
	var sql = "select id,name from characters where accountid='" + getAccountId() + "';";
	var push = player.customSqlResult(sql);
	if (push.size() > 0) {
		return push;
	} else {
		return null;
	}
}


function getAccountId() {
	var sql = "select name,id from accounts where id=" + player.getAccountId() + " order by name limit 1;";
	var push = player.customSqlResult(sql);
	var id = -1;
	if (push.size() > 0) {
		var result = push.get(0);
		id = result.get("id");
	}
	return id;
}