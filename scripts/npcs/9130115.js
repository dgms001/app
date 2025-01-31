
var status = 0;
var aaa ="#fUI/UIWindow/AriantMatch/characterIcon/5#";
var yun ="#fUI/UIWindow/Megaphone/2#";////紅沙漏
var yun2 ="#fUI/UIWindow/Quest/icon8/0#";////藍指標
var yun8 ="#fUI/UIWindow/MonsterBook/arrowLeft/normal/0#";////金左指標
var yun9 ="#fUI/UIWindow/MonsterBook/arrowRight/normal/0#";////金右指標
var yun4 ="#fUI/UIWindow/Quest/reward#";////獎勵
var ttt ="#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";////美化2
var ttt3 ="#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//美化圓
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var ttt5 ="#fUI/UIWindow/Quest/icon0#";////美化!
var ttt7 ="#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//美化會員
var ttt6 ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var epp = "#fEffect/CharacterEff/1082312/0/0#";  //彩光
var eff = "#fCharacter/Weapon/01702523.img/48/straight/0/effect#"; //彩虹帶
var eff = "#fEffect/CharacterEff/1112905/0/1#"; //
var epp = "#fEffect/CharacterEff/1082312/0/0#";  //彩光
var epp1= "#fEffect/CharacterEff/1082312/2/0#"; //彩光1
var axx = "#fEffect/CharacterEff/1051294/0/0#";  //愛心
var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //星系
var ppp = "#fEffect/CharacterEff/1112907/4/0#"; //泡炮 
var epp3 = "#fEffect/CharacterEff/1112908/0/1#";  //彩光3
var axx1= "#fEffect/CharacterEff/1062114/1/0#";  //愛心
var zs = "#fEffect/CharacterEff/1112946/2/0#";  //磚石粉
var zs1= "#fEffect/CharacterEff/1112946/1/1#";  //磚石藍
var dxxx = "#fEffect/CharacterEff/1102232/2/0#"; //星系
var tz = "#fEffect/CharacterEff/1082565/2/0#";  //兔子藍
var tz1= "#fEffect/CharacterEff/1082565/4/0#";  //兔子粉
var tz7 = "#fEffect/CharacterEff/1112900/3/1#";  //音符紅
var tz8 = "#fEffect/CharacterEff/1112900/4/1#";  //音符綠
var tz88 = "#fEffect/CharacterEff/1112900/5/1#";  //音符綠!
var yun1="#fUI/UIWindow/Quest/icon7/10#";////紅色圓
var tz9 = "#fEffect/CharacterEff/1112902/0/0#";  //藍心
var tz10 = "#fEffect/CharacterEff/1112903/0/0#";  //紅心
var tz11= "#fEffect/CharacterEff/1112904/0/0#";  //彩心
var tz12 = "#fEffect/CharacterEff/1112924/0/0#";  //黃星
var tz13 = "#fEffect/CharacterEff/1112925/0/0#";  //藍星
var tz14 = "#fEffect/CharacterEff/1112926/0/0#";  //紅星
var tz15 = "#fEffect/CharacterEff/1112949/0/0#";  //花樣音符
var tz16 = "#fEffect/CharacterEff/1112949/1/0#";  //花樣音符
var tz17 = "#fEffect/CharacterEff/1112949/2/0#";  //花樣音符
var tz18 = "#fEffect/CharacterEff/1112949/3/0#";  //花樣音符
var tz19 = "#fEffect/CharacterEff/1112949/4/0#";  //花樣音符
var tz20 = "#fEffect/CharacterEff/1114000/1/0#";  //紅星花
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var status = 0;
var eff = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var eff1 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var a = "#fUI/UIWindow/AriantMatch/characterIcon/5#";
var b = "#fEffect/CharacterEff/1112949/0/0#";  //花樣音符
var c = "#fUI/CashShop.img/CSEffect/hot/0#";  //人氣圖標
var d = "#fEffect/CharacterEff/1112949/3/0#";  //花樣音符
var e = "#fUI/UIWindow/MonsterBook/arrowLeft/normal/0#";////金左指標
var f = "#fUI/UIWindow/MonsterBook/arrowRight/normal/0#";////金右指標

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getMapID() == 180000001) {
            cm.sendOk("很遺憾，您因為違反用戶守則被禁止游戲活動，如有異議請聯系管理員.")
            cm.dispose();
        } 
    else if (status == 0) {
      // var selStr =  b+b+"#d回憶楓之谷群號：643115561（一切不懂盡管在群裡問）！！！！)#l\r\n\r\n";
	   var selStr = "   #e#v5062402##v5062402##v5062402#強化中心#v5062402##v5062402##v5062402##l\r\n\r\n";
       	//selStr +=  "#L1#"+ e + "#d紋章強化系統"+f+"#l  ";
		//selStr +=  "  #L2#"+ e + "#d徽章強化系統"  +f+ "#l\r\n\r\n";
        selStr += "#L3#" + e+ "#d口袋強化系統"+f+"#l  ";
		selStr += "  #L4#" + e + "飾品強化系統"+f+"#l\r\n\r\n";
		selStr += "#L5#" + e+ "#d裝備強化次數"+f+"#l  ";
		selStr += "  #L9981#" + e + "神秘徽章滿級"+f+"#l\r\n\r\n";
		selStr += "#L9982#" + e+ "#d武器突破轉移"+f+"#l  ";
		selStr +=  "  #L9984#" + e + "頂級裝備強化"+e+"#l\r\n\r\n";
		//selStr += "  #L9983#" + e + "#d自助更改潛能"+f+"#l\r\n\r\n";
		//selStr += "#L11000#" + e + "主流材料介紹"+f+"#l  ";
		//selStr += "  #L2#" + e + "各種金幣用途"+f+"#l\r\n\r\n";
		//selStr += "#L7#" + e + "打開技改介紹"+f+"#l  ";
		//selStr += "  #L8#" + e + "DNF跨5回憶團"+f+"#l\r\n\r\n";

        cm.askMenu(selStr);
    } else if (status == 1) {
       switch (selection) {
		case 9981:
		    cm.dispose();
			cm.openNpc(1033210,"神秘徽章滿級");	
            break;
		case 9982:
		    cm.dispose();
			cm.openNpc(1033210,"突破轉移");	
            break;
		case 9983:
		    cm.dispose();
			cm.openNpc(1033210,"自助改潛");	
            break;
		case 9984:
		    cm.dispose();
			cm.openNpc(1033210,"頂級裝備強化");	
            break;
        case 1:
		    cm.dispose();
			cm.openNpc(1033210,"wqqh");	
            break;
		case 2:
			cm.dispose();
			cm.openNpc(1033210,"fjqh");	
			break;
		case 3:
			cm.dispose();
			cm.openNpc(1033210,"kdqh");	
            break;
		case 4:
			cm.dispose();
			cm.openNpc(1033210,"bjqh");	
            break;
		case 5:
			cm.dispose();
			cm.openNpc(1033210,"jzqh");	
            break;

	}
    }
}