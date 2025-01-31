//強混 幾裡 315342975

//強混ID
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var f2 = "#fUI/CashShop/CSBeauty/hairColor/Enable/2#"
var f3 = "#fUI/CashShop/CSBeauty/hairColor/Enable/3#"
var f4 = "#fUI/CashShop/CSBeauty/hairColor/Enable/4#"
var f5 = "#fUI/CashShop/CSBeauty/hairColor/Enable/5#"
var qhid = 2632487;

var successP = 10;//成功幾率
var min = 1;
var max = 5                                                            ;
var sx = Array();

while (true) {
    var toDrop = player.getInventorySlot(1, 1);
    if (toDrop == null) {
        npc.askMenu("裝備欄第一格沒有裝備");
    }
    if (parseInt(toDrop.getItemId() / 10000) != 114) {
        npc.askMenu("只有勛章才可以強化");
    }
    sx = Array();
    var str = "#fs21##e#r這裡是勛章強化中心,請開始提升!!!\r\n";


    str += "#fs16##b每次消耗#r999#b個#v2632487##z" + qhid + "# 擁有數量#r " + player.getAmountOfItem(qhid);
    str += "\r\n#b請將勳章放到裝備欄第一格";
    str += "\r\n\t\t\t#b力量隨機加減[#r" + min + " - " + max + "#b]  物攻隨機加減[#r" + min + " - " + max + "#b]";
    str += "\r\n\t\t\t#b敏捷隨機加減[#r" + min + " - " + max + "#b]  魔攻隨機加減[#r" + min + " - " + max + "#b]";
	str += "\r\n\t\t\t#b智力隨機加減[#r" + min + " - " + max + "#b]  H p 隨機加減[#r" + min + " - " + max + "#b]";
	str += "\r\n\t\t\t#b幸運隨機加減[#r" + min + " - " + max + "#b]";
    str += "\r\n\t\t\t\t\t\t#L1#開始強化#l #l";//#L2#突破點裝屬性[有風險]
    let YN = npc.askMenuA(str);
    if (YN == 1) {
        var toDrop = player.getInventorySlot(1, 1);
        if (toDrop.getStr() > 30000 || toDrop.getDex() > 30000 || toDrop.getInt() > 30000 || toDrop.getLuk() > 30000 || toDrop.getPad() > 30000 || toDrop.getMad() > 30000 || toDrop.getMaxHp() > 30000) {
            npc.askMenuS("有一個屬性已經大於30000,無法繼續使用!如需突破請點擊突破風險極高!!!");
        }
        if (player.hasItem(qhid, 999)) {
            player.loseItem(qhid, 999);
            if (toDrop.getStr() <= 10 || toDrop.getDex() <= 10 || toDrop.getInt() <= 10 || toDrop.getLuk() < 10 || toDrop.getPad() <= 10 || toDrop.getMad() <= 10 || toDrop.getMaxHp() <= 10) {
                jilv1 = 10
            } else {
                jilv1 = Math.random() * 100;
            }
            jilv = Math.random() * 100;
            if (jilv < successP) {
                for (let j = 0; j < 7; j++) {
                    var ran = Math.floor(Math.random() * (max - min + 1) + min);
                    if (jilv1 < 10) {
                        ran = -ran;
                    }
                    sx.push(ran);
                }

                toDrop.setStr(toDrop.getStr() + sx[0]);

                toDrop.setDex(toDrop.getDex() + sx[1]);

                toDrop.setInt(toDrop.getInt() + sx[2]);

                toDrop.setLuk(toDrop.getLuk() + sx[3]);

                toDrop.setPad(toDrop.getPad() + sx[4]);

                toDrop.setMad(toDrop.getMad() + sx[5]);

                toDrop.setMaxHp(toDrop.getMaxHp() + (sx[6] * 10));

                player.updateItem(6, toDrop);
                var sss = "強化成功,屬性增加  \r\n";
                if (jilv1 < 10) {
                    var sss = "失敗了,屬性減少  \r\n";
                }
                player.showSystemMessage(sss + "力量:[" + sx[0] + "] 敏捷:[" + sx[1] + "] 智力:[" + sx[2] + "] 運氣:[" + sx[3] + "] 攻擊力:[" + sx[4] + "] 魔法力:[" + sx[5] + "] HP:[" + sx[6] * 10);
            } else {
                player.showSystemMessage("失敗了~!");
            }
        } else {
            player.showSystemMessage("寶石不足!!!")
        }
    } else if (YN == 2) {
        var jilv2 = Math.random() * 100;
        var toDrop = player.getInventorySlot(1, 1);
        if (toDrop.getStr() < 300 && toDrop.getDex() < 300 && toDrop.getInt() < 300 && toDrop.getLuk() < 300 && toDrop.getPad() < 300 && toDrop.getMad() < 300 && toDrop.getMaxHp() < 3000) {
            npc.askMenuS("突破屬性需要裝備任意屬性達到300,暫時無法使用");
        } else if (jilv2 <= 40) {
            toDrop.setStr(toDrop.getStr() + 100);

            toDrop.setDex(toDrop.getDex() + 100);

            toDrop.setInt(toDrop.getInt() + 100);

            toDrop.setLuk(toDrop.getLuk() + 100);

            toDrop.setPad(toDrop.getPad() + 100);

            toDrop.setMad(toDrop.getMad() + 100);

            toDrop.setMaxHp(toDrop.getMaxHp() + 1000);

            player.updateItem(6, toDrop);
            npc.askMenuS("歐皇你是真正的歐皇!!")
        } else {
            player.loseInvSlot(6, 1);
            npc.askMenuS("很遺憾...失敗了!裝備進入虛空了")
        }
    }
}