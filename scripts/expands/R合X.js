
var status = -1
var txt;
/*------------------------- 表情符號 -------------------------*/
var SR1 = "#fUI/SoulUI.img/DungeonEffect/2350012/2#"; //最上面的
var SR2 = "#fUI/SoulUI.img/DungeonEffect/2350012/4#"; //最上面的
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/5/icon#"; //最上面的
var SR4 = "#fUI/SoulUI.img/DungeonEffect/2350012/3#"; //最上面的
var SR5 = "#fEffect/EffectPL.img/Beautyroid/connect_end/0"; //區隔條
var SR6 = "#fEffect/EventEffect.img/typingDefense/balloonIcon/blind/0#"; //最上面的星星-6
var SR7 = "#fEffect/CharacterEff/1050334/1/2#"; //最上面的星星-7
var SR8 = "#fEffect/CharacterEff/1050334/1/3#"; //最上面的星星-8
var SR9 = "#fEffect/CharacterEff/1050334/2/0#"; //最上面的星星-9
var SR10 = "#fEffect/CharacterEff/1050334/2/1#"; //最上面的星星-10
var SR11 = "#fEffect/CharacterEff/1050334/2/2#"; //最上面的星星-11
var SR12 = "#fEffect/CharacterEff/1050334/2/3#"; //最上面的星星-12
var GC2 = "#fEffect/CharacterEff/1005267/4/0#"; //"+z+"//小選項用
var XD0 = "#fEffect/CharacterEff/1051366/0/0#";
var GC1 = "#fEffect/CharacterEff/1082700/2/0#";
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
let itt = Array(
	Array("2613012"),
	Array("2613012"),
	Array("2613013"),
	Array("2612019"),
	Array("2612020"),
	Array("2616000"),
	Array("2616001"),
	Array("2615005"),
	Array("2615006"),
	Array("2048812"),
	Array("2048813")//r




);
var txt;
var zx24 = "#fMap/MapHelper.img/weather/nightMarket/5#";
var qq1 = "#fUI/EventShop/adventureShop/GradeBuyer/0#"
var qq2 = "#fUI/EventShop/adventureShop/GradeBuyer/1#"
var qq3 = "#fUI/EventShop/adventureShop/GradeBuyer/2#"
var qq4 = "#fUI/EventShop/adventureShop/GradeBuyer/3#"
var qq5 = "#fUI/EventShop/adventureShop/GradeBuyer/4#"
var qq6 = "#fUI/EventShop/adventureShop/GradeBuyer/5#"

txt = "\r\n";
txt = "#fs21##e#r你好,請選擇你需要升級的捲軸#r#n\r\n\r\n\r\n";

txt += "#fs11##b";
for (var i = 1; i < itt.length; i++) {
	txt += "#b#L" + i + "#";
	txt += "#fs16##e#b#v" + itt[i][0] + "#擁有數量[#r" + player.getAmountOfItem(itt[i][0]) + "#b]";
	//txt += "#z" + itt[i][0] + "#";
	//txt += "  擁有[#r" + player.getAmountOfItem(itt[i][0]) + "#b]#l";
	if (i % 1 == 0) {
		txt += "   ";
	}
}
let selection = npc.askMenuA(txt, true);

var item2 = 4002000;//需求道具A下
var item3 = Array(2613048, 2613049, 2612055, 2612056, 2616059, 2616060, 2615029, 2615030, 2048815, 2048816);//獲得 x捲
var seng = 60;//機率
var cash1 = 10000;

var itemb = 4002001;//需求道具b中
var itembb = Array(2612074, 2612075, 2613062, 2613063, 2615041, 2615042, 2616072, 2616073, 2048819, 2048820);//v捲
var seng1 = 30;
var cash2 = 20000;

var itemc = 4002002;//需求道具c上
var itemcc = Array(2048825, 2048826, 2612080, 2612081, 2613068, 2613069, 2616216, 2616217, 2615051, 2615052);//b捲
var seng2 = 20;
var cash3 = 50000;

var itemd = 4002003;//需求道具d上
var itemdd = Array(2048830, 2048831, 2612082, 2612083, 2613070, 2613071, 2616218, 2616219, 2615054, 2615055);//榮耀
var seng3 = 10;
var cash4 = 100000;

