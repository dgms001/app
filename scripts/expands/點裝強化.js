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
var qhid = 2633918;

var successP = 10;//成功幾率
var min = 1;
var max = 10;
var sx = Array();

while (true) {
    var toDrop = player.getInventorySlot(6, 1);
    if (toDrop == null) {
        npc.askMenu("時裝欄第一格沒有裝備");
    }
    sx = Array();
    var str = "Welcome to the special trip              " + a38 + "\r\n";
    str += "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n";

    str += "#r點裝捲軸說明:#b\r\n"
    str += "#v2633918##z" + qhid + "# 剩餘數量#r " + player.getAmountOfItem(qhid);
    str += "\r\n#d請將您想要使用捲軸的點裝放到第一格";
    str += "\r\n#b成功率#r" + successP + "% #b加減範圍[#r" + min + " - " + max + "#b]";
    str += "\r\n#d任意屬性達到50則不下降[#r保底50屬性#d]大於50隨機[#r" + min + "+ -" + max + "#d]";
    str += "\r\n#d任意屬性達到300無法繼續使用,如需繼續突破請點擊突破";
    str += "\r\n#d突破成功則加全屬性100,失敗則爆裝!概率為40%";
    str += "\r\#L1#開始時裝捲軸#l #L2#突破點裝屬性[有風險]#l";
    let YN = npc.askMenuS(str);
    if (YN == 1) {
        var toDrop = player.getInventorySlot(6, 1);
        if (toDrop.getStr() > 300 || toDrop.getDex() > 300 || toDrop.getInt() > 300 || toDrop.getLuk() > 300 || toDrop.getPad() > 300 || toDrop.getMad() > 300 || toDrop.getMaxHp() > 3000) {
            npc.askMenuS("有一個屬性已經大於300,無法繼續使用!如需突破請點擊突破風險極高!!!");
        }
        if (player.hasItem(qhid, 1)) {
            player.loseItem(qhid, 1);
            if (toDrop.getStr() <= 50 || toDrop.getDex() <= 50 || toDrop.getInt() <= 50 || toDrop.getLuk() < 50 || toDrop.getPad() <= 50 || toDrop.getMad() <= 50 || toDrop.getMaxHp() <= 500) {
                jilv1 = 100
            } else {
                jilv1 = Math.random() * 100;
            }
            jilv = Math.random() * 100;
            if (jilv < successP) {
                for (let j = 0; j < 7; j++) {
                    var ran = Math.floor(Math.random() * (max - min + 1) + min);
                    if (jilv1 < 50) {
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
                var sss = "恭喜你，強化成功，屬性上漲！";
                if (jilv1 < 50) {
                    var sss = "很遺憾，歐皇雖然成功，但是屬性下降了！";
                }
                npc.say(sss + "\r\n#d力量:#r" + sx[0] + "\r\n#d敏捷:#r" + sx[1] + "\r\n#d智力:#r" + sx[2] + "\r\n#d運氣:#r" + sx[3] + "\r\n#d攻擊力:#r" + sx[4] + "\r\n#d魔法力:#r" + sx[5] + "\r\n#dHP:#r" + sx[6] * 10);
            } else {
                npc.say("失敗了~!");
            }
        } else {
            npc.askMenuS("沒有歐皇卷軸了")
        }
    } else if (YN == 2) {
        var jilv2 = Math.random() * 100;
        var toDrop = player.getInventorySlot(6, 1);
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