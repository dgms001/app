/**
* 師徒系統 CC 835456564 
**/
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var ttt1 = "#fEffect/BasicEff/MainNotice/maple9th/Appear/9#";
var wi1 = "#fUI/SoulUI.img/DungeonMinimap/BtMaxi/pressed/0#";
var wi2 = "#fUI/RunnerGame.img/RunnerGameUI/UI/BtClose/normal/0#";
var wi3 = "#fUI/piggyBarMinigame.img/crunch/1#";
var eff1 = "#fEffect/CharacterEff/1112924/0/0#";
var eff2 = "#fEffect/CharacterEff/1112925/0/0#";
var eff3 = "#fEffect/CharacterEff/1112924/0/0#";

let cat1="#fItem/Pet/5000000.img/alert/0#";
let cat2="#fItem/Pet/5000000.img/fly/0#";
let cat3="#fItem/Pet/5000000.img/cry/0#";
let tu1 = "#fItem/Cash/0501.img/05010045/effect/stand1/1#"
let tu2 = "#fItem/Cash/0501.img/05010002/effect/default/7#"
let tu3 = "#fUI/NameTag/medal/758/w#"
let tu4 = "#fEffect/SetEff.img/245/effect/28#"
let tu5 = "#fUI/NameTag/medal/758/e#"
let tu6 = "#fUI/NameTag/medal/758/c#"
let fy = "#fUI/RunnerGame.img/RunnerGameUI/UI/Point/1#";
let fy1 = "#fUI/RunnerGame.img/RunnerGameUI/UI/Point/2#";
let dz = "#fUI/GuildMark/Mark/Etc/00009020/1#";
let dz1 = "#fEffect/CharacterEff/1003393/1/0#";
let star = "#fEffect/CharacterEff/1051294/1/1#"
//玩家最多可以帶的”未出師“的數量
var maxNoGra = 10;
//拜師等級
var minLevel = 30;
var maxLevel = 220;

//每個階段需要的出師數量
var upLevelNum = [2,5,10,15,20,25];
//每個階段的稱號
var upLevelTitle = ["初為人師","為人師表","循循善誘","誨人不倦","厚得樹人","桃李天下"];
//師傅每日獎勵
var teacherItemList = Array(
	Array(
		Array(4031997,1),  //國慶紀念幣
		Array(2614068,1),  //3千萬破攻石頭
		Array(4031997,3),  //蘑菇金幣
		Array(4001006,5),  //火焰羽毛
		Array(4000059,25), //藍色蝸牛殼
		Array(4032053,25)  //紅色蝸牛殼
	),
	Array(
		Array(4031997,2),  //國慶紀念幣
		Array(2614068,2),  //3千萬破攻石頭
		Array(4031997,5),  //蘑菇金幣
		Array(4001006,10),  //火焰羽毛
		Array(4000059,50), //藍色蝸牛殼
		Array(4032053,50)  //紅色蝸牛殼
	),
	Array(
		Array(4031997,3),  //國慶紀念幣
		Array(2614068,3),  //3千萬破攻石頭
		Array(4031997,8),  //蘑菇金幣
		Array(4001006,15),  //火焰羽毛
		Array(4000059,75), //藍色蝸牛殼
		Array(4032053,75)  //紅色蝸牛殼
	),
	Array(
		Array(4031997,4),  //國慶紀念幣
		Array(2614068,4),  //3千萬破攻石頭
		Array(4031997,10),  //蘑菇金幣
		Array(4001006,20),  //火焰羽毛
		Array(4000059,100), //藍色蝸牛殼
		Array(4032053,100)  //紅色蝸牛殼
	),
	Array(
		Array(4031997,5),  //國慶紀念幣
		Array(2614068,5),  //3千萬破攻石頭
		Array(4031997,12),  //蘑菇金幣
		Array(4001006,25),  //火焰羽毛
		Array(4000059,125), //藍色蝸牛殼
		Array(4032053,125)  //紅色蝸牛殼
	),
	Array(
		Array(4031997,6),  //國慶紀念幣
		Array(2614068,6),  //3千萬破攻石頭
		Array(4031997,15),  //蘑菇金幣
		Array(4001006,30),  //火焰羽毛
		Array(4000059,150), //藍色蝸牛殼
		Array(4032053,150)  //紅色蝸牛殼
	)
);

