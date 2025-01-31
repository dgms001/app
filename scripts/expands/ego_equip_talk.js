//NPC / EgoEquipTalk  .js
var jobData = new Array(

	Array("神之子", 10112, 1572000, 1572001, 1572002, 1572003, 1572004, 1572005, 1572006, 1572007, 1572008, 1572009)

	//Array("新手",0)
);
toDrop11 = player.getInventorySlot(-1, -11);//主守
toDrop22 = player.getInventorySlot(-1, -10);
//var charInfo = getCharInfo();//+charInfo.soulsocketid

let str = "#fs16##e#b";
str += "#b1.璃 #i1572000#放到第一格，琉 #i1562000#放到第二格 #r注意！！#k\r\n"
str += "#b2.#b神之子WP系統可使用功能 星火 潛在 衝捲 #k\r\n"
str += "  #b潛在 請先用好3+3排,再衝卷軸#k\r\n"
str += "  #b閃炫自選三排沒變，請拔插武器或重登套用#k\r\n"
str += "#b3.#b星火(璃) 潛在能力(琉) 強拆雙手 會自動移植對應屬性#k\r\n"
str += "#b4.#r不能使用的功能 敲鐵槌請取下分開敲#k\r\n"
str += "#b5.#r星力 星力捲失效 正設手敲可行..#k\r\n"
str += "#b6.#r靈魂 切換阿爾法重登顯示計量表 貝塔吃不到靈魂寶珠#k\r\n"
str += "  #r取下或裝備武器 將遺失靈魂寶珠效果#k\r\n"
str += "#b#fs14#\r\n"
str += "\t\t\t#L0#裝備神子武器#l #L1#取下神子武器#l\r\n\r\n"

str += "\t\t\t#L3#強化神秘9型#l #L5#20星力卷軸#l\r\n"



str += "\r\n\r\n"
if (player.isGm()) {
	str += "\r\n gm:\r\n"
	//str += "#L4#靈魂寶珠移植#l \r\n"
}
//str += ""+toDrop11+"\r\n"+toDrop22+""

