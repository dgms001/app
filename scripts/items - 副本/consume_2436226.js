/* 功能：高級檢索工具 */

var txt;
var magnifier = "#fCharacter/Weapon/01702403.img/info/iconRaw#";//放大鏡
var n0 = "#fUI/Login.img/RaceSelect_new/deny_login/number/0#";//數字0
var n1 = "#fUI/Login.img/RaceSelect_new/deny_login/number/1#";//數字1
var n2 = "#fUI/Login.img/RaceSelect_new/deny_login/number/2#";//數字2
var n3 = "#fUI/Login.img/RaceSelect_new/deny_login/number/3#";//數字3
var n4 = "#fUI/Login.img/RaceSelect_new/deny_login/number/4#";//數字4
var n5 = "#fUI/Login.img/RaceSelect_new/deny_login/number/5#";//數字5
var n6 = "#fUI/Login.img/RaceSelect_new/deny_login/number/6#";//數字6
var n7 = "#fUI/Login.img/RaceSelect_new/deny_login/number/7#";//數字7
var n8 = "#fUI/Login.img/RaceSelect_new/deny_login/number/8#";//數字8
var n9 = "#fUI/Login.img/RaceSelect_new/deny_login/number/9#";//數字9
var new1 = "#fUI/Login.img/RaceSelect_new/new/0#";//NEW
var GC1 = "#fEffect/CharacterEff/1005267/4/0#";//"+z+"//小選項用
var GC2 = "#fEffect/CharacterEff/1050312/0/0#";//"+z+"//最上面的亮粉
var RS1 = "#fEffect/ItemEff/1004985/effect/jump/0#"; //石靈-1
var RS2 = "#fEffect/ItemEff/1004985/effect/alert/0#"; //石靈-2
var RS3 = "#fEffect/ItemEff/1004985/effect/proneStab/2#"; //石靈-3

    if( player.isGm() == false ){
        npc.askMenuA("\t" + GC2 + GC2 + GC2 + GC2 + "\r\n" + "#fs26##r#e\r\n\t\t\t  【警告】\r\n\r\n\t\t本功能僅限管理員使用。\r\n\r\n#r"+ RS1 + RS2 + RS3 + RS1 + RS2 + RS1 + RS3 + RS2 + RS1,true);
    }

    txt = "\t" + GC2 + GC2 + GC2 + GC2 + "\r\n";
    txt += "\t\t\t\t#fs26##r#e" + magnifier + " 高級檢索工具 " + magnifier + "\r\n\r\n";
    txt += "\t\t #fs20##fc0xFF1e90ff##e" + new1 + " 當前資料版本 - " + n2 + " " + n3 + " " + n7 + "\r\n";
    txt += "#fs14##b#e#L0#" + GC1 + "道具檢索#l#L1#" + GC1 + "地圖檢索#l#L2#" + GC1 + "怪物檢索#l#L3#" + GC1 + "NPC檢索#l#L4#" + GC1 + "掉落檢索#l\r\n";
	txt += "\r\n #r" + RS1 + RS2 + RS3 + RS1 + RS2 + RS1 + RS3 + RS2 + RS1;
    //txt += "\r\n#L1#NPC#l";
    var selection = npc.askMenuA(txt,true);

        switch (selection) {
            case 0:
                player.runScript("道具檢索");
                break;
            case 1:
                player.runScript("地圖檢索");
                //npc.say("你好，該功能目前暫未開放！");
                break;
            case 2:
                player.runScript("怪物檢索");
                //npc.say("你好，該功能目前暫未開放！");
                break;
            case 3:
                player.runScript("NPC檢索");
                //npc.say("你好，該功能目前暫未開放！");
                break;
            case 4:
				player.runScript("掉落查詢");
                //npc.say("你好，該功能目前暫未開放！");
                break;
        }
