//強化制作 by dgms
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var ItemList = Array(
    1
);

var ItemSl = Array(
    Array(2632655, 1),
);
var randList = Array(
    Math.floor(50), //allint
    Math.floor(300), //hpmp
    Math.floor(2), //boss
    Math.floor(2), //wushi
    Math.floor(2), //zongshang
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
var xiezai = equip.getPVPDamage();
var itemid = equip.getDataId();
if (equip1 == null) {
    npc.askMenuS("請在裝備欄第一個位置放上裝備！");
}
avail += "#b需要的材料如下:\r\n";
for (var i = 0; i < ItemSl.length; i++) {
	    avail = "#fs21##e#r你好,這裡是裝備寶石拆卸\r\n";

    avail += "#fs16##e#b鑲嵌後自動判斷你鑲嵌過幾顆,扣除鑲嵌屬性,返還寶石\r\n";

    avail += "#v" + ItemSl[i][0] + "# 需要 [ #r" + ItemSl[i][1] + " #b][餘額商店購買]\r\n\r\n";
}
avail += "拆卸扣除屬性:#b全屬性[#r" + randList[0] * xiezai + "#b] 物攻[#r" + randList[0] * xiezai + "#b] 魔攻[#r" + randList[0] * xiezai + "#b] HP/MP [#r" + randList[1] * xiezai + "#b]\r\n\t\t\tB傷[#r" + randList[2] * xiezai + "#b] 無視[#r" + randList[3] * xiezai + "#b] 總傷[#r" + randList[4] * xiezai + "#b]\r\n";
avail += "\t\t#L0##b點我拆卸#v" + itemid + "#[返還紅寶石*" + xiezai + "]#l#k\r\n#k";

let selection = npc.askMenuA(avail);
if (selection == 0) {
    equip = player.getInventorySlot(1, 1);
    //for (var i = 0; i < ItemSl.length; i++) { {
    if (!player.hasItem(ItemSl[0][0], ItemSl[0][1])) {
        npc.say("#fs18##b#e你並沒有足夠的材料所以不能拆卸");
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
                var info = "是否拆卸裝備：#v" + equip.getDataId() + "##t" + equip.getDataId() + "#?\r\n此操作不可逆"
                let sel = npc.askYesNoSNoEsc(info);
                if (sel == 1) {
                    STR = equip.getStr();
                    DEX = equip.getDex();
                    INT = equip.getInt();
                    LUK = equip.getLuk();
                    PAD = equip.getPad(); //物理傷害
                    MAD = equip.getMad(); //魔法傷害
                    HP = equip.getMaxHp(); //HP
                    MP = equip.getMaxMp(); //MP
                    //替換掉屬性
                    //力量
                    equip.setStr(STR - randList[0] * xiezai);
                    //敏捷* xiezai
                    equip.setDex(DEX - randList[0] * xiezai);
                    //智力* xiezai
                    equip.setInt(INT - randList[0] * xiezai);
                    //運氣* xiezai
                    equip.setLuk(LUK - randList[0] * xiezai);
                    //攻擊* xiezai
                    equip.setPad(PAD - randList[0] * xiezai);
                    //魔法攻擊* xiezai
                    equip.setMad(MAD - randList[0] * xiezai);
                    //HPMP
                    if (equip.getMaxHp() >= 32700 || equip.getMaxMp() >= 32700) {
                        equip.setMaxHp(0);
                        equip.setMaxMp(0);
                    } else {
                        equip.setMaxHp(HP - randList[1] * xiezai);
                        equip.setMaxMp(MP - randList[1] * xiezai);
                    }

                    //BOSS傷害
                    equip.setBossDamageR(equip.getBossDamageR() - randList[2] * xiezai);
                    //無視
                    equip.setIgnorePDR(equip.getIgnorePDR() - randList[3] * xiezai);
                    //總傷
                    equip.setDamR(equip.getDamR() - randList[4] * xiezai);
                    equip.setPVPDamage(equip.getPVPDamage() - xiezai);
                    player.updateItem(1, equip);
                    player.gainItem(2632485, xiezai);
                    //npc.broadcastPlayerNotice(16,"【NV強化中心】玩家 [" + player.getName() + "] :強化成功");
                    for (var key in ItemSl) {
                        player.loseItem(ItemSl[key][0], ItemSl[key][1]);
                    }
                    npc.say("拆卸成功");
                } else {
                    npc.say("好的歡迎下次光臨");
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
