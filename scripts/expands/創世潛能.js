/**
 * 創造潛能
 **/
var q1 = "#fUI/UIWindowString/Scenario/quest_info/scene/summary_icon/summary#"
let cat1 = "#fItem/Pet/5000000.img/alert/0#";
let cat2 = "#fItem/Pet/5000000.img/fly/0#";
let cat3 = "#fItem/Pet/5000000.img/cry/0#";
let tu1 = "#fItem/Cash/0501.img/05010045/effect/stand1/1#"
let tu2 = "#fItem/Cash/0501.img/05010002/effect/default/7#"
let tu3 = "#fUI/NameTag/medal/758/w#"
let tu4 = "#fEffect/SetEff.img/245/effect/28#"
let tu5 = "#fUI/NameTag/medal/758/e#"
let tu6 = "#fUI/NameTag/medal/758/c#"
let fy = "#fUI/RunnerGame.img/RunnerGameUI/UI/Point/1#";
let fy1 = "#fUI/RunnerGame.img/RunnerGameUI/UI/Point/2#";
let dz = "#fUI/GuildMark/Mark/Etc/00009020/1#";
let dz1 = "#fEffect/CharacterEff/1003393/1/0#";
let star = "#fEffect/CharacterEff/1051294/1/1#"
let eff2 = "#fEffect/CharacterEff/1112925/0/0#";
var eff1 = "#fEffect/CharacterEff/1112924/0/0#";
//所需材料 開第1條
let needItems1 = Array(
//第一條：100運動會幣 4310030 +100征服者幣 4310036 +1000 八週年紀念幣 4310025
    Array(4310107, 9),//運動會幣
    Array(4310218, 15),//征服者幣
	Array(4000742, 3000),//征服者幣
	Array(4000744, 3000),//征服者幣
	Array(4000731, 3000),//征服者幣
	Array(4032053, 9000)//征服者幣


);
//所需材料 開第2條
let needItems2 = Array(
//第二條：100運動會幣 4310030 +100征服者幣 4310036 +1萬最高結晶 4021016
    Array(4310107, 3),//運動會幣
    Array(4310218, 5),//征服者幣
	Array(4000742, 1000),//征服者幣
	Array(4000744, 1000),//征服者幣
	Array(4000731, 1000),//征服者幣
	Array(4032053, 3000)//征服者幣

);
//所需材料 開第3條
let needItems3 = Array(
//第三條：150運動會幣 4310030 +150征服者幣 4310036 +5萬紅色蝸牛殼+5萬藍色蝸牛殼 4000000 4000016
    Array(4310107, 3),//運動會幣
    Array(4310218, 5),//征服者幣
	Array(4000742, 1000),//征服者幣
	Array(4000744, 1000),//征服者幣
	Array(4000731, 1000),//征服者幣
	Array(4032053, 3000)//征服者幣
);
//所需材料 開第4條
let needItems4 = Array(
//第四條：150運動會幣 4310030 +150征服者幣 4310036 +風火水土各3個+5個惡魔之錘
    Array(4310107, 9),//運動會幣
    Array(4310218, 15),//征服者幣
	Array(4000742, 3000),//征服者幣
	Array(4000744, 3000),//征服者幣
	Array(4000731, 3000),//征服者幣
	Array(4032053, 9000)//征服者幣
);
//所需材料 開第5條
let needItems5 = Array(
//第五條：200運動會幣 4310030 +200征服者幣 4310036 +三件神祕套服
    Array(4310107, 3),//運動會幣
    Array(4310218, 5),//征服者幣
	Array(4000742, 1000),//征服者幣
	Array(4000744, 1000),//征服者幣
	Array(4000731, 1000),//征服者幣
	Array(4032053, 3000)//征服者幣

);
//所需材料 開第6條
let needItems6 = Array(
//第六條：200運動會幣 4310030 +200征服者幣 4310036 +三件神祕頭盔


    Array(4310107, 3),//運動會幣
    Array(4310218, 5),//征服者幣
	Array(4000742, 1000),//征服者幣
	Array(4000744, 1000),//征服者幣
	Array(4000731, 1000),//征服者幣
	Array(4032053, 3000)//征服者幣
);

//可以使用的裝備列表
let equips = Array(
    1302355,
    1402268,
    1312213,
    1412189,
    1213022,
    1322264,
    1592022,
    1422197,
    1432227,
    1302355,
    1442285,
    1232122,
    1382274,
    1372237,
    1452266,
    1462252,
	1403022,
    1592022,
    1332289,
    1472275,
    1492245,
    1482232,
    1532157,
    1362149,
    1272040,
    1552130,
    1542128,
    1252106,
    1212129,
    1522152,
    1242139,
    1262051,
    1282040,
    1222122,
    1582044
);

//潛能列表
var potList = Array(
    Array(10013, "防御力+15", 1),
    // Array(40292, "無視怪物40%的防禦率", 1),
    Array(10013, "防御力+15", 1),
    Array(10013, "防御力+15", 1)
    //Array(60001, "總傷害：+12% ", 1),
    //Array(40056, "暴擊傷害：+8% ", 1),
    //Array(60002, "所有屬性：+20% ", 1),
    //Array(60007, "MaxHP : +10% )", 1),
    //Array(40055, "爆擊率 12%", 1)
);
let needItems;
let selStr = "";

selStr += "#b系統說明：請將解封的創世武器放到第一格：#k\r\n\r\n\r\n";
selStr += "#b潛能說明：開啟第一條潛能後[使用楓點商店印章開啟後兩條]#k\r\n";
selStr += "#b潛能說明：開啟第四條潛能後[使用楓點商店印章開啟後兩條]#k\r\n";

