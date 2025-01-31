/* 圓夢谷 TMS 237 萬能菜單 */
var status = -1
var txt;
/*------------------------- 表情符號 -------------------------*/
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var f2 = "#fUI/CashShop/CSBeauty/hairColor/Enable/2#"
var f3 = "#fUI/CashShop/CSBeauty/hairColor/Enable/3#"
var f4 = "#fUI/CashShop/CSBeauty/hairColor/Enable/4#"
var f5 = "#fUI/CashShop/CSBeauty/hairColor/Enable/5#"
var a10 = "#fEffect/ItemEff.img/1102919/effect/default/0#" //小黄鸭车0-7
var f1 = "#fUI/CashShop/CSBeauty/hairColor/Enable/0#"
var qq1 = "#fUI/EventShop/adventureShop/GradeBuyer/0#"
var s1 = "#fUI/CashShop/CSBeauty/hairColor/Disable/0#"
var a23 = "#fEffect/ItemEff.img/1005254/effect/default/4#" //蓝色中小星星
txt = "#fs21##r#e你好,這裡是轉職中心!!!\r\n\r\n#fs13#";

txt += "#fs16##L1##b" + a23 + "轉職中心#l  #L2#" + a23 + "一鍵五轉#l    #L5#" + a23 + "核心商店#l\r\n\r\n";//#L5#" + a23 + "核心商店#l
txt += "#fs16##L3##b" + a23 + "一鍵滿技能#l#L7#" + a23 + "一鍵補學技能#l#L4#" + a23 + "強制副手裝備#l\r\n\r\n";
txt += "#L8#" + a23 + "自由轉職#l  #L9#" + a23 + "購買轉職硬幣[400餘額幣一天一次]#l\r\n";

txt += "#L10#" + a23 + "神之子任務解除#l\r\n";

let selection = npc.askMenuA(txt, true);

switch (selection) {
    case 1:
        player.runScript("轉職中心");
        break;
    case 2:
        player.runScript("五轉");
        break;
    case 3:
        player.runScript("滿技能");
        break;
    case 4:
        player.runScript("裝備副手");
        break;
    case 5:
        player.runScript("核心商店");
        break;
    case 6:
        player.runScript("寵物裝備轉職");
        break;
    case 7:
        player.runScript("一鍵補學技能");
        break;
	case 8:
        player.runScript("自由轉職");
        break;
		case 10:
if(player.getJob()==10112){
	    player.completeQuest(40900, 0);
		player.completeQuest(40901, 0);
		player.completeQuest(40902, 0);
		player.completeQuest(40903, 0);
		player.completeQuest(40904, 0);
		player.completeQuest(40905, 0);
		player.completeQuest(40910, 0);
		player.completeQuest(40911, 0);
		player.completeQuest(40912, 0);
		player.completeQuest(40913, 0);
		player.completeQuest(40914, 0);
		player.completeQuest(40920, 0);
		player.completeQuest(40921, 0);
		player.completeQuest(40922, 0);
		player.completeQuest(40923, 0);
		player.completeQuest(40924, 0);
		player.completeQuest(40930, 0);
		player.completeQuest(40931, 0);
		player.completeQuest(40932, 0);
		player.completeQuest(40933, 0);
		player.completeQuest(40934, 0);
		player.completeQuest(40940, 0);
		player.completeQuest(40941, 0);
		player.completeQuest(40942, 0);
		player.completeQuest(40943, 0);
		player.completeQuest(40944, 0);
		player.completeQuest(40950, 0);
		player.completeQuest(40951, 0);
		player.completeQuest(40952, 0);
		player.completeQuest(40953, 0);
		player.completeQuest(40954, 0);
		player.completeQuest(40960, 0);
		player.completeQuest(40961, 0);
		player.completeQuest(40962, 0);
		player.completeQuest(40963, 0);
		player.completeQuest(40964, 0);
		player.completeQuest(40970, 0);
		player.completeQuest(40971, 0);
		player.completeQuest(40972, 0);
		player.completeQuest(40973, 0);
		player.completeQuest(40974, 0);
		player.completeQuest(40980, 0);
		player.completeQuest(6616, 0);
	    player.completeQuest(14110, 0);
		player.completeQuest(14111, 0);
		player.completeQuest(14112, 0);
		player.completeQuest(14113, 0);
		player.completeQuest(14114, 0);
		player.completeQuest(14115, 0);
		player.completeQuest(14116, 0);
		player.completeQuest(14117, 0);
		player.completeQuest(15970, 0);
		player.completeQuest(16519, 0);
		player.completeQuest(32019, 0);
		player.completeQuest(40905, 0);
		npc.say("#fs18##e#b#r[神之子]#b任務全通完成!");
		break;
		}else{
		npc.say("你是神之子嗎?");
	}        	
		    case 9:
    if (!player.hasItem(4009411, 400)) {
        npc.say("#fs16##b#e#v4009411#不足，無法購買");
    } else if(player.getEventValue("自由專職箱") > 0) {
        npc.say("#fs16##b#e今日已購買,請明天在來!!!");
}else{
        player.loseItem(4009411, 400);
        player.gainItem(4310086, 1);
        player.addEventValue("自由專職箱", 1, 1)
}

        break;
}
