/* 圓夢谷 TMS 237 萬能菜單 */
var status = -1
var txt;
/*------------------------- 表情符號 -------------------------*/
var SR1 = "#fUI/SoulUI.img/DungeonEffect/2350012/2#"; //最上面的
var SR2 = "#fUI/SoulUI.img/DungeonEffect/2350012/4#"; //最上面的
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/5/icon#"; //最上面的
var SR4 = "#fUI/SoulUI.img/DungeonEffect/2350012/3#"; //最上面的
var SR5 = "#fEffect/EffectPL.img/Beautyroid/connect_end/0"; //區隔條
var SR6 = "#fEffect/EventEffect.img/typingDefense/balloonIcon/blind/0#"; //最上面的星星-6
var SR7 = "#fEffect/CharacterEff/1050334/1/2#"; //最上面的星星-7
var SR8 = "#fEffect/CharacterEff/1050334/1/3#"; //最上面的星星-8
var SR9 = "#fEffect/CharacterEff/1050334/2/0#"; //最上面的星星-9
var SR10 = "#fEffect/CharacterEff/1050334/2/1#"; //最上面的星星-10
var SR11 = "#fEffect/CharacterEff/1050334/2/2#"; //最上面的星星-11
var SR12 = "#fEffect/CharacterEff/1050334/2/3#"; //最上面的星星-12
var GC2 = "#fEffect/CharacterEff/1005267/4/0#"; //"+z+"//小選項用
var XD0 = "#fEffect/CharacterEff/1051366/0/0#"
var GC1 = "#fEffect/CharacterEff/1082700/2/0#";
var GC3 = "#fEffect/CharacterEff/1112924/0/0#"; //"+z+"//小選項用

//var STAR1 = "#fEffect/CharacterEff/forceAtom/29/atom/3/endEff/0#"; //大星星-1
//var STAR2 = "#fEffect/CharacterEff/forceAtom/29/atom/2/endEff/1#"; //大星星-2
//var STAR3 = "#fEffect/CharacterEff/forceAtom/29/atom/3/endEff/2#"; //大星星-3
//var STAR4 = "#fEffect/CharacterEff/forceAtom/29/atom/2/endEff/3#"; //大星星-4
//var GC1 = "#fEffect/CharacterEff/1050312/0/0#"; //最上面的亮粉
//var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#"; //紅心桃心
//var Rainbow = "#fEffect/ItemEff/1070069/effect/walk1/2#" //彩虹
var gmwarp = Array(
    Array(865000002, "#r【小小精靈GM】#b戴艾拉商團辦公室"),
    Array(103041004, "#r【糖果GM】#b頂樓套房"));
var patiencewarp_gm = Array(
    Array(100000202, "#r【弓箭手村】#b寵物公園"), //單圖
    Array(220000006, "#r【玩具城】#b玩具城寵物散步路"), //單圖
    Array(280020000, "#r【阿杜比斯的任務Ⅱ】#b火山的氣息<第1階段>"), //起點
    Array(280020001, "#r【阿杜比斯的任務Ⅱ】#b火山的氣息<第2階段>"), //終點
    Array(910530000, "#r【沉睡森林】#b第1階段"), //起點
    Array(910530001, "#r【沉睡森林】#b第2階段"), //終點
    Array(910530100, "#r【沉睡森林】#b第3階段"), //起點
    Array(910530101, "#r【沉睡森林】#b第4階段"), //終點
    Array(910530200, "#r【沉睡森林】#b第5階段"), //起點
    Array(910530201, "#r【沉睡森林】#b第6階段"), //中點
    Array(910530202, "#r【沉睡森林】#b第7階段"), //終點
    Array(910130000, "#r【忍耐的森林】#b第1階段"), //起點
    Array(910130001, "#r【忍耐的森林】#b第2階段"), //終點
    Array(910130100, "#r【忍耐的森林】#b第3階段"), //起點
    Array(910130101, "#r【忍耐的森林】#b第4階段"), //中點
    Array(910130102, "#r【忍耐的森林】#b第5階段"), //終點
    Array(301050200, "#r【小遊戲】#b攀上城牆"), //單圖
    Array(301050300, "#r【小遊戲】#b通過陷阱") //單圖
);

