/*
武器屬性提升範本
大寶貝
QQ : 423283141
*/

var ax1 = "#fMap/MapHelper.img/minimap/match#";
var ax2 = "#fEffect/CharacterEff/1042176/2/0#";
var hd = "#fMap/MapHelper.img/weather/knitsWithWarmWinter/8#";
var zb = "#fMap/MapHelper.img/weather/birthday/2#";
var yb = "#fMap/MapHelper.img/weather/birthday/5#";


var ItemList = Array(
    1004808,
    1004809,
    1004810,
    1004811,
    1004812,
    1053063,
    1053064,
    1053065,
    1053066,
    1053067,
    1073158,
    1073159,
    1073160,
    1073161,
    1073162,
    1082695,
    1082696,
    1082697,
    1082698,
    1082699,
    1102940,
    1102941,
    1102942,
    1102943,
    1102944,
    1152197,
    1152198,
    1152199,
    1152200,
    1152196

);
var randList = Array(
	Math.floor(20), //str
	Math.floor(20), //dex
	Math.floor(20),//inte
	Math.floor(20),//luk
	Math.floor(20),//pad
	Math.floor(20),//mad
	/*Math.floor(3), //boss
	Math.floor(3), //wushi
    Math.floor(3), //zongshang*/
	Math.floor(Math.random() * 100 + 1), //hp
	Math.floor(Math.random() * 100 + 1) //mp

);
var need = 4001872;
var need2 = 4001229;
var need3 = 4032053;
var need4 = 4032216;
var need5 = 4023025;
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
var equip;
var times = 0;

var avail = "";

avail+="#b#fs21#這裡是神秘武器,防具屬性提升中心:#v1073161##v1004810#\r\n\r\n#k";
        avail +="#b#fs16#每次提升屬性\r\n[力量#r+20#b＆敏捷#r+20#b＆智力#r+20#b＆運氣#r+20#b＆物攻#r+20#b＆魔攻#r+20#b]\r\n";
		avail += "#b提升屬性需要#r#v" + need + "#*1，#v" + need2 + "#*5，#v" + need5 + "#*5，#v" + need3 + "#*5000，#v" + need4 + "#*9999\r\n\r\n";
		//avail +="#r把提升的裝備欄放在第一個位置,請先砸卷後提升,裝備不支持增加火花提升的屬性\r\n#k";

		avail += "\t\t\t\t\t#L0##b#e#fs21#我要強化#l#k\r\n\r\n#k";
		
let selection = npc.askMenuA(avail);
if(selection == 0) {
	equip = player.getInventorySlot(1, 1); //獲得裝備欄 的第一個格子的道具 實例 

	if(!player.hasItem(need,1)||!player.hasItem(need2,5)||!player.hasItem(need3,5000)||!player.hasItem(need4,9999)||!player.hasItem(need5,5)) {
		npc.say("你並沒有足夠的材料所以不能開啟");

	} else if(equip == null) {
		npc.say("請在裝備欄第一個位置放上裝備！");

	} else {
		
		var itemid = equip.getDataId();
		var flag = 0;
		for(var i = 0; i < ItemList.length; i++) {
			if(itemid == ItemList[i]) {
				flag = 1;
			}
		}
		if(flag == 1) {
			//進行強化
//			npc.say("你並沒有#z" + need + "#，所以不能開啟"+player.hasItem(need,1)+player.hasItem(need2,1)+player.hasItem(need3,1000));
			var str = equip.getTitle();
			if(str != null) {
				if(str.length > 0) {
					//強化了的
					str = str.substring(3, str.length);
					times = parseInt(str);
				} else {
					times = 0;
				}

			}
			if(times < 20) {
				var info = "裝備：#v" + equip.getDataId() + "##t" + equip.getDataId() + "#\r\n#r最多強化20次\r\n當前六維屬性如下：\r\n";
				info += "#r點擊‘是’會增加當前顯示屬性並且強化等級+1#k\r\n"
				//保存更新記錄

				info += "\r\n#b強化:#k#g-> #r本次";
				info += "\r\n#b力量:#k#g-> #r" + randList[0];
				info += "\r\n#b敏捷:#k#g-> #r" + randList[1];
				info += "\r\n#b智力:#k#g-> #r" + randList[2];
				info += "\r\n#b運氣:#k#g-> #r" + randList[3];
				info += "\r\n#b攻擊力:#k#g-> #r" + randList[4];
				info += "\r\n#b魔法力:#k#g-> #r" + randList[5];

				/*info += "\r\n#bBOSS傷害:#k最大值:3 #g-> #r" + randList[6];
				info += "\r\n#b無視:#k最大值:3 #g-> #r" + randList[7];
				info += "\r\n#b總傷:#k最大值:3 #g-> #r" +randList[8];*/
				info += "\r\n#b最大HP:#k最大值:100 #g-> #r" + randList[6];
				info += "\r\n#b最大MP:#k最大值:100 #g-> #r" + randList[7];


				//player.loseItem(need, 1);
				let sel = npc.askYesNoSNoEsc(info);
				if(sel == 1) {
					STR = equip.getStr();
					DEX = equip.getDex();
					INT = equip.getInt();
					LUK = equip.getLuk();
					PAD = equip.getPad(); //物理傷害
					MAD = equip.getMad(); //魔法傷害
					
					//替換掉屬性
					//力量
					equip.setStr(STR + randList[0]);
					//敏捷
					equip.setDex(DEX + randList[1]);
					//智力
					equip.setInt(INT + randList[2]);
					//運氣
					equip.setLuk(LUK + randList[3]);
					//攻擊
					equip.setPad(PAD + randList[4]);
					//魔法攻擊
					equip.setMad(MAD + randList[5]);
					//BOSS傷害
					/*equip.setBossDamageR(equip.getBossDamageR() + randList[6]);
					//無視
					equip.setIgnorePDR(equip.getIgnorePDR() + randList[7]);
                    //總傷
					equip.setDamR(equip.getDamR() + randList[8]);*/
					//HP
					equip.setMaxHp(equip.getMaxHp() + randList[6]);
					//MP
					equip.setMaxMp(equip.getMaxMp() + randList[7]);
					
					times++;
					//equip.setStatR(times*2);
					equip.setTitle("強化+" + times);
					player.updateItem(1, equip);
					npc.broadcastGachaponMsgEx("【強化中心】 : 玩家 "+player.getName()+" 強化了神秘防具系列，獲得了強大的力量！！!", equip);
					
					player.loseItem(need, 1);
					player.loseItem(need2, 5);					
					player.loseItem(need3, 5000);	
					player.loseItem(need4, 9999);	
                    player.loseItem(need5, 5);						
					player.showSystemMessage("強化成功");
			

				}else{
					
//					npc.say("保留了屬性，但是扣除了你一個#v"+need+"#");
					player.showSystemMessage("已放棄強化!!!");
				}
			} else {
				npc.say("強化次數已經到達上限,目前強化只開放到20次哦~");
			}
			

		} else {
			
			npc.say("請檢查裝備欄第一個位置是否為徽章！");

		}

	}

}
