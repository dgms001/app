/*
裝備出售
 */
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
 
var txt;
var itemList = new Array();
var inventoryType=2;
var deleteSlot;
var deleteQuantity;
var typed=0;
var beDeletedArr = new Array();
var listq = Array(
	2, 5, 20
);
var itemq = 0;

var itemlist140 = Array(
1099011,//	銀河之咒盾
1099012,//	銀河之盾
1342095,//	銀河之刃
1352009,//	銀河之箭矢
1352109,//	銀河之卡片
1352206,//	銀河之吊墜
1352216,//	銀河之念珠
1352226,//	銀河之鎖鏈
1352236,//	銀河之赤銅之書
1352246,//	銀河之青銀之書
1352256,//	銀河之白金之書
1352266,//	銀河之風暴羽毛
1352276,//	銀河之扳指
1352286,//	銀河之劍鞘
1352296,//	銀河之靈符
1352406,//	銀河之魂珠
1352506,//	銀河之精髓
1352606,//	銀河之靈魂手鐲
1352707,//	銀河之麥林彈
1352815,//	銀河之私語
1352906,//	銀河之腕輪
1352916,//	銀河之鷹眼
1352928,//	銀河之火藥桶
1352935,//	銀河之天龍錘
1352945,//	銀河之龍神的遺產
1352957,//	銀河之極限球
1352967,//	銀河之狂野之矛
1352975,//	銀河之圣地之光
1353006,//	銀河之控制器
1353105,//	銀河之狐貍珠
1353405,//	銀河之爆破彈
1353606,//
1353306,//
1353505
);

var itemlist=Array(
  2613012,
2613013,
2612019,
2612020,
2616000,
2616001,
2615005,
2615006,
2048812,
2048813

);




var itemlist1 = Array(
2613012,
2613013,
2612019,
2612020,
2616000,
2616001,
2615005,
2615006,
2048812,
2048813
);

var itemlist2 = Array(
2613048,
2613049,
2612055,
2612056,
2616059,
2616060,
2615029,
2615030,
2048815,
2048816
);

var itemlist3 = Array(
2613062,
2613063,
2612074,
2612075,
2616072,
2616073,
2615041,
2615042,
2048819,
2048820
);

var itemlist4 = Array(
2613068,
2613069,
2612080,
2612081,
2616216,
2616217,
2615051,
2615052,
2048825,
2048826
);

var itemlist11 = Array(
5062009,
5062017, 
5062020,
5062500, 
5062010
);

var itemlist22 = Array(
Array(4001714, 1),
Array(5062024, 3),
Array(2049116, 20),
Array(2049610, 20)
);

