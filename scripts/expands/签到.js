
var tz13 = "#fEffect/CharacterEff/1112925/0/0#"; //藍星

var a10 = "#fEffect/ItemEff.img/1112013/1/5#" //爱心5-9





var txt="\r\n\r\n\r\n\t\t\t#fs16##b#L0##L0#"+a10+"我要簽到#l#L1#"+a10+"簽到兌換#l";
let selection=npc.askMenuA(txt);
if(selection==0){
	var count =player.getEventValue("簽到");
	if(count==0){
		player.gainItem(2439483,1);
		player.addEventValue("簽到",1,1);
		npc.askMenuA("\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t\t#fs16##e#r簽到成功");
	}else{
		npc.askMenuA("\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t\t#fs16##e#r請明天再來");
	}
}else{
	player.runScript("签到兑换");
}





function getEventCount(eventName) {

	var sql = "select value,time from accounts_event where accounts_id = ? and event =? ";

	var result = player.customSqlResult(sql, player.getAccountId(), eventName);

	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("value");
		}
	} else {
		var sql = "insert into  accounts_event (accounts_id,world,event,type,value) values(?,?,?,?,?)";

		var result = player.customSqlInsert(sql, player.getAccountId(), player.getWorld(), eventName, 0, 0);
		return 0;
	}

}

function setEventCount(eventName, type, value) {

	var sql = "update accounts_event set type=?,value=value+? where accounts_id=? and event=?";

	var result = player.customSqlUpdate(sql, type, value, player.getAccountId(), eventName);

}