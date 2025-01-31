/* 功能：高級檢索工具 */

player.runScript("高級檢索新模板");
/*
var txt;
var magnifier = "#fCharacter/Weapon/01702403.img/info/iconRaw#";//放大鏡
var n0 = "#fUI/Login.img/RaceSelect_new/deny_login/number/0#";//數字0
var n1 = "#fUI/Login.img/RaceSelect_new/deny_login/number/1#";//數字1
var n2 = "#fUI/Login.img/RaceSelect_new/deny_login/number/2#";//數字2
var n3 = "#fUI/Login.img/RaceSelect_new/deny_login/number/3#";//數字3
var n4 = "#fUI/Login.img/RaceSelect_new/deny_login/number/4#";//數字4
var n5 = "#fUI/Login.img/RaceSelect_new/deny_login/number/5#";//數字5
var n6 = "#fUI/Login.img/RaceSelect_new/deny_login/number/6#";//數字6
var n7 = "#fUI/Login.img/RaceSelect_new/deny_login/number/7#";//數字7
var n8 = "#fUI/Login.img/RaceSelect_new/deny_login/number/8#";//數字8
var n9 = "#fUI/Login.img/RaceSelect_new/deny_login/number/9#";//數字9
var new1 = "#fUI/Login.img/RaceSelect_new/new/0#";//NEW
var GC1 = "#fEffect/CharacterEff/1005267/4/0#";//"+z+"//小選項用
var GC2 = "#fEffect/CharacterEff/1050312/0/0#";//"+z+"//最上面的亮粉
var RS1 = "#fEffect/ItemEff/1004985/effect/jump/0#"; //石靈-1
var RS2 = "#fEffect/ItemEff/1004985/effect/alert/0#"; //石靈-2
var RS3 = "#fEffect/ItemEff/1004985/effect/proneStab/2#"; //石靈-3

	if( player.isGm() == false ){
	//	player.addPQLog("怪物公園獎勵禮拜0",10,1000);
		npc.askMenuA("\t" + GC2 + GC2 + GC2 + GC2 + "\r\n" + "#fs26##r#e\r\n\t\t\t  【警告】\r\n\r\n\t\t本功能僅限管理員使用。\r\n\r\n#r"+ RS1 + RS2 + RS3 + RS1 + RS2 + RS1 + RS3 + RS2 + RS1,true);
		
	}
//player.addEventValue("會員積分",100,1000);
	txt = "";
	txt += "\t\t#fs26##r#e" + magnifier + " 高級檢索工具 " + magnifier + "\r\n";
	
	
	//txt += "\t\t #fs20##fc0xFF1e90ff##e" + new1 + " 當前資料版本 - " + n2 + " " + n3 + " " + n7 + "\r\n";
	test = Array("道具檢索","地圖檢索","怪物檢索","測試");
	for ( var i=0; i<test.length; i++) {
		txt += "#fs14##b#e#L"+i+"#" +GC1+ ""+test[i]+"#l  "; if ((i+1)%4==0){txt += "\r\n";}
	}
	test1 = Array("裝備飾品","萌獸總商","錢或點數","道具","跑旗介面","清理背包","BOSS選單","圖片瀏覽","獎勵發送","擴充倉庫","查閱改名","時限道具","傳送在線","事件檢查","gm巡邏","機器人副本","玩具副本");
	for ( var i=0; i<test1.length; i++) {
		txt += "#fs14##b#e#L"+(i+20)+"#" +GC1+ ""+test1[i]+"#l  "; if ((i+1)%4==0){txt += "\r\n";}
	}
	//txt += "#fs14##b#e#L0#" + GC1 + "道具檢索#l #L1#" + GC1 + "地圖檢索#l #L2#" + GC1 + "怪物檢索#l #L3#" + GC1 + "NPC檢索#l #L4#" + GC1 + "測試#l\r\n";
	//txt += "#fs14##b#e#L20#" + GC1 + "GM裝備+飾品#l #L21#" + GC1 + "GM武器#l #L22#" + GC1 + "獲得錢#l\r\n";
	//txt += "\r\n#L50#" + GC1 + "楓幣 樂豆 楓點 餘額 [一鍵歸零]#l ";
	//txt += "\r\n #r" + RS1 + RS2 + RS3 + RS1 + RS2 + RS1 + RS3 + RS2 + RS1;
	//txt += "\r\n#L1#NPC#l";
	
	//player.modifyCashShopCurrency(1,-99697999);
	var selection = npc.askMenuA(txt);

		switch (selection) {
			case 0:
				player.runScript("道具檢索");
				break;
			case 1:
				player.runScript("地圖檢索");
				//npc.say("你好，該功能目前暫未開放！");
				break;
			case 2:
				player.runScript("怪物檢索");
				//npc.say("你好，該功能目前暫未開放！");
				break;
			case 3:
				player.runScript("NPC檢索");
				//npc.say("你好，該功能目前暫未開放！");
				break;
			case 4:
				player.runScript("new_萌獸卡修正");
				//npc.say("你好，該功能目前暫未開放！");
				break;
			case 20:
				player.runScript("套裝gm");
				break;
			case 21:
				equip = player.getInventorySlot(2, 1);
				if(equip == null){
					npc.say("消耗欄第一格 放上萌獸");
				}else{
				txt = "#k\r\n消耗欄第一格是萌獸的話\r\n#r"
				txt += "#L40016#最終傷害#l   ";
				txt += "#L40043#持續時間#l   ";
				txt += "#L40040#無視防禦#l\r\n";
				txt += "#L40029#魔法攻擊#l   ";
				txt += "#L40028#物理攻擊#l\r\n";
				txt += "#L40044#依照被動#l\r\n\r\n";
				txt += ""+equip.getPotential(1)+"#l\r\n";
				txt += ""+equip.getPotential(2)+"#l\r\n";
				txt += ""+equip.getPotential(3)+"#l\r\n";
				let sel1 = npc.askMenuS("#b選擇第一條屬性"+txt);
				let sel2 = npc.askMenuS("#b選擇第二條屬性"+txt);
				let sel3 = npc.askMenuS("#b選擇第三條屬性"+txt);
				equip.setPotential(1,[sel1]);
				equip.setPotential(2,[sel2]);
				equip.setPotential(3,[sel3]);
				player.updateItem(1,equip);
				}
				break;
			case 22:
				let number;
				ITEMM = Array("樂豆","楓點","楓幣","餘額","無");
				txt = "\r\n#e#fs16#";
					for (var i = 0; i < ITEMM.length; i++) {
				txt += " #L"+i+"##b"+ITEMM[i]+"#l ";
					}
				var sel = npc.askMenu(txt);
				
				number = npc.askNumber("輸入你要的#r"+ITEMM[sel]+"，#k數量\r|n(最大100e-1)", 1, 1, 999999999);
				if (sel == 0) {
					player.modifyCashShopCurrency(1,number);
				}if (sel == 1) {
					player.modifyCashShopCurrency(2,number);
				}if (sel == 2) {
					player.gainMesos(number);
				}if (sel == 3) {
					gainHyPay(number);//增加餘額
				}if (sel == 4) {
					
				}
				npc.say("獲得 " + number + " "+ITEMM[sel]+"");
				
				break;
			case 23:
				道具ui();
				break;
			case 24:
				跑旗UI();
			//updateActiveStatus("雪原跑旗", 1);
				break;
			case 25:
				清理背包();
				break;
			case 26:
				BOSS();
				break;
			case 27:
				player.runScript("圖片瀏覽");
				break;
			case 28:
				player.runScript("獎勵發送");
				break;
			case 29:
				addtrunk();
				npc.say("帳號倉庫數量=4的玩家，離線時使用可套用128格");
				break;
			case 30:
				改名道具();
				break;
			case 31:
				player.runScript("時限道具");
				break;
			case 32:
				player.runScript("傳送在線");
				break;
			
			case 33:
				player.runScript("事件檢查");
				break;
			case 34:
				player.runScript("gm進場");
				break;
			case 35:
				player.runScript("機器人副本進場");
				break;
			case 36:
				player.runScript("玩具副本進場");
				break;
				
			case 50:
				*//*if (npc.makeEvent("SKY2", false, party) == null) {
}*//*
player.loseMesos(player.getMeso());
player.modifyCashShopCurrency(1,-player.getCashShopCurrency(1));
player.modifyCashShopCurrency(2,-player.getCashShopCurrency(2));
gainHyPay(-getHyPay(1));
break;
}



function cashui2() {
	
}

function gainHyPay(number) {
var sql = "select * from hypay where accname = '" + player.getAccountName() + "'";
var push = player.customSqlResult(sql);
if (push.size() > 0) {
var sql = "update hypay set pay =pay+? where accname = '" + player.getAccountName() + "';";
player.customSqlUpdate(sql, number);
} else {
player.customSqlInsert("INSERT INTO `hypay` (`accname`, `name`,`pay`) VALUES ('" + player.getAccountName() + "', '" + player.getName() + "'," + number + ")");
}
}

function getHyPay(type) {
var sql = "select * from hypay where accname = '" + player.getAccountName() + "'";
var push = player.customSqlResult(sql);
if (push.size() > 0) {
var result = push.get(0);
if (type == 1) {
var pay = result.get("pay");
} else if (type == 2) {
var pay = result.get("payUsed");
} else if (type == 3) {
var pay = result.get("payReward");
}
} else {
player.customSqlInsert("INSERT INTO `hypay` (`accname`, `name`) VALUES ('" + player.getAccountName() + "', '" + player.getName() + "')");
return getHyPay(1);
}

return pay;
}


function 跑旗UI() {
let txt = "跑旗介面\r\n";	tt=Array("跑旗資料庫手key","飛翔功能","飛翔關閉","忍1階跳過","enemap","忍耐寫入rank","控制之神跳躍","","","","","",);
for ( var i=0; i<tt.length; i++) {
txt += " #L"+i+"#"+tt[i]+"#l  ";
if((i+1)%3==0){txt += "\r\n";}
}
var sel = npc.askMenu(txt);
switch(sel){
case 0:
txt = "";
txt += "是否將updateActiveStatus(雪原跑旗, number) UPDATE sql\r\n";
txt += "至js調整 sql = UPDATE 功能:刷新或覆蓋\r\n";
txt += "或者sql = insert INTO 功能:新建或寫入\r\n";
var YN = npc.askYesNo(txt);
if(YN==1){
number = npc.askNumber("輸入0-5", 0, 0, 5);
updateActiveStatus("雪原跑旗", number);
} else {
npc.say("你選擇了否");
}
break;
case 1:
player.useSkillEffect(1026, 1);
break;
case 2:
player.cancelSkillEffect(1026);
break;
case 3:
player.updateQuestRecordEx(11891, "kaiguang", 1);
player.changeMap(910130100);
break;
case 4:
player.changeMap(910130102);
break;
case 5:
//player.runNpc("bush2");
var questid = 11891;
var timestamp = (new Date()).getTime()
player.updateQuestRecordEx(questid, "enddate", timestamp);//任務結束時間

var second = parseFloat((parseInt(player.getQuestRecordEx(questid, "enddate")) - parseInt(player.getQuestRecordEx(questid, "startdate"))) / 1000);
var sql = "select * from jili_pk_rank where `character` = '" + player.getName() + "' and type =3";
var push = player.customSqlResult(sql);

if (push.size() > 0) {
if (parseFloat(push.get(0).get("second")) > second) {
var sql = "update jili_pk_rank set second = '" + second + "' where `character` = '" + player.getName() + "' and type = 3";
player.customSqlUpdate(sql);
player.dropMessage(11, "用時:" + second + "秒,重新整理紀錄！");
}
player.dropMessage(11, "用時" + second + "秒");
} else {
player.customSqlInsert("INSERT INTO `jili_pk_rank` (`character`, `second`,`date`,`type`) VALUES ('" + player.getName() + "', '" + second + "' ,now(),'3')");
player.dropMessage(11, "用時:" + second + "秒,重新整理紀錄！");
}
player.updateQuestRecordEx(11891, "kaiguang", 4);
break;
case 6:
player.useSkillEffect(80011039, 1);
break;
}
}

function updateActiveStatus(name, status) {
var sql = "UPDATE jili_active_status SET status = '" + status + "' where activeName = '" + name + "';";//疑問 有兩個分號; 
//			更新 		資料庫		 寫入 列表 ='"+值+"'		  在or對指定	列表 = '"+值+"';
	
//var sql = "insert INTO jili_active_status(activeName,status) VALUES ('" + name + "','" + status + "')";/(SQL新建
//	對SQL     寫入			資料庫			(列表,列表)			寫入值		(值,值)
player.customSqlUpdate(sql);
}

function 清理背包() {
 
qq3 = "#fUI/EventShop/adventureShop/GradeBuyer/2#"

txt = "可以用正設鎖定背包欄排除刪除\r\n";
txt += "#fs14##n#b\r\n";
txt += "#L1#"+qq3+"刪除裝備欄位#l #L2#"+qq3+"刪除消耗欄位#l\r\n";
txt += "#L4#"+qq3+"刪除其他欄位#l #L3#"+qq3+"刪除裝飾欄位#l\r\n";
txt += "#L5#"+qq3+"刪除特殊欄位#l #L6#"+qq3+"刪除時裝欄位#l\r\n";
txt += "";
txt += "\r\n\t\t\t  #r#L50#【返回】#l";
let selection = npc.askMenuS(txt, true);
switch (selection) {
case 1:
slot = "裝備";
break;
case 2:
slot = "消耗";
break;
case 4:
slot = "其他";
break;
case 3:
slot = "裝飾";
break;
case 5:
slot = "特殊";
break;
case 6:
slot = "時裝";
break;
case 50:
player.runScript("改版其他功能");
break;
}
selection1 = npc.askNumber("#fs18##e#r[選定"+slot+"欄位]\r\n#b#fs16#你要從第幾格開始刪除", 1, 1, 128);
selection2 = npc.askNumber("#fs18##e#r[選定"+slot+"欄位]\r\n#b#fs16#刪除到哪一格", 1, 1, 128);
switch (selection) {
case 1:
case 6:
for(var i =selection1;i<=selection2;i++){
item = player.getInventorySlot(selection, i);
if(item != null){
if (item.getItemState()==524544){
//不刪除
}else{
player.loseInvSlot(selection, i);
}
}
}
npc.say("#fs14##b已經幫你刪除"+selection1+"-"+selection2+"格");
break;
case 2:
case 3:
case 4:
case 5:
for(var i =selection1;i<=selection2;i++){
player.loseInvSlot(selection, i);
}
npc.say("#fs14##b已經幫你刪除"+selection1+"-"+selection2+"格");
break;
}
 
 
}
function online() {
var i = -1;
var sql = "SELECT Count(accounts.loggedin) FROM accounts WHERE accounts.loggedin = 3";
var push = player.customSqlResult(sql);
if (push.size() > 0) {
var result = push.get(0);
var name = result.get("Count(accounts.loggedin)");
}

return name;
}
function addtrunk() { //更新 資料庫 寫 欄位=X 條件 欄位=4
var sql = "update trunk set capacity=128 where capacity=4";
player.customSqlUpdate(sql);

}


function 改名道具() {
var itemname = Array(
Array(2630648,"自選V捲"
),
Array(2630649,"自選B捲"
),
Array(2433575,"自選榮耀卷"
),
Array(2630963,"自選神秘防具箱"
),
Array(2630782,"自選神秘武器箱"
),
Array(2433615,"自選深淵武器箱"
),
Array(2433616,"自選深淵防具箱"
),
//Array(2438636,"FB直播分享"),
Array(2436162,"FB推文獎勵"
),
Array(2430658,"168推文獎勵"
),
Array(2631919,"FB分享獎勵"
),
Array(2431142,"FB簽到獎勵"
),
Array(2633238,"跑環材料箱子"
),
Array(2430066,"FB直播獎勵"
),
Array(2430067,"後續直播獎勵"
),
Array(2430068,"FB直播分享獎勵"
),
Array(2436711,"椅子轉蛋箱"
),
Array(2434630,"圓夢1000贊助包"
),
Array(2434629,"圓夢達5000贊助包"
),
Array(2434628,"圓夢達10000贊助包"
),
Array(2438838,"贊助-自選椅子箱"
),
Array(2435885,"會員選單"
),
Array(4036396,"會員積分卡"
),
Array(2430569,"洗血小還丹"
),
Array(2430570,"洗血中還丹"
),
Array(2430571,"洗血大還丹"
),
Array(2430731,"洗血靈還丹"
),
Array(2434745,"1000贊助"
),
Array(2434746,"3000贊助"
),
Array(2434747,"6000贊助"
),
Array(2434748,"9000贊助"
),
Array(2632756,"1000T禮包"
),
Array(2632757,"滿3000T禮包"
),
Array(2632758,"滿6000T禮包"
),
Array(2632759,"滿9000T禮包"
),
Array(2437554,"11"
),
Array(2437555,"22"
),
Array(2437556,"33"
),

);

txt="";
txt+="\r\n";
txt+="#fs15#\r\n";
for(let i = 0; i < itemname.length; i++ ){//
txt+="#k#L"+i+"##i"+itemname[i][0]+"# #b"+itemname[i]+"#l\r\n";
	
}
var sel = npc.askMenu(txt);
number = npc.askNumber("輸入想要的數量",100,0,10000);

if(player.isGm()){
player.gainItem(itemname[sel][0],number);
}else{
npc.say("錯誤");
}
}
*/