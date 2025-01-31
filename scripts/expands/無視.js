//強化制作 by dgms
var ax1 = "#fMap/MapHelper.img/minimap/match#";
var ax2 = "#fEffect/CharacterEff/1042176/2/0#";
var hd = "#fMap/MapHelper.img/weather/knitsWithWarmWinter/8#";
var zb = "#fMap/MapHelper.img/weather/birthday/2#";
var yb = "#fMap/MapHelper.img/weather/birthday/5#";
var a3 = "#fUI/StarCityUI.img/Screen/VIPMessage/WorldinfoNO/16/0#"

    var ItemList = Array(

1

		);

var ItemSl = Array(
        Array(2434617, 1),
		);
var randList = Array(
        Math.floor(50), //str
        Math.floor(50), //dex
        Math.floor(50), //inte

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
var equip;
var times = 0;
var 可強化次數 = 30000;

var avail = "";
equip1 = player.getInventorySlot(1, 1);
equip = player.getInventorySlot(1, 1);
if(equip1==null){
		npc.askMenuS("請在裝備欄第一個位置放上裝備！");
	}
	if(equip1.getIgnorePDR() > 200 || equip1.getBossDamageR() > 200 || equip1.getDamR() > 200){
		npc.askMenuS("無視/總傷/B傷最大值,請更換裝備！");
	}
/*if (equip != null){
	itemid = equip.getDataId();
	if(equip.getTitle() == ""){
		equip.setTitle("強化+" + 0);
	}
}*/
//avail += "#b需要的材料如下:\r\n";
for (var i = 0; i < ItemSl.length; i++) {
    avail += "#fs21##e#b#v" + ItemSl[i][0] + "# 需要 [ #r" + ItemSl[i][1] + " #b] \r\n\r\n";
}
avail += "為裝備增加：\r\nB傷[#r" + randList[0] + "#b] 無視[#r" + randList[1] + "#b] 總傷[#r" + randList[2] + "#b]\r\n\r\n";
avail += "\t\t#L0##b點我增加#l#k\r\n#k";

let selection = npc.askMenuA(avail);
if (selection == 0) {
    equip = player.getInventorySlot(1, 1);
     //for (var i = 0; i < ItemSl.length; i++) { {
            if (!player.hasItem(ItemSl[0][0], ItemSl[0][1])) {
                npc.say("#fs18##b#e你並沒有足夠的材料所以不能強化");
            } else if (equip == null) {
                npc.say("#fs18##b#e請在裝備欄第一個位置放上裝備！");
            } else {
                var itemid = equip.getDataId();
                var flag = 0;
                for (var i = 0; i < ItemList.length; i++) {
                    if (itemid != ItemList[i]) {
                        flag = 1;
                    }
                }
                if (flag == 1) {
                    var str = equip.getTitle();
                    if (str != null) {
                        if (str.length > 0) {
                            str = str.substring(3, 4);
                            times = parseInt(str);
                        } else {

                            times == 0;
                        }
                    }
                    str = str.substring(3, 4);
                    if (str < 可強化次數) {
                        var info = "裝備：#v" + equip.getDataId() + "##t" + equip.getDataId() + "#\r\n當前屬性如下：\r\n";
                        //info += "#r點擊‘是’會增加當前顯示屬性並且強化等級+1 ，最多強化" + 可強化次數 + "次#k\r\n"
                        //保存更新記錄
                        /*info += "\r\n#b強化:#k#g-> #r本次";
                        info += "\r\n#b力量:#k#g-> #r" + randList[0];
                        info += "\r\n#b敏捷:#k#g-> #r" + randList[1];
                        info += "\r\n#b智力:#k#g-> #r" + randList[2];
                        info += "\r\n#b運氣:#k#g-> #r" + randList[3];
                        info += "\r\n#b攻擊力:#k#g-> #r" + randList[4];
                        info += "\r\n#b魔法力:#k#g-> #r" + randList[5];*/
                        info += "\r\n#bBOSS傷害:#k#g-> #r" + randList[0];
                        info += "\r\n#b無視:#k#g-> #r" + randList[1];
						info += "\r\n#b總傷:#k#g-> #r" + randList[2];
                        let sel = npc.askYesNoSNoEsc(info);
                        if (sel == 1) {
                            STR = equip.getStr();
                            DEX = equip.getDex();
                            INT = equip.getInt();
                            LUK = equip.getLuk();
                            PAD = equip.getPad(); //物理傷害
                            MAD = equip.getMad(); //魔法傷害
                            //替換掉屬性
                            //力量
                            /*equip.setStr(STR + randList[0]);
                            //敏捷
                            equip.setDex(DEX + randList[1]);
                            //智力
                            equip.setInt(INT + randList[2]);
                            //運氣
                            equip.setLuk(LUK + randList[3]);
                            //攻擊
                            equip.setPad(PAD + randList[4]);
                            //魔法攻擊
                            equip.setMad(MAD + randList[5]);*/
                            //BOSS傷害
                            equip.setBossDamageR(equip.getBossDamageR() + randList[0]);
                            //無視
                            equip.setIgnorePDR(equip.getIgnorePDR() + randList[1]);
							//總傷
							equip.setDamR(equip.getDamR() + randList[2])
                            //var str = equip.getTitle();
                            //var get = str.substring(3, 4);
                            //var qhcs = Number(get) + 1;
                            //equip.setTitle("強化+" + qhcs);
							//equip.setAttribute(1);
                            player.updateItem(1, equip);
                            //npc.broadcastPlayerNotice(16,"【NV強化中心】玩家 [" + player.getName() + "] :強化成功");
                            for (var key in ItemSl) {
                                player.loseItem(ItemSl[key][0], ItemSl[key][1]);
                            }
                            npc.say("強化成功");
							//player.runScript("NV幣強化");
                        } else {
                            npc.say("好吧，下次再來~");
                        }
                    } else {
                        npc.say("強化次數已經到達上限,目前強化只開放到" + 可強化次數 + "次");
                    }
                } else {
                    npc.say("請檢查裝備欄第一個位置是否放入正確裝備");
                }
            }
        //}
    //}
}
