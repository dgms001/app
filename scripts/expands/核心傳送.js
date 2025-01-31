var aa = "#fMap/MapHelper.img/weather/starPlanet2/5#";
var selectionectedMap = -1;
var selectionectedArea = -1;
var a1 = "#fItem/Cash/0501.img/05010057/effect/default/3#"; //撒花
var a2 = "#fItem/Cash/0501.img/05010143/effect/default/0#"; //皇冠左
var a3 = "#fItem/Cash/0501.img/05010143/effect/default/4#"; //皇冠右
var a4 = "#fItem/Cash/0501.img/05010150/effect/default/2#"; //嘲笑候
var a5 = "#fItem/Cash/0501.img/05010180/effect/default/0#"; //彩虹书
var a6 = "#fItem/Cash/0501.img/05010129/effect/default/0#"; //初音3
var a7 = "#fEffect/ItemEff.img/1005163/effect/default/0#"//中音符
var a8 = "#fEffect/ItemEff.img/1070069/effect/walk1/0#"//彩虹小云0-7
var a88 = "#fEffect/ItemEff.img/1070069/effect/walk1/4#"//彩虹小云0-7
var a888 = "#fEffect/ItemEff.img/1070069/effect/walk1/6#"//彩虹小云0-7
var a9 = "#fEffect/ItemEff.img/1073056/effect/walk1/0#"//好看的花0-7
var a10 = "#fEffect/ItemEff.img/1102420/effect/default/0#"//彩虹中星星0-5
var a11 = "#fEffect/ItemEff.img/1102919/effect/default/0#"//小黄鸭车0-7
var a12 = "#fEffect/ItemEff.img/1102930/effect/default/0#"//雨点彩虹0-15
var a112 = "#fEffect/ItemEff.img/1102930/effect/default/4#"//雨点彩虹0-15
var a122 = "#fEffect/ItemEff.img/1102930/effect/default/12#"//雨点彩虹0-15
var a1222 = "#fEffect/ItemEff.img/1102930/effect/default/13#"//雨点彩虹0-15
var a13 = "#fEffect/ItemEff.img/1102987/effect/default/0#"//卡片绿水蘑菇
var a14 = "#fEffect/ItemEff.img/1103035/effect/default/0#"//彩虹音符长
var a15 = "#fEffect/ItemEff.img/1103094/effect/default/0#"//长花
var a16 = "#fEffect/ItemEff.img/1103440/effect/default/0#"//石头怪
var a17 = "#fEffect/ItemEff.img/1112013/1/5#"//爱心5-9
var a18 = "#fEffect/ItemEff.img/1082692/effect/default/6#"//彩虹熊14-21
var a19 = "#fEffect/ItemEff.img/1053230/effect/default/2#"//爱心兔长
var a20 = "#fEffect/ItemEff.img/1005102/effect/default/3#"//粉色PB长3-5
var a21 = "#fEffect/ItemEff.img/1005103/effect/default/3#"//绿水灵长3-5
var a22 = "#fEffect/ItemEff.img/1103083/effect/default/0#"//中蝴蝶长3-5
var a23 = "#fEffect/ItemEff.img/1005254/effect/default/4#"//蓝色中小星星
var a25 = "#fEffect/ItemEff.img/1005353/effect/default/0#"//绿芽叶中小
var a26 = "#fEffect/ItemEff.img/1073379/effect/default/0#"//幽灵云长
var a27 = "#fEffect/ItemEff.img/1073435/effect/default/3#"//彩虹细云0-3
var a28 = "#fEffect/ItemEff.img/1005692/effect/default/7#"//彩虹星星爱心1005692-1005697
var a29 = "#fEffect/ItemEff.img/1073498/effect/default/7#"//彩虹爱心蝴蝶1073498-1073503
var a30 = "#fEffect/CharacterEff/1022223/6/0#"//跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#"//跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#"//跑马灯
var a33 = "#fEffect/ItemEff.img/1005163/effect/default/0#"//中音符
var a34 = "#fItem/Cash/0501.img/05010056/effect/walk1/5#"; //小草
var a35 = "#fItem/Cash/0501.img/05010056/effect/walk1/6#";//草
var a36 = "#fItem/Cash/0501.img/05010056/effect/walk1/7#";//草

