//強化制作 by dgms
var ax1 = "#fMap/MapHelper.img/minimap/match#";
var ax2 = "#fEffect/CharacterEff/1042176/2/0#";
var hd = "#fMap/MapHelper.img/weather/knitsWithWarmWinter/8#";
var zb = "#fMap/MapHelper.img/weather/birthday/2#";
var yb = "#fMap/MapHelper.img/weather/birthday/5#";
var a3 = "#fUI/StarCityUI.img/Screen/VIPMessage/WorldinfoNO/16/0#"

var ItemList = Array(
    1212120,
    1222113,
    1232113,
    1242121,
    1242122,
    1252098,
    1262039,
    1302343,
    1312203,
    1322255,
    1332279,
    1342104,
    1362140,
    1372228,
    1382265,
    1402259,
    1412181,
    1422189,
    1432218,
    1442274,
    1452257,
    1462243,
    1472265,
    1482221,
    1492235,
    1522143,
    1532150,
    1542117,
    1552119,
    1582023,
    1272017,
    1282017,
    1592020,
    1213018,
    1292018,
    1214018,
    1403018);
let itemListSS = Array(
    //戰士
    1302355,
    1442285,
    1432227,
    1422197,
    1412189,
    1542128,
    1322264,
    1312213,
    1232122,
    1213022,
    1402268,
    1582044,
    1572010,
    1562010,
    //魔法師
    1382274,
    1282040,
    1372237,
    1262051,
    1252106,
    1552130,
    1212129,
    //弓箭手
    1452266,
    1592022,
    1462252,
    1522152,
    1214022,
    //盜賊
    1472275,
    1362149,
    1332289,
    1272040,
    1242141,
    1242139,
    1292022,
    //海盜
    1532157,
    1492245,
    1482232,
    1403022,
    //1242141,
    //1242139,
    1222122,);

