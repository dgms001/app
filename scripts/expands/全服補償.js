
/*  This is mada by dgms    
 *  This source is made by Funms Team
 *  功能：等級送禮
 *  @Author dgms 
 */
//10, 100, 150, 200, 210, 220, 230, 240, 250, 260, 275 ,275, 280, 285, 290, 295, 300
var status = 0;
var bossid = "全服補償";
var giftLevel = Array(200, 200, 100, 200, 200, 200);
var giftLevel2 = Array(1, 2, 3, 4, 5, 6);
var off = Array(1, 1, 1, 1, 1, 0);//開關 1為顯示 0為不顯示
var giftContent = Array(//力量.敏捷.致力.幸運.生命.魔力.物攻.魔攻.B傷.無視傷.總傷.星力
	//10
	Array(
		/*Array(5060048,5),//雪花
		Array(5062009,50),	
		Array(5062010,50),	
		Array(5062017,50),	
		Array(5062020,50),	
		Array(5062500,30),
		Array(5060029,100),
		Array(4032053,1000),
		Array(1142496,1,1,100,100,100,100,0,0,20,20,10,10,10,0)*/
		Array(5060048, 20),
		Array(2450175, 5),
		Array(5121059, 1)
	),
	Array(
		Array(4009411, 5),//雪花
		Array(4032053, 3500),
		Array(5121059, 2)
	),
	Array(
		Array(4009411, 3),//雪花
		Array(5062009, 50),//R方
		Array(5062010, 25),//黑方
		Array(5062017, 20),//閃耀
		Array(5062020, 20),//閃炫
		Array(5060048, 100),//蘋果
		Array(4032053, 1000)//金鋒
	),
	Array(
		Array(4009411, 5),//雪花
		Array(5062009, 60),//R方
		Array(5062010, 30),//黑方
		Array(5062017, 30),//閃耀
		Array(5062020, 20),//閃炫
		Array(5060048, 50),//蘋果
		Array(4032053, 3000)//金鋒
	),
	Array(
		Array(5680796, 20)
	),
	Array(
		Array(5062009, 60),//R方
		Array(5062010, 30),//黑方
		Array(5062017, 30),//閃耀
		Array(5062020, 20),//閃炫
		Array(5060048, 50),//蘋果
		Array(4032053, 3000)//金鋒
	)
);
var GC2 = "#fEffect/CharacterEff/1022223/2/0#"; //藍色星星
var GC3 = "#fEffect/CharacterEff/1112924/0/0#"; //"+z+"//小選項用
var lq1 = "#fUI/UIWindow2.img/crossHunterUI/reward/button/normal/0#"
var lq2 = "#fUI/UIWindow2.img/crossHunterUI/reward/button/disabled/0#"

var GC2 = "#fEffect/CharacterEff/1022223/2/0#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1112924/0/0#"; //"+z+"//小選項用
var GC1 = "";
//var GC1 = "#fEffect/CharacterEff/1082700/2/0#";
var XD0 = "#fEffect/CharacterEff/1051366/0/0#";
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/5/icon#"; //最上面的

var giftId = -1;
var giftToken = Array();
var gifts = null;
var txt = "";
//txt += ""+GC1+GC1+GC1+GC1+"\r\n";

txt = "\t\t   " + SR3 + "#fs32##fc0xFF00caf2##e《全服補償》" + SR3 + "\r\n";
txt += "" + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + "\r\n";
txt += "#fs17##fc0xFFFFF300#";

var onoff = 1;
for (var i = 0; i < giftLevel.length; i++) {
	for (var i = 0; i < giftLevel2.length; i++) {
		var tips = "";
		if (player.getLevel() >= giftLevel[i]) {
			/*if(player.getEventValue(bossid + (i + 1)) == 0) {
				tips = "";
			} else {
				tips = "已領取";
			}*/
		} else {
			tips = "#r(等級不足)#b";
		} if (player.getEventValue(bossid + (i + 1)) == 0) {
			for (var i = 0; i < off.length; i++) {
				if (onoff = off[i]) {
					if (player.getEventValue(bossid + (i + 1)) == 0) {
						tips = "";
						txt += "#e#b#L" + i + "#" + GC1 + " 領取#r#e" + bossid + "" + giftLevel2[i] + "#n#b禮包" + tips + "#l#k\r\n";
					} else {
						//tips = "已領取";
						//txt += "#e#b#L" + i + "#" + GC1 + " 領取#r#e" + bossid + "" + giftLevel2[i] + "#n#b禮包" + tips + "#l#k\r\n";
					}

					//txt += "#e#b#L" + i + "#" + GC1 + " 領取#r#e" + bossid + "" + giftLevel2[i] + "#n#b禮包" + tips + "#l#k\r\n";
				}
				//txt += "#e#b#L" + i + "#" + GC1 + " 領取#r#e" + bossid + "" + giftLevel2[i] + "#n#b禮包" + tips + "#l#k\r\n";
			}
		}
	}
}

