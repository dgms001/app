//強化制作 by dgms
var ax1 = "#fMap/MapHelper.img/minimap/match#";
var ax2 = "#fEffect/CharacterEff/1042176/2/0#";
var hd = "#fMap/MapHelper.img/weather/knitsWithWarmWinter/8#";
var zb = "#fMap/MapHelper.img/weather/birthday/2#";
var yb = "#fMap/MapHelper.img/weather/birthday/5#";
var a3 = "#fUI/StarCityUI.img/Screen/VIPMessage/WorldinfoNO/16/0#"
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var ItemList = Array(
    1002800,
    1052470,
    1072368,
    1082245,
    1102174,
    1022089,
    1112915

);
var ItemList1 = Array(
    1712001,
    1712002,
    1712003

);

var ItemSl = Array(
    Array(4000540, 100),
    Array(4032053, 500),
    Array(4021032, 100),
);
var randList = Array(
    Math.floor(50), //str
    Math.floor(50), //dex
    Math.floor(50), //inte
    Math.floor(50), //luk
    Math.floor(50), //pad
    Math.floor(50), //mad
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
var times = 0;
var 可強化次數 = 1;

var avail = "";
avail += "#b#fs14#";
equip1 = player.getInventorySlot(1, 1);
if (equip1 == null) {
    npc.askMenuS("請在裝備欄第一個位置放上裝備！");

} else {
    equip = player.getInventorySlot(1, 1);
    var itemid = equip.getDataId();
    avail += "Welcome to the special trip         " + a38 + "\r\n";

    avail += "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n";

    //avail += "圓夢冒險家你好,相信你遇到傷害無法上升的困境\r\n";
    //avail += "這邊我能破例去提升你的裝備屬性,\r\n";
    //avail += "代價則是裝備的壽命...你...想好了嗎?\r\n\r\n";
    avail += "當前剩餘燃燒次數:" + (7 - player.getPQLog("新手燃燒")) + "次\r\n";
    avail += "#b可燃燒的裝備如下:\r\n";
    for (var i = 0; i < ItemList.length; i++) {
        avail += "#b#v" + ItemList[i] + "##k";
    }
    avail += "\r\n";
    //avail += "#r#L0#四屬性雙攻+400 壽命3天 含淚強化#l\r\n";
    avail += "#L1##b燃燒後獲得[#r四屬性雙攻+200#b] 限時7天#l\r\n";
    avail += "#L2##b燃燒後獲得[#r四屬性雙攻+150#b] 限時14天#l\r\n";
    avail += "#L3##b燃燒後獲得[#rARC燃燒等級10#b] 限時2天\r\n";



    avail += "";
    avail += "";
    avail += "";
    avail += "";
    //avail += "\r\n\t\t#L0##r含淚強化[#v" + itemid + "#]#l\r\n";
    if (equip.getTitle() == "") {
        equip.setTitle("強化+" + 0);
    }


    player.showProgressMessageFont("將想強化的裝備放在背包 裝備欄位第一格", 3, 30, 4, 10 * 1000);
    let selection = npc.askMenu(avail, 9010046);


    if (selection == 0) {
        equip = player.getInventorySlot(1, 1);
        //for (var i = 0; i < ItemSl.length; i++) { {
        if (player.getPQLog("新手燃燒") > 7) {
            npc.say("#fs18##b#e無法使用本功能,角色已燃燒最大值！");
        } else if (equip == null) {
            npc.say("#fs18##b#e需要提升的裝備,請放置裝備欄位第一格！");
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
                    if (str.length > 0) {
                        str = str.substring(3, 4);
                        times = parseInt(str);
                    } else {

                        times == 0;
                    }
                }
                str = str.substring(3, 4);
                if (str < 可強化次數) {
                    var info = "#fs16#裝備：#v" + equip.getDataId() + "##t" + equip.getDataId() + "#\r\n";
                    info += "";
                    info += "";
                    info += "";
                    info += "#r確定要燃燒裝備壽命,提升屬性嗎?\r\n"

                    let sel = npc.askYesNoSNoEsc(info);
                    if (sel == 1) {
                        time = 1000 * 60 * 60 * 24 * 3;
                        STR = equip.getStr();
                        DEX = equip.getDex();
                        INT = equip.getInt();
                        LUK = equip.getLuk();
                        PAD = equip.getPad(); //物理傷害
                        MAD = equip.getMad(); //魔法傷害
                        HP = equip.getMaxHp();
                        MP = equip.getMaxMp();
                        //替換掉屬性
                        //力量
                        equip.setStr(STR + 400);
                        //敏捷
                        equip.setDex(DEX + 400);
                        //智力
                        equip.setInt(INT + 400);
                        //運氣
                        equip.setLuk(LUK + 400);
                        //攻擊
                        equip.setPad(PAD + 400);
                        //魔法攻擊
                        equip.setMad(MAD + 400);
                        equip.setMaxHp(HP + 20000);
                        equip.setMaxMp(MP + 10000);
                        equip.setAttribute(1);

                        equip.setExpiration(new Date().getTime() + time);
                        var str = equip.getTitle();
                        var get = str.substring(3, 4);
                        var qhcs = Number(get) + 1;
                        equip.setTitle("強化+" + qhcs);
                        player.updateItem(1, equip);
                        //npc.broadcastPlayerNotice(16,"【裝備燃燒】[ " + player.getName() + " ] :新手裝備壽命3天,屬性提升400點");
                        player.addPQLog("新手燃燒", 1, 999);


                        npc.say("#fs18##b#e提升成功");
                    } else {
                        npc.say("#fs18##b#e好吧，下次再來~");
                    }
                } else {
                    npc.say("#fs18##b#e借命提升只能借一次...!");
                }
            } else {
                npc.say("#fs18##b#e裝備放錯了~!");
            }
        }
        //}
        //}
    } else if (selection == 1) {
        equip = player.getInventorySlot(1, 1);
        //for (var i = 0; i < ItemSl.length; i++) { {
        if (player.getPQLog("新手燃燒") > 7) {
            npc.say("#fs18##b#e無法使用本功能,角色已燃燒最大值！");
        } else if (equip == null) {
            npc.say("#fs18##b#e需要提升的裝備,請放置裝備欄位第一格！");
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
                    if (str.length > 0) {
                        str = str.substring(3, 4);
                        times = parseInt(str);
                    } else {

                        times == 0;
                    }
                }
                str = str.substring(3, 4);
                if (str < 可強化次數) {
                    var info = "#fs16#裝備：#v" + equip.getDataId() + "##t" + equip.getDataId() + "#\r\n";
                    info += "";
                    info += "";
                    info += "";
                    info += "#r確定要燃燒裝備壽命,提升屬性嗎?\r\n"

                    let sel = npc.askYesNoSNoEsc(info);
                    if (sel == 1) {
                        time = 1000 * 60 * 60 * 24 * 7;
                        STR = equip.getStr();
                        DEX = equip.getDex();
                        INT = equip.getInt();
                        LUK = equip.getLuk();
                        PAD = equip.getPad(); //物理傷害
                        MAD = equip.getMad(); //魔法傷害
                        HP = equip.getMaxHp();
                        MP = equip.getMaxMp();
                        //替換掉屬性
                        //力量
                        equip.setStr(STR + 200);
                        //敏捷
                        equip.setDex(DEX + 200);
                        //智力
                        equip.setInt(INT + 200);
                        //運氣
                        equip.setLuk(LUK + 200);
                        //攻擊
                        equip.setPad(PAD + 200);
                        //魔法攻擊
                        equip.setMad(MAD + 200);
                        equip.setMaxHp(HP + 15000);
                        equip.setMaxMp(MP + 7500);
                        equip.setAttribute(1);
                        equip.setExpiration(new Date().getTime() + time);
                        var str = equip.getTitle();
                        var get = str.substring(3, 4);
                        var qhcs = Number(get) + 1;
                        equip.setTitle("強化+" + qhcs);
                        player.updateItem(1, equip);
                        //npc.broadcastPlayerNotice(16,"【裝備燃燒】[ " + player.getName() + " ] :新手裝備壽命7天,屬性提升200點");
                        player.addPQLog("新手燃燒", 1, 999);

                        npc.say("#fs18##b#e提升成功");
                    } else {
                        npc.say("#fs18##b#e好吧，下次再來~");
                    }
                } else {
                    npc.say("#fs18##b#e借命提升只能借一次...!");
                }
            } else {
                npc.say("#fs18##b#e裝備放錯了~!");
            }
        }
        //}
        //}
    } else if (selection == 2) {
        equip = player.getInventorySlot(1, 1);
        //for (var i = 0; i < ItemSl.length; i++) { {
        if (player.getPQLog("新手燃燒") > 7) {
            npc.say("#fs18##b#e無法使用本功能,角色已燃燒最大值！");
        } else if (equip == null) {
            npc.say("#fs18##b#e需要提升的裝備,請放置裝備欄位第一格！");
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
                    if (str.length > 0) {
                        str = str.substring(3, 4);
                        times = parseInt(str);
                    } else {

                        times == 0;
                    }
                }
                str = str.substring(3, 4);
                if (str < 可強化次數) {
                    var info = "#fs16#裝備：#v" + equip.getDataId() + "##t" + equip.getDataId() + "#\r\n";
                    info += "";
                    info += "";
                    info += "";
                    info += "#r確定要燃燒裝備壽命,提升屬性嗎?\r\n"

                    let sel = npc.askYesNoSNoEsc(info);
                    if (sel == 1) {
                        time = 1000 * 60 * 60 * 24 * 14;
                        STR = equip.getStr();
                        DEX = equip.getDex();
                        INT = equip.getInt();
                        LUK = equip.getLuk();
                        PAD = equip.getPad(); //物理傷害
                        MAD = equip.getMad(); //魔法傷害.
                        HP = equip.getMaxHp();
                        MP = equip.getMaxMp();
                        //替換掉屬性
                        //力量
                        equip.setStr(STR + 150);
                        //敏捷
                        equip.setDex(DEX + 150);
                        //智力
                        equip.setInt(INT + 150);
                        //運氣
                        equip.setLuk(LUK + 150);
                        //攻擊
                        equip.setPad(PAD + 150);
                        //魔法攻擊
                        equip.setMad(MAD + 150);
                        equip.setMaxHp(HP + 10000);
                        equip.setMaxMp(MP + 5000);
                        equip.setAttribute(1);
                        equip.setExpiration(new Date().getTime() + time);
                        var str = equip.getTitle();
                        var get = str.substring(3, 4);
                        var qhcs = Number(get) + 1;
                        equip.setTitle("強化+" + qhcs);
                        player.updateItem(1, equip);
                        //npc.broadcastPlayerNotice(16,"【裝備燃燒】[ " + player.getName() + " ] :新手裝備壽命剩餘14天,屬性提升150點");
                        player.addPQLog("新手燃燒", 1, 999);

                        npc.say("#fs18##b#e提升成功");
                    } else {
                        npc.say("#fs18##b#e好吧，下次再來~");
                    }
                } else {
                    npc.say("#fs18##b#e借命提升只能借一次...!");
                }
            } else {
                npc.say("#fs18##b#e裝備放錯了~!");
            }
        }
        //}
        //}
    } else if (selection == 3) {
        txt = "";
        txt += "#fs14##b新人可找我燃燒ARC\r\n";
        txt += "ARC等級提升至10,壽命會剩下2天\r\n";
        txt += "燃燒完畢,要記得切換頻道,刷新數據庫!\r\n";
        txt += "#r切記:1隻角色只能燃燒三顆!!\r\n";
        txt += "#r不要燒同一顆,不然不補償\r\n";
        txt += "#b只能使用:[#v1712001##v1712002##v1712003#]\r\n";
        txt += "#L1#點我燃燒#l\r\n";

        let selection1 = npc.askMenuS(txt, true);
        if (selection1 == 1) {
            equip = player.getInventorySlot(1, 1);
            //for (var i = 0; i < ItemSl.length; i++) { {
            if (equip == null) {
                npc.say("#fs18##b#e需要提升的裝備,請放置裝備欄位第一格！");
            } else if (player.getPQLog("祕法符文燃燒") >= 3) {
                npc.say("#fs18##b#e一個角色只能燃燒3次祕法符文!");
            } else {
                var itemid = equip.getDataId();
                var flag = 0;
                for (var i = 0; i < ItemList1.length; i++) {
                    if (itemid == ItemList1[i]) {
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
                        var info = "#fs16#裝備：#v" + equip.getDataId() + "##t" + equip.getDataId() + "#\r\n";
                        info += "";
                        info += "";
                        info += "";
                        info += "#r確定要燃燒裝備壽命,提升屬性嗎?\r\n"

                        let sel = npc.askYesNoSNoEsc(info);
                        if (sel == 1) {
                            time = 1000 * 60 * 60 * 24 * 2;

                            equip.setExpiration(new Date().getTime() + time);
                            var str = equip.getTitle();
                            var get = str.substring(3, 4);
                            var qhcs = Number(get) + 1;
                            equip.setTitle("強化+" + qhcs);
                            equip.setArcLevel(10);
                            player.updateItem(1, equip);
                            player.addPQLog("祕法符文燃燒", 1, 1000);
                            //npc.broadcastPlayerNotice(16,"【ARC燃燒】玩家[" + player.getName() + "]  :祕法符文壽命剩餘2天,等級提升至10");

                            npc.say("#fs18##b#e提升成功");
                        } else {
                            npc.say("#fs18##b#e好吧，下次再來~");
                        }
                    } else {
                        npc.say("#fs18##b#e借命提升只能借一次...!");
                    }
                } else {
                    npc.say("#fs18##b#e裝備放錯了~!");
                }
            }
        }


    }

}
function getCharInfo() {
    //var sql = "SELECT accountid accounts_id,world FROM characters where id = " + player.getId() + "";
    var sql = "SELECT id FROM inventoryitems WHERE Owner_id = '" + player.getId() + "' AND (type = 1 AND position = 1);";
    var resultList = player.customSqlResult(sql);
    var charInfo = {};
    for (var i = 0; i < resultList.size(); i++) {
        var result = resultList.get(i);
        if (result == null) {
            break;
        }
        charInfo.id = result.get("id");
        //charInfo.world = result.get("world");
    }
    return charInfo;
}

function gainItemPeriod(itemid, quantity, time) {
    time = 0;
    if (itemid >= 3700000 && itemid <= 3800000) { //符合範圍
        //if(time < 1000 && time > 0){
        time += 1000 * 60 * 60 * 24;    //定義時間1000*秒*分鐘*時
        //}
        for (var i = 0; i < quantity; i++) {
            let newItem = player.makeItemWithId(itemid);
            if (time != 0) {
                newItem.setExpiration(new Date().getTime() + time);
            }
            player.gainItem(newItem);
            //npc.sayS("獲得時限道具");
        }
    } else {
        let newItem = player.makeItemWithId(itemid);
        player.gainItem(newItem);
        //npc.sayS("不符合");
    }
}
