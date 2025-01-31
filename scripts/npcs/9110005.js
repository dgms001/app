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

//var tz6 = "#fEffect/CharacterEff/1112901/5/0#";//可以充當空格
var ntz1 = "#fEffect/CharacterEff/1102355/1/0#"; 
var ntz2 = "#fEffect/CharacterEff/1102355/2/0#"; 
var ntz3 = "#fEffect/CharacterEff/1102355/3/0#"; 
var ntz4 = "#fEffect/CharacterEff/1112901/5/0#";//可以充當空格
var ntz5 = "#fEffect/CharacterEff/1112901/5/0#";//可以充當空格

let sel = npc.askMenu("#b#e" + epp + "" + ax + "綜合商店" + ax + "" + epp + "#l\r\n"+
       	//"#e#r#L9#"+xxx+"一點奪寶"+xxx+"#l  #L7#"+xxx+"贊助抽獎"+xxx+"#l  #L8#"+xxx+"金豬抽獎"+xxx+"#l#n\r\n"+
		"#e#r#L1#"+tz6+"金幣商城#l#r     #L2#" + tz6 + "點卷商城#l#r     #L3#" + tz6 + "抵用商城#l#n\r\n"+
		"#e#r#L7#"+tz6+"混沌刃店#l#r     #L9#" + tz6 + "雜貨商店#l#b     #L6#" + tz6 + "喇叭商店#l#n\r\n"+
		"#e#b#L4#"+tz6+"寵物商城#l#b     #L5#" + tz6 + "機器人店#l#b     #L8#" + tz6 + "飛鏢商店#l#n\r\n\r\n"+
		""+ tz0 +""+ tz0 +""+ tz0 +""+ tz0 +""+ tz0 +""+ tz0 +""+ tz0 +""+ tz0 +""+ tz0 +""+ tz0 +"\r\n\r\n");
		//"#e#d#L10#"+tz6+"免費商店#l#d     #L11#" + tz6 + "雙倍道具#l#d     #L12#" + tz6 + "兌換商店2（建設中）#l#n\r\n");
		
		
		
		
		
		//"#e#r#L5#"+xxx+"轉蛋抽獎"+xxx+"#l  #L10#"+xxx+""+xxx+"#l  #L6#"+xxx+""+xxx+"#l#n\r\n");
switch (sel) {

           case 1:
            
            player.runScript("new_goldstore"); //其他商城
            break;
			case 2:
            
            player.runScript("new_pointshop"); //其他商城
            break;
			case 3:
            
            player.runScript("new_vouchers"); //其他商城
            break;
			case 4:
            
            player.runScript("new_petshop"); //其他商城
            break;
			case 5:
            
            player.runScript("new_androidshop"); //其他商城
            break;
			case 6:
            
            player.runScript("new_message"); //其他商城
            break;
			case 7:
            
            player.runScript("new_混沌刀刃兌換功能"); //其他商城
            break;
			case 8:
            
            player.runScript("new_equip"); //其他商城
            break;
			case 9:
            
            npc.sendShop(9310471); //其他商城
            break;
			case 10:
            
            player.runScript("new_gratis"); //其他商城
            break;
			case 11:
            
            npc.sendShop("new_douleexp"); //其他商城
            break;
			
			/*case 4:
            
            player.runScript("zmlbxcj"); //其他商城
            break;
			case 5:
            
             player.changemap(749050400);//其他商城
            break;
			case 6:
            
            player.runScript("jjcj");
            break;
			case 7:
            
            player.runScript("xjcj"); //其他商城
            break;
			case 8:
            
            player.runScript("9310022");
			 break;
			case 9:
            
            player.runScript("yycj"); //其他商城
            break;
			case 10:
            
            player.runScript("zmlx"); //其他商城
            break;*/


}