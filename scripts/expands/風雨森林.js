let minPlayers = 1;
let maxPlayers = 6;
let minLevel = [200];
let maxLevel = [300];
let maxenter = [1];

let BossName = "風雨森林";
let PQLog = ["風雨森林"];
let event = ["風雨森林"];
let onlyOne = true;
let warn = true;
let checkLimit = 1000000;

var XC01 = "#fUI/NameTag.img/medal/175/w#";// - BURNING(左)
var XC02 = "#fUI/NameTag.img/medal/175/c#";// - BURNING(中)
var XC03 = "#fUI/NameTag.img/medal/175/e#";// - BURNING(右)
var Icon = [
	Array("星星", "#fEtc/ChatEmoticon/expression/1/0#"),
	Array("彩虹", "#fEffect/ItemEff/1102877/effect/default/0#"),
	Array("猫咪", "#fUI/NameTag/190/w#"),
	Array("猫咪", "#fUI/NameTag/190/c#"),
	Array("猫咪", "#fUI/NameTag/190/e#"),
	Array("兔子", "#fEffect/CharacterEff/1112960/0/1#"),
	Array("星空", "#fUI/GuildMark/BackGround/00001013/16#"),
	Array("骷髅", "#fUI/GuildMark/Mark/Etc/00009000/15#"),
	Array("红心", "#fUI/GuildMark/Mark/Etc/00009001/1#"),
	Array("白脸", "#fUI/GuildMark/Mark/Etc/00009002/4#"),
	Array("皇冠", "#fUI/GuildMark/Mark/Etc/00009004/3#"),
	Array("红灯", "#fUI/GuildMark/Mark/Etc/00009020/1#"),
	Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/11#"),
	Array("水滴", "#fEffect/BasicEff/MainNotice/Gamsper/Notify/4#"),
	Array("红旗", "#fEffect/BasicEff/MainNotice/BlockBuster/Default/3#"),
	Array("红心", "#fEffect/CharacterEff/1112905/0/0#"),
	Array("云朵", "#fEffect/ItemEff/1102877/effect/default/1#"),
	Array("翅膀", "#fEffect/ItemEff/1102874/effect/ladder/0#"),
	Array("箭矢", "#fEffect/ItemEff/1112003/0/2#"),
	Array("黄鸭", "#fEffect/ItemEff/1004122/effect/default/8#"),
	Array("红点", "#fEffect/CharacterEff/1082588/0/0#"), //红点
	Array("蓝点", "#fEffect/CharacterEff/1082588/3/0#"),  //蓝点
	Array("黄星", "#fEffect/CharacterEff/1112924/0/0#"), //黄星
	Array("蓝星", "#fEffect/CharacterEff/1112925/0/0#"), //蓝星
	Array("红星", "#fEffect/CharacterEff/1112926/0/0#"), //红星
	Array("黄星星", "#fUI/UIPVP.img/MiniMapIcon/star#"),  //黄星星
	Array("星星", "#fEtc/ChatEmoticon/expression/1/0#"),
	Array("兔子", "#fEffect/CharacterEff/1112960/0/1#"),
	Array("星空", "#fUI/GuildMark/BackGround/00001013/16#"),
	Array("骷髅", "#fUI/GuildMark/Mark/Etc/00009000/15#"),
	Array("红心", "#fUI/GuildMark/Mark/Etc/00009001/1#"),
	Array("白脸", "#fUI/GuildMark/Mark/Etc/00009002/4#"),
	Array("皇冠", "#fUI/GuildMark/Mark/Etc/00009004/3#"),
	Array("红灯", "#fUI/GuildMark/Mark/Etc/00009020/1#"),
	Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/11#"),
	Array("水滴", "#fEffect/BasicEff/MainNotice/Gamsper/Notify/4#"),
	Array("红旗", "#fEffect/BasicEff/MainNotice/BlockBuster/Default/3#"),
	Array("红心", "#fEffect/CharacterEff/1112905/0/0#"),
	Array("云朵", "#fEffect/ItemEff/1102877/effect/default/1#"),
	Array("翅膀", "#fEffect/ItemEff/1102874/effect/ladder/0#"),
	Array("箭矢", "#fEffect/ItemEff/1112003/0/2#"),
	Array("黄鸭", "#fEffect/ItemEff/1004122/effect/default/8#"),
	Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/10#"),
	Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/2#"),
	Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/3#"),
	Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/4#"),
	Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/5#"),
	Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/6#"),
	Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/7#"),
	Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/8#"),
	Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/9#"),
	Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/10#"),
	Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/11#"),
	Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/12#"),
	Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/13#"),
	Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/14#"),
	Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/15#"),
	Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/16#"),
	Array("条件", "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"),
	Array("信封", "#fUI/GuildMark/BackGround/00001003/5#"),
	Array("信封", "#fUI/GuildMark/BackGround/00001003/12#"),
	Array("钻石", "#fUI/NameTag/medal/556/w#"),
	Array("钻石", "#fUI/NameTag/medal/556/c#"),
	Array("钻石", "#fUI/NameTag/medal/556/e#"),
	Array("三角", "#fUI/piggyBarMinigame/crunch/5#"),
	Array("蓝点", "#fUI/piggyBarMinigame/crunch/1#"),
	Array("女神", "#fUI/RunnerGame/RunnerGameUI/Effect/ItemEffect_Protect1/3#"),
	Array("拇指", "#fUI/NameTag/medal/10/w#"),
	Array("拇指", "#fUI/NameTag/medal/10/c#"),
	Array("拇指", "#fUI/NameTag/medal/10/e#"),
	Array("成功", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/dear/7#"),
	Array("失败", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/fail/7#"),
	Array("星星", "#fUI/UIWindowGL/FeedbackSystem/Star#"),
	Array("蓝星", "#fEffect/CharacterEff/1003393/1/0#"),
	Array("花朵", "#fEffect/CharacterEff/1050334/2/0#"),
	Array("蓝星", "#fEffect/CharacterEff/1003393/0/0#"),
	Array("淡星", "#fEffect/CharacterEff/moveRandomSprayEff/eunwol_seal/effect/0/2#"),
	Array("花朵", "#fEffect/CharacterEff/1051294/1/0#"),
	Array("花朵", "#fEffect/CharacterEff/1051296/1/0#"),
	Array("金菇", "#fUI/NameTag/medal/74/w#"),
	Array("金菇", "#fUI/NameTag/medal/74/c#"),
	Array("金菇", "#fUI/NameTag/medal/74/e#"),
	Array("蛋糕", "#fUI/NameTag/medal/758/w#"),
	Array("蛋糕", "#fUI/NameTag/medal/758/c#"),
	Array("蛋糕", "#fUI/NameTag/medal/758/e#"),
	Array("胡子", "#fUI/NameTag/124/w#"),
	Array("胡子", "#fUI/NameTag/124/c#"),
	Array("胡子", "#fUI/NameTag/124/e#"),
	Array("帽子", "#fUI/NameTag/nick/312/w#"),
	Array("帽子", "#fUI/NameTag/nick/312/c#"),
	Array("帽子", "#fUI/NameTag/nick/312/e#"),
	Array("圣诞", "#fUI/NameTag/medal/728/w#"),
	Array("圣诞", "#fUI/NameTag/medal/728/c#"),
	Array("圣诞", "#fUI/NameTag/medal/728/e#"),
	Array("红钻", "#fUI/UIWindowPL/DuoEvent/Maximum/DuoInfo/icon/GoodF/0#"),
	Array("王冠", "#fUI/NameTag/medal/468/w#"),
	Array("王冠", "#fUI/NameTag/medal/468/c#"),
	Array("王冠", "#fUI/NameTag/medal/468/e#"),
	Array("确认", "#fUI/CashShop.img/CSCoupon/BtOK/normal/0#"),
	Array("幽灵", "#fEffect/ItemEff/1004738/effect/ladder/0#"),
	Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/7#"),
	Array("幽灵", "#fEffect/ItemEff/1004738/effect/walk1/3#"),
	Array("幽灵", "#fEffect/ItemEff/1004738/effect/jump/0#"),
	Array("音符", "#fEffect/ItemEff/1112811/0/0#"),
	Array("红心", "#fEffect/CharacterEff/1112905/0/0#"),
	Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/0#"),
	Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/1#"),
	Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/2#"),
	Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/3#"),
	Array("金左指标", "#fUI/UIWindow/MonsterBook/arrowLeft/normal/0#"),
	Array("金右指标", "#fUI/UIWindow/MonsterBook/arrowRight/normal/0#"),
	Array("简单", "#fEffect/ItemEff/1102877/effect/default/0#")
];
var itemList = Array(
	//通用心臟
	Array(1662172, 1000, 1, 0),	//野花精靈機器人
	Array(1662171, 1000, 1, 0),	//層層貓貓蟲咖波機器人
	Array(1662175, 1000, 1, 0),	//超級巨星皮卡啾機器人
	Array(1662168, 1000, 1, 0),	//溫莉機器人
	Array(1662173, 1000, 1, 0),	//姆嗚機器人
	Array(1662167, 1000, 1, 0),	//石之精靈機器人
	Array(1662114, 10000, 1, 0),	//麥吉機器人
	Array(1662134, 10000, 1, 0),	//明日香設計機器人
	Array(1662135, 10000, 1, 0),	//綾波零設計機器人
	Array(1662030, 10000, 1, 0),	//戰國時代機器人(男)
	Array(1662031, 10000, 1, 0),	//戰國時代機器人(女)
	Array(1662035, 10000, 1, 0),	//神之子阿爾法機器人
	Array(1662036, 10000, 1, 0),	//神之子蓓塔機器人
	Array(1662039, 10000, 1, 0),	//殺人鯨機器人
	Array(1662041, 10000, 1, 0),	//萬聖節裝飾
	Array(1662043, 10000, 1, 0),	//隱月機器人(男)
	Array(1662044, 10000, 1, 0),	//隱月機器人(女)
	Array(1662046, 10000, 1, 0),	//姆勒姆勒機器人
	Array(1662053, 5000, 1, 0),	//史烏機器人
	Array(1662064, 10000, 1, 0),	//那因哈特機器人(男)
	Array(1662065, 10000, 1, 0),	//伊卡勒特機器人(男)
	Array(1662066, 10000, 1, 0),	//西格諾斯機器人(女)
	Array(1662067, 10000, 1, 0),	//伊麗娜機器人(女)
	Array(1662077, 10000, 1, 0),	//涼爽機器人
	Array(1662082, 10000, 1, 0),	//妖精機器人(男)
	Array(1662083, 10000, 1, 0),	//妖精機器人(女)
	Array(1662088, 5000, 1, 0),	//戴米安機器人
	Array(1662089, 5000, 1, 0),	//愛麗西亞機器人
	Array(1662090, 10000, 1, 0),	//舒班尼機器人
	Array(1662091, 10000, 1, 0),	//珍博士機器人
	Array(1662107, 10000, 1, 0),	//夢布朗機器人
	Array(1662108, 10000, 1, 0),	//布丁機器人
	Array(1662109, 10000, 1, 0),	//秀機器人
	Array(1662110, 10000, 1, 0),	//派伊機器人
	Array(1662111, 5000, 1, 0),	//露希妲機器人
	Array(1662115, 10000, 1, 0),	//嬌小機器人(男)
	Array(1662116, 10000, 1, 0),	//嬌小機器人(女)
	Array(1662125, 10000, 1, 0),	//妖精機器人(男)
	Array(1662126, 10000, 1, 0),	//妖精機器人(女)
	Array(1662127, 10000, 1, 0),	//閃亮蝴蝶機器人(男)
	Array(1662128, 10000, 1, 0),	//閃亮蝴蝶機器人(女)
	Array(1662130, 10000, 1, 0),	//死亡機器人(男)
	Array(1662131, 10000, 1, 0),	//死亡機器人(女)
	Array(1662139, 10000, 1, 0),	//糖果機器人
	Array(1662140, 5000, 1, 0),	//真‧希拉機器人
	Array(1662141, 10000, 1, 0),	//聯盟司令官西格諾斯機器人
	Array(1662145, 1000, 1, 0),	//武公機器人
	Array(1662147, 5000, 1, 0),	//愛麗西亞機器人
	Array(1662148, 5000, 1, 0),	//威爾機器人
	Array(1662149, 5000, 1, 0),	//新復古愛麗西亞機器人
	Array(1662150, 5000, 1, 0),	//新復古露希妲機器人
	Array(1662151, 5000, 1, 0),	//新復古戴米安機器人
	Array(1662152, 5000, 1, 0),	//賽蓮機器人
	Array(1662154, 10000, 1, 0),	//幽靡機器人
	Array(1662155, 10000, 1, 0),	//萬聖貓機器人
	Array(1662156, 10000, 1, 0),	//拉尼亞機器人
	Array(1662160, 10000, 1, 0),	//萊爾普機器人
	Array(1662161, 10000, 1, 0),	//洛尼機器人
	Array(1662162, 10000, 1, 0),	//米斯媞機器人
	Array(1662163, 10000, 1, 0),	//梅利爾機器人
	Array(1662164, 10000, 1, 0),	//時間機器人(男)
	Array(1662165, 10000, 1, 0),	//時間機器人(女)
	Array(1662166, 10000, 1, 0),	//莉琳機器人
	Array(1662169, 10000, 1, 0),	//露奈機器人
	Array(1662170, 10000, 1, 0),	//里奧機器人
	Array(1666000, 10000, 1, 0),	//女僕機器人

	/*
	1666002,//初音未來機器人
	1666003,//鏡音鈴機器人
	1666004,//鏡音連機器人
	1666005,//KAITO機器人
	1662136,//初號機造型機器人
	1662112,//拉姆機器人
	1662113,//雷姆機器人
	/*
	/*
	1662117,//華麗機器人瑪倫
	1662118,//華麗機器人艾波麗
	1662119,//華麗機器人史嘉莉
	1662120,//華麗機器人安柏
	1662121,//華麗機器人希弗
	1662122,//華麗機器人波隆茲
	1662123,//華麗機器人托弗
	1662123,//華麗機器人京傑
	1672078,//華麗機器人專用心臟


	1662174,//菇菇機器人
	1672091,//菇菇機器人專用心臟
	*/
);


var text = "";
//text += "\t\t\t     #fs32##b#e#fc0xFFF0F90A#【" + BossName + "】\r\n";
//text += ""+XC01;
text = "#fs21##e#r[風雨森林]\r\n";

for (var i = 0; i <= 240; i++) {
	//text += XC02;
};
//text += XC03 + "\r\n"
text += "#b#fs16#";
text += "每日次數:[" + player.getEventValue(PQLog) + "/" + maxenter + "] \r\n";
text += "#b#e每關BOSS掉落#r1-70#b個#v4034044#\r\n\r\n";
text += "";
text += "";
text += "#fs11#\t     ";
for (var i = 0; i < PQLog.length; i++) {
	text += "\t#g#fs16##r#L" + i + "#進入" + PQLog[i] + "#l  #L3#楓點購買HP#l #L4#楓點購買MP#l\r\n\r\n";
	//text += "#r#L3#楓點購買HP#l #L4#楓點購買MP#l ";

	text += "\t#r#L5#使用#v4034044#增加[HP/MP]#l #L66##e使用#v2633609#重載副本#l\r\n\r\n";
}

let sel = npc.askMenuA(text, true);
//let sel = npc.askMenuA("" + text,true);
if (sel == 0) {
	if (party == null || player.getId() != party.getLeader()) {
		npc.sayNextS("#fs18##e#b\t  請玩家先創建隊伍\r\n\t #fs14#此副本接受#r[" + minPlayers + "-" + maxPlayers + "]#b人的隊伍\r\n\t  並且等級在#r[" + minLevel[sel] + "-" + maxLevel[sel] + "]#b之間\r\n\t   讓你的隊長和我對話吧!", true);
	} else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
		npc.sayNextS("#fs17##e#b你需要有一個#r" + minPlayers + "-" + maxPlayers + "#b人的隊伍.!", true);
	} else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < party.getMembersCount(map.getId(), 1, 300)) {
		npc.sayNextS("#fs17##e#b你隊員的等級要在#r[" + minLevel[sel] + "-" + maxLevel[sel] + "]#b之間!", true);
	} else if (party.numberOfMembersInChannel() < party.getMembersCount()) {
		npc.sayNextS("#fs17##e#b好像你有隊員在其他地方,請把隊員都召集到這裡!");
	} else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
		npc.sayNextS("#fs17##e#b已經有隊伍在進行了,請更換其他頻道嘗試。", true);
	}
	if (warn) {
		//進場通知
		//npc.broadcastPlayerNotice(49,"【"+BossName+"】 " + player.getName() + " 帶領成員進入！！");

	}
}


