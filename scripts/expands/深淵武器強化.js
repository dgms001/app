/* This is a piece of code

 * author dgms

 * global player

 * 腳本定制 技術支持 QQ 381991414

 */
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var f2 = "#fUI/CashShop/CSBeauty/hairColor/Enable/2#"
var f3 = "#fUI/CashShop/CSBeauty/hairColor/Enable/3#"
var f4 = "#fUI/CashShop/CSBeauty/hairColor/Enable/4#"
var f5 = "#fUI/CashShop/CSBeauty/hairColor/Enable/5#"
var ItemList = Array(
    1232057,
    1312153,
    1322203,
    1302275,
    1402196,
    1412135,
    1422140,
    1432167,
    1442223,
    1582016,
    1542063,
    1213016,
    1212063,
    1262016,
    1372177,
    1382208,
    1252015,
    1552063,
    1282015,
    1452205,
    1462193,
    1522094,
    1592018,
    1214016,
    1242060,
    1332225,
    1342082,
    1362090,
    1472214,
    1292016,
    1272015,
    1222058,
    1242061,
    1482168,
    1492179,
    1532098,
    1403016
);
var status = 0;
var level = Array(0, 1, 2, 3, 4, 5, 6);
var MaxLevel = 6;//這裡添加最大等級
var qianghuaname = "深淵武器強化";//顯示用 對應腳本名可以循環
var itemPQ = Array(
    //四維 攻魔 材料1 材料數量1 2 2 3 3 4 4 B傷 總傷 無視 楓幣
    Array(8, 10, 4310154, 1, 4250000, 2, 4032053, 300, 2250001, 10, 0, 0, 0, 0),
    Array(8, 10, 4310154, 1, 4250000, 4, 4032053, 400, 2250001, 15, 0, 0, 0, 0),
    Array(10, 12, 4310154, 1, 4250000, 6, 4032053, 500, 2250001, 25, 0, 0, 0, 0),
    Array(10, 12, 4310154, 2, 4250000, 8, 4032053, 600, 2250001, 30, 0, 0, 0, 0),
    Array(15, 18, 4310154, 2, 4250000, 10, 4032053, 700, 2250001, 40, 0, 0, 0, 0),
    Array(15, 18, 4310154, 2, 4250000, 13, 4032053, 800, 2250001, 50, 0, 0, 0, 0),
    Array(20, 23, 4310154, 3, 4250000, 17, 4032053, 900, 2250001, 60, 0, 0, 0, 0),
);
var idbans = -1;
var zhizuo = null;
var name;
var equip = player.getInventorySlot(1, 1);

if (equip == null) {
    npc.askMenuS("請在裝備欄第一個位置放上裝備！");
}
if (equip.getTitle() == "") {
    equip.setTitle("0階段");
}
text = "Welcome to the special trip              " + a38 + "\r\n";

text += "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n"
if (equip.getTitle().length == 3) {//9階段後的數值
    name = parseInt(equip.getTitle().substring(0, 1));//獲取階段
} else {
    name = parseInt(equip.getTitle().substring(0, 2));//獲取階段			
}
if (name > MaxLevel) {//最大等級
    npc.askMenuS("已強化至最大階級,請耐心等待下次開放等級");
}
for (var i = name; i < level.length; i++) {
    var tips = "點擊查看";
    text += "\t#b#L" + i + "##r強化 #z" + equip.getDataId() + "# #b" + level[i] + "階段 #r[" + tips + "]#k#l\r\n";
}
let idbans = npc.askMenuS(text);
var text = "";
zhizuo = itemPQ[idbans];
text += "#r四維 [ " + zhizuo[0] + " ] 攻魔 [ " + zhizuo[1] + " ] HpMp [ " + zhizuo[0] * 5 + " ]\r\n B傷 [ " + zhizuo[10] + " ]  總傷 [ " + zhizuo[11] + " ]  無視 [ " + zhizuo[12] + " ]\r\n";
text += "[ #v" + zhizuo[2] + ":# * " + zhizuo[3] + " ] [ #v" + zhizuo[4] + ":# * " + zhizuo[5] + " ]\r\n[ #v" + zhizuo[6] + ":# * " + zhizuo[7] + " ] [ #v" + zhizuo[8] + ":# * " + zhizuo[9] + " ]\r\n需要楓幣 [ " + zhizuo[13] + " ]\r\n";

text += "\r\n#d是否現在就升級#b#z" + equip.getDataId() + "##d裝備?#k";