let giftId = npc.askMenuA(txt, true);
var txt = "#r#e" + bossid + "" + giftLevel2[giftId] + "#n#b禮包 內容：\r\n";
gifts = giftContent[giftId];
for (var i = 0; i < gifts.length; i++) {
	var itemId = gifts[i][0];
	var getItemQuantity = gifts[i][1];
	txt += "#v" + itemId + "##b#z" + itemId + "##k #rx " + getItemQuantity + "#k\r\n";
	if (gifts[i][3] >= 0) {
		txt += "力量[" + gifts[i][3] + "] 敏捷[" + gifts[i][4] + "] 智慧[" + gifts[i][5] + "] 幸運[" + gifts[i][6] + "]\r\n";
		txt += "HP[" + gifts[i][7] + "] MP[" + gifts[i][8] + "] 攻擊[" + gifts[i][9] + "] 魔攻[" + gifts[i][10] + "]\r\n";
		txt += "B傷[" + gifts[i][11] + "] 無視[" + gifts[i][12] + "] 總傷[" + gifts[i][13] + "] 星力[" + gifts[i][14] + "]\r\n";
	}
}
txt += "\r\n#d是否現在就領取該禮包？#k";
txt += "\r\n#d(可以給分身拿勳章哦)#k";
let sel = npc.askYesNo(txt);


if (sel == 1) {

	if (player.getFreeSlots(1) < 8 || player.getFreeSlots(2) < 8 || player.getFreeSlots(3) < 8 || player.getFreeSlots(4) < 8 || player.getFreeSlots(5) < 8) {
		npc.say("您的背包空間不足,請保證每個欄位至少8格的空間,以避免領取失敗。");
	} else {
		//var job = player.getJob();
		if (player.getEventValue(bossid + (giftId + 1)) == 0 && player.getLevel() >= giftLevel[giftId]) {
			/*if(giftId==giftContent.length-1){
				if(player.getEventValue("300獎勵")<1){
					player.addEventValue("300獎勵", 1, 999);
					player.addPQLog(bossid + (giftId + 1), 1, 365);
					
					for(var i = 0; i < gifts.length; i++) {
						var itemId = gifts[i][0];
						var getItemQuantity = gifts[i][1];
						player.gainItem(itemId, getItemQuantity);
					}
					
					npc.say("恭喜您,領取成功！快打開包裹看看吧！");
					player.runScript("等級獎勵");
				}else{
					npc.say("300級的獎勵,每個帳號只有一次機會哦");
				}
			}else */

			player.addEventValue(bossid + (giftId + 1), 1, 999);
			for (var i = 0; i < gifts.length; i++) {
				var itemId = gifts[i][0];
				var getItemQuantity = gifts[i][1];
				if (gifts[i][3] >= 0) {
					let newItem = player.makeItemWithId(itemId);
					newItem.setStr(gifts[i][3]);
					newItem.setDex(gifts[i][4]);
					newItem.setInt(gifts[i][5]);
					newItem.setLuk(gifts[i][6]);
					newItem.setMaxHp(gifts[i][7]);
					newItem.setMaxMp(gifts[i][8]);
					newItem.setPad(gifts[i][9]);
					newItem.setMad(gifts[i][10]);
					newItem.setBossDamageR(gifts[i][11]);
					newItem.setIgnorePDR(gifts[i][12]);
					newItem.setDamR(gifts[i][13]);
					newItem.setCHUC(gifts[i][14]);
					player.gainItem(newItem);
				} else {
					player.gainItem(itemId, getItemQuantity);
				}


			}

			npc.say("恭喜您,領取成功！快打開禮包看看吧1！");
			player.runScript("全服補償");



		} else {
			npc.say("您已經領過了該禮包或者已過要求時間,無法領取。");
			player.runScript("全服補償");
		}
	}

}


