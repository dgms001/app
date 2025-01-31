/* Joyce
	Event NPC
*/

//var status = -1;
var eff = "#fEffect/BasicEff/MainNotice/BlockBuster/Default/3#"; //紅星
var yun9 = "#fEffect/ItemEff/1112811/0/0#";
var tz12 = "#fMap/MapHelper.img/weather/rose/0#"; ////美化2

var kkkbak1 = "#fMap/MapHelper.img/weather/rose/0#"; ////美化2
var bk1 = "#fEffect/ItemEff.img/1004532/effect/default/4#"
var bk2 = "#fEffect/ItemEff.img/1004475/effect/jump/0#"
var bk3 = "#fEffect/ItemEff.img/1004435/effect/alert/0#"
var bk4 = "#fEffect/ItemEff.img/1004477/effect/prone/1#"
var bk5 = "#fEffect/ItemEff.img/1004436/effect/default/3#"
var bk6 = "#fEffect/ItemEff.img/1004437/effect/walk1/0#"
var sg1 = "#fEffect/ItemEff.img/2022109/1#"
var sg2 = "#fEffect/ItemEff.img/2022109/2#"
var zx = "#fEffect/ItemEff.img/1003492/effect/default/1#"
var lj = "#fEffect/ItemEff.img/1003493/effect/default/1#"
var dq = "#fEffect/ItemEff.img/1003494/effect/default/1#"
var ye = "#fEffect/ItemEff.img/1003495/effect/default/0#"
var fg = "#fEffect/ItemEff.img/1004124/effect/ladder/1#"
var dtb = "#fEffect/CharacterEff.img/1112949/3/0#"
var xtb1 = "#fEffect/CharacterEff.img/1003249/0/0#" //第一排
var xtb2 = "#fEffect/CharacterEff.img/1003249/1/0#" //第二排
var xtb3 = "#fEffect/CharacterEff.img/1003252/0/0#" //第三排
var xtb4 = "#fEffect/CharacterEff.img/1112900/3/1#" //第四排
var zzz = "#fUI/UIWindowGL.img/FeedbackSystem/backgrnd3#"
var 黃星 = "#fEffect/CharacterEff/1112924/0/0#"
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#"
var hii = "#fEffect/BasicEff/MainNotice/BlockBuster/Default/3#"
var a1 = "#fEffect/ItemEff/1070069/effect/walk1/0#"
var a2 = "#fEffect/ItemEff/1070069/effect/walk1/1#"
var a3 = "#fEffect/ItemEff/1070069/effect/walk1/2#"
var a4 = "#fEffect/ItemEff/1070069/effect/walk1/3#"
var a5 = "#fEffect/ItemEff/1070069/effect/walk1/4#"
var a6 = "#fEffect/ItemEff/1070069/effect/walk1/5#"
var a7 = "#fEffect/ItemEff/1070069/effect/walk1/6#"
var a8 = "#fEffect/ItemEff/1070069/effect/walk1/7#"
//城鎮傳送
var maps = Array(
	Array(100000104, "美 髮 店"),
	Array(104000000, "弓箭手村"),
	Array(500000000, "水上市場"),

	Array(910001000, "技 術 村"),
	Array(104000000, "日本神社"),
	Array(101000000, "魔法密林"),

	Array(104000000, "維多利亞"),
	Array(220000000, "玩 具 城"),
	Array(102000000, "勇士部落"),

	Array(103000000, "墮落城市"),
	Array(120000000, "鯨魚碼頭"),
	Array(105000000, "奇 幻 村"),

	Array(200000000, "天空之城"),
	Array(211000000, "冰原雪域"),
	Array(230000000, "水 之 都"),

	Array(224000000, "童 話 村"),
	Array(701100000, "魔都上海"),
	Array(250000000, "武陵桃園"),

	Array(701210000, "嵩山少林"),
	Array(260000000, "納希綠洲"),
	Array(600000000, "新葉都市"),

	Array(240000000, "神 木 村"),
	Array(261000000, "瑪加提亞"),
	Array(221000000, "地球本部"),

	Array(251000000, "靈藥仙境"),
	Array(300000000, "艾靈森林"),
	Array(270000000, "時間神殿"),

	Array(130000000, "耶 雷 佛"),
	Array(310000000, "埃德斯坦"),
	Array(931000500, "抓美洲豹"),
	Array(450001000, "無 名 村"),
	Array(450002000, "啾 啾 村"),
	Array(450003000, "拉契爾恩"),
	Array(450005000, "阿爾卡娜"),
	Array(450006000, "魔 菈 斯"),
	Array(450007000, "艾斯佩拉"),
);
//練級地圖
/*var monstermaps = Array(
	Array(101071200, 0,"20  ≈  30      湖面3           魔方精髓#v4009453#"),
	Array(103020400, 0,"30 ≈  60      2號線第1區間  "),
	Array(260010600, 0,"60 ≈  80      流浪團之地     "),
	Array(261010102, 0,"80 ≈  125     研究所202    "),
	Array(251010402, 0,"125 ≈ 155     紅鼻子海盜老巢2 "),
	Array(220060200, 0,"		宇宙戒指（20星）#v1114303#"),	
	Array(410000112, 0,"200 ≈ 210     狐貍森林上路2     純白#v2049004#"),
	Array(410000123, 0,"200 ≈ 210     守護靈的散步路3   祝福#v2340000#"),
	Array(450001210, 0,"210 ≈ 220     三岔路1"),
	Array(450002017, 0,"220 ≈ 240     鯨山山腰1"),
	Array(450005500, 0,"240 ≈ 250     五岔洞穴"),
	Array(450011610, 0,"250 ≈ 265     痛苦迷宮核心區2"),
	Array(450009200, 0,"	 	遠征戒指（700神秘）#v1114307#"),		
	Array(450012430, 0, "265 ≈ 275     世界盡頭2-4#v4001785#")
);*/
var monstermaps = Array(
	Array(104010000, 0, "#r#e【10等】#b#n蝸牛"),
	Array(100040400, 0, "#r#e【30等】#b#n石巨人"),
	Array(103020320, 0, "#r#e【40等】#b#n白幽靈"),
	Array(260010600, 0, "#r#e【70等】#b#n公砂兔"),
	Array(261020401, 0, "#r#e【70等】#b#n賽伊迪"),
	Array(610040230, 0, "#r#e【90等】#b#n外星人6"),
	Array(251010402, 0, "#r#e【140等】#b#n金勾海賊團"),
	Array(252010000, 0, "#r#e【140等】#b#n兇暴猴子"),
	Array(100051037, 0, "#r#e【140等】#b#n石石森林昆蟲"),
	Array(252020400, 0, "#r#e【140等】#b#n紅鬼怪"),
	Array(103041157, 0, "#r#e【150等】#b#n星光之塔-美容室6層"),
	Array(240040510, 0, "#r#e【150等】【65星】#b#n死龍巢穴"),
	Array(103041159, 0, "#r#e【160等】【80星】#b#n星光之塔-髮廊6樓"),
	Array(271000100, 0, "#r#e【160等】#b#n變形的提諾森林 "),
	Array(271030310, 0, "#r#e【170等】【120星】#b#n武器庫1"),
	Array(221030640, 0, "#r#e【190等】【140星】#b#n外星人走廊NO1"),
	Array(273040100, 0, "#r#e【190等】#b#n被遺棄的挖掘地區"),
	Array(310070140, 0, "#r#e【200等】#b#n機械墳場山丘"),
	Array(310070210, 0, "#r#e【200等】#b#n天空SKY1"),
	Array(105300301, 0, "#r#e【200等】#b#n墮落的世界樹"),
	Array(450001262, 0, "#r#e【200等】【ARC 80】#b#n隱藏的洞穴     "),
	Array(450014300, 0, "#r#e【205等】【ARC100】#b#n隱藏研究列車   "),
	Array(450002010, 0, "#r#e【215等】【ARC100】#b#n揪樂森林深處   "),
	Array(450015300, 0, "#r#e【215等】【ARC190】#b#n隱藏香菇森林   "),
	Array(450003420, 0, "#r#e【220等】【ARC210】#b#n顯露本色之處   "),
	Array(450003300, 0, "#r#e【220等】【ARC210】#b#n雞群遊樂場一   "),
	Array(450005430, 0, "#r#e【225等】【ARC360】#b#n洞穴的下路     "),
	Array(450007120, 0, "#r#e【235等】【ARC600】#b#n鏡光大海3      "),
	Array(450016110, 0, "#r#e【240等】【ARC640】#b#n沉淪的深海1    "),
	Array(450016140, 0, "#r#e【240等】【ARC640】#b#n沉淪的深海4    "),
	Array(450016240, 0, "#r#e【240等】【ARC640】#b#n吞噬的深海4    "),
	Array(450009330, 0, "#r#e【245等】【ARC730】#b#n虛空海浪3      "),
	Array(450011440, 0, "#r#e【250等】【ARC820】#b#n苦痛迷空內部5  "),
	Array(450011600, 0, "#r#e【250等】【ARC820】#b#n苦痛迷宮最深處1"),
	Array(450012340, 0, "#r#e【255等】【ARC880】#b#n世界終結處1-5  "),
	Array(450012020, 0, "#r#e【255等】【ARC880】#b#n世界的眼淚下方1"),
	Array(450012100, 0, "#r#e【255等】【ARC880】#b#n世界的眼淚中段1"),
	Array(450012110, 0, "#r#e【255等】【ARC880】#b#n世界的眼淚中段2"),
	Array(450012120, 0, "#r#e【255等】【ARC880】#b#n世界的眼淚中段3"),
	Array(450012440, 0, "#r#e【255等】【ARC880】#b#n世界終結之處2-5")
);
//跳跳地圖
var tiaotiaomaps = Array(
	Array(100000202, 0, "#r寵物公園                    「射手跳跳」#b"),
	Array(220000006, 0, "#r寵物訓練                    「玩具跳跳」#b"),
	Array(910360002, 0, "第一區域                    「 地鐵b1」"),
	Array(910360102, 0, "第一區域                    「 地鐵b2」"),
	Array(910360203, 0, "第一區域                    「 地鐵b3」"),
	Array(109040001, 0, " 向高地                      <第1階段> "),
	Array(910130000, 0, "忍苦樹林                     <第1階段> "),
	Array(109030001, 0, "上樓上樓                     <第1階段> "),
	Array(280020000, 0, "火山心臟                     <火山的心臟>")
);
var aa = "#fMap/MapHelper.img/weather/starPlanet2/5#";  //
var selectionectedMap = -1;
var selectionectedArea = -1;
var a3 = "#fEffect/ItemEff/1070069/effect/walk1/2#"
var txt = "      #e" + a3 + "#fs24##fc0xFF5C00FE#【萬能傳送中心】" + a3 + "#k\r\n\r\n#fs18##n";
txt += "#L8#" + aa + "#b自由市場#l#k\t";
txt += "#L0#" + aa + "#b城鎮傳送#l#k\t";

