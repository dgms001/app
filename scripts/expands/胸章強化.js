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
var ItemList = [
    1182136,
];
var status = 0;
var level = Array(0, 1, 2, 3, 4, 5, 6);
var MaxLevel = 6;//這裡添加最大等級
var qianghuaname = "胸章強化";//顯示用 對應腳本名可以循環
var itemPQ = Array(
    /*
    第一次提升    4032053枫叶    4001832痕跡    制作里面两个材料
    之後提升  副本材料   4032053枫叶   4001832痕跡 4002003魔法马车碎片   金币
    */
    //四維 攻魔 材料1 材料數量1 2 2 3 3 4 4 B傷 總傷 無視 楓幣
    Array(30, 35, 4032053, 9999, 4001832, 9999, 4000329, 666, 4000082, 666, 0, 0, 0, 50000000),
    Array(10, 15, 4032053, 6666, 4001832, 7777, 4002003, 66, 4031595, 18, 0, 0, 0, 18888888),
    Array(10, 15, 4032053, 7777, 4001832, 8888, 4002003, 88, 4031595, 18, 0, 0, 0, 28888888),
    Array(15, 20, 4032053, 8888, 4001832, 9999, 4002003, 128, 4031595, 36, 0, 0, 0, 38888888),
    Array(15, 20, 4032053, 9999, 4001832, 10000, 4002003, 158, 4031595, 36, 0, 0, 0, 48888888),
    Array(20, 25, 4032053, 10000, 4001832, 20000, 4002003, 198, 4031595, 48, 0, 0, 0, 58888888),
    Array(20, 25, 4032053, 20000, 4001832, 30000, 4002003, 222, 4031595, 54, 0, 0, 0, 68888888),

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