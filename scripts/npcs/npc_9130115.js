var epp = "#fEffect/SetItemInfoEff/298/0#";  //藍色四葉草
var ax = "#fEffect/CharacterEff/1112903/0/1#";  //紅色愛心
var xxx = "#fEffect/CharacterEff/1032054/0/0#";  //選項兩邊
var eff = "#fCharacter/Weapon/01702523.img/48/straight/0/effect#"; //彩虹帶
var ttt7 = "#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//美化會員
var yun2 = "#fUI/UIWindow/Quest/icon8/0#";//藍指標
var tz0 = "#fEffect/ItemEff/1070069/effect/walk1/0#";
var tz1 = "#fEffect/CharacterEff/1022223/8/0#"; 
var tz2 = "#fEffect/CharacterEff/1022223/6/0#"; 
var tz3 = "#fEffect/CharacterEff/1022223/9/0#";
var tz4 = "#fEffect/CharacterEff/1022223/7/0#";
var tz5 = "#fEffect/CharacterEff/1050312/3/0#";
var tz6 = "#fEffect/CharacterEff/1112906/0/1#";//粉紅心 
//var tz6 = "#fEffect/CharacterEff/1114000/1/0#";  //紅星花
var xx  = "#fMap/MapHelper/weather/snowbear/2#";
//var tz6 = "#fEffect/CharacterEff/1112901/5/0#";//可以充當空格
var ntz1 = "#fEffect/CharacterEff/1102355/1/0#"; 
var ntz2 = "#fEffect/CharacterEff/1102355/2/0#"; 
var ntz3 = "#fEffect/CharacterEff/1102355/3/0#"; 
var ntz4 = "#fEtc/ChatEmoticon/expression/1/0#";//生氣星星
var ntz5 = "#fEffect/ItemEff/1102877/effect/default/1#";//彩虹云朵

let sel = npc.askMenu("#e#b" + tz0 + "" + tz0 + "提升中心" + tz0 + "" + tz0 + "#l\r\n\r\n"+
		"#d#b"+xx+"請注意#r非100%#n成功率的所有卷軸先上#r防爆卷！\r\n#r"+
		"#L1##e#k新手潛能#L12##e#k普通強化#l#L3##e#k頂級強化#n\r\n"+
		"#L5##e#k升級次數#L2##e#k25星強化#l#L9##e#k副手強化#n\r\n"+
		""+ntz5+""+ntz5+"\r\n"+
		"#L6##e#k龍魂強化#L8##e#k圖騰強化#l#L7##e#k口袋強化#n\r\n"+
		"#L10##e#k神秘徽章#l#L11##e#k超級屬性#L13##e#k強混系統"+
		"#l#n\r\n");

switch (sel) {
		case 1:
            player.runScript("新手裝備強化"); 
            break;

		case 2:
            player.runScript("25星強化"); 
            break;

        case 3:
            player.runScript("頂級裝備強化"); //裝備商城
            break;

        case 4:
            npc.sendShop(9090000); //雜貨商城
            break;

		 case 5:
            player.runScript("武器升級次數"); //椅子商城
            break;

		case 6:
            player.runScript("new_龍魂合成"); //其他商城
            break;

        case 7:
           player.runScript("new_手帕合成"); //裝備商城
            break;

        case 8:
            player.runScript("new_圖騰合成"); //魔方商城
            break;

        case 9:
            player.runScript("new_副手強化"); //其他商城
            break;

        case 10:
            player.runScript("神秘徽章升級"); //其他商城
            break;

        case 11:
            player.runScript("new_超級屬性"); //其他商城
            break;
        case 12:
            player.runScript("平民強化系統"); //其他商城
            break;
		case 13:
            player.runScript("強混"); //其他商城
            break;


}    

