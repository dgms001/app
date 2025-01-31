//全服福利 by 幾裡

var difHour = 25; //超過的時間，小時算，之後就不能領了

var ttt ="#fItem/Cash/0501.img/05010056/effect/walk1/"
var ttt1 = "#fUI/UIWindow.img/Quest/icon2/0#";
var ttt2 = "#fUI/Basic.img/icon/arrow#";

var mogus = new Array(4000444,4009388,4009390,4032459)

//額外的獎勵 修改提示用
let rewardE = Array(
	Array("組隊積分周排行第一名",2431241)
);


var str = "";
str += "#fn宋體#"
str += "\r\n#b#e冒險家，這裡可以領取管理員發放的全服在線福利哦！#n#k\r\n"
str += "發放時間：每天晚上的 9點30分準時發放！\r\n"
str += "領取規則：發放之前，保持在線即可獲得！\r\n"
str += "領取時限：請在24小時內領取，逾期無效！\r\n"
str += "注意事項：發放之前，請勿進入官方商城，拍賣場！\r\n"
str += "因自身原因導致無法領取全服福利的玩家無法補領！\r\n不過不用灰心哦，每天都有的，調整好心態，祝您游戲愉快！\r\n"
str += "#L0#"+ttt1+"#r查看每日福利#l"
str += "#L1#"+ttt1+"#r領取我的福利#l\r\n\r\n\r\n"
if(player.isGm()){
	str += "#L2#管理員發放福利#l";
}
let selected = npc.askMenu(str,9300011);

if(selected == 1){
	//領取福利
	while(true){
		let sql = "select * from jili_world_gifts where accountName = '"+getAccountName()+"' and state = 0 and TIMESTAMPDIFF(HOUR, date, NOW()) < '"+difHour+"'";
		let push = player.customSqlResult(sql);
		if (push.size() == 0) {
			npc.say("#b暫無可領取福利！",9300011);
		}else{
			str = "#b請選擇領取哪一個福利:\r\n";
			for(let i = 0;i<push.size();i++){
				let signle = push.get(i);
				str += "#L"+i+"# #r福利 發放日期:"+signle.get("date").toString().substring(0,19)+"#l\r\n";
			}
			selected = npc.askMenu(str,9300011);
			let gift = push.get(selected);
			let giftId = gift.get("id");
			let giftItemId = gift.get("itemId");
			let giftItemNumber = gift.get("itemNumber");
			let giftDate = gift.get("date").toString().substring(0,19);
			
			str = "是否領取#v"+giftItemId+"##z"+giftItemId+"# x "+giftItemNumber;
			let YN = npc.askYesNo(str);
			if(YN == 1){
				if(player.canGainItem(giftItemId,giftItemNumber)){
					var index = -1;
					for(var i = 0; i<rewardE.length;i++){
						if(rewardE[i][1] == giftItemId){
							index = i;
						}
					}
					if(index == -1){
						npc.broadcastPlayerNotice(3,"[全服福利]：玩家 "+player.getName()+" 在櫻花村 -NPC <楓之谷冰淇淋獎品發放部>處領取了管理員在"+giftDate+"發放的福利！")
					}else{
						npc.broadcastPlayerNotice(3,"[周排行獎勵]：玩家 "+player.getName()+" 在櫻花村 -NPC <楓之谷冰淇淋獎品發放部>處領取了 "+rewardE[index][0]+" 的獎勵！")
					}
					
					player.customSqlUpdate("update jili_world_gifts set state = 1,getDate = now() where id = '" + giftId + "';");
					player.gainItem(giftItemId,giftItemNumber);
					npc.say("領取成功。");
				}else{
					npc.say("請清理背包");
				}
				
			}else{
				npc.say("想好再來吧");
			}
		}
	}
}else if(selected == 2){
	//發放福利
	while(true){
		str = "請輸入發放的物品代碼";
		let type = npc.askNumber(str,"1",1,9999999);
		let items = player.makeItemWithId(type);
		if(items == null){
			npc.say("物品代碼不存在 請重新輸入！");
			continue;
		}
		typeTxt = "#v"+type+"# #z"+type+"#"
		str = "請輸入發放"+typeTxt+"的每一份數量（每個人可以獲得多少個）";
		let num = npc.askNumber(str,"1",1,9999999);
        player.customSqlInsert("insert into jili_world_gifts (accountName,itemId,itemNumber,date) select `name` as accountName,'"+type+"' as itemId,'"+num+"' as itemNumber,now() as date from accounts where loggedin = 3");
		map.blowWeather(5120004,"趕緊去<小龍>領取全服福利吧！");
		npc.broadcastPlayerNotice(1,"[全服福利]：管理員發放了全服福利！趕緊去<櫻花村右側>-點擊<獎品發放部>領取吧！")
		npc.broadcastPlayerNotice(2,"[全服福利]：管理員發放了全服福利！趕緊去<櫻花村右側>-點擊<獎品發放部>領取吧！")
		npc.broadcastPlayerNotice(3,"[全服福利]：管理員發放了全服福利！趕緊去<櫻花村右側>-點擊<獎品發放部>領取吧！")
		npc.say("發放成功！");
	}
}else if(selected == 0){
	//每日福利
	str = "";
	str += "#b#e每日福利發放時間為每周一至周日！福利內容為：\r\n";
	str += "#r點券1萬  金幣5000萬  #v2433852# x1 #v2434026# x1 #v2614049# x1";
	str += "#v5062024# x10 #v5062503# x10 #v5062500# x10 #v5062009# x10 ";
	npc.say(str);
}

function getAccountName() {
    var i = -1;
    var sql = "select name,id from accounts where id=" + player.getAccountId() + " order by name limit 1;";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        var name = result.get("name");
    }

    return name;
}