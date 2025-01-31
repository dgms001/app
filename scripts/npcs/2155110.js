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


let sel = npc.askMenu("#e#b" + tz0 + "" + tz0 + "寵物中心" + tz0 + "" + tz0 + "#l\r\n\r\n"+
		"#d#b寵物寶寶的一切都在這裡哦！\r\n#r"+
		"#L1##e#k自選寵物#L2##e#k寵物商店#l#L3##e#k寵物功能#n\r\n"+
		//"#L5##e#k升級次數#L2##e#k25星強化#l#L9##e#k副手強化#n\r\n"+
		""+ntz5+""+ntz5+"\r\n"+
		"#l#n\r\n");

switch (sel) {
		case 1:
            player.runScript("自選寵物"); 
            break;

		case 2:
            player.runScript("new_petshop"); 
            break;

        case 3:
            player.runScript("寵物功能"); //裝備商城
            break;


}    