txt += "#L1#" + aa + "#b快速練級#l#k\r\n\r\n";

txt += "#L7#" + aa + "#b結婚地圖#l#k\t";
//txt += "#L3#"+aa+"#b泡點地圖#k#l\t";
txt += "#L2#" + aa + "#b家族中心#l#k\t\r\n\r\n";

txt += "#L6#" + aa + "#b材料地圖[#v2431738#][#v2430692#][#v4001839#][#v4001713#]#k#b#l\r\n\r\n";
txt += "  ";
let selection = npc.askMenuA(txt, true);

var selectionStr = "請選擇您的目的地: #b\r\n";

if (selection == 0 || selection == 1 || selection == 6) {

	if (selection == 0) {
		var j = 3;
		for (var i = 0; i < maps.length; i++) {

			selectionStr += "#L" + i + "#" + aa + maps[i][1] + " #l";

			if (i == j || i == j + 3) {
				selectionStr += "\r\n";
				j += 4;
			} else {
				selectionStr += "";
			}

		}
	} else if (selection == 1) {
		//練級地圖

		for (var i = 0; i < monstermaps.length; i++) {
			selectionStr += "#fs20##L" + i + "#" + aa + monstermaps[i][2] + "#l\r\n";

		}
	} else if (selection == 6) {
		selectionStr += "#fs20##L1004#" + aa + "#e#r【30等】#b#n[土龍]#b 額外掉落:[#v2431738#]\r\n";
		selectionStr += "#L1005#" + aa + "#e#r【70等】#b#n[紅砂矮人]#b 額外掉落:[#v2430692#]\r\n";
		selectionStr += "#L1001#" + aa + "#e#r【110等】#b#n[外星人]#b 額外掉落:[#v4001839#]\r\n";
		selectionStr += "#L1003#" + aa + "#e#r【200等】#b#n[石面怪人]#b 額外掉落:[#v4001713#]\r\n";
	}

	selectionectedArea = selection;

	selection = npc.askMenuA(selectionStr, true);

	if (selection == 1000 || selection == 1001 || selection == 1002 || selection == 1003 || selection == 1004 || selection == 1005) {
		selectionectedArea = selection;
	}
	selectionectedMap = selection;
	if (selection == 1002) {
		var text = "   ------------#r刷金幣專區#k-------------\r\n";
		text += "#L0# #v4009411# ,[#r快速刷金幣地圖#k] - #m410000123##l\r\n";
		text += "#L1# #v4009411# ,[#b高級刷金幣地圖,需要一定實力#k] - #m450012440##l\r\n\r\n";
		let sel = npc.askMenu(text);
		if (sel == 0) {
			player.changeMap(410000123);
		} else {
			player.changeMap(450012440);
		}
		//萌新刷金幣 402000509


		//大神刷金幣 
	} else {
		let yes = npc.askYesNoS("看來這裡的事情都已經處理完了啊。您真的要移動嗎？");
		if (yes > 0) {
			if (selectionectedMap >= 0) {
				if (selectionectedArea == 0) {

					player.changeMap(maps[selectionectedMap][0]);
				} else if (selectionectedArea == 5) {

					player.changeMap(tiaotiaomaps[selectionectedMap][0]);
				} else if (selectionectedArea == 1005) {//紅砂矮人
					player.changeMap(260020610,);
				} else if (selectionectedArea == 1000) {
					player.changeMap(450002302, 0);
				} else if (selectionectedArea == 1001) {//外星人
					player.changeMap(610040230, 0);
				} else if (selectionectedArea == 1003) {//石板怪
					player.changeMap(273040100, 0);
				} else if (selectionectedArea == 1004) { //土龍
					player.changeMap(105010000, 0);
				} else if (selectionectedArea == 1006) {
					player.changeMap(410000040, 0);
				} else if (selectionectedArea == 1007) {
					player.changeMap(410000040, 0);
				} else if (selectionectedArea == 1008) {
					player.changeMap(410000040, 0);
				} else {

					player.changeMap(monstermaps[selectionectedMap][0], 0);



				}
			}

		}
	}

} else {
	if (selection == 2) {
		player.changeMap(200000301, 0);

	} else if (selection == 3) {

		player.changeMap(104000000);

	} else if (selection == 4) {
		player.changeMap(925020000);
	} else if (selection == 5) {

		player.runScript("mPark01");

	} else if (selection == 7) {
		player.changeMap(620110000, 0);

	} else if (selection == 8) {

		player.changeMap(104000000, 0);

	} else if (selection == 9) {

		player.runScript("掛機副本");

	}
}