//解除關係需要的冒險幣
var byeMoney = 100000000;
//出師等級
var graduateLevel = 270;
//出師獎勵
var graduateReward = Array(
        Array(4031997,5), //國慶紀念幣
		Array(5062002,20),//高級神奇魔方
		Array(5062009,20),//超級神奇魔方
		Array(5062010,20),//終級神奇魔方
		Array(5062024,20),//閃炫魔方
		Array(5062500,20),//大師附加神奇魔方
		Array(5062503,20),//附加記憶魔方
		Array(2049124,10),//正向混沌卷軸
		Array(2340000,10),//祝福卷軸
		Array(5064000,10),//防爆卷軸
		Array(2049750,1), //S級潛能卷軸80%
		Array(2048307,1)  //特殊附加潛能附加古卷
);

var nowLevelIndex = -1;

var myStudentInfo = getStudentInfo();
var myTeacherInfo = getTeacherInfo();

			
var text ="";
text += "#b" + wi3 + " 升級所需出師人數為：";
for(var i = 0;i<upLevelNum.length;i++){
	text += "#r"+upLevelNum[i] + "#b - ";
}
text = text.substring(0,text.length-2) + "\r\n";
if(myStudentInfo != null){
	for(var i=upLevelNum.length-1;i>=0;i--){
		if(parseInt(myStudentInfo.get(0).get("graduatedNum").toString()) >= upLevelNum[i]){
			nowLevelIndex = i;
			break;
		}
	}
	text += "#b" + wi3 + " 教學等級 [ #r"+(nowLevelIndex+1)+"#b ]，稱謂 [ #r"+upLevelTitle[nowLevelIndex]+"#b ]\r\n";
	text += "#b" + wi3 + " 您當前有 [ #r"+myStudentInfo.size()+"#b ] 位徒弟";
	text += "   #b" + wi3 + " 已出師數 [ #r"+myStudentInfo.get(0).get("graduatedNum")+"#b ] 位徒弟\r\n";
}else{
	text += "#b" + wi3 + " 您目前還沒有收徒哦！";
}
if(myTeacherInfo != null){
	text += "#b" + wi3 + " 你的師父 [ #r" + myTeacherInfo.get(0).get("teacherName") + "#b ] #b" + wi3 + " 出師狀態 [ #r" + (myTeacherInfo.get(0).get("graduated")==0?"未出師":"已出師") + "#b ] \r\n";
}else{
	text += "#b" + wi3 + " 你目前還沒有拜師哦！\r\n";
}
text += "#b#L0#" + wi2 + "怎樣拜師或收徒？\t#b#L4#" + wi2 + "師傅成就獎勵表查看#l\r\n\r\n";
text += "  #e#b我是師傅              我是徒弟#n\r\n";
text += "#b#L1#" + wi1 + " 我來帶徒弟拜師#l     " + "#L5#" + wi1 + " 我要進行出師儀式#l\r\n";
text += "#L2#" + wi1 + " 我想查看/清理徒弟#l  " + "#L6#" + wi1 + " 我想離開師門#l\r\n";
text += "#L3#" + wi1 + " 我想領取師傅獎勵#l"