if (sel == 1) {
	var itemListui = [];
	txt = "\r\n分解條件: 強化+0或沒強化 \r\n";
	txt += "裝備欄位前32格\r\n";
	txt += "以下機器人將被分解: \r\n";

	for (let i = 1; i < 32; i++) {
		equip = player.getInventorySlot(1, i);
		for (let j = 0; j < itemList.length; j++) {//循環檢測
			if (equip != null) {
				if (equip.getDataId() == itemList[j][0]) {
					itemListui.push(equip.getDataId());
				}
			}
		}
	}
	for (let i = 0; i < itemListui.length; i++) {
		txt += "#b#i" + itemListui[i] + "#";
	}
	txt += "\r\n#b#fs16#你可以獲得: \r\n#r" + itemListui.length + " #b個#i4001489#";
	var sel1 = npc.askYesNo(txt);
	if (sel1 == 1) {
		conut = 0;
		for (let i = 1; i < 32; i++) {
			equip = player.getInventorySlot(1, i);
			open = false;
			if (equip != null) {
				for (let j = 0; j < itemList.length; j++) {//循環檢測
					if (equip.getDataId() == itemList[j][0]) {
						open = true;
					}
				}
				if (equip.getTitle() == "" && open || equip.getTitle() == "強化+0" && open) {//條件 equip沒抬頭 && open為開
					conut += 1;
					player.loseInvSlot(1, i);
				}
			}
		}
		if (conut == 0) {
			npc.say("#fs16#戰鬥機器人是不能被分解的\r\n只有風雨森林獲得的才可被分解\r\n#r!!!32格內沒有放置機器人");
		} else {
			player.gainItem(4001489, conut);
		}
	} else {
		npc.say("#fs16#好吧下次再來~");
	}
}