if (name != level[idbans])
    npc.askMenuS("升級異常,請逐一升級! 目前只能升級:#r" + name + " #k階段轉裝備!\r\n以下為選中階段屬性以及需求:\r\n#r四維 [ " + zhizuo[0] + " ] 攻魔 [ " + zhizuo[1] + " ] HpMp [ " + zhizuo[0] * 5 + " ]\r\n B傷 [ " + zhizuo[10] + " ]  總傷 [ " + zhizuo[11] + " ]  無視 [ " + zhizuo[12] + " ]\r\n[ #v" + zhizuo[2] + ":# * " + zhizuo[3] + " ] [ #v" + zhizuo[4] + ":# * " + zhizuo[5] + " ]\r\n[ #v" + zhizuo[6] + ":# * " + zhizuo[7] + " ] [ #v" + zhizuo[8] + ":# * " + zhizuo[9] + " ]\r\n需要楓幣 [ " + zhizuo[13] + " ]");
else
    sel = npc.askYesNo(text);
if (sel == 1) {
    var itemid = equip.getDataId();
    var flag = 0;
    for (var i = 0; i < ItemList.length; i++) {
        if (itemid == ItemList[i]) {
            flag = 1;
        }
    }
    if (flag == 1) {
        if (!player.hasItem(zhizuo[2], zhizuo[3])) {
            npc.say("#v" + zhizuo[2] + "#不足" + zhizuo[3] + "");
        } else if (!player.hasItem(zhizuo[4], zhizuo[5])) {
            npc.say("#v" + zhizuo[4] + "#不足" + zhizuo[5] + "");
        } else if (!player.hasItem(zhizuo[6], zhizuo[7])) {
            npc.say("#v" + zhizuo[6] + "#不足" + zhizuo[7] + "");
        } else if (!player.hasItem(zhizuo[8], zhizuo[9])) {
            npc.say("#v" + zhizuo[8] + "#不足" + zhizuo[9] + "");
        } else if (!player.hasMesos(zhizuo[13])) {
            npc.say("楓幣不足" + zhizuo[13] + "");
        } else {
            player.loseItem(zhizuo[2], zhizuo[3]);
            player.loseItem(zhizuo[4], zhizuo[5]);
            player.loseItem(zhizuo[6], zhizuo[7]);
            player.loseItem(zhizuo[8], zhizuo[9]);
            player.loseMesos(zhizuo[13]);
            var equip = player.getInventorySlot(1, 1);
            var STR = equip.getStr();
            var DEX = equip.getDex();
            var INT = equip.getInt();
            var LUK = equip.getLuk();
            var PAD = equip.getPad();
            var MAD = equip.getMad();
            var BDR = equip.getBossDamageR();
            var PDR = equip.getIgnorePDR();
            var DAR = equip.getDamR();
            var HP = equip.getMaxHp();
            var MP = equip.getMaxMp();
            //替換掉屬性
            //力量
            equip.setStr(STR + zhizuo[0]);
            //敏捷
            equip.setDex(DEX + zhizuo[0]);
            //智力
            equip.setInt(INT + zhizuo[0]);
            //運氣
            equip.setLuk(LUK + zhizuo[0]);
            //攻擊
            equip.setPad(PAD + zhizuo[1]);
            //魔法攻擊
            equip.setMad(MAD + zhizuo[1]);
            //HP
            equip.setMaxHp(HP + (zhizuo[0] * 5));
            //MP
            equip.setMaxMp(MP + (zhizuo[0] * 5));
            //BOSS傷害
            equip.setBossDamageR(BDR + zhizuo[10]);
            //無視
            equip.setIgnorePDR(PDR + zhizuo[12]);
            //傷害
            equip.setDamR(DAR + zhizuo[11]);
            var qhcs = name + 1;
            equip.setTitle(qhcs + "階段");
            player.updateItem(1, equip);
            if (MaxLevel == name) {//滿級強化才會提示
                map.blowWeather(5120009, "恭喜" + player.getName() + "將【" + equip.getItemName() + "】,提升至[" + (name + 1) + "]階段"); //喇叭特效
            }
            npc.broadcastPlayerNotice(16, "【" + qianghuaname + "】玩家 [" + player.getName() + "] :強化成功");
            npc.say("升階成功");
            player.runScript("" + qianghuaname + "");
        }
    } else {
        var texts = "";
        for (var i = 0; i < ItemList.length; i++) {
            texts += "#v" + ItemList[i] + "#";
        }
        npc.say("你的裝備不對,無法強化,以下是可強化的裝備\r\n" + texts);
    }
}