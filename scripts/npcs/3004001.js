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
var boss1 = "#fUI/UIWindow2/UserList/Main/Boss/BossList/0/Icon/normal/0#";//蝙蝠魔
var boss2 = "#fUI/UIWindow2/UserList/Main/Boss/BossList/1/Icon/normal/0#"; //扎昆
var boss3 = "#fUI/UIWindow2/UserList/Main/Boss/BossList/2/Icon/normal/0#"; //黑暗龍王
var boss4 = "#fUI/UIWindow2/UserList/Main/Boss/BossList/3/Icon/normal/0#"; //希拉
var boss5 = "#fUI/UIWindow2/UserList/Main/Boss/BossList/4/Icon/normal/0#"; //皮埃爾
var boss6 = "#fUI/UIWindow2/UserList/Main/Boss/BossList/5/Icon/normal/0#"; //半半
var boss7 = "#fUI/UIWindow2/UserList/Main/Boss/BossList/6/Icon/normal/0#"; //血腥女王
var boss8 = "#fUI/UIWindow2/UserList/Main/Boss/BossList/7/Icon/normal/0#"; //貝倫
var boss9 = "#fUI/UIWindow2/UserList/Main/Boss/BossList/8/Icon/normal/0#"; //班·雷昂
var boss10 = "#fUI/UIWindow2/UserList/Main/Boss/BossList/9/Icon/normal/0#";// 阿卡伊勒
var boss11 = "#fUI/UIWindow2/UserList/Main/Boss/BossList/10/Icon/normal/0#";// 麥格納斯
var boss12 = "#fUI/UIWindow2/UserList/Main/Boss/BossList/11/Icon/normal/0#"; //品克繽
var boss13 = "#fUI/UIWindow2/UserList/Main/Boss/BossList/12/Icon/normal/0#"; //希納斯
var boss14 = "#fUI/UIWindow2/UserList/Main/Boss/BossList/13/Icon/normal/0#"; //斯烏
var boss15 = "#fUI/UIWindow2/UserList/Main/Boss/BossList/14/Icon/normal/0#"; //烏魯斯
var boss16 = "#fUI/UIWindow2/UserList/Main/Boss/BossList/15/Icon/normal/0#";// 戴米安
var boss20 = "#fUI/UIWindow2/UserList/Main/Boss/BossList/19/Icon/normal/0#";// 路西德
var boss22 = "#fUI/UIWindow2/UserList/Main/Boss/BossList/21/Icon/normal/0#"; //卡雄
var boss23 = "#fUI/UIWindow2/UserList/Main/Boss/BossList/22/Icon/normal/0#";// 帕普拉圖斯
var boss24 = "#fUI/UIWindow2/UserList/Main/Boss/BossList/23/Icon/normal/0#"; //威爾
var boss25 = "#fUI/UIWindow2/UserList/Main/Boss/BossList/24/Icon/normal/0#"; //覺醒希拉
var boss26 = "#fUI/UIWindow2/UserList/Main/Boss/BossList/25/Icon/normal/0#"; //黑魔法師
var boss27 = "#fUI/UIWindow2/UserList/Main/Boss/BossList/26/Icon/normal/0#"; //至暗魔晶
var boss28 = "#fUI/UIWindow2/UserList/Main/Boss/BossList/27/Icon/normal/0#";// 敦凱爾
var boss29 = "#fUI/UIWindow2/UserList/Main/Boss/BossList/103/Icon/normal/0#"; //貝勒德
var boss30 = "#fUI/UIWindow2/UserList/Main/Boss/BossList/104/Icon/normal/0#";// 森蘭丸
var boss31 = "#fUI/UIWindow2/UserList/Main/Boss/BossList/105/mob#";// 濃姬
var epp = "#fEffect/CharacterEff/1082312/0/0#"; //彩光
var boss32 = "#fUI/UIWindow2/UserList/Main/Boss/BossList/106/Icon/normal/0#"; //朱莉埃塔
var xx1  = "#fMap/MapHelper/weather/WorldRecord1/3#";

var a = 0;