var itemlist33 = Array(
Array(4001715, 10),
Array(5062024, 1),
Array(2430673, 1),
Array(2049116, 4),
Array(2049610, 4),
Array(2048717, 40)
//Array(2431996, 60)

);
var txt;
var zx24 = "#fMap/MapHelper.img/weather/nightMarket/5#";
var qq1 = "#fUI/EventShop/adventureShop/GradeBuyer/0#"
var qq2 = "#fUI/EventShop/adventureShop/GradeBuyer/1#"
var qq3 = "#fUI/EventShop/adventureShop/GradeBuyer/2#"
var qq4 = "#fUI/EventShop/adventureShop/GradeBuyer/3#"
var qq5 = "#fUI/EventShop/adventureShop/GradeBuyer/4#"
var qq6 = "#fUI/EventShop/adventureShop/GradeBuyer/5#"
	var Icon = [
    Array("星星", "#fEtc/ChatEmoticon/expression/1/0#"),
    Array("彩虹", "#fEffect/ItemEff/1102877/effect/default/0#"),
    Array("猫咪", "#fUI/NameTag/190/w#"),
    Array("猫咪", "#fUI/NameTag/190/c#"),
    Array("猫咪", "#fUI/NameTag/190/e#"),
    Array("兔子", "#fEffect/CharacterEff/1112960/0/1#"),
    Array("星空", "#fUI/GuildMark/BackGround/00001013/16#"),
    Array("骷髅", "#fUI/GuildMark/Mark/Etc/00009000/15#"),
    Array("红心", "#fUI/GuildMark/Mark/Etc/00009001/1#"),
    Array("白脸", "#fUI/GuildMark/Mark/Etc/00009002/4#"),
    Array("皇冠", "#fUI/GuildMark/Mark/Etc/00009004/3#"),
    Array("红灯", "#fUI/GuildMark/Mark/Etc/00009020/1#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/11#"),
    Array("水滴", "#fEffect/BasicEff/MainNotice/Gamsper/Notify/4#"),
    Array("红旗", "#fEffect/BasicEff/MainNotice/BlockBuster/Default/3#"),
    Array("红心", "#fEffect/CharacterEff/1112905/0/0#"),
    Array("云朵", "#fEffect/ItemEff/1102877/effect/default/1#"),
    Array("翅膀", "#fEffect/ItemEff/1102874/effect/ladder/0#"),
    Array("箭矢", "#fEffect/ItemEff/1112003/0/2#"),
    Array("黄鸭", "#fEffect/ItemEff/1004122/effect/default/8#"),
    Array("红点", "#fEffect/CharacterEff/1082588/0/0#"), //红点
    Array("蓝点", "#fEffect/CharacterEff/1082588/3/0#"),  //蓝点
    Array("黄星", "#fEffect/CharacterEff/1112924/0/0#"), //黄星
    Array("蓝星", "#fEffect/CharacterEff/1112925/0/0#"), //蓝星
    Array("红星", "#fEffect/CharacterEff/1112926/0/0#"), //红星
    Array("黄星星", "#fUI/UIPVP.img/MiniMapIcon/star#"),  //黄星星
    Array("星星", "#fEtc/ChatEmoticon/expression/1/0#"),
    Array("兔子", "#fEffect/CharacterEff/1112960/0/1#"),
    Array("星空", "#fUI/GuildMark/BackGround/00001013/16#"),
    Array("骷髅", "#fUI/GuildMark/Mark/Etc/00009000/15#"),
    Array("红心", "#fUI/GuildMark/Mark/Etc/00009001/1#"),
    Array("白脸", "#fUI/GuildMark/Mark/Etc/00009002/4#"),
    Array("皇冠", "#fUI/GuildMark/Mark/Etc/00009004/3#"),
    Array("红灯", "#fUI/GuildMark/Mark/Etc/00009020/1#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/11#"),
    Array("水滴", "#fEffect/BasicEff/MainNotice/Gamsper/Notify/4#"),
    Array("红旗", "#fEffect/BasicEff/MainNotice/BlockBuster/Default/3#"),
    Array("红心", "#fEffect/CharacterEff/1112905/0/0#"),
    Array("云朵", "#fEffect/ItemEff/1102877/effect/default/1#"),
    Array("翅膀", "#fEffect/ItemEff/1102874/effect/ladder/0#"),
    Array("箭矢", "#fEffect/ItemEff/1112003/0/2#"),
    Array("黄鸭", "#fEffect/ItemEff/1004122/effect/default/8#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/10#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/2#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/3#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/4#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/5#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/6#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/7#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/8#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/9#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/10#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/11#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/12#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/13#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/14#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/15#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/16#"),
    Array("条件", "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"),
    Array("信封", "#fUI/GuildMark/BackGround/00001003/5#"),
    Array("信封", "#fUI/GuildMark/BackGround/00001003/12#"),
    Array("钻石", "#fUI/NameTag/medal/556/w#"),
    Array("钻石", "#fUI/NameTag/medal/556/c#"),
    Array("钻石", "#fUI/NameTag/medal/556/e#"),
    Array("三角", "#fUI/piggyBarMinigame/crunch/5#"),
    Array("蓝点", "#fUI/piggyBarMinigame/crunch/1#"),
    Array("女神", "#fUI/RunnerGame/RunnerGameUI/Effect/ItemEffect_Protect1/3#"),
    Array("拇指", "#fUI/NameTag/medal/10/w#"),
    Array("拇指", "#fUI/NameTag/medal/10/c#"),
    Array("拇指", "#fUI/NameTag/medal/10/e#"),
    Array("成功", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/dear/7#"),
    Array("失败", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/fail/7#"),
    Array("星星", "#fUI/UIWindowGL/FeedbackSystem/Star#"),
    Array("蓝星", "#fEffect/CharacterEff/1003393/1/0#"),
    Array("花朵", "#fEffect/CharacterEff/1050334/2/0#"),
    Array("蓝星", "#fEffect/CharacterEff/1003393/0/0#"),
    Array("淡星", "#fEffect/CharacterEff/moveRandomSprayEff/eunwol_seal/effect/0/2#"),
    Array("花朵", "#fEffect/CharacterEff/1051294/1/0#"),
    Array("花朵", "#fEffect/CharacterEff/1051296/1/0#"),
    Array("金菇", "#fUI/NameTag/medal/74/w#"),
    Array("金菇", "#fUI/NameTag/medal/74/c#"),
    Array("金菇", "#fUI/NameTag/medal/74/e#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/w#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/c#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/e#"),
    Array("胡子", "#fUI/NameTag/124/w#"),
    Array("胡子", "#fUI/NameTag/124/c#"),
    Array("胡子", "#fUI/NameTag/124/e#"),
    Array("帽子", "#fUI/NameTag/nick/312/w#"),
    Array("帽子", "#fUI/NameTag/nick/312/c#"),
    Array("帽子", "#fUI/NameTag/nick/312/e#"),
    Array("圣诞", "#fUI/NameTag/medal/728/w#"),
    Array("圣诞", "#fUI/NameTag/medal/728/c#"),
    Array("圣诞", "#fUI/NameTag/medal/728/e#"),
    Array("红钻", "#fUI/UIWindowPL/DuoEvent/Maximum/DuoInfo/icon/GoodF/0#"),
    Array("王冠", "#fUI/NameTag/medal/468/w#"),
    Array("王冠", "#fUI/NameTag/medal/468/c#"),
    Array("王冠", "#fUI/NameTag/medal/468/e#"),
    Array("确认", "#fUI/CashShop.img/CSCoupon/BtOK/normal/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/ladder/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/7#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/walk1/3#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/jump/0#"),
    Array("音符", "#fEffect/ItemEff/1112811/0/0#"),
    Array("红心", "#fEffect/CharacterEff/1112905/0/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/1#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/2#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/3#"),
    Array("金左指标", "#fUI/UIWindow/MonsterBook/arrowLeft/normal/0#"),
    Array("金右指标", "#fUI/UIWindow/MonsterBook/arrowRight/normal/0#"),
    Array("简单", "#fEffect/ItemEff/1102877/effect/default/0#")
];
txt = "";
txt ="\t"+Icon[17][1] +"#fs20##fc0xFF00caf2##e分解中心"+Icon[17][1]+"#r#n\r\n";
txt +=  ""  + Icon[43][1] +Icon[44][1] +Icon[45][1]  +Icon[46][1] +Icon[47][1]  +Icon[48][1] +Icon[49][1] + Icon[50][1]  
+Icon[51][1]  +Icon[52][1] +Icon[53][1] +Icon[54][1] +Icon[55][1] +Icon[56][1] +Icon[57][1] + Icon[43][1] +Icon[44][1] 
+Icon[45][1]  +Icon[46][1] +Icon[47][1]  +Icon[48][1] +Icon[49][1] + Icon[50][1]  +Icon[51][1]  +Icon[52][1] + Icon[53][1] 
+Icon[54][1] +Icon[55][1] + Icon[56][1] +Icon[57][1] +Icon[47][1]  +Icon[44][1]  + "\r\n";
//txt += "\t\t \t   #e#fs20##r分解中心\r\n#n";
//txt += ""+zx24+zx24+zx24+zx24+zx24+zx24+zx24+zx24+zx24+zx24+zx24+"\r\n";
txt += "";
txt += "#fs11##b";
txt += "";
txt += "";
txt += "";
txt += "";
txt += "";
	txt += "\t\t\t#L0#"+Icon[103][1]+"分解中心說明#l\r\n#fs11#";
	txt += "#L1#"+Icon[103][1]+"分解[R卷軸]#l#L2#"+Icon[103][1]+"分解[X卷軸]#l#L3#分解[V卷軸]#l\r\n\r\n";
	txt += "#L4#"+Icon[103][1]+"分解[B卷軸]#l#L7#"+Icon[103][1]+"分解[RXV捲]#l\r\n\r\n";
	txt += "#L11#"+Icon[103][1]+"分解[#v5062009##v5062010##v5062017##v5062020##v5062500#]#l  #l\r\n\r\n";
	txt +=  ""  + Icon[43][1] +Icon[44][1] +Icon[45][1]  +Icon[46][1] +Icon[47][1]  +Icon[48][1] +Icon[49][1] + Icon[50][1]  
+Icon[51][1]  +Icon[52][1] +Icon[53][1] +Icon[54][1] +Icon[55][1] +Icon[56][1] +Icon[57][1] + Icon[43][1] +Icon[44][1] 
+Icon[45][1]  +Icon[46][1] +Icon[47][1]  +Icon[48][1] +Icon[49][1] + Icon[50][1]  +Icon[51][1]  +Icon[52][1] + Icon[53][1] 
+Icon[54][1] +Icon[55][1] + Icon[56][1] +Icon[57][1] +Icon[47][1]  +Icon[44][1]  + "\r\n\r\n";
	//txt += "#L7#分解RXV捲#l\r\n";
	//txt += "#L5#"+GC1+"低級分解幣兌換#l\r\n";
	//txt += "#L6#"+GC1+"高級分解幣兌換#l\r\n";
	if (player.isGm()) {
	//txt += "#L7#分解RXV捲#l\r\n";
	}
	let selection = npc.askMenuS(txt,true);
	if(selection == 0){
		sayStr();
	}else if(selection == 1){
		while(true){
		 resolve1();
		}
	}else if(selection == 2){
		while(true){
		 resolve2();
		}
	}else if(selection == 3){
		while(true){
		 resolve3();
		}
	}else if(selection == 4){
		while(true){
		 resolve4();
		}
	}else if(selection == 5){
		 lowerChange();
	}else if(selection == 6){
		 higherChange();
	} else if(selection == 7){
		一鍵分解();
		// player.runScript("卷軸一鍵分解");
	} else if(selection == 8){
		player.runScript("new_一鍵分解150");
	} else if (selection == 11){
		 resolve11();
	} else if (selection == 12){
		 resolve12();
	} else if (selection == 11){
		 resolve13();
	} else if (selection == 11){
		 resolve14();
	} else if (selection == 11){
		 resolve15();
	} 
	

function higherChange(){
	var txt = "#e#r#h0##k#n\r\n#r您好,分解裝備獲得的#r夏日高級分解幣#可以在我這裡兌換物品~";
	for (var i = 0; i < itemlist33.length; i++) {
		txt += "#L" + i + "##i" + itemlist33[i] + ":##t" + itemlist33[i] + "# - #r" + itemlist33[i][1] + "#r個#v4023026#高級分解幣\r\n";
		if (i != 0 && (i + 1) % 5 == 0) {
			//txt += "\r\n";
		}
	}
	var selects =  npc.askMenu(txt);
	var buynum = npc.askNumber("請輸入你請你輸入想要兌換的數量\r\n\r\n#r1個需要" + itemlist33[selects][1] + "個#r分解幣#k", 1, 1, 999999);
	var ys =npc.askYesNo("你想購買" + buynum + "個#r#i" + itemlist33[selects][0] + "##k？\r\n你將使用掉" + (buynum * itemlist33[selects][1]) + "高級分解幣。");
	if(ys == 1){
		if(buynum>=1000){
			npc.say("對不起不支持一次性兌換這麼多.");
		}else if (bag(1) < 1||bag(2) < 1||bag(3) < 1||bag(4) < 1) {
			npc.say("請將裝備，消耗，其他欄空出一格空間！");
		}else if (player.hasItem(4023026, buynum * itemlist33[selects][1])) {
			player.gainItem(itemlist33[selects][0], buynum);
			player.loseItem(4023026, buynum * itemlist33[selects][1]); 
			npc.say("恭喜您成功購買#i" + itemlist33[selects][0] + ":# #r#t" + itemlist33[selects][0] + "##k。");     
		}else{
			npc.say("對不起，你沒有足夠的分解幣。");
		}
	}
}

function lowerChange(){
	var txt = "#e#r#h0##k#n\r\n#r您好,分解裝備獲得的#r低級分解幣#可以在我這裡兌換物品~";
	for (var i = 0; i < itemlist22.length; i++) {
		txt += "#L" + i + "##i" + itemlist22[i] + ":##t" + itemlist22[i] + "# - #r" + itemlist22[i][1] + "#r個#v4023025#低級分解幣\r\n";
		if (i != 0 && (i + 1) % 5 == 0) {
			//txt += "\r\n";
		}
	
	}
	var selects =  npc.askMenu(txt);
	var buynum = npc.askNumber("請輸入你請你輸入想要兌換的數量\r\n\r\n#r1個需要" + itemlist22[selects][1] + "個#r分解幣#k", 1, 1, 999999);
	var ys =npc.askYesNo("你想購買" + buynum + "個#r#i" + itemlist22[selects][0] + "##k？\r\n你將使用掉" + (buynum * itemlist22[selects][1]) + "低級分解幣。");
	if(ys == 1){
		if(buynum>=1000){
			npc.say("對不起不支持一次性兌換這麼多.");
		}else if (bag(1) < 1||bag(2) < 1||bag(3) < 1||bag(4) < 1) {
			npc.say("請將裝備，消耗，其他欄空出一格空間！");
		}else if (player.hasItem(4023025, buynum * itemlist22[selects][1])) {
			player.gainItem(itemlist22[selects][0], buynum);
			player.loseItem(4023025, buynum * itemlist22[selects][1]); 
			npc.say("恭喜您成功購買#i" + itemlist22[selects][0] + ":# #r#t" + itemlist22[selects][0] + "##k。");     
		}else{
			npc.say("對不起，你沒有足夠的分解幣。");
		}
	}
}

function resolve1(){
	var index_a = 0;
	var txt = "\t\t\t\t#fs24##e#fc0xFFFFF300#請選擇要分解的卷軸 \r\n#b#fs17#";
	var indexof = 1;
	var newItemList = Array();
	for (var j = 1; j <= 128; j++) {
		var item =player.getInventorySlot(2,j);
		if(item ==null){
			continue;
		}
		for(var i = 0;i<itemlist1.length;i++){
			if(itemlist1[i]==item.getDataId()){ 
				newItemList[j]=item.getDataId();
				break;
			}
		}
	}
	for(var key in newItemList) {
		txt += "#L" + key + "##v" + newItemList[key] + "##z" + newItemList[key] + "#";
		index_a++;
		if (indexof > 1 && indexof % 2 == 0) {
			txt += "\r\n";
		}
		indexof++;
	}
	if (index_a <= 0) {
		npc.say("#fs18##b#e您沒有可以分解的卷軸。");
	}else{
		var selection =npc.askMenuA(txt,true);			
		var item = player.getInventorySlot(parseInt(inventoryType),parseInt(selection));	
		deleteSlot = selection;
		deleteQuantity = 1;
		itemq = getType(item.getDataId());
		if (bag(4)<2) {
			npc.say("#fs18##b#e其他欄格子不足，請整理後分解。");;
		}else if(item.getAttribute()==41){
			npc.say("#fs18##b#e帶鎖的裝備不能進行操作。");
		}else{
			var currentItemQuantity = player.getAmountOfItem(item.getDataId());
			var ys = npc.askNumber("#fs17##k#e分解#v"+item.getDataId()+"##z"+item.getDataId()+"#\r\n#b身上持有數量:["+currentItemQuantity+"]\r\n獲得道具:[#r#v4021032##z4021032#*1#b]\r\n請輸入兌換的數量:", 1, 1, currentItemQuantity);
			if(ys >= 1){
				//player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
				player.loseItem(item.getDataId(),ys);
					player.gainItem(4021032,ys);
					txt="#fs18##b#e分解成功，獲得了#v4021032#"+ys+"個";
				npc.say(txt);
			}
		}
	}
}

function resolve2(){
	var index_a = 0;
	var txt = "\t\t\t\t#fs24##e#fc0xFFFFF300#請選擇要分解的卷軸 \r\n#b#fs17#";
	var indexof = 1;
	var newItemList = Array();
	for (var j = 1; j <= 128; j++) {
		var item =player.getInventorySlot(2,j);
		if(item ==null){
			continue;
		}
		for(var i = 0;i<itemlist2.length;i++){
			if(itemlist2[i]==item.getDataId()){ 
				newItemList[j]=item.getDataId();
				break;
			}
		}
	}
	for(var key in newItemList) {
		txt += "#L" + key + "##v" + newItemList[key] + "##z" + newItemList[key] + "#";
		index_a++;
		if (indexof > 1 && indexof % 2 == 0) {
			txt += "\r\n";
		}
		indexof++;
	}
	if (index_a <= 0) {
		npc.say("#fs18##b#e您沒有可以分解的卷軸。");
	}else{
		var selection =npc.askMenuA(txt,true);			
		var item = player.getInventorySlot(parseInt(inventoryType),parseInt(selection));	
		deleteSlot = selection;
		deleteQuantity = 1;
		itemq = getType(item.getDataId());
		if (bag(4)<2) {
			npc.say("#fs18##b#e其他欄格子不足，請整理後分解。");;
		}else if(item.getAttribute()==41){
			npc.say("#fs18##b#e帶鎖的裝備不能進行操作。");
		}else{
			var currentItemQuantity = player.getAmountOfItem(item.getDataId());
			var ys = npc.askNumber("#fs17##k#e分解#v"+item.getDataId()+"##z"+item.getDataId()+"#\r\n#b身上持有數量:["+currentItemQuantity+"]\r\n獲得道具:[#r#v4021032##z4021032#*3#b]\r\n請輸入兌換的數量:", 1, 1, currentItemQuantity);
			if(ys >= 1){
				//player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
				player.loseItem(item.getDataId(),ys);
					player.gainItem(4021032,ys*3);
					txt="#fs18##b#e分解成功，獲得了#v4021032#"+ys*3+"個";
				npc.say(txt);
			}
		}
	}
}

function resolve3(){
	var index_a = 0;
	var txt = "\t\t\t\t#fs24##e#fc0xFFFFF300#請選擇要分解的卷軸 \r\n#b#fs17#";
	var indexof = 1;
	var newItemList = Array();
	for (var j = 1; j <= 128; j++) {
		var item =player.getInventorySlot(2,j);
		if(item ==null){
			continue;
		}
		for(var i = 0;i<itemlist3.length;i++){
			if(itemlist3[i]==item.getDataId()){ 
				newItemList[j]=item.getDataId();
				break;
			}
		}
	}
	for(var key in newItemList) {
		txt += "#L" + key + "##v" + newItemList[key] + "##z" + newItemList[key] + "#";
		index_a++;
		if (indexof > 1 && indexof % 2 == 0) {
			txt += "\r\n";
		}
		indexof++;
	}
	if (index_a <= 0) {
		npc.say("#fs18##b#e您沒有可以分解的卷軸。");
	}else{
		var selection =npc.askMenuA(txt,true);		
		var item = player.getInventorySlot(parseInt(inventoryType),parseInt(selection));
		deleteSlot = selection;
		deleteQuantity = 1;
		itemq = getType(item.getDataId());
		if (bag(4)<2) {
			npc.say("#fs18##b#e其他欄格子不足，請整理後分解。");;
		}else if(item.getAttribute()==41){
			npc.say("#fs18##b#e帶鎖的裝備不能進行操作。");
		}else{
			var currentItemQuantity = player.getAmountOfItem(item.getDataId());
			var ys = npc.askNumber("#fs17##k#e分解#v"+item.getDataId()+"##z"+item.getDataId()+"#\r\n#b身上持有數量:["+currentItemQuantity+"]\r\n獲得道具:[#r#v4021032##z4021032#*7#b]\r\n請輸入兌換的數量:", 1, 1, currentItemQuantity);
			if(ys >= 1){
				//player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
				player.loseItem(item.getDataId(),ys);
					player.gainItem(4021032,ys*7);
					txt="#fs18##b#e分解成功，獲得了#v4021032#"+ys*7+"個";
				npc.say(txt);
			}
		}
	}
}

function resolve4(){
	var index_a = 0;
	var txt = "\t\t\t\t#fs24##e#fc0xFFFFF300#請選擇要分解的卷軸 \r\n#b#fs17#";
	var indexof = 1;
	var newItemList = Array();
	for (var j = 1; j <= 128; j++) {
		var item =player.getInventorySlot(2,j);
		if(item ==null){
			continue;
		}
		for(var i = 0;i<itemlist4.length;i++){
			if(itemlist4[i]==item.getDataId()){ 
				newItemList[j]=item.getDataId();
				break;
			}
		}
	}
	for(var key in newItemList) {
		txt += "#L" + key + "##v" + newItemList[key] + "##z" + newItemList[key] + "#";
		index_a++;
		if (indexof > 1 && indexof % 2 == 0) {
			txt += "\r\n";
		}
		indexof++;
	}
	if (index_a <= 0) {
		npc.say("#fs18##b#e您沒有可以分解的卷軸。");
	}else{
		var selection =npc.askMenuA(txt,true);			
		var item = player.getInventorySlot(parseInt(inventoryType),parseInt(selection));	
		deleteSlot = selection;
		deleteQuantity = 1;
		itemq = getType(item.getDataId());
		if (bag(4)<2) {
			npc.say("#fs18##b#e其他欄格子不足，請整理後分解。");;
		}else if(item.getAttribute()==41){
			npc.say("#fs18##b#e帶鎖的裝備不能進行操作。");
		}else{
			var currentItemQuantity = player.getAmountOfItem(item.getDataId());
			var ys = npc.askNumber("#fs17##k#e分解#v"+item.getDataId()+"##z"+item.getDataId()+"#\r\n#b身上持有數量:["+currentItemQuantity+"]\r\n獲得道具:[#r#v4021032##z4021032#*30#b]\r\n請輸入兌換的數量:", 1, 1, currentItemQuantity);
			if(ys >= 1){
				//player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
				player.loseItem(item.getDataId(),ys);
					player.gainItem(4021032,ys*30);
					txt="#fs18##b#e分解成功，獲得了#v4021032#"+ys*30+"個";
				npc.say(txt);
			}
		}
	}
}

function resolve11(){
	var index_a = 0;
	var txt = "\t\t\t\t#fs24##e#fc0xFFFFF300#請選擇要分解的方塊 \r\n#b#fs17#";
	var indexof = 1;
	var newItemList = Array();
	for (var j = 1; j <= 128; j++) {
		var item =player.getInventorySlot(5,j);
		if(item ==null){
			continue;
		}
		for(var i = 0;i<itemlist11.length;i++){
			if(itemlist11[i]==item.getDataId()){ 
				newItemList[j]=item.getDataId();
				break;
			}
		}
	}
	for(var key in newItemList) {
		txt += "#L" + key + "##v" + newItemList[key] + "##z" + newItemList[key] + "#";
		index_a++;
		if (indexof > 1 && indexof % 2 == 0) {
			txt += "\r\n";
		}
		indexof++;
	}
	if (index_a <= 0) {
		npc.say("#fs18##b#e您沒有可以分解的卷軸。");
	}else{
		var selection =npc.askMenuA(txt,true);			
		var item = player.getInventorySlot(5,parseInt(selection));	
		deleteSlot = selection;
		deleteQuantity = 1;
		itemq = getType(item.getDataId());
		if (bag(4)<2) {
			npc.say("#fs18##b#e其他欄格子不足，請整理後分解。");;
		}else if(item.getAttribute()==41){
			npc.say("#fs18##b#e帶鎖的裝備不能進行操作。");
		}else{
			var currentItemQuantity = player.getAmountOfItem(item.getDataId());
			var ys = npc.askNumber("#fs17##k#e分解#v"+item.getDataId()+"##z"+item.getDataId()+"#\r\n#b身上持有數量:["+currentItemQuantity+"]\r\n獲得道具:[#r#v4021036##z4021036#*1#b]\r\n請輸入兌換的數量:", 1, 1, currentItemQuantity);
			if(ys >= 1){
				//player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
				player.loseItem(item.getDataId(),ys);
					player.gainItem(4021036,ys);
					txt="#fs18##b#e分解成功，獲得了#v4021036#"+ys+"個";
				npc.say(txt);
			}
		}
	}
}

function resolve140(){
	var index_a = 0;
	var txt = "\t\t#e- 請選擇要分解的裝備 -#n\r\n\r\n#r";
	var indexof = 1;
	var newItemList = Array();
	for (var j = 1; j <= 128; j++) {
		var item = player.getInventorySlot(1,j);
		if(item ==null){
			continue;
		}
		for(var i =0;i<itemlist.length;i++){
			if(itemlist[i]==item.getDataId()){ 
				newItemList[j]=item.getDataId();
				break;
			}
		}
		
		for(var i =0;i<itemlist140.length;i++){
			if(itemlist140[i]==item.getDataId()){ 
				newItemList[j]=item.getDataId();
				break;
			}
		}
		
	}
	for(var key in newItemList) {
		txt += "#L" + key + "##v" + newItemList[key] + "#";
		index_a++;
		if (indexof > 1 && indexof % 5 == 0) {
			txt += "\r\n";
		}
		indexof++;
	}
	if (index_a <= 0) {
		npc.say("您沒有可以分解的裝備。");
	}else{
		var selection =npc.askMenu(txt);
		
			
		var item = player.getInventorySlot(parseInt(inventoryType),parseInt(selection));
	
		deleteSlot = selection;
		deleteQuantity = 1;
		itemq = getType(item.getDataId());
		if (bag(4)<2) {
			npc.say("其他欄格子不足，請整理後分解。");;
		}else if(item.getAttribute()==41){
			npc.say("帶鎖的裝備不能進行操作。");
		}else{
			var txt = "#e確定要分解#r#v" + item.getDataId() + "##z" + item.getDataId() + "# " + deleteQuantity + "個 #k嗎？\r\n#k";
			txt +="力量："+item.getStr()+"\r\n";
			txt +="敏捷："+item.getDex()+"\r\n";
			txt +="智力："+item.getInt()+"\r\n";
			txt +="運氣："+item.getLuk()+"\r\n";
			txt +="物理攻擊："+item.getPad()+"\r\n";
			txt +="魔法攻擊："+item.getMad()+"\r\n";
	
			var ys = npc.askYesNo(txt);
			if(ys == 1){
				player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
				if(itemq == 10){
					player.gainItem(4023025, itemq);
					txt="分解成功，獲得了#v4023025#"+itemq+"個";
				}else{
					player.gainItem(4023026, itemq);
					txt="分解成功，獲得了#v4023026#"+itemq+"個";
				}
				npc.say(txt);
			}
			
		}
	}
}

function sayStr(){
	var txt = "";
	txt +="\t"+Icon[17][1] +"#fs20##fc0xFF00caf2##e分解獲取"+Icon[17][1]+"#r#n\r\n";
txt +=  ""  + Icon[43][1] +Icon[44][1] +Icon[45][1]  +Icon[46][1] +Icon[47][1]  +Icon[48][1] +Icon[49][1] + Icon[50][1]  
+Icon[51][1]  +Icon[52][1] +Icon[53][1] +Icon[54][1] +Icon[55][1] +Icon[56][1] +Icon[57][1] + Icon[43][1] +Icon[44][1] 
+Icon[45][1]  +Icon[46][1] +Icon[47][1]  +Icon[48][1] +Icon[49][1] + Icon[50][1]  +Icon[51][1]  +Icon[52][1] + Icon[53][1] 
+Icon[54][1] +Icon[55][1] + Icon[56][1] +Icon[57][1] +Icon[47][1]  +Icon[44][1]  + "\r\n";
	txt += "#b【R卷】:獲得#r#v4021032##z4021032#*1\r\n";
	txt += "#b【X卷】:獲得#r#v4021032##z4021032#*3\r\n";
	txt += "#b【V卷】:獲得#r#v4021032##z4021032#*7\r\n";
	txt += "#b【B卷】:獲得#r#v4021032##z4021032#*30\r\n";
	txt +=  ""  + Icon[43][1] +Icon[44][1] +Icon[45][1]  +Icon[46][1] +Icon[47][1]  +Icon[48][1] +Icon[49][1] + Icon[50][1]  
+Icon[51][1]  +Icon[52][1] +Icon[53][1] +Icon[54][1] +Icon[55][1] +Icon[56][1] +Icon[57][1] + Icon[43][1] +Icon[44][1] 
+Icon[45][1]  +Icon[46][1] +Icon[47][1]  +Icon[48][1] +Icon[49][1] + Icon[50][1]  +Icon[51][1]  +Icon[52][1] + Icon[53][1] 
+Icon[54][1] +Icon[55][1] + Icon[56][1] +Icon[57][1] +Icon[47][1]  +Icon[44][1]  + "\r\n\r\n";
	npc.say(txt);
}

function getType(itemID) {
	var itemq = 20;
	for(var i = 0;i<itemlist.length;i++){
		if(itemlist[i] == itemID){
			itemq = 10;
		}
	}
	for(var i = 0;i<itemlist140.length;i++){
		if(itemlist140[i] == itemID){
			itemq = 10;
		}
	}
	
	return itemq;
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

function 一鍵分解() {
	
var itemlist = new Array(//卷軸
Array(2048812,1,1),//寵物裝備物攻
Array(2048813,1,1),//魔攻
Array(2612019,1,1),//雙手武器物攻
Array(2612020,1,1),//魔攻
Array(2613012,1,1),//單手武器物攻
Array(2613013,1,1),//魔攻
Array(2615005,1,1),//飾品物攻
Array(2615006,1,1),//魔攻
Array(2616000,1,1),//防具物攻
Array(2616001,1,1),//魔攻
//X
Array(2048815,1,1),//寵物裝備物攻
Array(2048816,1,1),//魔攻
Array(2612055,1,1),//雙手武器物攻
Array(2612056,1,1),//魔攻
Array(2613048,1,1),//單手武器物攻
Array(2613049,1,1),//魔攻
Array(2615029,1,1),//飾品物攻
Array(2615030,1,1),//魔攻
Array(2616059,1,1),//防具物攻
Array(2616060,1,1),
//V  2630648,1),自選
Array(2048819,1,1),//寵物裝備物攻
Array(2048820,1,1),//魔攻
Array(2612074,1,1),//雙手武器物攻
Array(2612075,1,1),//魔攻
Array(2613062,1,1),//單手武器物攻
Array(2613063,1,1),//魔攻
Array(2615041,1,1),//飾品物攻
Array(2615042,1,1),//魔攻
Array(2616072,1,1),//防具物攻
Array(2616073,1,1)//魔攻
);
	txt = "分解的的道具有RXV捲:\r\n";
	txt += "#b";
/*for(var i = 1;i<129;i++){
	var item = player.getInventorySlot(2,i);
	if(item == null){
		continue;
	}else {
		var flag = false;
		for(var j = 0;j<itemlist.length;j++){
			if(itemlist[j][0]==item.getDataId()){//符合條件則開啟
				if(player.getAmountOfItem(item.getDataId())>=1){//數量大於5才顯示
				flag = true;
				break;
				}
			}
		}
		if(!flag){
			continue;
		}else{
			//txt += "#L"+i+"# #v"+item.getDataId()+"##l";
			txt +=" #v"+item.getDataId()+"# #t"+item.getDataId()+"# x "+player.getAmountOfItem(item.getDataId())+"";
			itemList.push(Array(item.getDataId(),player.getAmountOfItem(item.getDataId())));
			//java.lang.System.out.println("xxx"+item.getDataId()+" x "+player.getAmountOfItem(item.getDataId()));			
		}
	}
}*/
	for(var j = 0;j<itemlist.length;j++){
		if(player.getAmountOfItem(itemlist[j][0])>=1){//數量大於1才顯示
		txt +=" #v"+itemlist[j][0]+"# #t"+itemlist[j][0]+"# x "+player.getAmountOfItem(itemlist[j][0])+"\r\n";
		itemList.push(Array(itemlist[j][0],player.getAmountOfItem(itemlist[j][0])));
		//java.lang.System.out.println("xxx"+itemlist[j][0]+" x "+player.getAmountOfItem(itemlist[j][0]));
		}
	}


var pos = npc.askYesNo(txt);
var item = player.getInventorySlot(2,pos);
var itemlist0 = new Array(//卷軸
Array(2048812,1,1),//寵物裝備物攻
Array(2048813,1,1),//魔攻
Array(2612019,1,1),//雙手武器物攻
Array(2612020,1,1),//魔攻
Array(2613012,1,1),//單手武器物攻
Array(2613013,1,1),//魔攻
Array(2615005,1,1),//飾品物攻
Array(2615006,1,1),//魔攻
Array(2616000,1,1),//防具物攻
Array(2616001,1,1),//魔攻
//X
Array(2048815,1,3),//寵物裝備物攻
Array(2048816,1,3),//魔攻
Array(2612055,1,3),//雙手武器物攻
Array(2612056,1,3),//魔攻
Array(2613048,1,3),//單手武器物攻
Array(2613049,1,3),//魔攻
Array(2615029,1,3),//飾品物攻
Array(2615030,1,3),//魔攻
Array(2616059,1,3),//防具物攻
Array(2616060,1,3),
//V  2630648,1),自選
Array(2048819,1,7),//寵物裝備物攻
Array(2048820,1,7),//魔攻
Array(2612074,1,7),//雙手武器物攻
Array(2612075,1,7),//魔攻
Array(2613062,1,7),//單手武器物攻
Array(2613063,1,7),//魔攻
Array(2615041,1,7),//飾品物攻
Array(2615042,1,7),//魔攻
Array(2616072,1,7),//防具物攻
Array(2616073,1,7)//魔攻
);
if(pos==1){
	for(let x = 0;x<itemList.length;x++){
				//java.lang.System.out.println(itemList[x][0]+"---"+itemList[x][1]);
				for (let i=0;i<itemlist0.length;i++){
					if(itemlist0[i][0] == itemList[x][0]){
					itemss = itemlist0[i][2];
					}
				}
				player.loseItem(itemList[x][0],itemList[x][1]);
				player.gainItem(4021032,itemList[x][1]*itemss);
			}
}
}