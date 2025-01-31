/*  This is mada by dgms    
 *  This source is made by Funms Team
 *  功能：世界傳送
 *  @Author dgms 
 */

var isopenvip = false;
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var ax = "#fEffect/CharacterEff/1112902/0/1#";  //藍色愛心
var icon ="#fEffect/CharacterEff/1112902/0/0#"; 
var xxx1 = "#fUI/ChatBalloon/pet/16/ne#"; //星系
var ttt7 = "#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//美化會員
var xxx = "#fUI/ChatBalloon/pet/16/nw#"; //星系
var yun2 = "#fUI/UIWindow/Quest/icon8/0#";//藍指標
var eff = "#fCharacter/Weapon/01702523.img/48/straight/0/effect#"; //彩虹帶
var eff = "#fEffect/CharacterEff/1112905/0/1#"; //
var xg = "#fEffect/CharacterEff/1102355/3/0#"; 
//"#fUI/Basic.img/BtMin2/normal/0#";
var townmaps = Array(
        104000000,
		104000000,
		200000301,
        910001000,
		209000000,
		990000000,
		931000500,
        104000000,
        101000000,
        102000000,
        103000000,
        120000000,
        105000000,
        200000000,
        211000000,
        450006130,
        230000000,
        224000000,
        220000000,
        //701000000,
        250000000,
        //702000000,
        260000000,
        //600000000,
        240000000,
        261000000,
        //221000000,
        251000000,
        300000000,
        270000000,
        //702100000,
        104000000,
        130000000,
		809000201,
		802000101,
        310000000);
var monstermaps = Array(
		Array(693000001, "適合 30級以上,掉物地圖"),
		Array(100010100, "適合 10級 ~ 15級 的玩家"),
        Array(101020100, "適合 10級 ~ 15級 的玩家"),
        Array(100040400, "適合 15級 ~ 30級 的玩家"),
        Array(103020420, "適合 30級 ~ 50級 的玩家"),  
		Array(102030400, "適合 50級 ~ 65級 的玩家"),
        Array(600020300, "適合 70級 ~ 90級 的玩家"),
        Array(260020600, "適合 90級 ~ 100級 的玩家"),
        Array(300010400, "適合 100級 ~ 110級 的玩家"),
        Array(251010402, "適合 110級 ~ 160級 的玩家"),
        Array(270010400, "適合 140級 ~ 150級 的玩家"),
        Array(271030600, "適合 170級 ~ 190級 的玩家"),
	    Array(273010000, "適合 190級 ~ 200級 的玩家"),
        Array(450002019, "適合 200級 ~ 220級 的玩家 需要神秘力量"),
	    Array(450005500, "適合220級~230級,需要神秘力量"),
		Array(450006420, "適合235級~240級,需要神秘力量"),
		Array(450007230, "適合245級~250級,需要神秘力量"),
        Array(261010102, "刷露水"),
        Array(250020000, "刷稻草人")
        );

var lmaps = Array(500000000,
        //702000000,
        801000000,
        600000000,
        //540000000,
        104000000,
		807000000,
        //701000000,
        //702100000,
        680000000,
		109080010,
		219000000,
		899000000,
		800023010,
		//104000000,
        921110000,
		993010000,
		//109010000,
        701210000
        //550000000
        );//旅游地圖部分

var tiaotiaomaps = Array(
        Array(211042300, "點擊NPC進入火山跳跳 "),
        Array(109040001, ""),
        Array(910130000, "忍苦樹林1-5  "),
		Array(910530000, "韌性森林1-7  "),
        Array(100000200, "射手跳跳 "),
		Array(220000000, "玩具跳跳 "),		
        Array(910360000, "地鐵B1 無"),
        Array(910360100, "地鐵B2 "),
        Array(910360200, "地鐵B3 ")
        );

var meizhoubaomaps = Array(
        Array(951000000, "~"),
        Array(271030400, ""),
        //Array(240091400, "掉落羽毛 9周年"),
		//Array(271030300, "掉落征服者 9周年 雪花"),
        Array(271030200, ""),
        Array(240090300, ""),
		Array(200010110, ""),
	    //Array(271000210, "掉落羽毛"),
		//Array(271030500, "掉落羽毛"),	
		//Array(271030510, "掉落羽毛"),
		//Array(271030520, "掉落雪花"),	
		//Array(271030530, "掉落雪花"),
		//Array(271030540, "掉落雪花"),	
        Array(310040400, ""),
        Array(104010100, "")
        );

