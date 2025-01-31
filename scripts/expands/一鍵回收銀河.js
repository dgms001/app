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
1113020,
1099018,
1352013,
1352213,
1352209,
1352219,
1352229,
1352239,
1352249,
1352259,
1352269,
1352279,
1352289,
1352299,
1352410,
1352510,
1352610,
1352711,
1352819,
1352909,
1352919



);

var itemlist1 = Array(
1352948,
1352978,
1353010,
1353405,
1552133,
1354007,
1353807,
1353606,
1353505,
1353306,
1352933,
1353105,
1098006,
1353205,
1352867,
1353707,
1354027,
1352266,
1354017,
1352831,
1352981,
1353900,
1352990,
1352938,
1352113,
1352276,
1352831,
1352928,
1352957,
1352967,
1352935,
1352109,
1342095
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
text+="\r\n#r#e回收操作不可逆，請確認是否要回收以上裝備？#n#k\r\n可以獲得:#v4001551# x "+newItemList.length*1+"個";

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
		player.gainItem(4001551, count);
		text="回收成功，獲得了"+count+"x#v4001551#";
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