var selected = npc.askMenuA(text,9900000);
if(selected == 10086){
	player.runScript("百寶功能")
}else{
	switch (selected){
		case 0:
			//怎樣拜師或收徒？
			
			text = head;
			text += icon + " #b#e如何拜師？#n#k\r\n";
			text += "\t等級 "+minLevel+"~"+maxLevel+" 級的玩家與符合收徒的玩家組隊，由師傅擔任隊長，在我這裡進行拜師儀式，徒弟只能同時拜一位玩家為師，如果自行取消師徒關係，需要 #r1#k 天後才能拜新的師傅。\r\n";
			text += icon + " #b#e如何收徒？#n#k\r\n";
			text += "\t等級大於 #r250#k 級的玩家與符合拜師的玩家組隊，由師傅擔任隊長，在我這裡進行拜師儀式，每位師傅同時最多可收取 #r5#k 名徒弟。\r\n";
			text += icon + " #b#e如何出師？#n#k\r\n";
			text += "\t玩家等級大於 #r250#k 級時，可以#b#e單人#n#k在我這裡進行出師儀式。出師後，玩家將獲得出師獎勵。\r\n";
			text += icon + " #b#e什麼是師徒獎勵？#n#k\r\n";
			text += "\t當徒弟等級大於 #r"+graduateLevel+"#k 級時，可以來我這裡出師。\r\n";
			npc.askMenuA(text,9900000);
			player.runScript("師徒系統")
			break;
		case 1:
			if(player.getLevel() >= 250 &&( myStudentInfo == null || (myStudentInfo.size() - parseInt(myStudentInfo.get(0).get("graduatedNum").toString())) < maxNoGra)){
				//帶人拜師
				if (party == null || player.getId() != party.getLeader() || party.getLocalMembers().length != 2) {
					npc.say("請滿足以下條件再來找我吧！\r\n#b1.您需要與您想收的徒弟進行組隊！\r\n2.隊伍只有你們兩人\r\n3.需要您是隊長！\r\n4.徒弟等級為 #r" + minLevel + " ~ " + maxLevel,9900000);
				}else{
					var members = party.getLocalMembers();
					var myIndex = -1;
					var studentIndex = -1;
					for (var i = 0; i < members.length; i++) {
						if(members[i].getId() == player.getId()){
							myIndex = i;
							break;
						}
					}
					if(myIndex == 0){
						studentIndex = 1;
					}else{
						studentIndex = 0;
					}
					//studentIndex = 0;
					var YN = npc.askYesNo("#b您是否確定想收 #r"+members[studentIndex].getName()+" #b為徒？",9900000);
					if(YN == 1){
						if(members[studentIndex].getLevel() >= minLevel && members[studentIndex].getLevel() <= maxLevel){
							
							//需要查詢目標玩家是否有師傅
							var sql = "select * from jili_teacher where studentName = '" + members[studentIndex].getName() + "'";
							var push = player.customSqlResult(sql);
							if(push.size() > 0){;
								npc.say("#b你想要收 #r"+members[studentIndex].getName()+" #b為徒,首先得問問他的師傅的意見吧？",9900000);
							}else{
								npc.broadcastNoticeWithoutPrefix("[師徒系統]: 祝賀 "+members[studentIndex].getName()+" 拜入 "+members[myIndex].getName()+" 門下");
								player.customSqlInsert("INSERT INTO `jili_teacher` (`teacherName`, `studentName`,`graduated`) VALUES ('" + members[myIndex].getName()+ "', '" + members[studentIndex].getName() + "','0')");
								npc.say("成功拜師！",9900000);
							}
							
						}else{
							npc.say("#b對方等級不滿足#r(" + minLevel + " ~ " + maxLevel+")#b！無法拜師！",9900000);
						}
					}else{
						npc.say("真遺憾，想好了再來吧！",9900000);
					}
					
				}
			}else{
				npc.say("#b您無法收徒弟！原因可能：\r\n1.最多同時帶 #r"+maxNoGra+" #b個未出師徒弟！\r\n2.您的等級未到250級",9900000);
			}
			break;
		case 2:
			//清理查看門戶
			text = "#b以下是你的徒弟資訊(如果需要清理門戶,請點擊對應徒弟):\r\n\r\n"
			try{
				for(var i = 0;i<myStudentInfo.size();i++){
					text += "#L"+i+"# #b" + myStudentInfo.get(i).get("studentName") + " #b等級:"+myStudentInfo.get(i).get("studentLevel") + " "+(myStudentInfo.get(i).get("graduated") == 0?" #r未出師":" #g已出師") +" \r\n"
				}
				selected = npc.askMenu(text,9900000);
				if(myStudentInfo.get(selected).get("graduated") == 1){
					npc.say("不能與已出師的徒弟解除關係哦！",9900000);
				}else{
					var YN = npc.askYesNo("#b你是否確認與 #r"+myStudentInfo.get(selected).get("studentName")+" #b解除師徒關係？\r\n需要花費冒險幣 #r"+byeMoney,9900000);
					if(YN == 1){
						if(player.hasMesos(byeMoney)){
							player.loseMesos(byeMoney);
							player.customSqlUpdate ("devare from jili_teacher where studentName = '"+myStudentInfo.get(selected).get("studentName")+"'");
							npc.broadcastNoticeWithoutPrefix("[師徒系統]: "+myStudentInfo.get(selected).get("studentName")+" 練功不勤！被 "+player.getName()+" 逐出師門！");
							npc.say(myStudentInfo.get(selected).get("studentName")+"已離開師門",9900000);
						}else{
							npc.say("你的錢不夠哦！",9900000);
						}
					}else{
						npc.say("再想想吧！",9900000);
					}
				}
			}catch(e){
				npc.say("沒有找到徒弟資訊");
			}
			
			break;
		case 3:
			//老師每日獎勵
			try{
				if(nowLevelIndex == -1){
					npc.say("你的教師等級不足，沒有獎勵！",9900000);
				}else{
					if(nowLevelIndex == 1){
						getTaskCount(1,18);
					}else if(nowLevelIndex == 3){
						getTaskCount(1,19);
					}
					if (player.getFreeSlots(1) < teacherItemList[nowLevelIndex].length || player.getFreeSlots(2) < teacherItemList[nowLevelIndex].length || player.getFreeSlots(3) < teacherItemList[nowLevelIndex].length || player.getFreeSlots(4) < teacherItemList[nowLevelIndex].length || player.getFreeSlots(5) < teacherItemList[nowLevelIndex].length) {
						npc.say("請清理背包",9900000);
					}else if(player.getPQLog("老師每日福利")>0){
						npc.say("你今天已經領過了！",9900000);
					}else{
						var str = "#b恭喜你獲得今日#r【"+upLevelTitle[nowLevelIndex]+"】#b教師福利：\r\n";
						for(var i = 0; i < teacherItemList[nowLevelIndex].length ;i++){
							str += "\r\n#v"+teacherItemList[nowLevelIndex][i][0]+"# x "+teacherItemList[nowLevelIndex][i][1]+"\r\n"
							player.gainItem(teacherItemList[nowLevelIndex][i][0],teacherItemList[nowLevelIndex][i][1]);
						}
						player.addPQLog("老師每日福利",1,1);
						npc.say(str,9900000);
					}
				}
			}catch(e){
				npc.say("不滿足領取要求！");
			}
			break;
		case 4:
			//老師每日獎勵查看
			text = head;
			//text = icon + " #b#e#n#k\r\n";
			text += icon + " #r#e[初為人師]：#b";
			for(var i = 0; i<teacherItemList[0].length;i++){
				text += " #v"+teacherItemList[0][i][0]+"#x" + teacherItemList[0][i][1] ;
			}
			text += "\r\n";
			text += icon + " #r#e[為人師表]：#b";
			for(var i = 0; i<teacherItemList[1].length;i++){
				text += " #v"+teacherItemList[1][i][0]+"#x" + teacherItemList[1][i][1] ;
			}
			text += "\r\n";
			
			text += icon + " #r#e[循循善誘]：#b";
			for(var i = 0; i<teacherItemList[2].length;i++){
				text += " #v"+teacherItemList[2][i][0]+"#x" + teacherItemList[2][i][1] ;
			}
			text += "\r\n";

			text += icon + " #r#e[誨人不倦]：#b";
			for(var i = 0; i<teacherItemList[3].length;i++){
				text += " #v"+teacherItemList[3][i][0]+"#x" + teacherItemList[3][i][1] ;
			}
			text += "\r\n";

			text += icon + " #r#e[厚得樹人]：#b";
			for(var i = 0; i<teacherItemList[4].length;i++){
				text += " #v"+teacherItemList[4][i][0]+"#x" + teacherItemList[4][i][1] ;
			}
			text += "\r\n";

			text += icon + " #r#e[桃李天下]：#b";
			for(var i = 0; i<teacherItemList[5].length;i++){
				text += " #v"+teacherItemList[5][i][0]+"#x" + teacherItemList[5][i][1] ;
			}
			text += "\r\n";
			text += "\r\n";
			npc.askMenuA(text,9900000);
			player.runScript("師徒系統")
			break;
		case 5:
			//出師
			if(myTeacherInfo == null){
				npc.say("#b你連師傅都沒有，談什麼出師？",9900000);
			}else if(player.getLevel() < graduateLevel){
				npc.say("#b加油修煉吧！達到 #r"+graduateLevel+" #b級,就可以出師獲得獎勵啦！",9900000);
			}else if(myTeacherInfo.get(0).get("graduated")==1 || player.getPQLog("出師獎勵")){
				npc.say("#b你已經進行了出師禮儀，並且領取了獎勵，不可再次領取！",9900000);
			}else if (player.getFreeSlots(1) < graduateReward.length || player.getFreeSlots(2) < graduateReward.length || player.getFreeSlots(3) < graduateReward.length || player.getFreeSlots(4) < graduateReward.length || player.getFreeSlots(5) < graduateReward.length) {
				npc.say("#b請清理背包,至少需要 "+graduateReward.length +" 格空餘。",9900000);
			}else {
				//領獎
				var ttt = "#b恭喜你出師!這是你師傅給你準備的禮物！\r\n";
				for(var i = 0;i<graduateReward.length;i++){
					player.gainItem(graduateReward[i][0],graduateReward[i][1]);
					ttt += "#v"+graduateReward[i][0]+"##z"+graduateReward[i][0]+"# x "+graduateReward[i][1]+"\r\n"
				}
				player.addPQLog("出師獎勵",10,1500);
				player.customSqlUpdate ("update jili_teacher set graduated = 1 where studentName = '"+player.getName()+"'");
				npc.broadcastNoticeWithoutPrefix("[師徒系統]: "+myTeacherInfo.get(0).get("teacherName")+" 的徒弟 "+player.getName()+" 刻苦修煉！成功出師！");
				npc.say(ttt,9900000);
			}
			
			break;
		case 6:
			//離開師門
			if(myTeacherInfo != null){
				if(myTeacherInfo.get(0).get("graduated")==0){
					text = "#b是否確定離開你的師父 [ #r" + myTeacherInfo.get(0).get("teacherName") + "#b ] #r(需要金幣:"+byeMoney+")?\r\n";
					var YN = npc.askYesNo(text,9900000);
					if(YN == 1){
						if(player.hasMesos(byeMoney)){
							player.loseMesos(byeMoney);
							player.customSqlUpdate ("devare from jili_teacher where studentName = '"+player.getName()+"'");
							npc.broadcastNoticeWithoutPrefix("[師徒系統]: "+myTeacherInfo.get(0).get("teacherName")+" 誤人子弟！ "+player.getName()+" 憤憤的離開了師門！");
							npc.say("已離開師門",9900000);
						}else{
							npc.say("你的錢不夠哦！",9900000);
						}
					}else{
						npc.say("好好考慮清楚吧！",9900000);
					}
				}else{
					text = myTeacherInfo.get(0).get("teacherName") + "教導你畢業，可不能忘本哦！"
					npc.say(text,9900000);
				}
			}else{
				text = "#b你目前還沒有拜師哦！\r\n";
				npc.say(text,9900000);
			}
			break;
		
	}
}



//獲取成就次數
function getTaskCount(count ,taskId){
	player.showSystemMessage("【成就系統】:成就編號:"+taskId+" 完成次數+1")
	player.customSqlUpdate("update jili_task_character set taskCount = taskCount + " + parseInt(count) +" where taskId = '" + taskId + "' and characterId = '" + player.getId() +"'");
}



function getTeacherInfo(){
    var sql = "select * from jili_teacher where studentName = '" + player.getName() + "'";
    var push = player.customSqlResult(sql);
	if(push.size() > 0){;
		return push;
	}else{
		return null;
	}
}
function getStudentInfo(){
	var sql = "select jt.*,c.level as studentLevel,(select count(0) from jili_teacher where teacherName = '" + player.getName() + "' and graduated = 1) as graduatedNum from jili_teacher jt left join characters c on studentName = c.`name`  where jt.teacherName = '" + player.getName() + "'"
    var push = player.customSqlResult(sql);
	if(push.size() > 0){
		return push;
	}else{
		return null;
	}
}