let selected = npc.askMenuA(str, (2411023 + Math.floor(Math.random() * 2)));//2411023
if (selected == 0) {
	//強制裝副手
	let toDrop1 = player.getInventorySlot(1, 1);//璃 阿爾法(男角主手11
	let toDrop2 = player.getInventorySlot(1, 2);//琉 貝塔

	if (toDrop1 == null) {
		npc.say("請將 璃 放到第一格，琉放到第二個 且以阿爾法(男角)使用");
	} else {
		var flag = false;
		var index = -1;
		for (var j = 0; j < jobData.length; j++) {
			if (player.getJob() == jobData[j][1]) {
				index = j;
				for (var k = 2; k < jobData[j].length; k++) {
					if (toDrop1.getDataId() == jobData[j][k]) {
						if (toDrop2 != null) {
							if (toDrop1.getDataId() == (toDrop2.getDataId() + 10000)) {
								flag = true;
							}
						}
					}
				}
			}
		}
		//var type = Math.floor(toDrop.getDataId() / 10000);
		//if(type == 135 || type == 109){
		if (flag) {
			//副手欄必須是木盾或者是空 才可以使用
			toDrop22 = player.getInventorySlot(-1, -10);
			toDrop11 = player.getInventorySlot(-1, -11);//主守
			if (toDrop22 == null && toDrop11 == null || toDrop22.getDataId() == 1092003 && toDrop11.getDataId() == 1092003) {
				player.equip(-11, toDrop1.getDataId());//ok放上對應裝備
				player.equip(-10, toDrop2.getDataId());

				toDrop22 = player.getInventorySlot(-1, -10);  //副手在這 第二格
				toDrop22.setTitle(toDrop2.getTitle()); //強化
				toDrop22.setStr(toDrop2.getStr()); //裝備力量
				toDrop22.setDex(toDrop2.getDex()); //裝備敏捷
				toDrop22.setInt(toDrop2.getInt()); //裝備智力
				toDrop22.setLuk(toDrop2.getLuk()); //裝備運氣
				toDrop22.setMad(toDrop2.getMad());//魔法力
				toDrop22.setPad(toDrop2.getPad());//攻擊力
				toDrop22.setStatR(toDrop2.getStatR());// 所有屬性
				toDrop22.setTitle(toDrop2.getTitle());// 道具名
				toDrop22.setCHUC(toDrop2.getCHUC());//星力
				toDrop22.setBossDamageR(toDrop2.getBossDamageR());// BOSS傷 
				toDrop22.setIgnorePDR(toDrop2.getIgnorePDR());// 無視防御
				toDrop22.setAttribute(toDrop2.getAttribute());//鎖定狀態
				toDrop22.setExGradeOption(toDrop2.getExGradeOption());//繼承璃的星火
				toDrop22.setGrade(toDrop2.getGrade())
				toDrop22.setOption(1, toDrop2.getOption(1, false), false);
				toDrop22.setOption(2, toDrop2.getOption(2, false), false);
				toDrop22.setOption(3, toDrop2.getOption(3, false), false);
				toDrop22.setOption(1, toDrop2.getOption(1, true), true);
				toDrop22.setOption(2, toDrop2.getOption(2, true), true);
				toDrop22.setOption(3, toDrop2.getOption(3, true), true);
				toDrop22.setRUC(toDrop2.getRUC());//以敲捲數
				toDrop22.setCUC(toDrop2.getCUC());//卷軸已用
				toDrop22.setIUC(toDrop2.getIUC());//黃金槌子
				toDrop22.setIUC2(toDrop2.getIUC2());//白金槌子
				toDrop22.setDurability(toDrop2.getDurability());

				toDrop11 = player.getInventorySlot(-1, -11);  //主守在這 第一格
				toDrop11.setTitle(toDrop1.getTitle()); //強化
				toDrop11.setStr(toDrop1.getStr()); //裝備力量
				toDrop11.setDex(toDrop1.getDex()); //裝備敏捷
				toDrop11.setInt(toDrop1.getInt()); //裝備智力
				toDrop11.setLuk(toDrop1.getLuk()); //裝備運氣
				toDrop11.setMad(toDrop1.getMad());//魔法力
				toDrop11.setPad(toDrop1.getPad());//攻擊力
				toDrop11.setStatR(toDrop1.getStatR());// 所有屬性
				toDrop11.setTitle(toDrop1.getTitle());// 道具名
				toDrop11.setCHUC(toDrop1.getCHUC());//星力
				toDrop11.setBossDamageR(toDrop1.getBossDamageR());// BOSS傷 
				toDrop11.setIgnorePDR(toDrop1.getIgnorePDR());// 無視防御
				toDrop11.setAttribute(toDrop1.getAttribute());//鎖定狀態
				toDrop11.setExGradeOption(toDrop1.getExGradeOption());//繼承璃的星火
				toDrop11.setGrade(toDrop1.getGrade())
				toDrop11.setOption(1, toDrop1.getOption(1, false), false);
				toDrop11.setOption(2, toDrop1.getOption(2, false), false);
				toDrop11.setOption(3, toDrop1.getOption(3, false), false);
				toDrop11.setOption(1, toDrop1.getOption(1, true), true);
				toDrop11.setOption(2, toDrop1.getOption(2, true), true);
				toDrop11.setOption(3, toDrop1.getOption(3, true), true);
				toDrop11.setRUC(toDrop1.getRUC());//以敲捲數
				toDrop11.setCUC(toDrop1.getCUC());//卷軸已用
				toDrop11.setIUC(toDrop1.getIUC());//黃金槌子
				toDrop11.setIUC2(toDrop1.getIUC2());//白金槌子
				toDrop11.setDurability(toDrop1.getDurability());
				player.updateItem(-11, toDrop11);
				player.updateItem(-10, toDrop22);

				player.loseInvSlot(1, 1);
				player.loseInvSlot(1, 2);
				npc.say("裝備成功！");
			} else {
				var txt = "";
				npc.say("主手副手請先拿下" + txt);
			}
		} else {
			var txt = "";
			txt += "您只能裝備此主手：\r\n";
			for (var k = 2; k < jobData[index].length; k++) {
				txt += "#v" + jobData[index][k] + "#";
			}
			txt += "\r\n或者你的第二格跟第一格不是成對的\r\n";
			if (toDrop1 == null || toDrop2 == null) {
				txt += "#b檢測到沒放裝備";
			} else {
				txt += "#b顯示你所放的武器是#i" + toDrop1.getDataId() + "##i" + toDrop2.getDataId() + "#";
			}
			npc.say(txt);
		}
	}
} else if (selected == 1) {
	//卸下副手
	if (player.getFreeSlots(1) < 2) {
		npc.askMenu("請清理裝備欄，留出兩格空位");
	} else {
		let toDrop = player.getInventorySlot(-1, -10);
		toDrop2 = player.getInventorySlot(-1, -11);
		if (toDrop == null && toDrop2 == null || toDrop.getDataId() == 1092003 && toDrop2.getDataId() == 1092003) {
			npc.say("你沒有佩戴副手，或者使用了本系統沒有切換角色！或者身上被替換成了#v1092003#");
		} else {
			//player.loseInvSlot(-1,-10);
			//player.updateItem(-10, toDrop);
			player.equip(-10, 1092003);
			player.equip(-11, 1092003);

			//制作裝備
			newItem2 = player.makeItemWithId(toDrop2.getDataId());
			newItem2.setTitle(toDrop2.getTitle()); //強化
			newItem2.setStr(toDrop2.getStr()); //裝備力量
			newItem2.setDex(toDrop2.getDex()); //裝備敏捷
			newItem2.setInt(toDrop2.getInt()); //裝備智力
			newItem2.setLuk(toDrop2.getLuk()); //裝備運氣
			newItem2.setMad(toDrop2.getMad());//魔法力
			newItem2.setPad(toDrop2.getPad());//攻擊力
			newItem2.setStatR(toDrop2.getStatR());// 所有屬性
			newItem2.setTitle(toDrop2.getTitle());// 道具名
			newItem2.setCHUC(toDrop2.getCHUC());//星力
			newItem2.setBossDamageR(toDrop2.getBossDamageR());// BOSS傷 
			newItem2.setIgnorePDR(toDrop2.getIgnorePDR());// 無視防御
			newItem2.setAttribute(toDrop2.getAttribute());//鎖定狀態
			newItem2.setRUC(toDrop2.getRUC());//以敲捲數
			newItem2.setCUC(toDrop2.getCUC());//卷軸已用
			newItem2.setIUC(toDrop2.getIUC());//黃金槌子
			newItem2.setIUC2(toDrop2.getIUC2());//白金槌子
			newItem2.setSoulOption(toDrop2.getSoulOption());
			newItem2.setExGradeOption(toDrop2.getExGradeOption());//繼承璃的星火
			newItem2.setGrade(toDrop.getGrade());
			newItem2.setOption(1, toDrop.getOption(1, false), false);
			newItem2.setOption(2, toDrop.getOption(2, false), false);
			newItem2.setOption(3, toDrop.getOption(3, false), false);
			newItem2.setOption(1, toDrop.getOption(1, true), true);
			newItem2.setOption(2, toDrop.getOption(2, true), true);
			newItem2.setOption(3, toDrop.getOption(3, true), true);
			newItem2.setDurability(toDrop2.getDurability());
			player.gainItem(newItem2);

			newItem = player.makeItemWithId(toDrop.getDataId()); //這是琉的武器 貝塔
			newItem.setTitle(toDrop.getTitle()); //強化
			newItem.setStr(toDrop.getStr()); //裝備力量
			newItem.setDex(toDrop.getDex()); //裝備敏捷
			newItem.setInt(toDrop.getInt()); //裝備智力
			newItem.setLuk(toDrop.getLuk()); //裝備運氣
			newItem.setMad(toDrop.getMad());//魔法力
			newItem.setPad(toDrop.getPad());//攻擊力
			newItem.setStatR(toDrop.getStatR());// 所有屬性
			newItem.setTitle(toDrop.getTitle());// 道具名
			newItem.setCHUC(toDrop.getCHUC());//星力
			newItem.setBossDamageR(toDrop.getBossDamageR());// BOSS傷 
			newItem.setIgnorePDR(toDrop.getIgnorePDR());// 無視防御
			newItem.setAttribute(toDrop.getAttribute());//鎖定狀態
			newItem.setRUC(toDrop.getRUC());//以敲捲數
			newItem.setCUC(toDrop.getCUC());//卷軸已用
			newItem.setIUC(toDrop.getIUC());//黃金槌子
			newItem.setIUC2(toDrop.getIUC2());//白金槌子
			newItem.setSoulOption(toDrop2.getSoulOption());
			newItem.setExGradeOption(toDrop2.getExGradeOption());
			newItem.setGrade(toDrop.getGrade())
			newItem.setOption(1, toDrop.getOption(1, false), false);
			newItem.setOption(2, toDrop.getOption(2, false), false);
			newItem.setOption(3, toDrop.getOption(3, false), false);
			newItem.setOption(1, toDrop.getOption(1, true), true);
			newItem.setOption(2, toDrop.getOption(2, true), true);
			newItem.setOption(3, toDrop.getOption(3, true), true);
			newItem.setDurability(toDrop.getDurability());
			player.gainItem(newItem);


			npc.say("卸載成功");
		}
	}
} else if (selected == 3) {
 player.runScript("神之子強化");
	/*toDrop22 = player.getInventorySlot(-1, -10);
	toDrop11 = player.getInventorySlot(-1, -11);

	var ItemList = Array(
		1572009,
		1562009,
		1572006,
		1562006,
		1572009,
		1562009,
	);
	var ItemSl = Array(
		Array(4032216, 5000),
		Array(4032053, 5000),
		Array(4001226, 5),
		Array(4001872, 1),
	);
	var randList = Array(
		Math.floor(50), //str
		Math.floor(50), //dex
		Math.floor(50), //inte
		Math.floor(50), //luk
		Math.floor(50), //pad
		Math.floor(50), //mad
		Math.floor(1), //boss
		Math.floor(1), //wushi
	);

	var times = 0;
	var 可強化次數 = 10;
	avail = "#b需要的材料如下:\r\n";
	for (var i = 0; i < ItemSl.length; i++) {
		avail += "#v" + ItemSl[i][0] + "# 需要 [ #r" + ItemSl[i][1] + " #b] 當前擁有:#c" + ItemSl[i][0] + "#\r\n\r\n";
	}
	avail += "每次強化提升：\r\n力量[#r" + randList[0] + "#b] 敏捷[#r" + randList[1] + "#b] 智力[#r" + randList[2] + "#b]\r\n幸運[#r" + randList[3] + "#b] 物攻[#r" + randList[4] + "#b] 魔攻[#r" + randList[5] + "#b] 可強化次數:[#r" + 可強化次數 + "#b]\r\n";

	avail += "\t\t#L0##b點我強化#v" + toDrop11 + toDrop22 + "##l#k\r\n#k";

	let selze = npc.askMenuA(avail);
	if (toDrop11.getTitle() == "") {
		toDrop22.setTitle("強化+" + 0);
		toDrop11.setTitle("強化+" + 0);
	}
	if (selze == 0) {
		if (!player.hasItem(ItemSl[0][0], ItemSl[0][1])) {
			npc.say("#fs18##b#e你並沒有足夠的材料所以不能強化");
		} else if (!player.hasItem(ItemSl[1][0], ItemSl[1][1])) {
			npc.say("#fs18##b#e你並沒有足夠的材料所以不能強化");
		} else if (!player.hasItem(ItemSl[2][0], ItemSl[2][1])) {
			npc.say("#fs18##b#e你並沒有足夠的材料所以不能強化");
		} else if (!player.hasItem(ItemSl[3][0], ItemSl[3][1])) {
			npc.say("#fs18##b#e你並沒有足夠的材料所以不能強化");
		} else if (toDrop11 == null && toDrop22 == null) {
			npc.say("#fs18##b#e請在裝備你的武器！");
		} else {
			var itemid1 = toDrop11.getDataId();
			var itemid2 = toDrop22.getDataId();
			var flag = 0;
			for (var i = 0; i < ItemList.length; i++) {
				if (itemid1 == 1572009 && itemid2 == 1562009) {
					flag = 1;
				}
			}
			if (flag != 1) {
				npc.say("請檢查裝備是否放入神秘9型");
			} else {
				var str = toDrop11.getTitle();
				if (str != null) {
					if (str.length > 0) {
						str = toDrop11.substring(3, 4);
						times = parseInt(str);
					} else {

						times == 0;
					}
				}
				str = str.substring(3, 4);
				if (str >= 可強化次數) {
					npc.say("強化次數已經到達上限,目前強化只開放到" + 可強化次數 + "次");
				} else {
					var info = "裝備：#v" + toDrop11.getDataId() + "##t" + toDrop11.getDataId() + "##v" + toDrop22.getDataId() + "##t" + toDrop22.getDataId() + "#\r\n\r\n";
					info += "#r點擊‘是’會增加當前顯示屬性並且強化等級+1 ，最多強化" + 可強化次數 + "次#k\r\n"
					//保存更新記錄
					info += "\r\n#b強化:#k#g-> #r本次";
					info += "\r\n#b力量:#k#g-> #r" + randList[0];
					info += "\r\n#b敏捷:#k#g-> #r" + randList[1];
					info += "\r\n#b智力:#k#g-> #r" + randList[2];
					info += "\r\n#b運氣:#k#g-> #r" + randList[3];
					info += "\r\n#b攻擊力:#k#g-> #r" + randList[4];
					info += "\r\n#b魔法力:#k#g-> #r" + randList[5];
					let sel = npc.askYesNoSNoEsc(info);
					if (sel == 1) {
						toDrop11.setStr(toDrop11.getStr() + randList[0]);
						toDrop11.setDex(toDrop11.getDex() + randList[1]);
						toDrop11.setInt(toDrop11.getInt() + randList[2]);
						toDrop11.setLuk(toDrop11.getLuk() + randList[3]);
						toDrop11.setPad(toDrop11.getPad() + randList[4]);
						toDrop11.setMad(toDrop11.getMad() + randList[5]);

						toDrop22.setStr(toDrop22.getStr() + randList[0]);
						toDrop22.setDex(toDrop22.getDex() + randList[1]);
						toDrop22.setInt(toDrop22.getInt() + randList[2]);
						toDrop22.setLuk(toDrop22.getLuk() + randList[3]);
						toDrop22.setPad(toDrop22.getPad() + randList[4]);
						toDrop22.setMad(toDrop22.getMad() + randList[5]);
						var str = toDrop11.getTitle();
						var get = str.substring(3, 4);
						var qhcs = Number(get) + 1;
						toDrop11.setTitle("強化+" + qhcs);
						toDrop22.setTitle("強化+" + qhcs);
						for (var key in ItemSl) {
							player.loseItem(ItemSl[key][0], ItemSl[key][1]);
						}
						npc.say("成功，切換頻道查看武器");
						npc.say("成功，切換頻道查看武器");
						npc.say("成功，切換頻道查看武器");
					} else {
						npc.say("好吧，下次再來~");
					}
				}
			}
		}
	}
*/
} else if (selected == 4) {

} else if (selected == 5) {
	toDrop22 = player.getInventorySlot(-1, -10);
	toDrop11 = player.getInventorySlot(-1, -11);//主守
	if (toDrop11 == null || toDrop22 == null) {
		npc.say("手上空空的");
	} else {
		txt = "確認你的主副手是否是神子武器\r\n";
		txt += "查看: #i" + toDrop11.getDataId() + "##i" + toDrop22.getDataId() + "#\r\n";
		txt += "按下確認執行上星";

		npc.say(txt);
		if (player.hasItem(2049376, 1)) {
			if (toDrop22.getCHUC() < 20 && toDrop22.getCHUC() < 20) {
				toDrop22.setCHUC(20);//星力
				toDrop11.setCHUC(20);//星力
				player.loseItem(2049376, 1);
				npc.say("成功，切換頻道套用");
			} else {
				npc.say("失敗，請確認武器低於20星");
			}

		} else if (player.hasItem(2049389, 1)) {
			if (toDrop22.getCHUC() < 20 && toDrop22.getCHUC() < 20) {
				toDrop22.setCHUC(20);//星力
				toDrop11.setCHUC(20);//星力
				player.loseItem(2049389, 1);
				npc.say("成功，切換頻道套用");
			} else {
				npc.say("失敗，請確認武器低於20星");
			}
		} else if (player.hasItem(2644029, 1)) {
			if (toDrop22.getCHUC() < 20 && toDrop22.getCHUC() < 20) {
				toDrop22.setCHUC(20);//星力
				toDrop11.setCHUC(20);//星力
				player.loseItem(2644029, 1);
				npc.say("成功，切換頻道套用");
			} else {
				npc.say("失敗，請確認武器低於20星");
			}
		} else {
			npc.say("你沒有20星力捲吧?");
		}
	}
}