var c1 = "#fEffect/ItemEff.img/1005765/effect/default/0#"//小图标
var c2 = "#fEffect/ItemEff.img/1112001/0/0#"//小图标
var c3 = "#fEffect/ItemEff.img/1112002/0/0#"//小图标
var c4 = "#fEffect/ItemEff.img/1032328/effect/default/0#"//小图标
var c5 = "#fEffect/ItemEff.img/1032328/effect/backDefault/0#"//小图标
var c6 = "#fEffect/ItemEff.img/1032329/effect/default/0#"//小图标
var c7 = "#fEffect/ItemEff.img/1032329/effect/backDefault/0#"//小图标
var c8 = "#fEffect/ItemEff.img/1112006/0/1#"//小图标
var c9 = "#fEffect/ItemEff.img/1112806/0/0#"//小图标
var c10 = "#fEffect/ItemEff.img/1112807/0/0#"//小图标
var c11 = "#fEffect/ItemEff.img/1112809/0/0#"//小图标
var c12 = "#fEffect/ItemEff.img/1005799/effect/backDefault/0#"//小图标
var c13 = "#fEffect/ItemEff.img/1112024/0/5#"//小图标
var SR1 = "";
var SR2 = "";
var SR3 = "";
var SR4 = "";
var SR5 = "";
var SR6 = "";
var SR7 = "";
var SR8 = "";
var STAR = "#fUI/UIWindow/ToolTip/WorldMap/StarForce#"; //星力需求
var ARC = "#fUI/UIWindow/ToolTip/WorldMap/ArcaneForce#"; //ARC需求
var AUT = "#fUI/UIWindow/ToolTip/WorldMap/AuthenticForce#"; //AUT需求
//var LV = "#fUI/UIWindow2/LevelUpGuide/lvNum/lv#"; //等級需求
var LV = "#fUI/UIWindowPL2/Familiar/@InfoWnd/level/Lv.#"; //等級需求
//var LV = "#fUI/UIGuild/guildMain/pages/normalCategory/categoryTitle/sub/level#"; //等級需求
var yellow = "#fc0xFFffd700#"; //黃色
var pink = "#fc0xFFff6781#"; //粉色
var green1 = "#fc0xFF7FFFAA#";//綠色

var monstermaps = Array( //練等地圖

	Array(450001010, 0, "五轉核心掉落分流-1", 0),
	Array(450001010, 0, "五轉核心掉落分流-1", 0),
	Array(450001011, 0, "五轉核心掉落分流-2", 0),
	Array(450001012, 0, "五轉核心掉落分流-3", 0),//
	Array(450001013, 0, "五轉核心掉落分流-4", 0),
	Array(450001014, 0, "五轉核心掉落分流-5", 0),
	Array(450001015, 0, "五轉核心掉落分流-6", 0),
	Array(450001016, 0, "五轉核心掉落分流-7", 0),

	//Array(450001260, 0, "#rARC掉落#z1712001#/#b#z1712002#", 0),
	//Array(450001262, 0, "#rARC掉落#z1712001#/#b#z1712002#", 0),
	//Array(450002018, 0, "#rARC掉落#z1712003#/#b#z1712004#", 0),
	//Array(450002016, 0, "#rARC掉落#z1712003#/#b#z1712004#", 0),
	//Array(450005430, 0, "#rARC掉落#z1712005#/#b#z1712006#", 0),
	//Array(450005410, 0, "#rARC掉落#z1712005#/#b#z1712006#", 0),
	//Array(410000520, 0, "#rAUT符文掉落#b#z1713000#", 0),
	//Array(410000530, 0, "#rAUT符文掉落#b#z1713000#", 0),
	//Array(410003060, 0, "#rAUT符文掉落#b#z1713001#", 0),
	//Array(410003070, 0, "#rAUT符文掉落#b#z1713001#", 0),

);

var txt = "\r\n";
txt += "#fs11##n#r請選擇您的目的地: #b\r\n";
for (var i = 1; i < monstermaps.length; i++) {
	txt += "#fs11#\r\n#L" + i + "#" + c3 + monstermaps[i][2] + "#l\r\n";

}

let selection = npc.askMenu(txt);

if (selection) {
	if (player.getLevel() < monstermaps[selection][3]) {
		level = monstermaps[selection][3] - player.getLevel()
		npc.askMenu("　" + a15 + "  " + a15 + "  " + a15 + "\r\n\r\n" + "#r注意:\r\n#b選擇的地圖已限制傳送等級需達 #r" + monstermaps[selection][3] + " #b級，\r\n#b因您目前等級尚差 #r" + level + " #b級，無法前往。#fs16#\r\n\r\n" + "　" + a15 + "　" + a15 + "　" + a15, true);
	} else {
		player.changeMap(monstermaps[selection][0], 0);
	}
}
