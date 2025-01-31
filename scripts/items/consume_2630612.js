
var status = -1
    //var txt;
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
var XD0 = "#fEffect/CharacterEff/1051366/0/0#";
var GC1 = "#fEffect/CharacterEff/1082700/2/0#";
var zx26 = "#fMap/MapHelper.img/weather/NatureTale1/5#";
var zx7 = "#fMap/MapHelper.img/weather/rose/2#";
var s0 = "#fUI/CashShop/CSBeauty/hairColor/Disable/0#"
var s1 = "#fUI/CashShop/CSBeauty/hairColor/Disable/1#"
var s2 = "#fUI/CashShop/CSBeauty/hairColor/Disable/2#"
var s3 = "#fUI/CashShop/CSBeauty/hairColor/Disable/3#"
var s4 = "#fUI/CashShop/CSBeauty/hairColor/Disable/4#"
var s5 = "#fUI/CashShop/CSBeauty/hairColor/Disable/5#"
var s6 = "#fUI/CashShop/CSBeauty/hairColor/Disable/6#"
var s7 = "#fUI/CashShop/CSBeauty/hairColor/Disable/7#"
var s8 = "#fUI/CashShop/CSBeauty/hairColor/Disable/8#"
var zx43 = "#fMap/MapHelper.img/weather/lovelypartybear/0#";
var zx24 = "#fMap/MapHelper.img/weather/nightMarket/5#";
var qq1 = "#fUI/EventShop/adventureShop/GradeBuyer/0#"
var qq2 = "#fUI/EventShop/adventureShop/GradeBuyer/1#"
var qq3 = "#fUI/EventShop/adventureShop/GradeBuyer/2#"
var qq4 = "#fUI/EventShop/adventureShop/GradeBuyer/3#"
var qq5 = "#fUI/EventShop/adventureShop/GradeBuyer/4#"
var qq6 = "#fUI/EventShop/adventureShop/GradeBuyer/5#"
let mapA = map.getId();
    if (mapA == 993001100) { //限制開啟地圖
        player.showSystemMessage("在卡BUG頭蓋骨給你打出來 操!!");
	}else{
    txt = "#fs21##r#e";
    txt += "\t   #v2630612##z2630612#\r\n";
	//txt += ""+zx24+zx24+zx24+zx24+zx24+zx24+zx24+zx24+zx24+zx24+zx24+"\r\n#n";
    txt += "#fs21##e#b";
    txt += "";
	txt += "\t\t\t\t\t#L1#兌換物品#l \r\n";//#L2#"+qq3+"兌換椅子#l #L3#"+qq3+"雜物兌換#l \
	txt += "";
	txt += "";
	txt += "";

	txt += "";
	txt += "";

	
}
let selection = npc.askMenuA(txt, 9330576);


switch (selection) {
	case 1:
var items = Array(
    Array(2049384,500,1),
	Array(2049384,500,1),
	Array(2049385,1000,1),
	Array(2049386,1400,1),
	Array(2049387,1800,1),
    Array(2049388,2000,1),
	Array(2644006,1000,1),
	Array(2644007,1500,1),
	/*Array(1113220,400,1),
	Array(1114400,500,1),
	Array(1033000,500,1),
	Array(1182136,650,1),
	Array(1032261,650,1),
	Array(1182158,800,1),
	Array(1114401,500,1),
	Array(1113211,1250,1),*/
	
    
);
var itemsl=2630612;
txt = "\r\n";
txt += "#fs14##b";
for (var i = 1; i < items.length; i++) {
    txt += "#L" + i + "##b#v" + items[i][0] + "# #z" + items[i][0] + "#*" + items[i][2] + "#b  需:#b#v"+itemsl+"#*#r" + items[i][1] + "個#n\r\n";
}
	
let selection1 = npc.askMenu(txt, 9062453);
i = selection1;
selection1 = npc.askNumber("購買道具為：#v" + items[i][0] + "# #z" + items[i][0] + "##k\r\n請輸入購買個數：", 1, 1, 999);

if (i) {
    GS = selection1;
    QSS = GS * items[i][1];
    if (!player.hasItem(itemsl,QSS)) {
        npc.say("#fs18##b#e你並沒有足夠的#v"+itemsl+"##r#z"+itemsl+"#");
    } else {
        player.gainItem(items[i][0], items[i][2] * GS);
		player.loseItem(itemsl,QSS);
        npc.say("#fs16##b#e購買成功");
    }
}

	break;
	
	case 2:
	var items = Array(
	Array(3018177,30,1),
	Array(3018177,30,1),
	Array(3015953,30,1),
	Array(3018279,30,1),
	Array(3018232,30,1),
	Array(3018015,30,1),
	Array(3018395,30,1),
	Array(3018067,30,1),
	Array(3018153,30,1),
	Array(3018451,30,1),
	Array(3018500,30,1),
	Array(3018129,30,1),
	Array(3018440,30,1),
	Array(3018428,30,1),
	Array(3018590,30,1),
	Array(3018076,30,1),
	Array(3018481,30,1),
	Array(3018378,30,1),
	Array(3018562,30,1),
	Array(3018672,30,1),
	Array(3018598,30,1)
	
    
);
var itemsl=2630612;

txt = "\r\n";
txt += "#fs14##b";
for (var i = 1; i < items.length; i++) {
    txt += "#L" + i + "##b#v" + items[i][0] + "# #z" + items[i][0] + "#*" + items[i][2] + "#b  需:#b#v"+itemsl+"#*#r" + items[i][1] + "個#n\r\n";
}
let selection2 = npc.askMenu(txt, 9062453);
i = selection2;
selection2 = npc.askNumber("購買道具為：#v" + items[i][0] + "# #z" + items[i][0] + "##k\r\n請輸入購買個數：", 1, 1, 999);

if (i) {
    GS = selection2;
    QSS = GS * items[i][1];
    if (!player.hasItem(itemsl,QSS)) {
        npc.say("#fs18##b#e你並沒有足夠的#v"+itemsl+"##r#z"+itemsl+"#");
    } else {
        player.gainItem(items[i][0], items[i][2] * GS);
		player.loseItem(itemsl,QSS);
        npc.say("#fs16##b#e購買成功");
    }
}

	break;
	
	case 3:
var items = Array(
	Array(2049751,10,1),
	Array(2049751,10,1),
	
    
);
var itemsl=2630612;

txt = "\r\n";
txt += "#fs14##b";
for (var i = 1; i < items.length; i++) {
    txt += "#L" + i + "##b#v" + items[i][0] + "# #z" + items[i][0] + "#*" + items[i][2] + "#b  需:#b#v"+itemsl+"#*#r" + items[i][1] + "個#n\r\n";
}
let selection3 = npc.askMenu(txt, 9062453);
i = selection3;
selection3 = npc.askNumber("購買道具為：#v" + items[i][0] + "# #z" + items[i][0] + "##k\r\n請輸入購買個數：", 1, 1, 999);

if (i) {
    GS = selection3;
    QSS = GS * items[i][1];
    if (!player.hasItem(itemsl,QSS)) {
        npc.say("#fs18##b#e你並沒有足夠的#v"+itemsl+"##r#z"+itemsl+"#");
    } else {
        player.gainItem(items[i][0], items[i][2] * GS);
		player.loseItem(itemsl,QSS);
        npc.say("#fs16##b#e購買成功");
    }
}

	break;
	
	
	
}


