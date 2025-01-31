//強化制作 by dgms
var a1 = "#fItem/Cash/0501.img/05010057/effect/default/3#"; //撒花
var a2 = "#fItem/Cash/0501.img/05010143/effect/default/0#"; //皇冠左
var a3 = "#fItem/Cash/0501.img/05010143/effect/default/4#"; //皇冠右
var a4 = "#fItem/Cash/0501.img/05010150/effect/default/2#"; //嘲笑候
var a5 = "#fItem/Cash/0501.img/05010180/effect/default/0#"; //彩虹书
var a6 = "#fItem/Cash/0501.img/05010129/effect/default/0#"; //初音3
var a7 = "#fEffect/ItemEff.img/1005163/effect/default/0#" //中音符
var a8 = "#fEffect/ItemEff.img/1070069/effect/walk1/0#" //彩虹小云0-7
var a88 = "#fEffect/ItemEff.img/1070069/effect/walk1/4#" //彩虹小云0-7
var a888 = "#fEffect/ItemEff.img/1070069/effect/walk1/6#" //彩虹小云0-7
var a9 = "#fEffect/ItemEff.img/1073056/effect/walk1/0#" //好看的花0-7
var a10 = "#fEffect/ItemEff.img/1102420/effect/default/0#" //彩虹中星星0-5
var a11 = "#fEffect/ItemEff.img/1102919/effect/default/0#" //小黄鸭车0-7
var a12 = "#fEffect/ItemEff.img/1102930/effect/default/0#" //雨点彩虹0-15
var a112 = "#fEffect/ItemEff.img/1102930/effect/default/4#" //雨点彩虹0-15
var a122 = "#fEffect/ItemEff.img/1102930/effect/default/12#" //雨点彩虹0-15
var a1222 = "#fEffect/ItemEff.img/1102930/effect/default/13#" //雨点彩虹0-15
var a13 = "#fEffect/ItemEff.img/1102987/effect/default/0#" //卡片绿水蘑菇
var a14 = "#fEffect/ItemEff.img/1103035/effect/default/0#" //彩虹音符长
var a15 = "#fEffect/ItemEff.img/1103094/effect/default/0#" //长花
var a16 = "#fEffect/ItemEff.img/1103440/effect/default/0#" //石头怪
var a17 = "#fEffect/ItemEff.img/1112013/1/5#" //爱心5-9
var a18 = "#fEffect/ItemEff.img/1082692/effect/default/6#" //彩虹熊14-21
var a19 = "#fEffect/ItemEff.img/1053230/effect/default/2#" //爱心兔长
var a20 = "#fEffect/ItemEff.img/1005102/effect/default/3#" //粉色PB长3-5
var a21 = "#fEffect/ItemEff.img/1005103/effect/default/3#" //绿水灵长3-5
var a22 = "#fEffect/ItemEff.img/1103083/effect/default/0#" //中蝴蝶长3-5
var a23 = "#fEffect/ItemEff.img/1005254/effect/default/4#" //蓝色中小星星
var a25 = "#fEffect/ItemEff.img/1005353/effect/default/0#" //绿芽叶中小
var a26 = "#fEffect/ItemEff.img/1073379/effect/default/0#" //幽灵云长
var a27 = "#fEffect/ItemEff.img/1073435/effect/default/3#" //彩虹细云0-3
var a28 = "#fEffect/ItemEff.img/1005692/effect/default/7#" //彩虹星星爱心1005692-1005697
var a29 = "#fEffect/ItemEff.img/1073498/effect/default/7#" //彩虹爱心蝴蝶1073498-1073503
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a33 = "#fEffect/ItemEff.img/1005163/effect/default/0#" //中音符
var a34 = "#fItem/Cash/0501.img/05010056/effect/walk1/5#"; //小草
var a35 = "#fItem/Cash/0501.img/05010056/effect/walk1/6#"; //草
var a36 = "#fItem/Cash/0501.img/05010056/effect/walk1/7#"; //草

var c1 = "#fEffect/ItemEff.img/1005765/effect/default/0#" //小图标
var c2 = "#fEffect/ItemEff.img/1112001/0/0#" //小图标
var c3 = "#fEffect/ItemEff.img/1112002/0/0#" //小图标
var c4 = "#fEffect/ItemEff.img/1032328/effect/default/0#" //小图标
var c5 = "#fEffect/ItemEff.img/1032328/effect/backDefault/0#" //小图标
var c6 = "#fEffect/ItemEff.img/1032329/effect/default/0#" //小图标
var c7 = "#fEffect/ItemEff.img/1032329/effect/backDefault/0#" //小图标
var c8 = "#fEffect/ItemEff.img/1112006/0/1#" //小图标
var c9 = "#fEffect/ItemEff.img/1112806/0/0#" //小图标
var c10 = "#fEffect/ItemEff.img/1112807/0/0#" //小图标
var c11 = "#fEffect/ItemEff.img/1112809/0/0#" //小图标
var c12 = "#fEffect/ItemEff.img/1005799/effect/backDefault/0#" //小图标
var c13 = "#fEffect/ItemEff.img/1112024/0/5#" //小图标

