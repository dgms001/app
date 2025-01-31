/*
裝備出售
 */
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
 
var text;
var itemList = new Array();
var inventoryType;
var deleteSlot;
var deleteQuantity;
var typed=0;
var beDeletedArr = new Array();
var beDeletedArr1  = new Array();
var beDeletedArr2  = new Array();
var beDeletedArr3  = new Array();
var beDeletedArr4  = new Array();
var listq = Array(
	5000,7000, 10000 
);

var itemlist=Array(
    1582017,
    1232109,
    1402251,
    1302333,
    1312199,
	1012438,
	1022211,
    1322250,
	1342090,
    1412177,
    1422184,
    1432214,
    1442268,
    1542108,
	1332247,
    1213017,
    1212115,
    1372222,
    1382259,
    1552110,
    1252093,
    1262017,
    1282016,
    1522138,
	1404017,
    1592019,
    1452252,
    1462239,
    1214017,
    1242116,
    1332274,
    1342101,
    1362135,
    1472261,
    1292017,
    1272016,
    1222109,
    1482216,
    1492231,
    1532144,
    1403017


);

var itemlist1 = Array(
    1004422,
    1004423,
    1004424,
    1004425,
    1004426,
    1073030,
    1073032,
    1073033,
    1073034,
    1073035,
    1082636,
    1082637,
    1082638,
    1082639,
    1082640,
    1102775,
    1102794,
    1102795,
    1102796,
    1102797,
    1152174,
    1152176,
    1152177,
    1152178,
    1152179

);

var chance=0;
 				
var itemq = 0;

 
				
var newItemList = Array();
inventoryType = 1;
var indexof = 1;
var item=null;
var text = "\t\t#e- 以下是準備回收的裝備,請核對仔細 -#n\r\n\r\n#r";
for(var j = 1;j<=128;j++){
	item = player.getInventorySlot(1,j);
	if(item ==null){
		continue;
	}
	
	if(null != itemlist && itemlist.length>0){ 
		var flag = null;
		for(var i = 0;i<itemlist.length;i++){
			flag = true;
			if(itemlist[i]== item.getDataId()){
				flag = false; 
				break;
			} 
		}
	}
	if(flag){
		if(null != itemlist1 && itemlist1.length>0){ 
			var flag = null;
			for(var i = 0;i<itemlist1.length;i++){
				flag = true;
				if(itemlist1[i]== item.getDataId()){
					flag = false; 
					break;
				} 
					
			}
		}
	}
	
	
	
	if(item.getCUC()>0){
		continue;//說明強化過
	} 
	if(item.getGrade()>17){
		continue;//說明有潛能
	} 
	if(flag){
		continue;
	} 
	
	 
	newItemList.push(item.getDataId());
	beDeletedArr.push(j);
	  
}

for(var key in newItemList) {
	text += "#v" + newItemList[key] + "#";
	indexof++;
}
text+="\r\n#r#e回收操作不可逆，請確認是否要回收以上裝備？#n#k\r\n可以獲得:#v4001714# x "+newItemList.length*1+"個";

if (newItemList.length <= 0 ||beDeletedArr.length==0) {
	npc.say("您沒有可以回收的裝備。"+newItemList);
}else if (bag(1) < 1||bag(2) < 1||bag(3) < 1||bag(4) < 1) {
	npc.say("請將裝備，消耗，其他欄空出一格空間！");
}else{
	var ys = npc.askYesNo(text);
	if(ys == 1){
		var count = beDeletedArr.length*1;  
		var indexPosi =0;
		for(var key in beDeletedArr) {
			if(beDeletedArr[key] > 128){
				indexPosi= beDeletedArr[key] ;
			}
		}
		for(var key in beDeletedArr) {
			player.loseInvSlot(1, beDeletedArr[key]);
		} 
		player.gainItem(4001714, count);
		text="回收成功，獲得了"+count+"x#v4001714#";
		npc.say(text);
	}
	
}

function bag(type){
	let bagCount =0;
	for(var slot = 1;slot<129;slot++){
		let item = player.getInventorySlot(type, slot);
		if(item==null){
			bagCount++
		}
	}
	return bagCount;
}