var zhuandanmaps = Array(
     Array(100000104, "皇家理發"),
	 Array(100000103, "皇家整容"),
	 Array(910000018, "18D"),
	 Array(809030000, "轉蛋地圖"),
	 Array(970000000, "節日攝影棚")
        );

var selects = 0;
var MapType;


        if (map.getId() == 180000001) {
		 npc.say("很遺憾，您因為違反用戶守則被禁止游戲活動，如有異議請聯系管理員.")  
        } else {
            let selection = npc.askMenu("#n盛夏櫻花谷傳送中心\r\n- - - - - - - - - - - - - -\r\n#d150級之前可去#r練級地圖-暖春之國#d中升級，效率超級高#d\r\n或者可以去#r練級地圖-五岔洞穴#d找大佬尋求幫助\r\n" +eff + "為了緩解市場人數過多，我們將射手村也設為了泡點地圖\r\n" +eff + "各位玩家可去射手村撩妹搞基順便泡點\r\n#b#L0# "+ttt7+"城鎮地圖#b#L1# "+ttt7+"練級地圖\r\n#b#L2# "+ttt7+"旅游地圖#b#L3# "+ttt7+"跳跳地圖(需要210級)\r\n#b#L5# "+ttt7+"娛樂地圖#b#L4# "+ttt7+"搬磚地圖");

            var text = head + "請選擇你要接連的地方：\r\n#b";
            switch (selection) {
                case 0:
                    for (var i = 0; i < townmaps.length; i++) {
                        text += "#L" + i + "# " + icon + " #m" + townmaps[i] + "# (金幣  1)\r\n";
                    }
                    MapType = 0
                    needMoney = true;
                    break;
                case 1:
                    for (var i = 0; i < monstermaps.length; i++) {
                        text += "#L" + i + "# " + icon + " #m" + monstermaps[i][0] + "# (" + monstermaps[i][1] + ")\r\n";
                    }
                    MapType = 1
                    break;
                case 2:
                    for (var i = 0; i < lmaps.length; i++) {
                        text += "#L" + i + "# " + icon + " #m" + lmaps[i] + "#  (金幣  1)\r\n";
                    }
                    MapType = 2
                    needMoney = true;
                    break;
                case 3:
                    for (var i = 0; i < tiaotiaomaps.length; i++) {
                        text += "#L" + i + "# " + icon + " #m" + tiaotiaomaps[i] + "# (" + tiaotiaomaps[i][1] + ")\r\n";
                    }
                    MapType = 3;
                    needMoney = true;
                    break;
                case 4:
                    for (var i = 0; i < meizhoubaomaps.length; i++) {
                        text += "#L" + i + "# " + icon + " #m" + meizhoubaomaps[i] + "# (" + meizhoubaomaps[i][1] + ")\r\n";
                    }
                    MapType = 4;
                    needMoney = true;
                    break;
				case 5:
                    for (var i = 0; i < zhuandanmaps.length; i++) {
                        text += "#L" + i + "# " + icon + " #m" + zhuandanmaps[i] + "# (" + zhuandanmaps[i][1] + ")\r\n";
                    }
                    MapType = 5;
                    needMoney = true;
                    break;
            }
            selection = npc.askMenu(text);
            selects = selection;
            let yes = npc.askYesNo(head + "在這裡的事情辦完了嗎？確定要去你像要去的地方了嗎？");
			if(yes ==1){

				if (!isopenvip) {
					if (!player.hasMesos(1)) {
						npc.say(head + "對不起，你的金幣不足。\r\n需要1金幣才能進行。");
					} else {
						player.gainMesos(-1);
						warp();
					}
				}else{
					warp();
				}
			}
		 }
function warp(){
	switch (MapType) {
						case 0:
							player.changeMap(townmaps[selects]);
							break;
						case 1:
							player.changeMap(monstermaps[selects][0]);
							break;
						case 2:
							player.changeMap(lmaps[selects]);
							break;
						case 3:
							player.changeMap(tiaotiaomaps[selects][0]);
							break;
						case 4:
							player.changeMap(meizhoubaomaps[selects][0]);
							break;
						case 5:
							player.changeMap(zhuandanmaps[selects][0]);
							break;

					}
}