//獲取第一格裝備
let toDrop = player.getInventorySlot(1, 1);
//判斷第一格裝備是否存在
if (toDrop == null) {
    npc.say(selStr + "\r\n#r檢測到您的裝備欄第一格沒有裝備，無法使用，請確認！", 9010061);
} else if (toDrop.getSN() > -1) {
    npc.say(selStr + "\r\n#r檢測到您的裝備欄第一格是現金道具，無法使用，請確認！", 9010061);
} else {
    //判斷裝備是否是可用裝備
    let toDropID = toDrop.getDataId();
    var PD = 0;
    for (var i = 0; i < equips.length; i++) {
        if (toDropID == equips[i]) {
            PD++;
            break;
        }
    }
    if (PD == 0) {
        let ss = "\r\n可以使用的裝備如下\r\n"
        for (var i = 0; i < equips.length; i++) {
            ss += "#v" + equips[i] + "#,";
        }

        npc.say(selStr + "\r\n#r您的裝備無法使用該功能,以下為支援該功能的：\r\n創世武器，請確認！", 9010061);

    } else {
        selStr += "\r\n您的第一格裝備為:#v" + toDrop.getDataId() + "#,是否為它開啟潛能？"
        let YN = npc.askYesNo(selStr, 9010061);
        if (YN == 1) {
            selStr = "" + q1 + "\r\n#k創世武器封印極為強大！每條潛能需要的材料都不一樣！加油吧！冒險家#b"

            for (let i = 1; i <= 1; i++) {
                selStr += "\r\n第#r" + 1 + "#b潛能"
                for (let i = 0; i < needItems1.length; i++) {

                    selStr += "#v" + needItems1[i][0] + "# x" + needItems1[i][1] + ""
                }
                /*selStr += "\r\n第#r" + 2 + "#b潛能"
                for (let i = 0; i < needItems2.length; i++) {
                  selStr += "#v" + needItems2[i][0] + "# x" + needItems2[i][1] + ""
                }
                //selStr += "\r\n第#r" + 3 + "#b潛能"
                for (let i = 0; i < needItems3.length; i++) {
                    selStr += "#v" + needItems3[i][0] + "# x" + needItems3[i][1] + ""
                }*/
                selStr += "\r\n第#r" + 4 + "#b潛能"
                for (let i = 0; i < needItems4.length; i++) {
                    selStr += "#v" + needItems4[i][0] + "# x" + needItems4[i][1] + ""
                }
                /*selStr += "\r\n第#r" + 5 + "#b潛能"
                for (let i = 0; i < needItems5.length; i++) {
                    selStr += "#v" + needItems5[i][0] + "# x" + needItems5[i][1] + ""
                }
                //selStr += "\r\n第#r" + 6 + "#b潛能"
                for (let i = 0; i < needItems6.length; i++) {
                    selStr += "#v" + needItems6[i][0] + "# x" + needItems6[i][1] + ""
                }*/

            }


            for (let i = 1; i <= 1; i++) {
                selStr += "#r\r\n#L" + i + "#我要開啟第" + i + "條潛能[楓點商店印章開啟後兩條]#l\r\n "
			
            }
			 for (let i = 4; i <= 4; i++) {
                selStr += "#r\r\n#L" + i + "#我要開啟第" + i + "條潛能[楓點商店印章開啟後兩條]#l\r\n "
			
            }
            let selected = npc.askMenu(selStr, 9010061);
            if (selected == 1) needItems = needItems1;
            if (selected == 2) needItems = needItems2;
            if (selected == 3) needItems = needItems3;
            if (selected == 4) needItems = needItems4;
            if (selected == 5) needItems = needItems5;
            if (selected == 6) needItems = needItems6;

            selStr = "選擇為#v" + toDrop.getDataId() + "#的第#r" + selected + "#k條潛能所附加的屬性:\r\n";
            for (let i = 0; i < potList.length; i++) {
                selStr += "#r\r\n#L" + i + "#" + potList[i][1] + "#l "
            }
            let selectedPot = npc.askMenu(selStr, 9010061);

            selStr = "你將為#v" + toDrop.getDataId() + "#的第#r" + selected + "#k條潛能附加屬性:#r" + potList[selectedPot][1];
            selStr += "\r\n#b此操作將消耗您:\r\n";
            for (let i = 0; i < needItems.length; i++) {
                selStr += "#v" + needItems[i][0] + "# x " + needItems[i][1] + "   "
            }

            YN = npc.askYesNo(selStr, 9010061);

            if (YN == 1) {
                var PD = 0; //判斷材料是否足夠
                for (let j = 0; j < needItems.length; j++) {
                    if (!player.hasItem(needItems[j][0], needItems[j][1])) {
                        PD++;
                    }
                }
                if (PD != 0) {
                    npc.say("材料不足")
                } else {
                    for (let j = 0; j < needItems.length; j++) {
                        player.loseItem(needItems[j][0], needItems[j][1]);
                    }

                    toDrop.setGrade(20)
                    if (selected < 4) {
                        toDrop.setOption(selected, potList[selectedPot][0], false);
                    } else {
                        toDrop.setOption(selected - 3, potList[selectedPot][0], true);
                    }
                    player.updateItem(1, toDrop);
                    npc.broadcastPlayerNotice(15, "[創世潛能解封]]:] " + player.getName() + "成功給【" + toDrop.getItemName() + "】的第<" + selected + ">條潛能開啟");
                    //npc.broadcastWeatherEffectNotice(272, "[創世潛能解封]: " + player.getName() + "成功給【" + toDrop.getItemName() + "】的第<" + selected + ">條潛能開啟", 5120006);
                    npc.say("成功開啟", 9010061);
                }
            }


        }
    }
}
player.runScript("創世潛能");