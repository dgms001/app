//強化制作 by dgms
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔

var ItemList = [
    1113187,
	1062289,
    1062288,
    1062287,
    1062286,
    1062285,
    1042435,
    1042436,
    1042437,
    1042434,
    1042433,
    1005984,
    1005983,
    1005982,
    1005981,
    1005980,

];

var ItemSl = Array(
    Array(4001715, 5),
    Array(4001226, 10),
	 Array(4009344, 10),
	  Array(4036167, 5),
	   Array(4032053, 9999),
	     Array(4032216, 9999),
);
var result;
var STR;
var DEX;
var INT;
var LUK;
var PAD; //物理傷害
var MAD; //魔法傷害
var BOSS;
var WS;
var HP;
var MP;
var PDR;
var DAR;
var equip;
var times = 0;



var avail = "#fs21##e#r你好,這裡是永恆防具屬性強化中心\r\n";

avail += "#fs16##e#b每次隨機提升屬性會有20%某一屬性不會增加\r\n"
avail += "#fs16##e#b不滿意可採用永恆回真並保留潛能\r\n"
avail += "#b80%隨機力量[#r20-35#b]  80%隨機敏捷[#r20-35#b]  80%隨機智力[#r20-35#b]\r\n";
avail += "80%隨機幸運[#r20-35#b]  80%隨機物攻[#r20-35#b]  80%隨機魔攻[#r20-35#b]\r\n";

avail +=  "#b提升需要#r#v4001715#*5，#v4001226#*10，#v4009344#*10，#v4036167#*5，#v4032053#*9999，#v4032216#*9999\r\n\r\n";
equip1 = player.getInventorySlot(1, 1);
if (equip1 == null) {
    npc.askMenuS("請在裝備欄第一個位置放上裝備！");

}
equip = player.getInventorySlot(1, 1);
var itemid = equip.getDataId();


for (var i = 0; i < ItemList.length; i++) {
    //avail += "#b#v" + ItemList[i] + "##k";
}
//avail += "\r\n#b需要材料:\r\n";
for (var i = 0; i < ItemSl.length; i++) {
    //avail += "#v" + ItemSl[i][0] + "# 需要 [ #r" + ItemSl[i][1] + " #b] 當前擁有:#c" + ItemSl[i][0] + "#\r\n\r\n";
}

