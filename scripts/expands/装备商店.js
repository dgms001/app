var a = 0;
var text;
var selects; //記錄玩家的1選項
var 數量 = 0;
var itemlist = Array(
	

    Array(1182158, 1), //惡靈附身的娃娃椅子
    //Array(1143159, 1), //海盜的俘虜
    Array(1190302, 1), //惡靈附身的娃娃椅子

    Array(1202285, 1), //惡靈附身的娃娃椅子
    Array(1202284, 1), //海盜的俘虜
    Array(1202283, 1), //惡靈附身的娃娃椅子
    Array(1202282, 1), //海盜的俘虜

    Array(1152154, 1), //惡靈附身的娃娃椅子
    Array(1032200, 1), //海盜的俘虜
	
    Array(1122150, 1), //惡靈附身的娃娃椅子

    Array(1122076, 1), //紅環凳
    Array(1012478, 1), //黃環凳
    Array(1022232, 1), //暖暖桌
    Array(1662072, 1), //玩具粉熊椅
    Array(1672069, 1), //惡靈附身的娃娃椅子

    Array(1162025, 1), //黑環凳

    Array(1114304, 1), //黃環凳
    Array(1113070, 1), //惡靈附身的娃娃椅子
    Array(1113072, 1), //海盜的俘虜
    Array(1113073, 1), //藍環凳
    Array(1113282, 1), //黑環凳
    Array(1113055, 1), //紅環凳
    Array(1114311, 1), //黃環凳
	
    Array(2431938, 1), //藍色海豹靠墊
	Array(2433028, 1), //藍色海豹靠墊	
    Array(2432069, 1), //藍環凳
    Array(1354007, 1), //藍環凳
	
	Array(1213016, 1), //藍色海豹靠墊
    Array(1005303, 1), //黑環凳
    Array(1042255, 1), //紅環凳
    Array(1062166, 1), //黃環凳
    Array(1062261, 1), //藍環凳
    Array(1042395, 1), //黑環凳
    Array(1005305, 1), //紅環凳
    Array(1005306, 1), //黃環凳
    Array(1042396, 1), //黑環凳
    Array(1062262, 1), //紅環凳
    Array(1005302, 1), //黃環凳
    Array(1042392, 1), //藍環凳
    Array(1062258, 1), //黑環凳
    Array(1005304, 1), //紅環凳
    Array(1042394, 1), //黃環凳
    Array(1062260, 1), //紅環凳   
);


hgggg1();
function hgggg1(){


text = "#h0#,你好！在這裡可以選擇你想要購買的物品,點擊圖片查看價格購買\r\n\r\n#b";//
for (var i=0; i<itemlist.length; i++) {
text += "#L" + i + "##i" + itemlist[i] + "# #b#z" + itemlist[i] + "#   #r" +  itemlist[i][1] + "楓幣\r\n";
if (i != 0 && (i+1) % 5 == 0) {
text += "\r\n";
}
}
let selection = npc.askMenu(text);

selects = selection;
數量 = npc.askNumber("#r警#g告：#b請注意背包空位夠不夠，請注意(有些物品是1個物品占1個格子哦)!\r\n#r警#g告：#b如果空位不夠，購買的物品將消失，不給與任何賠償!\r\n\r\n#k#d請輸入你請你輸入想要購買的數量\r\n#r#e1個#i" + itemlist[selects][0] + "#需要" + itemlist[selects][1] + "楓幣", 1, 1, 10000);
npc.sayNext("你想購買" + 數量 + "個#r#i" + itemlist[selects][0] + "##k？\r\n你將使用掉" + (數量 * (itemlist[selects][1])) + "楓幣。");

if (player.hasMesos(數量 * (itemlist[selects][1])) && player.canGainItem(itemlist[selects][0],數量)) {
player.loseMesos(數量 * (itemlist[selects][1]));
player.gainItem(itemlist[selects][0], 數量);
player.dropMessage(2,"扣除楓幣 "+ 數量 * (itemlist[selects][1]) +"");
npc.broadcastNoticeWithoutPrefix("『楓幣商店』：玩家 " + player.getName() + " 在楓幣商店購買了"+數量+"個" + player.makeItemWithId(itemlist[selects][0]).getItemName() + "。");
npc.say("購買成功了！");
} else {
npc.say("失敗：\r\n1). 背包欄位已滿,請清理 \r\n2). 你沒有足夠的楓幣。");

}
hgggg1();
}