var ItemList = Array(

    1);

var ItemSl = Array(
    Array(2430453, 1),);
var randList = Array(
    Math.floor(66), //wushi
    Math.floor(66), //wushi
    Math.floor(66), //wushi
    Math.floor(66), //wushi
    Math.floor(66), //wushi
    Math.floor(66), //wushi
    Math.floor(500), //wushi
    Math.floor(500), //wushi
    Math.floor(5), //wushi
    Math.floor(5), //wushi
    Math.floor(5), //wushi
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
equip = player.getInventorySlot(1, 1);
if (equip == null) {
    npc.askMenuS("只能對300等級獎勵勛章使用！");
}
//avail += "" + a8 + "  " + a888 + "" + a888 + "" + a888 + " " + a88 + "";
//avail += "#r說明:#b需要的材料如下:\r\n";
avail += "#fs21##e#b將#v1143012#放到第一格\r\n";

for (var i = 0; i < ItemSl.length; i++) {
    avail += "#v" + ItemSl[i][0] + "# 需要 [ #r" + ItemSl[i][1] + " #b] \r\n";
}
avail += "為勛章增加#b全屬性#r66 #b 物攻#r66#b  魔攻#r66#b HPmp #r500#b\r\n";
avail += "為勛章增加#bB傷 #r5% #b 無視 #r5%#b  總傷 #r5%#b #b\r\n";
avail += "\t\t\t\t#r#L0#點我增加#l#k\r\n\r\n#k";
//avail += "" + a8 + "  " + a888 + "" + a888 + "" + a888 + " " + a88 + "";
let selection = npc.askMenuA(avail);
if (selection == 0) {
    equip = player.getInventorySlot(1, 1);
    if (equip.getDataId() != 1143012) {
        npc.say("裝備欄第一格不為勛章#v1143012#");
    } else if (equip.getMaxHp() >= 32000) {
        npc.say("裝備Hp溢出無法繼續強化");
    } else if (equip.getMaxMp() >= 32000) {
        npc.say("裝備Mp溢出無法繼續強化");
    } else if (!player.hasItem(ItemSl[0][0], ItemSl[0][1])) {
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
                    times = parseInt(str);
                } else {
                    times == 0;
                }
            }
            str = 0;
            if (str < 可強化次數) {
                var info = "#b當前裝備：#v" + equip.getDataId() + "##t" + equip.getDataId() + "#\r\n附魔屬性：\r\n";
                //保存更新記錄
                info += "#b附魔力量:#k#g+ #r" + randList[0];
                info += "\r\n#b附魔敏捷:#k#g+ #r" + randList[1];
                info += "\r\n#b附魔智力:#k#g+ #r" + randList[2];
                info += "\r\n#b附魔運氣:#k#g+ #r" + randList[3];
                info += "\r\n#b附魔攻擊力:#k#g+ #r" + randList[4];
                info += "\r\n#b附魔魔法力:#k#g+ #r" + randList[5];
                info += "\r\n#b附魔Hp:#k#g+ #r" + randList[6];
                info += "\r\n#b附魔Mp:#k#g+ #r" + randList[7];
                info += "\r\n#b附魔B傷:#k#g+ #r" + randList[8];
                info += "\r\n#b附魔無視:#k#g+ #r" + randList[9];
                info += "\r\n#b附魔總傷:#k#g+ #r" + randList[10];
                info += "\r\n#b#fs14#確認無誤請點[#r 是#b ]  點擊[ #r否#b ]可以退出本次強化\r\n"
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
                    equip.setStr(STR + randList[0]);
                    //敏捷
                    equip.setDex(DEX + randList[1]);
                    //智力
                    equip.setInt(INT + randList[2]);
                    //運氣
                    equip.setLuk(LUK + randList[3]);
                    //攻擊
                    equip.setPad(PAD + randList[4]);
                    //魔法攻擊
                    equip.setMad(MAD + randList[5]);
                    //hp
                    equip.setMaxHp(equip.getMaxHp() + randList[6]);
                    //mp
                    equip.setMaxMp(equip.getMaxMp() + randList[7]);
                    //BOSS傷害
                    equip.setBossDamageR(equip.getBossDamageR() + randList[8]);
                    //無視
                    equip.setIgnorePDR(equip.getIgnorePDR() + randList[9]);
                    //總傷
                    equip.setDamR(equip.getDamR() + randList[10])
					
                    player.updateItem(1, equip);
                    for (var key in ItemSl) {
                        player.loseItem(ItemSl[key][0], ItemSl[key][1]);
                    }
                    //npc.broadcastPlayerNotice(37, "大佬玩家  [ " + player.getName() + " ]    成功將勛章附魔");
                    //npc.broadcastPlayerNotice(16,"【裝備附魔】玩家 [" + player.getName() + "] :強化成功");
                    npc.say("強化成功");
                    player.runScript("勛章附魔");
                } else {
                    npc.say("你已放棄本次附魔");
                }
            } else {
                npc.say("強化次數已經到達上限,目前強化只開放到" + 可強化次數 + "次");
            }
        } else {
            npc.say("請檢查裝備欄第一個位置是否放入正確裝備");
        }
    }
}
