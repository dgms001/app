var status = -1
var txt;
/*------------------------------------------------------------*/
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var GC3 = "#fEffect/CharacterEff/1082700/1/0#"; //"+z+"//小選項用
var items = Array(
    Array(5021000, 150000, 1, ""),	
    Array(5021000, 150000, 1, ""),	
    Array(5021001, 150000, 1, ""),	
   
    	
    Array(5021012, 150000, 1, ""),	
    Array(5021013, 150000, 1, ""),	
    Array(5021014, 150000, 1, ""),	
    Array(5021015, 150000, 1, ""),	
    Array(5021017, 150000, 1, ""),	
    Array(5021018, 150000, 1, ""),	
    Array(5021021, 150000, 1, ""),
    Array(5021022, 150000, 1, ""),
    Array(5021023, 150000, 1, ""),
    Array(5021024, 150000, 1, ""),

);

    txt = "#fs21##e#r你好,這裡是飛鏢特效商店!!!\r\n";



for (var i = 1; i < items.length; i++) {
    txt += "#fs16##e#b#L" + i + "##b#v" + items[i][0] + "# #b#z" + items[i][0] + "##b#e #r" + items[i][1] + " #b楓點 " + items[i][3] + "#n\r\n";
}
let selection = npc.askMenuA(txt);
i = selection;

if(items[i][3]=="1天"){
	selection = npc.askNumber("購買道具為：#v" + items[i][0] + "# #z" + items[i][0] + "##k\r\n10000楓點等於1天\r\n請輸入想購買的天數：", 1, 1, 30);
}else{
	npc.say("購買道具為：#fs16##e#b#v" + items[i][0] + "# #z" + items[i][0] + "# 1個");
	selection = 1 ;
}

if (i) {
    GS = selection;
    QSS = GS * items[i][1];
    if (player.getCashShopCurrency(2) < QSS) {
        npc.say("#fs16##b#e楓葉點數不足，無法購買");
    } else {
		player.showSystemMessage("消耗 [ "+(QSS)+" ] 楓點");
        player.modifyCashShopCurrency(2, -QSS);
        //player.gainItem(items[i][0], items[i][2] * GS);
		gainItemPeriod(items[i][0], items[i][2],items[i][3],GS)
        //player.addAccountEventValue(items[i][3], GS);
        npc.say("#fs16##b#e購買成功");
    }
}


function gainItemPeriod(itemid,quantity,AA,times){
	time = 1000*60*60*24*1*times ;
	if(AA=="1天"){ //符合範圍
		for(var i = 0 ; i < quantity ; i++){
			let newItem = player.makeItemWithId(itemid);
			if(time != 0){
				newItem.setExpiration(new Date().getTime() + time);
			}

			player.gainItem(newItem);
			//npc.sayS("獲得時限道具");
		}
	} else {
		let newItem = player.makeItemWithId(itemid);
		player.gainItem(newItem);
		//npc.sayS("不符合");
	}
}