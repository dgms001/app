//抽的物品
let items = [
  2631080,
  2631081,
  2631082,
  2631083,
  2631084,
  2631085,
  2631086,
  2631087,
  2631088,
  2631089,
  2631195,
  2631196,
  2631197,
  2631198,
  2631199,
  2631200,
  2631201,
  2631202,
  2631203,
  2631204,
  2631205,
  2631206,
  2631207,
  2631208,
  2631209,
  2631210,
  2631211,
  2631212,
  2631237,
  2631238,
  2631239,
  2631240,
  2631241,
  2631242,
  2631243,
  2631244,
  2631245,
  2631246,
  2631429,
  2631430,
  2631529,
  2631530,
  2631670,
  2631671,
  2631672,
  2631673,
  2631674,
  2632071,
  2632072,
  2632073,
  2632074,
  2632075,
  2632142,
  2632386,
  2632387,
  2632388,
  2632389,
  2632390,
  2632391,
  2632689,
  2632690,
  2632691,
  2632692,
  2632693,
  2632694,
  2632703,
  2632753,
  2632754,
  2632979,
  2632980,
  2632981,
  2632982,
  2632983,
  2632984,
  2632985,
  2632986,
  2632988,
  2632989,
  2633279,
  2633280,
  2633281,
  2633282,
  2633283,
  2633284,
  2633737,
  2633738,
  2633739,
  2633740,
  2633741,
  2633742,
  2634067,
  2634068,
  2634069,
  2634070,
  2634071,
  2634072
];
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



let boxId = 2438532;//箱子ID
let mapA = map.getId();
if (mapA == 993001100) { //限制開啟地圖
  //player.showSystemMessage("在卡BUG頭蓋骨給你打出來 操!!");
} else {
  txt = "\t" + Icon[17][1] + "#fs20##fc0xFF00caf2#貼圖抽獎" + Icon[17][1] + "#r#n\r\n";
  txt += "" + Icon[43][1] + Icon[44][1] + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1]
    + Icon[51][1] + Icon[52][1] + Icon[53][1] + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[43][1] + Icon[44][1]
    + Icon[45][1] + Icon[46][1] + Icon[47][1] + Icon[48][1] + Icon[49][1] + Icon[50][1] + Icon[51][1] + Icon[52][1] + Icon[53][1]
    + Icon[54][1] + Icon[55][1] + Icon[56][1] + Icon[57][1] + Icon[47][1] + Icon[44][1] + "\r\n";
  txt += "#fs11##b";
  txt += "\t\t#b 已實裝90+貼圖,希望你能抽到自己喜歡的!!";
  txt += "\r\n\t\t\t\t\t\t\t\t\t\t是否使用？";
}
let YN = npc.askYesNo(txt);
if (YN == 1) {
  if (player.hasItem(boxId, 1)) {
    let ran = Math.floor(Math.random() * items.length);
    if (player.getFreeSlots(2) > 1) {
      //player.setSkillLevel(, 1, 1, false);
      player.gainItem(items[ran], 1);
      player.loseItem(boxId, 1);
      npc.broadcastPlayerNotice(37, "『貼圖抽抽樂』：玩家 " + player.getName() + " 在獎池抽到了一個可愛的聊天貼圖。");
      npc.say("#v" + items[ran] + "# - 舒服了", true);//坐騎學習騎寵
    } else {
      npc.say("消耗欄不足一格,請清理後再試");
    }
  } else {

    npc.say("你沒有#v" + boxId + "#");
  }
} else {
  npc.say("不想使用嗎？下次再見。");
}
/*let Skills = Array(2430933,80001014,
);
if (player.getSkillLevel​(Skills[1]) == 0){
player.setSkillLevel(Skills[1], 1, 1, false);
player.loseItem(Skills[0], 1);
npc.sayS("#s"+Skills[1]+"# - 我學會騎#b#fs14# #q"+Skills[1]+"# #k#fs12#了",true);//坐騎學習騎寵
} else if (player.getSkillLevel​(Skills[1]) > 0){
npc.sayS("我曾經學過騎#b#fs14# #q"+Skills[1]+"# #k#fs12#了，你忘了嗎？",true);
}/*
/**
* 箱子抽取道具 
**/