var ItemSl = Array(
    Array(4310260, 300),
    Array(4034622, 100),
    Array(4032053, 19998),
);
var randList = Array(
    Math.floor(60), //str
    Math.floor(60), //dex
    Math.floor(60), //inte
    Math.floor(60), //luk
    Math.floor(60), //pad
    Math.floor(60), //mad
    Math.floor(0), //boss
    Math.floor(0), //wushi
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
var equipA;
var times = 0;
var 可強化次數 = 1;

var avail = "";
avail += "#b請把裝備欄第一格放入神秘武器,第二格放入創世武器\r\n";
equip1 = player.getInventorySlot(1, 1);
equipA = player.getInventorySlot(1, 2);
if (equip1 == null || equipA == null) {
    npc.askMenuS("請在裝備欄第一/第二格有位置放上裝備！");
}
equip = player.getInventorySlot(1, 1);

if (equip != null) {
    itemid = equipA.getDataId();
    if (equipA.getTitle() == "") {
        equipA.setTitle("強化+" + 0);
    }
}
avail += "第一格裝備[#v" + equip1.getDataId() + "#] 第二格裝備[#v" + equipA.getDataId() + "#]";
/*
for (var i = 0; i < ItemList.length; i++) {
    avail += "#b#v" + ItemList[i] + "##k";
}
avail += "\r\n#b第二格裝備如下:\r\n";
for (var i = 0; i < itemListSS.length; i++) {
    avail += "#b#v" + itemListSS[i] + "##k";
}*/
avail += "\r\n#b需要的材料如下:\r\n";
for (var i = 0; i < ItemSl.length; i++) {
    avail += "#v" + ItemSl[i][0] + "# 需要 [ #r" + ItemSl[i][1] + " #b] 當前擁有:#c" + ItemSl[i][0] + "#\r\n\r\n";
}
avail += "繼承力量屬性:" + equip1.getStr() + "\r\n";
avail += "繼承敏捷屬性:" + equip1.getDex() + "\r\n";
avail += "繼承智力屬性:" + equip1.getInt() + "\r\n";
avail += "繼承幸運屬性:" + equip1.getLuk() + "\r\n";
avail += "繼承HP:" + equip1.getMaxHp() + "\r\n";
avail += "繼承MP:" + equip1.getMaxMp() + "\r\n";
avail += "繼承攻擊:" + equip1.getPad() + "\r\n";
avail += "繼承魔攻:" + equip1.getMad() + "\r\n";
avail += "繼承B傷:" + equip1.getBossDamageR() + "\r\n";
avail += "繼承無視:" + equip1.getIgnorePDR() + "\r\n";
avail += "繼承總傷:" + equip1.getDamR() + "\r\n";
avail += "繼承砸卷:" + equip1.getRUC() + "\r\n";
avail += "繼承捲軸次數:" + equip1.getCUC() + "\r\n";
avail += "繼承黃金錘次數:" + equip1.getIUC() + "\r\n";
avail += "繼承白金錘次數:" + equip1.getIUC2() + "\r\n";
avail += "繼承潛能等級:" + equip1.getGrade() + "\r\n";
avail += "繼承潛能1:" + equip1.getOption(1, false) + "\r\n";
avail += "繼承潛能2:" + equip1.getOption(2, false) + "\r\n";
avail += "繼承潛能3:" + equip1.getOption(3, false) + "\r\n";
avail += "繼承潛能4:" + equip1.getOption(1, true) + "\r\n";
avail += "繼承潛能5:" + equip1.getOption(2, true) + "\r\n";
avail += "繼承潛能6:" + equip1.getOption(3, true) + "\r\n";
avail += "繼承靈魂屬性:" + equip1.getSoulOption() + "\r\n";
avail += "繼承靈魂屬性:" + equip1.getSoulOptionID() + "\r\n";
avail += "繼承靈魂屬性:" + equip1.getSoulSocketID() + "\r\n";
avail += "繼承所有屬性:" + equip1.getStatR() + "\r\n";
avail += "繼承未知屬性:" + equip1.getDurability() + "\r\n";


avail += "#r0、#r注意：裝備繼承只有一次機會\r\n";
avail += "#r1、#r注意：第一格裝備必須為神秘武器\r\n";
avail += "2、#r注意：第二格裝備必須為創世武器\r\n";
avail += "3、#r注意：神秘武器強化拉滿在繼承\r\n";
avail += "4、#r注意：請放置好裝備進行繼承,只繼承強化/捲軸其他的獲取不了\r\n";
avail += "5、#r注意：繼承完成後神秘武器恢復所有初始屬性\r\n#k";
avail += "\t\t#L0##b點我繼承#v" + itemid + "##l#k\r\n#k";

let selection = npc.askMenuS(avail);
if (selection == 0) {
    equip = player.getInventorySlot(1, 1);
    equipA = player.getInventorySlot(1, 2);
    //for (var i = 0; i < ItemSl.length; i++) { {
    if (!player.hasItem(ItemSl[0][0], ItemSl[0][1])) {
        npc.say("#fs18##b#e你並沒有足夠的材料所以不能強化");
    } else if (!player.hasItem(ItemSl[1][0], ItemSl[1][1])) {
        npc.say("#fs18##b#e你並沒有足夠的材料所以不能強化");
    } else if (!player.hasItem(ItemSl[2][0], ItemSl[2][1])) {
        npc.say("#fs18##b#e你並沒有足夠的材料所以不能強化");
    } else if (equip == null) {
        npc.say("#fs18##b#e請在裝備欄第一個位置放上裝備！");
    } else {
        var itemid = equip.getDataId();
        var itemidA = equipA.getDataId();
        var flag = 0;
        for (var i = 0; i < ItemList.length; i++) {
            if (itemid == ItemList[i]) {
                flag++;
            }
        }
        for (var i = 0; i < itemListSS.length; i++) {
            if (itemidA == itemListSS[i]) {
                flag++;
            }
        }
        if (flag == 2) {
            var str = equipA.getTitle();
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
                var info = "#v" + equip.getDataId() + "##t" + equip.getDataId() + "#  繼承到  #v" + equipA.getDataId() + "##t" + equipA.getDataId() + "\r\n\r\n";
                info += "#r點擊‘是’完成繼承吧#k\r\n"
                //保存更新記錄
                let sel = npc.askYesNoSNoEsc(info);
                if (sel == 1) {
                    //繼承屬性
                    //力量
                    equipA.setStr(equip.getStr() + equipA.getStr());
                    //敏捷
                    equipA.setDex(equip.getDex() + equipA.getDex());
                    //智力
                    equipA.setInt(equip.getInt() + equipA.getInt());
                    //運氣
                    equipA.setLuk(equip.getLuk() + equipA.getLuk());
                    //HP
                    equipA.setMaxHp(equip.getMaxHp() + equipA.getMaxHp());
                    //MP
                    equipA.setMaxMp(equip.getMaxMp() + equipA.getMaxMp());
                    //攻擊
                    equipA.setPad(equip.getPad() + equipA.getPad());
                    //魔法攻擊
                    equipA.setMad(equip.getMad() + equipA.getMad());
                    //BOSS傷害
                    equipA.setBossDamageR(equip.getBossDamageR());
                    //無視
                    equipA.setIgnorePDR(equip.getIgnorePDR());
                    //總傷
                    equipA.setDamR(equip.getDamR());
                    //砸卷
                    equipA.setRUC(equip.getRUC());
                    //捲軸
                    equipA.setCUC(equip.getCUC());
                    //黃金錘
                    equipA.setIUC(equip.getIUC());
                    //白金錘
                    equipA.setIUC2(equip.getIUC2());
                    //潛能等級
                    equipA.setGrade(equip.getGrade());
                    //潛能1
                    equipA.setOption(1, equip.getOption(1, false), false);
                    //潛能2
                    equipA.setOption(2, equip.getOption(2, false), false);
                    //潛能3
                    equipA.setOption(3, equip.getOption(3, false), false);
                    //潛能4
                    equipA.setOption(1, equip.getOption(1, true), true);
                    //潛能5
                    equipA.setOption(2, equip.getOption(2, true), true);
                    //潛能6
                    equipA.setOption(3, equip.getOption(3, true), true);
                    //靈魂技能
                    equipA.setSoulOption(equip.getSoulOption());
                    //靈魂技能
                    equipA.setSoulSocketID(equip.getSoulSocketID());
                    //靈魂技能
                    equipA.setSoulOptionID(equip.getSoulOptionID());
                    //所有屬性
                    equipA.setStatR(equip.getStatR());
                    //未知屬性
                    equipA.setDurability(equip.getDurability());
                    var str = equipA.getTitle();
                    var get = str.substring(3, 4);
                    var qhcs = Number(get) + 1;
                    equipA.setTitle("強化+" + qhcs);
                    player.updateItem(2, equipA);
                    npc.broadcastPlayerNotice(16, "【創世中心】 : 玩家 [" + player.getName() + "] 繼承成功");
                    for (var key in ItemSl) {
                        player.loseItem(ItemSl[key][0], ItemSl[key][1]);
                    }
                    player.gainItem(equip.getDataId(), 1);
                    player.loseInvSlot(1, 1);
                    npc.say("繼承成功");
                } else {
                    npc.say("好吧，下次再來~");
                }
            } else {
                npc.say("已經繼承過的裝備無法繼續繼承");
            }
        } else {
            npc.say("請檢查裝備欄第一/第二格位置是否放入正確裝備");
        }
    }
}
function getMinAndMax(minVal, maxVal) { //隨機 最大值 最小值
    return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}