switch (selection) {
	case 1:
		var item1 = 2613012;//需求卷軸
		txt = "#fs36##e#b";
		txt += "擁有#v" + item1 + "##r:" + player.getAmountOfItem(item1) + " 張\r\n\r\n";
		//txt += "#b玩家持有#v" + item2 + "##r#z" + item2 + "#:[" + player.getAmountOfItem(item2) + "]\r\n";
		txt += "#b升級機率:#r" + seng + "%\r\n\r\n";
		txt += "#b消耗:#r" + cash1 + "#b楓點\r\n";
		//txt += "#b升級失敗償還#v4021032#*#r1#b個\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		//count = number - player.getAmountOfItem(item2);

		/*if (number > player.getAmountOfItem(item2)) {
			npc.say("#v" + item2 + "##z" + item2 + "# 數量不足 " + count + " 個");*/
		 if (player.getCashShopCurrency(2) <= number * cash1) {
			losecash = number * cash1 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + ((number * cash1) - player.getCashShopCurrency(2)) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.showSystemMessage("第" + i + "次,升級成功!!!");
					player.gainItem(item3[chance1], 1);
				} else {
					//player.gainItem(4021032, 1);
					//player.scriptProgressMessage("第"+i+"次嘗試升s級,升級失敗...");
					player.showSystemMessage("第" + i + "次,升級失敗!!!");
				}
				player.addEventValue("卷軸強化-R卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash1);
				player.loseItem(item2, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 2:
		var item1 = 2613013;//需求卷軸
		txt = "#fs36##e#b";
		txt += "擁有#v" + item1 + "##r:" + player.getAmountOfItem(item1) + " 張\r\n\r\n";
		//txt += "#b玩家持有#v" + item2 + "##r#z" + item2 + "#:[" + player.getAmountOfItem(item2) + "]\r\n";
		txt += "#b升級機率:#r" + seng + "%\r\n\r\n";
		txt += "#b消耗:#r" + cash1 + "#b楓點\r\n";
		//txt += "#b升級失敗償還#v4021032#*#r1#b個\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		//count = number - player.getAmountOfItem(item2);

		/*if (number > player.getAmountOfItem(item2)) {
			npc.say("#v" + item2 + "##z" + item2 + "# 數量不足 " + count + " 個");*/
		 if (player.getCashShopCurrency(2) <= number * cash1) {
			losecash = number * cash1 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + ((number * cash1) - player.getCashShopCurrency(2)) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.showSystemMessage("第" + i + "次,升級成功!!!");
					player.gainItem(item3[chance1], 1);
				} else {
					//player.gainItem(4021032, 1);
					//player.scriptProgressMessage("第"+i+"次嘗試升s級,升級失敗...");
					player.showSystemMessage("第" + i + "次,升級失敗!!!");
				}
				player.addEventValue("卷軸強化-R卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash1);
				player.loseItem(item2, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 3:
		var item1 = 2612019;//需求卷軸
		txt = "#fs36##e#b";
		txt += "擁有#v" + item1 + "##r:" + player.getAmountOfItem(item1) + " 張\r\n\r\n";
		//txt += "#b玩家持有#v" + item2 + "##r#z" + item2 + "#:[" + player.getAmountOfItem(item2) + "]\r\n";
		txt += "#b升級機率:#r" + seng + "%\r\n\r\n";
		txt += "#b消耗:#r" + cash1 + "#b楓點\r\n";
		//txt += "#b升級失敗償還#v4021032#*#r1#b個\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		//count = number - player.getAmountOfItem(item2);

		/*if (number > player.getAmountOfItem(item2)) {
			npc.say("#v" + item2 + "##z" + item2 + "# 數量不足 " + count + " 個");*/
		 if (player.getCashShopCurrency(2) <= number * cash1) {
			losecash = number * cash1 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + ((number * cash1) - player.getCashShopCurrency(2)) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.showSystemMessage("第" + i + "次,升級成功!!!");
					player.gainItem(item3[chance1], 1);
				} else {
					//player.gainItem(4021032, 1);
					//player.scriptProgressMessage("第"+i+"次嘗試升s級,升級失敗...");
					player.showSystemMessage("第" + i + "次,升級失敗!!!");
				}
				player.addEventValue("卷軸強化-R卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash1);
				player.loseItem(item2, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 4:
		var item1 = 2612020;//需求卷軸
		txt = "#fs36##e#b";
		txt += "擁有#v" + item1 + "##r:" + player.getAmountOfItem(item1) + " 張\r\n\r\n";
		//txt += "#b玩家持有#v" + item2 + "##r#z" + item2 + "#:[" + player.getAmountOfItem(item2) + "]\r\n";
		txt += "#b升級機率:#r" + seng + "%\r\n\r\n";
		txt += "#b消耗:#r" + cash1 + "#b楓點\r\n";
		//txt += "#b升級失敗償還#v4021032#*#r1#b個\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		//count = number - player.getAmountOfItem(item2);

		/*if (number > player.getAmountOfItem(item2)) {
			npc.say("#v" + item2 + "##z" + item2 + "# 數量不足 " + count + " 個");*/
		 if (player.getCashShopCurrency(2) <= number * cash1) {
			losecash = number * cash1 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + ((number * cash1) - player.getCashShopCurrency(2)) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.showSystemMessage("第" + i + "次,升級成功!!!");
					player.gainItem(item3[chance1], 1);
				} else {
					//player.gainItem(4021032, 1);
					//player.scriptProgressMessage("第"+i+"次嘗試升s級,升級失敗...");
					player.showSystemMessage("第" + i + "次,升級失敗!!!");
				}
				player.addEventValue("卷軸強化-R卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash1);
				player.loseItem(item2, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 5:
		var item1 = 2616000;//需求卷軸
		txt = "#fs36##e#b";
		txt += "擁有#v" + item1 + "##r:" + player.getAmountOfItem(item1) + " 張\r\n\r\n";
		//txt += "#b玩家持有#v" + item2 + "##r#z" + item2 + "#:[" + player.getAmountOfItem(item2) + "]\r\n";
		txt += "#b升級機率:#r" + seng + "%\r\n\r\n";
		txt += "#b消耗:#r" + cash1 + "#b楓點\r\n";
		//txt += "#b升級失敗償還#v4021032#*#r1#b個\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		//count = number - player.getAmountOfItem(item2);

		/*if (number > player.getAmountOfItem(item2)) {
			npc.say("#v" + item2 + "##z" + item2 + "# 數量不足 " + count + " 個");*/
		 if (player.getCashShopCurrency(2) <= number * cash1) {
			losecash = number * cash1 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + ((number * cash1) - player.getCashShopCurrency(2)) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.showSystemMessage("第" + i + "次,升級成功!!!");
					player.gainItem(item3[chance1], 1);
				} else {
					//player.gainItem(4021032, 1);
					//player.scriptProgressMessage("第"+i+"次嘗試升s級,升級失敗...");
					player.showSystemMessage("第" + i + "次,升級失敗!!!");
				}
				player.addEventValue("卷軸強化-R卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash1);
				player.loseItem(item2, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 6:
		var item1 = 2616001;//需求卷軸
		txt = "#fs36##e#b";
		txt += "擁有#v" + item1 + "##r:" + player.getAmountOfItem(item1) + " 張\r\n\r\n";
		//txt += "#b玩家持有#v" + item2 + "##r#z" + item2 + "#:[" + player.getAmountOfItem(item2) + "]\r\n";
		txt += "#b升級機率:#r" + seng + "%\r\n\r\n";
		txt += "#b消耗:#r" + cash1 + "#b楓點\r\n";
		//txt += "#b升級失敗償還#v4021032#*#r1#b個\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		//count = number - player.getAmountOfItem(item2);

		/*if (number > player.getAmountOfItem(item2)) {
			npc.say("#v" + item2 + "##z" + item2 + "# 數量不足 " + count + " 個");*/
		 if (player.getCashShopCurrency(2) <= number * cash1) {
			losecash = number * cash1 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + ((number * cash1) - player.getCashShopCurrency(2)) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.showSystemMessage("第" + i + "次,升級成功!!!");
					player.gainItem(item3[chance1], 1);
				} else {
					//player.gainItem(4021032, 1);
					//player.scriptProgressMessage("第"+i+"次嘗試升s級,升級失敗...");
					player.showSystemMessage("第" + i + "次,升級失敗!!!");
				}
				player.addEventValue("卷軸強化-R卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash1);
				player.loseItem(item2, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 7:
		var item1 = 2615005;//需求卷軸
		txt = "#fs36##e#b";
		txt += "擁有#v" + item1 + "##r:" + player.getAmountOfItem(item1) + " 張\r\n\r\n";
		//txt += "#b玩家持有#v" + item2 + "##r#z" + item2 + "#:[" + player.getAmountOfItem(item2) + "]\r\n";
		txt += "#b升級機率:#r" + seng + "%\r\n\r\n";
		txt += "#b消耗:#r" + cash1 + "#b楓點\r\n";
		//txt += "#b升級失敗償還#v4021032#*#r1#b個\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		//count = number - player.getAmountOfItem(item2);

		/*if (number > player.getAmountOfItem(item2)) {
			npc.say("#v" + item2 + "##z" + item2 + "# 數量不足 " + count + " 個");*/
		 if (player.getCashShopCurrency(2) <= number * cash1) {
			losecash = number * cash1 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + ((number * cash1) - player.getCashShopCurrency(2)) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.showSystemMessage("第" + i + "次,升級成功!!!");
					player.gainItem(item3[chance1], 1);
				} else {
					//player.gainItem(4021032, 1);
					//player.scriptProgressMessage("第"+i+"次嘗試升s級,升級失敗...");
					player.showSystemMessage("第" + i + "次,升級失敗!!!");
				}
				player.addEventValue("卷軸強化-R卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash1);
				player.loseItem(item2, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 8:
		var item1 = 2615006;//需求卷軸
		txt = "#fs36##e#b";
		txt += "擁有#v" + item1 + "##r:" + player.getAmountOfItem(item1) + " 張\r\n\r\n";
		//txt += "#b玩家持有#v" + item2 + "##r#z" + item2 + "#:[" + player.getAmountOfItem(item2) + "]\r\n";
		txt += "#b升級機率:#r" + seng + "%\r\n\r\n";
		txt += "#b消耗:#r" + cash1 + "#b楓點\r\n";
		//txt += "#b升級失敗償還#v4021032#*#r1#b個\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		//count = number - player.getAmountOfItem(item2);

		/*if (number > player.getAmountOfItem(item2)) {
			npc.say("#v" + item2 + "##z" + item2 + "# 數量不足 " + count + " 個");*/
		 if (player.getCashShopCurrency(2) <= number * cash1) {
			losecash = number * cash1 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + ((number * cash1) - player.getCashShopCurrency(2)) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.showSystemMessage("第" + i + "次,升級成功!!!");
					player.gainItem(item3[chance1], 1);
				} else {
					//player.gainItem(4021032, 1);
					//player.scriptProgressMessage("第"+i+"次嘗試升s級,升級失敗...");
					player.showSystemMessage("第" + i + "次,升級失敗!!!");
				}
				player.addEventValue("卷軸強化-R卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash1);
				player.loseItem(item2, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 9:
		var item1 = 2048812;//需求卷軸
		txt = "#fs36##e#b";
		txt += "擁有#v" + item1 + "##r:" + player.getAmountOfItem(item1) + " 張\r\n\r\n";
		//txt += "#b玩家持有#v" + item2 + "##r#z" + item2 + "#:[" + player.getAmountOfItem(item2) + "]\r\n";
		txt += "#b升級機率:#r" + seng + "%\r\n\r\n";
		txt += "#b消耗:#r" + cash1 + "#b楓點\r\n";
		//txt += "#b升級失敗償還#v4021032#*#r1#b個\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		//count = number - player.getAmountOfItem(item2);

		/*if (number > player.getAmountOfItem(item2)) {
			npc.say("#v" + item2 + "##z" + item2 + "# 數量不足 " + count + " 個");*/
		 if (player.getCashShopCurrency(2) <= number * cash1) {
			losecash = number * cash1 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + ((number * cash1) - player.getCashShopCurrency(2)) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.showSystemMessage("第" + i + "次,升級成功!!!");
					player.gainItem(item3[chance1], 1);
				} else {
					//player.gainItem(4021032, 1);
					//player.scriptProgressMessage("第"+i+"次嘗試升s級,升級失敗...");
					player.showSystemMessage("第" + i + "次,升級失敗!!!");
				}
				player.addEventValue("卷軸強化-R卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash1);
				player.loseItem(item2, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 10:
		var item1 = 2048813;//需求卷軸
				txt = "#fs36##e#b";
		txt += "擁有#v" + item1 + "##r:" + player.getAmountOfItem(item1) + " 張\r\n\r\n";
		//txt += "#b玩家持有#v" + item2 + "##r#z" + item2 + "#:[" + player.getAmountOfItem(item2) + "]\r\n";
		txt += "#b升級機率:#r" + seng + "%\r\n\r\n";
		txt += "#b消耗:#r" + cash1 + "#b楓點\r\n";
		//txt += "#b升級失敗償還#v4021032#*#r1#b個\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		//count = number - player.getAmountOfItem(item2);

		/*if (number > player.getAmountOfItem(item2)) {
			npc.say("#v" + item2 + "##z" + item2 + "# 數量不足 " + count + " 個");*/
		 if (player.getCashShopCurrency(2) <= number * cash1) {
			losecash = number * cash1 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + ((number * cash1) - player.getCashShopCurrency(2)) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.showSystemMessage("第" + i + "次,升級成功!!!");
					player.gainItem(item3[chance1], 1);
				} else {
					//player.gainItem(4021032, 1);
					//player.scriptProgressMessage("第"+i+"次嘗試升s級,升級失敗...");
					player.showSystemMessage("第" + i + "次,升級失敗!!!");
				}
				player.addEventValue("卷軸強化-R卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash1);
				player.loseItem(item2, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 11:
		var item1 = 2612055;//需求卷軸
		txt = "#fs15##b";
		txt += "玩家持有#v" + item1 + "##r#z" + item1 + "#:[" + player.getAmountOfItem(item1) + "]\r\n";
		txt += "#b玩家持有#v" + itemb + "##r#z" + itemb + "#:[" + player.getAmountOfItem(itemb) + "]\r\n";
		txt += "#b升級機率:#r" + seng1 + "%\r\n";
		txt += "#b每次升級消耗:#r" + cash2 + "#b楓點\r\n";
		//txt += "#b升級失敗償還#v4021032#*#r2#b個\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		count = number - player.getAmountOfItem(itemb);

		if (number > player.getAmountOfItem(itemb)) {
			npc.say("#v" + itemb + "##z" + itemb + "# 數量不足 " + count + " 個");
		} else if (player.getCashShopCurrency(2) <= number * cash2) {
			losecash = number * cash2 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + number * cash2 - player.getCashShopCurrency(2) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng1) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.dropMessage(7, "第" + i + "次嘗試升級,升級成功!!");
					player.gainItem(itembb[chance1], 1);
				} else {
					//player.gainItem(4021032, 2);
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級失敗...");
					player.showSystemMessage("第" + i + "次嘗試升級,升級失敗!!");
				}
				player.addEventValue("卷軸強化-X卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash2);
				player.loseItem(itemb, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 12:
		var item1 = 2612056;//需求卷軸
		txt = "#fs15##b";
		txt += "玩家持有#v" + item1 + "##r#z" + item1 + "#:[" + player.getAmountOfItem(item1) + "]\r\n";
		txt += "#b玩家持有#v" + itemb + "##r#z" + itemb + "#:[" + player.getAmountOfItem(itemb) + "]\r\n";
		txt += "#b升級機率:#r" + seng1 + "%\r\n";
		txt += "#b每次升級消耗:#r" + cash2 + "#b楓點\r\n";
		//txt += "#b升級失敗償還#v4021032#*#r2#b個\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		count = number - player.getAmountOfItem(itemb);

		if (number > player.getAmountOfItem(itemb)) {
			npc.say("#v" + itemb + "##z" + itemb + "# 數量不足 " + count + " 個");
		} else if (player.getCashShopCurrency(2) <= number * cash2) {
			losecash = number * cash2 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + number * cash2 - player.getCashShopCurrency(2) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng1) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.dropMessage(7, "第" + i + "次嘗試升級,升級成功!!");
					player.gainItem(itembb[chance1], 1);
				} else {
					//player.gainItem(4021032, 2);
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級失敗...");
					player.showSystemMessage("第" + i + "次嘗試升級,升級失敗!!");
				}
				player.addEventValue("卷軸強化-X卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash2);
				player.loseItem(itemb, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 13:
		var item1 = 2613048;//需求卷軸
		txt = "#fs15##b";
		txt += "玩家持有#v" + item1 + "##r#z" + item1 + "#:[" + player.getAmountOfItem(item1) + "]\r\n";
		txt += "#b玩家持有#v" + itemb + "##r#z" + itemb + "#:[" + player.getAmountOfItem(itemb) + "]\r\n";
		txt += "#b升級機率:#r" + seng1 + "%\r\n";
		txt += "#b每次升級消耗:#r" + cash2 + "#b楓點\r\n";
		//txt += "#b升級失敗償還#v4021032#*#r2#b個\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		count = number - player.getAmountOfItem(itemb);

		if (number > player.getAmountOfItem(itemb)) {
			npc.say("#v" + itemb + "##z" + itemb + "# 數量不足 " + count + " 個");
		} else if (player.getCashShopCurrency(2) <= number * cash2) {
			losecash = number * cash2 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + number * cash2 - player.getCashShopCurrency(2) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng1) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.dropMessage(7, "第" + i + "次嘗試升級,升級成功!!");
					player.gainItem(itembb[chance1], 1);
				} else {
					//player.gainItem(4021032, 2);
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級失敗...");
					player.showSystemMessage("第" + i + "次嘗試升級,升級失敗!!");
				}
				player.addEventValue("卷軸強化-X卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash2);
				player.loseItem(itemb, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 14:
		var item1 = 2613049;//需求卷軸
		txt = "#fs15##b";
		txt += "玩家持有#v" + item1 + "##r#z" + item1 + "#:[" + player.getAmountOfItem(item1) + "]\r\n";
		txt += "#b玩家持有#v" + itemb + "##r#z" + itemb + "#:[" + player.getAmountOfItem(itemb) + "]\r\n";
		txt += "#b升級機率:#r" + seng1 + "%\r\n";
		txt += "#b每次升級消耗:#r" + cash2 + "#b楓點\r\n";
		//txt += "#b升級失敗償還#v4021032#*#r2#b個\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		count = number - player.getAmountOfItem(itemb);

		if (number > player.getAmountOfItem(itemb)) {
			npc.say("#v" + itemb + "##z" + itemb + "# 數量不足 " + count + " 個");
		} else if (player.getCashShopCurrency(2) <= number * cash2) {
			losecash = number * cash2 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + number * cash2 - player.getCashShopCurrency(2) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng1) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.dropMessage(7, "第" + i + "次嘗試升級,升級成功!!");
					player.gainItem(itembb[chance1], 1);
				} else {
					//player.gainItem(4021032, 2);
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級失敗...");
					player.showSystemMessage("第" + i + "次嘗試升級,升級失敗!!");
				}
				player.addEventValue("卷軸強化-X卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash2);
				player.loseItem(itemb, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 15:
		var item1 = 2615029;//需求卷軸
		txt = "#fs15##b";
		txt += "玩家持有#v" + item1 + "##r#z" + item1 + "#:[" + player.getAmountOfItem(item1) + "]\r\n";
		txt += "#b玩家持有#v" + itemb + "##r#z" + itemb + "#:[" + player.getAmountOfItem(itemb) + "]\r\n";
		txt += "#b升級機率:#r" + seng1 + "%\r\n";
		txt += "#b每次升級消耗:#r" + cash2 + "#b楓點\r\n";
		//txt += "#b升級失敗償還#v4021032#*#r2#b個\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		count = number - player.getAmountOfItem(itemb);

		if (number > player.getAmountOfItem(itemb)) {
			npc.say("#v" + itemb + "##z" + itemb + "# 數量不足 " + count + " 個");
		} else if (player.getCashShopCurrency(2) <= number * cash2) {
			losecash = number * cash2 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + number * cash2 - player.getCashShopCurrency(2) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng1) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.dropMessage(7, "第" + i + "次嘗試升級,升級成功!!");
					player.gainItem(itembb[chance1], 1);
				} else {
					//player.gainItem(4021032, 2);
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級失敗...");
					player.showSystemMessage("第" + i + "次嘗試升級,升級失敗!!");
				}
				player.addEventValue("卷軸強化-X卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash2);
				player.loseItem(itemb, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 16:
		var item1 = 2615030;//需求卷軸
		txt = "#fs15##b";
		txt += "玩家持有#v" + item1 + "##r#z" + item1 + "#:[" + player.getAmountOfItem(item1) + "]\r\n";
		txt += "#b玩家持有#v" + itemb + "##r#z" + itemb + "#:[" + player.getAmountOfItem(itemb) + "]\r\n";
		txt += "#b升級機率:#r" + seng1 + "%\r\n";
		txt += "#b每次升級消耗:#r" + cash2 + "#b楓點\r\n";
		//txt += "#b升級失敗償還#v4021032#*#r2#b個\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		count = number - player.getAmountOfItem(itemb);

		if (number > player.getAmountOfItem(itemb)) {
			npc.say("#v" + itemb + "##z" + itemb + "# 數量不足 " + count + " 個");
		} else if (player.getCashShopCurrency(2) <= number * cash2) {
			losecash = number * cash2 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + number * cash2 - player.getCashShopCurrency(2) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng1) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.dropMessage(7, "第" + i + "次嘗試升級,升級成功!!");
					player.gainItem(itembb[chance1], 1);
				} else {
					//player.gainItem(4021032, 2);
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級失敗...");
					player.showSystemMessage("第" + i + "次嘗試升級,升級失敗!!");
				}
				player.addEventValue("卷軸強化-X卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash2);
				player.loseItem(itemb, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 17:
		var item1 = 2616059;//需求卷軸
		txt = "#fs15##b";
		txt += "玩家持有#v" + item1 + "##r#z" + item1 + "#:[" + player.getAmountOfItem(item1) + "]\r\n";
		txt += "#b玩家持有#v" + itemb + "##r#z" + itemb + "#:[" + player.getAmountOfItem(itemb) + "]\r\n";
		txt += "#b升級機率:#r" + seng1 + "%\r\n";
		txt += "#b每次升級消耗:#r" + cash2 + "#b楓點\r\n";
		//txt += "#b升級失敗償還#v4021032#*#r2#b個\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		count = number - player.getAmountOfItem(itemb);

		if (number > player.getAmountOfItem(itemb)) {
			npc.say("#v" + itemb + "##z" + itemb + "# 數量不足 " + count + " 個");
		} else if (player.getCashShopCurrency(2) <= number * cash2) {
			losecash = number * cash2 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + number * cash2 - player.getCashShopCurrency(2) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng1) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.dropMessage(7, "第" + i + "次嘗試升級,升級成功!!");
					player.gainItem(itembb[chance1], 1);
				} else {
					//player.gainItem(4021032, 2);
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級失敗...");
					player.showSystemMessage("第" + i + "次嘗試升級,升級失敗!!");
				}
				player.addEventValue("卷軸強化-X卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash2);
				player.loseItem(itemb, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 18:
		var item1 = 2616060;//需求卷軸
		txt = "#fs15##b";
		txt += "玩家持有#v" + item1 + "##r#z" + item1 + "#:[" + player.getAmountOfItem(item1) + "]\r\n";
		txt += "#b玩家持有#v" + itemb + "##r#z" + itemb + "#:[" + player.getAmountOfItem(itemb) + "]\r\n";
		txt += "#b升級機率:#r" + seng1 + "%\r\n";
		txt += "#b每次升級消耗:#r" + cash2 + "#b楓點\r\n";
		//txt += "#b升級失敗償還#v4021032#*#r2#b個\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		count = number - player.getAmountOfItem(itemb);

		if (number > player.getAmountOfItem(itemb)) {
			npc.say("#v" + itemb + "##z" + itemb + "# 數量不足 " + count + " 個");
		} else if (player.getCashShopCurrency(2) <= number * cash2) {
			losecash = number * cash2 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + number * cash2 - player.getCashShopCurrency(2) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng1) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.dropMessage(7, "第" + i + "次嘗試升級,升級成功!!");
					player.gainItem(itembb[chance1], 1);
				} else {
					//player.gainItem(4021032, 2);
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級失敗...");
					player.showSystemMessage("第" + i + "次嘗試升級,升級失敗!!");
				}
				player.addEventValue("卷軸強化-X卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash2);
				player.loseItem(itemb, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 19:
		var item1 = 2048815;//需求卷軸
		txt = "#fs15##b";
		txt += "玩家持有#v" + item1 + "##r#z" + item1 + "#:[" + player.getAmountOfItem(item1) + "]\r\n";
		txt += "#b玩家持有#v" + itemb + "##r#z" + itemb + "#:[" + player.getAmountOfItem(itemb) + "]\r\n";
		txt += "#b升級機率:#r" + seng1 + "%\r\n";
		txt += "#b每次升級消耗:#r" + cash2 + "#b楓點\r\n";
		//txt += "#b升級失敗償還#v4021032#*#r2#b個\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		count = number - player.getAmountOfItem(itemb);

		if (number > player.getAmountOfItem(itemb)) {
			npc.say("#v" + itemb + "##z" + itemb + "# 數量不足 " + count + " 個");
		} else if (player.getCashShopCurrency(2) <= number * cash2) {
			losecash = number * cash2 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + number * cash2 - player.getCashShopCurrency(2) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng1) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.dropMessage(7, "第" + i + "次嘗試升級,升級成功!!");
					player.gainItem(itembb[chance1], 1);
				} else {
					//player.gainItem(4021032, 2);
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級失敗...");
					player.showSystemMessage("第" + i + "次嘗試升級,升級失敗!!");
				}
				player.addEventValue("卷軸強化-X卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash2);
				player.loseItem(itemb, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 20:
		var item1 = 2048816;//需求卷軸
		txt = "#fs15##b";
		txt += "玩家持有#v" + item1 + "##r#z" + item1 + "#:[" + player.getAmountOfItem(item1) + "]\r\n";
		txt += "#b玩家持有#v" + itemb + "##r#z" + itemb + "#:[" + player.getAmountOfItem(itemb) + "]\r\n";
		txt += "#b升級機率:#r" + seng1 + "%\r\n";
		txt += "#b每次升級消耗:#r" + cash2 + "#b楓點\r\n";
		//txt += "#b升級失敗償還#v4021032#*#r2#b個\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		count = number - player.getAmountOfItem(itemb);

		if (number > player.getAmountOfItem(itemb)) {
			npc.say("#v" + itemb + "##z" + itemb + "# 數量不足 " + count + " 個");
		} else if (player.getCashShopCurrency(2) <= number * cash2) {
			losecash = number * cash2 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + number * cash2 - player.getCashShopCurrency(2) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng1) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.dropMessage(7, "第" + i + "次嘗試升級,升級成功!!");
					player.gainItem(itembb[chance1], 1);
				} else {
					//player.gainItem(4021032, 2);
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級失敗...");
					player.showSystemMessage("第" + i + "次嘗試升級,升級失敗!!");
				}
				player.addEventValue("卷軸強化-X卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash2);
				player.loseItem(itemb, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 21:
		var item1 = 2612074;//需求卷軸
		txt = "#fs15##b";
		txt += "玩家持有#v" + item1 + "##r#z" + item1 + "#:[" + player.getAmountOfItem(item1) + "]\r\n";
		txt += "#b玩家持有#v" + itemc + "##r#z" + itemc + "#:[" + player.getAmountOfItem(itemc) + "]\r\n";
		txt += "#b升級機率:#r" + seng2 + "%\r\n";
		txt += "#b每次升級消耗:#r" + cash3 + "#b楓點\r\n";
		//txt += "#b升級失敗償還#v4021032#*#r4#b個\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		count = number - player.getAmountOfItem(itemc);

		if (number > player.getAmountOfItem(itemc)) {
			npc.say("#v" + itemc + "##z" + itemc + "# 數量不足 " + count + " 個");
		} else if (player.getCashShopCurrency(2) <= number * cash3) {
			losecash = number * cash3 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + ((number * cash3) - player.getCashShopCurrency(2)) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng2) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.dropMessage(7, "第" + i + "次嘗試升級,升級成功!!");
					player.gainItem(itemcc[chance1], 1);
				} else {
					//player.gainItem(4021032, 4);
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級失敗...");
					player.showSystemMessage("第" + i + "次嘗試升級,升級失敗!!");
				}
				player.addEventValue("卷軸強化-V卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash3);
				player.loseItem(itemc, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 22:
		var item1 = 2612075;//需求卷軸
		txt = "#fs15##b";
		txt += "玩家持有#v" + item1 + "##r#z" + item1 + "#:[" + player.getAmountOfItem(item1) + "]\r\n";
		txt += "#b玩家持有#v" + itemc + "##r#z" + itemc + "#:[" + player.getAmountOfItem(itemc) + "]\r\n";
		txt += "#b升級機率:#r" + seng2 + "%\r\n";
		txt += "#b每次升級消耗:#r" + cash3 + "#b楓點\r\n";
		//txt += "#b升級失敗償還#v4021032#*#r4#b個\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		count = number - player.getAmountOfItem(itemc);

		if (number > player.getAmountOfItem(itemc)) {
			npc.say("#v" + itemc + "##z" + itemc + "# 數量不足 " + count + " 個");
		} else if (player.getCashShopCurrency(2) <= number * cash3) {
			losecash = number * cash3 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + ((number * cash3) - player.getCashShopCurrency(2)) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng2) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.dropMessage(7, "第" + i + "次嘗試升級,升級成功!!");
					player.gainItem(itemcc[chance1], 1);
				} else {
					//player.gainItem(4021032, 4);
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級失敗...");
					player.showSystemMessage("第" + i + "次嘗試升級,升級失敗!!");
				}
				player.addEventValue("卷軸強化-V卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash3);
				player.loseItem(itemc, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 23:
		var item1 = 2613062;//需求卷軸
		txt = "#fs15##b";
		txt += "玩家持有#v" + item1 + "##r#z" + item1 + "#:[" + player.getAmountOfItem(item1) + "]\r\n";
		txt += "#b玩家持有#v" + itemc + "##r#z" + itemc + "#:[" + player.getAmountOfItem(itemc) + "]\r\n";
		txt += "#b升級機率:#r" + seng2 + "%\r\n";
		txt += "#b每次升級消耗:#r" + cash3 + "#b楓點\r\n";
		//txt += "#b升級失敗償還#v4021032#*#r4#b個\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		count = number - player.getAmountOfItem(itemc);

		if (number > player.getAmountOfItem(itemc)) {
			npc.say("#v" + itemc + "##z" + itemc + "# 數量不足 " + count + " 個");
		} else if (player.getCashShopCurrency(2) <= number * cash3) {
			losecash = number * cash3 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + ((number * cash3) - player.getCashShopCurrency(2)) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng2) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.dropMessage(7, "第" + i + "次嘗試升級,升級成功!!");
					player.gainItem(itemcc[chance1], 1);
				} else {
					//player.gainItem(4021032, 4);
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級失敗...");
					player.showSystemMessage("第" + i + "次嘗試升級,升級失敗!!");
				}
				player.addEventValue("卷軸強化-V卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash3);
				player.loseItem(itemc, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 24:
		var item1 = 2613063;//需求卷軸
		txt = "#fs15##b";
		txt += "玩家持有#v" + item1 + "##r#z" + item1 + "#:[" + player.getAmountOfItem(item1) + "]\r\n";
		txt += "#b玩家持有#v" + itemc + "##r#z" + itemc + "#:[" + player.getAmountOfItem(itemc) + "]\r\n";
		txt += "#b升級機率:#r" + seng2 + "%\r\n";
		txt += "#b每次升級消耗:#r" + cash3 + "#b楓點\r\n";
		//txt += "#b升級失敗償還#v4021032#*#r4#b個\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		count = number - player.getAmountOfItem(itemc);

		if (number > player.getAmountOfItem(itemc)) {
			npc.say("#v" + itemc + "##z" + itemc + "# 數量不足 " + count + " 個");
		} else if (player.getCashShopCurrency(2) <= number * cash3) {
			losecash = number * cash3 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + ((number * cash3) - player.getCashShopCurrency(2)) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng2) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.dropMessage(7, "第" + i + "次嘗試升級,升級成功!!");
					player.gainItem(itemcc[chance1], 1);
				} else {
					//player.gainItem(4021032, 4);
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級失敗...");
					player.showSystemMessage("第" + i + "次嘗試升級,升級失敗!!");
				}
				player.addEventValue("卷軸強化-V卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash3);
				player.loseItem(itemc, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 25:
		var item1 = 2615041;//需求卷軸
		txt = "#fs15##b";
		txt += "玩家持有#v" + item1 + "##r#z" + item1 + "#:[" + player.getAmountOfItem(item1) + "]\r\n";
		txt += "#b玩家持有#v" + itemc + "##r#z" + itemc + "#:[" + player.getAmountOfItem(itemc) + "]\r\n";
		txt += "#b升級機率:#r" + seng2 + "%\r\n";
		txt += "#b每次升級消耗:#r" + cash3 + "#b楓點\r\n";
		//txt += "#b升級失敗償還#v4021032#*#r4#b個\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		count = number - player.getAmountOfItem(itemc);

		if (number > player.getAmountOfItem(itemc)) {
			npc.say("#v" + itemc + "##z" + itemc + "# 數量不足 " + count + " 個");
		} else if (player.getCashShopCurrency(2) <= number * cash3) {
			losecash = number * cash3 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + ((number * cash3) - player.getCashShopCurrency(2)) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng2) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.dropMessage(7, "第" + i + "次嘗試升級,升級成功!!");
					player.gainItem(itemcc[chance1], 1);
				} else {
					//player.gainItem(4021032, 4);
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級失敗...");
					player.showSystemMessage("第" + i + "次嘗試升級,升級失敗!!");
				}
				player.addEventValue("卷軸強化-V卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash3);
				player.loseItem(itemc, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 26:
		var item1 = 2615042;//需求卷軸
		txt = "#fs15##b";
		txt += "玩家持有#v" + item1 + "##r#z" + item1 + "#:[" + player.getAmountOfItem(item1) + "]\r\n";
		txt += "#b玩家持有#v" + itemc + "##r#z" + itemc + "#:[" + player.getAmountOfItem(itemc) + "]\r\n";
		txt += "#b升級機率:#r" + seng2 + "%\r\n";
		txt += "#b每次升級消耗:#r" + cash3 + "#b楓點\r\n";
		//txt += "#b升級失敗償還#v4021032#*#r4#b個\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		count = number - player.getAmountOfItem(itemc);

		if (number > player.getAmountOfItem(itemc)) {
			npc.say("#v" + itemc + "##z" + itemc + "# 數量不足 " + count + " 個");
		} else if (player.getCashShopCurrency(2) <= number * cash3) {
			losecash = number * cash3 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + ((number * cash3) - player.getCashShopCurrency(2)) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng2) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.dropMessage(7, "第" + i + "次嘗試升級,升級成功!!");
					player.gainItem(itemcc[chance1], 1);
				} else {
					//player.gainItem(4021032, 4);
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級失敗...");
					player.showSystemMessage("第" + i + "次嘗試升級,升級失敗!!");
				}
				player.addEventValue("卷軸強化-V卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash3);
				player.loseItem(itemc, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 27:
		var item1 = 2616072;//需求卷軸
		txt = "#fs15##b";
		txt += "玩家持有#v" + item1 + "##r#z" + item1 + "#:[" + player.getAmountOfItem(item1) + "]\r\n";
		txt += "#b玩家持有#v" + itemc + "##r#z" + itemc + "#:[" + player.getAmountOfItem(itemc) + "]\r\n";
		txt += "#b升級機率:#r" + seng2 + "%\r\n";
		txt += "#b每次升級消耗:#r" + cash3 + "#b楓點\r\n";
		//txt += "#b升級失敗償還#v4021032#*#r4#b個\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		count = number - player.getAmountOfItem(itemc);

		if (number > player.getAmountOfItem(itemc)) {
			npc.say("#v" + itemc + "##z" + itemc + "# 數量不足 " + count + " 個");
		} else if (player.getCashShopCurrency(2) <= number * cash3) {
			losecash = number * cash3 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + ((number * cash3) - player.getCashShopCurrency(2)) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng2) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.dropMessage(7, "第" + i + "次嘗試升級,升級成功!!");
					player.gainItem(itemcc[chance1], 1);
				} else {
					//player.gainItem(4021032, 4);
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級失敗...");
					player.showSystemMessage("第" + i + "次嘗試升級,升級失敗!!");
				}
				player.addEventValue("卷軸強化-V卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash3);
				player.loseItem(itemc, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 28:
		var item1 = 2616073;//需求卷軸
		txt = "#fs15##b";
		txt += "玩家持有#v" + item1 + "##r#z" + item1 + "#:[" + player.getAmountOfItem(item1) + "]\r\n";
		txt += "#b玩家持有#v" + itemc + "##r#z" + itemc + "#:[" + player.getAmountOfItem(itemc) + "]\r\n";
		txt += "#b升級機率:#r" + seng2 + "%\r\n";
		txt += "#b每次升級消耗:#r" + cash3 + "#b楓點\r\n";
		//txt += "#b升級失敗償還#v4021032#*#r4#b個\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		count = number - player.getAmountOfItem(itemc);

		if (number > player.getAmountOfItem(itemc)) {
			npc.say("#v" + itemc + "##z" + itemc + "# 數量不足 " + count + " 個");
		} else if (player.getCashShopCurrency(2) <= number * cash3) {
			losecash = number * cash3 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + ((number * cash3) - player.getCashShopCurrency(2)) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng2) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.dropMessage(7, "第" + i + "次嘗試升級,升級成功!!");
					player.gainItem(itemcc[chance1], 1);
				} else {
					//player.gainItem(4021032, 4);
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級失敗...");
					player.showSystemMessage("第" + i + "次嘗試升級,升級失敗!!");
				}
				player.addEventValue("卷軸強化-V卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash3);
				player.loseItem(itemc, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 29:
		var item1 = 2048819;//需求卷軸
		txt = "#fs15##b";
		txt += "玩家持有#v" + item1 + "##r#z" + item1 + "#:[" + player.getAmountOfItem(item1) + "]\r\n";
		txt += "#b玩家持有#v" + itemc + "##r#z" + itemc + "#:[" + player.getAmountOfItem(itemc) + "]\r\n";
		txt += "#b升級機率:#r" + seng2 + "%\r\n";
		txt += "#b每次升級消耗:#r" + cash3 + "#b楓點\r\n";
		//txt += "#b升級失敗償還#v4021032#*#r4#b個\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		count = number - player.getAmountOfItem(itemc);

		if (number > player.getAmountOfItem(itemc)) {
			npc.say("#v" + itemc + "##z" + itemc + "# 數量不足 " + count + " 個");
		} else if (player.getCashShopCurrency(2) <= number * cash3) {
			losecash = number * cash3 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + ((number * cash3) - player.getCashShopCurrency(2)) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng2) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.dropMessage(7, "第" + i + "次嘗試升級,升級成功!!");
					player.gainItem(itemcc[chance1], 1);
				} else {
					//player.gainItem(4021032, 4);
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級失敗...");
					player.showSystemMessage("第" + i + "次嘗試升級,升級失敗!!");
				}
				player.addEventValue("卷軸強化-V卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash3);
				player.loseItem(itemc, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 30:
		var item1 = 2048820;//需求卷軸
		txt = "#fs15##b";
		txt += "玩家持有#v" + item1 + "##r#z" + item1 + "#:[" + player.getAmountOfItem(item1) + "]\r\n";
		txt += "#b玩家持有#v" + itemc + "##r#z" + itemc + "#:[" + player.getAmountOfItem(itemc) + "]\r\n";
		txt += "#b升級機率:#r" + seng2 + "%\r\n";
		txt += "#b每次升級消耗:#r" + cash3 + "#b楓點\r\n";
		//txt += "#b升級失敗償還#v4021032#*#r4#b個\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		count = number - player.getAmountOfItem(itemc);

		if (number > player.getAmountOfItem(itemc)) {
			npc.say("#v" + itemc + "##z" + itemc + "# 數量不足 " + count + " 個");
		} else if (player.getCashShopCurrency(2) <= number * cash3) {
			losecash = number * cash3 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + ((number * cash3) - player.getCashShopCurrency(2)) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng2) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.dropMessage(7, "第" + i + "次嘗試升級,升級成功!!");
					player.gainItem(itemcc[chance1], 1);
				} else {
					//player.gainItem(4021032, 4);
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級失敗...");
					player.showSystemMessage("第" + i + "次嘗試升級,升級失敗!!");
				}
				player.addEventValue("卷軸強化-V卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash3);
				player.loseItem(itemc, 1);
				player.loseItem(item1, 1);
			}
		}
	case 31:
		var item1 = 2048825;//需求卷軸
		txt = "#fs15##b";
		txt += "玩家持有#v" + item1 + "##r#z" + item1 + "#:[" + player.getAmountOfItem(item1) + "]\r\n";
		txt += "#b玩家持有#v" + itemd + "##r#z" + itemd + "#:[" + player.getAmountOfItem(itemd) + "]\r\n";
		txt += "#b升級機率:#r" + seng3 + "%\r\n";
		txt += "#b每次升級消耗:#r" + cash4 + "#b楓點\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		count = number - player.getAmountOfItem(itemd);

		if (number > player.getAmountOfItem(itemd)) {
			npc.say("#v" + itemd + "##z" + itemd + "# 數量不足 " + count + " 個");
		} else if (player.getCashShopCurrency(2) <= number * cash4) {
			losecash = number * cash4 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + ((number * cash4) - player.getCashShopCurrency(2)) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng3) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.dropMessage(7, "第" + i + "次嘗試升級,升級成功!!");
					player.gainItem(itemdd[chance1], 1);
				} else {
					//player.gainItem(4021032, 4);
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級失敗...");
					player.showSystemMessage("第" + i + "次嘗試升級,升級失敗!!");
				}
				player.addEventValue("卷軸強化-V卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash4);
				player.loseItem(itemd, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 32:
		var item1 = 2048826;//需求卷軸
		txt = "#fs15##b";
		txt += "玩家持有#v" + item1 + "##r#z" + item1 + "#:[" + player.getAmountOfItem(item1) + "]\r\n";
		txt += "#b玩家持有#v" + itemd + "##r#z" + itemd + "#:[" + player.getAmountOfItem(itemd) + "]\r\n";
		txt += "#b升級機率:#r" + seng3 + "%\r\n";
		txt += "#b每次升級消耗:#r" + cash4 + "#b楓點\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		count = number - player.getAmountOfItem(itemd);

		if (number > player.getAmountOfItem(itemd)) {
			npc.say("#v" + itemd + "##z" + itemd + "# 數量不足 " + count + " 個");
		} else if (player.getCashShopCurrency(2) <= number * cash4) {
			losecash = number * cash4 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + ((number * cash4) - player.getCashShopCurrency(2)) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng3) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.dropMessage(7, "第" + i + "次嘗試升級,升級成功!!");
					player.gainItem(itemdd[chance1], 1);
				} else {
					//player.gainItem(4021032, 4);
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級失敗...");
					player.showSystemMessage("第" + i + "次嘗試升級,升級失敗!!");
				}
				player.addEventValue("卷軸強化-V卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash4);
				player.loseItem(itemd, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 33:
		var item1 = 2612080;//需求卷軸
		txt = "#fs15##b";
		txt += "玩家持有#v" + item1 + "##r#z" + item1 + "#:[" + player.getAmountOfItem(item1) + "]\r\n";
		txt += "#b玩家持有#v" + itemd + "##r#z" + itemd + "#:[" + player.getAmountOfItem(itemd) + "]\r\n";
		txt += "#b升級機率:#r" + seng3 + "%\r\n";
		txt += "#b每次升級消耗:#r" + cash4 + "#b楓點\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		count = number - player.getAmountOfItem(itemd);

		if (number > player.getAmountOfItem(itemd)) {
			npc.say("#v" + itemd + "##z" + itemd + "# 數量不足 " + count + " 個");
		} else if (player.getCashShopCurrency(2) <= number * cash4) {
			losecash = number * cash4 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + ((number * cash4) - player.getCashShopCurrency(2)) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng3) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.dropMessage(7, "第" + i + "次嘗試升級,升級成功!!");
					player.gainItem(itemdd[chance1], 1);
				} else {
					//player.gainItem(4021032, 4);
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級失敗...");
					player.showSystemMessage("第" + i + "次嘗試升級,升級失敗!!");
				}
				player.addEventValue("卷軸強化-V卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash4);
				player.loseItem(itemd, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 34:
		var item1 = 2612081;//需求卷軸
		txt = "#fs15##b";
		txt += "玩家持有#v" + item1 + "##r#z" + item1 + "#:[" + player.getAmountOfItem(item1) + "]\r\n";
		txt += "#b玩家持有#v" + itemd + "##r#z" + itemd + "#:[" + player.getAmountOfItem(itemd) + "]\r\n";
		txt += "#b升級機率:#r" + seng3 + "%\r\n";
		txt += "#b每次升級消耗:#r" + cash4 + "#b楓點\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		count = number - player.getAmountOfItem(itemd);

		if (number > player.getAmountOfItem(itemd)) {
			npc.say("#v" + itemd + "##z" + itemd + "# 數量不足 " + count + " 個");
		} else if (player.getCashShopCurrency(2) <= number * cash4) {
			losecash = number * cash4 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + ((number * cash4) - player.getCashShopCurrency(2)) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng3) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.dropMessage(7, "第" + i + "次嘗試升級,升級成功!!");
					player.gainItem(itemdd[chance1], 1);
				} else {
					//player.gainItem(4021032, 4);
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級失敗...");
					player.showSystemMessage("第" + i + "次嘗試升級,升級失敗!!");
				}
				player.addEventValue("卷軸強化-V卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash4);
				player.loseItem(itemd, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 35:
		var item1 = 2613068;//需求卷軸
		txt = "#fs15##b";
		txt += "玩家持有#v" + item1 + "##r#z" + item1 + "#:[" + player.getAmountOfItem(item1) + "]\r\n";
		txt += "#b玩家持有#v" + itemd + "##r#z" + itemd + "#:[" + player.getAmountOfItem(itemd) + "]\r\n";
		txt += "#b升級機率:#r" + seng3 + "%\r\n";
		txt += "#b每次升級消耗:#r" + cash4 + "#b楓點\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		count = number - player.getAmountOfItem(itemd);

		if (number > player.getAmountOfItem(itemd)) {
			npc.say("#v" + itemd + "##z" + itemd + "# 數量不足 " + count + " 個");
		} else if (player.getCashShopCurrency(2) <= number * cash4) {
			losecash = number * cash4 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + ((number * cash4) - player.getCashShopCurrency(2)) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng3) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.dropMessage(7, "第" + i + "次嘗試升級,升級成功!!");
					player.gainItem(itemdd[chance1], 1);
				} else {
					//player.gainItem(4021032, 4);
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級失敗...");
					player.showSystemMessage("第" + i + "次嘗試升級,升級失敗!!");
				}
				player.addEventValue("卷軸強化-V卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash4);
				player.loseItem(itemd, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 36:
		var item1 = 2613069;//需求卷軸
		txt = "#fs15##b";
		txt += "玩家持有#v" + item1 + "##r#z" + item1 + "#:[" + player.getAmountOfItem(item1) + "]\r\n";
		txt += "#b玩家持有#v" + itemd + "##r#z" + itemd + "#:[" + player.getAmountOfItem(itemd) + "]\r\n";
		txt += "#b升級機率:#r" + seng3 + "%\r\n";
		txt += "#b每次升級消耗:#r" + cash4 + "#b楓點\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		count = number - player.getAmountOfItem(itemd);

		if (number > player.getAmountOfItem(itemd)) {
			npc.say("#v" + itemd + "##z" + itemd + "# 數量不足 " + count + " 個");
		} else if (player.getCashShopCurrency(2) <= number * cash4) {
			losecash = number * cash4 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + ((number * cash4) - player.getCashShopCurrency(2)) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng3) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.dropMessage(7, "第" + i + "次嘗試升級,升級成功!!");
					player.gainItem(itemdd[chance1], 1);
				} else {
					//player.gainItem(4021032, 4);
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級失敗...");
					player.showSystemMessage("第" + i + "次嘗試升級,升級失敗!!");
				}
				player.addEventValue("卷軸強化-V卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash4);
				player.loseItem(itemd, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 37:
		var item1 = 2616216;//需求卷軸
		txt = "#fs15##b";
		txt += "玩家持有#v" + item1 + "##r#z" + item1 + "#:[" + player.getAmountOfItem(item1) + "]\r\n";
		txt += "#b玩家持有#v" + itemd + "##r#z" + itemd + "#:[" + player.getAmountOfItem(itemd) + "]\r\n";
		txt += "#b升級機率:#r" + seng3 + "%\r\n";
		txt += "#b每次升級消耗:#r" + cash4 + "#b楓點\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		count = number - player.getAmountOfItem(itemd);

		if (number > player.getAmountOfItem(itemd)) {
			npc.say("#v" + itemd + "##z" + itemd + "# 數量不足 " + count + " 個");
		} else if (player.getCashShopCurrency(2) <= number * cash4) {
			losecash = number * cash4 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + ((number * cash4) - player.getCashShopCurrency(2)) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng3) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.dropMessage(7, "第" + i + "次嘗試升級,升級成功!!");
					player.gainItem(itemdd[chance1], 1);
				} else {
					//player.gainItem(4021032, 4);
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級失敗...");
					player.showSystemMessage("第" + i + "次嘗試升級,升級失敗!!");
				}
				player.addEventValue("卷軸強化-V卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash4);
				player.loseItem(itemd, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 38:
		var item1 = 2616217;//需求卷軸
		txt = "#fs15##b";
		txt += "玩家持有#v" + item1 + "##r#z" + item1 + "#:[" + player.getAmountOfItem(item1) + "]\r\n";
		txt += "#b玩家持有#v" + itemd + "##r#z" + itemd + "#:[" + player.getAmountOfItem(itemd) + "]\r\n";
		txt += "#b升級機率:#r" + seng3 + "%\r\n";
		txt += "#b每次升級消耗:#r" + cash4 + "#b楓點\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		count = number - player.getAmountOfItem(itemd);

		if (number > player.getAmountOfItem(itemd)) {
			npc.say("#v" + itemd + "##z" + itemd + "# 數量不足 " + count + " 個");
		} else if (player.getCashShopCurrency(2) <= number * cash4) {
			losecash = number * cash4 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + ((number * cash4) - player.getCashShopCurrency(2)) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng3) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.dropMessage(7, "第" + i + "次嘗試升級,升級成功!!");
					player.gainItem(itemdd[chance1], 1);
				} else {
					//player.gainItem(4021032, 4);
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級失敗...");
					player.showSystemMessage("第" + i + "次嘗試升級,升級失敗!!");
				}
				player.addEventValue("卷軸強化-V卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash4);
				player.loseItem(itemd, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 39:
		var item1 = 2615051;//需求卷軸
		txt = "#fs15##b";
		txt += "玩家持有#v" + item1 + "##r#z" + item1 + "#:[" + player.getAmountOfItem(item1) + "]\r\n";
		txt += "#b玩家持有#v" + itemd + "##r#z" + itemd + "#:[" + player.getAmountOfItem(itemd) + "]\r\n";
		txt += "#b升級機率:#r" + seng3 + "%\r\n";
		txt += "#b每次升級消耗:#r" + cash4 + "#b楓點\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		count = number - player.getAmountOfItem(itemd);

		if (number > player.getAmountOfItem(itemd)) {
			npc.say("#v" + itemd + "##z" + itemd + "# 數量不足 " + count + " 個");
		} else if (player.getCashShopCurrency(2) <= number * cash4) {
			losecash = number * cash4 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + ((number * cash4) - player.getCashShopCurrency(2)) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng3) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.dropMessage(7, "第" + i + "次嘗試升級,升級成功!!");
					player.gainItem(itemdd[chance1], 1);
				} else {
					//player.gainItem(4021032, 4);
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級失敗...");
					player.showSystemMessage("第" + i + "次嘗試升級,升級失敗!!");
				}
				player.addEventValue("卷軸強化-V卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash4);
				player.loseItem(itemd, 1);
				player.loseItem(item1, 1);
			}
		}
		break;
	case 40:
		var item1 = 2615052;//需求卷軸
		txt = "#fs15##b";
		txt += "玩家持有#v" + item1 + "##r#z" + item1 + "#:[" + player.getAmountOfItem(item1) + "]\r\n";
		txt += "#b玩家持有#v" + itemd + "##r#z" + itemd + "#:[" + player.getAmountOfItem(itemd) + "]\r\n";
		txt += "#b升級機率:#r" + seng3 + "%\r\n";
		txt += "#b每次升級消耗:#r" + cash4 + "#b楓點\r\n";
		var number = npc.askNumber(txt, 0, 0, player.getAmountOfItem(item1));
		count = number - player.getAmountOfItem(itemd);

		if (number > player.getAmountOfItem(itemd)) {
			npc.say("#v" + itemd + "##z" + itemd + "# 數量不足 " + count + " 個");
		} else if (player.getCashShopCurrency(2) <= number * cash4) {
			losecash = number * cash4 - player.getCashShopCurrency(2);
			npc.say("楓葉點數數量不足 " + ((number * cash4) - player.getCashShopCurrency(2)) + " 點");
		} else {

			for (var i = 1; i < number + 1; i++) {
				var chance = Math.floor(Math.random() * 100);
				var chance1 = Math.floor(Math.random() * 10);

				if (chance <= seng3) {
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級成功!!");
					player.dropMessage(7, "第" + i + "次嘗試升級,升級成功!!");
					player.gainItem(itemdd[chance1], 1);
				} else {
					//player.gainItem(4021032, 4);
					//player.scriptProgressMessage("第"+i+"次嘗試升級,升級失敗...");
					player.showSystemMessage("第" + i + "次嘗試升級,升級失敗!!");
				}
				player.addEventValue("卷軸強化-V卷軸", 1, 1000);
				player.modifyCashShopCurrency(2, -cash4);
				player.loseItem(itemd, 1);
				player.loseItem(item1, 1);
			}
		}
		break;

}
