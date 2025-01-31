//鑲嵌制作 by dgms
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔

var ItemList = Array(

    1

);

var ItemSl = Array(
    Array(2632485, 1),
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
var 可鑲嵌次數 = 30000;
var avail = "";
equip1 = player.getInventorySlot(1, 1);
equip = player.getInventorySlot(1, 1);

if (equip1 == null) {
    npc.askMenuS("請在裝備欄第一個位置放上裝備！");
}
var itemid = equip.getDataId();
if (equip1.getIgnorePDR() > 254 || equip1.getBossDamageR() > 254 || equip1.getDamR() > 254) {
    npc.askMenuS("無法繼續提升,請更換裝備！");
}
avail += "#b需要的材料如下:\r\n";
for (var i = 0; i < ItemSl.length; i++) {
    avail = "#fs21##e#r你好,這裡是裝備寶石鑲嵌\r\n";

    avail += "#fs16##e#b可鑲嵌任意裝備欄[裝備]鑲嵌後寶石可拆卸!!!\r\n";

    avail += "#v" + ItemSl[i][0] + "#需要 [ #r" + ItemSl[i][1] + " #b]\r\n";
	 avail += "#b裝備[無視][B傷][總傷]大於254將不能繼續鑲嵌\r\n";
}
avail += "#b每次鑲嵌:#b全屬性[#r" + randList[0] + "#b] 物攻[#r" + randList[0] + "#b] 魔攻[#r" + randList[0] + "#b] HP/MP [#r" + randList[1] + "#b]\r\n  \t\tB傷[#r" + randList[2] + "#b] 無視[#r" + randList[3] + "#b] 總傷[#r" + randList[4] + "#b] \r\n";
avail += "\t\t#L0##r點擊鑲嵌#v" + itemid + "##l#k #L1##b點擊拆卸#v" + itemid + "##l#k\r\n#k";

let selection = npc.askMenuA(avail);
if (selection == 0) {
    equip = player.getInventorySlot(1, 1);
    //for (var i = 0; i < ItemSl.length; i++) { {
    if (!player.hasItem(ItemSl[0][0], ItemSl[0][1])) {
        npc.say("#fs18##b#e你並沒有足夠的材料所以不能鑲嵌");
    } else if (equip == null) {
        npc.say("#fs18##b#e請在裝備欄第一個位置放上裝備！");
	} else if (equip.getBossDamageR() >= 250) {
        npc.say("裝備B傷溢出無法繼續鑲嵌");
    } else if (equip.getIgnorePDR() >= 250) {
        npc.say("裝備無視溢出無法繼續鑲嵌");
    } else if (equip.getDamR() >= 250) {
        npc.say("裝備總傷溢出無法繼續鑲嵌");
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
            if (str < 可鑲嵌次數) {
                var info = "裝備：#v" + equip.getDataId() + "##t" + equip.getDataId() + "#\r\n當前屬性如下：\r\n";
                //info += "#r點擊‘是’會增加當前顯示屬性並且鑲嵌等級+1 ，最多鑲嵌" + 可鑲嵌次數 + "次#k\r\n"
                //保存更新記錄
                info += "\r\n#b鑲嵌:#k#r-> #r本次增加";
                info += "\r\n\r\n#b鑲嵌力量:#k#r+ #r" + randList[0];
                info += "\t#b鑲嵌敏捷:#k#r+ #r" + randList[0];
                info += "\t#b鑲嵌智力:#k#r+ #r" + randList[0];
                info += "\r\n\r\n#b鑲嵌運氣:#k#r+ #r" + randList[0];
                info += "\t#b鑲嵌攻擊力:#k#r+ #r" + randList[0];
                info += "\t#b鑲嵌魔法力:#k#r+ #r" + randList[0];
                if (equip.getMaxHp() >= 32700 || equip.getMaxMp() >= 32700) {
                    info += "\r\n\r\n#b鑲嵌HPMP:#k#r+ #r 最大值";
                } else {
                    info += "\r\n\r\n#b鑲嵌HPMP:#k#r+ #r" + randList[1];
                }
                info += "\t#b鑲嵌BOSS傷害:#k#r+ #r" + randList[2];
                info += "\t#b鑲嵌無視:#k#r+ #r" + randList[3];
                info += "\r\n\r\n#b鑲嵌總傷:#k#r+ #r" + randList[4];
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
                    equip.setStr(STR + randList[0]);
                    //敏捷
                    equip.setDex(DEX + randList[0]);
                    //智力
                    equip.setInt(INT + randList[0]);
                    //運氣
                    equip.setLuk(LUK + randList[0]);
                    //攻擊
                    equip.setPad(PAD + randList[0]);
                    //魔法攻擊
                    equip.setMad(MAD + randList[0]);
                    //HPMP
                    if (equip.getMaxHp() < 32700 || equip.getMaxMp() < 32700) {
                        equip.setMaxHp(HP + randList[1]);
                        equip.setMaxMp(MP + randList[1]);
                    }
                    //BOSS傷害
                    equip.setBossDamageR(equip.getBossDamageR() + randList[2]);
                    //無視
                    equip.setIgnorePDR(equip.getIgnorePDR() + randList[3]);
                    //總傷
                    equip.setDamR(equip.getDamR() + randList[4]);
                    equip.setPVPDamage(equip.getPVPDamage() + 1);
                    //var str = equip.getTitle();
                    //var get = str.substring(3, 4);
                    //var qhcs = Number(get) + 1;
                    //equip.setTitle("鑲嵌+" + qhcs);
                    //equip.setAttribute(1);
                    player.updateItem(1, equip);
                    //npc.broadcastPlayerNotice(16,"【NV鑲嵌中心】玩家 [" + player.getName() + "] :鑲嵌成功");
                    for (var key in ItemSl) {
                        player.loseItem(ItemSl[key][0], ItemSl[key][1]);
                    }
                    npc.say("鑲嵌成功");
                    player.runScript("NV幣強化");
                } else {
                    npc.say("好的歡迎下次光臨");
                }
            } else {
                npc.say("鑲嵌次數已經到達上限,目前鑲嵌只開放到" + 可鑲嵌次數 + "次");
            }
        } else {
            npc.say("請檢查裝備欄第一個位置是否放入正確裝備");
        }
    }
} else if (selection == 1) {
    player.runScript("NV卸載");
}
