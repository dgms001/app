equip = player.getInventorySlot(1, 1);
let itemeq = Array(
	1190555,
	1190556,
	1190557,
	1190558,
	1190559
);
var ItemSl = Array(
	Array(2633634, 1),
	Array(4032053, 1),
	Array(4021032, 1),
);


if (equip == null) {
	npc.say("第一格放上裝備");
} else {
	if (equip.getTitle() == "") {
		equip.setTitle("強化+" + 0);
	}
	txt = "\r\n";
	txt += "#fs14##b";
	txt += "#e可使用道具:#n\r\n";
	txt += "#v1190555##v1190556##v1190557##v1190558##v1190559#\r\n";

	txt += "請放在第一格\r\n";
	txt += "\r\n";
	txt += "保留屬性 : 強化改屬\r\n";
	txt += "\r\n";
	txt += "#n\r\n轉換需要的材料如下:\r\n";
	for (var i = 0; i < ItemSl.length; i++) {
		txt += "#v" + ItemSl[i][0] + "# 需要 [ #r" + ItemSl[i][1] + " #b] 當前擁有:#c" + ItemSl[i][0] + "#\r\n\r\n";
	}
	txt += "\r\n";
	/*txt += "equip.getId() :"+equip.getId()+"\r\n";//不知名返回值
	txt += "equip.getDataId() :"+equip.getDataId()+"\r\n"; //道具ID
	txt += "equip.getMixColor() :"+equip.getMixColor()+"\r\n";//染色數值，不知名數值
	txt += "equip.getGrade() :"+equip.getGrade()+"\r\n";//潛能等級
	txt += "equip.getAnOption(1) :"+equip.getAnOption(1)+"\r\n";
	txt += "equip.getItemState() :"+equip.getItemState()+"\r\n";//524544 鎖定欄位
	txt += "equip.getExGradeOption() :"+equip.getExGradeOption()+"\r\n";//星火數值，不知名數值
	txt += "equip.getAttribute() :"+equip.getAttribute()+"\r\n";//1080 1次交換可能   40無法交換  0原生狀態*/
	/*txt += "刻名:"+equip.getTitle()+"\r\n";
	txt += "力量:"+equip.getStr()+" ";
	txt += "敏捷:"+equip.getDex()+" ";
	txt += "智慧:"+equip.getInt()+" ";
	txt += "幸運:"+equip.getLuk()+"\r\n";
	txt += "物理攻擊:"+equip.getPad()+" ";
	txt += "魔法攻擊:"+equip.getMad()+"\r\n";
	txt += "B傷害:"+equip.getBossDamageR()+" ";
	txt += "無視:"+equip.getIgnorePDR()+" ";
	txt += "傷害:"+equip.getDamR()+"\r\n";
	txt += "HP:"+equip.getMaxHp()+" ";
	txt += "MP:"+equip.getMaxMp()+"\r\n";
	txt += "星力 :"+equip.getCHUC()+"\r\n";//星力
	txt += "未使用卷軸數:"+equip.getRUC()+"\r\n";//可使用卷軸
	txt += "已使用卷軸數:"+equip.getCUC()+"\r\n";//卷軸已用
	txt += "黃金槌子:"+equip.getIUC()+"\r\n";//黃金槌子
	txt += "白金槌子:"+equip.getIUC2()+"\r\n";//白金槌子*/
	txt += "#L" + equip.getDataId() + "##v" + equip.getDataId() + "#米特拉轉換#l\r\n";



	let sel = npc.askMenuS(txt);
	switch (equip.getDataId()) {  //抓贊助屬性 跟 強化中心屬性

		case 1190555:
		case 1190556:
		case 1190557:
		case 1190558:
		case 1190559:
			txt = "#b你想換成什麼?\r\n#r";
			for (let i = 0; i < itemeq.length; i++) {
				txt += "#L" + itemeq[i] + "##v" + itemeq[i] + "##z" + itemeq[i] + "##l \r\n";
			}
			sel1 = npc.askMenuS(txt, true);

			if (!player.hasItem(ItemSl[0][0], ItemSl[0][1])) {
				npc.say("#fs18##b#e你並沒有足夠的材料所以不能強化");
			} else if (!player.hasItem(ItemSl[1][0], ItemSl[1][1])) {
				npc.say("#fs18##b#e你並沒有足夠的材料所以不能強化");
			} else if (!player.hasItem(ItemSl[2][0], ItemSl[2][1])) {
				npc.say("#fs18##b#e你並沒有足夠的材料所以不能強化");
			} else {

				SATA4UPDATE = 75;	//強化屬性
				ADAPUPDATE = 75;	//
				BossDUPDATE = 5;
				IgnorePDRUPDATE = 5;	//無視
				DamRUPDATE = 5;	//傷害

				player.loseInvSlot(1, 1);
				for (var key in ItemSl) {
					player.loseItem(ItemSl[key][0], ItemSl[key][1]);
				}
				let newItem = player.makeItemWithId(sel1);
				var str = equip.getTitle();
				var get = str.substring(3, 4);
				var qhcs = Number(get);
				newItem.setTitle("強化+" + qhcs);
				Str = newItem.getStr();
				Dex = newItem.getDex();
				Int = newItem.getInt();
				Luk = newItem.getLuk();
				Hp = newItem.getMaxHp();
				Pad = newItem.getPad();
				Mad = newItem.getMad();


				newItem.setStr(Str + SATA4UPDATE * qhcs);
				newItem.setDex(Dex + SATA4UPDATE * qhcs);
				newItem.setInt(Int + SATA4UPDATE * qhcs);
				newItem.setLuk(Luk + SATA4UPDATE * qhcs);
				newItem.setMaxHp(Hp);
				newItem.setPad(Pad + ADAPUPDATE * qhcs);
				newItem.setMad(Mad + ADAPUPDATE * qhcs);
				newItem.setBossDamageR(BossDUPDATE * qhcs);
				newItem.setIgnorePDR(IgnorePDRUPDATE * qhcs);
				newItem.setDamR(DamRUPDATE * qhcs);
				player.gainItem(newItem);
				player.showSystemMessage("米特拉的憤怒，轉換成功了！！");

			}

			break;
		default:
			// npc.broadcastPlayerNotice(16,"玩家" + player.getName() + "非常規回真,以記錄數據!");
			// player.addEventValue("普通裝備回真檢測",1,1000);
			// npc.say("#fs14##b哈囉,別亂放其他裝備,先行紀錄數據1次,目前已檢測"+player.getEventValue("普通裝備回真檢測")+"次");//什麼也不是卻在案此系統(可以給予懲罰
			npc.say("#fs14##b這不是米特拉的憤怒吧?");
			break;
	}



}