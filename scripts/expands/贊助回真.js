equip = player.getInventorySlot(1, 1);

if (player.getInventorySlot(1, 1) == null) {
	npc.say("第一格放上回真裝備");
} else {
	txt = "\r\n";
	txt += "#fs14##b";

	txt += "當前開放贊助裝備回真如下:\r\n";
	txt += "#v1113096##v1122267##v1113075##v1032223##v1132246##v1012632##v1022278##v1122430##v1113211##v1672075##v1113306##v1672069##v1113195##v1113196##v1182285##v1132308##v1032316#";
	txt += "\r\n";
	txt += "";
	txt += "";
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
	txt += "#L" + equip.getDataId() + "#回真贊助屬性裝備#l\r\n";

	let sel = npc.askMenuS(txt);

	switch (equip.getDataId()) {  //抓贊助屬性 跟 強化中心屬性
		case 1113096:						//狐狸戒指
			SATA4 = 150;	//4屬性    改屬
			ADAP = 150;	//攻擊 魔法攻擊
			BossD = 10;	//B商 
			IgnorePDR = 10;	//無視
			DamR = 10;	//傷害
			SATA4UPDATE = 150;	//強化屬性
			ADAPUPDATE = 150;	//
			BossDUPDATE = 10;
			IgnorePDRUPDATE = 10;	//無視
			DamRUPDATE = 10;	//傷害
			break;
		/*case 1190538:						//五個碎片橘子能源
			SATA4 		= 150;	//4屬性    改屬
			ADAP 		= 100;	//攻擊 魔法攻擊
			BossD 		= 20;	//B商 
			IgnorePDR	= 20;	//無視
			DamR		= 20;	//傷害
			SATA4UPDATE 	= 0;	//強化屬性
			ADAPUPDATE 		= 0;	//
			BossDUPDATE 	= 0;
			IgnorePDRUPDATE	= 0;	//無視
			DamRUPDATE		= 0;	//傷害
			break;*/
		case 1122267:						//頂培
		case 1113075:
		case 1032223:
		case 1132246:
			SATA4 = 150;	//4屬性    改屬
			ADAP = 150;	//攻擊 魔法攻擊
			BossD = 10;	//B商 
			IgnorePDR = 10;	//無視
			DamR = 10;	//傷害
			SATA4UPDATE = 50;	//強化屬性
			ADAPUPDATE = 50;	//
			BossDUPDATE = 3;
			IgnorePDRUPDATE = 3;	//無視
			DamRUPDATE = 0;	//傷害
			break;
		/*case 1182158:						//黑翼勳章
			SATA4 		= 150;	//4屬性    改屬
			ADAP 		= 150;	//攻擊 魔法攻擊
			BossD 		= 10;	//B商 
			IgnorePDR	= 10;	//無視
			DamR		= 10;	//傷害
			SATA4UPDATE 	= 30;	//強化屬性
			ADAPUPDATE 		= 30;	//
			BossDUPDATE 	= 3;
			IgnorePDRUPDATE	= 3;	//無視
			DamRUPDATE		= 3;	//傷害
			break;*/
		case 1012632:						//口紅控制器
			SATA4 = 150;	//4屬性    改屬
			ADAP = 150;	//攻擊 魔法攻擊
			BossD = 10;	//B商 
			IgnorePDR = 10;	//無視
			DamR = 10;	//傷害
			SATA4UPDATE = 75;	//強化屬性
			ADAPUPDATE = 75;	//
			BossDUPDATE = 5;
			IgnorePDRUPDATE = 5;	//無視
			DamRUPDATE = 5;	//傷害
			break;
		/*case 1162080:						//魔導書
		case 1162081:
		case 1162082:
		case 1162083:
			SATA4 		= 150;	//4屬性    改屬
			ADAP 		= 0;	//攻擊 魔法攻擊
			BossD 		= 10;	//B商 
			IgnorePDR	= 10;	//無視
			DamR		= 10;	//傷害
			SATA4UPDATE 	= 0;	//強化屬性
			ADAPUPDATE 		= 0;	//
			BossDUPDATE 	= 0;
			IgnorePDRUPDATE	= 0;	//無視
			DamRUPDATE		= 0;	//傷害
			break;*/
		case 1022278:						//附有魔力的眼罩
			SATA4 = 150;	//4屬性    改屬
			ADAP = 150;	//攻擊 魔法攻擊
			BossD = 10;	//B商 
			IgnorePDR = 10;	//無視
			DamR = 10;	//傷害
			SATA4UPDATE = 75;	//強化屬性
			ADAPUPDATE = 75;	//
			BossDUPDATE = 5;
			IgnorePDRUPDATE = 5;	//無視
			DamRUPDATE = 5;	//傷害
			break;
		case 1122430:						//苦痛的根源
			SATA4 = 150;	//4屬性    改屬
			ADAP = 150;	//攻擊 魔法攻擊
			BossD = 10;	//B商 
			IgnorePDR = 10;	//無視
			DamR = 10;	//傷害
			SATA4UPDATE = 75;	//強化屬性
			ADAPUPDATE = 75;	//
			BossDUPDATE = 5;
			IgnorePDRUPDATE = 5;	//無視
			DamRUPDATE = 5;	//傷害
			break;
		/*case 1202160:						//小筱圖騰
			SATA4 		= 300;	//4屬性    改屬
			ADAP 		= 300;	//攻擊 魔法攻擊
			BossD 		= 0;	//B商 
			IgnorePDR	= 0;	//無視
			DamR		= 0;	//傷害
			SATA4UPDATE 	= 25;	//強化屬性
			ADAPUPDATE 		= 20;	//
			BossDUPDATE 	= 0;
			IgnorePDRUPDATE	= 0;	//無視
			DamRUPDATE		= 0;	//傷害
			break;*/
		case 1113211:						//天上的氣息
			SATA4 = 150;	//4屬性    改屬
			ADAP = 150;	//攻擊 魔法攻擊
			BossD = 10;	//B商 
			IgnorePDR = 10;	//無視
			DamR = 10;	//傷害
			SATA4UPDATE = 20;	//強化屬性
			ADAPUPDATE = 20;	//
			BossDUPDATE = 5;
			IgnorePDRUPDATE = 5;	//無視
			DamRUPDATE = 5;	//傷害
			break;
		case 1672075:						//M-DAY心臟
			SATA4 = 150;	//4屬性    改屬
			ADAP = 150;	//攻擊 魔法攻擊
			BossD = 10;	//B商 
			IgnorePDR = 10;	//無視
			DamR = 10;	//傷害
			SATA4UPDATE = 30;	//強化屬性
			ADAPUPDATE = 30;	//
			BossDUPDATE = 2;
			IgnorePDRUPDATE = 2;	//無視
			DamRUPDATE = 2;	//傷害
			break;
		case 1113306:						//巨大的恐怖
			SATA4 = 150;	//4屬性    改屬
			ADAP = 150;	//攻擊 魔法攻擊
			BossD = 10;	//B商 
			IgnorePDR = 10;	//無視
			DamR = 10;	//傷害
			SATA4UPDATE = 75;	//強化屬性
			ADAPUPDATE = 75;	//
			BossDUPDATE = 5;
			IgnorePDRUPDATE = 5;	//無視
			DamRUPDATE = 5;	//傷害
			break;
		case 1113195:						//膜性的戒指
			SATA4 = 150;	//4屬性    改屬
			ADAP = 150;	//攻擊 魔法攻擊
			BossD = 10;	//B商 
			IgnorePDR = 10;	//無視
			DamR = 10;	//傷害
			SATA4UPDATE = 50;	//強化屬性
			ADAPUPDATE = 50;	//
			BossDUPDATE = 3;
			IgnorePDRUPDATE = 3;	//無視
			DamRUPDATE = 0;	//傷害
			break;
		case 1672069:						//女武神之心
			SATA4 = 150;	//4屬性    改屬
			ADAP = 150;	//攻擊 魔法攻擊
			BossD = 10;	//B商 
			IgnorePDR = 10;	//無視
			DamR = 10;	//傷害
			SATA4UPDATE = 15;	//強化屬性
			ADAPUPDATE = 15;	//
			BossDUPDATE = 1;
			IgnorePDRUPDATE = 1;	//無視
			DamRUPDATE = 1;	//傷害
			break;
		case 1113196:						//強力的魔性
			SATA4 = 150;	//4屬性    改屬
			ADAP = 150;	//攻擊 魔法攻擊
			BossD = 10;	//B商 
			IgnorePDR = 10;	//無視
			DamR = 10;	//傷害
			SATA4UPDATE = 75;	//強化屬性
			ADAPUPDATE = 75;	//
			BossDUPDATE = 5;
			IgnorePDRUPDATE = 5;	//無視
			DamRUPDATE = 5;	//傷害
			break;
		case 1182285:						//創世胸章
			SATA4 = 200;	//4屬性    改屬
			ADAP = 200;	//攻擊 魔法攻擊
			BossD = 20;	//B商 
			IgnorePDR = 20;	//無視
			DamR = 20;	//傷害
			SATA4UPDATE = 75;	//強化屬性
			ADAPUPDATE = 75;	//
			BossDUPDATE = 5;
			IgnorePDRUPDATE = 5;	//無視
			DamRUPDATE = 5;	//傷害
			break;
		case 1132308:						//夢幻腰帶
			SATA4 = 200;	//4屬性    改屬
			ADAP = 200;	//攻擊 魔法攻擊
			BossD = 25;	//B商 
			IgnorePDR = 25;	//無視
			DamR = 25;	//傷害
			SATA4UPDATE = 75;	//強化屬性
			ADAPUPDATE = 75;	//
			BossDUPDATE = 5;
			IgnorePDRUPDATE = 5;	//無視
			DamRUPDATE = 5;	//傷害
			break;
		case 1052723:						//滅龍
			SATA4 = 300;	//4屬性    改屬
			ADAP = 200;	//攻擊 魔法攻擊
			BossD = 0;	//B商 
			IgnorePDR = 0;	//無視
			DamR = 0;	//傷害
			SATA4UPDATE = 0;	//強化屬性
			ADAPUPDATE = 0;	//
			BossDUPDATE = 0;
			IgnorePDRUPDATE = 0;	//無視
			DamRUPDATE = 0;	//傷害
			break;
		case 1032316:						//指揮官耳環
			SATA4 = 200;	//4屬性    改屬
			ADAP = 200;	//攻擊 魔法攻擊
			BossD = 25;	//B商 
			IgnorePDR = 25;	//無視
			DamR = 25;	//傷害
			SATA4UPDATE = 75;	//強化屬性
			ADAPUPDATE = 75;	//
			BossDUPDATE = 5;
			IgnorePDRUPDATE = 5;	//無視
			DamRUPDATE = 5;	//傷害
			break;
		default:
			npc.broadcastPlayerNotice(16, "玩家" + player.getName() + "非常規回真,以記錄數據!");
			player.addEventValue("贊助裝備回真檢測", 1, 1000);
			npc.say("#fs14##b哈囉,別亂放沒有贊助的裝備,先行紀錄數據1次,目前已檢測" + player.getEventValue("贊助裝備回真檢測") + "次");

			break;
	}


	if (sel == equip.getDataId()) {
		equip = player.getInventorySlot(1, 1);

		if (equip.getTitle() == "") {
			equip.setTitle("強化+" + 0);
		}

		var str = equip.getTitle();
		var get = str.substring(3, 4);
		var qhcs = Number(get);
		equip.setTitle("強化+" + qhcs);

		if (equip.getBossDamageR() < BossD + (qhcs * BossDUPDATE) ||
			equip.getIgnorePDR() < IgnorePDR + (qhcs * IgnorePDRUPDATE) ||
			equip.getDamR() < DamR + (qhcs * DamRUPDATE) ||
			equip.getPad() < ADAP + (qhcs * ADAPUPDATE) || equip.getMad() < ADAP + (qhcs * ADAPUPDATE) ||
			equip.getStr() < SATA4 + (qhcs * SATA4UPDATE) || equip.getDex() < SATA4 + (qhcs * SATA4UPDATE) ||
			equip.getInt() < SATA4 + (qhcs * SATA4UPDATE) || equip.getLuk() < SATA4 + (qhcs * SATA4UPDATE)) {//篩選屬性
			player.addEventValue("贊助裝備回真檢測", 1, 1000);
			//npc.broadcastPlayerNotice(16,"玩家" + player.getName() + "非常規回真,以記錄數據!");
			npc.say("#fs14##b此件裝備無任何贊助屬性,紀錄數據1次,目前已檢測" + player.getEventValue("贊助裝備回真檢測") + "次");
		} else if (equip.getTitle() == player.getName()) {
			npc.say("#fs14##b此件裝備以刻名將不能再進行回真");
		} else {

			equip.setCHUC(equip.getCHUC());

			/*
			保留星力 強化+? 槌子  移除衝捲次數---------------------------------
			保留了潛在屬性
			*/
			equip.setBossDamageR(BossD + (qhcs * BossDUPDATE));
			equip.setIgnorePDR(IgnorePDR + (qhcs * IgnorePDRUPDATE));
			equip.setDamR(DamR + (qhcs * DamRUPDATE));

			equip.setStr(SATA4 + (qhcs * SATA4UPDATE));
			equip.setDex(SATA4 + (qhcs * SATA4UPDATE));
			equip.setInt(SATA4 + (qhcs * SATA4UPDATE));
			equip.setLuk(SATA4 + (qhcs * SATA4UPDATE));
			equip.setPad(ADAP + (qhcs * ADAPUPDATE));
			equip.setMad(ADAP + (qhcs * ADAPUPDATE));
			equip.setMaxHp(equip.getMaxHp());
			equip.setMaxMp(equip.getMaxMp());
			equip.setRUC(equip.getRUC() + equip.getCUC());//回真捲數保留以敲捲數
			equip.setCUC(0);//卷軸已用歸零
			equip.setIUC(equip.getIUC());//黃金槌子
			equip.setIUC2(equip.getIUC2());//白金槌子
			// ---------------------------------------------------------

			// equip.setRUC(equip.getRUC());//可使用卷軸
			// equip.setCUC(equip.getCUC());//卷軸已用
			// equip.setIUC(equip.getIUC());//黃金槌子
			// equip.setIUC2(equip.getIUC2());//白金槌子


			player.updateItem(1, equip);
			player.showSystemMessage("通過檢測是屬於贊助裝備，一股神祕力量注入了");
		}
	}
}