let sel = npc.askMenu("#b#r" + tz1 + "" + tz1 + "" + tz0 + "" + ax + "BOSS副本傳送" + ax + "" + tz0 + "" + tz1 + "" + tz1 + "#l\r\n"+
"" + tz4 + "本服終極Boss取消裝備掉落，Boss為獨立掉落，參與擊殺Boss後的隊伍或個人會獲得該副本的抽獎箱。Boss只會掉落材料道具" + tz4 + "#l\r\n"+
"#e#k#L31#BOSS副本重置\r\n\r\n"+
            "" + tz6 + "#e#d新手Boss" + tz6 + "#l\r\n"+
			"#e#k#L1#艾菲尼亞#L2#鬧 鐘#L3#扎  昆#L4#黑  龍#l\r\n"+
			"#e#L5#品克繽 #L6#班雷昂#L7#希  拉#L8#希納斯#l\r\n"+
			"#e#L9#阿卡伊勒 #L10#鉆 機 #L27#麥格納斯（簡單）#l\r\n"+
			"#e#L28#玩具雙熊#L29#巨大蝙蝠魔#L30#卡熊#l\r\n\r\n"+
			"" + tz6 + "#e#b英雄Boss" + tz6 + "#l\r\n"+
			"#e#k#L11#濃 姬 #L12#森蘭丸  #L13#烏魯斯  #L14#貝勒德#l\r\n"+
			"#e#L15#火焰狼 #L16#魯塔比斯#L17#麥格納斯#L18#桃樂絲#l\r\n\r\n"+
			"" + tz6 + "#e#r終極Boss" + tz6 + "#l\r\n"+
			"#e#k#L19#斯 烏 #L20#戴米安#L21#露西德  #L22#威 爾#l\r\n"+
			"#e#k#L23#真希拉#L24#墩凱爾#L25#至暗魔晶#L26#黑魔法師#l\r\n\r\n"+
			"\t\t"+ tz0 +""+ tz0 +""+ tz0 +"\r\n\r\n"+
		    "\r\n");

switch (sel) {
         
            case 1:
				player.changeMap(300030300);//妖精女王：艾菲尼婭
                break;
            case 2:
                player.changeMap(220080000);//鬧鐘
                break;
            case 3:                
				player.changeMap(211042300);//扎昆
                break;
            case 4:
				player.changeMap(240050400);//黑龍王
                break;
            case 5:
				player.changeMap(270050000); //品克繽
                break;
            case 6:
				player.changeMap(211070000);//獅子王
                break;
            case 7:
				player.changeMap(262030000);//希拉
                break;
            case 8:
				player.changeMap(271040000); //希納斯
                break;
			case 9:
				player.changeMap(272020110); //阿卡伊勒
                break;
			case 10:
				player.changeMap(703020000); //鉆機
                break;
			case 11:
				player.changeMap(811000999); //濃姬 有箱子，隱藏了，後期做
                break;
			case 12:
				player.changeMap(807300100); //森蘭丸
                break;
            case 13:
				player.changeMap(970072200); //烏露斯 箱子2430890 沒做獎勵
                break;
			case 14:
				player.changeMap(863010000); //貝勒德 掉幣 已修改 
                break;
			case 15:
				player.changeMap(993000600); //火焰狼 
                break;
			case 16:
				player.changeMap(105200000);//四大天王
                break
			case 17:
				player.changeMap(401060000);//老麥 有箱子，隱藏了，後期做 箱子2430891
                break
			case 18:
				player.changeMap(992000000);//桃樂絲  箱子 2430892（沒做獎勵）
                break
			case 19:
				player.changeMap(350060300);//斯烏 沒箱子， 改爆物
                break
			case 20:
				player.changeMap(105300303);//戴米安  箱子2430893
                break	
			case 21:
				player.changeMap(450004000);//露西德 箱子2430894
                break
            case 22:
                player.changeMap(450007240);//威爾 箱子2430945
                break	
            case 23:
                player.changeMap(450011990);//進階希拉  箱子2430946
                break
			case 24:
				player.changeMap(450012200);//墩凱爾  箱子2430987
                break
			case 25:
				player.changeMap(450009301);//至暗魔晶  箱子2430988
                break
			case 26:
                player.changeMap(450012500);//黑魔法師  箱子2439919
                break		
            case 27:
                player.changeMap(401060399);//老麥簡單  沒做爆物
                break
			case 28:
                player.changeMap(222130200);//玩具雙熊  沒腳本
                break
			case 29:
                player.changeMap(105100100);//巨大蝙蝠魔  沒做爆物
                break
			case 30:
                player.changeMap(221030900);//卡熊  沒做爆物
                break
			case 31:
               player.runScript("fbcz");
                break
				
}    
