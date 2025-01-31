var status = -1
var txt;
/*------------------------------------------------------------*/
var hua22 = "#fMap/MapHelper.img/weather/starPlanet/1#"; //星
var shs2 = "#fEffect/OnUserEff.img/emotion/love/0#";  //一個心
var ltz45 = "#fMap/MapHelper.img/weather/starPlanet2/5#";  //
var ltz46 = "#fMap/MapHelper.img/weather/starPlanet/4#";  //
var hua23 = "#fMap/MapHelper.img/weather/starPlanet/2#"; //粉紅天使
var nu09 = "#fUI/GuildMark.img/Mark/Etc/00009001/9#";//烏鴉省略號10  9 5 4
var nu19 = "#fUI/GuildMark.img/Mark/Etc/00009001/10#";//烏鴉省略號10  9 5 4
var nu29 = "#fUI/GuildMark.img/Mark/Etc/00009001/4#";//烏鴉省略號10  9 5 4
var nu39 = "#fUI/GuildMark.img/Mark/Etc/00009001/5#";//烏鴉省略號10  9 5 4
var nu9 = "#fEffect/ItemEff/1004122/effect/default/8#";//烏鴉省略號
var n1 ="#fUI/GuildMark/Mark/Etc/00009001/1#";
var n2 ="#fEffect/ItemEff/1112003/0/2#";
var n3 ="#fEffect/CharacterEff/1082565/2/0#";
var a3 = "#fEffect/ItemEff/1070069/effect/walk1/2#"
var Icon = Array(
    Array("星星", "#fEtc/ChatEmoticon/expression/1/0#"),
    Array("兔子", "#fEffect/CharacterEff/1112960/0/1#"),
    Array("星空", "#fUI/GuildMark/BackGround/00001013/16#"),
    Array("骷髏", "#fUI/GuildMark/Mark/Etc/00009000/15#"),
    Array("紅心", "#fUI/GuildMark/Mark/Etc/00009001/1#"),
    Array("白臉", "#fUI/GuildMark/Mark/Etc/00009002/4#"),
    Array("皇冠", "#fUI/GuildMark/Mark/Etc/00009004/3#"),
    Array("紅燈", "#fUI/GuildMark/Mark/Etc/00009020/1#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/9#"),//
    Array("水滴", "#fEffect/BasicEff/MainNotice/Gamsper/Notify/4#"),
    Array("紅旗", "#fEffect/BasicEff/MainNotice/BlockBuster/Default/3#"),
    Array("紅心", "#fEffect/CharacterEff/1112905/0/0#"),
    Array("雲朵", "#fEffect/ItemEff/1102877/effect/default/1#"),
    Array("翅膀", "#fEffect/ItemEff/1102874/effect/ladder/0#"),
    Array("箭矢", "#fEffect/ItemEff/1112003/0/2#"),
    Array("黃鴨", "#fEffect/ItemEff/1004122/effect/default/8#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/10#"),
    Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/2#"),
    Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/3#"),
    Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/4#"),
    Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/5#"),
    Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/6#"),
    Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/7#"),
    Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/8#"),
    Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/9#"),
    Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/10#"),
    Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/11#"),
    Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/12#"),
    Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/13#"),
    Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/14#"),
    Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/15#"),
    Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/16#"),
    Array("條件", "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"),
    Array("信封", "#fUI/GuildMark/BackGround/00001003/5#"),
    Array("信封", "#fUI/GuildMark/BackGround/00001003/12#"),
    Array("鉆石", "#fUI/NameTag/medal/556/w#"),
    Array("鉆石", "#fUI/NameTag/medal/556/c#"),
    Array("鉆石", "#fUI/NameTag/medal/556/e#"),
    Array("三角", "#fUI/piggyBarMinigame/crunch/5#"),
    Array("藍點", "#fUI/piggyBarMinigame/crunch/1#"),
    Array("女神", "#fUI/RunnerGame/RunnerGameUI/Effect/ItemEffect_Protect1/3#"),
    Array("拇指", "#fUI/NameTag/medal/10/w#"),
    Array("拇指", "#fUI/NameTag/medal/10/c#"),
    Array("拇指", "#fUI/NameTag/medal/10/e#"),
    Array("成功", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/dear/7#"),
    Array("失敗", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/fail/7#"),
    Array("星星", "#fUI/UIWindowGL/FeedbackSystem/Star#"),
    Array("藍星", "#fEffect/CharacterEff/1003393/1/0#"),
    Array("花朵", "#fEffect/CharacterEff/1050334/2/0#"),
    Array("藍星", "#fEffect/CharacterEff/1003393/0/0#"),
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
    Array("聖誕", "#fUI/NameTag/medal/728/w#"),
    Array("聖誕", "#fUI/NameTag/medal/728/c#"),
    Array("聖誕", "#fUI/NameTag/medal/728/e#"),
    Array("紅鉆", "#fUI/UIWindowPL/DuoEvent/Maximum/DuoInfo/icon/GoodF/0#"),
    Array("王冠", "#fUI/NameTag/medal/468/w#"),
    Array("王冠", "#fUI/NameTag/medal/468/c#"),
    Array("王冠", "#fUI/NameTag/medal/468/e#"),
    Array("方框", "#fUI/UIWindow.img/Item/New/inventory/0#"),
    Array("方框", "#fUI/UIWindow.img/Item/activeExpChairIcon#"),
    Array("箭頭", "#fUI/Basic.img/icon/arrow#"),
    Array("笑臉", "#fEtc/ItemPotLifeInfo/1000/state/good/0#"),
    Array("確認", "#fUI/CashShop.img/CSCoupon/BtOK/normal/0#"),
    Array("確認", "#fUI/CashShop.img/CSCoupon/BtOK/disabled/0#"),
    Array("睡臉", "#fEtc/ItemPotLifeInfo/1000/state/sleep/0#")

);
var ltz45 = "#fMap/MapHelper.img/weather/starPlanet2/5#";  //
var ltz46 = "#fUI/UIWindow8.img/restaurantREDmini/stackNo/2#";  //
var ltz47 = "#fUI/Basic.img/ItemNo/+#";  //
var ltz48 = "#fUI/Basic.img/icon/delivery#";  //
var ltz49 = "#fUI/AutoPvP.img/timer/num/3#";  //
//var a3 = "#fEffect/ItemEff/1070069/effect/walk1/2#"
txt = "    "+a3+"#fs30##fc0xFFFF4EFF#【小空測ui圖用】"+a3+"#fs20##n#l\r\n";
//txt += "#b累計餘額:#b" + getLeiji() + " 當前餘額:"+getHyPay()+"\r\n";
//txt += "#b樂豆:[#r" + player.getCashShopCurrency(1) + "#b]  楓點:[#r" + player.getCashShopCurrency(2) + "#b]  楓幣:[#r" + player.getMeso() + "#b]\r\n";
txt += "#k#e";
txt += "#L22#" + ltz46 + ltz46 + ltz46 + ltz46 + ltz46 + ltz46 + ltz46 + ltz46 + ltz46 + ltz46 + ltz46 + ltz46 +"#b11#l#L0#"+ltz47+"22#l#L1#" + ltz48 + "33#l#L11#" + ltz49 + "44#l\r\n";
txt += "#L5#" + ltz46 + "11#l#L6#" + ltz47 + "22#l#L855#" + ltz48 + "33#l#L16#" + ltz49 + "44#l\r\n";
txt += "";
txt += "#L3#" + ltz46 + "#b轉職中心#l#L19#" + ltz47 + "突破中心#l#L31#" + ltz48 + "#g強者之路#b#l#L8#" + ltz49 + "兌換中心#l\r\n";
//txt += "	   \t#L12#" + n2 + " 打開倉庫#l#k\r\n\r\n";
txt += "#L32#" + ltz46 + "外觀系列#l#L17#" + ltz47 + "特色玩法#l#L18#" + ltz48 + "背包整理#l#L10#" + ltz49 + "萌獸戰地#l\r\n";
txt += "#L15#" + ltz46 + "帳戶資訊#l#L23#" + ltz47 + "玩家排行#l#L33#" + ltz48 + "購物中心#l#L34#" + ltz49 + "轉蛋中心#l\r\n";
if (player.isGm()  ){
	txt += "";
}


txt += "\t";
//txt += "#L944#" + ltz45 + " boss掉落#l#L945#" + ltz45 + " boss事件#l";
let selection=npc.askMenuA(txt,true);

            switch (selection) {
				case 944:
				
					player.runScript( "BOSSCHECK");
                    break;
				case 945:
				
					player.runScript( "BOSSEVENT");
                    break;
				case 0:
				
					player.runScript( "chuansong");
                    break;
                case 1:
                    player.runScript( "dengji1001");
                    break;
                case 2:
                    player.runScript("強者之路");
                    break;
				case 3:
					player.runScript("zzxt");
				break;
                case 4:
				if(!player.isQuestCompleted(6500)){
					player.completeQuest(6500,0);
				}
				player.changeMap(104000000);                    
                    break;
                case 5:
                    
                    player.runScript("rczx");
                    break;

                case 6:
                    
                    player.runScript("zxjl");
                    break;

                case 7:
                    player.runScript("zxdz");
                    break;

                case 8:
                    
                    player.runScript("兌換中心");
                    break;

                case 9:
                    
                    player.runScript("shop");
                    break;

                case 10:
                    
                    player.runScript("card");
                    break;

                case 11:
                    
                    player.runScript("buff");
                    break;

                case 12:
                    npc.sendStorage(9030100);
                    break;

                case 13:
                    
                    player.runScript("超值禮包");
                    break;

                case 14:
                    
                    player.runScript( "yjhg");
                    break;

                case 15:
                    
                    player.runScript( "個人信息");
                    break;

                case 16:
                    
                    player.runScript( "會員中心");
                    break;

                case 17:
                    
                    player.runScript( "tsxt");
                    break;

                case 18:
                    
                    player.runScript( "yjsc");
                    break;

                case 19:
                    
                    player.runScript("wqpg");
                    break;
					
				case 20://
                    
					player.runScript("活動暫停");
					break;
					
				case 21:
                    
                    player.runScript( "余額禮包商店");
                    break;
				case 22:
                    
                    player.runScript( "bosswarp");
                    break;	
				case 23:
                    player.runScript("排行榜");
                    break;	
				case 24:
				    player.runScript("強化中心");
                    break;
				case 25:
				    player.runScript("製作中心");
                    break;
				case 31:
				    player.runScript("強化中心2");
                    break;
				case 32:
				    player.runScript("自選中心");
                    break;
				case 911:
                    
                    player.runScript("裝備評分");
                    break;
				case 912:
                    
                    player.runScript( "個人信息");
                    break;
				case 913:
					//cm.sendOk("暫時關閉.");
                    
                    player.runScript( "門派相爭");
                    break;
				case 914:
                    
                    player.runScript( "裝備制作中心");
                    break;
				case 1111:
                    
                    player.runScript( "國慶節活動地圖");
                    break;
				case 1112:
                    player.runScript("payurl");
                    break;
				case 1113:
                    
                    player.runScript( "yjsc");
                    break;
				case 789:
                    
                    player.runScript( "libao");
                    break;
				case 1001:
                    
                    player.changeMap(993120400);
                    break;
				
            }


function getLeiji() {
	var sql = "select leiji from hypay where accountid = ? ";
	var result = player.customSqlResult(sql, player.getAccountId());
	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("leiji");
		}
	} else {
		return 0;
	}

}

function getHyPay() {

	var result = player.customSqlResult("select pay from hypay where accountId=?", player.getAccountId());

	return result.isEmpty() ? 0 : result[0].pay

}