/*------------------------------------------------------------*/
var GC2 = "#fEffect/CharacterEff/1022223/2/0#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1112924/0/0#"; //"+z+"//小選項用
var GC1 = "#fEffect/CharacterEff/1082700/2/0#";
var XD0 = "#fEffect/CharacterEff/1051366/0/0#";
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/5/icon#"; //最上面的

txt = "\t\t   " + SR3 + "#fs32##fc0xFF00caf2##e《萬能傳送》" + SR3 + "\r\n";
txt += "" + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + XD0 + "\r\n";
txt += "#e#fs17##fc0xFFFFF300#";
//txt += "    #L0#傳送大廳#l  #L1#傳送城鎮#l  #L2#練等地圖#l\r\n";

txt += "  #L3#Boss傳送#l  #L0#傳送大廳#l  #L1#傳送城鎮#l  #L2#練等地圖#l\r\n";
txt += "  #L5#強化中心#l  #L7#轉蛋屋  #l  #L6#副本中心#l\r\n";
txt += "";
txt += "";
txt += "";
txt += "\t\t\t\t  #fs20##r#L50#【返回】#l\r\n\r\n";

if (player.isGm()) {

    txt += "#L5#" + GC1 + "#b組隊任務#k#l     #L6#" + GC1 + "#b武陵道場#k#l  #L4#任務中心#l\r\n";
    txt += "#L10#" + GC1 + "#b工作場所#k#l     #L11#" + GC1 + "#bGM休息室#k#l     #L12#" + GC1 + "#b忍耐地圖#k#l\r\n";
    txt += "#L13#" + GC1 + "#b自由市場#k#l     #L14#" + GC1 + "#b怪物公園#k#l     #L15#" + GC1 + "#b祭司之林#k#l\r\n";
    txt += "#L16#" + GC1 + "#b測試用#k#l";
}

let selection = npc.askMenuA(txt, true);

switch (selection) {

    case 0:
        var event = npc.getEvent("paodian");
        if (event != null) {
            var players = event.getVariable("players");
            var playersName = "";
            var playerL = players.length;
            for (var i = 0; i < playerL; i++) {
                try {
                    playersName += players[i].getId() + "." + players[i].getName() + "  "
                } catch (e) {
                    players.splice(i, 1);
                }
            }
        }
        var index = -1;
        var playersS = event.getVariable("players");
        for (var i = 0; i < players.length; i++) {
            if (players[i].getId() == player.getId()) {
                index = i;
                //break;
            }
        }
        if (index == -1) {
            players.push(player);
            player.changeMap(104000000);
            npc.say("加入泡點");
        } else {
            player.changeMap(104000000);
            npc.say("已經在泡點了")
        }

        break;
    case 1:
        player.runScript("傳送城鎮");
        break;
    case 2:
        player.runScript("練等地圖");
        break;
    case 3:
        player.runScript("BOSS傳送2");
        break;
    case 4:
        player.changeMap(910000007);
        break;
    case 5:
        player.changeMap(101050000);//101050000
        break;
    case 6:
        //player.changeMap(800021112);
        player.runScript("副本中心");
        //npc.say("#fs17##b#e建設中!!");
        break;
    case 7:
        player.changeMap(749050400);
        break;
    case 8:
        player.changeMap(130000101);
        break;
    case 9:
        player.changeMap(130000101);
        break;
    case 10:
        player.changeMap(180000000);
        break;
    case 11:
        selectionStr = "";
        for (var i = 0; i < gmwarp.length; i++) {
            selectionStr += "#fs17##L" + i + "#" + GC1 + gmwarp[i][1] + "#l\r\n";
        }
        selection = npc.askMenuA(selectionStr, true);
        player.changeMap(gmwarp[selection][0], 0);
        break;
    case 12:
        selectionStr = "請選擇您的目的地: #b\r\n";
        for (var i = 0; i < patiencewarp_gm.length; i++) {
            selectionStr += "#fs17##L" + i + "#" + GC3 + patiencewarp_gm[i][1] + "#l\r\n";
        }
        selection = npc.askMenuA(selectionStr, true);
        player.changeMap(patiencewarp_gm[selection][0], 0);
        break;
    case 13:
        player.changeMap(104000000);
        break;
    case 14:
        player.changeMap(951000000);
        break;
    case 15:
        player.changeMap(240010501);
        break;
    case 16:
        player.runScript("gm進場");
        break;
    case 50:
        player.runScript("本服菜單");
        break;
}