avail += "\t\t\t\t\t#L0##b開始強化#l#k\r\n#k";
/*if (equip.getTitle() == "") {
    equip.setTitle("0階段");
}*/
let selection = npc.askMenuA(avail);
if (selection == 0) {
    equip = player.getInventorySlot(1, 1);
    if (!player.hasItem(ItemSl[0][0], ItemSl[0][1])) {
        npc.say("#fs18##b#e你並沒有足夠的材料所以不能強化");
    } else if (!player.hasItem(ItemSl[1][0], ItemSl[1][1])) {
        npc.say("#fs18##b#e你並沒有足夠的材料所以不能強化");
	    } else if (!player.hasItem(ItemSl[2][0], ItemSl[2][1])) {
        npc.say("#fs18##b#e你並沒有足夠的材料所以不能強化");
			    } else if (!player.hasItem(ItemSl[3][0], ItemSl[3][1])) {
        npc.say("#fs18##b#e你並沒有足夠的材料所以不能強化");
					    } else if (!player.hasItem(ItemSl[4][0], ItemSl[4][1])) {
        npc.say("#fs18##b#e你並沒有足夠的材料所以不能強化");
							    } else if (!player.hasItem(ItemSl[5][0], ItemSl[5][1])) {
        npc.say("#fs18##b#e你並沒有足夠的材料所以不能強化");
    } else if (equip == null) {
        npc.say("#fs18##b#e請在裝備欄第一個位置放上裝備！");
    } else {
        var itemid = equip.getDataId();
        var flag = 0;
        for (var i = 0; i < ItemList.length; i++) {
            if (itemid == ItemList[i]) {
                flag = 1;
            }
        }
		if (flag == 1) {
			//進行強化
			//			npc.say("你並沒有#z" + need + "#，所以不能開啟"+player.hasItem(need,1)+player.hasItem(need2,1)+player.hasItem(need3,1000));
			var str = equip.getTitle();
			if (str != null) {
				if (str.length > 0) {
					//強化了的
					str = str.substring(3, str.length);
					times = parseInt(str);
				} else {
					times = 0;
				}

			}
            if(times < 20) {
                var info = "裝備：#v" + equip.getDataId() + "##t" + equip.getDataId() + "#\r\n當前屬性如下：\r\n";
                info += "#r點擊‘是’會增加當前顯示屬性並且強化等級+1 ，最多強化20次#k\r\n"
                //保存更新記錄
                let sel = npc.askYesNoSNoEsc(info);
                if (sel == 1) {
                    STR = equip.getStr();
                    DEX = equip.getDex();
                    INT = equip.getInt();
                    LUK = equip.getLuk();
                    PAD = equip.getPad(); //物理傷害
                    MAD = equip.getMad(); //魔法傷害
                    BDG = equip.getBossDamageR();//B傷
                    PDR = equip.getIgnorePDR();//無視
                    DAR = equip.getDamR();//總傷
                    //替換掉屬性
                    var chance0 = Math.floor(Math.random() * 100);
                    var chance1 = Math.floor(Math.random() * 100);
                    var chance2 = Math.floor(Math.random() * 100);
                    var chance3 = Math.floor(Math.random() * 100);
                    var chance4 = Math.floor(Math.random() * 100);
                    var chance5 = Math.floor(Math.random() * 100);
                    var chance6 = Math.floor(Math.random() * 100);
                    var chance7 = Math.floor(Math.random() * 100);
                    var chance8 = Math.floor(Math.random() * 100);
                    if (chance0 < 80) {
                        equip.setStr(STR + getMinAndMax(20, 35));//力量
                    }
                    if (chance1 < 80) {
                        equip.setDex(DEX + getMinAndMax(20, 35));//敏捷
                    }
                    if (chance2 < 80) {
                        equip.setInt(INT + getMinAndMax(20, 35));//智力
                    }
                    if (chance3 < 80) {
                        equip.setLuk(LUK + getMinAndMax(20, 35));//運氣
                    }
                    if (chance4 < 80) {
                        equip.setPad(PAD + getMinAndMax(20, 35));//攻擊
                    }
                    if (chance5 < 80) {
                        equip.setMad(MAD + getMinAndMax(20, 35));//魔法攻擊
                    }
                    /*if (chance6 < 85) {
                        equip.setBossDamageR(BDG + getMinAndMax(1, 3));//BOSS傷害
                    }
                    if (chance7 < 85) {
                        equip.setIgnorePDR(PDR + getMinAndMax(1, 3));//無視
                    }
                    if (chance8 < 85) {
                        equip.setDamR(DAR + getMinAndMax(1, 3));//總傷
                    }
                    var str = equip.getTitle();
					if(str.length > 3){
						var get = str.substring(0, 2);
					}else{
						var get = str.substring(0, 1);
					}*/
                    //var times = Number(get) + 1;
					times++;
					equip.setTitle("強化+" + times);
                    //equip.setTitle(qhcs + "階段");
                    player.updateItem(1, equip);
					
                    //npc.broadcastGachaponMsgEx("【強化中心】 : 玩家 "+player.getName()+" 強化了永恆系列，獲得了強大的力量！！!", equip);
                    STR1 = equip.getStr();
                    DEX1 = equip.getDex();
                    INT1 = equip.getInt();
                    LUK1 = equip.getLuk();
                    PAD1 = equip.getPad(); //物理傷害
                    MAD1 = equip.getMad(); //魔法傷害
                    BDG1 = equip.getBossDamageR();//B傷
                    PDR1 = equip.getIgnorePDR();//無視
                    DAR1 = equip.getDamR();//總傷
                    GG1 = STR1 - STR;
                    GG2 = DEX1 - DEX;
                    GG3 = INT1 - INT;
                    GG4 = LUK1 - LUK;
                    GG5 = PAD1 - PAD;
                    GG6 = MAD1 - MAD;
                    GG7 = BDG1 - BDG;
                    GG8 = PDR1 - PDR;
                    GG9 = DAR1 - DAR;
                    for (var key in ItemSl) {
                        player.loseItem(ItemSl[key][0], ItemSl[key][1]);
                    }
                    npc.say("#fs14##b本次力量提升:#r" + GG1 + "\r\n#b本次敏捷提升:#r" + GG2 + "\r\n#b本次智力提升:#r" + GG3 + "\r\n#b本次幸運提升:#r" + GG4 + "\r\n#b本次物攻提升:#r" + GG5 + "\r\n#b本次魔攻提升:#r" + GG6 + "\r\n#b本次B傷提升:#r" + GG7 + "\r\n#b本次無視提升:#r" + GG8 + "\r\n#b本次總傷提升:#r" + GG9 + "\r\n");
                } else {
                    npc.say("好吧，下次再來~");
                }
            } else {
                npc.say("強化次數已經到達上限,目前強化只開放到20次");
            }
        } else {
            npc.say("請檢查裝備欄第一個位置是否放入正確裝備");
        }
    }
    //}
    //}
}




function getMinAndMax(minVal, maxVal) {//隨機 最大值 最小值
    return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}







