//強化制作 by dgms
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔

var ItemList = [
    1113187,
];

var ItemSl = Array(
    Array(4031491, 4999),
    Array(4031491, 1),
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
var 可強化次數 = 19;

var avail = "Welcome to the special trip              " + a38 + "\r\n";

avail += "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n"

avail += "#b可強化裝備:最高可強19次\r\n";
equip1 = player.getInventorySlot(1, 1);
if (equip1 == null) {
    npc.askMenuS("請在裝備欄第一個位置放上裝備！");

}
equip = player.getInventorySlot(1, 1);
var itemid = equip.getDataId();


for (var i = 0; i < ItemList.length; i++) {
    avail += "#b#v" + ItemList[i] + "##k";
}
avail += "\r\n#b需要材料:\r\n";
for (var i = 0; i < ItemSl.length; i++) {
    avail += "#v" + ItemSl[i][0] + "# 需要 [ #r" + ItemSl[i][1] + " #b] 當前擁有:#c" + ItemSl[i][0] + "#\r\n\r\n";
}
avail += "#b隨機力量[#r1-12#b]  隨機敏捷[#r1-12#b]  隨機智力[#r1-12#b]\r\n";
avail += "隨機幸運[#r1-12#b]  隨機物攻[#r1-12#b]  隨機魔攻[#r1-12#b]\r\n";
avail += "隨機B傷 [#r1-3#b]   隨機總傷[#r1-3#b]   隨機無視[#r1-3#b]\r\n";
avail += "#b上述屬性都有85%機率失敗[失敗+0]\r\n";
avail += "\t\t\t\t\t#L0##b開始強化#l#k\r\n#k";
if (equip.getTitle() == "") {
    equip.setTitle("0階段");
}
let selection = npc.askMenuS(avail);
if (selection == 0) {
    equip = player.getInventorySlot(1, 1);
    if (!player.hasItem(ItemSl[0][0], ItemSl[0][1])) {
        npc.say("#fs18##b#e你並沒有足夠的材料所以不能強化");
    } else if (!player.hasItem(ItemSl[1][0], ItemSl[1][1])) {
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
            var str = equip.getTitle();
            if (str != null) {
                if (str.length == 3) {
                    str = str.substring(0, 1);
                    times = parseInt(str);
                } else {
str = str.substring(0, 2);
                     times = parseInt(str);
                }
            }
            
            if (str < 可強化次數) {
                var info = "裝備：#v" + equip.getDataId() + "##t" + equip.getDataId() + "#\r\n當前屬性如下：\r\n";
                info += "#r點擊‘是’會增加當前顯示屬性並且強化等級+1 ，最多強化" + 可強化次數 + "次#k\r\n"
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
                    if (chance0 < 85) {
                        equip.setStr(STR + getMinAndMax(1, 12));//力量
                    }
                    if (chance1 < 85) {
                        equip.setDex(DEX + getMinAndMax(1, 12));//敏捷
                    }
                    if (chance2 < 85) {
                        equip.setInt(INT + getMinAndMax(1, 12));//智力
                    }
                    if (chance3 < 85) {
                        equip.setLuk(LUK + getMinAndMax(1, 12));//運氣
                    }
                    if (chance4 < 85) {
                        equip.setPad(PAD + getMinAndMax(1, 12));//攻擊
                    }
                    if (chance5 < 85) {
                        equip.setMad(MAD + getMinAndMax(1, 12));//魔法攻擊
                    }
                    if (chance6 < 85) {
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
					}
                    var qhcs = Number(get) + 1;
                    equip.setTitle(qhcs + "階段");
                    player.updateItem(1, equip);
                    //npc.broadcastGachaponMsgEx("【強化中心】 :玩家[" + player.getName() + "]強化成功", equip);
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
                npc.say("強化次數已經到達上限,目前強化只開放到" + 可強化次數 + "次");
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