if (sel == 2) {

	txt = "#b說明:#k\r\n";
	// txt += " 未新增";
	for (var i = 0; i < itemList.length; i++) {
		txt += "#v" + itemList[i][0] + "##z" + itemList[i][0] + "#\r\n";
	}

	npc.sayS(txt, true);
}
if (sel == 66) {
	var bossevent = Array("風雨森林");
	if (player.hasItem(2633609, 1)) {
		for (var i = 0; i < bossevent.length; i++) {
			player.loseItem(2633609, 1)
			player.addPQLog(bossevent[i], -1, 1);
			player.addEventValue(bossevent[i], -1, 1);
		}
		player.addEventValue("每日BOSS重置", 1, 1);
		npc.broadcastPlayerNotice(7, "[副本系統]  玩家 ★★★ " + player.getName() + " ★★★ 重置" + BossName + "副本");
		npc.say("重置成功");
	} else {
		npc.say("你重置物品不足");
	}

} else if (sel == 3) {
	text = "#fs16##e#b300萬楓點:#r1500HP#b\r\n\r\n剩餘可購買次數:[" + (40 - player.getEventValue("楓點HPMP")) + "]";
	let YN = npc.askNumber("" + text + "\r\n#b請輸入兌換數量：", 1, 1, 40);
	if (player.getCashShopCurrency(2) < YN * 3000000) {
		npc.say("#fs16##b#e楓點不足，無法購買");
	} else if ((40 - player.getEventValue("楓點HPMP")) < YN) {
		npc.say("#fs16##b#e次數不足，無法購買");
	} else {
		player.addEventValue("楓點HPMP", YN, 1);
		player.modifyCashShopCurrency(2, -YN * 3000000);
		player.increaseMaxHp(YN * 1500);
		player.showSystemMessage("血量增加 " + YN * 1500 + " 了");
	}
} else if (sel == 4) {
	text = "#fs16##e#b25萬楓點:#r100MP#b\r\n\r\n剩餘可購買次數:[" + (40 - player.getEventValue("楓點HPMP")) + "]";
	let YN = npc.askNumber("" + text + "\r\n#b請輸入兌換數量：", 1, 1, 40);
	if (player.getCashShopCurrency(2) < YN * 250000) {
		npc.say("#fs16##b#e楓點不足，無法購買");
	} else if ((40 - player.getEventValue("楓點HPMP")) < YN) {
		npc.say("#fs16##b#e次數不足，無法購買");
	} else {
		player.addEventValue("楓點HPMP", YN, 1);
		player.modifyCashShopCurrency(2, -YN * 250000);
		player.increaseMaxMp(YN * 100);
		player.showSystemMessage("魔量增加 " + YN * 100 + " 了");
	}
} else if (sel == 5) {
	player.runScript("洗血");
} else if (sel == 6) {
	player.runScript("MDAY繼承");
} else if (sel == 7) {
	player.runScript("MDAY會員強化");
}
