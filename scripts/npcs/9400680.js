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

var a = 0;

let sel = npc.askMenu("#b#g" + tz1 + "" + tz1 + "" + tz0 + "" + ax + "特色副本傳送" + ax + "" + tz0 + "" + tz1 + "" + tz1 + "#l\r\n"+
            "" + ntz1 + "" + ntz1 + "" + ntz2 + "" + ntz2 + "" + ntz3 + "" + ntz3 + "" + ntz1 + "" + ntz1 + "" + ntz2 + "" + ntz2 + "" + ntz3 + "" + ntz3 + "" + ntz1 + "" + ntz1 + "" + ntz2 + "" + ntz2 + "" + ntz3 + "" + ntz3 + "" + ntz1 + "" + ntz1 + "" + ntz2 + "" + ntz2 + "" + ntz3 + "" + ntz3 + "" + ntz1 + "" + ntz1 + "" + ntz2 + "" + ntz2 + "" + ntz3 + "" + ntz3 + "" + ntz1 + "" + ntz1 + "" + ntz2 + "" + ntz2 + "" + ntz3 + "" + ntz3 + "#l\r\n"+
			"#L1#" + tz4 + "#b[地下賭場]#d" + tz4 + "蘑菇機點卷抽寵物潛能裝備，破功。水靈機抵用抽火花，X卷，星火卷，蝸牛票。豆豆機抽椅子" + tz4 + "#l\r\n"+
            "#L3#" + tz4 + "#r[（每日）天空庭院]#d" + tz4 + "畢業戒指，四葉草幸運幣，高額經驗，破功石，星葉互換" + tz4 + "#l\r\n"+
			"#L2#" + tz4 + "#r[（每日）武陵道場]#d" + tz4 + "四葉草幸運幣，混沌刀刃，星星，破功箱，定居幣" + tz4 + "#l\r\n"+
			
			"#L4#" + tz4 + "#r[（每日）次元排位]#d" + tz4 + "全屬性100點裝，火花，頂級裝備，破功石，定居幣" + tz4 + "#l\r\n"+
			"#L5#" + tz4 + "#b[（整點）跑棋比賽]#d" + tz4 + "GM，自己都沒玩明白，希望有睪丸能給我解釋下" + tz4 + "#l\r\n"+
			"#L7#" + tz4 + "#g[新手組隊副本OnePiece]#d" + tz4 + "漩渦裝備，破功，雪花幣，梅爾茲金幣，萬花筒硬幣" + tz4 + "#l\r\n"+
			"#L6#" + tz4 + "#g[中級組隊副本調和精靈]#d" + tz4 + "全系列神秘徽章#d”掉落" + tz4 + "#l\r\n"+
			"#L8#" + tz4 + "#g[英雄組隊副本風雨森林]#d" + tz4 + "漩渦裝備，銀河裝備，V卷，破功，滿級精通秘藥" + tz4 + "#l\r\n"+
			"#L10#" + tz4 + "#g[英雄組隊副本龍虎精英道場]#d" + tz4 + "漩渦裝備（提高20%），銀河裝備，V卷，破功，#g超高幾率獲得：阿麗殺，柳德，解放的凱瑟利安" + tz4 + "#l\r\n"+
			"#L9#" + tz4 + "#g[終極組隊副本24人團本]#d" + tz4 + "#r綠水靈郵票，蝸牛郵票，神秘裝備，V卷，輪回石碑，#g妖精心臟#d隨機抽取，" + tz4 + "#l\r\n\r\n"+
			"" + ntz1 + "" + ntz1 + "" + ntz2 + "" + ntz2 + "" + ntz3 + "" + ntz3 + "" + ntz1 + "" + ntz1 + "" + ntz2 + "" + ntz2 + "" + ntz3 + "" + ntz3 + "" + ntz1 + "" + ntz1 + "" + ntz2 + "" + ntz2 + "" + ntz3 + "" + ntz3 + "" + ntz1 + "" + ntz1 + "" + ntz2 + "" + ntz2 + "" + ntz3 + "" + ntz3 + "" + ntz1 + "" + ntz1 + "" + ntz2 + "" + ntz2 + "" + ntz3 + "" + ntz3 + "" + ntz1 + "" + ntz1 + "" + ntz2 + "" + ntz2 + "" + ntz3 + "" + ntz3 + "#l\r\n"+
			"\r\n");

switch (sel) {
         
            case 1:
				player.changeMap(809030000);
                break;
            case 2:
                player.changeMap(925020001);
                break;
            case 3:                
				player.changeMap(706020100);
                break;
            case 4:
				player.changeMap(940020000);
                break;
            case 5:
				player.runScript("跑旗跑旗"); 
                break;
            case 6:
				player.runScript("new_調和精靈入場");
                break;
            case 7:
				player.runScript("new_深海龍王入場");
                break;
            case 8:
				//player.changeMap(809030000); 
				player.runScript("new_風雨森林入口");
                break;
			case 9:
				//player.changeMap(706030910); 
				player.runScript("團隊副本");
                break;
            case 10:
				//player.changeMap(706030910); 
				player.runScript("龍虎BOSS");
                break;

}    