//獲取裝備類型
function getItemType(itemid) {
	var type = Math.floor(itemid / 10000);
	switch (type) {
		case 100:
			return 0; //帽子
		case 104:
			return 1; //上衣
		case 105:
			return 2; //套裝
		case 106:
			return 3; //褲裙
		case 107:
			return 4; //鞋子
		case 108:
			return 5; //手套
		case 110:
			return 6; //披風
		case 115:
			return 13; //護肩
		case 111:
			return 9; //ring
		case 112:
			return 10; //戒指
		case 113:
			return 11;//腰帶
		case 103:
			return 12; //耳環
		case 101:
			return 14;
		case 102:
			return 16;

		default:
			if (type == 120) return -1; //圖騰
			if (type == 119) return -1; //徽章
			if (type == 135) return -1; //副手
			if (type == 171) return -1; //神秘
			if (type == 116) return -1; //口袋
			if (type == 114) return -1; //稱號
			if (type == 167) return -1; //心臟
			var type = Math.floor(type / 10);
			if (type == 12 || type == 13 || type == 14 || type == 15 || type == 17) {
				return 7; //武器
			}
			return -1;
	}
}

function getCharInfo() {
	var sql = "SELECT	A1.soulsocketid,	A1.souloptionid FROM	inventoryitems_equip AS A1,	inventoryitems AS B1 WHERE	A1.id = ? 	AND A1.souloption = ? 	AND B1.owner_id = ? 	AND B1.type = - 1 	AND B1.position = - 11";
	var resultList = player.customSqlResult(sql, toDrop11.getId(), toDrop11.getSoulOption(), player.getId());
	var charInfo = {};
	for (var i = 0; i < resultList.size(); i++) {
		var result = resultList.get(i);
		if (result == null) {
			break;
		}
		charInfo.soulsocketid = result.get("soulsocketid");
		charInfo.souloptionid = result.get("souloptionid");
	}
	return charInfo;
}